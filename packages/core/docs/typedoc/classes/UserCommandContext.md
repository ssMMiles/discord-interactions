[@discord-interactions/core](../README.md) / [Exports](../modules.md) / UserCommandContext

# Class: UserCommandContext

## Hierarchy

- `BaseCommandContext`<`APIUserApplicationCommandInteraction`\>

  ↳ **`UserCommandContext`**

## Table of contents

### Constructors

- [constructor](UserCommandContext.md#constructor)

### Properties

- [interaction](UserCommandContext.md#interaction)
- [isDM](UserCommandContext.md#isdm)
- [manager](UserCommandContext.md#manager)
- [name](UserCommandContext.md#name)
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

• **new UserCommandContext**(`manager`, `interaction`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIUserApplicationCommandInteraction` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ChannelMessageResponse`](../modules.md#channelmessageresponse)\> |

#### Overrides

BaseCommandContext&lt;APIUserApplicationCommandInteraction\&gt;.constructor

#### Defined in

[core/src/app/contexts/ApplicationCommand/UserCommandContext.ts:16](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/UserCommandContext.ts#L16)

## Properties

### interaction

• **interaction**: `APIUserApplicationCommandInteraction`

#### Inherited from

BaseCommandContext.interaction

#### Defined in

[core/src/app/contexts/Base.ts:26](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L26)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseCommandContext.isDM

#### Defined in

[core/src/app/contexts/Base.ts:31](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L31)

___

### manager

• **manager**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseCommandContext.manager

#### Defined in

[core/src/app/contexts/Base.ts:24](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L24)

___

### name

• **name**: `string`

#### Inherited from

BaseCommandContext.name

#### Defined in

[core/src/app/contexts/ApplicationCommand/Base.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L19)

___

### target

• **target**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `member?` | `APIInteractionDataResolvedGuildMember` |
| `user` | `APIUser` |

#### Defined in

[core/src/app/contexts/ApplicationCommand/UserCommandContext.ts:11](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/UserCommandContext.ts#L11)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseCommandContext.user

#### Defined in

[core/src/app/contexts/Base.ts:29](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L29)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommandContext.expired

#### Defined in

[core/src/app/contexts/Base.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L19)

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

[core/src/app/contexts/ApplicationCommand/Base.ts:27](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L27)

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

[core/src/app/contexts/Base.ts:65](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L65)

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

[core/src/app/contexts/Base.ts:58](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L58)

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.defer

#### Defined in

[core/src/app/contexts/ApplicationCommand/Base.ts:33](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L33)

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseCommandContext.delete

#### Defined in

[core/src/app/contexts/ApplicationCommand/Base.ts:73](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L73)

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

[core/src/app/contexts/ApplicationCommand/Base.ts:69](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L69)

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

[core/src/app/contexts/Base.ts:54](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/Base.ts#L54)

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

[core/src/app/contexts/ApplicationCommand/Base.ts:41](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L41)

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

[core/src/app/contexts/ApplicationCommand/Base.ts:65](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/contexts/ApplicationCommand/Base.ts#L65)
