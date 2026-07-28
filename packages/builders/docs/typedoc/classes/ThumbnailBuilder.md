[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / ThumbnailBuilder

# Class: ThumbnailBuilder

Defined in: [packages/builders/src/components/v2/ThumbnailBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ThumbnailBuilder.ts#L8)

A small image usable as a Section accessory. Supports external urls and attachment:// references.

## Constructors

### Constructor

> **new ThumbnailBuilder**(`media?`): `ThumbnailBuilder`

Defined in: [packages/builders/src/components/v2/ThumbnailBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ThumbnailBuilder.ts#L9)

#### Parameters

##### media?

`string` \| `APIUnfurledMediaItem`

#### Returns

`ThumbnailBuilder`

#### Overrides

`ComponentBuilderBase<APIThumbnailComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setDescription()

> **setDescription**(`description`): `this`

Defined in: [packages/builders/src/components/v2/ThumbnailBuilder.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ThumbnailBuilder.ts#L28)

Sets the alt text for this thumbnail

#### Parameters

##### description

`string`

Alt text, max 1024 characters

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

### setMedia()

> **setMedia**(`media`): `this`

Defined in: [packages/builders/src/components/v2/ThumbnailBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ThumbnailBuilder.ts#L19)

Sets the image for this thumbnail

#### Parameters

##### media

`string` \| `APIUnfurledMediaItem`

A url or attachment:// reference, or an unfurled media item

#### Returns

`this`

***

### setSpoiler()

> **setSpoiler**(`spoiler?`): `this`

Defined in: [packages/builders/src/components/v2/ThumbnailBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ThumbnailBuilder.ts#L36)

Sets whether this thumbnail is blurred as a spoiler

#### Parameters

##### spoiler?

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIThumbnailComponent`

Defined in: [packages/builders/src/components/v2/ThumbnailBuilder.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ThumbnailBuilder.ts#L41)

#### Returns

`APIThumbnailComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
