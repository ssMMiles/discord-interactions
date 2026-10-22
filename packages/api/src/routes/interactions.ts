import {
  APIInteractionResponse,
  RESTDeleteAPIInteractionFollowupResult,
  RESTPatchAPIInteractionFollowupJSONBody,
  RESTPatchAPIInteractionFollowupResult,
  RESTPostAPIInteractionCallbackWithResponseResult,
  RESTPostAPIInteractionFollowupJSONBody,
  RESTPostAPIInteractionFollowupResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

/**
 * Respond to an interaction via the REST callback endpoint (rather than the HTTP response body).
 * Pass withResponse to receive the created resource (message/activity instance) back.
 */
// TODO: Test, Document
export async function postInteractionCallback(
  this: DiscordApiClient,
  interactionId: Snowflake,
  interactionToken: string,
  data: APIInteractionResponse,
  withResponse?: boolean
) {
  const query = withResponse ? new URLSearchParams({ with_response: "true" }) : undefined;

  return this.post(Routes.interactionCallback(interactionId, interactionToken), {
    body: data,
    query,
    auth: false
  }) as Promise<RESTPostAPIInteractionCallbackWithResponseResult | undefined>;
}

// TODO: Test, Document
export async function postInteractionFollowup(
  this: DiscordApiClient,
  applicationId: Snowflake,
  interactionToken: string,
  data: RESTPostAPIInteractionFollowupJSONBody,
  withComponents?: boolean
) {
  return this.post(Routes.webhook(applicationId, interactionToken), {
    body: data,
    query: withComponents !== undefined ? new URLSearchParams({ with_components: String(withComponents) }) : undefined
  }) as Promise<RESTPostAPIInteractionFollowupResult>;
}

// TODO: Test, Document
export async function patchInteractionFollowup(
  this: DiscordApiClient,
  applicationId: Snowflake,
  interactionToken: string,
  id: string,
  data: RESTPatchAPIInteractionFollowupJSONBody,
  withComponents?: boolean
) {
  return this.patch(Routes.webhookMessage(applicationId, interactionToken, id), {
    body: data,
    query: withComponents !== undefined ? new URLSearchParams({ with_components: String(withComponents) }) : undefined
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
