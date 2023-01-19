[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / ActionRowBuilder

# Class: ActionRowBuilder<T\>

Represents an action row component

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBuilders`](../modules.md#componentbuilders) = [`MessageActionRowComponentBuilders`](../modules.md#messageactionrowcomponentbuilders) |

## Hierarchy

- `ComponentBuilderBase`<`APIActionRowComponent`<`APIMessageActionRowComponent`\>\>

  ↳ **`ActionRowBuilder`**

## Table of contents

### Constructors

- [constructor](ActionRowBuilder.md#constructor)

### Properties

- [components](ActionRowBuilder.md#components)
- [data](ActionRowBuilder.md#data)

### Methods

- [addComponents](ActionRowBuilder.md#addcomponents)
- [setComponents](ActionRowBuilder.md#setcomponents)
- [toJSON](ActionRowBuilder.md#tojson)

## Constructors

### constructor

• **new ActionRowBuilder**<`T`\>(`components?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ComponentBuilders`](../modules.md#componentbuilders) = [`MessageActionRowComponentBuilders`](../modules.md#messageactionrowcomponentbuilders) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `components?` | `T`[] |

#### Overrides

ComponentBuilderBase&lt;APIActionRowComponent&lt;APIMessageActionRowComponent /* \| APIModalActionRowComponent*/\&gt;\&gt;.constructor

## Properties

### components

• `Readonly` **components**: `T`[] = `[]`

The components within this action row

#### Defined in

[src/components/ActionRowBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/builders/src/components/ActionRowBuilder.ts#L24)

___

### data

• `Readonly` **data**: `Partial`<`APIActionRowComponent`<`APIMessageActionRowComponent`\>\>

The API data associated with this component

#### Inherited from

ComponentBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### addComponents

▸ **addComponents**(...`components`): [`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

Adds components to this action row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | `T`[] | The components to add to this action row. |

#### Returns

[`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

___

### setComponents

▸ **setComponents**(`components`): [`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

Sets the components in this action row

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `components` | `T`[] | The components to set this row to |

#### Returns

[`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

___

### toJSON

▸ **toJSON**(): `APIActionRowComponent`<`ReturnType`<`T`[``"toJSON"``]\>\>

#### Returns

`APIActionRowComponent`<`ReturnType`<`T`[``"toJSON"``]\>\>

#### Overrides

ComponentBuilderBase.toJSON
