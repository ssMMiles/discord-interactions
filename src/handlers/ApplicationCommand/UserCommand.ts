import { APIUserApplicationCommandInteraction, ApplicationCommandType } from "discord-api-types/v10";
import { DiscordApplication, SimpleError, UserCommandBuilder, UserCommandContext } from "../..";

export async function handleUserCommand(
  manager: DiscordApplication,
  interaction: APIUserApplicationCommandInteraction
) {
  const context = new UserCommandContext(manager, interaction);

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.user(context);

    if (result && result[0] === true) return result[1];
  }

  const command = manager.commands.get(context.name, ApplicationCommandType.User) as UserCommandBuilder | undefined;

  if (!command) {
    return context.reply(SimpleError("Command not found."));
  }

  if (command.guildOnly && context.isDM) {
    return context.reply(SimpleError("This command can only be used within a Discord server.", "Server Required"));
  }

  await command.handler(context);

  return context.response;
}
