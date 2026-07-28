[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / ChannelSelectMenuBuilder

# Class: ChannelSelectMenuBuilder

Defined in: [packages/builders/src/components/select\_menus/ChannelSelectMenuBuilder.ts:13](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/ChannelSelectMenuBuilder.ts#L13)

Represents a non-validated select menu component

## Extends

- `SelectMenuBuilderBase`

## Constructors

### Constructor

> **new ChannelSelectMenuBuilder**(`data?`): `ChannelSelectMenuBuilder`

Defined in: [packages/builders/src/components/select\_menus/ChannelSelectMenuBuilder.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/ChannelSelectMenuBuilder.ts#L14)

#### Parameters

##### data?

`Partial`\<`APIChannelSelectComponent`\>

#### Returns

`ChannelSelectMenuBuilder`

#### Overrides

`SelectMenuBuilderBase.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`APISelectMenuComponent`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`SelectMenuBuilderBase.data`

## Methods

### setChannelTypes()

> **setChannelTypes**(...`channelTypes`): `this`

Defined in: [packages/builders/src/components/select\_menus/ChannelSelectMenuBuilder.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/ChannelSelectMenuBuilder.ts#L22)

Restricts the channel types shown in this select menu

#### Parameters

##### channelTypes

...`ChannelType`[]

The channel types to allow

#### Returns

`this`

***

### setCustomId()

> **setCustomId**(`customId`): `this`

Defined in: [packages/builders/src/components/select\_menus/SelectMenuBuilderBase.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/SelectMenuBuilderBase.ts#L51)

Sets the custom Id for this select menu

#### Parameters

##### customId

`string`

The custom id to use for this select menu

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setCustomId`

***

### setDefaultValues()

> **setDefaultValues**(...`channelIds`): `this`

Defined in: [packages/builders/src/components/select\_menus/ChannelSelectMenuBuilder.ts:31](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/ChannelSelectMenuBuilder.ts#L31)

Sets the channels selected by default

#### Parameters

##### channelIds

...`string`[]

Ids of the default channels

#### Returns

`this`

***

### setDisabled()

> **setDisabled**(`disabled?`): `this`

Defined in: [packages/builders/src/components/select\_menus/SelectMenuBuilderBase.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/SelectMenuBuilderBase.ts#L61)

Sets whether or not this select menu is disabled.
Note: disabled select menus are not allowed in modals.

#### Parameters

##### disabled?

`boolean` = `true`

Whether or not this select menu is disabled

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setDisabled`

***

### setId()

> **setId**(`id`): `this`

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L34)

Sets this component's optional 32-bit numeric identifier, unique within the message.
Discord generates sequential ids for components sent without one.

#### Parameters

##### id

`number`

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setId`

***

### setMaxValues()

> **setMaxValues**(`maxValues`): `this`

Defined in: [packages/builders/src/components/select\_menus/SelectMenuBuilderBase.ts:42](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/SelectMenuBuilderBase.ts#L42)

Sets the maximum values that must be selected in the select menu

#### Parameters

##### maxValues

`number`

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setMaxValues`

***

### setMinValues()

> **setMinValues**(`minValues`): `this`

Defined in: [packages/builders/src/components/select\_menus/SelectMenuBuilderBase.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/SelectMenuBuilderBase.ts#L33)

Sets the minimum values that must be selected in the select menu

#### Parameters

##### minValues

`number`

The minimum values that must be selected

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setMinValues`

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `this`

Defined in: [packages/builders/src/components/select\_menus/SelectMenuBuilderBase.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/SelectMenuBuilderBase.ts#L24)

Sets the placeholder for this select menu

#### Parameters

##### placeholder

`string`

The placeholder to use for this select menu

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setPlaceholder`

***

### setRequired()

> **setRequired**(`required?`): `this`

Defined in: [packages/builders/src/components/select\_menus/SelectMenuBuilderBase.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/SelectMenuBuilderBase.ts#L70)

Sets whether a selection is required to submit the modal (defaults to true).
Only used when this select menu is placed in a modal; ignored in messages.

#### Parameters

##### required?

`boolean` = `true`

#### Returns

`this`

#### Inherited from

`SelectMenuBuilderBase.setRequired`

***

### toJSON()

> **toJSON**(): `APIChannelSelectComponent`

Defined in: [packages/builders/src/components/select\_menus/ChannelSelectMenuBuilder.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/select_menus/ChannelSelectMenuBuilder.ts#L38)

#### Returns

`APIChannelSelectComponent`

#### Overrides

`SelectMenuBuilderBase.toJSON`
