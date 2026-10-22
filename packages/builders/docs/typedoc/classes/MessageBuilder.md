[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / MessageBuilder

# Class: MessageBuilder

Defined in: [packages/builders/src/responses/MessageBuilder.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L44)

## Constructors

### Constructor

> **new MessageBuilder**(`data?`): `MessageBuilder`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:48](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L48)

#### Parameters

##### data?

`string` \| `APIInteractionResponseCallbackData` \| [`EmbedBuilder`](EmbedBuilder.md)

#### Returns

`MessageBuilder`

## Properties

### data

> **data**: `APIInteractionResponseCallbackData` = `{}`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L45)

***

### files?

> `optional` **files?**: [`AttachedFile`](../interfaces/AttachedFile.md)[]

Defined in: [packages/builders/src/responses/MessageBuilder.ts:46](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L46)

## Accessors

### isComponentsV2

#### Get Signature

> **get** **isComponentsV2**(): `boolean`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:142](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L142)

Whether this message has the IsComponentsV2 flag set.

##### Returns

`boolean`

## Methods

### addAttachments()

> **addAttachments**(...`files`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:218](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L218)

Add one or more files to this message.

#### Parameters

##### files

...[`AttachedFile`](../interfaces/AttachedFile.md)[]

Files to attach to this message.

#### Returns

`this`

***

### addComponents()

> **addComponents**(...`components`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:189](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L189)

Add one or more top-level components to the message.
Legacy messages accept up to 5 Action Rows; adding any other component type
automatically flags this message as Components V2 (max 40 components total).

#### Parameters

##### components

...[`MessageTopLevelComponentBuilders`](../type-aliases/MessageTopLevelComponentBuilders.md)[]

Components to add to this message.

#### Returns

`this`

***

### addEmbeds()

> **addEmbeds**(...`embeds`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:161](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L161)

Add one or more embeds to this message. Maximum of 10.

#### Parameters

##### embeds

...[`EmbedBuilder`](EmbedBuilder.md)[]

Embeds to add to this message.

#### Returns

`this`

***

### setAllowedMentions()

> **setAllowedMentions**(`allowedMentions`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:82](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L82)

Set which mentions will be allowed in this message.

#### Parameters

##### allowedMentions

`APIAllowedMentions`

Allowed mentions for this message. https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure - TODO: Builder for this

#### Returns

`this`

***

### setAttachments()

> **setAttachments**(...`files`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:244](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L244)

Set an array of files to be sent with this message.

#### Parameters

##### files

...[`AttachedFile`](../interfaces/AttachedFile.md)[]

Array of files to be sent.

#### Returns

`this`

***

### setComponents()

> **setComponents**(`components?`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:207](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L207)

Set an array of Action Rows to be sent with this message.

#### Parameters

##### components?

`APIActionRowComponent`\<`APIComponentInMessageActionRow`\>[] = `[]`

Array of Action Rows to be sent.

#### Returns

`this`

***

### setComponentsV2()

> **setComponentsV2**(`value?`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:135](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L135)

Set the IsComponentsV2 flag on this message. Components V2 messages can use layout and
content components (Text Display, Section, Container, Media Gallery, Separator, File),
but cannot use content, embeds, polls or stickers. This flag cannot be removed once
a message has been sent with it.

#### Parameters

##### value?

`boolean` = `true`

Whether or not this message uses Components V2.

#### Returns

`this`

***

### setContent()

> **setContent**(`content`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:60](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L60)

Sets the content of the message.

#### Parameters

##### content

`string`

Text content for your message.

#### Returns

`this`

***

### setEmbeds()

> **setEmbeds**(...`embeds`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:176](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L176)

Set an array of embeds to be sent with this message.

#### Parameters

##### embeds

...[`EmbedBuilder`](EmbedBuilder.md)[]

Array of embeds to be sent.

#### Returns

`this`

***

### setEphemeral()

> **setEphemeral**(`value`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:116](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L116)

Set the Ephemeral flag on this message. https://discord.com/developers/docs/tutorials/upgrading-to-application-commands#responding-to-a-command

#### Parameters

##### value

`boolean`

Whether or not the message should be ephemeral.

#### Returns

`this`

***

### setPoll()

> **setPoll**(`poll`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:150](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L150)

Attach a poll to this message. Not available on Components V2 messages.

#### Parameters

##### poll

`RESTAPIPoll` \| [`PollBuilder`](PollBuilder.md)

A PollBuilder or raw poll create request.

#### Returns

`this`

***

### setSuppressNotifications()

> **setSuppressNotifications**(`value?`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L124)

Set the SuppressNotifications flag on this message, sending it without triggering push/desktop notifications.

#### Parameters

##### value?

`boolean` = `true`

Whether or not notifications should be suppressed.

#### Returns

`this`

***

### setTts()

> **setTts**(`tts`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:71](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L71)

Set whether to enable TTS for this message.

#### Parameters

##### tts

`boolean`

Whether or not the message should be read aloud.

#### Returns

`this`

***

### suppressEmbeds()

> **suppressEmbeds**(`value`): `this`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:107](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L107)

Set the SuppressEmbeds flag on this messgae.

#### Parameters

##### value

`boolean`

Whether or not embeds in this message should be suppressed (hidden).

#### Returns

`this`

***

### toInteractionJSON()

> **toInteractionJSON**\<`T`\>(`responseType`): [`ResponseMap`](../type-aliases/ResponseMap.md)\[`T`\]

Defined in: [packages/builders/src/responses/MessageBuilder.ts:278](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L278)

Fetch this message's data as an HTTP interaction response.

#### Type Parameters

##### T

`T` *extends* `ChannelMessageWithSource` \| `UpdateMessage`

#### Parameters

##### responseType

`T`

The interaction response type, depending on whether this is a response to a message or a reaction.

#### Returns

[`ResponseMap`](../type-aliases/ResponseMap.md)\[`T`\]

***

### toInteractionResponse()

> **toInteractionResponse**\<`T`\>(`responseType`): `FormData` \| [`ResponseMap`](../type-aliases/ResponseMap.md)\[`T`\]

Defined in: [packages/builders/src/responses/MessageBuilder.ts:292](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L292)

Fetch this message and its files as an HTTP interaction response.

#### Type Parameters

##### T

`T` *extends* `ChannelMessageWithSource` \| `UpdateMessage`

#### Parameters

##### responseType

`T`

The interaction response type, depending on whether this is a response to a message or a reaction.

#### Returns

`FormData` \| [`ResponseMap`](../type-aliases/ResponseMap.md)\[`T`\]

***

### toJSON()

> **toJSON**(): `APIInteractionResponseCallbackData`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:303](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L303)

Fetch this message's data as an object, validating Components V2 constraints.

#### Returns

`APIInteractionResponseCallbackData`

***

### toWebhook()

> **toWebhook**(`username?`, `avatar_url?`): `RESTPostAPIWebhookWithTokenJSONBody` \| `FormData`

Defined in: [packages/builders/src/responses/MessageBuilder.ts:326](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L326)

#### Parameters

##### username?

`string`

##### avatar\_url?

`string`

#### Returns

`RESTPostAPIWebhookWithTokenJSONBody` \| `FormData`
