[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SelectMenuOptionBuilder

# Class: SelectMenuOptionBuilder

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

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:7](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L7)

## Properties

### data

• **data**: `Partial`<`APISelectMenuOption`\> = `{}`

## Methods

### setDefault

▸ **setDefault**(`isDefault?`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isDefault` | `boolean` | `true` |  |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:40](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L40)

___

### setDescription

▸ **setDescription**(`description`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` |  |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:31](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L31)

___

### setEmoji

▸ **setEmoji**(`emoji`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` |  |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:49](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L49)

___

### setLabel

▸ **setLabel**(`label`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` |  |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:13](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L13)

___

### setValue

▸ **setValue**(`value`): [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` |  |

#### Returns

[`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:22](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L22)

___

### toJSON

▸ **toJSON**(): `APISelectMenuOption`

#### Returns

`APISelectMenuOption`

#### Defined in

[src/components/SelectMenuOptionBuilder.ts:54](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/SelectMenuOptionBuilder.ts#L54)
