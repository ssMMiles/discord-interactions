import {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseDeferredChannelMessageWithSource,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
  ApplicationCommandType
} from "discord-api-types/v10";
import { DiscordApplication, UnknownApplicationCommandType } from "../..";
import { handleMessageCommand } from "./MessageCommand";
import { handleSlashCommand } from "./SlashCommand";
import { handleUserCommand } from "./UserCommand";

export async function handleApplicationCommand(
  manager: DiscordApplication,
  interaction: APIApplicationCommandInteraction
): Promise<APIInteractionResponseDeferredChannelMessageWithSource | APIInteractionResponseChannelMessageWithSource> {
  switch (interaction.data.type) {
    case ApplicationCommandType.ChatInput:
      return handleSlashCommand(manager, interaction as APIChatInputApplicationCommandInteraction);
    case ApplicationCommandType.User:
      return handleUserCommand(manager, interaction as APIUserApplicationCommandInteraction);
    case ApplicationCommandType.Message:
      await handleMessageCommand(manager, interaction as APIMessageApplicationCommandInteraction);
    default:
      throw new UnknownApplicationCommandType(interaction);
  }
}

export * from "./Autocomplete";
