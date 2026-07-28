import type {
  APIWebhookEvent,
  APIWebhookEventApplicationAuthorizedData,
  APIWebhookEventApplicationDeauthorizedData,
  APIWebhookEventBody,
  APIWebhookEventEntitlementCreateData,
  APIWebhookEventEntitlementDeleteData,
  APIWebhookEventEntitlementUpdateData
} from "discord-api-types/v10";
import { ApplicationWebhookEventType, ApplicationWebhookType } from "discord-api-types/v10";

/**
 * Handlers for HTTP-pushed webhook events (configured via your app's Webhook Events URL).
 * These are not interactions - they are one-way event notifications from Discord,
 * acknowledged with an empty 204 response.
 */
export type WebhookEventHooks = {
  applicationAuthorized: ((data: APIWebhookEventApplicationAuthorizedData, event: APIWebhookEventBody) => Promise<void>)[];
  applicationDeauthorized: ((
    data: APIWebhookEventApplicationDeauthorizedData,
    event: APIWebhookEventBody
  ) => Promise<void>)[];

  entitlementCreate: ((data: APIWebhookEventEntitlementCreateData, event: APIWebhookEventBody) => Promise<void>)[];
  entitlementUpdate: ((data: APIWebhookEventEntitlementUpdateData, event: APIWebhookEventBody) => Promise<void>)[];
  entitlementDelete: ((data: APIWebhookEventEntitlementDeleteData, event: APIWebhookEventBody) => Promise<void>)[];

  questUserEnrollment: ((data: undefined, event: APIWebhookEventBody) => Promise<void>)[];
};

const EventHookNames: Record<ApplicationWebhookEventType, keyof WebhookEventHooks> = {
  [ApplicationWebhookEventType.ApplicationAuthorized]: "applicationAuthorized",
  [ApplicationWebhookEventType.ApplicationDeauthorized]: "applicationDeauthorized",
  [ApplicationWebhookEventType.EntitlementCreate]: "entitlementCreate",
  [ApplicationWebhookEventType.EntitlementUpdate]: "entitlementUpdate",
  [ApplicationWebhookEventType.EntitlementDelete]: "entitlementDelete",
  [ApplicationWebhookEventType.QuestUserEnrollment]: "questUserEnrollment"
};

/**
 * Dispatch a parsed webhook event to its registered hooks. PING events are acknowledged without dispatch.
 */
export async function dispatchWebhookEvent(hooks: WebhookEventHooks, event: APIWebhookEvent): Promise<void> {
  if (event.type === ApplicationWebhookType.Ping) return;

  const body = event.event;
  const hookName = EventHookNames[body.type];
  if (hookName === undefined) return;

  for (const handler of hooks[hookName]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (handler as (data: any, event: APIWebhookEventBody) => Promise<void>)(body.data, body);
  }
}
