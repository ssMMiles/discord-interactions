[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / TextInputBuilder

# Class: TextInputBuilder

Represents a non-validated text input component

## Hierarchy

- `ComponentBuilderBase`<`APITextInputComponent`\>

  ↳ **`TextInputBuilder`**

## Table of contents

### Constructors

- [constructor](TextInputBuilder.md#constructor)

### Properties

- [data](TextInputBuilder.md#data)

### Methods

- [setCustomId](TextInputBuilder.md#setcustomid)
- [setLabel](TextInputBuilder.md#setlabel)
- [setMaxLength](TextInputBuilder.md#setmaxlength)
- [setMinLength](TextInputBuilder.md#setminlength)
- [setPlaceholder](TextInputBuilder.md#setplaceholder)
- [setRequired](TextInputBuilder.md#setrequired)
- [setStyle](TextInputBuilder.md#setstyle)
- [setValue](TextInputBuilder.md#setvalue)
- [toJSON](TextInputBuilder.md#tojson)

## Constructors

### constructor

• **new TextInputBuilder**(`id`, `label`, `style`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `label` | `string` |
| `style` | [`TextInputStyle`](../enums/TextInputStyle.md) |

#### Overrides

ComponentBuilderBase&lt;APITextInputComponent\&gt;.constructor

## Properties

### data

• `Readonly` **data**: `Partial`<`APITextInputComponent`\>

The API data associated with this component

#### Inherited from

ComponentBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`TextInputBuilder`](TextInputBuilder.md)

Sets the custom Id for this text input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this text input |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setLabel

▸ **setLabel**(`label`): [`TextInputBuilder`](TextInputBuilder.md)

Sets the label for this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label to display on this button |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setMaxLength

▸ **setMaxLength**(`maxLength`): [`TextInputBuilder`](TextInputBuilder.md)

Sets the maximum values that must be selected in the text input

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLength` | `number` |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setMinLength

▸ **setMinLength**(`minLength`): [`TextInputBuilder`](TextInputBuilder.md)

Sets the minimum values that must be selected in the text input

#### Parameters

| Name | Type |
| :------ | :------ |
| `minLength` | `number` |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`TextInputBuilder`](TextInputBuilder.md)

Sets the placeholder for this text input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this text input |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setRequired

▸ **setRequired**(`required?`): [`TextInputBuilder`](TextInputBuilder.md)

Sets whether or not this text input is required

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `required` | `boolean` | `true` |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setStyle

▸ **setStyle**(`style`): [`TextInputBuilder`](TextInputBuilder.md)

Sets the style of this button

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`TextInputStyle`](../enums/TextInputStyle.md) | The style of the button |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### setValue

▸ **setValue**(`value`): [`TextInputBuilder`](TextInputBuilder.md)

Sets a prefilled value for the text input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Text to fill with |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

___

### toJSON

▸ **toJSON**(): `APITextInputComponent`

#### Returns

`APITextInputComponent`

#### Overrides

ComponentBuilderBase.toJSON
