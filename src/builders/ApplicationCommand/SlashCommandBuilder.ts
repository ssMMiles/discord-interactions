import { SlashCommandBuilder as SlashCommandBuilderBase } from "@discordjs/builders";
import { AutocompleteContext, ComponentBuilder, SlashCommandContext } from "../..";

export class SlashCommandBuilder extends SlashCommandBuilderBase {
  public components: ComponentBuilder[] = [];

  public guildOnly = true;

  constructor(name?: string) {
    super();

    if (name) this.setName(name);
  }

  handler: (ctx: SlashCommandContext) => Promise<void> = async (ctx: SlashCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };

  autocompleteHandler?: (ctx: AutocompleteContext) => Promise<void> = async (ctx: AutocompleteContext) => {
    ctx.reply([]);
  };

  setHandler(handler: (ctx: SlashCommandContext) => Promise<void>): this {
    this.handler = handler;

    return this;
  }

  setAutocompleteHandler(handler: (ctx: AutocompleteContext) => Promise<void>) {
    this.autocompleteHandler = handler;

    return this;
  }

  addComponents(components: ComponentBuilder[]) {
    this.components = [...this.components, ...components];

    return this;
  }
}
