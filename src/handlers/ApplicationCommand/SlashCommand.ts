import { SimpleError, SlashCommandContext } from "../..";

export async function handleSlashCommand(ctx: SlashCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.slash) {
    const result = await ctx.manager.hooks.command.slash(ctx);

    if (result === true) return;
  }

  const command = ctx.interaction.guild_id
    ? ctx.manager.guildCommands?.get(ctx.interaction.guild_id)?.slash?.get(ctx.name) ??
      ctx.manager.commands.slash.get(ctx.name)
    : ctx.manager.commands.slash.get(ctx.name);

  if (!command) return ctx.reply(SimpleError("Command not found."));

  return command.handler(ctx);
}
