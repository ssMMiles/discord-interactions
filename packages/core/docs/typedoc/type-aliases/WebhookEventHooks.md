[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / WebhookEventHooks

# Type Alias: WebhookEventHooks

> **WebhookEventHooks** = `object`

Defined in: [app/handlers/webhookEvents.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L17)

Handlers for HTTP-pushed webhook events (configured via your app's Webhook Events URL).
These are not interactions - they are one-way event notifications from Discord,
acknowledged with an empty 204 response.

## Properties

### applicationAuthorized

> **applicationAuthorized**: (`data`, `event`) => `Promise`\<`void`\>[]

Defined in: [app/handlers/webhookEvents.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L18)

#### Parameters

##### data

`APIWebhookEventApplicationAuthorizedData`

##### event

`APIWebhookEventBody`

#### Returns

`Promise`\<`void`\>

***

### applicationDeauthorized

> **applicationDeauthorized**: (`data`, `event`) => `Promise`\<`void`\>[]

Defined in: [app/handlers/webhookEvents.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L19)

#### Parameters

##### data

`APIWebhookEventApplicationDeauthorizedData`

##### event

`APIWebhookEventBody`

#### Returns

`Promise`\<`void`\>

***

### entitlementCreate

> **entitlementCreate**: (`data`, `event`) => `Promise`\<`void`\>[]

Defined in: [app/handlers/webhookEvents.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L24)

#### Parameters

##### data

`APIWebhookEventEntitlementCreateData`

##### event

`APIWebhookEventBody`

#### Returns

`Promise`\<`void`\>

***

### entitlementDelete

> **entitlementDelete**: (`data`, `event`) => `Promise`\<`void`\>[]

Defined in: [app/handlers/webhookEvents.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L26)

#### Parameters

##### data

`APIWebhookEventEntitlementDeleteData`

##### event

`APIWebhookEventBody`

#### Returns

`Promise`\<`void`\>

***

### entitlementUpdate

> **entitlementUpdate**: (`data`, `event`) => `Promise`\<`void`\>[]

Defined in: [app/handlers/webhookEvents.ts:25](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L25)

#### Parameters

##### data

`APIWebhookEventEntitlementUpdateData`

##### event

`APIWebhookEventBody`

#### Returns

`Promise`\<`void`\>

***

### questUserEnrollment

> **questUserEnrollment**: (`data`, `event`) => `Promise`\<`void`\>[]

Defined in: [app/handlers/webhookEvents.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/webhookEvents.ts#L28)

#### Parameters

##### data

`undefined`

##### event

`APIWebhookEventBody`

#### Returns

`Promise`\<`void`\>
