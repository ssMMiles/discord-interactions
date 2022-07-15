[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SelectMenuOptionBuilder

# Class: SelectMenuOptionBuilder

Represents a non-validated option within a select menu component

## Table of contents

### Constructors

- [constructor](SelectMenuOptionBuilder.md#constructor)

### Properties

- [data](SelectMenuOptionBuilder.md#data)

### Methods

- [setDefault](SelectMenuOptionBuilder.md#setdefault)
- [setDescription](SelectMenuOptionBuilder.md#setdescription)
- [setEmoji](SelectMenuOptionBuilder.md#setemoji)
- [setLabel](SelectMenuOptionBuilder.md#setlabel)
- [setValue](SelectMenuOptionBuilder.md#setvalue)
- [toJSON](SelectMenuOptionBuilder.md#tojson)

## Constructors

### constructor

• **new SelectMenuOptionBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`APISelectMenuOption`\> |

## Properties

### data

• **data**: `Partial`<`APISelectMenuOption`\> = `{}`

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:7](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/components/SelectMenuOptionBuilder.ts#L7)

## Methods

### setDefault

▸ **setDefault**(`isDefault?`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

Sets whether this option is selected by default

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isDefault` | `boolean` | `true` | Whether this option is selected by default |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

___

### setDescription

▸ **setDescription**(`description`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

Sets the description of this option.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description of this option |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

___

### setEmoji

▸ **setEmoji**(`emoji`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

Sets the emoji to display on this option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` | The emoji to display on this option |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

___

### setLabel

▸ **setLabel**(`label`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

Sets the label of this option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label to show on this option |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

___

### setValue

▸ **setValue**(`value`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

Sets the value of this option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value of this option |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

___

### toJSON

▸ **toJSON**(): `APISelectMenuOption`

#### Returns

`APISelectMenuOption`
