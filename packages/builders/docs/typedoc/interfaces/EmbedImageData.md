[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / EmbedImageData

# Interface: EmbedImageData

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L24)

## Extends

- `Omit`\<`APIEmbedImage`, `"proxy_url"`\>

## Properties

### content\_type?

> `optional` **content\_type?**: `string`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:769

The image's media type

#### See

[https://en.wikipedia.org/wiki/Media\_type](https://en.wikipedia.org/wiki/Media_type)

#### Inherited from

`Omit.content_type`

***

### description?

> `optional` **description?**: `string`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:783

Description (alt text) for the image

#### Inherited from

`Omit.description`

***

### flags?

> `optional` **flags?**: `EmbedMediaFlags`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:790

Embed media flags combined as a bitfield

#### See

 - [https://docs.discord.com/developers/resources/message#embed-object-embed-media-flags](https://docs.discord.com/developers/resources/message#embed-object-embed-media-flags)
 - [https://en.wikipedia.org/wiki/Bit\_field](https://en.wikipedia.org/wiki/Bit_field)

#### Inherited from

`Omit.flags`

***

### height?

> `optional` **height?**: `number`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:759

Height of image

#### Inherited from

`Omit.height`

***

### placeholder?

> `optional` **placeholder?**: `string`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:775

ThumbHash placeholder of the image

#### See

[https://evanw.github.io/thumbhash/](https://evanw.github.io/thumbhash/)

#### Inherited from

`Omit.placeholder`

***

### placeholder\_version?

> `optional` **placeholder\_version?**: `number`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:779

Version of the placeholder

#### Inherited from

`Omit.placeholder_version`

***

### proxyURL?

> `optional` **proxyURL?**: `string`

Defined in: [packages/builders/src/responses/EmbedBuilder.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/EmbedBuilder.ts#L28)

The proxy URL for the image

***

### url

> **url**: `string`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:751

Source url of image (only supports http(s) and attachments)

#### Inherited from

`Omit.url`

***

### width?

> `optional` **width?**: `number`

Defined in: node\_modules/discord-api-types/payloads/v10/message.d.ts:763

Width of image

#### Inherited from

`Omit.width`
