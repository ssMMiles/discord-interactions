[@discord-interactions/core](../README.md) / [Exports](../modules.md) / SelectMenuContext

# Class: SelectMenuContext<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

## Hierarchy

- `BaseComponentContext`<`S`, `APIMessageComponentSelectMenuInteraction`\>

  ↳ **`SelectMenuContext`**

## Table of contents

### Constructors

- [constructor](SelectMenuContext.md#constructor)

### Properties

- [allowExpired](SelectMenuContext.md#allowexpired)
- [app](SelectMenuContext.md#app)
- [app\_permissions](SelectMenuContext.md#app_permissions)
- [channelId](SelectMenuContext.md#channelid)
- [guildId](SelectMenuContext.md#guildid)
- [guildLocale](SelectMenuContext.md#guildlocale)
- [id](SelectMenuContext.md#id)
- [interactionId](SelectMenuContext.md#interactionid)
- [isDM](SelectMenuContext.md#isdm)
- [locale](SelectMenuContext.md#locale)
- [member](SelectMenuContext.md#member)
- [message](SelectMenuContext.md#message)
- [parentCommand](SelectMenuContext.md#parentcommand)
- [raw](SelectMenuContext.md#raw)
- [receivedAt](SelectMenuContext.md#receivedat)
- [signedAt](SelectMenuContext.md#signedat)
- [state](SelectMenuContext.md#state)
- [user](SelectMenuContext.md#user)
- [values](SelectMenuContext.md#values)

### Accessors

- [expired](SelectMenuContext.md#expired)

### Methods

- [createComponent](SelectMenuContext.md#createcomponent)
- [createGlobalComponent](SelectMenuContext.md#createglobalcomponent)
- [decorate](SelectMenuContext.md#decorate)
- [defer](SelectMenuContext.md#defer)
- [delete](SelectMenuContext.md#delete)
- [edit](SelectMenuContext.md#edit)
- [fetchState](SelectMenuContext.md#fetchstate)
- [rawReply](SelectMenuContext.md#rawreply)
- [reply](SelectMenuContext.md#reply)
- [send](SelectMenuContext.md#send)

## Constructors

### constructor

• **new SelectMenuContext**<`S`\>(`manager`, `interaction`, `timestamps`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIMessageComponentSelectMenuInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`MessageUpdateResponse`](../modules.md#messageupdateresponse)\> |

#### Overrides

BaseComponentContext&lt;S, APIMessageComponentSelectMenuInteraction\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

BaseComponentContext.allowExpired

#### Defined in

[app/contexts/Base.ts:122](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L122)

___

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseComponentContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseComponentContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseComponentContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L48)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseComponentContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseComponentContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseComponentContext.id

#### Defined in

[app/contexts/Base.ts:117](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L117)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseComponentContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseComponentContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseComponentContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseComponentContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L51)

___

### message

• **message**: `APIMessage`

#### Inherited from

BaseComponentContext.message

#### Defined in

[app/contexts/ComponentContext.ts:21](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/ComponentContext.ts#L21)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

BaseComponentContext.parentCommand

#### Defined in

[app/contexts/Base.ts:123](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L123)

___

### raw

• `Optional` **raw**: `APIMessageComponentSelectMenuInteraction`

#### Inherited from

BaseComponentContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseComponentContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L37)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseComponentContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L36)

___

### state

• **state**: `S`

#### Inherited from

BaseComponentContext.state

#### Defined in

[app/contexts/Base.ts:120](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L120)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseComponentContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/Base.ts#L50)

___

### values

• **values**: `string`[]

#### Defined in

[app/contexts/ComponentContext.ts:84](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/contexts/ComponentContext.ts#L84)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseComponentContext.expired

## Methods

### createComponent

▸ **createComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilder` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilder` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Inherited from

BaseComponentContext.createComponent

___

### createGlobalComponent

▸ **createGlobalComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilder` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilder` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Inherited from

BaseComponentContext.createGlobalComponent

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

BaseComponentContext.decorate

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.defer

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.delete

___

### edit

▸ **edit**(`message`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |

#### Returns

`Promise`<`APIMessage`\>

#### Inherited from

BaseComponentContext.edit

___

### fetchState

▸ **fetchState**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.fetchState

___

### rawReply

▸ **rawReply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MessageUpdateResponse`](../modules.md#messageupdateresponse) |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.rawReply

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `APIInteractionResponseUpdateMessage` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.reply

___

### send

▸ **send**(`message`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |

#### Returns

`Promise`<`APIMessage`\>

#### Inherited from

BaseComponentContext.send
