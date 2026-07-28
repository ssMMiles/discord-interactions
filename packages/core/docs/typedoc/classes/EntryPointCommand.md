[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / EntryPointCommand

# Class: EntryPointCommand

Defined in: [app/commands/EntryPointCommand.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/EntryPointCommand.ts#L10)

## Extends

- `HandledInteraction`\<`RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody` & `object`, `EntryPointCommandBuilder`, [`EntryPointCommandContext`](EntryPointCommandContext.md)\>

## Constructors

### Constructor

> **new EntryPointCommand**(`builder`, `handler?`): `EntryPointCommand`

Defined in: [app/commands/EntryPointCommand.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/EntryPointCommand.ts#L15)

#### Parameters

##### builder

`EntryPointCommandBuilder`

##### handler?

(`ctx`) => `Promise`\<`void`\>

#### Returns

`EntryPointCommand`

#### Overrides

`HandledInteraction< RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody & { type: ApplicationCommandType.PrimaryEntryPoint }, EntryPointCommandBuilder, EntryPointCommandContext >.constructor`

## Properties

### builder

> **builder**: `EntryPointCommandBuilder`

Defined in: [app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L4)

#### Inherited from

`HandledInteraction.builder`

***

### components

> **components**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L11)

#### Inherited from

`HandledInteraction.components`

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L9)

#### Parameters

##### ctx

[`EntryPointCommandContext`](EntryPointCommandContext.md)

#### Returns

`Promise`\<`void`\>

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
