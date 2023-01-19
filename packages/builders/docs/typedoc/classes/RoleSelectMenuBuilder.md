[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / RoleSelectMenuBuilder

# Class: RoleSelectMenuBuilder

Represents a non-validated select menu component

## Hierarchy

- `SelectMenuBuilderBase`

  ↳ **`RoleSelectMenuBuilder`**

## Table of contents

### Constructors

- [constructor](RoleSelectMenuBuilder.md#constructor)

### Properties

- [data](RoleSelectMenuBuilder.md#data)

### Methods

- [setCustomId](RoleSelectMenuBuilder.md#setcustomid)
- [setDisabled](RoleSelectMenuBuilder.md#setdisabled)
- [setMaxValues](RoleSelectMenuBuilder.md#setmaxvalues)
- [setMinValues](RoleSelectMenuBuilder.md#setminvalues)
- [setPlaceholder](RoleSelectMenuBuilder.md#setplaceholder)
- [toJSON](RoleSelectMenuBuilder.md#tojson)

## Constructors

### constructor

• **new RoleSelectMenuBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`APIRoleSelectComponent`\> |

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

## Methods

### setCustomId

▸ **setCustomId**(`customId`): [`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

Sets the custom Id for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customId` | `string` | The custom id to use for this select menu |

#### Returns

[`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setCustomId

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

Sets whether or not this select menu is disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether or not this select menu is disabled |

#### Returns

[`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setDisabled

___

### setMaxValues

▸ **setMaxValues**(`maxValues`): [`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

Sets the maximum values that must be selected in the select menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValues` | `number` |

#### Returns

[`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMaxValues

___

### setMinValues

▸ **setMinValues**(`minValues`): [`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

Sets the minimum values that must be selected in the select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValues` | `number` | The minimum values that must be selected |

#### Returns

[`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setMinValues

___

### setPlaceholder

▸ **setPlaceholder**(`placeholder`): [`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

Sets the placeholder for this select menu

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder to use for this select menu |

#### Returns

[`RoleSelectMenuBuilder`](RoleSelectMenuBuilder.md)

#### Inherited from

SelectMenuBuilderBase.setPlaceholder

___

### toJSON

▸ **toJSON**(): `APIRoleSelectComponent`

#### Returns

`APIRoleSelectComponent`

#### Overrides

SelectMenuBuilderBase.toJSON
