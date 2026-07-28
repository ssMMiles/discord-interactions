[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / SlashCommand

# Class: SlashCommand

Defined in: [app/commands/SlashCommand.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L11)

## Extends

- `HandledInteraction`\<`RESTPostAPIChatInputApplicationCommandsJSONBody`, `SlashCommandBuilder`, [`SlashCommandContext`](SlashCommandContext.md)\>

## Implements

- [`ISlashCommand`](../interfaces/ISlashCommand.md)

## Constructors

### Constructor

> **new SlashCommand**(`builder`, `handler?`, `components?`, `autocompleteHandler?`): `SlashCommand`

Defined in: [app/commands/SlashCommand.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L17)

#### Parameters

##### builder

`SlashCommandBuilder`

##### handler?

(`ctx`) => `Promise`\<`void`\>

##### components?

([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[] = `[]`

##### autocompleteHandler?

(`ctx`) => `Promise`\<`void`\>

#### Returns

`SlashCommand`

#### Overrides

`HandledInteraction<RESTPostAPIChatInputApplicationCommandsJSONBody, SlashCommandBuilder, SlashCommandContext>.constructor`

## Properties

### autocompleteHandler

> **autocompleteHandler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/commands/SlashCommand.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L15)

#### Parameters

##### ctx

[`AutocompleteContext`](AutocompleteContext.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISlashCommand`](../interfaces/ISlashCommand.md).[`autocompleteHandler`](../interfaces/ISlashCommand.md#autocompletehandler)

***

### builder

> **builder**: `SlashCommandBuilder`

Defined in: [app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L4)

#### Implementation of

[`ISlashCommand`](../interfaces/ISlashCommand.md).[`builder`](../interfaces/ISlashCommand.md#builder)

#### Inherited from

`HandledInteraction.builder`

***

### components

> **components**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L11)

#### Implementation of

[`ISlashCommand`](../interfaces/ISlashCommand.md).[`components`](../interfaces/ISlashCommand.md#components)

#### Inherited from

`HandledInteraction.components`

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L9)

#### Parameters

##### ctx

[`SlashCommandContext`](SlashCommandContext.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISlashCommand`](../interfaces/ISlashCommand.md).[`handler`](../interfaces/ISlashCommand.md#handler)

#### Inherited from

`HandledInteraction.handler`

## Accessors

### data

#### Get Signature

> **get** **data**(): `Data`

Defined in: [app/handlers/HandledInteraction.ts:5](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L5)

##### Returns

`Data`

#### Inherited from

`HandledInteraction.data`

## Methods

### addComponents()

> **addComponents**(...`components`): `this`

Defined in: [app/commands/SlashCommand.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L44)

#### Parameters

##### components

...([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

#### Returns

`this`

***

### setAutocompleteHandler()

> **setAutocompleteHandler**(`handler`): `SlashCommand`

Defined in: [app/commands/SlashCommand.ts:32](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L32)

#### Parameters

##### handler

(`ctx`) => `Promise`\<`void`\>

#### Returns

`SlashCommand`

***

### setComponents()

> **setComponents**(`components`): `this`

Defined in: [app/commands/SlashCommand.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/SlashCommand.ts#L38)

#### Parameters

##### components

([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

#### Returns

`this`

***

### setHandler()

> **setHandler**(`handler`): `this`

Defined in: [app/handlers/HandledInteraction.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L20)

#### Parameters

##### handler

(`ctx`) => `Promise`\<`void`\>

#### Returns

`this`

#### Inherited from

`HandledInteraction.setHandler`
