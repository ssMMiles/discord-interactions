import {
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
  ApplicationCommandOptionType
} from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";
import { SubcommandOption } from "./subcommand";

export interface ToAPIApplicationCommandSubcommandOption {
  toJSON: () => APIApplicationCommandSubcommandOption;
}

export class SubcommandGroupOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.SubcommandGroup as const;

  public options: ToAPIApplicationCommandSubcommandOption[] = [];

  /**
   * Adds a subcommand
   */
  public addSubcommands(...subcommands: SubcommandOption[]): this {
    for (const subcommand of subcommands) {
      this.options.push(subcommand);
    }

    return this;
  }

  public toJSON(): APIApplicationCommandSubcommandGroupOption {
    return { ...this, options: this.options.map((option) => option.toJSON()) };
  }
}
