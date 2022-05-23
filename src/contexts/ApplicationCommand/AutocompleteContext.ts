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
import { BaseInteractionContext } from "../BaseInteractionContext";
export type AutocompleteSupportedOptions =
  | APIApplicationCommandInteractionDataStringOption
  | APIApplicationCommandInteractionDataIntegerOption
  | APIApplicationCommandInteractionDataNumberOption;

export class AutocompleteContext extends BaseInteractionContext<
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
> {
  public name: string;
  public option: AutocompleteSupportedOptions;

  /**
   * The parent command, if this is a subcommand.
   */
  public parentCommand?: string;

  /**
   * The subcommand group
   */
  public group?: string;

  constructor(
    manager: DiscordApplication,
    interaction: APIApplicationCommandAutocompleteInteraction,
    responseCallback: ResponseCallback<APIApplicationCommandAutocompleteResponse>
  ) {
    super(manager, interaction, responseCallback);

    this.name = this.interaction.data.name;

    const rootOption = this.interaction.data.options?.[0];

    this.parentCommand = this.name;

    switch (rootOption?.type) {
      case ApplicationCommandOptionType.SubcommandGroup:
        this.group = rootOption.name;

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

  public getStringOption(name: string): APIApplicationCommandInteractionDataStringOption {
    const option = this.option as APIApplicationCommandInteractionDataStringOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return option;
  }

  public getIntegerOption(name: string): APIApplicationCommandInteractionDataNumberOption {
    const option = this.option as APIApplicationCommandInteractionDataNumberOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return option;
  }

  public getNumberOption(name: string): APIApplicationCommandInteractionDataNumberOption {
    const option = this.option as APIApplicationCommandInteractionDataNumberOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return option;
  }
}
