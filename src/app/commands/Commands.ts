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
import { Component } from "../components";
import { HandledInteraction } from "../HandledInteraction";

export interface ICommandBase<Builder, Context> {
  builder: Builder;

  handler: (ctx: Context) => Promise<void>;

  components: Component[];
}

export interface ISlashCommand extends ICommandBase<SlashCommandBuilder, SlashCommandContext> {
  autocompleteHandler?: (ctx: AutocompleteContext) => Promise<void>;
}

export class SlashCommand
  extends HandledInteraction<RESTPostAPIChatInputApplicationCommandsJSONBody, SlashCommandBuilder, SlashCommandContext>
  implements ISlashCommand
{
  public components: Component[] = [];

  constructor(
    builder: SlashCommandBuilder,
    handler: (ctx: SlashCommandContext) => Promise<void> = async (ctx: SlashCommandContext) => {
      ctx.reply("No command handler has been defined.");
    },
    public autocompleteHandler: (ctx: AutocompleteContext) => Promise<void> = async (ctx: AutocompleteContext) => {
      ctx.reply([]);
    },
    components: Component[] = []
  ) {
    super(builder, handler, components);

    this.autocompleteHandler = autocompleteHandler;
  }

  public setAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;

    return this;
  }

  public setComponents(components: Component[]): this {
    this.components = components;

    return this;
  }

  public addComponents(...components: Component[]): this {
    this.components.push(...components);

    return this;
  }
}

export type IUserCommand = ICommandBase<UserCommandBuilder, UserCommandContext>;

export class UserCommand extends HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User },
  UserCommandBuilder,
  UserCommandContext
> {
  public handler = async (ctx: UserCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };
}

export type IMessageCommand = ICommandBase<MessageCommandBuilder, MessageCommandContext>;

export class MessageCommand extends HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message },
  MessageCommandBuilder,
  MessageCommandContext
> {
  public handler = async (ctx: MessageCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };
}

export type ICommand = ISlashCommand | IUserCommand | IMessageCommand;
export type Command = SlashCommand | UserCommand | MessageCommand;
