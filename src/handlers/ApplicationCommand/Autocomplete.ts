import { AutocompleteContext } from "../..";

export async function handleAutocomplete(ctx: AutocompleteContext): Promise<void> {
  if (ctx.manager.hooks.command?.autocomplete) {
    const result = await ctx.manager.hooks.command.autocomplete(ctx);

    if (result === true) return;
  }

  const command = ctx.manager.commands.slash.get(ctx.name);

  if (!command || command.autocompleteHandler === undefined) return ctx.reply([]);

  return command.autocompleteHandler(ctx);
}
