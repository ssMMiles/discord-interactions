import type {
  APIApplicationCommand,
  APIApplicationCommandBasicOption,
  APIApplicationCommandOption,
  LocalizationMap,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord-api-types/v10";
import { shallowEquals } from "../util/shallow-equals.js";
import { CommandBuilderBase, CommandDataBase } from "./CommandBuilderBase.js";
import type { SlashCommandAttachmentOption } from "./options/attachment.js";
import type { SlashCommandBooleanOption } from "./options/boolean.js";
import type { SlashCommandChannelOption } from "./options/channel.js";
import type { SlashCommandIntegerOption } from "./options/integer.js";
import type { SlashCommandMentionableOption } from "./options/mentionable.js";
import type { SlashCommandNumberOption } from "./options/number.js";
import type { SlashCommandRoleOption } from "./options/role.js";
import type { SlashCommandStringOption } from "./options/string.js";
import type { SlashCommandUserOption } from "./options/user.js";

export type SlashCommandData = CommandDataBase & {
  type: ApplicationCommandType.ChatInput;
  options: APIApplicationCommandBasicOption[];
};

export interface ToAPIApplicationCommandOptions {
  toJSON: () => APIApplicationCommandBasicOption;
}

export class SlashCommandBuilder extends CommandBuilderBase<RESTPostAPIChatInputApplicationCommandsJSONBody> {
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

  equals(
    remote: APIApplicationCommand & {
      type: ApplicationCommandType.ChatInput;
    }
  ): boolean {
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

  public toJSON(): SlashCommandData {
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
