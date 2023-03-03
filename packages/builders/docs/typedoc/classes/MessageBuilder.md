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

## Properties

### data

• **data**: `APIInteractionResponseCallbackData` = `{}`

#### Defined in

[src/responses/MessageBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/responses/MessageBuilder.ts#L24)

___

### files

• `Optional` **files**: [`AttachedFile`](../interfaces/AttachedFile.md)[]

#### Defined in

[src/responses/MessageBuilder.ts:25](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/responses/MessageBuilder.ts#L25)

## Methods

### addAttachments

▸ **addAttachments**(...`files`): [`MessageBuilder`](MessageBuilder.md)

Add one or more files to this message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...files` | [`AttachedFile`](../interfaces/AttachedFile.md)[] | Files to attach to this message. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### addComponents

▸ **addComponents**(...`components`): [`MessageBuilder`](MessageBuilder.md)

Add one or more Action Rows to the message. Maximum of 5.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | [`ActionRowBuilder`](ActionRowBuilder.md)<[`MessageActionRowComponentBuilders`](../modules.md#messageactionrowcomponentbuilders)\>[] | Action Rows to add to this message. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### addEmbeds

▸ **addEmbeds**(...`embeds`): [`MessageBuilder`](MessageBuilder.md)

Add one or more embeds to this message. Maximum of 10.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...embeds` | [`EmbedBuilder`](EmbedBuilder.md)[] | Embeds to add to this message. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setAllowedMentions

▸ **setAllowedMentions**(`allowedMentions`): [`MessageBuilder`](MessageBuilder.md)

Set which mentions will be allowed in this message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedMentions` | `APIAllowedMentions` | Allowed mentions for this message. https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure - TODO: Builder for this |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setAttachments

▸ **setAttachments**(...`files`): [`MessageBuilder`](MessageBuilder.md)

Set an array of files to be sent with this message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...files` | [`AttachedFile`](../interfaces/AttachedFile.md)[] | Array of files to be sent. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setComponents

▸ **setComponents**(`components?`): [`MessageBuilder`](MessageBuilder.md)

Set an array of Action Rows to be sent with this message.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `components` | `APIActionRowComponent`<`APIMessageActionRowComponent`\>[] | `[]` | Array of Action Rows to be sent. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setContent

▸ **setContent**(`content`): [`MessageBuilder`](MessageBuilder.md)

Sets the content of the message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | Text content for your message. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setEmbeds

▸ **setEmbeds**(...`embeds`): [`MessageBuilder`](MessageBuilder.md)

Set an array of embeds to be sent with this message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...embeds` | [`EmbedBuilder`](EmbedBuilder.md)[] | Array of embeds to be sent. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setEphemeral

▸ **setEphemeral**(`value`): [`MessageBuilder`](MessageBuilder.md)

Set the Ephemeral flag on this message. https://discord.com/developers/docs/tutorials/upgrading-to-application-commands#responding-to-a-command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Whether or not the message should be ephemeral. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### setTts

▸ **setTts**(`tts`): [`MessageBuilder`](MessageBuilder.md)

Set whether to enable TTS for this message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tts` | `boolean` | Whether or not the message should be read aloud. |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### suppressEmbeds

▸ **suppressEmbeds**(`value`): [`MessageBuilder`](MessageBuilder.md)

Set the SuppressEmbeds flag on this messgae.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Whether or not embeds in this message should be suppressed (hidden). |

#### Returns

[`MessageBuilder`](MessageBuilder.md)

___

### toInteractionJSON

▸ **toInteractionJSON**<`T`\>(`responseType`): [`ResponseMap`](../modules.md#responsemap)[`T`]

Fetch this message's data as an HTTP interaction response.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ChannelMessageWithSource` \| `UpdateMessage` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `responseType` | `T` | The interaction response type, depending on whether this is a response to a message or a reaction. |

#### Returns

[`ResponseMap`](../modules.md#responsemap)[`T`]

___

### toInteractionResponse

▸ **toInteractionResponse**<`T`\>(`responseType`): `FormData` \| [`ResponseMap`](../modules.md#responsemap)[`T`]

Fetch this message and its files as an HTTP interaction response.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ChannelMessageWithSource` \| `UpdateMessage` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `responseType` | `T` | The interaction response type, depending on whether this is a response to a message or a reaction. |

#### Returns

`FormData` \| [`ResponseMap`](../modules.md#responsemap)[`T`]

___

### toJSON

▸ **toJSON**(): `APIInteractionResponseCallbackData`

Fetch this message's data as an object.

#### Returns

`APIInteractionResponseCallbackData`

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
