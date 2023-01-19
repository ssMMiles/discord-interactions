[@discord-interactions/core](../README.md) / [Exports](../modules.md) / Modal

# Class: Modal

## Hierarchy

- `ComponentBase`<`APIModalInteractionResponseCallbackData`, `ModalBuilder`, [`ModalSubmitContext`](ModalSubmitContext.md)\>

  ↳ **`Modal`**

## Table of contents

### Constructors

- [constructor](Modal.md#constructor)

### Properties

- [allowExpired](Modal.md#allowexpired)
- [builder](Modal.md#builder)
- [components](Modal.md#components)
- [handler](Modal.md#handler)
- [id](Modal.md#id)
- [parentCommand](Modal.md#parentcommand)

### Accessors

- [data](Modal.md#data)

### Methods

- [createInstance](Modal.md#createinstance)
- [setAllowExpired](Modal.md#setallowexpired)
- [setHandler](Modal.md#sethandler)
- [setId](Modal.md#setid)

## Constructors

### constructor

• **new Modal**(`id`, `builder`, `handler?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `builder` | `ModalBuilder` |
| `handler` | (`ctx`: [`ModalSubmitContext`](ModalSubmitContext.md)<`never`\>) => `Promise`<`void`\> |

#### Overrides

ComponentBase&lt;APIModalInteractionResponseCallbackData, ModalBuilder, ModalSubmitContext\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

ComponentBase.allowExpired

#### Defined in

[app/components/Base.ts:10](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/components/Base.ts#L10)

___

### builder

• **builder**: `ModalBuilder`

#### Inherited from

ComponentBase.builder

#### Defined in

[app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/handlers/HandledInteraction.ts#L4)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

ComponentBase.components

#### Defined in

[app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/handlers/HandledInteraction.ts#L11)

___

### handler

• **handler**: (`ctx`: [`ModalSubmitContext`](ModalSubmitContext.md)<`never`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`ModalSubmitContext`](ModalSubmitContext.md)<`never`\> |

##### Returns

`Promise`<`void`\>

#### Inherited from

ComponentBase.handler

#### Defined in

[app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/handlers/HandledInteraction.ts#L9)

___

### id

• **id**: `string`

#### Inherited from

ComponentBase.id

#### Defined in

[app/components/Base.ts:9](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/components/Base.ts#L9)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

ComponentBase.parentCommand

#### Defined in

[app/components/Base.ts:12](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/components/Base.ts#L12)

## Accessors

### data

• `get` **data**(): `Data`

#### Returns

`Data`

#### Inherited from

ComponentBase.data

## Methods

### createInstance

▸ **createInstance**(`state`): `ModalBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`ModalBuilder`

___

### setAllowExpired

▸ **setAllowExpired**(`value`): [`Modal`](Modal.md)

Set whether component execution should continue when state data has expired

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`Modal`](Modal.md)

#### Inherited from

ComponentBase.setAllowExpired

___

### setHandler

▸ **setHandler**(`handler`): [`Modal`](Modal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`ModalSubmitContext`](ModalSubmitContext.md)<`never`\>) => `Promise`<`void`\> |

#### Returns

[`Modal`](Modal.md)

#### Inherited from

ComponentBase.setHandler

___

### setId

▸ **setId**(`id`): [`Modal`](Modal.md)

Set the component ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Modal`](Modal.md)

#### Inherited from

ComponentBase.setId
