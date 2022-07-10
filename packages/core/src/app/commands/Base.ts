import { MessageCommandBuilder, SlashCommandBuilder, UserCommandBuilder } from "@discord-interactions/builders";
import { Component, MessageCommandContext, Modal, SlashCommandContext, UserCommandContext } from "../index.js";
import { CommandManager } from "../managers/CommandManager.js";

export interface ICommandBase<Builder, Context> {
  builder: Builder;

  handler: (ctx: Context) => Promise<void>;

  components?: (Component | Modal)[];
}

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
      this.manager.rename(this.lastSync.name, data.name, this.builder.type);
    }

    await this.manager.manager.rest.patchApplicationCommand(this.manager.clientId, this.id, data);

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
