[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / TextInputBuilder

# Class: TextInputBuilder

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

#### Defined in

[src/components/TextInputBuilder.ts:13](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L13)

## Properties

### data

• `Readonly` **data**: `Partial`<`APITextInputComponent`\>

#### Inherited from

ComponentBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` |  |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:81](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L81)

___

### setLabel

▸ **setLabel**(`label`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` |  |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:45](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L45)

___

### setMaxLength

▸ **setMaxLength**(`maxLength`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLength` | `number` |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:72](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L72)

___

### setMinLength

▸ **setMinLength**(`minLength`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minLength` | `number` |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:63](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L63)

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` |  |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:27](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L27)

___

### setRequired

▸ **setRequired**(`required?`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `required` | `boolean` | `true` |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:90](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L90)

___

### setStyle

▸ **setStyle**(`style`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`TextInputStyle`](../enums/TextInputStyle.md) |  |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:54](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L54)

___

### setValue

▸ **setValue**(`value`): [`TextInputBuilder`](TextInputBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` |  |

#### Returns

[`TextInputBuilder`](TextInputBuilder.md)

#### Defined in

[src/components/TextInputBuilder.ts:36](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L36)

___

### toJSON

▸ **toJSON**(): `APITextInputComponent`

#### Returns

`APITextInputComponent`

#### Overrides

ComponentBuilderBase.toJSON

#### Defined in

[src/components/TextInputBuilder.ts:95](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/TextInputBuilder.ts#L95)
