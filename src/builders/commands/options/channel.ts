import type { APIApplicationCommandChannelOption } from "discord-api-types/v10";
import { ApplicationCommandOptionType, ChannelType } from "discord-api-types/v10";
import { SlashCommandOptionBase } from "./SlashCommandOptionBase";

export const AllowedChannelTypes = [
  ChannelType.GuildText,
  ChannelType.GuildVoice,
  ChannelType.GuildCategory,
  ChannelType.GuildNews,
  ChannelType.GuildNewsThread,
  ChannelType.GuildPublicThread,
  ChannelType.GuildPrivateThread,
  ChannelType.GuildStageVoice
] as const;

export type ApplicationCommandOptionAllowedChannelTypes = typeof AllowedChannelTypes[number];

export class SlashCommandChannelOption extends SlashCommandOptionBase {
  public override readonly type = ApplicationCommandOptionType.Channel as const;
  public channel_types?: ApplicationCommandOptionAllowedChannelTypes[];

  /**
   * Adds channel types to this option
   *
   * @param channelTypes The channel types to add
   */
  public addChannelTypes(...channelTypes: ApplicationCommandOptionAllowedChannelTypes[]) {
    if (this.channel_types === undefined) this.channel_types = [];

    this.channel_types.push(...channelTypes);

    return this;
  }

  public toJSON(): APIApplicationCommandChannelOption {
    return { ...this };
  }
}
