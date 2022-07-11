import { ButtonBuilder, ModalBuilder, SelectMenuBuilder } from "@discord-interactions/builders";
import type {
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse,
  APIApplicationCommandInteractionDataIntegerOption,
  APIApplicationCommandInteractionDataNumberOption,
  APIApplicationCommandInteractionDataStringOption,
  APIApplicationCommandOptionChoice,
  Snowflake
} from "discord-api-types/v10";
import { ApplicationCommandOptionType, InteractionResponseType } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { BaseInteractionContext } from "../Base.js";
import { ResolvedData } from "./Base.js";

export type AutocompleteSupportedOptions =
  | APIApplicationCommandInteractionDataStringOption
  | APIApplicationCommandInteractionDataIntegerOption
  | APIApplicationCommandInteractionDataNumberOption;

export class AutocompleteContext extends BaseInteractionContext<
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
> {
  public name: string;
  public readonly id: Snowflake;

  // Duplicate data, but Discord includes it for some reason
  public readonly commandGuildId?: Snowflake;

  public readonly resolved: ResolvedData;

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

    this.name = interaction.data.name;
    this.id = interaction.data.id;

    this.commandGuildId = interaction.data.guild_id;

    this.resolved = new ResolvedData();

    const rootOption = interaction.data.options?.[0];

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
        this.option = interaction.data.options?.[0] as AutocompleteSupportedOptions;
    }
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilder | ModalBuilder = ButtonBuilder | SelectMenuBuilder
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return super.createGlobalComponent(`${this.parentCommand ?? this.name}.${name}`, state, ttl);
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
