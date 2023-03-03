[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / EmbedImageData

# Interface: EmbedImageData

## Hierarchy

- `Omit`<`APIEmbedImage`, ``"proxy_url"``\>

  ↳ **`EmbedImageData`**

## Table of contents

### Properties

- [height](EmbedImageData.md#height)
- [proxyURL](EmbedImageData.md#proxyurl)
- [url](EmbedImageData.md#url)
- [width](EmbedImageData.md#width)

## Properties

### height

• `Optional` **height**: `number`

Height of image

#### Inherited from

Omit.height

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1020

___

### proxyURL

• `Optional` **proxyURL**: `string`

The proxy URL for the image

#### Defined in

[src/responses/EmbedBuilder.ts:28](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/responses/EmbedBuilder.ts#L28)

___

### url

• **url**: `string`

Source url of image (only supports http(s) and attachments)

#### Inherited from

Omit.url

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1012

___

### width

• `Optional` **width**: `number`

Width of image

#### Inherited from

Omit.width

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1024
