import { APIMessageApplicationCommandInteraction, ApplicationCommandType } from "discord-api-types/v10";
import { DiscordApplication, MessageCommandBuilder, MessageCommandContext, ResponseCallback, SimpleError } from "../..";
import { ChannelMessageResponse } from "../../util";

export async function handleMessageCommand(
  manager: DiscordApplication,
  interaction: APIMessageApplicationCommandInteraction,
  responseCallback: ResponseCallback<ChannelMessageResponse>
): Promise<void> {
  const context = new MessageCommandContext(manager, interaction, responseCallback);

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.message(context);

    if (result && result[0] === true) return context.rawReply(result[1]);
  }

  const command = manager.commands.get(context.name, ApplicationCommandType.Message) as
    | MessageCommandBuilder
    | undefined;

  if (!command) return context.reply(SimpleError("Command not found."));

  if (command.guildOnly && context.isDM)
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(context);
}
