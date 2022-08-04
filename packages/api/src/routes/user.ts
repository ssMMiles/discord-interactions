import { Snowflake } from "discord-api-types/globals";
import {
  RESTGetAPICurrentUserConnectionsResult,
  RESTGetAPICurrentUserGuildsQuery,
  RESTGetAPICurrentUserGuildsResult,
  RESTGetAPICurrentUserResult,
  RESTGetAPIGuildMemberResult,
  RESTPatchAPICurrentUserJSONBody,
  RESTPatchAPICurrentUserResult,
  RESTPostAPICurrentUserCreateDMChannelJSONBody,
  Routes
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getUser(this: DiscordApiClient, userId?: Snowflake) {
  return this.get(Routes.user(userId)) as Promise<RESTGetAPICurrentUserResult>;
}

// TODO: Test, Document
export async function getCurrentUser(this: DiscordApiClient) {
  return this.get(Routes.user()) as Promise<RESTGetAPICurrentUserResult>;
}

// TODO: Test, Document
export async function modifyCurrentUser(this: DiscordApiClient, data: RESTPatchAPICurrentUserJSONBody) {
  return this.patch(Routes.user(), {
    body: data
  }) as Promise<RESTPatchAPICurrentUserResult>;
}

// TODO: Test, Document
export async function getCurrentUserConnections(this: DiscordApiClient) {
  return this.get(Routes.userConnections()) as Promise<RESTGetAPICurrentUserConnectionsResult>;
}

// TODO: Test, Document
export async function getCurrentUserGuilds(this: DiscordApiClient, query?: RESTGetAPICurrentUserGuildsQuery) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.userGuilds(), options) as Promise<RESTGetAPICurrentUserGuildsResult>;
}

// TODO: Test, Document
export async function getCurrentUserGuildMember(this: DiscordApiClient, guildId: Snowflake) {
  return this.get(Routes.userGuildMember(guildId)) as Promise<RESTGetAPIGuildMemberResult>;
}

// TODO: Test, Document
export async function leaveGuild(this: DiscordApiClient, guildId: Snowflake) {
  return this.delete(Routes.userGuild(guildId)) as Promise<void>;
}

// TODO: Test, Document
export async function createDm(this: DiscordApiClient, userId: Snowflake) {
  return this.post(Routes.userChannels(), {
    body: {
      recipient_id: userId
    }
  }) as Promise<RESTPostAPICurrentUserCreateDMChannelJSONBody>;
}