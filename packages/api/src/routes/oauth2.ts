import { APIApplication, Routes } from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

// TODO: Test, Document
export async function getCurrentBotApplication(this: DiscordApiClient) {
  return this.get(Routes.oauth2CurrentApplication()) as Promise<APIApplication>;
}
