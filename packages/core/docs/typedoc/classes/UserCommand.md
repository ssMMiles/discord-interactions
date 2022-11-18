[@discord-interactions/core](../README.md) / [Exports](../modules.md) / UserCommand

# Class: UserCommand

## Hierarchy

- `HandledInteraction`<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `ApplicationCommandType.User`  }, `UserCommandBuilder`, [`UserCommandContext`](UserCommandContext.md)\>

  ↳ **`UserCommand`**

## Table of contents

### Constructors

- [constructor](UserCommand.md#constructor)

### Properties

- [builder](UserCommand.md#builder)
- [components](UserCommand.md#components)

### Accessors

- [data](UserCommand.md#data)

### Methods

- [handler](UserCommand.md#handler)
- [setHandler](UserCommand.md#sethandler)

## Constructors

### constructor

• **new UserCommand**(`builder`, `handler`, `components?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | `UserCommandBuilder` | `undefined` |
| `handler` | (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\> | `undefined` |
| `components` | ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[] | `[]` |

#### Inherited from

HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User },
  UserCommandBuilder,
  UserCommandContext
\>.constructor

## Properties

### builder

• **builder**: `UserCommandBuilder`

#### Inherited from

HandledInteraction.builder

#### Defined in

[app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/HandledInteraction.ts#L4)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

HandledInteraction.components

#### Defined in

[app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/HandledInteraction.ts#L11)

## Accessors

### data

• `get` **data**(): `Data`

#### Returns

`Data`

#### Inherited from

HandledInteraction.data

## Methods

### handler

▸ **handler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`UserCommandContext`](UserCommandContext.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

HandledInteraction.handler

___

### setHandler

▸ **setHandler**(`handler`): [`UserCommand`](UserCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\> |

#### Returns

[`UserCommand`](UserCommand.md)

#### Inherited from

HandledInteraction.setHandler
