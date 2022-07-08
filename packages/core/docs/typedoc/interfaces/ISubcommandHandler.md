[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ISubcommandHandler

# Interface: ISubcommandHandler

## Table of contents

### Properties

- [autocompleteHandler](ISubcommandHandler.md#autocompletehandler)
- [handler](ISubcommandHandler.md#handler)

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

[app/commands/CommandGroup.ts:8](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/CommandGroup.ts#L8)

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

#### Defined in

[app/commands/CommandGroup.ts:7](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/CommandGroup.ts#L7)
