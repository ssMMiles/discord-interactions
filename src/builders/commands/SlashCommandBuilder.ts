import {
  APIApplicationCommandOption,
  ApplicationCommandType,
  LocalizationMap,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { CommandBuilder } from "./CommandBuilderBase";
import {
  SlashCommandAttachmentOption,
  SlashCommandBooleanOption,
  SlashCommandChannelOption,
  SlashCommandIntegerOption,
  SlashCommandMentionableOption,
  SlashCommandNumberOption,
  SlashCommandRoleOption,
  SlashCommandStringOption,
  SlashCommandUserOption
} from "./options";

export interface ToAPIApplicationCommandOptions {
  toJSON: () => APIApplicationCommandOption;
}

export class SlashCommandBuilder extends CommandBuilder<RESTPostAPIChatInputApplicationCommandsJSONBody> {
  public type: ApplicationCommandType.ChatInput = ApplicationCommandType.ChatInput;

  public description: string;
  public description_localizations: LocalizationMap = {};

  public options: ToAPIApplicationCommandOptions[] = [];

  constructor(name: string, description: string) {
    super(name);

    this.description = description;
  }
  /**
   * Set the description
   *
   * @param description The description
   */
  public setDescription(description: string) {
    this.description = description;

    return this;
  }

  /**
   * Set a dictionary of localized descriptions
   */
  public setDescriptionLocalizations(localizations: LocalizationMap) {
    this.description_localizations = localizations;

    return this;
  }

  /**
   * Set a single locale's description
   */
  public setLocalizedDescription(locale: keyof LocalizationMap, description: string) {
    this.description_localizations[locale] = description;
  }

  /**
   * Adds a boolean option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addBooleanOption(input: SlashCommandBooleanOption): this {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a user option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addUserOption(input: SlashCommandUserOption) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a channel option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addChannelOption(input: SlashCommandChannelOption) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a role option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addRoleOption(input: SlashCommandRoleOption) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds an attachment option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addAttachmentOption(input: SlashCommandAttachmentOption) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a mentionable option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addMentionableOption(input: SlashCommandMentionableOption) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a string option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addStringOption(
    input:
      | SlashCommandStringOption
      | Omit<SlashCommandStringOption, "setAutocomplete">
      | Omit<SlashCommandStringOption, "addChoices">
  ) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds an integer option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addIntegerOption(
    input:
      | SlashCommandIntegerOption
      | Omit<SlashCommandIntegerOption, "setAutocomplete">
      | Omit<SlashCommandIntegerOption, "addChoices">
  ) {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a number option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addNumberOption(
    input:
      | SlashCommandNumberOption
      | Omit<SlashCommandNumberOption, "setAutocomplete">
      | Omit<SlashCommandNumberOption, "addChoices">
  ) {
    this.options.push(input);
    return this;
  }

  public toJSON() {
    return {
      type: this.type,

      name: this.name,
      name_localizations: this.name_localizations,

      description: this.description,
      description_localizations: this.description_localizations,

      options: this.options.map((option) => option.toJSON())
    };
  }
}
