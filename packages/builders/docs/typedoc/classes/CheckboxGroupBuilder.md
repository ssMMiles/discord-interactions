[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / CheckboxGroupBuilder

# Class: CheckboxGroupBuilder

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L8)

A multi-select group of 1-10 checkboxes. Modal-only, must be placed inside a Label component.

## Constructors

### Constructor

> **new CheckboxGroupBuilder**(`customId?`): `CheckboxGroupBuilder`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L11)

#### Parameters

##### customId?

`string`

#### Returns

`CheckboxGroupBuilder`

#### Overrides

`ComponentBuilderBase<APICheckboxGroupComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

***

### options

> `readonly` **options**: `APICheckboxGroupOption`[] = `[]`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L9)

## Methods

### addOptions()

> **addOptions**(...`options`): `this`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L28)

Adds options to this checkbox group (1-10 total)

#### Parameters

##### options

...`APICheckboxGroupOption`[]

#### Returns

`this`

***

### setCustomId()

> **setCustomId**(`customId`): `this`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L20)

Sets the custom id for this checkbox group

#### Parameters

##### customId

`string`

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

### setMaxValues()

> **setMaxValues**(`maxValues`): `this`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L44)

Sets the maximum number of options that can be checked (defaults to the option count)

#### Parameters

##### maxValues

`number`

#### Returns

`this`

***

### setMinValues()

> **setMinValues**(`minValues`): `this`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L36)

Sets the minimum number of options that must be checked (0-10)

#### Parameters

##### minValues

`number`

#### Returns

`this`

***

### setRequired()

> **setRequired**(`required?`): `this`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L52)

Sets whether at least one selection is required to submit the modal (defaults to true)

#### Parameters

##### required?

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APICheckboxGroupComponent`

Defined in: [packages/builders/src/components/modal/CheckboxGroupBuilder.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/CheckboxGroupBuilder.ts#L57)

#### Returns

`APICheckboxGroupComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
