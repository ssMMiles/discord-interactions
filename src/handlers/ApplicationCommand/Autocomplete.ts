import {
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
} from "discord-api-types/v10";
import { AutocompleteContext, DiscordApplication, SlashCommandBuilder } from "../..";

export async function handleCommandAutocomplete(
  manager: DiscordApplication,
  interaction: APIApplicationCommandAutocompleteInteraction
): Promise<APIApplicationCommandAutocompleteResponse> {
  const context = new AutocompleteContext(manager, interaction);

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.autocomplete(context);

    if (result && result[0] === true) return result[1];
  }

  const command = manager.commands.get(context.name) as SlashCommandBuilder | undefined;

  if (!command || command.autocompleteHandler === undefined) {
    return context.reply([]);
  }

  await command.autocompleteHandler(context);

  return context.response;
}
