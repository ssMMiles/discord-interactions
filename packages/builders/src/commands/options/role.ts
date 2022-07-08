import { APIApplicationCommandRoleOption, ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase.js";

export class SlashCommandRoleOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.Role as const;

  public toJSON(): APIApplicationCommandRoleOption {
    return { ...this };
  }
}
