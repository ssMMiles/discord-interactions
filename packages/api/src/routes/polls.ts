import {
  RESTGetAPIPollAnswerVotersQuery,
  RESTGetAPIPollAnswerVotersResult,
  RESTPostAPIPollExpireResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getPollAnswerVoters(
  this: DiscordApiClient,
  channelId: Snowflake,
  messageId: Snowflake,
  answerId: number,
  query?: RESTGetAPIPollAnswerVotersQuery
) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(
    Routes.pollAnswerVoters(channelId, messageId, answerId),
    options
  ) as Promise<RESTGetAPIPollAnswerVotersResult>;
}

// TODO: Test, Document
export async function expirePoll(this: DiscordApiClient, channelId: Snowflake, messageId: Snowflake) {
  return this.post(Routes.expirePoll(channelId, messageId), {}) as Promise<RESTPostAPIPollExpireResult>;
}
