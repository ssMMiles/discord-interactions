import { SimpleError, UserCommandContext } from "../..";

export async function handleUserCommand(ctx: UserCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.user) {
    const result = await ctx.manager.hooks.command.user(ctx);

    if (result === true) return;
  }

  const command = ctx.interaction.guild_id
    ? ctx.manager.guildCommands?.get(ctx.interaction.guild_id)?.user?.get(ctx.name) ??
      ctx.manager.commands.user.get(ctx.name)
    : ctx.manager.commands.user.get(ctx.name);

  if (!command) return ctx.reply(SimpleError("Command not found."));

  return command.handler(ctx);
}
