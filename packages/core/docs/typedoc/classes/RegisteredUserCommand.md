[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / RegisteredUserCommand

# Class: RegisteredUserCommand

Defined in: [app/commands/UserCommand.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/UserCommand.ts#L20)

## Extends

- `RegisteredCommandBase`\<`UserCommandBuilder`, [`UserCommandContext`](UserCommandContext.md)\>

## Constructors

### Constructor

> **new RegisteredUserCommand**(`manager`, `command`): `RegisteredUserCommand`

Defined in: [app/commands/Base.ts:168](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L168)

#### Parameters

##### manager

[`CommandManager`](CommandManager.md)

##### command

###### builder

`UserCommandBuilder`

###### handler

(`ctx`) => `Promise`\<`void`\>

#### Returns

`RegisteredUserCommand`

#### Inherited from

`RegisteredCommandBase<UserCommandBuilder, UserCommandContext>.constructor`

## Properties

### builder

> **builder**: `UserCommandBuilder`

Defined in: [app/commands/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L41)

#### Inherited from

`RegisteredCommandBase.builder`

***

### components?

> `optional` **components?**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/commands/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L43)

#### Inherited from

`RegisteredCommandBase.components`

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:166](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L166)

#### Parameters

##### ctx

[`UserCommandContext`](UserCommandContext.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RegisteredCommandBase.handler`

***

### id

> **id**: `string` = `"0"`

Defined in: [app/commands/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L45)

#### Inherited from

`RegisteredCommandBase.id`

***

### lastSyncedAt?

> `optional` **lastSyncedAt?**: `Date`

Defined in: [app/commands/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L39)

#### Inherited from

`RegisteredCommandBase.lastSyncedAt`

## Methods

### create()

> **create**(): `Promise`\<`void`\>

Defined in: [app/commands/Base.ts:63](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L63)

Create this command in Discord

#### Returns

`Promise`\<`void`\>

#### Inherited from

`RegisteredCommandBase.create`

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

`RegisteredCommandBase.delete`

***

### setHandler()

> **setHandler**(`handler`): `void`

Defined in: [app/commands/Base.ts:178](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/commands/Base.ts#L178)

Update this command's handler function

#### Parameters

##### handler

(`ctx`) => `Promise`\<`void`\>

New command handler

#### Returns

`void`

#### Inherited from

`RegisteredCommandBase.setHandler`

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

`RegisteredCommandBase.sync`

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

`RegisteredCommandBase.update`
