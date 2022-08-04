import { RESTGetAPIGuildQuery, RESTGetAPIGuildResult, Routes, Snowflake } from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getGuild(this: DiscordApiClient, id: Snowflake, query?: RESTGetAPIGuildQuery) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.guild(id), options) as Promise<RESTGetAPIGuildResult>;
}
