import { APIApplicationCommandUserOption, ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase.js";

export class SlashCommandUserOption extends SlashCommandOptionBase {
  public readonly type = ApplicationCommandOptionType.User as const;

  public toJSON(): APIApplicationCommandUserOption {
    return { ...this };
  }
}
