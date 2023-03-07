[@discord-interactions/core](../README.md) / [Exports](../modules.md) / RoleSelectMenuContext

# Class: RoleSelectMenuContext<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

## Hierarchy

- `BaseSelectMenuContext`<`S`, `SelectMenuDataType`\>

  ↳ **`RoleSelectMenuContext`**

## Table of contents

### Constructors

- [constructor](RoleSelectMenuContext.md#constructor)

### Properties

- [allowExpired](RoleSelectMenuContext.md#allowexpired)
- [app](RoleSelectMenuContext.md#app)
- [app\_permissions](RoleSelectMenuContext.md#app_permissions)
- [channelId](RoleSelectMenuContext.md#channelid)
- [guildId](RoleSelectMenuContext.md#guildid)
- [guildLocale](RoleSelectMenuContext.md#guildlocale)
- [id](RoleSelectMenuContext.md#id)
- [interactionId](RoleSelectMenuContext.md#interactionid)
- [isDM](RoleSelectMenuContext.md#isdm)
- [locale](RoleSelectMenuContext.md#locale)
- [member](RoleSelectMenuContext.md#member)
- [message](RoleSelectMenuContext.md#message)
- [parentCommand](RoleSelectMenuContext.md#parentcommand)
- [raw](RoleSelectMenuContext.md#raw)
- [receivedAt](RoleSelectMenuContext.md#receivedat)
- [signedAt](RoleSelectMenuContext.md#signedat)
- [state](RoleSelectMenuContext.md#state)
- [target](RoleSelectMenuContext.md#target)
- [user](RoleSelectMenuContext.md#user)
- [values](RoleSelectMenuContext.md#values)

### Accessors

- [expired](RoleSelectMenuContext.md#expired)

### Methods

- [createComponent](RoleSelectMenuContext.md#createcomponent)
- [createGlobalComponent](RoleSelectMenuContext.md#createglobalcomponent)
- [decorate](RoleSelectMenuContext.md#decorate)
- [defer](RoleSelectMenuContext.md#defer)
- [deferFollowup](RoleSelectMenuContext.md#deferfollowup)
- [deferUpdate](RoleSelectMenuContext.md#deferupdate)
- [delete](RoleSelectMenuContext.md#delete)
- [edit](RoleSelectMenuContext.md#edit)
- [fetchState](RoleSelectMenuContext.md#fetchstate)
- [rawReply](RoleSelectMenuContext.md#rawreply)
- [reply](RoleSelectMenuContext.md#reply)
- [replyFollowup](RoleSelectMenuContext.md#replyfollowup)
- [replyUpdate](RoleSelectMenuContext.md#replyupdate)
- [send](RoleSelectMenuContext.md#send)

## Constructors

### constructor

• **new RoleSelectMenuContext**<`S`\>(`manager`, `interaction`, `timestamps`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `SelectMenuInteraction`<`APIMessageRoleSelectInteractionData`\> |
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

[app/contexts/Base.ts:127](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L127)

___

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseSelectMenuContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseSelectMenuContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseSelectMenuContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L48)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseSelectMenuContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseSelectMenuContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseSelectMenuContext.id

#### Defined in

[app/contexts/Base.ts:122](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L122)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseSelectMenuContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseSelectMenuContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseSelectMenuContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseSelectMenuContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L51)

___

### message

• **message**: `APIMessage`

#### Inherited from

BaseSelectMenuContext.message

#### Defined in

[app/contexts/components/ComponentContext.ts:20](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/components/ComponentContext.ts#L20)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

BaseSelectMenuContext.parentCommand

#### Defined in

[app/contexts/Base.ts:128](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L128)

___

### raw

• `Optional` **raw**: `SelectMenuInteraction`<`APIMessageRoleSelectInteractionData`\>

#### Inherited from

BaseSelectMenuContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseSelectMenuContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L37)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseSelectMenuContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L36)

___

### state

• **state**: `S`

#### Inherited from

BaseSelectMenuContext.state

#### Defined in

[app/contexts/Base.ts:125](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L125)

___

### target

• **target**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `role` | `APIRole` |

#### Defined in

[app/contexts/components/select_menus/RoleSelectMenuContext.ts:10](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/components/select_menus/RoleSelectMenuContext.ts#L10)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseSelectMenuContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L50)

___

### values

• **values**: `string`[]

#### Overrides

BaseSelectMenuContext.values

#### Defined in

[app/contexts/components/select_menus/RoleSelectMenuContext.ts:8](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/components/select_menus/RoleSelectMenuContext.ts#L8)

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

### deferFollowup

▸ **deferFollowup**(`flags?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags?` | `MessageFlags` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.deferFollowup

___

### deferUpdate

▸ **deferUpdate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.deferUpdate

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

### replyFollowup

▸ **replyFollowup**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `APIInteractionResponseChannelMessageWithSource` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.replyFollowup

___

### replyUpdate

▸ **replyUpdate**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `APIInteractionResponseUpdateMessage` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseSelectMenuContext.replyUpdate

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
