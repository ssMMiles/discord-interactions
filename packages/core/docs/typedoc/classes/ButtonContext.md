[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ButtonContext

# Class: ButtonContext<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

## Hierarchy

- `BaseComponentContext`<`S`, `APIMessageComponentButtonInteraction`\>

  ↳ **`ButtonContext`**

## Table of contents

### Constructors

- [constructor](ButtonContext.md#constructor)

### Properties

- [allowExpired](ButtonContext.md#allowexpired)
- [id](ButtonContext.md#id)
- [interaction](ButtonContext.md#interaction)
- [isDM](ButtonContext.md#isdm)
- [manager](ButtonContext.md#manager)
- [message](ButtonContext.md#message)
- [parentCommand](ButtonContext.md#parentcommand)
- [state](ButtonContext.md#state)
- [user](ButtonContext.md#user)

### Accessors

- [expired](ButtonContext.md#expired)

### Methods

- [createComponent](ButtonContext.md#createcomponent)
- [createGlobalComponent](ButtonContext.md#createglobalcomponent)
- [decorate](ButtonContext.md#decorate)
- [defer](ButtonContext.md#defer)
- [delete](ButtonContext.md#delete)
- [edit](ButtonContext.md#edit)
- [fetchState](ButtonContext.md#fetchstate)
- [rawReply](ButtonContext.md#rawreply)
- [reply](ButtonContext.md#reply)
- [send](ButtonContext.md#send)

## Constructors

### constructor

• **new ButtonContext**<`S`\>(`manager`, `interaction`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIMessageComponentButtonInteraction` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`MessageUpdateResponse`](../modules.md#messageupdateresponse)\> |

#### Inherited from

BaseComponentContext<S, APIMessageComponentButtonInteraction\>.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean`

#### Inherited from

BaseComponentContext.allowExpired

#### Defined in

[app/contexts/ComponentContext.ts:21](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ComponentContext.ts#L21)

___

### id

• **id**: `string`

#### Inherited from

BaseComponentContext.id

#### Defined in

[app/contexts/ComponentContext.ts:24](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ComponentContext.ts#L24)

___

### interaction

• **interaction**: `APIMessageComponentButtonInteraction`

#### Inherited from

BaseComponentContext.interaction

#### Defined in

[app/contexts/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L26)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseComponentContext.isDM

#### Defined in

[app/contexts/Base.ts:31](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L31)

___

### manager

• **manager**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseComponentContext.manager

#### Defined in

[app/contexts/Base.ts:24](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L24)

___

### message

• **message**: `APIMessage`

#### Inherited from

BaseComponentContext.message

#### Defined in

[app/contexts/ComponentContext.ts:28](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ComponentContext.ts#L28)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

BaseComponentContext.parentCommand

#### Defined in

[app/contexts/ComponentContext.ts:26](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ComponentContext.ts#L26)

___

### state

• **state**: `S`

#### Inherited from

BaseComponentContext.state

#### Defined in

[app/contexts/ComponentContext.ts:22](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/ComponentContext.ts#L22)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseComponentContext.user

#### Defined in

[app/contexts/Base.ts:29](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/contexts/Base.ts#L29)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseComponentContext.expired

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

BaseComponentContext.createComponent

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

BaseComponentContext.createGlobalComponent

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

BaseComponentContext.decorate

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.defer

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.delete

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

BaseComponentContext.edit

___

### fetchState

▸ **fetchState**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.fetchState

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

BaseComponentContext.rawReply

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `FormData` \| `MessageBuilder` \| `ModalBuilder` \| `APIInteractionResponseUpdateMessage` \| `APIModalInteractionResponse` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseComponentContext.reply

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

BaseComponentContext.send
