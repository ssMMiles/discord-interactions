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

### setDisabled

▸ **setDisabled**(`disabled?`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` |  |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setDisabled

#### Defined in

[src/components/ButtonBuilder.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L54)

___

### setEmoji

▸ **setEmoji**(`emoji`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` |  |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setEmoji

#### Defined in

[src/components/ButtonBuilder.ts:45](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L45)

___

### setLabel

▸ **setLabel**(`label`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` |  |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setLabel

#### Defined in

[src/components/ButtonBuilder.ts:63](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L63)

___

### setStyle

▸ **setStyle**(`style`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`ButtonStyle`](../enums/ButtonStyle.md) |  |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Inherited from

ButtonBuilderBase.setStyle

#### Defined in

[src/components/ButtonBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L36)

___

### setURL

▸ **setURL**(`url`): [`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |

#### Returns

[`LinkButtonBuilder`](LinkButtonBuilder.md)

#### Defined in

[src/components/ButtonBuilder.ts:101](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L101)

___

### toJSON

▸ **toJSON**(): `APIButtonComponentWithURL`

#### Returns

`APIButtonComponentWithURL`

#### Overrides

ButtonBuilderBase.toJSON

#### Defined in

[src/components/ButtonBuilder.ts:106](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ButtonBuilder.ts#L106)
