[@discord-interactions/core](../README.md) / [Exports](../modules.md) / MessageCommandContext

# Class: MessageCommandContext

## Hierarchy

- `BaseCommandContext`<`APIMessageApplicationCommandInteraction`\>

  ↳ **`MessageCommandContext`**

## Table of contents

### Constructors

- [constructor](MessageCommandContext.md#constructor)

### Properties

- [interaction](MessageCommandContext.md#interaction)
- [isDM](MessageCommandContext.md#isdm)
- [manager](MessageCommandContext.md#manager)
- [message](MessageCommandContext.md#message)
- [name](MessageCommandContext.md#name)
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

• **new MessageCommandContext**(`manager`, `interaction`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIMessageApplicationCommandInteraction` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ChannelMessageResponse`](../modules.md#channelmessageresponse)\> |

#### Overrides

BaseCommandContext&lt;APIMessageApplicationCommandInteraction\&gt;.constructor

#### Defined in

[app/contexts/ApplicationCommand/MessageCommandContext.ts:9](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/MessageCommandContext.ts#L9)

## Properties

### interaction

• **interaction**: `APIMessageApplicationCommandInteraction`

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

### message

• **message**: `APIMessage`

#### Defined in

[app/contexts/ApplicationCommand/MessageCommandContext.ts:7](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/MessageCommandContext.ts#L7)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L19)

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

#### Inherited from

BaseCommandContext.createComponent

#### Defined in

[app/contexts/ApplicationCommand/Base.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L27)

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
