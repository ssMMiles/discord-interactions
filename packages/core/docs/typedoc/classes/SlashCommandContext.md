[@discord-interactions/core](../README.md) / [Exports](../modules.md) / SlashCommandContext

# Class: SlashCommandContext

## Hierarchy

- `BaseCommandContext`<`APIChatInputApplicationCommandInteraction`\>

  ↳ **`SlashCommandContext`**

## Table of contents

### Constructors

- [constructor](SlashCommandContext.md#constructor)

### Properties

- [group](SlashCommandContext.md#group)
- [interaction](SlashCommandContext.md#interaction)
- [isDM](SlashCommandContext.md#isdm)
- [manager](SlashCommandContext.md#manager)
- [name](SlashCommandContext.md#name)
- [parentCommand](SlashCommandContext.md#parentcommand)
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

• **new SlashCommandContext**(`manager`, `interaction`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIChatInputApplicationCommandInteraction` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ChannelMessageResponse`](../modules.md#channelmessageresponse)\> |

#### Overrides

BaseCommandContext&lt;APIChatInputApplicationCommandInteraction\&gt;.constructor

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:37](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L37)

## Properties

### group

• `Optional` **group**: `string`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:35](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L35)

___

### interaction

• **interaction**: `APIChatInputApplicationCommandInteraction`

#### Inherited from

BaseCommandContext.interaction

#### Defined in

[app/contexts/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L26)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseCommandContext.isDM

#### Defined in

[app/contexts/Base.ts:31](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L31)

___

### manager

• **manager**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseCommandContext.manager

#### Defined in

[app/contexts/Base.ts:24](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L24)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L19)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:30](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L30)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseCommandContext.user

#### Defined in

[app/contexts/Base.ts:29](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L29)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommandContext.expired

#### Defined in

[app/contexts/Base.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L19)

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

#### Overrides

BaseCommandContext.createComponent

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:76](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L76)

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

BaseCommandContext.createGlobalComponent

#### Defined in

[app/contexts/Base.ts:65](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L65)

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

#### Defined in

[app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L58)

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.defer

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:33](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L33)

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.delete

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:73](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L73)

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

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:69](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L69)

___

### getAttachmentOption

▸ **getAttachmentOption**(`name`): `APIApplicationCommandInteractionDataAttachmentOption` & { `attachment`: `APIAttachment`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataAttachmentOption` & { `attachment`: `APIAttachment`  }

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:163](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L163)

___

### getBooleanOption

▸ **getBooleanOption**(`name`): `APIApplicationCommandInteractionDataBooleanOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataBooleanOption`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:100](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L100)

___

### getChannelOption

▸ **getChannelOption**(`name`): `APIApplicationCommandInteractionDataChannelOption` & { `channel`: `APIInteractionDataResolvedChannel`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataChannelOption` & { `channel`: `APIInteractionDataResolvedChannel`  }

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:122](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L122)

___

### getIntegerOption

▸ **getIntegerOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:93](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L93)

___

### getMentionableOption

▸ **getMentionableOption**(`name`): `APIApplicationCommandInteractionDataMentionableOption` & { `role?`: `APIRole` ; `user?`: `APIUser`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataMentionableOption` & { `role?`: `APIRole` ; `user?`: `APIUser`  }

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:144](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L144)

___

### getNumberOption

▸ **getNumberOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:156](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L156)

___

### getRoleOption

▸ **getRoleOption**(`name`): `APIApplicationCommandInteractionDataRoleOption` & { `role`: `APIRole`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataRoleOption` & { `role`: `APIRole`  }

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:134](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L134)

___

### getStringOption

▸ **getStringOption**(`name`): `APIApplicationCommandInteractionDataStringOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataStringOption`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:86](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L86)

___

### getUserOption

▸ **getUserOption**(`name`): `APIApplicationCommandInteractionDataUserOption` & { `member?`: `APIInteractionDataResolvedGuildMember` ; `user`: `APIUser`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataUserOption` & { `member?`: `APIInteractionDataResolvedGuildMember` ; `user`: `APIUser`  }

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:107](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L107)

___

### hasOption

▸ **hasOption**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:82](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L82)

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

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L54)

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` \| `APIInteractionResponseChannelMessageWithSource` \| `APIModalInteractionResponse` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.reply

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L41)

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

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:65](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L65)
