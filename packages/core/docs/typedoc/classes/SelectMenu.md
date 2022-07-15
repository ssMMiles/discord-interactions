[@discord-interactions/core](../README.md) / [Exports](../modules.md) / SelectMenu

# Class: SelectMenu

## Hierarchy

- `ComponentBase`<`APISelectMenuComponent`, `SelectMenuBuilder`, [`SelectMenuContext`](SelectMenuContext.md)\>

  ↳ **`SelectMenu`**

## Table of contents

### Constructors

- [constructor](SelectMenu.md#constructor)

### Properties

- [allowExpired](SelectMenu.md#allowexpired)
- [builder](SelectMenu.md#builder)
- [components](SelectMenu.md#components)
- [handler](SelectMenu.md#handler)
- [id](SelectMenu.md#id)
- [parentCommand](SelectMenu.md#parentcommand)

### Accessors

- [data](SelectMenu.md#data)

### Methods

- [createInstance](SelectMenu.md#createinstance)
- [setAllowExpired](SelectMenu.md#setallowexpired)
- [setHandler](SelectMenu.md#sethandler)
- [setId](SelectMenu.md#setid)

## Constructors

### constructor

• **new SelectMenu**(`id`, `builder`, `handler?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `builder` | `SelectMenuBuilder` |
| `handler` | (`ctx`: [`SelectMenuContext`](SelectMenuContext.md)<`never`\>) => `Promise`<`void`\> |

#### Overrides

ComponentBase&lt;APISelectMenuComponent, SelectMenuBuilder, SelectMenuContext\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

ComponentBase.allowExpired

#### Defined in

[app/components/Base.ts:10](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/components/Base.ts#L10)

___

### builder

• **builder**: `SelectMenuBuilder`

#### Inherited from

ComponentBase.builder

#### Defined in

[app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/handlers/HandledInteraction.ts#L4)

___

### components

• **components**: ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[]

#### Inherited from

ComponentBase.components

#### Defined in

[app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/handlers/HandledInteraction.ts#L11)

___

### handler

• **handler**: (`ctx`: [`SelectMenuContext`](SelectMenuContext.md)<`never`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SelectMenuContext`](SelectMenuContext.md)<`never`\> |

##### Returns

`Promise`<`void`\>

#### Inherited from

ComponentBase.handler

#### Defined in

[app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/handlers/HandledInteraction.ts#L9)

___

### id

• **id**: `string`

#### Inherited from

ComponentBase.id

#### Defined in

[app/components/Base.ts:9](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/components/Base.ts#L9)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Inherited from

ComponentBase.parentCommand

#### Defined in

[app/components/Base.ts:12](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/app/components/Base.ts#L12)

## Accessors

### data

• `get` **data**(): `Data`

#### Returns

`Data`

#### Inherited from

ComponentBase.data

## Methods

### createInstance

▸ **createInstance**(`state`): `SelectMenuBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`SelectMenuBuilder`

___

### setAllowExpired

▸ **setAllowExpired**(`value`): [`SelectMenu`](SelectMenu.md)

Set whether component execution should continue when state data has expired

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Inherited from

ComponentBase.setAllowExpired

___

### setHandler

▸ **setHandler**(`handler`): [`SelectMenu`](SelectMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`SelectMenuContext`](SelectMenuContext.md)<`never`\>) => `Promise`<`void`\> |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Inherited from

ComponentBase.setHandler

___

### setId

▸ **setId**(`id`): [`SelectMenu`](SelectMenu.md)

Set the component ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Inherited from

ComponentBase.setId
