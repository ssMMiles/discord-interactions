[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / CommandManager

# Class: CommandManager

Defined in: [app/managers/CommandManager.ts:53](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L53)

Manager for your application's commands. Lets you register fully handled commands as well as exposes methods for managing your commands on the API side.

## Constructors

### Constructor

> **new CommandManager**(`app`, `guildId?`, `syncMode?`): `CommandManager`

Defined in: [app/managers/CommandManager.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L64)

#### Parameters

##### app

[`DiscordApplication`](DiscordApplication.md)

##### guildId?

`string`

##### syncMode?

[`SyncMode`](../enumerations/SyncMode.md) = `SyncMode.Enabled`

#### Returns

`CommandManager`

## Properties

### 1

> **1**: `Map`\<`string`, [`RegisteredSlashCommand`](RegisteredSlashCommand.md) \| [`RegisteredCommandGroup`](RegisteredCommandGroup.md)\>

Defined in: [app/managers/CommandManager.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L54)

***

### 2

> **2**: `Map`\<`string`, [`RegisteredUserCommand`](RegisteredUserCommand.md)\>

Defined in: [app/managers/CommandManager.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L55)

***

### 3

> **3**: `Map`\<`string`, [`RegisteredMessageCommand`](RegisteredMessageCommand.md)\>

Defined in: [app/managers/CommandManager.ts:56](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L56)

***

### 4

> **4**: `Map`\<`string`, [`RegisteredEntryPointCommand`](RegisteredEntryPointCommand.md)\>

Defined in: [app/managers/CommandManager.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L57)

***

### app

> **app**: [`DiscordApplication`](DiscordApplication.md)

Defined in: [app/managers/CommandManager.ts:59](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L59)

***

### guildId?

> `optional` **guildId?**: `string`

Defined in: [app/managers/CommandManager.ts:62](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L62)

***

### syncMode

> **syncMode**: [`SyncMode`](../enumerations/SyncMode.md)

Defined in: [app/managers/CommandManager.ts:60](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L60)

## Methods

### deleteCommand()

> **deleteCommand**(`id`): `Promise`\<`unknown`\>

Defined in: [app/managers/CommandManager.ts:82](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L82)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

***

### deleteUnregistered()

> **deleteUnregistered**(): `Promise`\<`void`\>

Defined in: [app/managers/CommandManager.ts:248](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L248)

Deletes remote commands that aren't registered with this command manager

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`name`, `type?`): [`RegisteredCommand`](../type-aliases/RegisteredCommand.md) \| `undefined`

Defined in: [app/managers/CommandManager.ts:120](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L120)

Fetch a registered command

#### Parameters

##### name

`string`

Command name

##### type?

`ApplicationCommandType` = `ApplicationCommandType.ChatInput`

Command type

#### Returns

[`RegisteredCommand`](../type-aliases/RegisteredCommand.md) \| `undefined`

***

### has()

> **has**(`name`, `type?`): `boolean`

Defined in: [app/managers/CommandManager.ts:111](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L111)

Check whether a command is registered

#### Parameters

##### name

`string`

Command name

##### type?

`ApplicationCommandType` = `ApplicationCommandType.ChatInput`

Command type

#### Returns

`boolean`

***

### patchCommand()

> **patchCommand**(`id`, `data`): `Promise`\<`APIApplicationCommand`\>

Defined in: [app/managers/CommandManager.ts:78](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L78)

#### Parameters

##### id

`string`

##### data

`CommandData`

#### Returns

`Promise`\<`APIApplicationCommand`\>

***

### postCommand()

> **postCommand**(`data`): `Promise`\<`APIApplicationCommand`\>

Defined in: [app/managers/CommandManager.ts:74](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L74)

#### Parameters

##### data

`CommandData`

#### Returns

`Promise`\<`APIApplicationCommand`\>

***

### register()

> **register**(...`commands`): `Promise`\<[`RegisteredCommand`](../type-aliases/RegisteredCommand.md)[]\>

Defined in: [app/managers/CommandManager.ts:146](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L146)

Register a new command to be handled. This will create the command on Discord if it doesn't exist, or overwrite it if the existing remote version differs.

#### Parameters

##### commands

...[`ICommand`](../type-aliases/ICommand.md)[]

#### Returns

`Promise`\<[`RegisteredCommand`](../type-aliases/RegisteredCommand.md)[]\>

***

### rename()

> **rename**(`oldName`, `newName`, `type`): `void`

Defined in: [app/managers/CommandManager.ts:134](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L134)

Rename a registered command

#### Parameters

##### oldName

`string`

Old name

##### newName

`string`

New Name

##### type

`ApplicationCommandType`

Command type

#### Returns

`void`

***

### set()

> **set**(`name`, `type?`, `command`): `void`

Defined in: [app/managers/CommandManager.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L124)

#### Parameters

##### name

`string`

##### type?

`ApplicationCommandType` = `ApplicationCommandType.ChatInput`

##### command

[`RegisteredCommand`](../type-aliases/RegisteredCommand.md)

#### Returns

`void`

***

### sync()

> **sync**(`syncMode?`): `Promise`\<`void`\>

Defined in: [app/managers/CommandManager.ts:227](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L227)

#### Parameters

##### syncMode?

[`SyncMode`](../enumerations/SyncMode.md)

#### Returns

`Promise`\<`void`\>

***

### toAPICommands()

> **toAPICommands**(): `RESTPostAPIApplicationCommandsJSONBody`[]

Defined in: [app/managers/CommandManager.ts:271](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L271)

Get an array of API command objects for all registered commands

#### Returns

`RESTPostAPIApplicationCommandsJSONBody`[]

***

### unregister()

> **unregister**(`name`, `type?`, `deleteCommand?`): `Promise`\<`void`\>

Defined in: [app/managers/CommandManager.ts:215](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/CommandManager.ts#L215)

Unregister a command from this client

#### Parameters

##### name

`string`

Command name

##### type?

`ApplicationCommandType` = `ApplicationCommandType.ChatInput`

Command type

##### deleteCommand?

`boolean` = `false`

Whether to also delete this command from Discord (default: false)

#### Returns

`Promise`\<`void`\>
