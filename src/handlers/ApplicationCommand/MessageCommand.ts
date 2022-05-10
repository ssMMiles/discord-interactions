import { MessageCommandContext, SimpleError } from "../..";

export async function handleMessageCommand(ctx: MessageCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.message) {
    const result = await ctx.manager.hooks.command.message(ctx);

    if (result === true) return;
  }

  const command = ctx.interaction.guild_id
    ? ctx.manager.guildCommands?.get(ctx.interaction.guild_id)?.message?.get(ctx.name) ??
      ctx.manager.commands.message.get(ctx.name)
    : ctx.manager.commands.message.get(ctx.name);

  if (!command) return ctx.reply(SimpleError("Command not found."));

  return command.handler(ctx);
}
