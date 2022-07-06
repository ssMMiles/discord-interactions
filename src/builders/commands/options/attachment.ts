import type { APIApplicationCommandAttachmentOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export class SlashCommandAttachmentOption extends SlashCommandOptionBase {
  public override readonly type = ApplicationCommandOptionType.Attachment as const;

  public toJSON(): APIApplicationCommandAttachmentOption {
    return { ...this };
  }
}
