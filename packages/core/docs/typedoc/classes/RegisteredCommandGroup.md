[@discord-interactions/core](../README.md) / [Exports](../modules.md) / RegisteredCommandGroup

# Class: RegisteredCommandGroup

## Hierarchy

- `RegisteredDiscordCommand`<`CommandGroupBuilder`\>

  ↳ **`RegisteredCommandGroup`**

## Table of contents

### Constructors

- [constructor](RegisteredCommandGroup.md#constructor)

### Properties

- [builder](RegisteredCommandGroup.md#builder)
- [components](RegisteredCommandGroup.md#components)
- [handlers](RegisteredCommandGroup.md#handlers)
- [id](RegisteredCommandGroup.md#id)
- [lastSyncedAt](RegisteredCommandGroup.md#lastsyncedat)

### Methods

- [create](RegisteredCommandGroup.md#create)
- [delete](RegisteredCommandGroup.md#delete)
- [setHandlers](RegisteredCommandGroup.md#sethandlers)
- [sync](RegisteredCommandGroup.md#sync)
- [update](RegisteredCommandGroup.md#update)

## Constructors

### constructor

• **new RegisteredCommandGroup**(`manager`, `command`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `CommandGroupBuilder` |
| `command.handlers` | [`ISubcommandHandlers`](../modules.md#isubcommandhandlers) |

#### Overrides

RegisteredDiscordCommand&lt;CommandGroupBuilder\&gt;.constructor

## Properties

### builder

• **builder**: `CommandGroupBuilder`

#### Inherited from

RegisteredDiscordCommand.builder

#### Defined in

[app/commands/Base.ts:28](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/Base.ts#L28)

___

### components

• `Optional` **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

RegisteredDiscordCommand.components

#### Defined in

[app/commands/Base.ts:30](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/Base.ts#L30)

___

### handlers

• **handlers**: `Record`<`string`, [`ISubcommandHandler`](../interfaces/ISubcommandHandler.md) \| [`ISubcommandGroup`](../modules.md#isubcommandgroup)\>

#### Defined in

[app/commands/CommandGroup.ts:44](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/CommandGroup.ts#L44)

___

### id

• **id**: `string` = `"0"`

#### Inherited from

RegisteredDiscordCommand.id

#### Defined in

[app/commands/Base.ts:32](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/Base.ts#L32)

___

### lastSyncedAt

• `Optional` **lastSyncedAt**: `Date`

#### Inherited from

RegisteredDiscordCommand.lastSyncedAt

#### Defined in

[app/commands/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/commands/Base.ts#L26)

## Methods

### create

▸ **create**(): `Promise`<`void`\>

Create this command in Discord

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredDiscordCommand.create

___

### delete

▸ **delete**(`id?`): `Promise`<`void`\>

Delete this command from Discord

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredDiscordCommand.delete

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

▸ **sync**(`remoteCommand?`): `Promise`<`void`\>

Sync this command with Discord

#### Parameters

| Name | Type |
| :------ | :------ |
| `remoteCommand?` | `APIApplicationCommand` |

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredDiscordCommand.sync

___

### update

▸ **update**(`id?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredDiscordCommand.update
