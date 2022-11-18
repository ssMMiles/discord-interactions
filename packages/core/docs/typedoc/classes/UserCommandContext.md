[@discord-interactions/core](../README.md) / [Exports](../modules.md) / UserCommandContext

# Class: UserCommandContext

## Hierarchy

- `BaseCommandContext`<`APIUserApplicationCommandInteraction`\>

  ↳ **`UserCommandContext`**

## Table of contents

### Constructors

- [constructor](UserCommandContext.md#constructor)

### Properties

- [app](UserCommandContext.md#app)
- [app\_permissions](UserCommandContext.md#app_permissions)
- [channelId](UserCommandContext.md#channelid)
- [commandGuildId](UserCommandContext.md#commandguildid)
- [guildId](UserCommandContext.md#guildid)
- [guildLocale](UserCommandContext.md#guildlocale)
- [id](UserCommandContext.md#id)
- [interactionId](UserCommandContext.md#interactionid)
- [isDM](UserCommandContext.md#isdm)
- [locale](UserCommandContext.md#locale)
- [member](UserCommandContext.md#member)
- [name](UserCommandContext.md#name)
- [raw](UserCommandContext.md#raw)
- [receivedAt](UserCommandContext.md#receivedat)
- [resolved](UserCommandContext.md#resolved)
- [signedAt](UserCommandContext.md#signedat)
- [target](UserCommandContext.md#target)
- [user](UserCommandContext.md#user)

### Accessors

- [expired](UserCommandContext.md#expired)

### Methods

- [createComponent](UserCommandContext.md#createcomponent)
- [createGlobalComponent](UserCommandContext.md#createglobalcomponent)
- [decorate](UserCommandContext.md#decorate)
- [defer](UserCommandContext.md#defer)
- [delete](UserCommandContext.md#delete)
- [edit](UserCommandContext.md#edit)
- [rawReply](UserCommandContext.md#rawreply)
- [reply](UserCommandContext.md#reply)
- [send](UserCommandContext.md#send)

## Constructors

### constructor

• **new UserCommandContext**(`app`, `interaction`, `timestamps`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIUserApplicationCommandInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ChannelMessageResponse`](../modules.md#channelmessageresponse)\> |

#### Overrides

BaseCommandContext&lt;APIUserApplicationCommandInteraction\&gt;.constructor

## Properties

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseCommandContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseCommandContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseCommandContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L48)

___

### commandGuildId

• `Optional` **commandGuildId**: `string`

#### Inherited from

BaseCommandContext.commandGuildId

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:49](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L49)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseCommandContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseCommandContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseCommandContext.id

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:46](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L46)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseCommandContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseCommandContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseCommandContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseCommandContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L51)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:45](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L45)

___

### raw

• `Optional` **raw**: `APIUserApplicationCommandInteraction`

#### Inherited from

BaseCommandContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseCommandContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L37)

___

### resolved

• **resolved**: `ResolvedData`

#### Inherited from

BaseCommandContext.resolved

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:51](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L51)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseCommandContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L36)

___

### target

• **target**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `member?` | `APIInteractionDataResolvedGuildMember` |
| `user` | `APIUser` |

#### Defined in

[app/contexts/application_commands/UserCommandContext.ts:11](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/application_commands/UserCommandContext.ts#L11)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseCommandContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/Base.ts#L50)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommandContext.expired

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

BaseCommandContext.createComponent

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

BaseCommandContext.createGlobalComponent

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

BaseCommandContext.decorate

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.defer

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.delete

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

BaseCommandContext.edit

___

### rawReply

▸ **rawReply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`ChannelMessageResponse`](../modules.md#channelmessageresponse) |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.rawReply

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `APIInteractionResponseChannelMessageWithSource` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.reply

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

BaseCommandContext.send
