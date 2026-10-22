import {
  RESTGetAPIChannelMessageResult,
  RESTGetAPIChannelMessagesQuery,
  RESTGetAPIChannelMessagesResult,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPatchAPIChannelMessageResult,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getChannelMessages(
  this: DiscordApiClient,
  channelId: Snowflake,
  query?: RESTGetAPIChannelMessagesQuery
) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.channelMessages(channelId), options) as Promise<RESTGetAPIChannelMessagesResult>;
}

// TODO: Test, Document
export async function getChannelMessage(this: DiscordApiClient, channelId: Snowflake, messageId: Snowflake) {
  return this.get(Routes.channelMessage(channelId, messageId)) as Promise<RESTGetAPIChannelMessageResult>;
}

// TODO: Test, Document
export async function createMessage(
  this: DiscordApiClient,
  channelId: Snowflake,
  data: RESTPostAPIChannelMessageJSONBody
) {
  return this.post(Routes.channelMessages(channelId), {
    body: data
  }) as Promise<RESTPostAPIChannelMessageResult>;
}

// TODO: Test, Document
export async function editMessage(
  this: DiscordApiClient,
  channelId: Snowflake,
  messageId: Snowflake,
  data: RESTPatchAPIChannelMessageJSONBody
) {
  return this.patch(Routes.channelMessage(channelId, messageId), {
    body: data
  }) as Promise<RESTPatchAPIChannelMessageResult>;
}

// TODO: Test, Document
export async function deleteMessage(this: DiscordApiClient, channelId: Snowflake, messageId: Snowflake) {
  return this.delete(Routes.channelMessage(channelId, messageId)) as Promise<never>;
}
