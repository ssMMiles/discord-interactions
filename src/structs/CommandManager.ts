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

export interface GlobalCommands {
  commands: Map<string, APIApplicationSlashCommand>;
  user: Map<string, APIApplicationUserCommand>;
  message: Map<string, APIApplicationMessageCommand>;
}

export class CommandManager {
  private commands: Map<string, LoadedSlashCommand> = new Map();
  private user: Map<string, LoadedUserCommand> = new Map();
  private message: Map<string, LoadedMessageCommand> = new Map();

  private manager: DiscordApplication;

  private removeUnregistered = false;

  constructor(
    manager: DiscordApplication,
    options: {
      removeUnregistered?: boolean;
      overwriteExisting?: boolean;

      commands?: SlashCommandBuilder[];
      user?: UserCommandBuilder[];
      message?: MessageCommandBuilder[];
    }
  ) {
    this.manager = manager;

    if (options.removeUnregistered) this.removeUnregistered = options.removeUnregistered;

    let commands: (SlashCommandBuilder | UserCommandBuilder | MessageCommandBuilder)[] = [];

    if (options.commands) commands = [...commands, ...options.commands];
    if (options.user) commands = [...commands, ...options.user];
    if (options.message) commands = [...commands, ...options.message];

    this.load(commands, options.overwriteExisting);
  }

  private _commands(
    type: ApplicationCommandType
  ): Map<string, LoadedSlashCommand | LoadedUserCommand | LoadedMessageCommand> {
    switch (type) {
      case ApplicationCommandType.ChatInput:
        return this.commands;
      case ApplicationCommandType.User:
        return this.user;
      case ApplicationCommandType.Message:
        return this.message;
    }
  }

  private parseGlobalCommands(commands: APIApplicationCommand[]): GlobalCommands {
    const parsed = {
      commands: new Map(),
      user: new Map(),
      message: new Map()
    };

    for (const command of commands) {
      switch (command.type) {
        case ApplicationCommandType.ChatInput:
          parsed.commands.set(command.name, command);
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
    overwriteExisting = false
  ): Promise<void> {
    const remoteCommands = this.parseGlobalCommands(await this.getGlobalCommands());

    for (const command of commands) {
      for (const component of command.components) {
        this.manager.components.loadComponent(component);
      }

      if (command instanceof SlashCommandBuilder) {
        let data: APIApplicationSlashCommand;

        if (remoteCommands.commands.has(command.name)) {
          const existing = remoteCommands.commands.get(command.name) as APIApplicationSlashCommand;

          data = overwriteExisting ? await this.updateGlobalCommand(command.toJSON(), existing.id) : existing;
        } else {
          data = await this.putGlobalCommand(command.toJSON());
        }

        this.commands.set(command.name, new LoadedSlashCommand(command, data));

        remoteCommands.commands.delete(command.name);
      }

      if (command instanceof UserCommandBuilder) {
        let data: APIApplicationUserCommand;

        if (remoteCommands.user.has(command.name)) {
          const existing = remoteCommands.user.get(command.name) as APIApplicationUserCommand;

          data = overwriteExisting ? await this.updateGlobalCommand(command.toJSON(), existing.id) : existing;
        } else {
          data = await this.putGlobalCommand(command.toJSON());
        }

        this.user.set(command.name, new LoadedUserCommand(command, data));

        remoteCommands.user.delete(command.name);
      }

      if (command instanceof MessageCommandBuilder) {
        let data: APIApplicationMessageCommand;

        if (remoteCommands.message.has(command.name)) {
          const existing = remoteCommands.message.get(command.name) as APIApplicationMessageCommand;

          data = overwriteExisting ? await this.updateGlobalCommand(command.toJSON(), existing.id) : existing;
        } else {
          data = await this.putGlobalCommand(command.toJSON());
        }

        this.message.set(command.name, new LoadedMessageCommand(command, data));

        remoteCommands.message.delete(command.name);
      }
    }

    if (this.removeUnregistered) {
      for (const command of remoteCommands.commands.values()) {
        this.deleteGlobalCommand(command.id);
      }

      for (const command of remoteCommands.user.values()) {
        this.deleteGlobalCommand(command.id);
      }

      for (const command of remoteCommands.message.values()) {
        this.deleteGlobalCommand(command.id);
      }
    }
  }

  unload(name: string, type: ApplicationCommandType = ApplicationCommandType.ChatInput) {
    this._commands(type).delete(name);
  }

  getAPIData(): RESTPostAPIApplicationCommandsJSONBody[] {
    const commandData = [];

    for (const command of [...this.commands.values(), ...this.user.values(), ...this.message.values()]) {
      commandData.push(command.json);
    }

    return commandData;
  }

  getGlobalCommands(): Promise<APIApplicationCommand[]> {
    return this.manager.rest.get(Routes.applicationCommands(this.manager.clientId), {
      query: new URLSearchParams(`with_localizations=true`)
    }) as Promise<APIApplicationCommand[]>;
  }

  putGlobalCommands(data: RESTPostAPIApplicationCommandsJSONBody[]): Promise<APIApplicationCommand[]> {
    return this.manager.rest.put(Routes.applicationCommands(this.manager.clientId), {
      body: data
    }) as Promise<APIApplicationCommand[]>;
  }

  putGlobalCommand<T extends APIApplicationCommand>(data: RESTPostAPIApplicationCommandsJSONBody): Promise<T> {
    return this.manager.rest.post(Routes.applicationCommands(this.manager.clientId), {
      body: data
    }) as Promise<T>;
  }

  updateGlobalCommand<T extends APIApplicationCommand>(
    data: RESTPostAPIApplicationCommandsJSONBody,
    id: string
  ): Promise<T> {
    delete data.type;

    return this.manager.rest.patch(Routes.applicationCommand(this.manager.clientId, id), {
      body: data
    }) as Promise<T>;
  }

  async deleteGlobalCommand(id: string): Promise<void> {
    await this.manager.rest.delete(Routes.applicationCommand(this.manager.clientId, id));

    return;
  }
}
