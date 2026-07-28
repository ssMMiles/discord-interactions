[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / DiscordApplicationOptions

# Interface: DiscordApplicationOptions

Defined in: [app/DiscordApplication.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L22)

## Properties

### cache?

> `optional` **cache?**: [`GenericCache`](GenericCache.md)

Defined in: [app/DiscordApplication.ts:39](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L39)

Component State Cache

***

### clientId

> **clientId**: `string`

Defined in: [app/DiscordApplication.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L24)

Application Client ID

***

### hooks?

> `optional` **hooks?**: `Partial`\<[`InteractionHooks`](../type-aliases/InteractionHooks.md)\>

Defined in: [app/DiscordApplication.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L33)

Hooks to perform additional processing on certain interactions before passing to their handlers. Upon returning true, all further execution is halted.

***

### preserveRaw?

> `optional` **preserveRaw?**: `boolean`

Defined in: [app/DiscordApplication.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L45)

Whether to preserve the raw interaction object in contexts under ctx.raw - Default: false

***

### publicKey

> **publicKey**: `string`

Defined in: [app/DiscordApplication.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L27)

Application Public Key

***

### syncMode?

> `optional` **syncMode?**: [`SyncMode`](../enumerations/SyncMode.md)

Defined in: [app/DiscordApplication.ts:42](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L42)

What mode to use for syncing the global command manager.

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [app/DiscordApplication.ts:48](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L48)

Timeout after which InteractionHandlerTimedOut is thrown - Default: 2500ms

***

### token

> **token**: `string`

Defined in: [app/DiscordApplication.ts:30](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L30)

Application Bot Token

***

### webhookEvents?

> `optional` **webhookEvents?**: `Partial`\<[`WebhookEventHooks`](../type-aliases/WebhookEventHooks.md)\>

Defined in: [app/DiscordApplication.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L36)

Handlers for HTTP-pushed webhook events (Webhook Events URL), e.g. APPLICATION_AUTHORIZED or ENTITLEMENT_CREATE.
