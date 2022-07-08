[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ModalSubmitContext

# Class: ModalSubmitContext<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | `never` |

## Hierarchy

- `BaseInteractionContext`<`APIModalSubmitInteraction`, [`ModalSubmitResponse`](../modules.md#modalsubmitresponse)\>

  ↳ **`ModalSubmitContext`**

## Table of contents

### Constructors

- [constructor](ModalSubmitContext.md#constructor)

### Properties

- [allowExpired](ModalSubmitContext.md#allowexpired)
- [components](ModalSubmitContext.md#components)
- [id](ModalSubmitContext.md#id)
- [interaction](ModalSubmitContext.md#interaction)
- [isDM](ModalSubmitContext.md#isdm)
- [manager](ModalSubmitContext.md#manager)
- [parentCommand](ModalSubmitContext.md#parentcommand)
- [state](ModalSubmitContext.md#state)
- [user](ModalSubmitContext.md#user)

### Accessors

- [expired](ModalSubmitContext.md#expired)

### Methods

- [createComponent](ModalSubmitContext.md#createcomponent)
- [createGlobalComponent](ModalSubmitContext.md#createglobalcomponent)
- [decorate](ModalSubmitContext.md#decorate)
- [defer](ModalSubmitContext.md#defer)
- [delete](ModalSubmitContext.md#delete)
- [edit](ModalSubmitContext.md#edit)
- [fetchState](ModalSubmitContext.md#fetchstate)
- [rawReply](ModalSubmitContext.md#rawreply)
- [reply](ModalSubmitContext.md#reply)
- [send](ModalSubmitContext.md#send)

## Constructors

### constructor

• **new ModalSubmitContext**<`State`\>(`manager`, `interaction`, `responseCallback`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIModalSubmitInteraction` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<[`ModalSubmitResponse`](../modules.md#modalsubmitresponse)\> |

#### Overrides

BaseInteractionContext&lt;
  APIModalSubmitInteraction,
  ModalSubmitResponse
\&gt;.constructor

#### Defined in

[app/contexts/ModalSubmitContext.ts:28](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L28)

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Defined in

[app/contexts/ModalSubmitContext.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L19)

___

### components

• **components**: `Map`<`string`, `ModalSubmitComponent`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:24](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L24)

___

### id

• **id**: `string`

#### Defined in

[app/contexts/ModalSubmitContext.ts:21](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L21)

___

### interaction

• **interaction**: `APIModalSubmitInteraction`

#### Inherited from

BaseInteractionContext.interaction

#### Defined in

[app/contexts/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L26)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseInteractionContext.isDM

#### Defined in

[app/contexts/Base.ts:31](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L31)

___

### manager

• **manager**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseInteractionContext.manager

#### Defined in

[app/contexts/Base.ts:24](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L24)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Defined in

[app/contexts/ModalSubmitContext.ts:26](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L26)

___

### state

• `Optional` **state**: `State`

#### Defined in

[app/contexts/ModalSubmitContext.ts:22](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L22)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseInteractionContext.user

#### Defined in

[app/contexts/Base.ts:29](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L29)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseInteractionContext.expired

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

#### Defined in

[app/contexts/ModalSubmitContext.ts:69](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L69)

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

BaseInteractionContext.createGlobalComponent

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

BaseInteractionContext.decorate

#### Defined in

[app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L58)

___

### defer

▸ **defer**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:79](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L79)

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:104](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L104)

___

### edit

▸ **edit**(`message`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |

#### Returns

`Promise`<`APIMessage`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:100](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L100)

___

### fetchState

▸ **fetchState**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:51](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L51)

___

### rawReply

▸ **rawReply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`ModalSubmitResponse`](../modules.md#modalsubmitresponse) |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseInteractionContext.rawReply

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L54)

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `FormData` \| `MessageBuilder` \| `APIInteractionResponseChannelMessageWithSource` |

#### Returns

`Promise`<`void`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:87](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L87)

___

### send

▸ **send**(`message`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |

#### Returns

`Promise`<`APIMessage`\>

#### Defined in

[app/contexts/ModalSubmitContext.ts:96](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ModalSubmitContext.ts#L96)
