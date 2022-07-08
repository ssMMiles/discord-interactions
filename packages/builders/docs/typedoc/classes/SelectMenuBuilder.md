[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SelectMenuBuilder

# Class: SelectMenuBuilder

## Hierarchy

- `ComponentBuilderBase`<`APISelectMenuComponent`\>

  ↳ **`SelectMenuBuilder`**

## Table of contents

### Constructors

- [constructor](SelectMenuBuilder.md#constructor)

### Properties

- [data](SelectMenuBuilder.md#data)
- [options](SelectMenuBuilder.md#options)

### Methods

- [addOptions](SelectMenuBuilder.md#addoptions)
- [setCustomId](SelectMenuBuilder.md#setcustomid)
- [setDisabled](SelectMenuBuilder.md#setdisabled)
- [setMaxValues](SelectMenuBuilder.md#setmaxvalues)
- [setMinValues](SelectMenuBuilder.md#setminvalues)
- [setOptions](SelectMenuBuilder.md#setoptions)
- [setPlaceholder](SelectMenuBuilder.md#setplaceholder)
- [toJSON](SelectMenuBuilder.md#tojson)

## Constructors

### constructor

• **new SelectMenuBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APISelectMenuComponent`\> |

#### Overrides

ComponentBuilderBase&lt;APISelectMenuComponent\&gt;.constructor

#### Defined in

[src/components/SelectMenuBuilder.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L14)

## Properties

### data

• `Readonly` **data**: `Partial`<`APISelectMenuComponent`\>

#### Inherited from

ComponentBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/ComponentBuilderBase.ts#L19)

___

### options

• `Readonly` **options**: [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)[]

#### Defined in

[src/components/SelectMenuBuilder.ts:12](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L12)

## Methods

### addOptions

▸ **addOptions**(...`options`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...options` | [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)[] |  |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:71](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L71)

___

### setCustomId

▸ **setCustomId**(`customId`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` |  |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:52](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L52)

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` |  |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:61](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L61)

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:43](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L43)

___

### setMinValues

▸ **setMinValues**(`minValues`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` |  |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L34)

___

### setOptions

▸ **setOptions**(`options`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | (`APISelectMenuOption` \| [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md))[] |  |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:83](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L83)

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` |  |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

#### Defined in

[src/components/SelectMenuBuilder.ts:25](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L25)

___

### toJSON

▸ **toJSON**(): `APISelectMenuComponent`

#### Returns

`APISelectMenuComponent`

#### Overrides

ComponentBuilderBase.toJSON

#### Defined in

[src/components/SelectMenuBuilder.ts:94](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/components/SelectMenuBuilder.ts#L94)
