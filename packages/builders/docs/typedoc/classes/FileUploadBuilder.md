[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / FileUploadBuilder

# Class: FileUploadBuilder

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L8)

Lets users upload 0-10 files in a modal. Must be placed inside a Label component.

## Constructors

### Constructor

> **new FileUploadBuilder**(`customId?`): `FileUploadBuilder`

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L9)

#### Parameters

##### customId?

`string`

#### Returns

`FileUploadBuilder`

#### Overrides

`ComponentBuilderBase<APIFileUploadComponent>.constructor`

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

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L18)

Sets the custom id for this file upload

#### Parameters

##### customId

`string`

#### Returns

`this`

***

### setFileTypes()

> **setFileTypes**(...`fileTypes`): `this`

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:42](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L42)

Restricts the accepted file types

#### Parameters

##### fileTypes

...`FileUploadType`[]

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

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L34)

Sets the maximum number of files that can be uploaded (max 10)

#### Parameters

##### maxValues

`number`

#### Returns

`this`

***

### setMinValues()

> **setMinValues**(`minValues`): `this`

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L26)

Sets the minimum number of files that must be uploaded (0-10)

#### Parameters

##### minValues

`number`

#### Returns

`this`

***

### setRequired()

> **setRequired**(`required?`): `this`

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:50](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L50)

Sets whether an upload is required to submit the modal (defaults to true)

#### Parameters

##### required?

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIFileUploadComponent`

Defined in: [packages/builders/src/components/modal/FileUploadBuilder.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/FileUploadBuilder.ts#L55)

#### Returns

`APIFileUploadComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
