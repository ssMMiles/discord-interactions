import { AutocompleteContext } from "../..";

export async function handleAutocomplete(ctx: AutocompleteContext): Promise<void> {
  if (ctx.manager.hooks.command?.autocomplete) {
    const result = await ctx.manager.hooks.command.autocomplete(ctx);

    if (result === true) return;
  }

  const command = ctx.interaction.guild_id
    ? ctx.manager.guildCommands?.get(ctx.interaction.guild_id)?.slash?.get(ctx.name) ??
      ctx.manager.commands.slash.get(ctx.name)
    : ctx.manager.commands.slash.get(ctx.name);

  if (!command || command.autocompleteHandler === undefined) return ctx.reply([]);

  return command.autocompleteHandler(ctx);
}
