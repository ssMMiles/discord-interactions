[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / EmbedBuilder

# Class: EmbedBuilder

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

#### Defined in

[src/responses/EmbedBuilder.ts:37](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L37)

## Properties

### data

• `Readonly` **data**: `APIEmbed`

#### Defined in

[src/responses/EmbedBuilder.ts:35](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L35)

## Methods

### addFields

▸ **addFields**(...`fields`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fields` | `APIEmbedField`[] |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:56](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L56)

___

### setAuthor

▸ **setAuthor**(`options`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``null`` \| [`EmbedAuthorOptions`](../modules.md#embedauthoroptions) |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:92](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L92)

___

### setColor

▸ **setColor**(`color`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | ``null`` \| `number` \| [`RGBTuple`](../modules.md#rgbtuple) |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:107](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L107)

___

### setDescription

▸ **setDescription**(`description`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | ``null`` \| `string` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:122](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L122)

___

### setFields

▸ **setFields**(`fields`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `APIEmbedField`[] |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L82)

___

### setFooter

▸ **setFooter**(`options`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | ``null`` \| [`EmbedFooterOptions`](../modules.md#embedfooteroptions) |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:132](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L132)

___

### setImage

▸ **setImage**(`url`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:147](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L147)

___

### setThumbnail

▸ **setThumbnail**(`url`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:157](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L157)

___

### setTimestamp

▸ **setTimestamp**(`timestamp?`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | ``null`` \| `number` \| `Date` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:167](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L167)

___

### setTitle

▸ **setTitle**(`title`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | ``null`` \| `string` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:177](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L177)

___

### setURL

▸ **setURL**(`url`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:187](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L187)

___

### spliceFields

▸ **spliceFields**(`index`, `deleteCount`, ...`fields`): [`EmbedBuilder`](EmbedBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  |
| `deleteCount` | `number` |  |
| `...fields` | `APIEmbedField`[] |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[src/responses/EmbedBuilder.ts:72](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L72)

___

### toJSON

▸ **toJSON**(): `APIEmbed`

#### Returns

`APIEmbed`

#### Defined in

[src/responses/EmbedBuilder.ts:195](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L195)
