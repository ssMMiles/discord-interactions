[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / TextInputBuilder

# Class: TextInputBuilder

Defined in: [packages/builders/src/components/TextInputBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L9)

Represents a non-validated text input component

## Constructors

### Constructor

> **new TextInputBuilder**(`id`, `label?`, `style?`): `TextInputBuilder`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L10)

#### Parameters

##### id

`string`

##### label?

`string`

##### style?

[`TextInputStyle`](../enumerations/TextInputStyle.md) = `TextInputStyle.Short`

#### Returns

`TextInputBuilder`

#### Overrides

`ComponentBuilderBase<APITextInputComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setCustomId()

> **setCustomId**(`customId`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:79](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L79)

Sets the custom Id for this text input

#### Parameters

##### customId

`string`

The custom id to use for this text input

#### Returns

`this`

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

`ComponentBuilderBase.setId`

***

### ~~setLabel()~~

> **setLabel**(`label`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L43)

Sets the label for this text input

#### Parameters

##### label

`string`

The label to display above this text input

#### Returns

`this`

#### Deprecated

Wrap the text input in a Label component (LabelBuilder) instead.

***

### setMaxLength()

> **setMaxLength**(`maxLength`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L70)

Sets the maximum values that must be selected in the text input

#### Parameters

##### maxLength

`number`

#### Returns

`this`

***

### setMinLength()

> **setMinLength**(`minLength`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L61)

Sets the minimum values that must be selected in the text input

#### Parameters

##### minLength

`number`

#### Returns

`this`

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L24)

Sets the placeholder for this text input

#### Parameters

##### placeholder

`string`

The placeholder to use for this text input

#### Returns

`this`

***

### setRequired()

> **setRequired**(`required?`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:88](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L88)

Sets whether or not this text input is required

#### Parameters

##### required?

`boolean` = `true`

#### Returns

`this`

***

### setStyle()

> **setStyle**(`style`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L52)

Sets the style of this button

#### Parameters

##### style

[`TextInputStyle`](../enumerations/TextInputStyle.md)

The style of the button

#### Returns

`this`

***

### setValue()

> **setValue**(`value`): `this`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L33)

Sets a prefilled value for the text input

#### Parameters

##### value

`string`

Text to fill with

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APITextInputComponent`

Defined in: [packages/builders/src/components/TextInputBuilder.ts:93](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/TextInputBuilder.ts#L93)

#### Returns

`APITextInputComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
