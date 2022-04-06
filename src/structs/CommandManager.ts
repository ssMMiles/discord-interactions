import {
  APIApplicationCommand,
  ApplicationCommandType,
  RESTPostAPIApplicationCommandsJSONBody,
  Routes
} from "discord-api-types/v10";
import {
  APIApplicationMessageCommand,
  APIApplicationSlashCommand,
  APIApplicationUserCommand,
  DiscordApplication,
  LoadedMessageCommand,
  LoadedSlashCommand,
  LoadedUserCommand,
  MessageCommandBuilder,
  SlashCommandBuilder,
  UserCommandBuilder
} from "..";

export interface ParsedCommands {
  slash: Map<string, APIApplicationSlashCommand>;
  user: Map<string, APIApplicationUserCommand>;
  message: Map<string, APIApplicationMessageCommand>;
}

export class CommandManager {
  private slash: Map<string, LoadedSlashCommand> = new Map();
  private user: Map<string, LoadedUserCommand> = new Map();
  private message: Map<string, LoadedMessageCommand> = new Map();

  private manager: DiscordApplication;

  private guildId: string | null;
  private removeUnregistered: boolean;

  constructor(manager: DiscordApplication, guildId: string | null = null, removeUnregistered = true) {
    this.manager = manager;

    this.guildId = guildId;
    this.removeUnregistered = removeUnregistered;
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

  private _commands(
    type: ApplicationCommandType
  ): Map<string, LoadedSlashCommand | LoadedUserCommand | LoadedMessageCommand> {
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

  get(
    name: string,
    type: ApplicationCommandType = ApplicationCommandType.ChatInput
  ): LoadedSlashCommand | LoadedUserCommand | LoadedMessageCommand | undefined {
    return this._commands(type).get(name);
  }

  async load(
    commands: (SlashCommandBuilder | UserCommandBuilder | MessageCommandBuilder)[],
    overwrite = true
  ): Promise<void> {
    const remoteCommands = this.parse(await this.getCommands());

    for (const command of commands) {
      this.manager.components.load(command.components);

      if (command instanceof SlashCommandBuilder) {
        let data: APIApplicationSlashCommand;

        if (remoteCommands.slash.has(command.name)) {
          const existing = remoteCommands.slash.get(command.name) as APIApplicationSlashCommand;

          data = overwrite ? await this.updateCommand(command.toJSON(), existing.id) : existing;
        } else {
          data = await this.putCommand(command.toJSON());
        }

        this.slash.set(command.name, new LoadedSlashCommand(command, data));

        remoteCommands.slash.delete(command.name);
      }

      if (command instanceof UserCommandBuilder) {
        let data: APIApplicationUserCommand;

        if (remoteCommands.user.has(command.name)) {
          const existing = remoteCommands.user.get(command.name) as APIApplicationUserCommand;

          data = overwrite ? await this.updateCommand(command.toJSON(), existing.id) : existing;
        } else {
          data = await this.putCommand(command.toJSON());
        }

        this.user.set(command.name, new LoadedUserCommand(command, data));

        remoteCommands.user.delete(command.name);
      }

      if (command instanceof MessageCommandBuilder) {
        let data: APIApplicationMessageCommand;

        if (remoteCommands.message.has(command.name)) {
          const existing = remoteCommands.message.get(command.name) as APIApplicationMessageCommand;

          data = overwrite ? await this.updateCommand(command.toJSON(), existing.id) : existing;
        } else {
          data = await this.putCommand(command.toJSON());
        }

        this.message.set(command.name, new LoadedMessageCommand(command, data));

        remoteCommands.message.delete(command.name);
      }
    }

    if (this.removeUnregistered) {
      for (const command of remoteCommands.slash.values()) {
        this.deleteCommand(command.id);
      }

      for (const command of remoteCommands.user.values()) {
        this.deleteCommand(command.id);
      }

      for (const command of remoteCommands.message.values()) {
        this.deleteCommand(command.id);
      }
    }
  }

  async unload(name: string, unregister = false, type: ApplicationCommandType = ApplicationCommandType.ChatInput) {
    const command = this.get(name, type);
    if (!command) throw new Error("Command isn't loaded.");

    this._commands(type).delete(name);
    if (unregister) await this.deleteCommand(command.id);
  }

  getAPIData(): RESTPostAPIApplicationCommandsJSONBody[] {
    const commandData = [];

    for (const command of [...this.slash.values(), ...this.user.values(), ...this.message.values()]) {
      commandData.push(command.json);
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
