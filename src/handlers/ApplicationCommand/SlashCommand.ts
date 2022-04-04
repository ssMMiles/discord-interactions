import { APIChatInputApplicationCommandInteraction } from "discord-api-types/v10";
import { DiscordApplication, SimpleError, SlashCommandBuilder, SlashCommandContext } from "../..";

export async function handleSlashCommand(
  manager: DiscordApplication,
  interaction: APIChatInputApplicationCommandInteraction
) {
  const context = new SlashCommandContext(manager, interaction);

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.slashCommand(context);

    if (result && result[0] === true) return result[1];
  }

  const command = manager.commands.get(context.name) as SlashCommandBuilder | undefined;

  if (!command) {
    return context.reply(SimpleError("Command not found."));
  }

  if (command.guildOnly && context.isDM) {
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));
  }

  await command.handler(context);

  return context.response;
}
