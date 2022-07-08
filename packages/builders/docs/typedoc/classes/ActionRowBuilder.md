[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / ActionRowBuilder

# Class: ActionRowBuilder<T\>

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

#### Defined in

[src/components/ActionRowBuilder.ts:26](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L26)

## Properties

### components

• `Readonly` **components**: `T`[] = `[]`

#### Defined in

[src/components/ActionRowBuilder.ts:24](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L24)

___

### data

• `Readonly` **data**: `Partial`<`APIActionRowComponent`<`APIMessageActionRowComponent`\>\>

#### Inherited from

ComponentBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### addComponents

▸ **addComponents**(...`components`): [`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | `T`[] |  |

#### Returns

[`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

#### Defined in

[src/components/ActionRowBuilder.ts:36](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L36)

___

### setComponents

▸ **setComponents**(`components`): [`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `components` | `T`[] |  |

#### Returns

[`ActionRowBuilder`](ActionRowBuilder.md)<`T`\>

#### Defined in

[src/components/ActionRowBuilder.ts:45](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L45)

___

### toJSON

▸ **toJSON**(): `APIActionRowComponent`<`ReturnType`<`T`[``"toJSON"``]\>\>

#### Returns

`APIActionRowComponent`<`ReturnType`<`T`[``"toJSON"``]\>\>

#### Overrides

ComponentBuilderBase.toJSON

#### Defined in

[src/components/ActionRowBuilder.ts:50](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L50)
