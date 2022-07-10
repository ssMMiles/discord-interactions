import {
  RESTDeleteAPIInteractionFollowupResult,
  RESTPatchAPIInteractionFollowupJSONBody,
  RESTPatchAPIInteractionFollowupResult,
  RESTPostAPIInteractionFollowupJSONBody,
  RESTPostAPIInteractionFollowupResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

// TODO: Test, Document
export async function postInteractionFollowup(
  this: DiscordApiClient,
  applicationId: Snowflake,
  interactionToken: string,
  data: RESTPostAPIInteractionFollowupJSONBody
) {
  return this.post(Routes.webhook(applicationId, interactionToken), {
    body: data
  }) as Promise<RESTPostAPIInteractionFollowupResult>;
}

// TODO: Test, Document
export async function patchInteractionFollowup(
  this: DiscordApiClient,
  applicationId: Snowflake,
  interactionToken: string,
  id: string,
  data: RESTPatchAPIInteractionFollowupJSONBody
) {
  return this.patch(Routes.webhookMessage(applicationId, interactionToken, id), {
    body: data
  }) as Promise<RESTPatchAPIInteractionFollowupResult>;
}

// TODO: Test, Document
export async function deleteInteractionFollowup(
  this: DiscordApiClient,
  applicationId: Snowflake,
  interactionToken: string,
  id: string
) {
  return this.delete(
    Routes.webhookMessage(applicationId, interactionToken, id)
  ) as Promise<RESTDeleteAPIInteractionFollowupResult>;
}
