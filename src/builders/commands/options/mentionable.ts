import { APIApplicationCommandMentionableOption, ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export class SlashCommandMentionableOption extends SlashCommandOptionBase {
  public readonly type = ApplicationCommandOptionType.Mentionable as const;

  public toJSON(): APIApplicationCommandMentionableOption {
    return { ...this };
  }
}
