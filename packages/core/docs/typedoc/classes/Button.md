[@discord-interactions/core](../README.md) / [Exports](../modules.md) / Button

# Class: Button

## Hierarchy

- `ComponentBase`<`APIButtonComponentWithCustomId`, `ButtonBuilder`, [`ButtonContext`](ButtonContext.md)\>

  ↳ **`Button`**

## Table of contents

### Constructors

- [constructor](Button.md#constructor)

### Properties

- [allowExpired](Button.md#allowexpired)
- [builder](Button.md#builder)
- [components](Button.md#components)
- [handler](Button.md#handler)
- [id](Button.md#id)
- [parentCommand](Button.md#parentcommand)

### Accessors

- [data](Button.md#data)

### Methods

- [createInstance](Button.md#createinstance)
- [setAllowExpired](Button.md#setallowexpired)
- [setHandler](Button.md#sethandler)
- [setId](Button.md#setid)

## Constructors

### constructor

• **new Button**(`id`, `builder`, `handler?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `builder` | `ButtonBuilder` |
| `handler` | (`ctx`: [`ButtonContext`](ButtonContext.md)<`never`\>) => `Promise`<`void`\> |

#### Overrides

ComponentBase&lt;APIButtonComponentWithCustomId, ButtonBuilder, ButtonContext\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

ComponentBase.allowExpired

#### Defined in

[app/components/Base.ts:10](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/components/Base.ts#L10)

___

### builder

• **builder**: `ButtonBuilder`

#### Inherited from

ComponentBase.builder

#### Defined in

[app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/HandledInteraction.ts#L4)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

ComponentBase.components

#### Defined in

[app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/HandledInteraction.ts#L11)

___

### handler

• **handler**: (`ctx`: [`ButtonContext`](ButtonContext.md)<`never`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`ButtonContext`](ButtonContext.md)<`never`\> |

##### Returns

`Promise`<`void`\>

#### Inherited from

ComponentBase.handler

#### Defined in

[app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/HandledInteraction.ts#L9)

___

### id

• **id**: `string`

#### Inherited from

ComponentBase.id

#### Defined in

[app/components/Base.ts:9](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/components/Base.ts#L9)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

ComponentBase.parentCommand

#### Defined in

[app/components/Base.ts:12](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/components/Base.ts#L12)

## Accessors

### data

• `get` **data**(): `Data`

#### Returns

`Data`

#### Inherited from

ComponentBase.data

## Methods

### createInstance

▸ **createInstance**(`state`): `ButtonBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`ButtonBuilder`

___

### setAllowExpired

▸ **setAllowExpired**(`value`): [`Button`](Button.md)

Set whether component execution should continue when state data has expired

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`Button`](Button.md)

#### Inherited from

ComponentBase.setAllowExpired

___

### setHandler

▸ **setHandler**(`handler`): [`Button`](Button.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`ButtonContext`](ButtonContext.md)<`never`\>) => `Promise`<`void`\> |

#### Returns

[`Button`](Button.md)

#### Inherited from

ComponentBase.setHandler

___

### setId

▸ **setId**(`id`): [`Button`](Button.md)

Set the component ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Button`](Button.md)

#### Inherited from

ComponentBase.setId
