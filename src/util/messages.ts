/**
 * nicely coloured error/info embeds
 */

import { MessageBuilder } from "..";
import { EmbedBuilder } from "../builders";

export function SimpleError(message: string, title?: string): MessageBuilder {
  const embed = new EmbedBuilder().setColor(0xba251a).setDescription(message);

  if (title) embed.setTitle(title);
  return new MessageBuilder().addEmbed(embed);
}

export function SimpleEmbed(message: string, title?: string): MessageBuilder {
  const embed = new EmbedBuilder().setColor(0xac78f3).setDescription(message);

  if (title) embed.setTitle(title);
  return new MessageBuilder().addEmbed(embed);
}
