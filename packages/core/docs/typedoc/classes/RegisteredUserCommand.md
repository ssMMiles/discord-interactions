[@discord-interactions/core](../README.md) / [Exports](../modules.md) / RegisteredUserCommand

# Class: RegisteredUserCommand

## Hierarchy

- `RegisteredCommandBase`<`UserCommandBuilder`, [`UserCommandContext`](UserCommandContext.md)\>

  ↳ **`RegisteredUserCommand`**

## Table of contents

### Constructors

- [constructor](RegisteredUserCommand.md#constructor)

### Properties

- [builder](RegisteredUserCommand.md#builder)
- [components](RegisteredUserCommand.md#components)
- [handler](RegisteredUserCommand.md#handler)
- [id](RegisteredUserCommand.md#id)
- [lastSyncedAt](RegisteredUserCommand.md#lastsyncedat)

### Methods

- [create](RegisteredUserCommand.md#create)
- [delete](RegisteredUserCommand.md#delete)
- [setHandler](RegisteredUserCommand.md#sethandler)
- [sync](RegisteredUserCommand.md#sync)
- [update](RegisteredUserCommand.md#update)

## Constructors

### constructor

• **new RegisteredUserCommand**(`manager`, `command`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `UserCommandBuilder` |
| `command.handler` | (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\> |

#### Inherited from

RegisteredCommandBase<UserCommandBuilder, UserCommandContext\>.constructor

## Properties

### builder

• **builder**: `UserCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[app/commands/Base.ts:28](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/core/src/app/commands/Base.ts#L28)

___

### components

• `Optional` **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

RegisteredCommandBase.components

#### Defined in

[app/commands/Base.ts:30](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/core/src/app/commands/Base.ts#L30)

___

### handler

• **handler**: (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`UserCommandContext`](UserCommandContext.md) |

##### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.handler

#### Defined in

[app/commands/Base.ts:153](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/core/src/app/commands/Base.ts#L153)

___

### id

• **id**: `string` = `"0"`

#### Inherited from

RegisteredCommandBase.id

#### Defined in

[app/commands/Base.ts:32](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/core/src/app/commands/Base.ts#L32)

___

### lastSyncedAt

• `Optional` **lastSyncedAt**: `Date`

#### Inherited from

RegisteredCommandBase.lastSyncedAt

#### Defined in

[app/commands/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/core/src/app/commands/Base.ts#L26)

## Methods

### create

▸ **create**(): `Promise`<`void`\>

Create this command in Discord

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.create

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

RegisteredCommandBase.delete

___

### setHandler

▸ **setHandler**(`handler`): `void`

Update this command's handler function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\> | New command handler |

#### Returns

`void`

#### Inherited from

RegisteredCommandBase.setHandler

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

RegisteredCommandBase.sync

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

RegisteredCommandBase.update
