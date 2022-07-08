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

### Methods

- [deleteAPICommand](CommandManager.md#deleteapicommand)
- [deleteUnregistered](CommandManager.md#deleteunregistered)
- [get](CommandManager.md#get)
- [getAPICommands](CommandManager.md#getapicommands)
- [has](CommandManager.md#has)
- [putAPICommand](CommandManager.md#putapicommand)
- [putAPICommands](CommandManager.md#putapicommands)
- [register](CommandManager.md#register)
- [rename](CommandManager.md#rename)
- [set](CommandManager.md#set)
- [toAPICommands](CommandManager.md#toapicommands)
- [unregister](CommandManager.md#unregister)
- [updateAPICommand](CommandManager.md#updateapicommand)

## Constructors

### constructor

• **new CommandManager**(`manager`, `guildId?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `guildId?` | `string` |

## Properties

### 1

• **1**: `Map`<`string`, [`RegisteredSlashCommand`](RegisteredSlashCommand.md) \| [`RegisteredCommandGroup`](RegisteredCommandGroup.md)\>

#### Defined in

[app/managers/CommandManager.ts:45](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/managers/CommandManager.ts#L45)

___

### 2

• **2**: `Map`<`string`, [`RegisteredUserCommand`](RegisteredUserCommand.md)\>

#### Defined in

[app/managers/CommandManager.ts:46](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/managers/CommandManager.ts#L46)

___

### 3

• **3**: `Map`<`string`, [`RegisteredMessageCommand`](RegisteredMessageCommand.md)\>

#### Defined in

[app/managers/CommandManager.ts:47](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/managers/CommandManager.ts#L47)

## Methods

### deleteAPICommand

▸ **deleteAPICommand**(`id`): `Promise`<`void`\>

Delete an Application Command

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

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

### getAPICommands

▸ **getAPICommands**(`withLocalizations?`): `Promise`<`APIApplicationCommand`[]\>

Fetch your application's commands

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withLocalizations` | `boolean` | `true` | Whether to include full localization dictionaries (name_localizations and description_localizations) in the returned objects, instead of the name_localized and description_localized fields. Default false. |

#### Returns

`Promise`<`APIApplicationCommand`[]\>

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

### putAPICommand

▸ **putAPICommand**<`T`\>(`data`): `Promise`<`T`\>

Create or Update an Application Command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `APIApplicationCommand` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `RESTPostAPIApplicationCommandsJSONBody` |

#### Returns

`Promise`<`T`\>

___

### putAPICommands

▸ **putAPICommands**(`data`): `Promise`<`APIApplicationCommand`[]\>

Bulk update your application's commands

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `RESTPostAPIApplicationCommandsJSONBody`[] |

#### Returns

`Promise`<`APIApplicationCommand`[]\>

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

___

### updateAPICommand

▸ **updateAPICommand**<`T`\>(`data`, `id`): `Promise`<`T`\>

Update an Application Command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `APIApplicationCommand` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `RESTPostAPIApplicationCommandsJSONBody` |
| `id` | `string` |

#### Returns

`Promise`<`T`\>
