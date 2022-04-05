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

  if (manager.hooks.applicationCommand?.slashCommand) {
    const result = await manager.hooks.applicationCommand.autocomplete(context);

    if (result && result[0] === true) return context.rawReply(result[1]);
  }

  const command = manager.commands.get(context.name) as SlashCommandBuilder | undefined;

  if (!command || command.autocompleteHandler === undefined) return context.reply([]);

  return command.autocompleteHandler(context);
}
