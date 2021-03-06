import {
  APIApplicationCommandNumberOption,
  APIApplicationCommandOptionChoice,
  ApplicationCommandOptionType
} from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase.js";

export class SlashCommandNumberOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.Number as const;

  public max_value?: number;
  public min_value?: number;

  public choices?: APIApplicationCommandOptionChoice<number>[];
  public autocomplete?: boolean;

  public setMaxValue(max: number): this {
    this.max_value = max;

    return this;
  }

  public setMinValue(min: number): this {
    this.min_value = min;

    return this;
  }

  /**
   * Adds multiple choices for this option
   *
   * @param choices The choices to add
   */
  public addChoices(...choices: APIApplicationCommandOptionChoice<number>[]): this {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }

    if (this.choices === undefined) {
      this.choices = [];
    }

    for (const { name, value } of choices) {
      this.choices.push({ name, value });
    }

    return this;
  }

  public setChoices<Input extends APIApplicationCommandOptionChoice<number>[]>(...choices: Input): this {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }

    this.choices = [...choices];

    return this;
  }

  /**
   * Marks the option as autocompletable
   * @param autocomplete If this option should be autocompletable
   */
  public setAutocomplete(autocomplete: boolean): this {
    this.autocomplete = autocomplete;

    return this;
  }

  public toJSON(): APIApplicationCommandNumberOption {
    return { ...this };
  }
}
