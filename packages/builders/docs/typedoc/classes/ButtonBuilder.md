[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / ButtonBuilder

# Class: ButtonBuilder

## Hierarchy

- `ButtonBuilderBase`

  ↳ **`ButtonBuilder`**

## Table of contents

### Constructors

- [constructor](ButtonBuilder.md#constructor)

### Properties

- [data](ButtonBuilder.md#data)

### Methods

- [setCustomId](ButtonBuilder.md#setcustomid)
- [setDisabled](ButtonBuilder.md#setdisabled)
- [setEmoji](ButtonBuilder.md#setemoji)
- [setLabel](ButtonBuilder.md#setlabel)
- [setStyle](ButtonBuilder.md#setstyle)
- [toJSON](ButtonBuilder.md#tojson)

## Constructors

### constructor

• **new ButtonBuilder**(`data?`, `label?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APIButtonComponent`\> \| [`ButtonStyle`](../enums/ButtonStyle.md) |
| `label?` | `string` |

#### Inherited from

ButtonBuilderBase.constructor

#### Defined in

[src/components/ButtonBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L19)

## Properties

### data

• `Readonly` **data**: `Partial`<`APIButtonComponent`\>

#### Inherited from

ButtonBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`ButtonBuilder`](ButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` |  |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Defined in

[src/components/ButtonBuilder.ts:84](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L84)

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`ButtonBuilder`](ButtonBuilder.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` |  |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setDisabled

#### Defined in

[src/components/ButtonBuilder.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L54)

___

### setEmoji

▸ **setEmoji**(`emoji`): [`ButtonBuilder`](ButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` |  |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setEmoji

#### Defined in

[src/components/ButtonBuilder.ts:45](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L45)

___

### setLabel

▸ **setLabel**(`label`): [`ButtonBuilder`](ButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` |  |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setLabel

#### Defined in

[src/components/ButtonBuilder.ts:63](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L63)

___

### setStyle

▸ **setStyle**(`style`): [`ButtonBuilder`](ButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`ButtonStyle`](../enums/ButtonStyle.md) |  |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setStyle

#### Defined in

[src/components/ButtonBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L36)

___

### toJSON

▸ **toJSON**(): `APIButtonComponentWithCustomId`

#### Returns

`APIButtonComponentWithCustomId`

#### Overrides

ButtonBuilderBase.toJSON

#### Defined in

[src/components/ButtonBuilder.ts:89](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L89)
