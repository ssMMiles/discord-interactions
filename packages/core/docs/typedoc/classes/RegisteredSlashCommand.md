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
| `command.handler` | (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\> |
| `id` | `string` |

#### Inherited from

RegisteredCommandBase<SlashCommandBuilder, SlashCommandContext\>.constructor

## Properties

### builder

• **builder**: `SlashCommandBuilder`

#### Inherited from

RegisteredCommandBase.builder

#### Defined in

[app/commands/Base.ts:20](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L20)

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

[app/commands/Base.ts:21](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L21)

___

### id

• **id**: `string`

#### Inherited from

RegisteredCommandBase.id

#### Defined in

[app/commands/Base.ts:23](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/Base.ts#L23)

## Methods

### autocompleteHandler

▸ **autocompleteHandler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`AutocompleteContext`](AutocompleteContext.md) |

#### Returns

`Promise`<`void`\>

___

### delete

▸ **delete**(): `Promise`<`void`\>

Delete and unregister this command

#### Returns

`Promise`<`void`\>

#### Inherited from

RegisteredCommandBase.delete

___

### setAutocompleteHandler

▸ **setAutocompleteHandler**(`handler`): [`RegisteredSlashCommand`](RegisteredSlashCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`AutocompleteContext`](AutocompleteContext.md)) => `Promise`<`void`\> |

#### Returns

[`RegisteredSlashCommand`](RegisteredSlashCommand.md)

___

### setHandler

▸ **setHandler**(`handler`): `void`

Update this command's handler function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\> | New command handler |

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
