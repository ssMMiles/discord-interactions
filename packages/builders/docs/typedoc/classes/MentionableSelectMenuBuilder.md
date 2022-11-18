[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / MentionableSelectMenuBuilder

# Class: MentionableSelectMenuBuilder

Represents a non-validated select menu component

## Hierarchy

- `SelectMenuBuilderBase`

  ↳ **`MentionableSelectMenuBuilder`**

## Table of contents

### Constructors

- [constructor](MentionableSelectMenuBuilder.md#constructor)

### Properties

- [data](MentionableSelectMenuBuilder.md#data)

### Methods

- [setCustomId](MentionableSelectMenuBuilder.md#setcustomid)
- [setDisabled](MentionableSelectMenuBuilder.md#setdisabled)
- [setMaxValues](MentionableSelectMenuBuilder.md#setmaxvalues)
- [setMinValues](MentionableSelectMenuBuilder.md#setminvalues)
- [setPlaceholder](MentionableSelectMenuBuilder.md#setplaceholder)
- [toJSON](MentionableSelectMenuBuilder.md#tojson)

## Constructors

### constructor

• **new MentionableSelectMenuBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APIMentionableSelectComponent`\> |

#### Overrides

SelectMenuBuilderBase.constructor

## Properties

### data

• `Readonly` **data**: `Partial`<`APISelectMenuComponent`\>

The API data associated with this component

#### Inherited from

SelectMenuBuilderBase.data

#### Defined in

[src/components/ComponentBuilderBase.ts:19](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/builders/src/components/ComponentBuilderBase.ts#L19)

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

Sets the custom Id for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this select menu |

#### Returns

[`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setCustomId

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

Sets whether or not this select menu is disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not this select menu is disabled |

#### Returns

[`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setDisabled

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

Sets the maximum values that must be selected in the select menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMaxValues

___

### setMinValues

▸ **setMinValues**(`minValues`): [`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

Sets the minimum values that must be selected in the select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` | The minimum values that must be selected |

#### Returns

[`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMinValues

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

Sets the placeholder for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this select menu |

#### Returns

[`MentionableSelectMenuBuilder`](MentionableSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setPlaceholder

___

### toJSON

▸ **toJSON**(): `APIMentionableSelectComponent`

#### Returns

`APIMentionableSelectComponent`

#### Overrides

SelectMenuBuilderBase.toJSON
