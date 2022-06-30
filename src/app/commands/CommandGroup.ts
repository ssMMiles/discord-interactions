import { ICommand } from "../..";
import { CommandGroupBuilder } from "../../builders/commands/CommandGroupBuilder";
import { AutocompleteContext, SlashCommandContext } from "../../contexts";
import { Component } from "../components";
import { CommandManager } from "../managers/CommandManager";

export interface ISubcommandHandler {
  handler: (ctx: SlashCommandContext) => Promise<void>;
  autocompleteHandler?: (ctx: AutocompleteContext) => Promise<void>;
}

export type ISubcommandGroup = Record<string, ISubcommandHandler>;

export type ISubcommandHandlers = Record<string, ISubcommandGroup | ISubcommandHandler>;

export interface ICommandGroup {
  builder: CommandGroupBuilder;
  handlers: ISubcommandHandlers;

  components?: Component[];
}

export class CommandGroup implements ICommandGroup {
  public builder: CommandGroupBuilder;
  public handlers: ISubcommandHandlers;

  constructor(builder: CommandGroupBuilder, handlers: ISubcommandHandlers, components: Component[] = []) {
    this.builder = builder;
    this.handlers = handlers;

    this.components = components;
  }

  public components: Component[];

  setHandlers(handlers: ISubcommandHandlers): this {
    this.handlers = handlers;

    return this;
  }
}

export class RegisteredCommandGroup {
  private manager: CommandManager;
  private lastSync: ReturnType<typeof this.builder.toJSON>;

  public builder: CommandGroupBuilder;
  public handlers: Record<string, ISubcommandHandler | ISubcommandGroup>;

  public id: string;

  constructor(
    manager: CommandManager,
    command: { builder: CommandGroupBuilder; handlers: ISubcommandHandlers },
    id: string
  ) {
    this.manager = manager;

    this.builder = command.builder;
    this.handlers = command.handlers;

    this.id = id;

    this.lastSync = this.builder.toJSON();
  }

  /**
   * Update this command's handler function
   * @param handler New command handler
   */
  setHandlers(handler: ISubcommandHandlers): void {
    this.handlers = handler;
  }

  /**
   * Sync this command's builder with the API
   */
  async sync(): Promise<void> {
    const data = this.builder.toJSON();

    if (data.name !== this.lastSync.name) {
      this.manager.rename(this.lastSync.name, data.name, this.builder.type);
    }

    await this.manager.updateAPICommand(data, this.id);

    this.lastSync = data;
  }

  /** Unregister this command */
  async unregister(): Promise<void> {
    await this.manager.unregister(this.builder.name, this.builder.type);
  }

  /**
   * Delete and unregister this command
   */
  async delete(): Promise<void> {
    await this.manager.unregister(this.builder.name, this.builder.type, true);
  }
}

export function isCommandGroup(command: ICommand): command is ICommandGroup {
  return "handlers" in command;
}
