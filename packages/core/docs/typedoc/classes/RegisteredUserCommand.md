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
| `command.handler` | (`ctx`: `Context`) => `Promise`<`void`\> |
| `id` | `string` |

#### Inherited from

RegisteredCommandBase<UserCommandBuilder, UserCommandContext\>.constructor

#### Defined in

[app/commands/Base.ts:25](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L25)

## Properties

### builder

• **builder**: `UserCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[app/commands/Base.ts:20](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L20)

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

[app/commands/Base.ts:21](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L21)

___

### id

• **id**: `string`

#### Inherited from

RegisteredCommandBase.id

#### Defined in

[app/commands/Base.ts:23](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L23)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.delete

#### Defined in

[app/commands/Base.ts:71](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L71)

___

### setHandler

▸ **setHandler**(`handler`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`ctx`: [`UserCommandContext`](UserCommandContext.md)) => `Promise`<`void`\> |  |

#### Returns

`void`

#### Inherited from

RegisteredCommandBase.setHandler

#### Defined in

[app/commands/Base.ts:44](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L44)

___

### sync

▸ **sync**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.sync

#### Defined in

[app/commands/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L51)

___

### unregister

▸ **unregister**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.unregister

#### Defined in

[app/commands/Base.ts:64](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/Base.ts#L64)
