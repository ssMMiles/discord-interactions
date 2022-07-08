[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / ButtonBuilder

# Class: ButtonBuilder

Represents a non-validated button component

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

## Properties

### data

• `Readonly` **data**: `Partial`<`APIButtonComponent`\>

The API data associated with this component

#### Inherited from

ButtonBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`ButtonBuilder`](ButtonBuilder.md)

Sets the custom Id for this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this button |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`ButtonBuilder`](ButtonBuilder.md)

Sets whether this button is disable or not

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not to disable this button or not |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setDisabled

___

### setEmoji

▸ **setEmoji**(`emoji`): [`ButtonBuilder`](ButtonBuilder.md)

Sets the emoji to display on this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` | The emoji to display on this button |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setEmoji

___

### setLabel

▸ **setLabel**(`label`): [`ButtonBuilder`](ButtonBuilder.md)

Sets the label for this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label to display on this button |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setLabel

___

### setStyle

▸ **setStyle**(`style`): [`ButtonBuilder`](ButtonBuilder.md)

Sets the style of this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`ButtonStyle`](../enums/ButtonStyle.md) | The style of the button |

#### Returns

[`ButtonBuilder`](ButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setStyle

___

### toJSON

▸ **toJSON**(): `APIButtonComponentWithCustomId`

#### Returns

`APIButtonComponentWithCustomId`

#### Overrides

ButtonBuilderBase.toJSON
