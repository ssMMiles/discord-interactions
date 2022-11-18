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
- [preserveRaw](DiscordApplication.md#preserveraw)
- [publicKey](DiscordApplication.md#publickey)
- [rest](DiscordApplication.md#rest)
- [timeout](DiscordApplication.md#timeout)

### Methods

- [addHook](DiscordApplication.md#addhook)
- [createGuildCommandManager](DiscordApplication.md#createguildcommandmanager)
- [handleInteraction](DiscordApplication.md#handleinteraction)
- [setAPIClient](DiscordApplication.md#setapiclient)
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

[app/DiscordApplication.ts:66](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L66)

___

### clientId

• **clientId**: `string`

#### Defined in

[app/DiscordApplication.ts:64](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L64)

___

### commands

• **commands**: [`CommandManager`](CommandManager.md)

#### Defined in

[app/DiscordApplication.ts:68](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L68)

___

### components

• **components**: [`ComponentManager`](ComponentManager.md)

#### Defined in

[app/DiscordApplication.ts:71](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L71)

___

### guildCommands

• **guildCommands**: `Map`<`string`, [`CommandManager`](CommandManager.md)\>

#### Defined in

[app/DiscordApplication.ts:69](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L69)

___

### hooks

• **hooks**: [`InteractionHooks`](../modules.md#interactionhooks)

#### Defined in

[app/DiscordApplication.ts:76](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L76)

___

### preserveRaw

• **preserveRaw**: `boolean`

#### Defined in

[app/DiscordApplication.ts:73](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L73)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[app/DiscordApplication.ts:63](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L63)

___

### rest

• **rest**: `DiscordApiClient`

#### Defined in

[app/DiscordApplication.ts:92](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L92)

___

### timeout

• **timeout**: `number` = `2500`

#### Defined in

[app/DiscordApplication.ts:74](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L74)

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

### createGuildCommandManager

▸ **createGuildCommandManager**(`guildId`, `syncMode?`): [`CommandManager`](CommandManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildId` | `string` |
| `syncMode?` | [`SyncMode`](../enums/SyncMode.md) |

#### Returns

[`CommandManager`](CommandManager.md)

___

### handleInteraction

▸ **handleInteraction**(`body`, `signature`, `timestamp?`): `Promise`<[`Promise`<`APIInteractionResponse` \| `FormData`\>, `Promise`<`void`\>]\>

Handle an incoming interaction request

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | Raw interaction body |
| `signature` | `string` \| ``false`` | Request's "X-Signature-Ed25519" header or false to skip signature verification |
| `timestamp?` | `string` | Request's "X-Signature-Timestamp" header |

#### Returns

`Promise`<[`Promise`<`APIInteractionResponse` \| `FormData`\>, `Promise`<`void`\>]\>

Array containing the interaction response, and a callback to be called after you have sent the response

___

### setAPIClient

▸ **setAPIClient**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `DiscordApiClient` |

#### Returns

`void`

___

### verifyInteractionSignature

▸ **verifyInteractionSignature**(`signature`, `timestamp`, `body`): `Promise`<`boolean`\>

Verify an incoming interaction's signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | Interaction Request's "X-Signature-Ed25519" Header |
| `timestamp` | `string` | Interaction Request's "X-Signature-Timestamp" Header |
| `body` | `string` | Raw Interaction Request Body - If you parse this as JSON beforehand, verification will fail for certain interactions. |

#### Returns

`Promise`<`boolean`\>

Whether or not the request signature is valid.
