[@discord-interactions/core](../README.md) / [Exports](../modules.md) / RegisteredCommandGroup

# Class: RegisteredCommandGroup

## Table of contents

### Constructors

- [constructor](RegisteredCommandGroup.md#constructor)

### Properties

- [builder](RegisteredCommandGroup.md#builder)
- [handlers](RegisteredCommandGroup.md#handlers)
- [id](RegisteredCommandGroup.md#id)

### Methods

- [delete](RegisteredCommandGroup.md#delete)
- [setHandlers](RegisteredCommandGroup.md#sethandlers)
- [sync](RegisteredCommandGroup.md#sync)
- [unregister](RegisteredCommandGroup.md#unregister)

## Constructors

### constructor

• **new RegisteredCommandGroup**(`manager`, `command`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `CommandGroupBuilder` |
| `command.handlers` | [`ISubcommandHandlers`](../modules.md#isubcommandhandlers) |
| `id` | `string` |

## Properties

### builder

• **builder**: `CommandGroupBuilder`

#### Defined in

[app/commands/CommandGroup.ts:46](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/CommandGroup.ts#L46)

___

### handlers

• **handlers**: `Record`<`string`, [`ISubcommandHandler`](../interfaces/ISubcommandHandler.md) \| [`ISubcommandGroup`](../modules.md#isubcommandgroup)\>

#### Defined in

[app/commands/CommandGroup.ts:47](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/CommandGroup.ts#L47)

___

### id

• **id**: `string`

#### Defined in

[app/commands/CommandGroup.ts:49](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/CommandGroup.ts#L49)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

Delete and unregister this command

#### Returns

`Promise`<`void`\>

___

### setHandlers

▸ **setHandlers**(`handler`): `void`

Update this command's handler function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ISubcommandHandlers`](../modules.md#isubcommandhandlers) | New command handler |

#### Returns

`void`

___

### sync

▸ **sync**(): `Promise`<`void`\>

Sync this command's builder with the API

#### Returns

`Promise`<`void`\>

___

### unregister

▸ **unregister**(): `Promise`<`void`\>

Unregister this command

#### Returns

`Promise`<`void`\>
