/**
 * nicely coloured error/info embeds
 */

import { UnsafeEmbedBuilder } from "@discordjs/builders";
import { MessageBuilder } from "..";

export function SimpleError(message: string, title?: string): MessageBuilder {
  const embed = new UnsafeEmbedBuilder().setColor(0xba251a).setDescription(message);

  if (title) embed.setTitle(title);
  return new MessageBuilder().addEmbed(embed);
}

export function SimpleEmbed(message: string, title?: string): MessageBuilder {
  const embed = new UnsafeEmbedBuilder().setColor(0xac78f3).setDescription(message);

  if (title) embed.setTitle(title);
  return new MessageBuilder().addEmbed(embed);
}
