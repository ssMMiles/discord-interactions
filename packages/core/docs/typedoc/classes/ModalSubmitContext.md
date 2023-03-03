[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ModalSubmitContext

# Class: ModalSubmitContext<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | `never` |

## Hierarchy

- `BaseStatefulInteractionContext`<`State`, `APIModalSubmitInteraction`, [`ModalSubmitResponse`](../modules.md#modalsubmitresponse)\>

  ↳ **`ModalSubmitContext`**

## Table of contents

### Constructors

- [constructor](ModalSubmitContext.md#constructor)

### Properties

- [allowExpired](ModalSubmitContext.md#allowexpired)
- [app](ModalSubmitContext.md#app)
- [app\_permissions](ModalSubmitContext.md#app_permissions)
- [channelId](ModalSubmitContext.md#channelid)
- [components](ModalSubmitContext.md#components)
- [guildId](ModalSubmitContext.md#guildid)
- [guildLocale](ModalSubmitContext.md#guildlocale)
- [id](ModalSubmitContext.md#id)
- [interactionId](ModalSubmitContext.md#interactionid)
- [isDM](ModalSubmitContext.md#isdm)
- [locale](ModalSubmitContext.md#locale)
- [member](ModalSubmitContext.md#member)
- [parentCommand](ModalSubmitContext.md#parentcommand)
- [raw](ModalSubmitContext.md#raw)
- [receivedAt](ModalSubmitContext.md#receivedat)
- [signedAt](ModalSubmitContext.md#signedat)
- [state](ModalSubmitContext.md#state)
- [user](ModalSubmitContext.md#user)

### Accessors

- [expired](ModalSubmitContext.md#expired)

### Methods

- [createComponent](ModalSubmitContext.md#createcomponent)
- [createGlobalComponent](ModalSubmitContext.md#createglobalcomponent)
- [decorate](ModalSubmitContext.md#decorate)
- [defer](ModalSubmitContext.md#defer)
- [delete](ModalSubmitContext.md#delete)
- [edit](ModalSubmitContext.md#edit)
- [fetchState](ModalSubmitContext.md#fetchstate)
- [rawReply](ModalSubmitContext.md#rawreply)
- [reply](ModalSubmitContext.md#reply)
- [send](ModalSubmitContext.md#send)

## Constructors

### constructor

• **new ModalSubmitContext**<`State`\>(`manager`, `interaction`, `timestamps`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIModalSubmitInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ModalSubmitResponse`](../modules.md#modalsubmitresponse)\> |

#### Overrides

BaseStatefulInteractionContext&lt;
  State,
  APIModalSubmitInteraction,
  ModalSubmitResponse
\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

BaseStatefulInteractionContext.allowExpired

#### Defined in

[app/contexts/Base.ts:127](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L127)

___

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseStatefulInteractionContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseStatefulInteractionContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseStatefulInteractionContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L48)

___

### components

• **components**: `Map`<`string`, `ModalSubmitComponent`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:20](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/ModalSubmitContext.ts#L20)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseStatefulInteractionContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseStatefulInteractionContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseStatefulInteractionContext.id

#### Defined in

[app/contexts/Base.ts:122](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L122)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseStatefulInteractionContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseStatefulInteractionContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseStatefulInteractionContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseStatefulInteractionContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L51)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Overrides

BaseStatefulInteractionContext.parentCommand

#### Defined in

[app/contexts/ModalSubmitContext.ts:22](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/ModalSubmitContext.ts#L22)

___

### raw

• `Optional` **raw**: `APIModalSubmitInteraction`

#### Inherited from

BaseStatefulInteractionContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseStatefulInteractionContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L37)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseStatefulInteractionContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L36)

___

### state

• **state**: `State`

#### Inherited from

BaseStatefulInteractionContext.state

#### Defined in

[app/contexts/Base.ts:125](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L125)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseStatefulInteractionContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L50)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseStatefulInteractionContext.expired

## Methods

### createComponent

▸ **createComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Inherited from

BaseStatefulInteractionContext.createComponent

___

### createGlobalComponent

▸ **createGlobalComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Inherited from

BaseStatefulInteractionContext.createGlobalComponent

___

### decorate

▸ **decorate**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Inherited from

BaseStatefulInteractionContext.decorate

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### edit

▸ **edit**(`message`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |

#### Returns

`Promise`<`APIMessage`\>

___

### fetchState

▸ **fetchState**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseStatefulInteractionContext.fetchState

___

### rawReply

▸ **rawReply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`ModalSubmitResponse`](../modules.md#modalsubmitresponse) |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseStatefulInteractionContext.rawReply

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `APIInteractionResponseChannelMessageWithSource` \| `FormData` \| `MessageBuilder` |

#### Returns

`Promise`<`void`\>

___

### send

▸ **send**(`message`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |

#### Returns

`Promise`<`APIMessage`\>
