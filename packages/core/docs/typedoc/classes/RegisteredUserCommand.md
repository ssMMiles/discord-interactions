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
- [handler](RegisteredUserCommand.md#handler)
- [id](RegisteredUserCommand.md#id)

### Methods

- [delete](RegisteredUserCommand.md#delete)
- [setHandler](RegisteredUserCommand.md#sethandler)
- [sync](RegisteredUserCommand.md#sync)
- [unregister](RegisteredUserCommand.md#unregister)

## Constructors

### constructor

• **new RegisteredUserCommand**(`manager`, `command`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `UserCommandBuilder` |
| `command.handler` | (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\> |
| `id` | `string` |

#### Inherited from

RegisteredCommandBase<UserCommandBuilder, UserCommandContext\>.constructor

## Properties

### builder

• **builder**: `UserCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[app/commands/Base.ts:20](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L20)

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

[app/commands/Base.ts:21](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L21)

___

### id

• **id**: `string`

#### Inherited from

RegisteredCommandBase.id

#### Defined in

[app/commands/Base.ts:23](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L23)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

Delete and unregister this command

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

▸ **sync**(): `Promise`<`void`\>

Sync this command's builder with the API

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.sync

___

### unregister

▸ **unregister**(): `Promise`<`void`\>

Unregister this command

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.unregister
