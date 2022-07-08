[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ISubcommandHandler

# Interface: ISubcommandHandler

## Table of contents

### Methods

- [autocompleteHandler](ISubcommandHandler.md#autocompletehandler)
- [handler](ISubcommandHandler.md#handler)

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

[core/src/app/commands/CommandGroup.ts:8](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L8)

___

### handler

▸ **handler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SlashCommandContext`](../classes/SlashCommandContext.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/commands/CommandGroup.ts:7](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L7)
