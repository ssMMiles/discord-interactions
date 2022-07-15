[@discord-interactions/core](../README.md) / [Exports](../modules.md) / CommandManager

# Class: CommandManager

Manager for your application's commands. Lets you register fully handled commands as well as exposes methods for managing your commands on the API side.

## Table of contents

### Constructors

- [constructor](CommandManager.md#constructor)

### Properties

- [1](CommandManager.md#1)
- [2](CommandManager.md#2)
- [3](CommandManager.md#3)
- [app](CommandManager.md#app)
- [guildId](CommandManager.md#guildid)
- [syncMode](CommandManager.md#syncmode)

### Methods

- [deleteCommand](CommandManager.md#deletecommand)
- [deleteUnregistered](CommandManager.md#deleteunregistered)
- [get](CommandManager.md#get)
- [has](CommandManager.md#has)
- [patchCommand](CommandManager.md#patchcommand)
- [postCommand](CommandManager.md#postcommand)
- [register](CommandManager.md#register)
- [rename](CommandManager.md#rename)
- [set](CommandManager.md#set)
- [sync](CommandManager.md#sync)
- [toAPICommands](CommandManager.md#toapicommands)
- [unregister](CommandManager.md#unregister)

## Constructors

### constructor

• **new CommandManager**(`app`, `guildId?`, `syncMode?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`DiscordApplication`](DiscordApplication.md) | `undefined` |
| `guildId?` | `string` | `undefined` |
| `syncMode` | [`SyncMode`](../enums/SyncMode.md) | `SyncMode.Enabled` |

## Properties

### 1

• **1**: `Map`<`string`, [`RegisteredSlashCommand`](RegisteredSlashCommand.md) \| [`RegisteredCommandGroup`](RegisteredCommandGroup.md)\>

#### Defined in

[app/managers/CommandManager.ts:46](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/managers/CommandManager.ts#L46)

___

### 2

• **2**: `Map`<`string`, [`RegisteredUserCommand`](RegisteredUserCommand.md)\>

#### Defined in

[app/managers/CommandManager.ts:47](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/managers/CommandManager.ts#L47)

___

### 3

• **3**: `Map`<`string`, [`RegisteredMessageCommand`](RegisteredMessageCommand.md)\>

#### Defined in

[app/managers/CommandManager.ts:48](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/managers/CommandManager.ts#L48)

___

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Defined in

[app/managers/CommandManager.ts:50](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/managers/CommandManager.ts#L50)

___

### guildId

• `Optional` **guildId**: `string`

#### Defined in

[app/managers/CommandManager.ts:53](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/managers/CommandManager.ts#L53)

___

### syncMode

• **syncMode**: [`SyncMode`](../enums/SyncMode.md)

#### Defined in

[app/managers/CommandManager.ts:51](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/managers/CommandManager.ts#L51)

## Methods

### deleteCommand

▸ **deleteCommand**(`id`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`unknown`\>

___

### deleteUnregistered

▸ **deleteUnregistered**(): `Promise`<`void`\>

Deletes remote commands that aren't registered with this command manager

#### Returns

`Promise`<`void`\>

___

### get

▸ **get**(`name`, `type?`): `undefined` \| [`RegisteredCommand`](../modules.md#registeredcommand)

Fetch a registered command

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | Command name |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` | Command type |

#### Returns

`undefined` \| [`RegisteredCommand`](../modules.md#registeredcommand)

___

### has

▸ **has**(`name`, `type?`): `boolean`

Check whether a command is registered

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | Command name |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` | Command type |

#### Returns

`boolean`

___

### patchCommand

▸ **patchCommand**(`id`, `data`): `Promise`<`APIApplicationCommand`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `CommandData` |

#### Returns

`Promise`<`APIApplicationCommand`\>

___

### postCommand

▸ **postCommand**(`data`): `Promise`<`APIApplicationCommand`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CommandData` |

#### Returns

`Promise`<`APIApplicationCommand`\>

___

### register

▸ **register**(...`commands`): `Promise`<[`RegisteredCommand`](../modules.md#registeredcommand)[]\>

Register a new command to be handled. This will create the command on Discord if it doesn't exist, or overwrite it if the existing remote version differs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...commands` | [`ICommand`](../modules.md#icommand)[] |

#### Returns

`Promise`<[`RegisteredCommand`](../modules.md#registeredcommand)[]\>

___

### rename

▸ **rename**(`oldName`, `newName`, `type`): `void`

Rename a registered command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldName` | `string` | Old name |
| `newName` | `string` | New Name |
| `type` | `ApplicationCommandType` | Command type |

#### Returns

`void`

___

### set

▸ **set**(`name`, `type?`, `command`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` |
| `command` | [`RegisteredCommand`](../modules.md#registeredcommand) | `undefined` |

#### Returns

`void`

___

### sync

▸ **sync**(`syncMode?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `syncMode?` | [`SyncMode`](../enums/SyncMode.md) |

#### Returns

`Promise`<`void`\>

___

### toAPICommands

▸ **toAPICommands**(): `RESTPostAPIApplicationCommandsJSONBody`[]

Get an array of API command objects for all registered commands

#### Returns

`RESTPostAPIApplicationCommandsJSONBody`[]

___

### unregister

▸ **unregister**(`name`, `type?`, `deleteCommand?`): `Promise`<`void`\>

Unregister a command from this client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | Command name |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` | Command type |
| `deleteCommand` | `boolean` | `false` | Whether to also delete this command from Discord (default: false) |

#### Returns

`Promise`<`void`\>
