[@discord-interactions/core](../README.md) / [Exports](../modules.md) / MessageCommand

# Class: MessageCommand

## Hierarchy

- `HandledInteraction`<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `ApplicationCommandType.Message`  }, `MessageCommandBuilder`, [`MessageCommandContext`](MessageCommandContext.md)\>

  ↳ **`MessageCommand`**

## Table of contents

### Constructors

- [constructor](MessageCommand.md#constructor)

### Properties

- [builder](MessageCommand.md#builder)
- [components](MessageCommand.md#components)

### Accessors

- [data](MessageCommand.md#data)

### Methods

- [handler](MessageCommand.md#handler)
- [setHandler](MessageCommand.md#sethandler)

## Constructors

### constructor

• **new MessageCommand**(`builder`, `handler`, `components?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | `MessageCommandBuilder` | `undefined` |
| `handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> | `undefined` |
| `components` | ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[] | `[]` |

#### Inherited from

HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message },
  MessageCommandBuilder,
  MessageCommandContext
\>.constructor

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:13](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L13)

## Properties

### builder

• **builder**: `MessageCommandBuilder`

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
| `ctx` | [`MessageCommandContext`](MessageCommandContext.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

HandledInteraction.handler

#### Defined in

[core/src/app/commands/MessageCommand.ts:14](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/MessageCommand.ts#L14)

___

### setHandler

▸ **setHandler**(`handler`): [`MessageCommand`](MessageCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> |

#### Returns

[`MessageCommand`](MessageCommand.md)

#### Inherited from

HandledInteraction.setHandler

#### Defined in

[core/src/app/handlers/HandledInteraction.ts:20](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/handlers/HandledInteraction.ts#L20)
