import {
  RESTGetAPISKUSubscriptionResult,
  RESTGetAPISKUSubscriptionsQuery,
  RESTGetAPISKUSubscriptionsResult,
  RESTGetAPISKUsResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";
import { stringifyQuery } from "../query.js";

// TODO: Test, Document
export async function getSKUs(this: DiscordApiClient, applicationId: Snowflake) {
  return this.get(Routes.skus(applicationId)) as Promise<RESTGetAPISKUsResult>;
}

// TODO: Test, Document
export async function getSKUSubscriptions(
  this: DiscordApiClient,
  skuId: Snowflake,
  query?: RESTGetAPISKUSubscriptionsQuery
) {
  const options = query ? { query: new URLSearchParams(stringifyQuery(query)) } : {};

  return this.get(Routes.skuSubscriptions(skuId), options) as Promise<RESTGetAPISKUSubscriptionsResult>;
}

// TODO: Test, Document
export async function getSKUSubscription(this: DiscordApiClient, skuId: Snowflake, subscriptionId: Snowflake) {
  return this.get(Routes.skuSubscription(skuId, subscriptionId)) as Promise<RESTGetAPISKUSubscriptionResult>;
}
