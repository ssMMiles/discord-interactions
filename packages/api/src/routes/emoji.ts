import {
  RESTGetAPIApplicationEmojiResult,
  RESTGetAPIApplicationEmojisResult,
  RESTPatchAPIApplicationEmojiJSONBody,
  RESTPatchAPIApplicationEmojiResult,
  RESTPostAPIApplicationEmojiJSONBody,
  RESTPostAPIApplicationEmojiResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

// TODO: Test, Document
export async function getApplicationEmojis(this: DiscordApiClient, applicationId: Snowflake) {
  return this.get(Routes.applicationEmojis(applicationId)) as Promise<RESTGetAPIApplicationEmojisResult>;
}

// TODO: Test, Document
export async function getApplicationEmoji(this: DiscordApiClient, applicationId: Snowflake, emojiId: Snowflake) {
  return this.get(Routes.applicationEmoji(applicationId, emojiId)) as Promise<RESTGetAPIApplicationEmojiResult>;
}

// TODO: Test, Document
export async function createApplicationEmoji(
  this: DiscordApiClient,
  applicationId: Snowflake,
  data: RESTPostAPIApplicationEmojiJSONBody
) {
  return this.post(Routes.applicationEmojis(applicationId), {
    body: data
  }) as Promise<RESTPostAPIApplicationEmojiResult>;
}

// TODO: Test, Document
export async function editApplicationEmoji(
  this: DiscordApiClient,
  applicationId: Snowflake,
  emojiId: Snowflake,
  data: RESTPatchAPIApplicationEmojiJSONBody
) {
  return this.patch(Routes.applicationEmoji(applicationId, emojiId), {
    body: data
  }) as Promise<RESTPatchAPIApplicationEmojiResult>;
}

// TODO: Test, Document
export async function deleteApplicationEmoji(this: DiscordApiClient, applicationId: Snowflake, emojiId: Snowflake) {
  return this.delete(Routes.applicationEmoji(applicationId, emojiId)) as Promise<never>;
}
