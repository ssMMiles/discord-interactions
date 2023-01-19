[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / StringSelectMenuBuilder

# Class: StringSelectMenuBuilder

Represents a non-validated select menu component

## Hierarchy

- `SelectMenuBuilderBase`

  ↳ **`StringSelectMenuBuilder`**

## Table of contents

### Constructors

- [constructor](StringSelectMenuBuilder.md#constructor)

### Properties

- [data](StringSelectMenuBuilder.md#data)
- [options](StringSelectMenuBuilder.md#options)

### Methods

- [addOptions](StringSelectMenuBuilder.md#addoptions)
- [setCustomId](StringSelectMenuBuilder.md#setcustomid)
- [setDisabled](StringSelectMenuBuilder.md#setdisabled)
- [setMaxValues](StringSelectMenuBuilder.md#setmaxvalues)
- [setMinValues](StringSelectMenuBuilder.md#setminvalues)
- [setOptions](StringSelectMenuBuilder.md#setoptions)
- [setPlaceholder](StringSelectMenuBuilder.md#setplaceholder)
- [toJSON](StringSelectMenuBuilder.md#tojson)

## Constructors

### constructor

• **new StringSelectMenuBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APIStringSelectComponent`\> |

#### Overrides

SelectMenuBuilderBase.constructor

## Properties

### data

• `Readonly` **data**: `Partial`<`APISelectMenuComponent`\>

The API data associated with this component

#### Inherited from

SelectMenuBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/builders/src/components/ComponentBuilderBase.ts#L19)

___

### options

• `Readonly` **options**: `SelectMenuOptionBuilder`[]

The options within this select menu

#### Defined in

[src/components/select_menus/StringSelectMenuBuilder.ts:12](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/builders/src/components/select_menus/StringSelectMenuBuilder.ts#L12)

## Methods

### addOptions

▸ **addOptions**(...`options`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Adds options to this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...options` | `SelectMenuOptionBuilder`[] | The options to add to this select menu |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

___

### setCustomId

▸ **setCustomId**(`customId`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Sets the custom Id for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this select menu |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setCustomId

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Sets whether or not this select menu is disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not this select menu is disabled |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setDisabled

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Sets the maximum values that must be selected in the select menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMaxValues

___

### setMinValues

▸ **setMinValues**(`minValues`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Sets the minimum values that must be selected in the select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` | The minimum values that must be selected |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMinValues

___

### setOptions

▸ **setOptions**(`options`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Sets the options on this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | (`APISelectMenuOption` \| `SelectMenuOptionBuilder`)[] | The options to set on this select menu |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

Sets the placeholder for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this select menu |

#### Returns

[`StringSelectMenuBuilder`](StringSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setPlaceholder

___

### toJSON

▸ **toJSON**(): `APIStringSelectComponent`

#### Returns

`APIStringSelectComponent`

#### Overrides

SelectMenuBuilderBase.toJSON
