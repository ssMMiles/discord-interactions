[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / DiscordApplication

# Class: DiscordApplication

Defined in: [app/DiscordApplication.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L64)

Main class for managing a Discord Application's commands and handling interactions.

## Constructors

### Constructor

> **new DiscordApplication**(`options`): `DiscordApplication`

Defined in: [app/DiscordApplication.ts:110](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L110)

#### Parameters

##### options

[`DiscordApplicationOptions`](../interfaces/DiscordApplicationOptions.md)

#### Returns

`DiscordApplication`

## Properties

### cache?

> `optional` **cache?**: [`GenericCache`](../interfaces/GenericCache.md)

Defined in: [app/DiscordApplication.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L70)

***

### clientId

> **clientId**: `string`

Defined in: [app/DiscordApplication.ts:68](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L68)

***

### commands

> **commands**: [`CommandManager`](CommandManager.md)

Defined in: [app/DiscordApplication.ts:72](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L72)

***

### components

> **components**: [`ComponentManager`](ComponentManager.md)

Defined in: [app/DiscordApplication.ts:75](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L75)

***

### guildCommands

> **guildCommands**: `Map`\<`string`, [`CommandManager`](CommandManager.md)\>

Defined in: [app/DiscordApplication.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L73)

***

### hooks

> **hooks**: [`InteractionHooks`](../type-aliases/InteractionHooks.md)

Defined in: [app/DiscordApplication.ts:80](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L80)

***

### preserveRaw

> **preserveRaw**: `boolean`

Defined in: [app/DiscordApplication.ts:77](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L77)

***

### publicKey

> **publicKey**: `string`

Defined in: [app/DiscordApplication.ts:67](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L67)

***

### rest

> **rest**: `DiscordApiClient`

Defined in: [app/DiscordApplication.ts:108](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L108)

***

### timeout

> **timeout**: `number` = `2500`

Defined in: [app/DiscordApplication.ts:78](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L78)

***

### webhookEventHooks

> **webhookEventHooks**: [`WebhookEventHooks`](../type-aliases/WebhookEventHooks.md)

Defined in: [app/DiscordApplication.ts:97](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L97)

## Methods

### addHook()

> **addHook**\<`T`\>(`hook`, `handler`): `void`

Defined in: [app/DiscordApplication.ts:225](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L225)

#### Type Parameters

##### T

`T` *extends* keyof [`InteractionHooks`](../type-aliases/InteractionHooks.md)

#### Parameters

##### hook

`T`

##### handler

(`ctx`) => `Promise`\<`true` \| `void`\>

#### Returns

`void`

***

### addWebhookEventHook()

> **addWebhookEventHook**\<`T`\>(`event`, `handler`): `void`

Defined in: [app/DiscordApplication.ts:232](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L232)

#### Type Parameters

##### T

`T` *extends* keyof [`WebhookEventHooks`](../type-aliases/WebhookEventHooks.md)

#### Parameters

##### event

`T`

##### handler

[`WebhookEventHooks`](../type-aliases/WebhookEventHooks.md)\[`T`\]\[`number`\]

#### Returns

`void`

***

### createGuildCommandManager()

> **createGuildCommandManager**(`guildId`, `syncMode?`): [`CommandManager`](CommandManager.md)

Defined in: [app/DiscordApplication.ts:147](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L147)

#### Parameters

##### guildId

`string`

##### syncMode?

[`SyncMode`](../enumerations/SyncMode.md)

#### Returns

[`CommandManager`](CommandManager.md)

***

### handleInteraction()

> **handleInteraction**(`body`, `signature`, `timestamp?`): `Promise`\<\[`Promise`\<`APIInteractionResponse` \| `FormData`\>, `Promise`\<`void`\>\]\>

Defined in: [app/DiscordApplication.ts:164](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L164)

Handle an incoming interaction request

#### Parameters

##### body

`string`

Raw interaction body

##### signature

`string` \| `false`

Request's "X-Signature-Ed25519" header or false to skip signature verification

##### timestamp?

`string`

Request's "X-Signature-Timestamp" header

#### Returns

`Promise`\<\[`Promise`\<`APIInteractionResponse` \| `FormData`\>, `Promise`\<`void`\>\]\>

Array containing the interaction response, and a callback to be called after you have sent the response

***

### handleWebhookEvent()

> **handleWebhookEvent**(`body`, `signature`, `timestamp?`): `Promise`\<`void`\>

Defined in: [app/DiscordApplication.ts:247](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L247)

Handle an incoming webhook event request (Webhook Events URL).
Webhook events use the same Ed25519 signature scheme as interactions. Throws
UnauthorizedInteraction for invalid signatures (respond 401); otherwise runs the
registered event hooks. Discord expects an empty 204 acknowledgement within 3 seconds,
so either keep hooks fast or send your response before awaiting this promise.

#### Parameters

##### body

`string`

Raw request body

##### signature

`string` \| `false`

Request's "X-Signature-Ed25519" header or false to skip signature verification

##### timestamp?

`string`

Request's "X-Signature-Timestamp" header

#### Returns

`Promise`\<`void`\>

***

### setAPIClient()

> **setAPIClient**(`client`): `void`

Defined in: [app/DiscordApplication.ts:153](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L153)

#### Parameters

##### client

`DiscordApiClient`

#### Returns

`void`

***

### verifyInteractionSignature()

> **verifyInteractionSignature**(`signature`, `timestamp`, `body`): `Promise`\<`boolean`\>

Defined in: [app/DiscordApplication.ts:143](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L143)

Verify an incoming interaction's signature.

#### Parameters

##### signature

`string`

Interaction Request's "X-Signature-Ed25519" Header

##### timestamp

`string`

Interaction Request's "X-Signature-Timestamp" Header

##### body

`string`

Raw Interaction Request Body - If you parse this as JSON beforehand, verification will fail for certain interactions.

#### Returns

`Promise`\<`boolean`\>

Whether or not the request signature is valid.
