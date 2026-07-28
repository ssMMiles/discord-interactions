[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / LinkButtonBuilder

# Class: LinkButtonBuilder

Defined in: [packages/builders/src/components/ButtonBuilder.ts:91](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L91)

## Extends

- `ButtonBuilderBase`

## Constructors

### Constructor

> **new LinkButtonBuilder**(`data?`, `label?`): `LinkButtonBuilder`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L14)

#### Parameters

##### data?

[`ButtonStyle`](../enumerations/ButtonStyle.md) \| `Partial`\<`APIButtonComponent`\>

##### label?

`string`

#### Returns

`LinkButtonBuilder`

#### Inherited from

`ButtonBuilderBase.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`APIButtonComponent`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ButtonBuilderBase.data`

## Methods

### setDisabled()

> **setDisabled**(`disabled?`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L49)

Sets whether this button is disable or not

#### Parameters

##### disabled?

`boolean` = `true`

Whether or not to disable this button or not

#### Returns

`this`

#### Inherited from

`ButtonBuilderBase.setDisabled`

***

### setEmoji()

> **setEmoji**(`emoji`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L40)

Sets the emoji to display on this button

#### Parameters

##### emoji

`APIMessageComponentEmoji`

The emoji to display on this button

#### Returns

`this`

#### Inherited from

`ButtonBuilderBase.setEmoji`

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

`ButtonBuilderBase.setId`

***

### setLabel()

> **setLabel**(`label`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L58)

Sets the label for this button

#### Parameters

##### label

`string`

The label to display on this button

#### Returns

`this`

#### Inherited from

`ButtonBuilderBase.setLabel`

***

### setStyle()

> **setStyle**(`style`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:31](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L31)

Sets the style of this button

#### Parameters

##### style

[`ButtonStyle`](../enumerations/ButtonStyle.md)

The style of the button

#### Returns

`this`

#### Inherited from

`ButtonBuilderBase.setStyle`

***

### setURL()

> **setURL**(`url`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:96](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L96)

Sets the URL for this button

#### Parameters

##### url

`string`

The URL to open when this button is clicked

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIButtonComponentWithURL`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:101](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L101)

#### Returns

`APIButtonComponentWithURL`

#### Overrides

`ButtonBuilderBase.toJSON`
