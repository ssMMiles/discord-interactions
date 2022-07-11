import type {
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption
} from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { ToAPIApplicationCommandOptions } from "../CommandBuilderBase.js";
import type { SubcommandOption } from "./index.js";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase.js";

export class SubcommandGroupOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.SubcommandGroup as const;

  public options: ToAPIApplicationCommandOptions<APIApplicationCommandSubcommandOption>[] = [];

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
