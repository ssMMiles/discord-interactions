[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / dispatchWebhookEvent

# Function: dispatchWebhookEvent()

> **dispatchWebhookEvent**(`hooks`, `event`): `Promise`\<`void`\>

Defined in: [app/handlers/webhookEvents.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L43)

Dispatch a parsed webhook event to its registered hooks. PING events are acknowledged without dispatch.

## Parameters

### hooks

[`WebhookEventHooks`](../type-aliases/WebhookEventHooks.md)

### event

`APIWebhookEvent`

## Returns

`Promise`\<`void`\>
