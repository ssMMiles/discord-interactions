import {
  APIApplicationCommand,
  ApplicationCommandType,
  RESTPostAPIApplicationCommandsJSONBody,
  Snowflake
} from "discord-api-types/v10";
import { MessageCommandBuilder, SlashCommandBuilder, UserCommandBuilder } from "../builders";
import { AutocompleteContext, MessageCommandContext, SlashCommandContext, UserCommandContext } from "../contexts";

export interface APIApplicationSlashCommand extends APIApplicationCommand {
  type: ApplicationCommandType.ChatInput;
}

export interface APIApplicationUserCommand extends APIApplicationCommand {
  type: ApplicationCommandType.User;
}

export interface APIApplicationMessageCommand extends APIApplicationCommand {
  type: ApplicationCommandType.Message;
}

class LoadedCommand<
  T,
  B extends { handler: (ctx: T) => Promise<void>; toJSON(): RESTPostAPIApplicationCommandsJSONBody }
> {
  public data: APIApplicationCommand;
  public json: RESTPostAPIApplicationCommandsJSONBody;

  public id: Snowflake;

  handler: (ctx: T) => Promise<void>;

  constructor(data: APIApplicationCommand, command: B) {
    this.handler = command.handler;
    this.json = command.toJSON();

    this.data = data;
    this.id = this.data.id;
  }

  setHandler(handler: (ctx: T) => Promise<void>) {
    this.handler = handler;
  }
}

export class LoadedSlashCommand extends LoadedCommand<SlashCommandContext, SlashCommandBuilder> {
  autocompleteHandler?: (ctx: AutocompleteContext) => Promise<void>;

  constructor(command: SlashCommandBuilder, data: APIApplicationSlashCommand) {
    super(data, command);

    this.autocompleteHandler = command.autocompleteHandler;
  }

  updateAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;
  }
}

export class LoadedUserCommand extends LoadedCommand<UserCommandContext, UserCommandBuilder> {
  constructor(command: UserCommandBuilder, data: APIApplicationUserCommand) {
    super(data, command);
  }
}

export class LoadedMessageCommand extends LoadedCommand<MessageCommandContext, MessageCommandBuilder> {
  constructor(command: MessageCommandBuilder, data: APIApplicationMessageCommand) {
    super(data, command);
  }
}
