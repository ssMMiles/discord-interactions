[@discord-interactions/core](../README.md) / [Exports](../modules.md) / CommandGroup

# Class: CommandGroup

## Implements

- [`ICommandGroup`](../interfaces/ICommandGroup.md)

## Table of contents

### Constructors

- [constructor](CommandGroup.md#constructor)

### Properties

- [builder](CommandGroup.md#builder)
- [components](CommandGroup.md#components)
- [handlers](CommandGroup.md#handlers)

### Methods

- [setHandlers](CommandGroup.md#sethandlers)

## Constructors

### constructor

• **new CommandGroup**(`builder`, `handlers`, `components?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | `CommandGroupBuilder` | `undefined` |
| `handlers` | [`ISubcommandHandlers`](../modules.md#isubcommandhandlers) | `undefined` |
| `components` | [`Component`](../modules.md#component)[] | `[]` |

## Properties

### builder

• **builder**: `CommandGroupBuilder`

#### Implementation of

[ICommandGroup](../interfaces/ICommandGroup.md).[builder](../interfaces/ICommandGroup.md#builder)

#### Defined in

[app/commands/CommandGroup.ts:24](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/CommandGroup.ts#L24)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Implementation of

[ICommandGroup](../interfaces/ICommandGroup.md).[components](../interfaces/ICommandGroup.md#components)

#### Defined in

[app/commands/CommandGroup.ts:34](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/CommandGroup.ts#L34)

___

### handlers

• **handlers**: [`ISubcommandHandlers`](../modules.md#isubcommandhandlers)

#### Implementation of

[ICommandGroup](../interfaces/ICommandGroup.md).[handlers](../interfaces/ICommandGroup.md#handlers)

#### Defined in

[app/commands/CommandGroup.ts:25](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/CommandGroup.ts#L25)

## Methods

### setHandlers

▸ **setHandlers**(`handlers`): [`CommandGroup`](CommandGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | [`ISubcommandHandlers`](../modules.md#isubcommandhandlers) |

#### Returns

[`CommandGroup`](CommandGroup.md)
