[@discord-interactions/core](../README.md) / [Exports](../modules.md) / DiscordApplication

# Class: DiscordApplication

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

#### Defined in

[core/src/app/DiscordApplication.ts:78](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L78)

## Properties

### cache

• `Optional` **cache**: [`GenericCache`](../interfaces/GenericCache.md)

#### Defined in

[core/src/app/DiscordApplication.ts:52](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L52)

___

### clientId

• **clientId**: `string`

#### Defined in

[core/src/app/DiscordApplication.ts:50](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L50)

___

### commands

• **commands**: [`CommandManager`](CommandManager.md)

#### Defined in

[core/src/app/DiscordApplication.ts:54](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L54)

___

### components

• **components**: [`ComponentManager`](ComponentManager.md)

#### Defined in

[core/src/app/DiscordApplication.ts:55](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L55)

___

### guildCommands

• **guildCommands**: `Map`<`string`, [`CommandManager`](CommandManager.md)\>

#### Defined in

[core/src/app/DiscordApplication.ts:57](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L57)

___

### hooks

• **hooks**: [`InteractionHooks`](../modules.md#interactionhooks)

#### Defined in

[core/src/app/DiscordApplication.ts:60](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L60)

___

### publicKey

• **publicKey**: `Buffer`

#### Defined in

[core/src/app/DiscordApplication.ts:49](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L49)

___

### rest

• **rest**: `REST`

#### Defined in

[core/src/app/DiscordApplication.ts:76](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L76)

___

### timeout

• **timeout**: `number` = `2500`

#### Defined in

[core/src/app/DiscordApplication.ts:59](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L59)

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

#### Defined in

[core/src/app/DiscordApplication.ts:181](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L181)

___

### handleInteraction

▸ **handleInteraction**(`body`, `signature`, `timestamp?`): [`Promise`<`FormData` \| `APIInteractionResponse`\>, `Promise`<`void`\>]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` |  |
| `signature` | `string` \| ``false`` |  |
| `timestamp?` | `string` |  |

#### Returns

[`Promise`<`FormData` \| `APIInteractionResponse`\>, `Promise`<`void`\>]

#### Defined in

[core/src/app/DiscordApplication.ts:134](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L134)

___

### verifyInteractionSignature

▸ `Static` **verifyInteractionSignature**(`publicKey`, `timestamp`, `signature`, `body`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `Buffer` |  |
| `timestamp` | `string` |  |
| `signature` | `string` |  |
| `body` | `string` |  |

#### Returns

`boolean`

#### Defined in

[core/src/app/DiscordApplication.ts:106](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L106)
