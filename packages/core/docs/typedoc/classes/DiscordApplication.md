[@discord-interactions/core](../README.md) / [Exports](../modules.md) / DiscordApplication

# Class: DiscordApplication

Main class for managing a Discord Application's commands and handling interactions.

## Table of contents

### Constructors

- [constructor](DiscordApplication.md#constructor)

### Properties

- [cache](DiscordApplication.md#cache)
- [clientId](DiscordApplication.md#clientid)
- [commands](DiscordApplication.md#commands)
- [components](DiscordApplication.md#components)
- [guildCommands](DiscordApplication.md#guildcommands)
- [hooks](DiscordApplication.md#hooks)
- [publicKey](DiscordApplication.md#publickey)
- [rest](DiscordApplication.md#rest)
- [timeout](DiscordApplication.md#timeout)

### Methods

- [addHook](DiscordApplication.md#addhook)
- [handleInteraction](DiscordApplication.md#handleinteraction)
- [verifyInteractionSignature](DiscordApplication.md#verifyinteractionsignature)

## Constructors

### constructor

• **new DiscordApplication**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DiscordApplicationOptions`](../interfaces/DiscordApplicationOptions.md) |

## Properties

### cache

• `Optional` **cache**: [`GenericCache`](../interfaces/GenericCache.md)

#### Defined in

[app/DiscordApplication.ts:51](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L51)

___

### clientId

• **clientId**: `string`

#### Defined in

[app/DiscordApplication.ts:49](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L49)

___

### commands

• **commands**: [`CommandManager`](CommandManager.md)

#### Defined in

[app/DiscordApplication.ts:53](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L53)

___

### components

• **components**: [`ComponentManager`](ComponentManager.md)

#### Defined in

[app/DiscordApplication.ts:54](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L54)

___

### guildCommands

• **guildCommands**: `Map`<`string`, [`CommandManager`](CommandManager.md)\>

#### Defined in

[app/DiscordApplication.ts:56](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L56)

___

### hooks

• **hooks**: [`InteractionHooks`](../modules.md#interactionhooks)

#### Defined in

[app/DiscordApplication.ts:59](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L59)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[app/DiscordApplication.ts:48](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L48)

___

### rest

• **rest**: `REST`

#### Defined in

[app/DiscordApplication.ts:75](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L75)

___

### timeout

• **timeout**: `number` = `2500`

#### Defined in

[app/DiscordApplication.ts:58](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/DiscordApplication.ts#L58)

## Methods

### addHook

▸ **addHook**<`T`\>(`hook`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`InteractionHooks`](../modules.md#interactionhooks) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hook` | `T` |
| `handler` | (`ctx`: [`ContextMap`](../modules.md#contextmap)[`T`]) => `Promise`<``true`` \| `void`\> |

#### Returns

`void`

___

### handleInteraction

▸ **handleInteraction**(`body`, `signature`, `timestamp?`): [`Promise`<`FormData` \| `APIInteractionResponse`\>, `Promise`<`void`\>]

Handle an incoming interaction request

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | Raw interaction body |
| `signature` | `string` \| ``false`` | Request's "X-Signature-Ed25519" header or false to skip signature verification |
| `timestamp?` | `string` | Request's "X-Signature-Timestamp" header |

#### Returns

[`Promise`<`FormData` \| `APIInteractionResponse`\>, `Promise`<`void`\>]

Array containing the interaction response, and a callback to be called after you have sent the response

___

### verifyInteractionSignature

▸ `Static` **verifyInteractionSignature**(`publicKey`, `timestamp`, `signature`, `body`): `Promise`<`boolean`\>

Verify an incoming interaction's signature. This method is not implemented in `core`, please import either `@discord-interactions/verify` or `@discord-interactions/verify-node`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | Your application's public key |
| `timestamp` | `string` | Interaction's "X-Signature-Timestamp" header |
| `signature` | `string` | Interaction's "X-Signature-Ed25519" header |
| `body` | `string` | Raw interaction body |

#### Returns

`Promise`<`boolean`\>

Whether or not the signature is valid
