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
| `command.handler` | (`ctx`: `Context`) => `Promise`<`void`\> |
| `id` | `string` |

#### Inherited from

RegisteredCommandBase<MessageCommandBuilder, MessageCommandContext\>.constructor

#### Defined in

[core/src/app/commands/Base.ts:25](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L25)

## Properties

### builder

• **builder**: `MessageCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[core/src/app/commands/Base.ts:20](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L20)

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

[core/src/app/commands/Base.ts:21](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L21)

___

### id

• **id**: `string`

#### Inherited from

RegisteredCommandBase.id

#### Defined in

[core/src/app/commands/Base.ts:23](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L23)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.delete

#### Defined in

[core/src/app/commands/Base.ts:71](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L71)

___

### setHandler

▸ **setHandler**(`handler`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`ctx`: [`MessageCommandContext`](MessageCommandContext.md)) => `Promise`<`void`\> |  |

#### Returns

`void`

#### Inherited from

RegisteredCommandBase.setHandler

#### Defined in

[core/src/app/commands/Base.ts:44](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L44)

___

### sync

▸ **sync**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.sync

#### Defined in

[core/src/app/commands/Base.ts:51](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L51)

___

### unregister

▸ **unregister**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.unregister

#### Defined in

[core/src/app/commands/Base.ts:64](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L64)
