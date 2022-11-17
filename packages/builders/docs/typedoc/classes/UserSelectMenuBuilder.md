[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / UserSelectMenuBuilder

# Class: UserSelectMenuBuilder

Represents a non-validated select menu component

## Hierarchy

- `SelectMenuBuilderBase`

  ↳ **`UserSelectMenuBuilder`**

## Table of contents

### Constructors

- [constructor](UserSelectMenuBuilder.md#constructor)

### Properties

- [data](UserSelectMenuBuilder.md#data)

### Methods

- [setCustomId](UserSelectMenuBuilder.md#setcustomid)
- [setDisabled](UserSelectMenuBuilder.md#setdisabled)
- [setMaxValues](UserSelectMenuBuilder.md#setmaxvalues)
- [setMinValues](UserSelectMenuBuilder.md#setminvalues)
- [setPlaceholder](UserSelectMenuBuilder.md#setplaceholder)
- [toJSON](UserSelectMenuBuilder.md#tojson)

## Constructors

### constructor

• **new UserSelectMenuBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APIUserSelectComponent`\> |

#### Overrides

SelectMenuBuilderBase.constructor

## Properties

### data

• `Readonly` **data**: `Partial`<`APISelectMenuComponent`\>

The API data associated with this component

#### Inherited from

SelectMenuBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

Sets the custom Id for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this select menu |

#### Returns

[`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setCustomId

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

Sets whether or not this select menu is disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not this select menu is disabled |

#### Returns

[`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setDisabled

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

Sets the maximum values that must be selected in the select menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMaxValues

___

### setMinValues

▸ **setMinValues**(`minValues`): [`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

Sets the minimum values that must be selected in the select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` | The minimum values that must be selected |

#### Returns

[`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMinValues

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

Sets the placeholder for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this select menu |

#### Returns

[`UserSelectMenuBuilder`](UserSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setPlaceholder

___

### toJSON

▸ **toJSON**(): `APIUserSelectComponent`

#### Returns

`APIUserSelectComponent`

#### Overrides

SelectMenuBuilderBase.toJSON
