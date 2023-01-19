[@discord-interactions/core](../README.md) / [Exports](../modules.md) / StringSelectMenu

# Class: StringSelectMenu

## Hierarchy

- `ComponentBase`<`APIStringSelectComponent`, `StringSelectMenuBuilder`, [`StringSelectMenuContext`](StringSelectMenuContext.md)\>

  ↳ **`StringSelectMenu`**

## Table of contents

### Constructors

- [constructor](StringSelectMenu.md#constructor)

### Properties

- [allowExpired](StringSelectMenu.md#allowexpired)
- [builder](StringSelectMenu.md#builder)
- [components](StringSelectMenu.md#components)
- [handler](StringSelectMenu.md#handler)
- [id](StringSelectMenu.md#id)
- [parentCommand](StringSelectMenu.md#parentcommand)

### Accessors

- [data](StringSelectMenu.md#data)

### Methods

- [createInstance](StringSelectMenu.md#createinstance)
- [setAllowExpired](StringSelectMenu.md#setallowexpired)
- [setHandler](StringSelectMenu.md#sethandler)
- [setId](StringSelectMenu.md#setid)

## Constructors

### constructor

• **new StringSelectMenu**(`id`, `builder`, `handler?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `builder` | `StringSelectMenuBuilder` |
| `handler` | (`ctx`: [`SelectMenuContext`](../modules.md#selectmenucontext)<`never`\>) => `Promise`<`void`\> |

#### Overrides

ComponentBase&lt;
  APIStringSelectComponent,
  StringSelectMenuBuilder,
  StringSelectMenuContext
\&gt;.constructor

## Properties

### allowExpired

• **allowExpired**: `boolean` = `false`

#### Inherited from

ComponentBase.allowExpired

#### Defined in

[app/components/Base.ts:10](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/components/Base.ts#L10)

___

### builder

• **builder**: `StringSelectMenuBuilder`

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

• **handler**: (`ctx`: [`StringSelectMenuContext`](StringSelectMenuContext.md)<`never`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`ctx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`StringSelectMenuContext`](StringSelectMenuContext.md)<`never`\> |

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

▸ **createInstance**(`state`): `StringSelectMenuBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`StringSelectMenuBuilder`

___

### setAllowExpired

▸ **setAllowExpired**(`value`): [`StringSelectMenu`](StringSelectMenu.md)

Set whether component execution should continue when state data has expired

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

#### Inherited from

ComponentBase.setAllowExpired

___

### setHandler

▸ **setHandler**(`handler`): [`StringSelectMenu`](StringSelectMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`ctx`: [`StringSelectMenuContext`](StringSelectMenuContext.md)<`never`\>) => `Promise`<`void`\> |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

#### Inherited from

ComponentBase.setHandler

___

### setId

▸ **setId**(`id`): [`StringSelectMenu`](StringSelectMenu.md)

Set the component ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

#### Inherited from

ComponentBase.setId
