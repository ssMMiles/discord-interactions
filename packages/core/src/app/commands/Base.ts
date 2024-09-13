import {
  CommandGroupBuilder,
  CommandGroupData,
  MessageCommandBuilder,
  MessageCommandData,
  SlashCommandBuilder,
  SlashCommandData,
  UserCommandBuilder,
  UserCommandData
} from "@discord-interactions/builders";
import { Component, MessageCommandContext, Modal, SlashCommandContext, UserCommandContext } from "../index.js";

import { APIApplicationCommand } from "discord-api-types/v10";
import { CommandManager } from "../managers/CommandManager.js";
import { Snowflake } from "discord-api-types/globals";

type CommandDataTypes = CommandGroupData | UserCommandData | MessageCommandData | SlashCommandData;

export interface ICommandBase<Builder, Context> {
  builder: Builder;

  handler: (ctx: Context) => Promise<void>;

  components?: (Component | Modal)[];
}

export abstract class RegisteredDiscordCommand<
  Builder extends SlashCommandBuilder | CommandGroupBuilder | MessageCommandBuilder | UserCommandBuilder
> {
  private manager: CommandManager;

  private lastSync?: ReturnType<typeof this.builder.toJSON>;
  public lastSyncedAt?: Date;

  public builder: Builder;

  public components?: (Component | Modal)[];

  public id: Snowflake = "0";

  constructor(manager: CommandManager, command: { builder: Builder }) {
    this.manager = manager;

    this.builder = command.builder;
  }

  private synced(data: CommandDataTypes | ReturnType<Builder["toJSON"]>): void {
    // console.log`Command Sync Success: ${data.name}.`);

    this.lastSync = data;
    this.lastSyncedAt = new Date();
  }

  /**
   * Create this command in Discord
   */
  async create(): Promise<void> {
    const data = this.builder.toJSON();

    if (this.id !== "0") {
      throw new Error("This command already seems to be registered, use sync() instead.");
    }

    const command = await this.manager.postCommand(data);
    this.id = command.id;

    // console.log`Command Created: ${data.name}(${this.id})`);

    this.synced(data);
  }

  async update(id?: Snowflake): Promise<void> {
    const data = this.builder.toJSON();
    // console.log`Command Updated: ${data.name}`);

    if (this.id === "0" && !id) {
      throw new Error("This command has not been synced, so you must provide an ID to update it.");
    }

    const command = await this.manager.patchCommand(id ?? this.id, data);

    this.id = command.id;
    this.synced(data);
  }

  /**
   * Delete this command from Discord
   */
  async delete(id?: Snowflake): Promise<void> {
    // console.log`Command Deleted: ${this.lastSync?.name ?? this.builder.name}`);

    if (this.id === "0" && !id) {
      throw new Error("This command has not been synced, so you must provide an ID to delete it.");
    }

    await this.manager.deleteCommand(id ?? this.id);

    this.id = "0";
  }

  /**
   * Sync this command with Discord
   */
  async sync(remoteCommand?: APIApplicationCommand): Promise<void> {
    const data = this.builder.toJSON();
    // console.log`Command Sync Starting: ${data.name}`);

    if (this.id === "0") {
      // Create command if doesn't exist and no remote command is provided.
      if (remoteCommand === undefined) return this.create();

      // If a remote command is provided, take on its ID
      this.id = remoteCommand.id;
    }

    let nameChanged = false;

    if (remoteCommand && !this.builder.equals(remoteCommand as never)) {
      // console.log"Command Sync: Remote differs from current command.");

      if (remoteCommand.id !== this.id) {
        throw new Error("This command is registered under a different ID to your remote version.");
      }

      if (remoteCommand.name !== data.name && this.manager.has(remoteCommand.name, this.builder.type)) {
        nameChanged = true;
        this.manager.rename(remoteCommand.name, data.name, this.builder.type);

        // console.log`Command Name Changed: ${remoteCommand.name} -> ${data.name}`);
      }
    } else if (this.lastSync && !this.builder.equals(this.lastSync as never)) {
      // console.log"Command Sync: Last sync differs from current command.");
      if (data.name !== this.lastSync.name && this.manager.has(this.lastSync.name, this.builder.type)) {
        nameChanged = true;
        this.manager.rename(this.lastSync.name, data.name, this.builder.type);

        // console.log`Command has changed name, updating local: ${this.lastSync.name} -> ${data.name}`);
      }
    } else {
      return this.synced(data);
    }

    if (nameChanged) {
      await this.delete();
      await this.create();
    } else {
      // Update command if local version differs
      await this.update();
    }
  }
}

export abstract class RegisteredCommandBase<
    Builder extends SlashCommandBuilder | UserCommandBuilder | MessageCommandBuilder,
    Context extends SlashCommandContext | UserCommandContext | MessageCommandContext
  >
  extends RegisteredDiscordCommand<Builder>
  implements ICommandBase<Builder, Context>
{
  public handler: (ctx: Context) => Promise<void>;

  constructor(manager: CommandManager, command: { builder: Builder; handler: (ctx: Context) => Promise<void> }) {
    super(manager, command);

    this.handler = command.handler;
  }

  /**
   * Update this command's handler function
   * @param handler New command handler
   */
  setHandler(handler: (ctx: Context) => Promise<void>): void {
    this.handler = handler;
  }
}
