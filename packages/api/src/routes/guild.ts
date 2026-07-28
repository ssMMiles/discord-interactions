import {
  APIMessage,
  RESTGetAPIGuildMessagesSearchQuery,
  RESTGetAPIGuildQuery,
  RESTGetAPIGuildResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getGuild(this: DiscordApiClient, id: Snowflake, query?: RESTGetAPIGuildQuery) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.guild(id), options) as Promise<RESTGetAPIGuildResult>;
}

/**
 * Search a guild's messages. Requires READ_MESSAGE_HISTORY and the message content intent.
 * Returns 202 with error code 110000 while the guild's messages are still being indexed.
 */
// TODO: Test, Document
export async function searchGuildMessages(
  this: DiscordApiClient,
  id: Snowflake,
  query: RESTGetAPIGuildMessagesSearchQuery
) {
  return this.get(Routes.guildMessagesSearch(id), {
    query: new URLSearchParams(stringifyQuery(query))
  }) as Promise<{ messages: APIMessage[] }>;
}
