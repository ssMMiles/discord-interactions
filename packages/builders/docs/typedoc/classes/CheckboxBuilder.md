[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / CheckboxBuilder

# Class: CheckboxBuilder

Defined in: [packages/builders/src/components/modal/CheckboxBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxBuilder.ts#L9)

A single checkbox for a binary choice. Modal-only, must be placed inside a Label component.
Cannot be required - use a one-option Checkbox Group for that.

## Constructors

### Constructor

> **new CheckboxBuilder**(`customId?`): `CheckboxBuilder`

Defined in: [packages/builders/src/components/modal/CheckboxBuilder.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxBuilder.ts#L10)

#### Parameters

##### customId?

`string`

#### Returns

`CheckboxBuilder`

#### Overrides

`ComponentBuilderBase<APICheckboxComponent>.constructor`

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

Defined in: [packages/builders/src/components/modal/CheckboxBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxBuilder.ts#L19)

Sets the custom id for this checkbox

#### Parameters

##### customId

`string`

#### Returns

`this`

***

### setDefault()

> **setDefault**(`checked?`): `this`

Defined in: [packages/builders/src/components/modal/CheckboxBuilder.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxBuilder.ts#L27)

Sets whether this checkbox starts checked

#### Parameters

##### checked?

`boolean` = `true`

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

### toJSON()

> **toJSON**(): `APICheckboxComponent`

Defined in: [packages/builders/src/components/modal/CheckboxBuilder.ts:32](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxBuilder.ts#L32)

#### Returns

`APICheckboxComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
