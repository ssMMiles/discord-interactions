import { APIMessageApplicationCommandInteraction, ApplicationCommandType } from "discord-api-types/v10";
import { DiscordApplication, MessageCommandBuilder, MessageCommandContext, ResponseCallback, SimpleError } from "../..";
import { ChannelMessageResponse } from "../../util";

export async function handleMessageCommand(
  manager: DiscordApplication,
  interaction: APIMessageApplicationCommandInteraction,
  responseCallback: ResponseCallback<ChannelMessageResponse>
): Promise<void> {
  const context = new MessageCommandContext(manager, interaction, responseCallback);

  if (manager.hooks.command?.message) {
    const result = await manager.hooks.command.message(context);

    if (result === true) return;
  }

  const command = manager.commands.get(context.name, ApplicationCommandType.Message) as
    | MessageCommandBuilder
    | undefined;

  if (!command) return context.reply(SimpleError("Command not found."));

  if (command.guildOnly && context.isDM)
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(context);
}
