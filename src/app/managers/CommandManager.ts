import {
  APIApplicationCommand,
  ApplicationCommandType,
  RESTPostAPIApplicationCommandsJSONBody,
  Routes
} from "discord-api-types/v10";
import { Command, DiscordApplication, MessageCommand, SlashCommand, UserCommand } from "../..";
import {
  RegisteredCommand,
  RegisteredMessageCommand,
  RegisteredSlashCommand,
  RegisteredUserCommand
} from "../commands/RegisteredCommands";

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

export class CommandManager {
  public slash: Map<string, RegisteredSlashCommand> = new Map();
  public user: Map<string, RegisteredUserCommand> = new Map();
  public message: Map<string, RegisteredMessageCommand> = new Map();

  private manager: DiscordApplication;

  private guildId: string | null;

  constructor(manager: DiscordApplication, guildId: string | null = null) {
    this.manager = manager;

    this.guildId = guildId;
  }

  private route() {
    return this.guildId === null
      ? Routes.applicationCommands(this.manager.clientId)
      : Routes.applicationGuildCommands(this.manager.clientId, this.guildId);
  }

  private commandRoute(id: string) {
    return this.guildId === null
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

  has(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): boolean {
    return this._commands(type).has(name);
  }

  get(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): RegisteredCommand | undefined {
    return this._commands(type).get(name);
  }

  rename(oldName: string, newName: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput): void {
    const command = this.get(oldName, type);

    if (!command) throw new Error(`Command ${oldName} does not exist`);

    this._commands(type).delete(oldName);
    this._commands(type).set(newName, command);
  }

  async register(commands: Command[], sync = true, overwrite = true): Promise<RegisteredCommand[]> {
    const remoteCommands = this.parse(await this.getCommands());
    const registeredCommands: RegisteredCommand[] = [];

    for (const command of commands) {
      if (command instanceof SlashCommand) {
        let result: APIApplicationSlashCommand;

        if (remoteCommands.slash.has(command.data.name) && overwrite) {
          result = remoteCommands.slash.get(command.data.name) as APIApplicationSlashCommand;

          result = await this.updateCommand(command.data, result.id);
        } else if (sync) {
          result = await this.putCommand(command.data);
        } else {
          throw new Error(
            `Sync must be enabled when registering new commands. Your "${command.data.name}" command does not exist.`
          );
        }

        const registeredCommand = new RegisteredSlashCommand(this, command, result.id);

        this.slash.set(command.data.name, registeredCommand);
        registeredCommands.push(registeredCommand);
      }

      if (command instanceof UserCommand) {
        let result: APIApplicationUserCommand;

        if (remoteCommands.user.has(command.data.name) && overwrite) {
          result = remoteCommands.user.get(command.data.name) as APIApplicationUserCommand;

          result = await this.updateCommand(command.data, result.id);
        } else if (sync) {
          result = await this.putCommand(command.data);
        } else {
          throw new Error(
            `Sync must be enabled when registering new commands. Your "${command.data.name}" command does not exist.`
          );
        }

        const registeredCommand = new RegisteredUserCommand(this, command, result.id);

        this.user.set(command.data.name, registeredCommand);
        registeredCommands.push(registeredCommand);
      }

      if (command instanceof MessageCommand) {
        let result: APIApplicationMessageCommand;

        if (remoteCommands.message.has(command.data.name) && overwrite) {
          result = remoteCommands.message.get(command.data.name) as APIApplicationMessageCommand;

          result = await this.updateCommand(command.data, result.id);
        } else if (sync) {
          result = await this.putCommand(command.data);
        } else {
          throw new Error(
            `Sync must be enabled when registering new commands. Your "${command.data.name}" command does not exist.`
          );
        }

        const registeredCommand = new RegisteredMessageCommand(this, command, result.id);

        this.message.set(command.data.name, registeredCommand);
        registeredCommands.push(registeredCommand);
      }
    }

    return registeredCommands;
  }

  async unregister(
    name: string,
    type: ApplicationCommandType = ApplicationCommandType.ChatInput,
    deleteCommand = false
  ) {
    const command = this.get(name, type);
    if (!command) throw new Error("Command isn't registered.");

    this._commands(type).delete(name);
    if (deleteCommand) await this.deleteCommand(command.id);
  }

  /** Removes remote commands that aren't registered with this command manager */
  async removeUnregistered() {
    const remoteCommands = this.parse(await this.getCommands());

    for (const [name, command] of remoteCommands.slash) {
      if (!this.slash.has(name)) await this.deleteCommand(command.id);
    }

    for (const [name, command] of remoteCommands.user) {
      if (!this.user.has(name)) await this.deleteCommand(command.id);
    }

    for (const [name, command] of remoteCommands.user) {
      if (!this.message.has(name)) await this.deleteCommand(command.id);
    }
  }

  toJSON(): RESTPostAPIApplicationCommandsJSONBody[] {
    const commandData = [];

    for (const command of [...this.slash.values(), ...this.user.values(), ...this.message.values()]) {
      commandData.push(command.builder.toJSON());
    }

    return commandData;
  }

  getCommands(): Promise<APIApplicationCommand[]> {
    return this.manager.rest.get(this.route(), {
      query: new URLSearchParams(`with_localizations=true`)
    }) as Promise<APIApplicationCommand[]>;
  }

  putCommands(data: RESTPostAPIApplicationCommandsJSONBody[]): Promise<APIApplicationCommand[]> {
    return this.manager.rest.put(this.route(), {
      body: data
    }) as Promise<APIApplicationCommand[]>;
  }

  putCommand<T extends APIApplicationCommand>(data: RESTPostAPIApplicationCommandsJSONBody): Promise<T> {
    return this.manager.rest.post(this.route(), {
      body: data
    }) as Promise<T>;
  }

  updateCommand<T extends APIApplicationCommand>(data: RESTPostAPIApplicationCommandsJSONBody, id: string): Promise<T> {
    delete data.type;

    return this.manager.rest.patch(this.commandRoute(id), {
      body: data
    }) as Promise<T>;
  }

  async deleteCommand(id: string): Promise<void> {
    await this.manager.rest.delete(this.commandRoute(id));

    return;
  }
}
