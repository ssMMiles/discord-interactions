import { APIApplicationCommandRoleOption, ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export class SlashCommandRoleOption extends SlashCommandOptionBase {
  public type = ApplicationCommandOptionType.Role as const;

  public toJSON(): APIApplicationCommandRoleOption {
    return { ...this };
  }
}
