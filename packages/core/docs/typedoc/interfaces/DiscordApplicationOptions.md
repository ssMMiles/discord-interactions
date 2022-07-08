[@discord-interactions/core](../README.md) / [Exports](../modules.md) / DiscordApplicationOptions

# Interface: DiscordApplicationOptions

## Table of contents

### Properties

- [cache](DiscordApplicationOptions.md#cache)
- [clientId](DiscordApplicationOptions.md#clientid)
- [hooks](DiscordApplicationOptions.md#hooks)
- [publicKey](DiscordApplicationOptions.md#publickey)
- [timeout](DiscordApplicationOptions.md#timeout)
- [token](DiscordApplicationOptions.md#token)

## Properties

### cache

• `Optional` **cache**: [`GenericCache`](GenericCache.md)

Component State Cache

#### Defined in

[app/DiscordApplication.ts:34](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L34)

___

### clientId

• **clientId**: `string`

Application Client ID

#### Defined in

[app/DiscordApplication.ts:22](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L22)

___

### hooks

• `Optional` **hooks**: `Partial`<[`InteractionHooks`](../modules.md#interactionhooks)\>

Hooks to perform additional processing on certain interactions before passing to their handlers. Upon returning true, all further execution is halted.

#### Defined in

[app/DiscordApplication.ts:31](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L31)

___

### publicKey

• **publicKey**: `string`

Application Public Key

#### Defined in

[app/DiscordApplication.ts:25](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L25)

___

### timeout

• `Optional` **timeout**: `number`

Timeout after which InteractionHandlerTimedOut is thrown - Default: 2500ms

#### Defined in

[app/DiscordApplication.ts:37](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L37)

___

### token

• **token**: `string`

Application Bot Token

#### Defined in

[app/DiscordApplication.ts:28](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L28)
