[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / AutocompleteContext

# Class: AutocompleteContext

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L21)

## Extends

- `BaseInteractionContext`\<`APIApplicationCommandAutocompleteInteraction`, `APIApplicationCommandAutocompleteResponse`\>

## Constructors

### Constructor

> **new AutocompleteContext**(`app`, `interaction`, `timestamps`, `responseCallback`): `AutocompleteContext`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L45)

#### Parameters

##### app

[`DiscordApplication`](DiscordApplication.md)

##### interaction

`APIApplicationCommandAutocompleteInteraction`

##### timestamps

###### received

`Date`

###### signature

`Date`

##### responseCallback

[`ResponseCallback`](../type-aliases/ResponseCallback.md)\<`APIApplicationCommandAutocompleteResponse`\>

#### Returns

`AutocompleteContext`

#### Overrides

`BaseInteractionContext< APIApplicationCommandAutocompleteInteraction, APIApplicationCommandAutocompleteResponse >.constructor`

## Properties

### app

> **app**: [`DiscordApplication`](DiscordApplication.md)

Defined in: [app/contexts/Base.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L38)

#### Inherited from

`BaseInteractionContext.app`

***

### app\_permissions

> **app\_permissions**: `Bitfield`

Defined in: [app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L47)

#### Inherited from

`BaseInteractionContext.app_permissions`

***

### attachmentSizeLimit?

> `optional` **attachmentSizeLimit?**: `number`

Defined in: [app/contexts/Base.ts:67](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L67)

Attachment size limit for the invoking user/guild, in bytes.

#### Inherited from

`BaseInteractionContext.attachmentSizeLimit`

***

### authorizingIntegrationOwners?

> `optional` **authorizingIntegrationOwners?**: `APIAuthorizingIntegrationOwnersMap`

Defined in: [app/contexts/Base.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L64)

Mapping of installation contexts that authorized the interaction to their owner ids.

#### Inherited from

`BaseInteractionContext.authorizingIntegrationOwners`

***

### channelId?

> `optional` **channelId?**: `string`

Defined in: [app/contexts/Base.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L52)

#### Inherited from

`BaseInteractionContext.channelId`

***

### commandGuildId?

> `optional` **commandGuildId?**: `string`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:29](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L29)

***

### entitlements

> **entitlements**: `APIEntitlement`[] = `[]`

Defined in: [app/contexts/Base.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L70)

For monetized apps, entitlements of the invoking user.

#### Inherited from

`BaseInteractionContext.entitlements`

***

### group?

> `optional` **group?**: `string`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L43)

The subcommand group

***

### guild?

> `optional` **guild?**: `APIPartialInteractionGuild`

Defined in: [app/contexts/Base.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L73)

Partial guild object for the guild the interaction was sent from.

#### Inherited from

`BaseInteractionContext.guild`

***

### guildId?

> `optional` **guildId?**: `string`

Defined in: [app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L51)

#### Inherited from

`BaseInteractionContext.guildId`

***

### guildLocale?

> `optional` **guildLocale?**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L58)

#### Inherited from

`BaseInteractionContext.guildLocale`

***

### id

> **id**: `string`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L26)

***

### interactionContext?

> `optional` **interactionContext?**: `InteractionContextType`

Defined in: [app/contexts/Base.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L61)

Where this interaction was triggered from (guild, bot DM or private channel).

#### Inherited from

`BaseInteractionContext.interactionContext`

***

### interactionId

> **interactionId**: `string`

Defined in: [app/contexts/Base.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L44)

#### Inherited from

`BaseInteractionContext.interactionId`

***

### isDM

> **isDM**: `boolean`

Defined in: [app/contexts/Base.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L49)

#### Inherited from

`BaseInteractionContext.isDM`

***

### locale

> **locale**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L57)

#### Inherited from

`BaseInteractionContext.locale`

***

### member?

> `optional` **member?**: `APIInteractionGuildMember`

Defined in: [app/contexts/Base.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L55)

#### Inherited from

`BaseInteractionContext.member`

***

### name

> **name**: `string`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:25](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L25)

***

### option

> **option**: [`AutocompleteSupportedOptions`](../type-aliases/AutocompleteSupportedOptions.md)

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L33)

***

### parentCommand?

> `optional` **parentCommand?**: `string`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L38)

The parent command, if this is a subcommand.

***

### raw?

> `optional` **raw?**: `APIApplicationCommandAutocompleteInteraction`

Defined in: [app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L43)

#### Inherited from

`BaseInteractionContext.raw`

***

### receivedAt

> **receivedAt**: `Date`

Defined in: [app/contexts/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L41)

#### Inherited from

`BaseInteractionContext.receivedAt`

***

### resolved

> **resolved**: `ResolvedData`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:31](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L31)

***

### signedAt

> **signedAt**: `Date`

Defined in: [app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L40)

#### Inherited from

`BaseInteractionContext.signedAt`

***

### user

> **user**: `APIUser`

Defined in: [app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L54)

#### Inherited from

`BaseInteractionContext.user`

## Accessors

### expired

#### Get Signature

> **get** **expired**(): `boolean`

Defined in: [app/contexts/Base.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L33)

##### Returns

`boolean`

#### Inherited from

`BaseInteractionContext.expired`

## Methods

### createComponent()

> **createComponent**\<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`\<`Builder`\>

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:83](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L83)

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

`BaseInteractionContext.createGlobalComponent`

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

`BaseInteractionContext.decorate`

***

### getIntegerOption()

> **getIntegerOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:105](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L105)

#### Parameters

##### name

`string`

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

***

### getNumberOption()

> **getNumberOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:112](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L112)

#### Parameters

##### name

`string`

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

***

### getStringOption()

> **getStringOption**(`name`): `APIApplicationCommandInteractionDataStringOption`

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:98](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L98)

#### Parameters

##### name

`string`

#### Returns

`APIApplicationCommandInteractionDataStringOption`

***

### rawReply()

> **rawReply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/Base.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L124)

#### Parameters

##### message

`APIApplicationCommandAutocompleteResponse`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseInteractionContext.rawReply`

***

### reply()

> **reply**(`choices`): `Promise`\<`void`\>

Defined in: [app/contexts/application\_commands/AutocompleteContext.ts:89](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L89)

#### Parameters

##### choices

`APIApplicationCommandOptionChoice`\<`string` \| `number`\>[]

#### Returns

`Promise`\<`void`\>
