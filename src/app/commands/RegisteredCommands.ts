import { MessageCommandBuilder, SlashCommandBuilder, UserCommandBuilder } from "../../builders/commands";
import { AutocompleteContext, MessageCommandContext, SlashCommandContext, UserCommandContext } from "../../contexts";
import { CommandManager } from "../managers/CommandManager";
import { RegisteredCommandGroup } from "./CommandGroup";

export abstract class RegisteredCommandBase<
  Builder extends SlashCommandBuilder | UserCommandBuilder | MessageCommandBuilder,
  Context extends SlashCommandContext | UserCommandContext | MessageCommandContext
> {
  private manager: CommandManager;
  private lastSync: ReturnType<typeof this.builder.toJSON>;

  public builder: Builder;
  public handler: (ctx: Context) => Promise<void>;

  public id: string;

  constructor(
    manager: CommandManager,
    command: { builder: Builder; handler: (ctx: Context) => Promise<void> },
    id: string
  ) {
    this.manager = manager;

    this.builder = command.builder;
    this.handler = command.handler;

    this.id = id;

    this.lastSync = this.builder.toJSON();
  }

  /**
   * Update this command's handler function
   * @param handler New command handler
   */
  setHandler(handler: (ctx: Context) => Promise<void>): void {
    this.handler = handler;
  }

  /**
   * Sync this command's builder with the API
   */
  async sync(): Promise<void> {
    const data = this.builder.toJSON();

    if (data.name !== this.lastSync.name) {
      this.manager.rename(this.lastSync.name, data.name);
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

export class RegisteredSlashCommand extends RegisteredCommandBase<SlashCommandBuilder, SlashCommandContext> {
  public autocompleteHandler = async (ctx: AutocompleteContext) => {
    ctx.reply([]);
  };

  public setAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;

    return this;
  }
}

export class RegisteredUserCommand extends RegisteredCommandBase<UserCommandBuilder, UserCommandContext> {}

export class RegisteredMessageCommand extends RegisteredCommandBase<MessageCommandBuilder, MessageCommandContext> {}

export type RegisteredCommand =
  | RegisteredSlashCommand
  | RegisteredUserCommand
  | RegisteredMessageCommand
  | RegisteredCommandGroup;
