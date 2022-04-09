import { ApplicationCommandType } from "discord-api-types/v10";
import { MessageCommandBuilder, MessageCommandContext, SimpleError } from "../..";

export async function handleMessageCommand(ctx: MessageCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.message) {
    const result = await ctx.manager.hooks.command.message(ctx);

    if (result === true) return;
  }

  const command = ctx.manager.commands.get(ctx.name, ApplicationCommandType.Message) as
    | MessageCommandBuilder
    | undefined;

  if (!command) return ctx.reply(SimpleError("Command not found."));

  if (command.guildOnly && ctx.isDM)
    return ctx.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(ctx);
}
