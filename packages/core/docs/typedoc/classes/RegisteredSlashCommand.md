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
- [components](RegisteredSlashCommand.md#components)
- [handler](RegisteredSlashCommand.md#handler)
- [id](RegisteredSlashCommand.md#id)
- [lastSyncedAt](RegisteredSlashCommand.md#lastsyncedat)

### Methods

- [autocompleteHandler](RegisteredSlashCommand.md#autocompletehandler)
- [create](RegisteredSlashCommand.md#create)
- [delete](RegisteredSlashCommand.md#delete)
- [setAutocompleteHandler](RegisteredSlashCommand.md#setautocompletehandler)
- [setHandler](RegisteredSlashCommand.md#sethandler)
- [sync](RegisteredSlashCommand.md#sync)
- [update](RegisteredSlashCommand.md#update)

## Constructors

### constructor

• **new RegisteredSlashCommand**(`manager`, `command`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`CommandManager`](CommandManager.md) |
| `command` | `Object` |
| `command.builder` | `SlashCommandBuilder` |
| `command.handler` | (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\> |

#### Inherited from

RegisteredCommandBase<SlashCommandBuilder, SlashCommandContext\>.constructor

## Properties

### builder

• **builder**: `SlashCommandBuilder`

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

### autocompleteHandler

▸ **autocompleteHandler**(`ctx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`AutocompleteContext`](AutocompleteContext.md) |

#### Returns

`Promise`<`void`\>

___

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
