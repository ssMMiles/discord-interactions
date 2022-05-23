import {
  APIApplicationCommand,
  ApplicationCommandType,
  RESTPostAPIApplicationCommandsJSONBody,
  Routes
} from "discord-api-types/v10";
import { DiscordApplication, MessageCommand, SlashCommand, UserCommand } from "../..";
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
} from "../commands";

export interface APIApplicationSlashCommand extends APIApplicationCommand {
  type: ApplicationCommandType.ChatInput;
}

export interface APIApplicationUserCommand extends APIApplicationCommand {
  type: ApplicationCommandType.User;
}

export interface APIApplicationMessageCommand extends APIApplicationCommand {
  type: ApplicationCommandType.Message;
}

export type MappedCommandTypes = {
  [ApplicationCommandType.ChatInput]: SlashCommand;
  [ApplicationCommandType.Message]: MessageCommand;
  [ApplicationCommandType.User]: UserCommand;
};

export interface ParsedCommands {
  slash: Map<string, APIApplicationSlashCommand>;
  user: Map<string, APIApplicationUserCommand>;
  message: Map<string, APIApplicationMessageCommand>;
}

/**
 * Manager for your application's commands. Lets you register fully handled commands as well as exposes methods for managing your commands on the API side.
 */
export class CommandManager {
  public slash: Map<string, RegisteredCommandGroup | RegisteredSlashCommand> = new Map();
  public user: Map<string, RegisteredUserCommand> = new Map();
  public message: Map<string, RegisteredMessageCommand> = new Map();

  private manager: DiscordApplication;

  private guildId?: string;

  constructor(manager: DiscordApplication, guildId?: string) {
    this.manager = manager;

    if (guildId !== undefined) {
      this.guildId = guildId;
      this.manager.guildCommands.set(this.guildId, this);
    }
  }

  private route() {
    return this.guildId === undefined
      ? Routes.applicationCommands(this.manager.clientId)
      : Routes.applicationGuildCommands(this.manager.clientId, this.guildId);
  }

  private commandRoute(id: string) {
    return this.guildId === undefined
      ? Routes.applicationCommand(this.manager.clientId, id)
      : Routes.applicationGuildCommand(this.manager.clientId, this.guildId, id);
  }

  private _commands(type: ApplicationCommandType): Map<string, RegisteredCommand> {
    switch (type) {
      case ApplicationCommandType.ChatInput:
        return this.slash;
      case ApplicationCommandType.User:
        return this.user;
      case ApplicationCommandType.Message:
        return this.message;
    }
  }

  private parse(commands: APIApplicationCommand[]): ParsedCommands {
    const parsed = {
      slash: new Map(),
      user: new Map(),
      message: new Map()
    };

    for (const command of commands) {
      switch (command.type) {
        case ApplicationCommandType.ChatInput:
          parsed.slash.set(command.name, command);
          break;
        case ApplicationCommandType.User:
          parsed.user.set(command.name, command);
          break;
        case ApplicationCommandType.Message:
          parsed.message.set(command.name, command);
          break;
      }
    }

    return parsed;
  }

  /**
   * Check whether a command is registered
   * @param name Command name
   * @param type Command type
   */
  has(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): boolean {
    return this._commands(type).has(name);
  }

  /**
   * Fetch a registered command
   * @param name Command name
   * @param type Command type
   */
  get(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): RegisteredCommand | undefined {
    return this._commands(type).get(name);
  }

  /**
   * Rename a registered command
   * @param oldName Old name
   * @param newName New Name
   * @param type Command type
   */
  rename(oldName: string, newName: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): void {
    const command = this.get(oldName, type);

    if (!command) throw new Error(`Command ${oldName} does not exist`);

    this._commands(type).delete(oldName);
    this._commands(type).set(newName, command);
  }

  /**
   * Register a new command to be handled. This will also create the command on Discord if it doesn't exist, or overwrite it if it does.
   * @param commands An array of Commands
   * @param overwrite Whether to overwrite existing commands when syncing with Discord (default: false)
   */
  async register(commands: ICommand[], overwrite = true): Promise<RegisteredCommand[]> {
    const remoteCommands = this.parse(await this.getAPICommands());
    const registeredCommands: RegisteredCommand[] = [];

    for (const command of commands) {
      if (command.components) {
        for (const component of command.components) {
          component.parentCommand = command.builder.name;
        }

        this.manager.components.register(command.components);
      }

      if (command.builder.type === ApplicationCommandType.ChatInput) {
        let result: APIApplicationSlashCommand;

        if (remoteCommands.slash.has(command.builder.name)) {
          result = remoteCommands.slash.get(command.builder.name) as APIApplicationSlashCommand;

          if (overwrite) result = await this.updateAPICommand(command.builder.toJSON(), result.id);
        } else {
          result = await this.putAPICommand(command.builder.toJSON());
        }

        const registeredCommand = isCommandGroup(command)
          ? new RegisteredCommandGroup(this, command, result.id)
          : new RegisteredSlashCommand(this, command as ISlashCommand, result.id);

        this.slash.set(command.builder.name, registeredCommand);
        registeredCommands.push(registeredCommand);
      }

      if (command.builder.type === ApplicationCommandType.User) {
        let result: APIApplicationUserCommand;

        if (remoteCommands.user.has(command.builder.name)) {
          result = remoteCommands.user.get(command.builder.name) as APIApplicationUserCommand;

          if (overwrite) result = await this.updateAPICommand(command.builder.toJSON(), result.id);
        } else {
          result = await this.putAPICommand(command.builder.toJSON());
        }

        const registeredCommand = new RegisteredUserCommand(this, command as IUserCommand, result.id);

        this.user.set(command.builder.name, registeredCommand);
        registeredCommands.push(registeredCommand);
      }

      if (command.builder.type === ApplicationCommandType.Message) {
        let result: APIApplicationMessageCommand;

        if (remoteCommands.message.has(command.builder.name)) {
          result = remoteCommands.message.get(command.builder.name) as APIApplicationMessageCommand;

          if (overwrite) result = await this.updateAPICommand(command.builder.toJSON(), result.id);
        } else {
          result = await this.putAPICommand(command.builder.toJSON());
        }

        const registeredCommand = new RegisteredMessageCommand(this, command as IMessageCommand, result.id);

        this.message.set(command.builder.name, registeredCommand);
        registeredCommands.push(registeredCommand);
      }
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

    this._commands(type).delete(name);
    if (deleteCommand) await this.deleteAPICommand(command.id);
  }

  /** Deletes remote commands that aren't registered with this command manager */
  async deleteUnregistered() {
    const remoteCommands = this.parse(await this.getAPICommands());

    for (const [name, command] of remoteCommands.slash) {
      if (!this.slash.has(name)) await this.deleteAPICommand(command.id);
    }

    for (const [name, command] of remoteCommands.user) {
      if (!this.user.has(name)) await this.deleteAPICommand(command.id);
    }

    for (const [name, command] of remoteCommands.user) {
      if (!this.message.has(name)) await this.deleteAPICommand(command.id);
    }
  }

  /**
   * Get an array of API command objects for all registered commands
   */
  toAPICommands(): RESTPostAPIApplicationCommandsJSONBody[] {
    const commandData = [];

    for (const command of [...this.slash.values(), ...this.user.values(), ...this.message.values()]) {
      commandData.push(command.builder.toJSON());
    }

    return commandData;
  }

  /**
   * Fetch your application's commands
   * @param withLocalizations Whether to include full localization dictionaries (name_localizations and description_localizations) in the returned objects, instead of the name_localized and description_localized fields. Default false.
   */
  getAPICommands(withLocalizations = true): Promise<APIApplicationCommand[]> {
    return this.manager.rest.get(this.route(), {
      query: new URLSearchParams(`with_localizations=${withLocalizations ? "true" : "false"}`)
    }) as Promise<APIApplicationCommand[]>;
  }

  /**
   * Bulk update your application's commands
   */
  putAPICommands(data: RESTPostAPIApplicationCommandsJSONBody[]): Promise<APIApplicationCommand[]> {
    return this.manager.rest.put(this.route(), {
      body: data
    }) as Promise<APIApplicationCommand[]>;
  }

  /**
   * Create or Update an Application Command
   */
  putAPICommand<T extends APIApplicationCommand>(data: RESTPostAPIApplicationCommandsJSONBody): Promise<T> {
    return this.manager.rest.post(this.route(), {
      body: data
    }) as Promise<T>;
  }

  /**
   * Update an Application Command
   */
  updateAPICommand<T extends APIApplicationCommand>(
    data: RESTPostAPIApplicationCommandsJSONBody,
    id: string
  ): Promise<T> {
    delete data.type;

    return this.manager.rest.patch(this.commandRoute(id), {
      body: data
    }) as Promise<T>;
  }

  /**
   * Delete an Application Command
   */
  async deleteAPICommand(id: string): Promise<void> {
    await this.manager.rest.delete(this.commandRoute(id));

    return;
  }
}
