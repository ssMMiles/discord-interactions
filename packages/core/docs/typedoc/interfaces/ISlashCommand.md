[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / ISlashCommand

# Interface: ISlashCommand

Defined in: [app/commands/SlashCommand.ts:7](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L7)

## Extends

- `ICommandBase`\<`SlashCommandBuilder`, [`SlashCommandContext`](../classes/SlashCommandContext.md)\>

## Properties

### autocompleteHandler?

> `optional` **autocompleteHandler?**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/commands/SlashCommand.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L8)

#### Parameters

##### ctx

[`AutocompleteContext`](../classes/AutocompleteContext.md)

#### Returns

`Promise`\<`void`\>

***

### builder

> **builder**: `SlashCommandBuilder`

Defined in: [app/commands/Base.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L21)

#### Inherited from

`ICommandBase.builder`

***

### components?

> `optional` **components?**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](../classes/Modal.md))[]

Defined in: [app/commands/Base.ts:25](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L25)

#### Inherited from

`ICommandBase.components`

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:23](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L23)

#### Parameters

##### ctx

[`SlashCommandContext`](../classes/SlashCommandContext.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`ICommandBase.handler`
