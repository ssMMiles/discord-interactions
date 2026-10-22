[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / RegisteredCommandGroup

# Class: RegisteredCommandGroup

Defined in: [app/commands/CommandGroup.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L43)

## Extends

- `RegisteredDiscordCommand`\<`CommandGroupBuilder`\>

## Constructors

### Constructor

> **new RegisteredCommandGroup**(`manager`, `command`): `RegisteredCommandGroup`

Defined in: [app/commands/CommandGroup.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L45)

#### Parameters

##### manager

[`CommandManager`](CommandManager.md)

##### command

###### builder

`CommandGroupBuilder`

###### handlers

[`ISubcommandHandlers`](../type-aliases/ISubcommandHandlers.md)

#### Returns

`RegisteredCommandGroup`

#### Overrides

`RegisteredDiscordCommand<CommandGroupBuilder>.constructor`

## Properties

### builder

> **builder**: `CommandGroupBuilder`

Defined in: [app/commands/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L41)

#### Inherited from

`RegisteredDiscordCommand.builder`

***

### components?

> `optional` **components?**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/commands/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L43)

#### Inherited from

`RegisteredDiscordCommand.components`

***

### handlers

> **handlers**: `Record`\<`string`, [`ISubcommandHandler`](../interfaces/ISubcommandHandler.md) \| [`ISubcommandGroup`](../type-aliases/ISubcommandGroup.md)\>

Defined in: [app/commands/CommandGroup.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L44)

***

### id

> **id**: `string` = `"0"`

Defined in: [app/commands/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L45)

#### Inherited from

`RegisteredDiscordCommand.id`

***

### lastSyncedAt?

> `optional` **lastSyncedAt?**: `Date`

Defined in: [app/commands/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L39)

#### Inherited from

`RegisteredDiscordCommand.lastSyncedAt`

## Methods

### create()

> **create**(): `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:63](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L63)

Create this command in Discord

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RegisteredDiscordCommand.create`

***

### delete()

> **delete**(`id?`): `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:95](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L95)

Delete this command from Discord

#### Parameters

##### id?

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RegisteredDiscordCommand.delete`

***

### setHandlers()

> **setHandlers**(`handler`): `void`

Defined in: [app/commands/CommandGroup.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/CommandGroup.ts#L55)

Update this command's handler function

#### Parameters

##### handler

[`ISubcommandHandlers`](../type-aliases/ISubcommandHandlers.md)

New command handler

#### Returns

`void`

***

### sync()

> **sync**(`remoteCommand?`): `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:110](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L110)

Sync this command with Discord

#### Parameters

##### remoteCommand?

`APIApplicationCommand`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RegisteredDiscordCommand.sync`

***

### update()

> **update**(`id?`): `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:78](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L78)

#### Parameters

##### id?

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RegisteredDiscordCommand.update`
