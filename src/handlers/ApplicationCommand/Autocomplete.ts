import {
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
} from "discord-api-types/v10";
import { AutocompleteContext, DiscordApplication, ResponseCallback, SlashCommandBuilder } from "../..";

export async function handleCommandAutocomplete(
  manager: DiscordApplication,
  interaction: APIApplicationCommandAutocompleteInteraction,
  responseCallback: ResponseCallback<APIApplicationCommandAutocompleteResponse>
): Promise<void> {
  const context = new AutocompleteContext(manager, interaction, responseCallback);

  if (manager.hooks.command?.autocomplete) {
    const result = await manager.hooks.command.autocomplete(context);

    if (result === true) return;
  }

  const command = manager.commands.get(context.name) as SlashCommandBuilder | undefined;

  if (!command || command.autocompleteHandler === undefined) return context.reply([]);

  return command.autocompleteHandler(context);
}
