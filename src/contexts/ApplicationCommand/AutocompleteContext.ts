import {
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse,
  APIApplicationCommandInteractionDataIntegerOption,
  APIApplicationCommandInteractionDataNumberOption,
  APIApplicationCommandInteractionDataStringOption,
  APIApplicationCommandOptionChoice,
  ApplicationCommandOptionType,
  InteractionResponseType
} from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../..";
import { InteractionContext } from "../InteractionContext";

export type AutocompleteSupportedOptions =
  | APIApplicationCommandInteractionDataStringOption
  | APIApplicationCommandInteractionDataIntegerOption
  | APIApplicationCommandInteractionDataNumberOption;

export class AutocompleteContext extends InteractionContext<
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
> {
  public name: string;
  public option: AutocompleteSupportedOptions;

  constructor(
    manager: DiscordApplication,
    interaction: APIApplicationCommandAutocompleteInteraction,
    responseCallback: ResponseCallback<APIApplicationCommandAutocompleteResponse>
  ) {
    super(manager, interaction, responseCallback);

    this.name = this.interaction.data.name;

    const rootOption = this.interaction.data.options[0];

    switch (rootOption.type) {
      case ApplicationCommandOptionType.SubcommandGroup:
        this.name += `.${rootOption.name}.${rootOption.options[0].name}`;

        this.option = rootOption.options[0].options?.[0] as AutocompleteSupportedOptions;
        break;

      case ApplicationCommandOptionType.Subcommand:
        this.name += `.${rootOption.name}`;

        this.option = rootOption.options?.[0] as AutocompleteSupportedOptions;
        break;

      default:
        this.option = this.interaction.data.options?.[0] as AutocompleteSupportedOptions;
    }
  }

  public reply(choices: APIApplicationCommandOptionChoice[]): Promise<void> {
    return this._reply({
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: {
        choices
      }
    });
  }
}
