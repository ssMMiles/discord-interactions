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

  if (manager.hooks.command?.user) {
    const result = await manager.hooks.command.user(context);

    if (result === true) return;
  }

  const command = manager.commands.get(context.name, ApplicationCommandType.User) as UserCommandBuilder | undefined;

  if (!command) return context.reply(SimpleError("Command not found."));

  if (command.guildOnly && context.isDM)
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(context);
}
