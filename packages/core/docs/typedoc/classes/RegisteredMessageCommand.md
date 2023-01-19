[@discord-interactions/core](../README.md) / [Exports](../modules.md) / RegisteredMessageCommand

# Class: RegisteredMessageCommand

## Hierarchy

- `RegisteredCommandBase`<`MessageCommandBuilder`, [`MessageCommandContext`](MessageCommandContext.md)\>

  ↳ **`RegisteredMessageCommand`**

## Table of contents

### Constructors

- [constructor](RegisteredMessageCommand.md#constructor)

### Properties

- [builder](RegisteredMessageCommand.md#builder)
- [components](RegisteredMessageCommand.md#components)
- [handler](RegisteredMessageCommand.md#handler)
- [id](RegisteredMessageCommand.md#id)
- [lastSyncedAt](RegisteredMessageCommand.md#lastsyncedat)

### Methods

- [create](RegisteredMessageCommand.md#create)
- [delete](RegisteredMessageCommand.md#delete)
- [setHandler](RegisteredMessageCommand.md#sethandler)
- [sync](RegisteredMessageCommand.md#sync)
- [update](RegisteredMessageCommand.md#update)

## Constructors

### constructor

• **new RegisteredMessageCommand**(`manager`, `command`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `MessageCommandBuilder` |
| `command.handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> |

#### Inherited from

RegisteredCommandBase<MessageCommandBuilder, MessageCommandContext\>.constructor

## Properties

### builder

• **builder**: `MessageCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[app/commands/Base.ts:28](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/commands/Base.ts#L28)

___

### components

• `Optional` **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

RegisteredCommandBase.components

#### Defined in

[app/commands/Base.ts:30](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/commands/Base.ts#L30)

___

### handler

• **handler**: (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`MessageCommandContext`](MessageCommandContext.md) |

##### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.handler

#### Defined in

[app/commands/Base.ts:153](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/commands/Base.ts#L153)

___

### id

• **id**: `string` = `"0"`

#### Inherited from

RegisteredCommandBase.id

#### Defined in

[app/commands/Base.ts:32](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/commands/Base.ts#L32)

___

### lastSyncedAt

• `Optional` **lastSyncedAt**: `Date`

#### Inherited from

RegisteredCommandBase.lastSyncedAt

#### Defined in

[app/commands/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/commands/Base.ts#L26)

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
| `handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> | New command handler |

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
