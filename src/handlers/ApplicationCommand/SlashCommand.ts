import { SimpleError, SlashCommandBuilder, SlashCommandContext } from "../..";

export async function handleSlashCommand(ctx: SlashCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.slash) {
    const result = await ctx.manager.hooks.command.slash(ctx);

    if (result === true) return;
  }

  const command = ctx.manager.commands.get(ctx.name) as SlashCommandBuilder | undefined;

  if (!command) return ctx.reply(SimpleError("Command not found."));

  if (command.guildOnly && ctx.isDM)
    return ctx.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(ctx);
}
