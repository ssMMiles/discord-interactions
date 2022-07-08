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

#### Defined in

[core/src/app/commands/CommandGroup.ts:51](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L51)

## Properties

### builder

• **builder**: `CommandGroupBuilder`

#### Defined in

[core/src/app/commands/CommandGroup.ts:46](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L46)

___

### handlers

• **handlers**: `Record`<`string`, [`ISubcommandHandler`](../interfaces/ISubcommandHandler.md) \| [`ISubcommandGroup`](../modules.md#isubcommandgroup)\>

#### Defined in

[core/src/app/commands/CommandGroup.ts:47](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L47)

___

### id

• **id**: `string`

#### Defined in

[core/src/app/commands/CommandGroup.ts:49](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L49)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/commands/CommandGroup.ts:97](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L97)

___

### setHandlers

▸ **setHandlers**(`handler`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ISubcommandHandlers`](../modules.md#isubcommandhandlers) |  |

#### Returns

`void`

#### Defined in

[core/src/app/commands/CommandGroup.ts:70](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L70)

___

### sync

▸ **sync**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/commands/CommandGroup.ts:77](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L77)

___

### unregister

▸ **unregister**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/commands/CommandGroup.ts:90](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/CommandGroup.ts#L90)
