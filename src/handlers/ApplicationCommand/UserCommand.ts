import { APIUserApplicationCommandInteraction, ApplicationCommandType } from "discord-api-types/v10";
import {
  ChannelMessageResponse,
  DiscordApplication,
  ResponseCallback,
  SimpleError,
  UserCommandBuilder,
  UserCommandContext
} from "../..";

export async function handleUserCommand(
  manager: DiscordApplication,
  interaction: APIUserApplicationCommandInteraction,
  responseCallback: ResponseCallback<ChannelMessageResponse>
): Promise<void> {
  const context = new UserCommandContext(manager, interaction, responseCallback);

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.user(context);

    if (result && result[0] === true) return context.rawReply(result[1]);
  }

  const command = manager.commands.get(context.name, ApplicationCommandType.User) as UserCommandBuilder | undefined;

  if (!command) return context.reply(SimpleError("Command not found."));

  if (command.guildOnly && context.isDM)
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(context);
}
