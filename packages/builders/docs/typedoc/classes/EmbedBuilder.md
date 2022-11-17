[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / EmbedBuilder

# Class: EmbedBuilder

Represents a non-validated embed in a message (image/video preview, rich embed, etc.)

## Table of contents

### Constructors

- [constructor](EmbedBuilder.md#constructor)

### Properties

- [data](EmbedBuilder.md#data)

### Methods

- [addFields](EmbedBuilder.md#addfields)
- [setAuthor](EmbedBuilder.md#setauthor)
- [setColor](EmbedBuilder.md#setcolor)
- [setDescription](EmbedBuilder.md#setdescription)
- [setFields](EmbedBuilder.md#setfields)
- [setFooter](EmbedBuilder.md#setfooter)
- [setImage](EmbedBuilder.md#setimage)
- [setThumbnail](EmbedBuilder.md#setthumbnail)
- [setTimestamp](EmbedBuilder.md#settimestamp)
- [setTitle](EmbedBuilder.md#settitle)
- [setURL](EmbedBuilder.md#seturl)
- [spliceFields](EmbedBuilder.md#splicefields)
- [toJSON](EmbedBuilder.md#tojson)

## Constructors

### constructor

• **new EmbedBuilder**(`data?`, `description?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `APIEmbed` |
| `description?` | `string` |

## Properties

### data

• `Readonly` **data**: `APIEmbed`

#### Defined in

[src/responses/EmbedBuilder.ts:35](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/responses/EmbedBuilder.ts#L35)

## Methods

### addFields

▸ **addFields**(...`fields`): [`EmbedBuilder`](EmbedBuilder.md)

Adds fields to the embed (max 25)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fields` | `APIEmbedField`[] | The fields to add |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setAuthor

▸ **setAuthor**(`options`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the author of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``null`` \| [`EmbedAuthorOptions`](../modules.md#embedauthoroptions) | The options for the author |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setColor

▸ **setColor**(`color`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the color of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | ``null`` \| `number` \| [`RGBTuple`](../modules.md#rgbtuple) | The color of the embed |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setDescription

▸ **setDescription**(`description`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the description of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | ``null`` \| `string` | The description |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setFields

▸ **setFields**(`fields`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the embed's fields (max 25).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `APIEmbedField`[] | The fields to set |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setFooter

▸ **setFooter**(`options`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the footer of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``null`` \| [`EmbedFooterOptions`](../modules.md#embedfooteroptions) | The options for the footer |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setImage

▸ **setImage**(`url`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the image of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` | The URL of the image |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setThumbnail

▸ **setThumbnail**(`url`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the thumbnail of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` | The URL of the thumbnail |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setTimestamp

▸ **setTimestamp**(`timestamp?`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the timestamp of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | ``null`` \| `number` \| `Date` | The timestamp or date |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setTitle

▸ **setTitle**(`title`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the title of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | ``null`` \| `string` | The title |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### setURL

▸ **setURL**(`url`): [`EmbedBuilder`](EmbedBuilder.md)

Sets the URL of this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` | The URL |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### spliceFields

▸ **spliceFields**(`index`, `deleteCount`, ...`fields`): [`EmbedBuilder`](EmbedBuilder.md)

Removes, replaces, or inserts fields in the embed (max 25)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to start at |
| `deleteCount` | `number` | The number of fields to remove |
| `...fields` | `APIEmbedField`[] | The replacing field objects |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

___

### toJSON

▸ **toJSON**(): `APIEmbed`

Transforms the embed to a plain object

#### Returns

`APIEmbed`
