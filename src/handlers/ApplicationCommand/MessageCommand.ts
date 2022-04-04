import { APIMessageApplicationCommandInteraction, ApplicationCommandType } from "discord-api-types/v10";
import { DiscordApplication, MessageCommandBuilder, MessageCommandContext, SimpleError } from "../..";

export async function handleMessageCommand(
  manager: DiscordApplication,
  interaction: APIMessageApplicationCommandInteraction
) {
  const context = new MessageCommandContext(manager, interaction);

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.message(context);

    if (result && result[0] === true) return result[1];
  }

  const command = manager.commands.get(context.name, ApplicationCommandType.Message) as
    | MessageCommandBuilder
    | undefined;

  if (!command) {
    return context.reply(SimpleError("Command not found."));
  }

  if (command.guildOnly && context.isDM) {
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));
  }

  await command.handler(context);

  return context.response;
}
