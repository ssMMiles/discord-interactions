[@discord-interactions/core](../README.md) / [Exports](../modules.md) / CommandManager

# Class: CommandManager

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

#### Defined in

[app/managers/CommandManager.ts:53](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L53)

## Properties

### 1

• **1**: `Map`<`string`, [`RegisteredSlashCommand`](RegisteredSlashCommand.md) \| [`RegisteredCommandGroup`](RegisteredCommandGroup.md)\>

#### Defined in

[app/managers/CommandManager.ts:45](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L45)

___

### 2

• **2**: `Map`<`string`, [`RegisteredUserCommand`](RegisteredUserCommand.md)\>

#### Defined in

[app/managers/CommandManager.ts:46](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L46)

___

### 3

• **3**: `Map`<`string`, [`RegisteredMessageCommand`](RegisteredMessageCommand.md)\>

#### Defined in

[app/managers/CommandManager.ts:47](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L47)

## Methods

### deleteAPICommand

▸ **deleteAPICommand**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[app/managers/CommandManager.ts:276](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L276)

___

### deleteUnregistered

▸ **deleteUnregistered**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[app/managers/CommandManager.ts:198](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L198)

___

### get

▸ **get**(`name`, `type?`): `undefined` \| [`RegisteredCommand`](../modules.md#registeredcommand)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` |  |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` |  |

#### Returns

`undefined` \| [`RegisteredCommand`](../modules.md#registeredcommand)

#### Defined in

[app/managers/CommandManager.ts:100](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L100)

___

### getAPICommands

▸ **getAPICommands**(`withLocalizations?`): `Promise`<`APIApplicationCommand`[]\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withLocalizations` | `boolean` | `true` |  |

#### Returns

`Promise`<`APIApplicationCommand`[]\>

#### Defined in

[app/managers/CommandManager.ts:235](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L235)

___

### has

▸ **has**(`name`, `type?`): `boolean`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` |  |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` |  |

#### Returns

`boolean`

#### Defined in

[app/managers/CommandManager.ts:91](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L91)

___

### putAPICommand

▸ **putAPICommand**<`T`\>(`data`): `Promise`<`T`\>

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

#### Defined in

[app/managers/CommandManager.ts:253](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L253)

___

### putAPICommands

▸ **putAPICommands**(`data`): `Promise`<`APIApplicationCommand`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `RESTPostAPIApplicationCommandsJSONBody`[] |

#### Returns

`Promise`<`APIApplicationCommand`[]\>

#### Defined in

[app/managers/CommandManager.ts:244](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L244)

___

### register

▸ **register**(...`commands`): `Promise`<[`RegisteredCommand`](../modules.md#registeredcommand)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...commands` | [`ICommand`](../modules.md#icommand)[] |

#### Returns

`Promise`<[`RegisteredCommand`](../modules.md#registeredcommand)[]\>

#### Defined in

[app/managers/CommandManager.ts:126](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L126)

___

### rename

▸ **rename**(`oldName`, `newName`, `type`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldName` | `string` |  |
| `newName` | `string` |  |
| `type` | `ApplicationCommandType` |  |

#### Returns

`void`

#### Defined in

[app/managers/CommandManager.ts:114](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L114)

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

#### Defined in

[app/managers/CommandManager.ts:104](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L104)

___

### toAPICommands

▸ **toAPICommands**(): `RESTPostAPIApplicationCommandsJSONBody`[]

#### Returns

`RESTPostAPIApplicationCommandsJSONBody`[]

#### Defined in

[app/managers/CommandManager.ts:217](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L217)

___

### unregister

▸ **unregister**(`name`, `type?`, `deleteCommand?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` |  |
| `type` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` |  |
| `deleteCommand` | `boolean` | `false` |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[app/managers/CommandManager.ts:185](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L185)

___

### updateAPICommand

▸ **updateAPICommand**<`T`\>(`data`, `id`): `Promise`<`T`\>

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

#### Defined in

[app/managers/CommandManager.ts:262](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L262)
