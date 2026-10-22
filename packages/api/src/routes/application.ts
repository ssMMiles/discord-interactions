import { RESTGetCurrentApplicationResult, RESTPatchCurrentApplicationJSONBody, Routes } from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

// TODO: Test, Document
export async function getCurrentApplication(this: DiscordApiClient) {
  return this.get(Routes.currentApplication()) as Promise<RESTGetCurrentApplicationResult>;
}

/**
 * Edit properties of the current application - including event_webhooks_url and
 * event_webhooks_types for receiving webhook events.
 */
// TODO: Test, Document
export async function editCurrentApplication(this: DiscordApiClient, data: RESTPatchCurrentApplicationJSONBody) {
  return this.patch(Routes.currentApplication(), {
    body: data
  }) as Promise<RESTGetCurrentApplicationResult>;
}
