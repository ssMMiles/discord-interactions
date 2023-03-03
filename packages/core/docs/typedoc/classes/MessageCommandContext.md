[@discord-interactions/core](../README.md) / [Exports](../modules.md) / MessageCommandContext

# Class: MessageCommandContext

## Hierarchy

- `BaseCommandContext`<`APIMessageApplicationCommandInteraction`\>

  ↳ **`MessageCommandContext`**

## Table of contents

### Constructors

- [constructor](MessageCommandContext.md#constructor)

### Properties

- [app](MessageCommandContext.md#app)
- [app\_permissions](MessageCommandContext.md#app_permissions)
- [channelId](MessageCommandContext.md#channelid)
- [commandGuildId](MessageCommandContext.md#commandguildid)
- [guildId](MessageCommandContext.md#guildid)
- [guildLocale](MessageCommandContext.md#guildlocale)
- [id](MessageCommandContext.md#id)
- [interactionId](MessageCommandContext.md#interactionid)
- [isDM](MessageCommandContext.md#isdm)
- [locale](MessageCommandContext.md#locale)
- [member](MessageCommandContext.md#member)
- [message](MessageCommandContext.md#message)
- [name](MessageCommandContext.md#name)
- [raw](MessageCommandContext.md#raw)
- [receivedAt](MessageCommandContext.md#receivedat)
- [resolved](MessageCommandContext.md#resolved)
- [signedAt](MessageCommandContext.md#signedat)
- [user](MessageCommandContext.md#user)

### Accessors

- [expired](MessageCommandContext.md#expired)

### Methods

- [createComponent](MessageCommandContext.md#createcomponent)
- [createGlobalComponent](MessageCommandContext.md#createglobalcomponent)
- [decorate](MessageCommandContext.md#decorate)
- [defer](MessageCommandContext.md#defer)
- [delete](MessageCommandContext.md#delete)
- [edit](MessageCommandContext.md#edit)
- [rawReply](MessageCommandContext.md#rawreply)
- [reply](MessageCommandContext.md#reply)
- [send](MessageCommandContext.md#send)

## Constructors

### constructor

• **new MessageCommandContext**(`app`, `interaction`, `timestamps`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIMessageApplicationCommandInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ChannelMessageResponse`](../modules.md#channelmessageresponse)\> |

#### Overrides

BaseCommandContext&lt;APIMessageApplicationCommandInteraction\&gt;.constructor

## Properties

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseCommandContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseCommandContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseCommandContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L48)

___

### commandGuildId

• `Optional` **commandGuildId**: `string`

#### Inherited from

BaseCommandContext.commandGuildId

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:49](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L49)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseCommandContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseCommandContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseCommandContext.id

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:46](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L46)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseCommandContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseCommandContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseCommandContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseCommandContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L51)

___

### message

• **message**: `APIMessage`

#### Defined in

[app/contexts/application_commands/MessageCommandContext.ts:7](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/application_commands/MessageCommandContext.ts#L7)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:45](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L45)

___

### raw

• `Optional` **raw**: `APIMessageApplicationCommandInteraction`

#### Inherited from

BaseCommandContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseCommandContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L37)

___

### resolved

• **resolved**: `ResolvedData`

#### Inherited from

BaseCommandContext.resolved

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:51](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L51)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseCommandContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L36)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseCommandContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/contexts/Base.ts#L50)

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
