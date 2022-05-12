import { AutocompleteContext, ISubcommandGroup, ISubcommandHandler } from "../..";

export async function handleAutocomplete(ctx: AutocompleteContext): Promise<void> {
  if (ctx.manager.hooks.command?.autocomplete) {
    const result = await ctx.manager.hooks.command.autocomplete(ctx);

    if (result === true) return;
  }

  const parentName = ctx.parentCommand ?? ctx.name;

  const command = ctx.interaction.guild_id
    ? ctx.manager.guildCommands?.get(ctx.interaction.guild_id)?.slash?.get(parentName) ??
      ctx.manager.commands.slash.get(parentName)
    : ctx.manager.commands.slash.get(parentName);

  if (!command) return ctx.reply([]);

  if ("handlers" in command) {
    let handlers: ISubcommandHandler | undefined;

    if (ctx.group) {
      const group = command.handlers[ctx.group] as ISubcommandGroup | undefined;

      handlers = group?.[ctx.name];
    } else {
      handlers = command.handlers[ctx.name] as ISubcommandHandler | undefined;
    }

    if (handlers === undefined || handlers.autocompleteHandler === undefined) return ctx.reply([]);

    return handlers.autocompleteHandler(ctx);
  }

  return command.autocompleteHandler(ctx);
}
