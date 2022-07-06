import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord-api-types/v10";
import type { SlashCommandBuilder } from "../../builders";
import type { Component, Modal } from "../components";
import type { AutocompleteContext, SlashCommandContext } from "../contexts";
import { HandledInteraction } from "../handlers";
import type { ICommandBase } from "./Base";
import { RegisteredCommandBase } from "./Base";

export interface ISlashCommand extends ICommandBase<SlashCommandBuilder, SlashCommandContext> {
  autocompleteHandler?: (ctx: AutocompleteContext) => Promise<void>;
}

export class SlashCommand
  extends HandledInteraction<RESTPostAPIChatInputApplicationCommandsJSONBody, SlashCommandBuilder, SlashCommandContext>
  implements ISlashCommand
{
  public autocompleteHandler: (ctx: AutocompleteContext) => Promise<void>;

  constructor(
    builder: SlashCommandBuilder,
    handler: (ctx: SlashCommandContext) => Promise<void> = async (ctx: SlashCommandContext) => {
      ctx.reply("No command handler has been defined.");
    },
    components: Component[] = [],
    autocompleteHandler: (ctx: AutocompleteContext) => Promise<void> = async (ctx: AutocompleteContext) => {
      ctx.reply([]);
    }
  ) {
    super(builder, handler, components);

    this.autocompleteHandler = autocompleteHandler;
  }

  public setAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;

    return this;
  }

  public setComponents(components: (Component | Modal)[]): this {
    this.components = components;

    return this;
  }

  public addComponents(...components: (Component | Modal)[]): this {
    this.components.push(...components);

    return this;
  }
}

export class RegisteredSlashCommand extends RegisteredCommandBase<SlashCommandBuilder, SlashCommandContext> {
  public autocompleteHandler = async (ctx: AutocompleteContext) => {
    ctx.reply([]);
  };

  public setAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;

    return this;
  }
}
