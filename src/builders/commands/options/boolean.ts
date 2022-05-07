import { APIApplicationCommandBooleanOption, ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export class SlashCommandBooleanOption extends SlashCommandOptionBase {
  public readonly type = ApplicationCommandOptionType.Boolean as const;

  public toJSON(): APIApplicationCommandBooleanOption {
    return { ...this };
  }
}
