import { ApplicationCommandType } from "discord-api-types/v10";
import { SimpleError, UserCommandBuilder, UserCommandContext } from "../..";

export async function handleUserCommand(ctx: UserCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.user) {
    const result = await ctx.manager.hooks.command.user(ctx);

    if (result === true) return;
  }

  const command = ctx.manager.commands.get(context.name, ApplicationCommandType.User) as UserCommandBuilder | undefined;

  if (!command) return ctx.reply(SimpleError("Command not found."));

  if (command.guildOnly && ctx.isDM)
    return ctx.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(ctx);
}
