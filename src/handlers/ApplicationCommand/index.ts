import {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
  APIMessageApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
  ApplicationCommandType
} from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback, UnknownApplicationCommandType } from "../..";
import { ChannelMessageResponse } from "../../util";
import { handleMessageCommand } from "./MessageCommand";
import { handleSlashCommand } from "./SlashCommand";
import { handleUserCommand } from "./UserCommand";

export async function handleApplicationCommand(
  manager: DiscordApplication,
  interaction: APIApplicationCommandInteraction,
  responseCallback: ResponseCallback<ChannelMessageResponse>
): Promise<void> {
  switch (interaction.data.type) {
    case ApplicationCommandType.ChatInput:
      return handleSlashCommand(manager, interaction as APIChatInputApplicationCommandInteraction, responseCallback);
    case ApplicationCommandType.User:
      return handleUserCommand(manager, interaction as APIUserApplicationCommandInteraction, responseCallback);
    case ApplicationCommandType.Message:
      return handleMessageCommand(manager, interaction as APIMessageApplicationCommandInteraction, responseCallback);
    default:
      throw new UnknownApplicationCommandType(interaction);
  }
}

export * from "./Autocomplete";
