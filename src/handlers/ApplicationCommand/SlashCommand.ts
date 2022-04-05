import { APIChatInputApplicationCommandInteraction } from "discord-api-types/v10";
import {
  ChannelMessageResponse,
  DiscordApplication,
  ResponseCallback,
  SimpleError,
  SlashCommandBuilder,
  SlashCommandContext
} from "../..";

export async function handleSlashCommand(
  manager: DiscordApplication,
  interaction: APIChatInputApplicationCommandInteraction,
  responseCallback: ResponseCallback<ChannelMessageResponse>
): Promise<void> {
  const context = new SlashCommandContext(manager, interaction, responseCallback);

  if (manager.hooks.command?.slash) {
    const result = await manager.hooks.command.slash(context);

    if (result === true) return;
  }

  const command = manager.commands.get(context.name) as SlashCommandBuilder | undefined;

  if (!command) return context.reply(SimpleError("Command not found."));

  if (command.guildOnly && context.isDM)
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));

  return command.handler(context);
}
