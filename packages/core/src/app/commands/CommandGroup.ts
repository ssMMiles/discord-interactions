import { CommandGroupBuilder } from "@discord-interactions/builders";
import { AutocompleteContext, Component, Modal, SlashCommandContext } from "../index.js";
import { CommandManager } from "../managers/CommandManager.js";
import { RegisteredDiscordCommand } from "./Base.js";
import { ICommand } from "./index.js";

export interface ISubcommandHandler {
  handler: (ctx: SlashCommandContext) => Promise<void>;
  autocompleteHandler?: (ctx: AutocompleteContext) => Promise<void>;
}

export type ISubcommandGroup = Record<string, ISubcommandHandler>;

export type ISubcommandHandlers = Record<string, ISubcommandGroup | ISubcommandHandler>;

export interface ICommandGroup {
  builder: CommandGroupBuilder;
  handlers: ISubcommandHandlers;

  components?: (Component | Modal)[];
}

export class CommandGroup implements ICommandGroup {
  public builder: CommandGroupBuilder;
  public handlers: ISubcommandHandlers;

  constructor(builder: CommandGroupBuilder, handlers: ISubcommandHandlers, components: Component[] = []) {
    this.builder = builder;
    this.handlers = handlers;

    this.components = components;
  }

  public components: (Component | Modal)[];

  setHandlers(handlers: ISubcommandHandlers): this {
    this.handlers = handlers;

    return this;
  }
}

export class RegisteredCommandGroup extends RegisteredDiscordCommand<CommandGroupBuilder> {
  public handlers: Record<string, ISubcommandHandler | ISubcommandGroup>;
  constructor(manager: CommandManager, command: { builder: CommandGroupBuilder; handlers: ISubcommandHandlers }) {
    super(manager, command);

    this.handlers = command.handlers;
  }

  /**
   * Update this command's handler function
   * @param handler New command handler
   */
  setHandlers(handler: ISubcommandHandlers): void {
    this.handlers = handler;
  }
}

export function isCommandGroup(command: ICommand): command is ICommandGroup {
  return "handlers" in command;
}
