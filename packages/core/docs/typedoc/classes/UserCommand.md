[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / UserCommand

# Class: UserCommand

Defined in: [app/commands/UserCommand.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/UserCommand.ts#L10)

## Extends

- `HandledInteraction`\<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & `object`, `UserCommandBuilder`, [`UserCommandContext`](UserCommandContext.md)\>

## Constructors

### Constructor

> **new UserCommand**(`builder`, `handler`, `components?`): `UserCommand`

Defined in: [app/handlers/HandledInteraction.ts:13](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L13)

#### Parameters

##### builder

`UserCommandBuilder`

##### handler

(`ctx`) => `Promise`\<`void`\>

##### components?

([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[] = `[]`

#### Returns

`UserCommand`

#### Inherited from

`HandledInteraction< RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }, UserCommandBuilder, UserCommandContext >.constructor`

## Properties

### builder

> **builder**: `UserCommandBuilder`

Defined in: [app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L4)

#### Inherited from

`HandledInteraction.builder`

***

### components

> **components**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L11)

#### Inherited from

`HandledInteraction.components`

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

### handler()

> **handler**(`ctx`): `Promise`\<`void`\>

Defined in: [app/commands/UserCommand.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/UserCommand.ts#L15)

#### Parameters

##### ctx

[`UserCommandContext`](UserCommandContext.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

`HandledInteraction.handler`

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
