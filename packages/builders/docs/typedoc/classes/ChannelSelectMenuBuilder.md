[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / ChannelSelectMenuBuilder

# Class: ChannelSelectMenuBuilder

Represents a non-validated select menu component

## Hierarchy

- `SelectMenuBuilderBase`

  ↳ **`ChannelSelectMenuBuilder`**

## Table of contents

### Constructors

- [constructor](ChannelSelectMenuBuilder.md#constructor)

### Properties

- [data](ChannelSelectMenuBuilder.md#data)

### Methods

- [setCustomId](ChannelSelectMenuBuilder.md#setcustomid)
- [setDisabled](ChannelSelectMenuBuilder.md#setdisabled)
- [setMaxValues](ChannelSelectMenuBuilder.md#setmaxvalues)
- [setMinValues](ChannelSelectMenuBuilder.md#setminvalues)
- [setPlaceholder](ChannelSelectMenuBuilder.md#setplaceholder)
- [toJSON](ChannelSelectMenuBuilder.md#tojson)

## Constructors

### constructor

• **new ChannelSelectMenuBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APIChannelSelectComponent`\> |

#### Overrides

SelectMenuBuilderBase.constructor

## Properties

### data

• `Readonly` **data**: `Partial`<`APISelectMenuComponent`\>

The API data associated with this component

#### Inherited from

SelectMenuBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

Sets the custom Id for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this select menu |

#### Returns

[`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setCustomId

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

Sets whether or not this select menu is disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not this select menu is disabled |

#### Returns

[`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setDisabled

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

Sets the maximum values that must be selected in the select menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMaxValues

___

### setMinValues

▸ **setMinValues**(`minValues`): [`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

Sets the minimum values that must be selected in the select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` | The minimum values that must be selected |

#### Returns

[`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMinValues

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

Sets the placeholder for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this select menu |

#### Returns

[`ChannelSelectMenuBuilder`](ChannelSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setPlaceholder

___

### toJSON

▸ **toJSON**(): `APIChannelSelectComponent`

#### Returns

`APIChannelSelectComponent`

#### Overrides

SelectMenuBuilderBase.toJSON
