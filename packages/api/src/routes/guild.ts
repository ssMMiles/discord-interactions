import { RESTGetAPIGuildResult, Routes, Snowflake } from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

// TODO: Test, Document
export async function getGuild(
  this: DiscordApiClient,
  id: Snowflake,
  options: {
    counts?: boolean;
  } = {}
) {
  const { counts = false } = options;

  return this.get(Routes.guild(id), {
    query: new URLSearchParams({ with_counts: String(counts) })
  }) as Promise<RESTGetAPIGuildResult>;
}
