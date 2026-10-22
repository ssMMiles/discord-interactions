[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / CommandGroup

# Class: CommandGroup

Defined in: [app/commands/CommandGroup.ts:23](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L23)

## Implements

- [`ICommandGroup`](../interfaces/ICommandGroup.md)

## Constructors

### Constructor

> **new CommandGroup**(`builder`, `handlers`, `components?`): `CommandGroup`

Defined in: [app/commands/CommandGroup.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L27)

#### Parameters

##### builder

`CommandGroupBuilder`

##### handlers

[`ISubcommandHandlers`](../type-aliases/ISubcommandHandlers.md)

##### components?

([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[] = `[]`

#### Returns

`CommandGroup`

## Properties

### builder

> **builder**: `CommandGroupBuilder`

Defined in: [app/commands/CommandGroup.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L24)

#### Implementation of

[`ICommandGroup`](../interfaces/ICommandGroup.md).[`builder`](../interfaces/ICommandGroup.md#builder)

***

### components

> **components**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/commands/CommandGroup.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L34)

#### Implementation of

[`ICommandGroup`](../interfaces/ICommandGroup.md).[`components`](../interfaces/ICommandGroup.md#components)

***

### handlers

> **handlers**: [`ISubcommandHandlers`](../type-aliases/ISubcommandHandlers.md)

Defined in: [app/commands/CommandGroup.ts:25](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L25)

#### Implementation of

[`ICommandGroup`](../interfaces/ICommandGroup.md).[`handlers`](../interfaces/ICommandGroup.md#handlers)

## Methods

### setHandlers()

> **setHandlers**(`handlers`): `this`

Defined in: [app/commands/CommandGroup.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L36)

#### Parameters

##### handlers

[`ISubcommandHandlers`](../type-aliases/ISubcommandHandlers.md)

#### Returns

`this`
