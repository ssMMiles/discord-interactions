[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / RadioGroupBuilder

# Class: RadioGroupBuilder

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L8)

A single-choice set of 2-10 radio options. Modal-only, must be placed inside a Label component.

## Constructors

### Constructor

> **new RadioGroupBuilder**(`customId?`): `RadioGroupBuilder`

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L11)

#### Parameters

##### customId?

`string`

#### Returns

`RadioGroupBuilder`

#### Overrides

`ComponentBuilderBase<APIRadioGroupComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

***

### options

> `readonly` **options**: `APIRadioGroupOption`[] = `[]`

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L9)

## Methods

### addOptions()

> **addOptions**(...`options`): `this`

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L28)

Adds options to this radio group (2-10 total)

#### Parameters

##### options

...`APIRadioGroupOption`[]

#### Returns

`this`

***

### setCustomId()

> **setCustomId**(`customId`): `this`

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L20)

Sets the custom id for this radio group

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

### setRequired()

> **setRequired**(`required?`): `this`

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L36)

Sets whether a selection is required to submit the modal (defaults to true)

#### Parameters

##### required?

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIRadioGroupComponent`

Defined in: [packages/builders/src/components/modal/RadioGroupBuilder.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/RadioGroupBuilder.ts#L41)

#### Returns

`APIRadioGroupComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
