import type { APIApplicationCommandBasicOption, ApplicationCommandType } from "discord-api-types/v10";
import { ChatInputCommandBuilderBase, CommandDataBase } from "./CommandBuilderBase.js";
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

export class SlashCommandBuilder extends ChatInputCommandBuilderBase<APIApplicationCommandBasicOption> {
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
