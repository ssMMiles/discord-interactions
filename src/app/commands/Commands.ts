import {
  ApplicationCommandType,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  RESTPostAPIContextMenuApplicationCommandsJSONBody
} from "discord-api-types/v10";
import {
  AutocompleteContext,
  MessageCommandBuilder,
  MessageCommandContext,
  SlashCommandBuilder,
  SlashCommandContext,
  UserCommandBuilder,
  UserCommandContext
} from "../..";
import { HandledInteraction } from "../HandledInteraction";

export class SlashCommand extends HandledInteraction<
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  SlashCommandBuilder,
  SlashCommandContext
> {
  constructor(
    builder: SlashCommandBuilder,
    handler: (ctx: SlashCommandContext) => Promise<void> = async (ctx: SlashCommandContext) => {
      ctx.reply("No command handler has been defined.");
    },
    public autocompleteHandler: (ctx: AutocompleteContext) => Promise<void> = async (ctx: AutocompleteContext) => {
      ctx.reply([]);
    }
  ) {
    super(builder, handler);

    this.autocompleteHandler = autocompleteHandler;
  }

  public setAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;

    return this;
  }
}

export class UserCommand extends HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User },
  UserCommandBuilder,
  UserCommandContext
> {
  public handler = async (ctx: UserCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };
}

export class MessageCommand extends HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message },
  MessageCommandBuilder,
  MessageCommandContext
> {
  public handler = async (ctx: MessageCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };
}

export type Command = SlashCommand | UserCommand | MessageCommand;
