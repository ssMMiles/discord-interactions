import { APIApplicationCommandSubcommandOption, ApplicationCommandOptionType } from "discord-api-types/v10";
import type { ToAPIApplicationCommandOptions } from "../SlashCommandBuilder.js";
import type { SlashCommandAttachmentOption } from "./attachment.js";
import type { SlashCommandBooleanOption } from "./boolean.js";
import type { SlashCommandChannelOption } from "./channel.js";
import type { SlashCommandIntegerOption } from "./integer.js";
import type { SlashCommandMentionableOption } from "./mentionable.js";
import type { SlashCommandNumberOption } from "./number.js";
import type { SlashCommandRoleOption } from "./role.js";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase.js";
import type { SlashCommandStringOption } from "./string.js";
import type { SlashCommandUserOption } from "./user.js";

export class SubcommandOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.Subcommand as const;

  public options: ToAPIApplicationCommandOptions[] = [];

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

  public toJSON(): APIApplicationCommandSubcommandOption {
    return {
      ...this,
      options: this.options.map((option) => option.toJSON())
    };
  }
}
