import type { APIApplicationCommandUserOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export class SlashCommandUserOption extends SlashCommandOptionBase {
  public readonly type = ApplicationCommandOptionType.User as const;

  public toJSON(): APIApplicationCommandUserOption {
    return { ...this };
  }
}
