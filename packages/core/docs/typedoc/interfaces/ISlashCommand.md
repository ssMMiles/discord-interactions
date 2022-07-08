[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ISlashCommand

# Interface: ISlashCommand

## Hierarchy

- `ICommandBase`<`SlashCommandBuilder`, [`SlashCommandContext`](../classes/SlashCommandContext.md)\>

  ↳ **`ISlashCommand`**

## Implemented by

- [`SlashCommand`](../classes/SlashCommand.md)

## Table of contents

### Properties

- [autocompleteHandler](ISlashCommand.md#autocompletehandler)
- [builder](ISlashCommand.md#builder)
- [components](ISlashCommand.md#components)
- [handler](ISlashCommand.md#handler)

## Properties

### autocompleteHandler

• `Optional` **autocompleteHandler**: (`ctx`: [`AutocompleteContext`](../classes/AutocompleteContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`AutocompleteContext`](../classes/AutocompleteContext.md) |

##### Returns

`Promise`<`void`\>

#### Defined in

[app/commands/SlashCommand.ts:8](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/SlashCommand.ts#L8)

___

### builder

• **builder**: `SlashCommandBuilder`

#### Inherited from

ICommandBase.builder

#### Defined in

[app/commands/Base.ts:6](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L6)

___

### components

• `Optional` **components**: ([`Component`](../modules.md#component) \| [`Modal`](../classes/Modal.md))[]

#### Inherited from

ICommandBase.components

#### Defined in

[app/commands/Base.ts:10](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L10)

___

### handler

• **handler**: (`ctx`: [`SlashCommandContext`](../classes/SlashCommandContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SlashCommandContext`](../classes/SlashCommandContext.md) |

##### Returns

`Promise`<`void`\>

#### Inherited from

ICommandBase.handler

#### Defined in

[app/commands/Base.ts:8](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L8)