[@discord-interactions/core](../README.md) / [Exports](../modules.md) / RegisteredSlashCommand

# Class: RegisteredSlashCommand

## Hierarchy

- `RegisteredCommandBase`<`SlashCommandBuilder`, [`SlashCommandContext`](SlashCommandContext.md)\>

  ↳ **`RegisteredSlashCommand`**

## Table of contents

### Constructors

- [constructor](RegisteredSlashCommand.md#constructor)

### Properties

- [builder](RegisteredSlashCommand.md#builder)
- [handler](RegisteredSlashCommand.md#handler)
- [id](RegisteredSlashCommand.md#id)

### Methods

- [autocompleteHandler](RegisteredSlashCommand.md#autocompletehandler)
- [delete](RegisteredSlashCommand.md#delete)
- [setAutocompleteHandler](RegisteredSlashCommand.md#setautocompletehandler)
- [setHandler](RegisteredSlashCommand.md#sethandler)
- [sync](RegisteredSlashCommand.md#sync)
- [unregister](RegisteredSlashCommand.md#unregister)

## Constructors

### constructor

• **new RegisteredSlashCommand**(`manager`, `command`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `SlashCommandBuilder` |
| `command.handler` | (`ctx`: `Context`) => `Promise`<`void`\> |
| `id` | `string` |

#### Inherited from

RegisteredCommandBase<SlashCommandBuilder, SlashCommandContext\>.constructor

#### Defined in

[core/src/app/commands/Base.ts:25](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L25)

## Properties

### builder

• **builder**: `SlashCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[core/src/app/commands/Base.ts:20](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L20)

___

### handler

• **handler**: (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SlashCommandContext`](SlashCommandContext.md) |

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

### autocompleteHandler

▸ **autocompleteHandler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`AutocompleteContext`](AutocompleteContext.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/commands/SlashCommand.ts:52](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/SlashCommand.ts#L52)

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.delete

#### Defined in

[core/src/app/commands/Base.ts:71](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/Base.ts#L71)

___

### setAutocompleteHandler

▸ **setAutocompleteHandler**(`handler`): [`RegisteredSlashCommand`](RegisteredSlashCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`AutocompleteContext`](AutocompleteContext.md)) => `Promise`<`void`\> |

#### Returns

[`RegisteredSlashCommand`](RegisteredSlashCommand.md)

#### Defined in

[core/src/app/commands/SlashCommand.ts:56](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/commands/SlashCommand.ts#L56)

___

### setHandler

▸ **setHandler**(`handler`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\> |  |

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
