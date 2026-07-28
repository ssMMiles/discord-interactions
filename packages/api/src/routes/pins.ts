import {
  RESTGetAPIChannelMessagesPinsQuery,
  RESTGetAPIChannelMessagesPinsResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getChannelMessagePins(
  this: DiscordApiClient,
  channelId: Snowflake,
  query?: RESTGetAPIChannelMessagesPinsQuery
) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.channelMessagesPins(channelId), options) as Promise<RESTGetAPIChannelMessagesPinsResult>;
}

// TODO: Test, Document
export async function pinMessage(this: DiscordApiClient, channelId: Snowflake, messageId: Snowflake) {
  return this.put(Routes.channelMessagesPin(channelId, messageId), {}) as Promise<never>;
}

// TODO: Test, Document
export async function unpinMessage(this: DiscordApiClient, channelId: Snowflake, messageId: Snowflake) {
  return this.delete(Routes.channelMessagesPin(channelId, messageId)) as Promise<never>;
}
