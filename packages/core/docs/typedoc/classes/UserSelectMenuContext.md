[@discord-interactions/core](../README.md) / [Exports](../modules.md) / UserSelectMenuContext

# Class: UserSelectMenuContext<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

## Hierarchy

- `BaseSelectMenuContext`<`S`, `SelectMenuDataType`\>

  ↳ **`UserSelectMenuContext`**

## Table of contents

### Constructors

- [constructor](UserSelectMenuContext.md#constructor)

### Properties

- [allowExpired](UserSelectMenuContext.md#allowexpired)
- [app](UserSelectMenuContext.md#app)
- [app\_permissions](UserSelectMenuContext.md#app_permissions)
- [channelId](UserSelectMenuContext.md#channelid)
- [guildId](UserSelectMenuContext.md#guildid)
- [guildLocale](UserSelectMenuContext.md#guildlocale)
- [id](UserSelectMenuContext.md#id)
- [interactionId](UserSelectMenuContext.md#interactionid)
- [isDM](UserSelectMenuContext.md#isdm)
- [locale](UserSelectMenuContext.md#locale)
- [member](UserSelectMenuContext.md#member)
- [message](UserSelectMenuContext.md#message)
- [parentCommand](UserSelectMenuContext.md#parentcommand)
- [raw](UserSelectMenuContext.md#raw)
- [receivedAt](UserSelectMenuContext.md#receivedat)
- [signedAt](UserSelectMenuContext.md#signedat)
- [state](UserSelectMenuContext.md#state)
- [target](UserSelectMenuContext.md#target)
- [user](UserSelectMenuContext.md#user)
- [values](UserSelectMenuContext.md#values)

### Accessors

- [expired](UserSelectMenuContext.md#expired)

### Methods

- [createComponent](UserSelectMenuContext.md#createcomponent)
- [createGlobalComponent](UserSelectMenuContext.md#createglobalcomponent)
- [decorate](UserSelectMenuContext.md#decorate)
- [defer](UserSelectMenuContext.md#defer)
- [delete](UserSelectMenuContext.md#delete)
- [edit](UserSelectMenuContext.md#edit)
- [fetchState](UserSelectMenuContext.md#fetchstate)
- [rawReply](UserSelectMenuContext.md#rawreply)
- [reply](UserSelectMenuContext.md#reply)
- [send](UserSelectMenuContext.md#send)

## Constructors

### constructor

• **new UserSelectMenuContext**<`S`\>(`manager`, `interaction`, `timestamps`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `SelectMenuInteraction`<`APIMessageUserSelectInteractionData`\> |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`MessageUpdateResponse`](../modules.md#messageupdateresponse)\> |

#### Overrides

BaseSelectMenuContext&lt;S, SelectMenuDataType\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

BaseSelectMenuContext.allowExpired

#### Defined in

[app/contexts/Base.ts:127](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L127)

___

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseSelectMenuContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseSelectMenuContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseSelectMenuContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L48)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseSelectMenuContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseSelectMenuContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseSelectMenuContext.id

#### Defined in

[app/contexts/Base.ts:122](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L122)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseSelectMenuContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseSelectMenuContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseSelectMenuContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseSelectMenuContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L51)

___

### message

• **message**: `APIMessage`

#### Inherited from

BaseSelectMenuContext.message

#### Defined in

[app/contexts/components/ComponentContext.ts:19](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/components/ComponentContext.ts#L19)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

BaseSelectMenuContext.parentCommand

#### Defined in

[app/contexts/Base.ts:128](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L128)

___

### raw

• `Optional` **raw**: `SelectMenuInteraction`<`APIMessageUserSelectInteractionData`\>

#### Inherited from

BaseSelectMenuContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseSelectMenuContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L37)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseSelectMenuContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L36)

___

### state

• **state**: `S`

#### Inherited from

BaseSelectMenuContext.state

#### Defined in

[app/contexts/Base.ts:125](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L125)

___

### target

• **target**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `member?` | `APIInteractionDataResolvedGuildMember` |
| `user` | `APIUser` |

#### Defined in

[app/contexts/components/select_menus/UserSelectMenuContext.ts:14](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/components/select_menus/UserSelectMenuContext.ts#L14)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseSelectMenuContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L50)

___

### values

• **values**: `string`[]

#### Overrides

BaseSelectMenuContext.values

#### Defined in

[app/contexts/components/select_menus/UserSelectMenuContext.ts:12](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/components/select_menus/UserSelectMenuContext.ts#L12)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseSelectMenuContext.expired

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

BaseSelectMenuContext.createComponent

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

BaseSelectMenuContext.createGlobalComponent

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

BaseSelectMenuContext.decorate

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.defer

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.delete

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

BaseSelectMenuContext.edit

___

### fetchState

▸ **fetchState**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.fetchState

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

BaseSelectMenuContext.rawReply

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

BaseSelectMenuContext.reply

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

BaseSelectMenuContext.send
