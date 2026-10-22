[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / EmbedBuilder

# Class: EmbedBuilder

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L34)

Represents a non-validated embed in a message (image/video preview, rich embed, etc.)

## Constructors

### Constructor

> **new EmbedBuilder**(`data?`, `description?`): `EmbedBuilder`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:37](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L37)

#### Parameters

##### data?

`string` \| `APIEmbed`

##### description?

`string`

#### Returns

`EmbedBuilder`

## Properties

### data

> `readonly` **data**: `APIEmbed`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:35](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L35)

## Methods

### addFields()

> **addFields**(...`fields`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:56](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L56)

Adds fields to the embed (max 25)

#### Parameters

##### fields

...`APIEmbedField`[]

The fields to add

#### Returns

`this`

***

### setAuthor()

> **setAuthor**(`options`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:92](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L92)

Sets the author of this embed

#### Parameters

##### options

[`EmbedAuthorOptions`](../type-aliases/EmbedAuthorOptions.md) \| `null`

The options for the author

#### Returns

`this`

***

### setColor()

> **setColor**(`color`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:107](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L107)

Sets the color of this embed

#### Parameters

##### color

`number` \| [`RGBTuple`](../type-aliases/RGBTuple.md) \| `null`

The color of the embed

#### Returns

`this`

***

### setDescription()

> **setDescription**(`description`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:122](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L122)

Sets the description of this embed

#### Parameters

##### description

`string` \| `null`

The description

#### Returns

`this`

***

### setFields()

> **setFields**(`fields`): `EmbedBuilder`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:82](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L82)

Sets the embed's fields (max 25).

#### Parameters

##### fields

`APIEmbedField`[]

The fields to set

#### Returns

`EmbedBuilder`

***

### setFooter()

> **setFooter**(`options`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:132](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L132)

Sets the footer of this embed

#### Parameters

##### options

[`EmbedFooterOptions`](../type-aliases/EmbedFooterOptions.md) \| `null`

The options for the footer

#### Returns

`this`

***

### setImage()

> **setImage**(`url`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:147](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L147)

Sets the image of this embed

#### Parameters

##### url

`string` \| `null`

The URL of the image

#### Returns

`this`

***

### setThumbnail()

> **setThumbnail**(`url`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:157](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L157)

Sets the thumbnail of this embed

#### Parameters

##### url

`string` \| `null`

The URL of the thumbnail

#### Returns

`this`

***

### setTimestamp()

> **setTimestamp**(`timestamp?`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:167](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L167)

Sets the timestamp of this embed

#### Parameters

##### timestamp?

`number` \| `Date` \| `null`

The timestamp or date

#### Returns

`this`

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:177](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L177)

Sets the title of this embed

#### Parameters

##### title

`string` \| `null`

The title

#### Returns

`this`

***

### setURL()

> **setURL**(`url`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:187](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L187)

Sets the URL of this embed

#### Parameters

##### url

`string` \| `null`

The URL

#### Returns

`this`

***

### spliceFields()

> **spliceFields**(`index`, `deleteCount`, ...`fields`): `this`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:72](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L72)

Removes, replaces, or inserts fields in the embed (max 25)

#### Parameters

##### index

`number`

The index to start at

##### deleteCount

`number`

The number of fields to remove

##### fields

...`APIEmbedField`[]

The replacing field objects

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIEmbed`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:195](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L195)

Transforms the embed to a plain object

#### Returns

`APIEmbed`
