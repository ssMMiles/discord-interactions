[@discord-interactions/core](../README.md) / [Exports](../modules.md) / SlashCommandContext

# Class: SlashCommandContext

## Hierarchy

- `BaseCommandContext`<`APIChatInputApplicationCommandInteraction`\>

  ↳ **`SlashCommandContext`**

## Table of contents

### Constructors

- [constructor](SlashCommandContext.md#constructor)

### Properties

- [app](SlashCommandContext.md#app)
- [app\_permissions](SlashCommandContext.md#app_permissions)
- [channelId](SlashCommandContext.md#channelid)
- [commandGuildId](SlashCommandContext.md#commandguildid)
- [group](SlashCommandContext.md#group)
- [guildId](SlashCommandContext.md#guildid)
- [guildLocale](SlashCommandContext.md#guildlocale)
- [id](SlashCommandContext.md#id)
- [interactionId](SlashCommandContext.md#interactionid)
- [isDM](SlashCommandContext.md#isdm)
- [locale](SlashCommandContext.md#locale)
- [member](SlashCommandContext.md#member)
- [name](SlashCommandContext.md#name)
- [parentCommand](SlashCommandContext.md#parentcommand)
- [raw](SlashCommandContext.md#raw)
- [receivedAt](SlashCommandContext.md#receivedat)
- [resolved](SlashCommandContext.md#resolved)
- [signedAt](SlashCommandContext.md#signedat)
- [user](SlashCommandContext.md#user)

### Accessors

- [expired](SlashCommandContext.md#expired)

### Methods

- [createComponent](SlashCommandContext.md#createcomponent)
- [createGlobalComponent](SlashCommandContext.md#createglobalcomponent)
- [decorate](SlashCommandContext.md#decorate)
- [defer](SlashCommandContext.md#defer)
- [delete](SlashCommandContext.md#delete)
- [edit](SlashCommandContext.md#edit)
- [getAttachmentOption](SlashCommandContext.md#getattachmentoption)
- [getBooleanOption](SlashCommandContext.md#getbooleanoption)
- [getChannelOption](SlashCommandContext.md#getchanneloption)
- [getIntegerOption](SlashCommandContext.md#getintegeroption)
- [getMentionableOption](SlashCommandContext.md#getmentionableoption)
- [getNumberOption](SlashCommandContext.md#getnumberoption)
- [getRoleOption](SlashCommandContext.md#getroleoption)
- [getStringOption](SlashCommandContext.md#getstringoption)
- [getUserOption](SlashCommandContext.md#getuseroption)
- [hasOption](SlashCommandContext.md#hasoption)
- [rawReply](SlashCommandContext.md#rawreply)
- [reply](SlashCommandContext.md#reply)
- [send](SlashCommandContext.md#send)

## Constructors

### constructor

• **new SlashCommandContext**(`app`, `interaction`, `timestamps`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIChatInputApplicationCommandInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ChannelMessageResponse`](../modules.md#channelmessageresponse)\> |

#### Overrides

BaseCommandContext&lt;APIChatInputApplicationCommandInteraction\&gt;.constructor

## Properties

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseCommandContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseCommandContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseCommandContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L48)

___

### commandGuildId

• `Optional` **commandGuildId**: `string`

#### Inherited from

BaseCommandContext.commandGuildId

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:50](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L50)

___

### group

• `Optional` **group**: `string`

The subcommand group

#### Defined in

[app/contexts/application_commands/SlashCommandContext.ts:35](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/application_commands/SlashCommandContext.ts#L35)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseCommandContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseCommandContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Inherited from

BaseCommandContext.id

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:47](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L47)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseCommandContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseCommandContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseCommandContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseCommandContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L51)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:46](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L46)

___

### parentCommand

• `Optional` **parentCommand**: `string`

The parent command, if this is a subcommand.

#### Defined in

[app/contexts/application_commands/SlashCommandContext.ts:30](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/application_commands/SlashCommandContext.ts#L30)

___

### raw

• `Optional` **raw**: `APIChatInputApplicationCommandInteraction`

#### Inherited from

BaseCommandContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseCommandContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L37)

___

### resolved

• **resolved**: `ResolvedData`

#### Inherited from

BaseCommandContext.resolved

#### Defined in

[app/contexts/application_commands/ApplicationCommandContext.ts:52](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L52)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseCommandContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L36)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseCommandContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/Base.ts#L50)

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

#### Overrides

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

▸ **defer**(`flags?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags?` | `MessageFlags` |

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

### getAttachmentOption

▸ **getAttachmentOption**(`name`): `APIApplicationCommandInteractionDataAttachmentOption` & { `attachment`: `APIAttachment`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataAttachmentOption` & { `attachment`: `APIAttachment`  }

___

### getBooleanOption

▸ **getBooleanOption**(`name`): `APIApplicationCommandInteractionDataBooleanOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataBooleanOption`

___

### getChannelOption

▸ **getChannelOption**(`name`): `APIApplicationCommandInteractionDataChannelOption` & { `channel`: `APIInteractionDataResolvedChannel`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataChannelOption` & { `channel`: `APIInteractionDataResolvedChannel`  }

___

### getIntegerOption

▸ **getIntegerOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

___

### getMentionableOption

▸ **getMentionableOption**(`name`): `APIApplicationCommandInteractionDataMentionableOption` & { `role?`: `APIRole` ; `user?`: `APIUser`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataMentionableOption` & { `role?`: `APIRole` ; `user?`: `APIUser`  }

___

### getNumberOption

▸ **getNumberOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

___

### getRoleOption

▸ **getRoleOption**(`name`): `APIApplicationCommandInteractionDataRoleOption` & { `role`: `APIRole`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataRoleOption` & { `role`: `APIRole`  }

___

### getStringOption

▸ **getStringOption**(`name`): `APIApplicationCommandInteractionDataStringOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataStringOption`

___

### getUserOption

▸ **getUserOption**(`name`): `APIApplicationCommandInteractionDataUserOption` & { `member?`: `APIInteractionDataResolvedGuildMember` ; `user`: `APIUser`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataUserOption` & { `member?`: `APIInteractionDataResolvedGuildMember` ; `user`: `APIUser`  }

___

### hasOption

▸ **hasOption**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

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
