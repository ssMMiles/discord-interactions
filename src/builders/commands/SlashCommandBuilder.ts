import {
  APIApplicationCommandBasicOption,
  APIApplicationCommandOption,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  LocalizationMap,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { APIApplicationSlashCommand } from "../../app";
import { shallowEquals } from "../../util/shallow-equals";
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
  toJSON: () => APIApplicationCommandBasicOption;
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
  public setDescription(description: string): this {
    this.description = description;

    return this;
  }

  /**
   * Set a dictionary of localized descriptions
   */
  public setDescriptionLocalizations(localizations: LocalizationMap): this {
    this.description_localizations = localizations;

    return this;
  }

  /**
   * Set a single locale's description
   */
  public setLocalizedDescription(locale: keyof LocalizationMap, description: string): this {
    this.description_localizations[locale] = description;
    return this;
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
  public addUserOption(input: SlashCommandUserOption): this {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a channel option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addChannelOption(input: SlashCommandChannelOption): this {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a role option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addRoleOption(input: SlashCommandRoleOption): this {
    this.options.push(input);
    return this;
  }

  /**
   * Adds an attachment option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addAttachmentOption(input: SlashCommandAttachmentOption): this {
    this.options.push(input);
    return this;
  }

  /**
   * Adds a mentionable option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addMentionableOption(input: SlashCommandMentionableOption): this {
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
  ): this {
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
  ): this {
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
  ): this {
    this.options.push(input);
    return this;
  }

  equals(remote: APIApplicationSlashCommand): boolean {
    if (!super.equals(remote)) return false;

    if (this.description !== remote.description) return false;
    if (!shallowEquals(this.description_localizations ?? {}, remote.description_localizations ?? {})) return false;

    if (
      this.options &&
      remote.options &&
      (this.options.length !== remote.options.length ||
        this.options.length < remote.options.length ||
        this.options.some((option, i) => {
          if (remote.options?.[i] === undefined) return true;
          return !isEqualOption(option.toJSON(), remote.options[i]);
        }))
    )
      return false;

    function isEqualOption(localOption: APIApplicationCommandOption, remoteOption: APIApplicationCommandOption) {
      if (localOption.type !== remoteOption.type) return false;

      if (localOption.name !== remoteOption.name) return false;
      if (!shallowEquals(localOption.name_localizations ?? {}, remoteOption.name_localizations ?? {})) return false;

      if (localOption.description !== remoteOption.description) return false;
      if (!shallowEquals(localOption.description_localizations ?? {}, remoteOption.description_localizations ?? {}))
        return false;

      if (localOption.required !== remoteOption.required) return false;

      if (
        (localOption.type === ApplicationCommandOptionType.Subcommand ||
          localOption.type === ApplicationCommandOptionType.SubcommandGroup) &&
        (remoteOption.type === ApplicationCommandOptionType.Subcommand ||
          remoteOption.type === ApplicationCommandOptionType.SubcommandGroup)
      ) {
        if (
          localOption.options &&
          remoteOption.options &&
          (localOption.options.length !== remoteOption.options.length ||
            localOption.options.length < remoteOption.options.length ||
            localOption.options.some((option, i) => {
              if (remoteOption.options?.[i] === undefined) return true;
              return !isEqualOption(option, remoteOption.options[i]);
            }))
        )
          return false;
      }

      if (
        localOption.type === ApplicationCommandOptionType.String &&
        remoteOption.type === ApplicationCommandOptionType.String
      ) {
        if (localOption.autocomplete !== remoteOption.autocomplete) return false;
      }

      if (
        (localOption.type === ApplicationCommandOptionType.Integer ||
          localOption.type === ApplicationCommandOptionType.Number) &&
        (remoteOption.type === ApplicationCommandOptionType.Integer ||
          remoteOption.type === ApplicationCommandOptionType.Number)
      ) {
        if (localOption.min_value !== remoteOption.min_value) return false;
        if (localOption.max_value !== remoteOption.max_value) return false;

        if (localOption.autocomplete !== remoteOption.autocomplete) return false;
      }

      return true;
    }

    return true;
  }

  public toJSON(): Omit<APIApplicationSlashCommand, "id" | "application_id" | "guild_id" | "version"> {
    return {
      type: this.type,

      name: this.name,
      name_localizations: this.name_localizations,

      description: this.description,
      description_localizations: this.description_localizations,

      options: this.options.map((option) => option.toJSON()),

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }
}
