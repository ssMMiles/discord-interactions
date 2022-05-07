import {
  APIApplicationCommandOptionChoice,
  APIApplicationCommandStringOption,
  ApplicationCommandOptionType
} from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export class SlashCommandStringOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.String as const;

  public choices?: APIApplicationCommandOptionChoice<string>[];
  public autocomplete?: boolean;

  /**
   * Adds multiple choices for this option
   *
   * @param choices The choices to add
   */
  public addChoices(...choices: APIApplicationCommandOptionChoice<string>[]): this {
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

  public setChoices<Input extends APIApplicationCommandOptionChoice<string>[]>(...choices: Input): this {
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

  public toJSON(): APIApplicationCommandStringOption {
    return { ...this };
  }
}
