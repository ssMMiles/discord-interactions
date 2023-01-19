[@discord-interactions/core](../README.md) / [Exports](../modules.md) / MentionableSelectMenuContext

# Class: MentionableSelectMenuContext<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

## Hierarchy

- `BaseSelectMenuContext`<`S`, `SelectMenuDataType`\>

  ↳ **`MentionableSelectMenuContext`**

## Table of contents

### Constructors

- [constructor](MentionableSelectMenuContext.md#constructor)

### Properties

- [allowExpired](MentionableSelectMenuContext.md#allowexpired)
- [app](MentionableSelectMenuContext.md#app)
- [app\_permissions](MentionableSelectMenuContext.md#app_permissions)
- [channelId](MentionableSelectMenuContext.md#channelid)
- [guildId](MentionableSelectMenuContext.md#guildid)
- [guildLocale](MentionableSelectMenuContext.md#guildlocale)
- [id](MentionableSelectMenuContext.md#id)
- [interactionId](MentionableSelectMenuContext.md#interactionid)
- [isDM](MentionableSelectMenuContext.md#isdm)
- [locale](MentionableSelectMenuContext.md#locale)
- [member](MentionableSelectMenuContext.md#member)
- [message](MentionableSelectMenuContext.md#message)
- [parentCommand](MentionableSelectMenuContext.md#parentcommand)
- [raw](MentionableSelectMenuContext.md#raw)
- [receivedAt](MentionableSelectMenuContext.md#receivedat)
- [signedAt](MentionableSelectMenuContext.md#signedat)
- [state](MentionableSelectMenuContext.md#state)
- [target](MentionableSelectMenuContext.md#target)
- [user](MentionableSelectMenuContext.md#user)
- [values](MentionableSelectMenuContext.md#values)

### Accessors

- [expired](MentionableSelectMenuContext.md#expired)

### Methods

- [createComponent](MentionableSelectMenuContext.md#createcomponent)
- [createGlobalComponent](MentionableSelectMenuContext.md#createglobalcomponent)
- [decorate](MentionableSelectMenuContext.md#decorate)
- [defer](MentionableSelectMenuContext.md#defer)
- [delete](MentionableSelectMenuContext.md#delete)
- [edit](MentionableSelectMenuContext.md#edit)
- [fetchState](MentionableSelectMenuContext.md#fetchstate)
- [rawReply](MentionableSelectMenuContext.md#rawreply)
- [reply](MentionableSelectMenuContext.md#reply)
- [send](MentionableSelectMenuContext.md#send)

## Constructors

### constructor

• **new MentionableSelectMenuContext**<`S`\>(`manager`, `interaction`, `timestamps`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `SelectMenuInteraction`<`APIMessageMentionableSelectInteractionData`\> |
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

[app/contexts/Base.ts:127](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L127)

___

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseSelectMenuContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseSelectMenuContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseSelectMenuContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L48)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseSelectMenuContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseSelectMenuContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseSelectMenuContext.id

#### Defined in

[app/contexts/Base.ts:122](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L122)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseSelectMenuContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseSelectMenuContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseSelectMenuContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseSelectMenuContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L51)

___

### message

• **message**: `APIMessage`

#### Inherited from

BaseSelectMenuContext.message

#### Defined in

[app/contexts/components/ComponentContext.ts:19](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/components/ComponentContext.ts#L19)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

BaseSelectMenuContext.parentCommand

#### Defined in

[app/contexts/Base.ts:128](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L128)

___

### raw

• `Optional` **raw**: `SelectMenuInteraction`<`APIMessageMentionableSelectInteractionData`\>

#### Inherited from

BaseSelectMenuContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseSelectMenuContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L37)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseSelectMenuContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L36)

___

### state

• **state**: `S`

#### Inherited from

BaseSelectMenuContext.state

#### Defined in

[app/contexts/Base.ts:125](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L125)

___

### target

• **target**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `member?` | `APIInteractionDataResolvedGuildMember` |
| `role?` | `APIRole` |
| `user?` | `APIUser` |

#### Defined in

[app/contexts/components/select_menus/MentionableSelectMenuContext.ts:15](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/components/select_menus/MentionableSelectMenuContext.ts#L15)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseSelectMenuContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L50)

___

### values

• **values**: `string`[]

#### Overrides

BaseSelectMenuContext.values

#### Defined in

[app/contexts/components/select_menus/MentionableSelectMenuContext.ts:13](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/components/select_menus/MentionableSelectMenuContext.ts#L13)

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
