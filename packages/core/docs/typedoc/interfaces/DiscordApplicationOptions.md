[@discord-interactions/core](../README.md) / [Exports](../modules.md) / DiscordApplicationOptions

# Interface: DiscordApplicationOptions

## Table of contents

### Properties

- [cache](DiscordApplicationOptions.md#cache)
- [clientId](DiscordApplicationOptions.md#clientid)
- [hooks](DiscordApplicationOptions.md#hooks)
- [preserveRaw](DiscordApplicationOptions.md#preserveraw)
- [publicKey](DiscordApplicationOptions.md#publickey)
- [syncMode](DiscordApplicationOptions.md#syncmode)
- [timeout](DiscordApplicationOptions.md#timeout)
- [token](DiscordApplicationOptions.md#token)

## Properties

### cache

• `Optional` **cache**: [`GenericCache`](GenericCache.md)

Component State Cache

#### Defined in

[app/DiscordApplication.ts:35](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L35)

___

### clientId

• **clientId**: `string`

Application Client ID

#### Defined in

[app/DiscordApplication.ts:23](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L23)

___

### hooks

• `Optional` **hooks**: `Partial`<[`InteractionHooks`](../modules.md#interactionhooks)\>

Hooks to perform additional processing on certain interactions before passing to their handlers. Upon returning true, all further execution is halted.

#### Defined in

[app/DiscordApplication.ts:32](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L32)

___

### preserveRaw

• `Optional` **preserveRaw**: `boolean`

Whether to preserve the raw interaction object in contexts under ctx.raw - Default: false

#### Defined in

[app/DiscordApplication.ts:41](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L41)

___

### publicKey

• **publicKey**: `string`

Application Public Key

#### Defined in

[app/DiscordApplication.ts:26](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L26)

___

### syncMode

• `Optional` **syncMode**: [`SyncMode`](../enums/SyncMode.md)

What mode to use for syncing the global command manager.

#### Defined in

[app/DiscordApplication.ts:38](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L38)

___

### timeout

• `Optional` **timeout**: `number`

Timeout after which InteractionHandlerTimedOut is thrown - Default: 2500ms

#### Defined in

[app/DiscordApplication.ts:44](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L44)

___

### token

• **token**: `string`

Application Bot Token

#### Defined in

[app/DiscordApplication.ts:29](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L29)
