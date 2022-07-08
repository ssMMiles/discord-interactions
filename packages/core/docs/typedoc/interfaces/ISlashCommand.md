[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ISlashCommand

# Interface: ISlashCommand

## Hierarchy

- `ICommandBase`<`SlashCommandBuilder`, [`SlashCommandContext`](../classes/SlashCommandContext.md)\>

  ↳ **`ISlashCommand`**

## Implemented by

- [`SlashCommand`](../classes/SlashCommand.md)

## Table of contents

### Properties

- [builder](ISlashCommand.md#builder)
- [components](ISlashCommand.md#components)

### Methods

- [autocompleteHandler](ISlashCommand.md#autocompletehandler)
- [handler](ISlashCommand.md#handler)

## Properties

### builder

• **builder**: `SlashCommandBuilder`

#### Inherited from

ICommandBase.builder

#### Defined in

[core/src/app/commands/Base.ts:6](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L6)

___

### components

• `Optional` **components**: ([`Component`](../modules.md#component) \| [`Modal`](../classes/Modal.md))[]

#### Inherited from

ICommandBase.components

#### Defined in

[core/src/app/commands/Base.ts:10](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L10)

## Methods

### autocompleteHandler

▸ `Optional` **autocompleteHandler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`AutocompleteContext`](../classes/AutocompleteContext.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/commands/SlashCommand.ts:8](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/SlashCommand.ts#L8)

___

### handler

▸ **handler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Context` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ICommandBase.handler

#### Defined in

[core/src/app/commands/Base.ts:8](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L8)
