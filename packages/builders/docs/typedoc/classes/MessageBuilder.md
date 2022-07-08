[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / MessageBuilder

# Class: MessageBuilder

## Table of contents

### Constructors

- [constructor](MessageBuilder.md#constructor)

### Properties

- [data](MessageBuilder.md#data)
- [files](MessageBuilder.md#files)

### Methods

- [addAttachments](MessageBuilder.md#addattachments)
- [addComponents](MessageBuilder.md#addcomponents)
- [addEmbeds](MessageBuilder.md#addembeds)
- [setAllowedMentions](MessageBuilder.md#setallowedmentions)
- [setAttachments](MessageBuilder.md#setattachments)
- [setComponents](MessageBuilder.md#setcomponents)
- [setContent](MessageBuilder.md#setcontent)
- [setEmbeds](MessageBuilder.md#setembeds)
- [setEphemeral](MessageBuilder.md#setephemeral)
- [setTts](MessageBuilder.md#settts)
- [suppressEmbeds](MessageBuilder.md#suppressembeds)
- [toInteractionJSON](MessageBuilder.md#tointeractionjson)
- [toInteractionResponse](MessageBuilder.md#tointeractionresponse)
- [toJSON](MessageBuilder.md#tojson)
- [toWebhook](MessageBuilder.md#towebhook)

## Constructors

### constructor

• **new MessageBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `string` \| `APIInteractionResponseCallbackData` \| [`EmbedBuilder`](EmbedBuilder.md) |

#### Defined in

[src/responses/MessageBuilder.ts:28](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L28)

## Properties

### data

• **data**: `APIInteractionResponseCallbackData` = `{}`

#### Defined in

[src/responses/MessageBuilder.ts:25](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L25)

___

### files

• `Optional` **files**: [`AttachedFile`](../interfaces/AttachedFile.md)[]

#### Defined in

[src/responses/MessageBuilder.ts:26](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L26)

## Methods

### addAttachments

▸ **addAttachments**(...`files`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...files` | [`AttachedFile`](../interfaces/AttachedFile.md)[] |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:153](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L153)

___

### addComponents

▸ **addComponents**(...`components`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | [`ActionRowBuilder`](ActionRowBuilder.md)<[`MessageActionRowComponentBuilders`](../modules.md#messageactionrowcomponentbuilders)\>[] |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:129](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L129)

___

### addEmbeds

▸ **addEmbeds**(...`embeds`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...embeds` | [`EmbedBuilder`](EmbedBuilder.md)[] |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:103](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L103)

___

### setAllowedMentions

▸ **setAllowedMentions**(`allowedMentions`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedMentions` | `APIAllowedMentions` |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:62](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L62)

___

### setAttachments

▸ **setAttachments**(...`files`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...files` | [`AttachedFile`](../interfaces/AttachedFile.md)[] |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:179](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L179)

___

### setComponents

▸ **setComponents**(`components?`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `components` | `APIActionRowComponent`<`APIMessageActionRowComponent`\>[] | `[]` |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:142](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L142)

___

### setContent

▸ **setContent**(`content`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:40](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L40)

___

### setEmbeds

▸ **setEmbeds**(...`embeds`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...embeds` | [`EmbedBuilder`](EmbedBuilder.md)[] |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:118](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L118)

___

### setEphemeral

▸ **setEphemeral**(`value`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:94](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L94)

___

### setTts

▸ **setTts**(`tts`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tts` | `boolean` |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:51](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L51)

___

### suppressEmbeds

▸ **suppressEmbeds**(`value`): [`MessageBuilder`](MessageBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

#### Defined in

[src/responses/MessageBuilder.ts:85](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L85)

___

### toInteractionJSON

▸ **toInteractionJSON**<`T`\>(`responseType`): [`ResponseMap`](../modules.md#responsemap)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ChannelMessageWithSource` \| `UpdateMessage` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `responseType` | `T` |  |

#### Returns

[`ResponseMap`](../modules.md#responsemap)[`T`]

#### Defined in

[src/responses/MessageBuilder.ts:214](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L214)

___

### toInteractionResponse

▸ **toInteractionResponse**<`T`\>(`responseType`): `FormData` \| [`ResponseMap`](../modules.md#responsemap)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ChannelMessageWithSource` \| `UpdateMessage` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `responseType` | `T` |  |

#### Returns

`FormData` \| [`ResponseMap`](../modules.md#responsemap)[`T`]

#### Defined in

[src/responses/MessageBuilder.ts:228](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L228)

___

### toJSON

▸ **toJSON**(): `APIInteractionResponseCallbackData`

#### Returns

`APIInteractionResponseCallbackData`

#### Defined in

[src/responses/MessageBuilder.ts:239](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L239)

___

### toWebhook

▸ **toWebhook**(`username?`, `avatar_url?`): `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`<{ `allowed_mentions?`: `APIAllowedMentions` ; `attachments?`: `Pick`<`APIAttachment`, ``"description"`` \| ``"id"``\> & `Partial`<`Pick`<`APIAttachment`, ``"filename"``\>\>[] ; `avatar_url?`: `string` ; `components?`: `APIActionRowComponent`<`APIMessageActionRowComponent`\>[] ; `content?`: `string` ; `embeds?`: `APIEmbed`[] ; `flags?`: `MessageFlags` ; `thread_name?`: `string` ; `tts?`: `boolean` ; `username?`: `string`  }\> \| `FormData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username?` | `string` |
| `avatar_url?` | `string` |

#### Returns

`AddUndefinedToPossiblyUndefinedPropertiesOfInterface`<{ `allowed_mentions?`: `APIAllowedMentions` ; `attachments?`: `Pick`<`APIAttachment`, ``"description"`` \| ``"id"``\> & `Partial`<`Pick`<`APIAttachment`, ``"filename"``\>\>[] ; `avatar_url?`: `string` ; `components?`: `APIActionRowComponent`<`APIMessageActionRowComponent`\>[] ; `content?`: `string` ; `embeds?`: `APIEmbed`[] ; `flags?`: `MessageFlags` ; `thread_name?`: `string` ; `tts?`: `boolean` ; `username?`: `string`  }\> \| `FormData`

#### Defined in

[src/responses/MessageBuilder.ts:243](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L243)
