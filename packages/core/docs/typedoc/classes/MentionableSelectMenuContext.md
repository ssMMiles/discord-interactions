[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / MentionableSelectMenuContext

# Class: MentionableSelectMenuContext\<S\>

Defined in: [app/contexts/components/select\_menus/MentionableSelectMenuContext.ts:12](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/select_menus/MentionableSelectMenuContext.ts#L12)

## Extends

- `BaseSelectMenuContext`\<`S`, `SelectMenuDataType`\>

## Type Parameters

### S

`S` = `never`

## Constructors

### Constructor

> **new MentionableSelectMenuContext**\<`S`\>(`manager`, `interaction`, `timestamps`, `responseCallback`): `MentionableSelectMenuContext`\<`S`\>

Defined in: [app/contexts/components/select\_menus/MentionableSelectMenuContext.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/select_menus/MentionableSelectMenuContext.ts#L21)

#### Parameters

##### manager

[`DiscordApplication`](DiscordApplication.md)

##### interaction

`SelectMenuInteraction`\<`APIMessageMentionableSelectInteractionData`\>

##### timestamps

###### received

`Date`

###### signature

`Date`

##### responseCallback

[`ResponseCallback`](../type-aliases/ResponseCallback.md)\<[`MessageUpdateResponse`](../type-aliases/MessageUpdateResponse.md)\>

#### Returns

`MentionableSelectMenuContext`\<`S`\>

#### Overrides

`BaseSelectMenuContext<S, SelectMenuDataType>.constructor`

## Properties

### allowExpired

> **allowExpired**: `boolean` = `false`

Defined in: [app/contexts/Base.ts:152](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L152)

#### Inherited from

`BaseSelectMenuContext.allowExpired`

***

### app

> **app**: [`DiscordApplication`](DiscordApplication.md)

Defined in: [app/contexts/Base.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L38)

#### Inherited from

`BaseSelectMenuContext.app`

***

### app\_permissions

> **app\_permissions**: `Bitfield`

Defined in: [app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L47)

#### Inherited from

`BaseSelectMenuContext.app_permissions`

***

### attachmentSizeLimit?

> `optional` **attachmentSizeLimit?**: `number`

Defined in: [app/contexts/Base.ts:67](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L67)

Attachment size limit for the invoking user/guild, in bytes.

#### Inherited from

`BaseSelectMenuContext.attachmentSizeLimit`

***

### authorizingIntegrationOwners?

> `optional` **authorizingIntegrationOwners?**: `APIAuthorizingIntegrationOwnersMap`

Defined in: [app/contexts/Base.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L64)

Mapping of installation contexts that authorized the interaction to their owner ids.

#### Inherited from

`BaseSelectMenuContext.authorizingIntegrationOwners`

***

### channelId?

> `optional` **channelId?**: `string`

Defined in: [app/contexts/Base.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L52)

#### Inherited from

`BaseSelectMenuContext.channelId`

***

### entitlements

> **entitlements**: `APIEntitlement`[] = `[]`

Defined in: [app/contexts/Base.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L70)

For monetized apps, entitlements of the invoking user.

#### Inherited from

`BaseSelectMenuContext.entitlements`

***

### guild?

> `optional` **guild?**: `APIPartialInteractionGuild`

Defined in: [app/contexts/Base.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L73)

Partial guild object for the guild the interaction was sent from.

#### Inherited from

`BaseSelectMenuContext.guild`

***

### guildId?

> `optional` **guildId?**: `string`

Defined in: [app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L51)

#### Inherited from

`BaseSelectMenuContext.guildId`

***

### guildLocale?

> `optional` **guildLocale?**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L58)

#### Inherited from

`BaseSelectMenuContext.guildLocale`

***

### id

> **id**: `string`

Defined in: [app/contexts/Base.ts:147](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L147)

#### Inherited from

`BaseSelectMenuContext.id`

***

### interactionContext?

> `optional` **interactionContext?**: `InteractionContextType`

Defined in: [app/contexts/Base.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L61)

Where this interaction was triggered from (guild, bot DM or private channel).

#### Inherited from

`BaseSelectMenuContext.interactionContext`

***

### interactionId

> **interactionId**: `string`

Defined in: [app/contexts/Base.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L44)

#### Inherited from

`BaseSelectMenuContext.interactionId`

***

### isDM

> **isDM**: `boolean`

Defined in: [app/contexts/Base.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L49)

#### Inherited from

`BaseSelectMenuContext.isDM`

***

### locale

> **locale**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L57)

#### Inherited from

`BaseSelectMenuContext.locale`

***

### member?

> `optional` **member?**: `APIInteractionGuildMember`

Defined in: [app/contexts/Base.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L55)

#### Inherited from

`BaseSelectMenuContext.member`

***

### message

> **message**: `APIMessage`

Defined in: [app/contexts/components/ComponentContext.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L20)

#### Inherited from

`BaseSelectMenuContext.message`

***

### parentCommand?

> `optional` **parentCommand?**: `string`

Defined in: [app/contexts/Base.ts:153](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L153)

#### Inherited from

`BaseSelectMenuContext.parentCommand`

***

### raw?

> `optional` **raw?**: `SelectMenuInteraction`\<`APIMessageMentionableSelectInteractionData`\>

Defined in: [app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L43)

#### Inherited from

`BaseSelectMenuContext.raw`

***

### receivedAt

> **receivedAt**: `Date`

Defined in: [app/contexts/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L41)

#### Inherited from

`BaseSelectMenuContext.receivedAt`

***

### signedAt

> **signedAt**: `Date`

Defined in: [app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L40)

#### Inherited from

`BaseSelectMenuContext.signedAt`

***

### state

> **state**: `S`

Defined in: [app/contexts/Base.ts:150](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L150)

#### Inherited from

`BaseSelectMenuContext.state`

***

### target

> **target**: `object`

Defined in: [app/contexts/components/select\_menus/MentionableSelectMenuContext.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/select_menus/MentionableSelectMenuContext.ts#L15)

#### member?

> `optional` **member?**: `APIInteractionDataResolvedGuildMember`

#### role?

> `optional` **role?**: `APIRole`

#### user?

> `optional` **user?**: `APIUser`

***

### user

> **user**: `APIUser`

Defined in: [app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L54)

#### Inherited from

`BaseSelectMenuContext.user`

***

### values

> **values**: `string`[]

Defined in: [app/contexts/components/select\_menus/MentionableSelectMenuContext.ts:13](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/select_menus/MentionableSelectMenuContext.ts#L13)

#### Overrides

`BaseSelectMenuContext.values`

## Accessors

### expired

#### Get Signature

> **get** **expired**(): `boolean`

Defined in: [app/contexts/Base.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L33)

##### Returns

`boolean`

#### Inherited from

`BaseSelectMenuContext.expired`

## Methods

### createComponent()

> **createComponent**\<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`\<`Builder`\>

Defined in: [app/contexts/Base.ts:175](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L175)

#### Type Parameters

##### Builder

`Builder` *extends* `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders`

#### Parameters

##### name

`string`

##### state?

`object` = `{}`

##### ttl?

`number`

#### Returns

`Promise`\<`Builder`\>

#### Inherited from

`BaseSelectMenuContext.createComponent`

***

### createGlobalComponent()

> **createGlobalComponent**\<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`\<`Builder`\>

Defined in: [app/contexts/Base.ts:135](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L135)

#### Type Parameters

##### Builder

`Builder` *extends* `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders`

#### Parameters

##### name

`string`

##### state?

`object` = `{}`

##### ttl?

`number`

#### Returns

`Promise`\<`Builder`\>

#### Inherited from

`BaseSelectMenuContext.createGlobalComponent`

***

### decorate()

> **decorate**(`key`, `value`): `void`

Defined in: [app/contexts/Base.ts:128](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L128)

#### Parameters

##### key

`string`

##### value

`unknown`

#### Returns

`void`

#### Inherited from

`BaseSelectMenuContext.decorate`

***

### defer()

> **defer**(): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L45)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.defer`

***

### deferFollowup()

> **deferFollowup**(`flags?`): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L54)

#### Parameters

##### flags?

`MessageFlags`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.deferFollowup`

***

### deferUpdate()

> **deferUpdate**(): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:65](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L65)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.deferUpdate`

***

### delete()

> **delete**(): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:160](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L160)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.delete`

***

### edit()

> **edit**(`message`): `Promise`\<`APIMessage`\>

Defined in: [app/contexts/components/ComponentContext.ts:156](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L156)

#### Parameters

##### message

`string` \| `MessageBuilder`

#### Returns

`Promise`\<`APIMessage`\>

#### Inherited from

`BaseSelectMenuContext.edit`

***

### fetchState()

> **fetchState**(): `Promise`\<`void`\>

Defined in: [app/contexts/Base.ts:181](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L181)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.fetchState`

***

### launchActivity()

> **launchActivity**(): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:37](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L37)

Launch your app's Activity in response to this component interaction.
Only available to apps with Activities enabled.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.launchActivity`

***

### rawReply()

> **rawReply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/Base.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L124)

#### Parameters

##### message

[`MessageUpdateResponse`](../type-aliases/MessageUpdateResponse.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.rawReply`

***

### reply()

> **reply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L73)

#### Parameters

##### message

`string` \| `APIInteractionResponseUpdateMessage` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.reply`

***

### replyFollowup()

> **replyFollowup**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:100](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L100)

#### Parameters

##### message

`string` \| `APIInteractionResponseChannelMessageWithSource` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.replyFollowup`

***

### replyUpdate()

> **replyUpdate**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/components/ComponentContext.ts:126](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L126)

#### Parameters

##### message

`string` \| `APIInteractionResponseUpdateMessage` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseSelectMenuContext.replyUpdate`

***

### send()

> **send**(`message`): `Promise`\<`APIMessage`\>

Defined in: [app/contexts/components/ComponentContext.ts:152](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/components/ComponentContext.ts#L152)

#### Parameters

##### message

`string` \| `MessageBuilder`

#### Returns

`Promise`\<`APIMessage`\>

#### Inherited from

`BaseSelectMenuContext.send`
