import type { APIApplicationCommand, RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { ApplicationCommandType, Routes } from "discord-api-types/v10";
import { DiscordApplication } from "../DiscordApplication.js";
import {
  ICommand,
  IMessageCommand,
  isCommandGroup,
  ISlashCommand,
  IUserCommand,
  RegisteredCommand,
  RegisteredCommandGroup,
  RegisteredMessageCommand,
  RegisteredSlashCommand,
  RegisteredUserCommand
} from "../index.js";

export interface APIApplicationSlashCommand extends APIApplicationCommand {
  type: ApplicationCommandType.ChatInput;
}

export interface APIApplicationUserCommand extends APIApplicationCommand {
  type: ApplicationCommandType.User;
}

export interface APIApplicationMessageCommand extends APIApplicationCommand {
  type: ApplicationCommandType.Message;
}

export interface ParsedCommands {
  [ApplicationCommandType.ChatInput]: Map<string, APIApplicationSlashCommand>;
  [ApplicationCommandType.Message]: Map<string, APIApplicationUserCommand>;
  [ApplicationCommandType.User]: Map<string, APIApplicationMessageCommand>;
}

export type MappedCommandTypes = {
  [ApplicationCommandType.ChatInput]: RegisteredSlashCommand | RegisteredCommandGroup;
  [ApplicationCommandType.Message]: RegisteredMessageCommand;
  [ApplicationCommandType.User]: RegisteredUserCommand;
};

/**
 * Manager for your application's commands. Lets you register fully handled commands as well as exposes methods for managing your commands on the API side.
 */
export class CommandManager {
  public [ApplicationCommandType.ChatInput]: Map<string, RegisteredSlashCommand | RegisteredCommandGroup> = new Map();
  public [ApplicationCommandType.User]: Map<string, RegisteredUserCommand> = new Map();
  public [ApplicationCommandType.Message]: Map<string, RegisteredMessageCommand> = new Map();

  public manager: DiscordApplication;

  public clientId: string;
  public guildId?: string;

  constructor(manager: DiscordApplication, guildId?: string) {
    this.manager = manager;
    this.clientId = manager.clientId;

    if (guildId !== undefined) {
      this.guildId = guildId;
      this.manager.guildCommands.set(this.guildId, this);
    }
  }

  private route() {
    return this.guildId === undefined
      ? Routes.applicationCommands(this.clientId)
      : Routes.applicationGuildCommands(this.clientId, this.guildId);
  }

  private commandRoute(id: string) {
    return this.guildId === undefined
      ? Routes.applicationCommand(this.clientId, id)
      : Routes.applicationGuildCommand(this.clientId, this.guildId, id);
  }

  private parse(commands: APIApplicationCommand[]): ParsedCommands {
    const parsed = {
      [ApplicationCommandType.ChatInput]: new Map(),
      [ApplicationCommandType.User]: new Map(),
      [ApplicationCommandType.Message]: new Map()
    };

    commands.map((command) => parsed[command.type].set(command.name, command));

    return parsed;
  }

  /**
   * Check whether a command is registered
   * @param name Command name
   * @param type Command type
   */
  has(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): boolean {
    return this[type].has(name);
  }

  /**
   * Fetch a registered command
   * @param name Command name
   * @param type Command type
   */
  get(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): RegisteredCommand | undefined {
    return this[type].get(name);
  }

  set(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput, command: RegisteredCommand): void {
    this[type].set(name, command as never);
  }

  /**
   * Rename a registered command
   * @param oldName Old name
   * @param newName New Name
   * @param type Command type
   */
  rename(oldName: string, newName: string, type: ApplicationCommandType): void {
    const command = this[type].get(oldName);

    if (!command) throw new Error(`Command ${oldName} does not exist`);

    this[type].delete(oldName);
    this[type].set(newName, command as never);
  }

  /**
   * Register a new command to be handled. This will create the command on Discord if it doesn't exist, or overwrite it if the existing remote version differs.
   */
  async register(...commands: ICommand[]): Promise<RegisteredCommand[]> {
    const remoteCommands = this.parse(await this.manager.rest.getApplicationCommands(this.clientId));
    const registeredCommands: RegisteredCommand[] = [];

    for (const command of commands) {
      if (command.components) {
        for (const component of command.components) {
          component.parentCommand = command.builder.name;
          component.setId(`${component.parentCommand}.${component.id}`);
        }

        this.manager.components.register(...command.components);
      }

      let result = remoteCommands[command.builder.type].get(command.builder.name);

      if (result !== undefined) {
        if (!command.builder.equals(result as never)) {
          result = await this.manager.rest.patchApplicationCommand(this.clientId, result.id, command.builder.toJSON());

          if (!result) throw new Error("Command failed to register. (Was Overwriting)");
        }
      } else {
        result = await this.manager.rest.postApplicationCommand(this.clientId, command.builder.toJSON());

        if (!result) throw new Error("Command failed to register.");
      }

      let registeredCommand;

      switch (command.builder.type) {
        case ApplicationCommandType.ChatInput:
          registeredCommand = isCommandGroup(command)
            ? new RegisteredCommandGroup(this, command, result.id)
            : new RegisteredSlashCommand(this, command as ISlashCommand, result.id);
          break;
        case ApplicationCommandType.User:
          registeredCommand = new RegisteredUserCommand(this, command as IUserCommand, result.id);
          break;
        case ApplicationCommandType.Message:
          registeredCommand = new RegisteredMessageCommand(this, command as IMessageCommand, result.id);
          break;
        default:
          throw new Error(`Unknown command type.`);
      }

      this[command.builder.type].set(command.builder.name, registeredCommand as never);
      registeredCommands.push(registeredCommand);
    }

    return registeredCommands;
  }

  /**
   * Unregister a command from this client
   * @param name Command name
   * @param type Command type
   * @param deleteCommand Whether to also delete this command from Discord (default: false)
   */
  async unregister(
    name: string,
    type: ApplicationCommandType = ApplicationCommandType.ChatInput,
    deleteCommand = false
  ) {
    const command = this.get(name, type);
    if (!command) throw new Error("Command isn't registered.");

    this[type].delete(name);
    if (deleteCommand) await this.manager.rest.deleteApplicationCommand(this.clientId, command.id);
  }

  /** Deletes remote commands that aren't registered with this command manager */
  async deleteUnregistered() {
    const commands = this.parse(await this.manager.rest.getApplicationCommands(this.clientId));

    for (const [localCommands, remoteCommands] of [
      [this[ApplicationCommandType.ChatInput], commands[ApplicationCommandType.ChatInput]],
      [this[ApplicationCommandType.User], commands[ApplicationCommandType.User]],
      [this[ApplicationCommandType.Message], commands[ApplicationCommandType.Message]]
    ]) {
      for (const [name, command] of remoteCommands) {
        if (!localCommands.has(name)) {
          await this.manager.rest.deleteApplicationCommand(this.clientId, command.id);
        }
      }
    }
  }

  /**
   * Get an array of API command objects for all registered commands
   */
  toAPICommands(): RESTPostAPIApplicationCommandsJSONBody[] {
    const commandData: RESTPostAPIApplicationCommandsJSONBody[] = [];

    for (const command of [
      ...this[ApplicationCommandType.ChatInput].values(),
      ...this[ApplicationCommandType.User].values(),
      ...this[ApplicationCommandType.Message].values()
    ]) {
      commandData.push(command.builder.toJSON());
    }

    return commandData;
  }
}
