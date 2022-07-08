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
- [handler](RegisteredMessageCommand.md#handler)
- [id](RegisteredMessageCommand.md#id)

### Methods

- [delete](RegisteredMessageCommand.md#delete)
- [setHandler](RegisteredMessageCommand.md#sethandler)
- [sync](RegisteredMessageCommand.md#sync)
- [unregister](RegisteredMessageCommand.md#unregister)

## Constructors

### constructor

• **new RegisteredMessageCommand**(`manager`, `command`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `MessageCommandBuilder` |
| `command.handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> |
| `id` | `string` |

#### Inherited from

RegisteredCommandBase<MessageCommandBuilder, MessageCommandContext\>.constructor

## Properties

### builder

• **builder**: `MessageCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[app/commands/Base.ts:20](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L20)

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
| `handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> | New command handler |

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
