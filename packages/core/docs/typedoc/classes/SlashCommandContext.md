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

## Properties

### group

• `Optional` **group**: `string`

The subcommand group

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:35](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L35)

___

### interaction

• **interaction**: `APIChatInputApplicationCommandInteraction`

#### Inherited from

BaseCommandContext.interaction

#### Defined in

[app/contexts/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L26)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseCommandContext.isDM

#### Defined in

[app/contexts/Base.ts:31](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L31)

___

### manager

• **manager**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseCommandContext.manager

#### Defined in

[app/contexts/Base.ts:24](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L24)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:19](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L19)

___

### parentCommand

• `Optional` **parentCommand**: `string`

The parent command, if this is a subcommand.

#### Defined in

[app/contexts/ApplicationCommand/SlashCommandContext.ts:30](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ApplicationCommand/SlashCommandContext.ts#L30)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseCommandContext.user

#### Defined in

[app/contexts/Base.ts:29](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L29)

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
| `message` | `string` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` \| `APIInteractionResponseChannelMessageWithSource` \| `APIModalInteractionResponse` |

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
