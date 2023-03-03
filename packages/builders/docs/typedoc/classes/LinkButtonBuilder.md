[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / LinkButtonBuilder

# Class: LinkButtonBuilder

## Hierarchy

- `ButtonBuilderBase`

  ↳ **`LinkButtonBuilder`**

## Table of contents

### Constructors

- [constructor](LinkButtonBuilder.md#constructor)

### Properties

- [data](LinkButtonBuilder.md#data)

### Methods

- [setDisabled](LinkButtonBuilder.md#setdisabled)
- [setEmoji](LinkButtonBuilder.md#setemoji)
- [setLabel](LinkButtonBuilder.md#setlabel)
- [setStyle](LinkButtonBuilder.md#setstyle)
- [setURL](LinkButtonBuilder.md#seturl)
- [toJSON](LinkButtonBuilder.md#tojson)

## Constructors

### constructor

• **new LinkButtonBuilder**(`data?`, `label?`)

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

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setDisabled

▸ **setDisabled**(`disabled?`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

Sets whether this button is disable or not

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not to disable this button or not |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setDisabled

___

### setEmoji

▸ **setEmoji**(`emoji`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

Sets the emoji to display on this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` | The emoji to display on this button |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setEmoji

___

### setLabel

▸ **setLabel**(`label`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

Sets the label for this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label to display on this button |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setLabel

___

### setStyle

▸ **setStyle**(`style`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

Sets the style of this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`ButtonStyle`](../enums/ButtonStyle.md) | The style of the button |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setStyle

___

### setURL

▸ **setURL**(`url`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

Sets the URL for this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to open when this button is clicked |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

___

### toJSON

▸ **toJSON**(): `APIButtonComponentWithURL`

#### Returns

`APIButtonComponentWithURL`

#### Overrides

ButtonBuilderBase.toJSON
