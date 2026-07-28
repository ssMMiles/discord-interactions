[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / MediaGalleryBuilder

# Class: MediaGalleryBuilder

Defined in: [packages/builders/src/components/v2/MediaGalleryBuilder.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/MediaGalleryBuilder.ts#L17)

Displays 1-10 images/media items in a gallery. Message-only (Components V2).

## Constructors

### Constructor

> **new MediaGalleryBuilder**(...`items`): `MediaGalleryBuilder`

Defined in: [packages/builders/src/components/v2/MediaGalleryBuilder.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/MediaGalleryBuilder.ts#L20)

#### Parameters

##### items

...(`string` \| [`MediaGalleryItemOptions`](../interfaces/MediaGalleryItemOptions.md))[]

#### Returns

`MediaGalleryBuilder`

#### Overrides

`ComponentBuilderBase<APIMediaGalleryComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

***

### items

> `readonly` **items**: `APIMediaGalleryItem`[] = `[]`

Defined in: [packages/builders/src/components/v2/MediaGalleryBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/MediaGalleryBuilder.ts#L18)

## Methods

### addItems()

> **addItems**(...`items`): `this`

Defined in: [packages/builders/src/components/v2/MediaGalleryBuilder.ts:30](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/MediaGalleryBuilder.ts#L30)

Adds items to this gallery (max 10)

#### Parameters

##### items

...(`string` \| [`MediaGalleryItemOptions`](../interfaces/MediaGalleryItemOptions.md))[]

Media urls or item options

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

> **toJSON**(): `APIMediaGalleryComponent`

Defined in: [packages/builders/src/components/v2/MediaGalleryBuilder.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/MediaGalleryBuilder.ts#L47)

#### Returns

`APIMediaGalleryComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
