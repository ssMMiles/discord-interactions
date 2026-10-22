[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / EntryPointCommandContext

# Class: EntryPointCommandContext

Defined in: [app/contexts/application\_commands/EntryPointCommandContext.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/EntryPointCommandContext.ts#L8)

Context for an Entry Point command interaction - the primary way users launch your app's Activity.
Typically answered with launchActivity() or a regular message response.

## Extends

- `BaseCommandContext`\<`APIPrimaryEntryPointCommandInteraction`\>

## Constructors

### Constructor

> **new EntryPointCommandContext**(`app`, `interaction`, `timestamps`, `responseCallback`): `EntryPointCommandContext`

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L54)

#### Parameters

##### app

[`DiscordApplication`](DiscordApplication.md)

##### interaction

`APIPrimaryEntryPointCommandInteraction`

##### timestamps

###### received

`Date`

###### signature

`Date`

##### responseCallback

[`ResponseCallback`](../type-aliases/ResponseCallback.md)\<[`ChannelMessageResponse`](../type-aliases/ChannelMessageResponse.md)\>

#### Returns

`EntryPointCommandContext`

#### Inherited from

`BaseCommandContext<APIPrimaryEntryPointCommandInteraction>.constructor`

## Properties

### app

> **app**: [`DiscordApplication`](DiscordApplication.md)

Defined in: [app/contexts/Base.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L38)

#### Inherited from

`BaseCommandContext.app`

***

### app\_permissions

> **app\_permissions**: `Bitfield`

Defined in: [app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L47)

#### Inherited from

`BaseCommandContext.app_permissions`

***

### attachmentSizeLimit?

> `optional` **attachmentSizeLimit?**: `number`

Defined in: [app/contexts/Base.ts:67](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L67)

Attachment size limit for the invoking user/guild, in bytes.

#### Inherited from

`BaseCommandContext.attachmentSizeLimit`

***

### authorizingIntegrationOwners?

> `optional` **authorizingIntegrationOwners?**: `APIAuthorizingIntegrationOwnersMap`

Defined in: [app/contexts/Base.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L64)

Mapping of installation contexts that authorized the interaction to their owner ids.

#### Inherited from

`BaseCommandContext.authorizingIntegrationOwners`

***

### channelId?

> `optional` **channelId?**: `string`

Defined in: [app/contexts/Base.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L52)

#### Inherited from

`BaseCommandContext.channelId`

***

### commandGuildId?

> `optional` **commandGuildId?**: `string`

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:50](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L50)

#### Inherited from

`BaseCommandContext.commandGuildId`

***

### entitlements

> **entitlements**: `APIEntitlement`[] = `[]`

Defined in: [app/contexts/Base.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L70)

For monetized apps, entitlements of the invoking user.

#### Inherited from

`BaseCommandContext.entitlements`

***

### guild?

> `optional` **guild?**: `APIPartialInteractionGuild`

Defined in: [app/contexts/Base.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L73)

Partial guild object for the guild the interaction was sent from.

#### Inherited from

`BaseCommandContext.guild`

***

### guildId?

> `optional` **guildId?**: `string`

Defined in: [app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L51)

#### Inherited from

`BaseCommandContext.guildId`

***

### guildLocale?

> `optional` **guildLocale?**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L58)

#### Inherited from

`BaseCommandContext.guildLocale`

***

### id

> **id**: `string`

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L47)

#### Inherited from

`BaseCommandContext.id`

***

### interactionContext?

> `optional` **interactionContext?**: `InteractionContextType`

Defined in: [app/contexts/Base.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L61)

Where this interaction was triggered from (guild, bot DM or private channel).

#### Inherited from

`BaseCommandContext.interactionContext`

***

### interactionId

> **interactionId**: `string`

Defined in: [app/contexts/Base.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L44)

#### Inherited from

`BaseCommandContext.interactionId`

***

### isDM

> **isDM**: `boolean`

Defined in: [app/contexts/Base.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L49)

#### Inherited from

`BaseCommandContext.isDM`

***

### locale

> **locale**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L57)

#### Inherited from

`BaseCommandContext.locale`

***

### member?

> `optional` **member?**: `APIInteractionGuildMember`

Defined in: [app/contexts/Base.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L55)

#### Inherited from

`BaseCommandContext.member`

***

### name

> **name**: `string`

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:46](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L46)

#### Inherited from

`BaseCommandContext.name`

***

### raw?

> `optional` **raw?**: `APIPrimaryEntryPointCommandInteraction`

Defined in: [app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L43)

#### Inherited from

`BaseCommandContext.raw`

***

### receivedAt

> **receivedAt**: `Date`

Defined in: [app/contexts/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L41)

#### Inherited from

`BaseCommandContext.receivedAt`

***

### resolved

> **resolved**: `ResolvedData`

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L52)

#### Inherited from

`BaseCommandContext.resolved`

***

### signedAt

> **signedAt**: `Date`

Defined in: [app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L40)

#### Inherited from

`BaseCommandContext.signedAt`

***

### user

> **user**: `APIUser`

Defined in: [app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L54)

#### Inherited from

`BaseCommandContext.user`

## Accessors

### expired

#### Get Signature

> **get** **expired**(): `boolean`

Defined in: [app/contexts/Base.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L33)

##### Returns

`boolean`

#### Inherited from

`BaseCommandContext.expired`

## Methods

### createComponent()

> **createComponent**\<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`\<`Builder`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:80](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L80)

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

`BaseCommandContext.createComponent`

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

`BaseCommandContext.createGlobalComponent`

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

`BaseCommandContext.decorate`

***

### defer()

> **defer**(`flags?`): `Promise`\<`void`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:98](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L98)

#### Parameters

##### flags?

`MessageFlags`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseCommandContext.defer`

***

### delete()

> **delete**(): `Promise`\<`void`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:141](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L141)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseCommandContext.delete`

***

### edit()

> **edit**(`message`): `Promise`\<`APIMessage`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:137](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L137)

#### Parameters

##### message

`string` \| `MessageBuilder`

#### Returns

`Promise`\<`APIMessage`\>

#### Inherited from

`BaseCommandContext.edit`

***

### launchActivity()

> **launchActivity**(): `Promise`\<`void`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:90](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L90)

Launch your app's Activity in response to this interaction.
Only available to apps with Activities enabled.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseCommandContext.launchActivity`

***

### rawReply()

> **rawReply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/Base.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L124)

#### Parameters

##### message

[`ChannelMessageResponse`](../type-aliases/ChannelMessageResponse.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseCommandContext.rawReply`

***

### reply()

> **reply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:109](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L109)

#### Parameters

##### message

`string` \| `APIInteractionResponseChannelMessageWithSource` \| `APIModalInteractionResponse` \| `FormData` \| `MessageBuilder` \| `ModalBuilder`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseCommandContext.reply`

***

### send()

> **send**(`message`): `Promise`\<`APIMessage`\>

Defined in: [app/contexts/application\_commands/ApplicationCommandContext.ts:133](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/ApplicationCommandContext.ts#L133)

#### Parameters

##### message

`string` \| `MessageBuilder`

#### Returns

`Promise`\<`APIMessage`\>

#### Inherited from

`BaseCommandContext.send`
