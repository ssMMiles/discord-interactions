[@discord-interactions/core](../README.md) / [Exports](../modules.md) / SlashCommand

# Class: SlashCommand

## Hierarchy

- `HandledInteraction`<`RESTPostAPIChatInputApplicationCommandsJSONBody`, `SlashCommandBuilder`, [`SlashCommandContext`](SlashCommandContext.md)\>

  ↳ **`SlashCommand`**

## Implements

- [`ISlashCommand`](../interfaces/ISlashCommand.md)

## Table of contents

### Constructors

- [constructor](SlashCommand.md#constructor)

### Properties

- [autocompleteHandler](SlashCommand.md#autocompletehandler)
- [builder](SlashCommand.md#builder)
- [components](SlashCommand.md#components)
- [handler](SlashCommand.md#handler)

### Accessors

- [data](SlashCommand.md#data)

### Methods

- [addComponents](SlashCommand.md#addcomponents)
- [setAutocompleteHandler](SlashCommand.md#setautocompletehandler)
- [setComponents](SlashCommand.md#setcomponents)
- [setHandler](SlashCommand.md#sethandler)

## Constructors

### constructor

• **new SlashCommand**(`builder`, `handler?`, `components?`, `autocompleteHandler?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `builder` | `SlashCommandBuilder` | `undefined` |
| `handler` | (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\> | `undefined` |
| `components` | [`Component`](../modules.md#component)[] | `[]` |
| `autocompleteHandler` | (`ctx`: [`AutocompleteContext`](AutocompleteContext.md)) => `Promise`<`void`\> | `undefined` |

#### Overrides

HandledInteraction&lt;RESTPostAPIChatInputApplicationCommandsJSONBody, SlashCommandBuilder, SlashCommandContext\&gt;.constructor

## Properties

### autocompleteHandler

• **autocompleteHandler**: (`ctx`: [`AutocompleteContext`](AutocompleteContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`AutocompleteContext`](AutocompleteContext.md) |

##### Returns

`Promise`<`void`\>

#### Implementation of

[ISlashCommand](../interfaces/ISlashCommand.md).[autocompleteHandler](../interfaces/ISlashCommand.md#autocompletehandler)

#### Defined in

[app/commands/SlashCommand.ts:15](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/commands/SlashCommand.ts#L15)

___

### builder

• **builder**: `SlashCommandBuilder`

#### Implementation of

[ISlashCommand](../interfaces/ISlashCommand.md).[builder](../interfaces/ISlashCommand.md#builder)

#### Inherited from

HandledInteraction.builder

#### Defined in

[app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/handlers/HandledInteraction.ts#L4)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Implementation of

[ISlashCommand](../interfaces/ISlashCommand.md).[components](../interfaces/ISlashCommand.md#components)

#### Inherited from

HandledInteraction.components

#### Defined in

[app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/handlers/HandledInteraction.ts#L11)

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

#### Implementation of

[ISlashCommand](../interfaces/ISlashCommand.md).[handler](../interfaces/ISlashCommand.md#handler)

#### Inherited from

HandledInteraction.handler

#### Defined in

[app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/app/handlers/HandledInteraction.ts#L9)

## Accessors

### data

• `get` **data**(): `Data`

#### Returns

`Data`

#### Inherited from

HandledInteraction.data

## Methods

### addComponents

▸ **addComponents**(...`components`): [`SlashCommand`](SlashCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[] |

#### Returns

[`SlashCommand`](SlashCommand.md)

___

### setAutocompleteHandler

▸ **setAutocompleteHandler**(`handler`): [`SlashCommand`](SlashCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`AutocompleteContext`](AutocompleteContext.md)) => `Promise`<`void`\> |

#### Returns

[`SlashCommand`](SlashCommand.md)

___

### setComponents

▸ **setComponents**(`components`): [`SlashCommand`](SlashCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `components` | ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[] |

#### Returns

[`SlashCommand`](SlashCommand.md)

___

### setHandler

▸ **setHandler**(`handler`): [`SlashCommand`](SlashCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`SlashCommandContext`](SlashCommandContext.md)) => `Promise`<`void`\> |

#### Returns

[`SlashCommand`](SlashCommand.md)

#### Inherited from

HandledInteraction.setHandler
