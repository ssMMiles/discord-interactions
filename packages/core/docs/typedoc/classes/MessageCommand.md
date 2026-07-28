[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / MessageCommand

# Class: MessageCommand

Defined in: [app/commands/MessageCommand.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/MessageCommand.ts#L9)

## Extends

- `HandledInteraction`\<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & `object`, `MessageCommandBuilder`, [`MessageCommandContext`](MessageCommandContext.md)\>

## Constructors

### Constructor

> **new MessageCommand**(`builder`, `handler`, `components?`): `MessageCommand`

Defined in: [app/handlers/HandledInteraction.ts:13](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L13)

#### Parameters

##### builder

`MessageCommandBuilder`

##### handler

(`ctx`) => `Promise`\<`void`\>

##### components?

([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[] = `[]`

#### Returns

`MessageCommand`

#### Inherited from

`HandledInteraction< RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }, MessageCommandBuilder, MessageCommandContext >.constructor`

## Properties

### builder

> **builder**: `MessageCommandBuilder`

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

Defined in: [app/commands/MessageCommand.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/MessageCommand.ts#L14)

#### Parameters

##### ctx

[`MessageCommandContext`](MessageCommandContext.md)

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
