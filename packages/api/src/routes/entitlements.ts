import {
  RESTGetAPIEntitlementResult,
  RESTGetAPIEntitlementsQuery,
  RESTGetAPIEntitlementsResult,
  RESTPostAPIEntitlementJSONBody,
  RESTPostAPIEntitlementResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getEntitlements(
  this: DiscordApiClient,
  applicationId: Snowflake,
  query?: RESTGetAPIEntitlementsQuery
) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.entitlements(applicationId), options) as Promise<RESTGetAPIEntitlementsResult>;
}

// TODO: Test, Document
export async function getEntitlement(this: DiscordApiClient, applicationId: Snowflake, entitlementId: Snowflake) {
  return this.get(Routes.entitlement(applicationId, entitlementId)) as Promise<RESTGetAPIEntitlementResult>;
}

// TODO: Test, Document
export async function consumeEntitlement(this: DiscordApiClient, applicationId: Snowflake, entitlementId: Snowflake) {
  return this.post(Routes.consumeEntitlement(applicationId, entitlementId), {}) as Promise<never>;
}

// TODO: Test, Document
export async function createTestEntitlement(
  this: DiscordApiClient,
  applicationId: Snowflake,
  data: RESTPostAPIEntitlementJSONBody
) {
  return this.post(Routes.entitlements(applicationId), {
    body: data
  }) as Promise<RESTPostAPIEntitlementResult>;
}

// TODO: Test, Document
export async function deleteTestEntitlement(
  this: DiscordApiClient,
  applicationId: Snowflake,
  entitlementId: Snowflake
) {
  return this.delete(Routes.entitlement(applicationId, entitlementId)) as Promise<never>;
}
