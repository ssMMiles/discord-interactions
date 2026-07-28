[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / FileBuilder

# Class: FileBuilder

Defined in: [packages/builders/src/components/v2/FileBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/FileBuilder.ts#L8)

Displays an uploaded file as an attachment. Only supports attachment:// references. Message-only (Components V2).

## Constructors

### Constructor

> **new FileBuilder**(`file?`): `FileBuilder`

Defined in: [packages/builders/src/components/v2/FileBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/FileBuilder.ts#L9)

#### Parameters

##### file?

`string`

#### Returns

`FileBuilder`

#### Overrides

`ComponentBuilderBase<APIFileComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setFile()

> **setFile**(`file`): `this`

Defined in: [packages/builders/src/components/v2/FileBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/FileBuilder.ts#L19)

Sets the file to display

#### Parameters

##### file

`string`

An attachment:// reference, e.g. "attachment://report.pdf", or a bare filename

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

### setSpoiler()

> **setSpoiler**(`spoiler?`): `this`

Defined in: [packages/builders/src/components/v2/FileBuilder.ts:29](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/FileBuilder.ts#L29)

Sets whether this file is blurred as a spoiler

#### Parameters

##### spoiler?

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIFileComponent`

Defined in: [packages/builders/src/components/v2/FileBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/FileBuilder.ts#L34)

#### Returns

`APIFileComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
