[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SelectMenuBuilder

# Class: SelectMenuBuilder

Represents a non-validated select menu component

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

## Properties

### data

• `Readonly` **data**: `Partial`<`APISelectMenuComponent`\>

The API data associated with this component

#### Inherited from

ComponentBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/components/ComponentBuilderBase.ts#L19)

___

### options

• `Readonly` **options**: [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)[]

The options within this select menu

#### Defined in

[src/components/SelectMenuBuilder.ts:12](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/components/SelectMenuBuilder.ts#L12)

## Methods

### addOptions

▸ **addOptions**(...`options`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Adds options to this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...options` | [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md)[] | The options to add to this select menu |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### setCustomId

▸ **setCustomId**(`customId`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Sets the custom Id for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this select menu |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Sets whether or not this select menu is disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not this select menu is disabled |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Sets the maximum values that must be selected in the select menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### setMinValues

▸ **setMinValues**(`minValues`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Sets the minimum values that must be selected in the select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` | The minimum values that must be selected |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### setOptions

▸ **setOptions**(`options`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Sets the options on this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | (`APISelectMenuOption` \| [`SelectMenuOptionBuilder`](SelectMenuOptionBuilder.md))[] | The options to set on this select menu |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`SelectMenuBuilder`](SelectMenuBuilder.md)

Sets the placeholder for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this select menu |

#### Returns

[`SelectMenuBuilder`](SelectMenuBuilder.md)

___

### toJSON

▸ **toJSON**(): `APISelectMenuComponent`

#### Returns

`APISelectMenuComponent`

#### Overrides

ComponentBuilderBase.toJSON
