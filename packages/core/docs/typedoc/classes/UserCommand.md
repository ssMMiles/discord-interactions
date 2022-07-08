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

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:13](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L13)

## Properties

### builder

• **builder**: `UserCommandBuilder`

#### Inherited from

HandledInteraction.builder

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L4)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

HandledInteraction.components

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L11)

## Accessors

### data

• `get` **data**(): `Data`

#### Returns

`Data`

#### Inherited from

HandledInteraction.data

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:5](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L5)

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

#### Defined in

[core/src/app/commands/UserCommand.ts:15](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/UserCommand.ts#L15)

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

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:20](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L20)
