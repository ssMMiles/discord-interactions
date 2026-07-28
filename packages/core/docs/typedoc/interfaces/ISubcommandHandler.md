[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / ISubcommandHandler

# Interface: ISubcommandHandler

Defined in: [app/commands/CommandGroup.ts:7](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L7)

## Properties

### autocompleteHandler?

> `optional` **autocompleteHandler?**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/commands/CommandGroup.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L9)

#### Parameters

##### ctx

[`AutocompleteContext`](../classes/AutocompleteContext.md)

#### Returns

`Promise`\<`void`\>

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/commands/CommandGroup.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L8)

#### Parameters

##### ctx

[`SlashCommandContext`](../classes/SlashCommandContext.md)

#### Returns

`Promise`\<`void`\>
