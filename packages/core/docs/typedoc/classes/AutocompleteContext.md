[@discord-interactions/core](../README.md) / [Exports](../modules.md) / AutocompleteContext

# Class: AutocompleteContext

## Hierarchy

- `BaseInteractionContext`<`APIApplicationCommandAutocompleteInteraction`, `APIApplicationCommandAutocompleteResponse`\>

  ↳ **`AutocompleteContext`**

## Table of contents

### Constructors

- [constructor](AutocompleteContext.md#constructor)

### Properties

- [app](AutocompleteContext.md#app)
- [app\_permissions](AutocompleteContext.md#app_permissions)
- [channelId](AutocompleteContext.md#channelid)
- [commandGuildId](AutocompleteContext.md#commandguildid)
- [group](AutocompleteContext.md#group)
- [guildId](AutocompleteContext.md#guildid)
- [guildLocale](AutocompleteContext.md#guildlocale)
- [id](AutocompleteContext.md#id)
- [interactionId](AutocompleteContext.md#interactionid)
- [isDM](AutocompleteContext.md#isdm)
- [locale](AutocompleteContext.md#locale)
- [member](AutocompleteContext.md#member)
- [name](AutocompleteContext.md#name)
- [option](AutocompleteContext.md#option)
- [parentCommand](AutocompleteContext.md#parentcommand)
- [raw](AutocompleteContext.md#raw)
- [receivedAt](AutocompleteContext.md#receivedat)
- [resolved](AutocompleteContext.md#resolved)
- [signedAt](AutocompleteContext.md#signedat)
- [user](AutocompleteContext.md#user)

### Accessors

- [expired](AutocompleteContext.md#expired)

### Methods

- [createComponent](AutocompleteContext.md#createcomponent)
- [createGlobalComponent](AutocompleteContext.md#createglobalcomponent)
- [decorate](AutocompleteContext.md#decorate)
- [getIntegerOption](AutocompleteContext.md#getintegeroption)
- [getNumberOption](AutocompleteContext.md#getnumberoption)
- [getStringOption](AutocompleteContext.md#getstringoption)
- [rawReply](AutocompleteContext.md#rawreply)
- [reply](AutocompleteContext.md#reply)

## Constructors

### constructor

• **new AutocompleteContext**(`app`, `interaction`, `timestamps`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIApplicationCommandAutocompleteInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<`APIApplicationCommandAutocompleteResponse`\> |

#### Overrides

BaseInteractionContext&lt;
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
\&gt;.constructor

## Properties

### app

• **app**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseInteractionContext.app

#### Defined in

[app/contexts/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L34)

___

### app\_permissions

• **app\_permissions**: `Bitfield`

#### Inherited from

BaseInteractionContext.app\_permissions

#### Defined in

[app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L43)

___

### channelId

• `Optional` **channelId**: `string`

#### Inherited from

BaseInteractionContext.channelId

#### Defined in

[app/contexts/Base.ts:48](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L48)

___

### commandGuildId

• `Optional` **commandGuildId**: `string`

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:29](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L29)

___

### group

• `Optional` **group**: `string`

The subcommand group

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:43](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L43)

___

### guildId

• `Optional` **guildId**: `string`

#### Inherited from

BaseInteractionContext.guildId

#### Defined in

[app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L47)

___

### guildLocale

• `Optional` **guildLocale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseInteractionContext.guildLocale

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L54)

___

### id

• **id**: `string`

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:26](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L26)

___

### interactionId

• **interactionId**: `string`

#### Inherited from

BaseInteractionContext.interactionId

#### Defined in

[app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L40)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseInteractionContext.isDM

#### Defined in

[app/contexts/Base.ts:45](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L45)

___

### locale

• **locale**: ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseInteractionContext.locale

#### Defined in

[app/contexts/Base.ts:53](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L53)

___

### member

• `Optional` **member**: `APIGuildMember`

#### Inherited from

BaseInteractionContext.member

#### Defined in

[app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L51)

___

### name

• **name**: `string`

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:25](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L25)

___

### option

• **option**: [`AutocompleteSupportedOptions`](../modules.md#autocompletesupportedoptions)

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:33](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L33)

___

### parentCommand

• `Optional` **parentCommand**: `string`

The parent command, if this is a subcommand.

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:38](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L38)

___

### raw

• `Optional` **raw**: `APIApplicationCommandAutocompleteInteraction`

#### Inherited from

BaseInteractionContext.raw

#### Defined in

[app/contexts/Base.ts:39](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L39)

___

### receivedAt

• **receivedAt**: `Date`

#### Inherited from

BaseInteractionContext.receivedAt

#### Defined in

[app/contexts/Base.ts:37](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L37)

___

### resolved

• **resolved**: `ResolvedData`

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:31](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L31)

___

### signedAt

• **signedAt**: `Date`

#### Inherited from

BaseInteractionContext.signedAt

#### Defined in

[app/contexts/Base.ts:36](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L36)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseInteractionContext.user

#### Defined in

[app/contexts/Base.ts:50](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/app/contexts/Base.ts#L50)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseInteractionContext.expired

## Methods

### createComponent

▸ **createComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

___

### createGlobalComponent

▸ **createGlobalComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Inherited from

BaseInteractionContext.createGlobalComponent

___

### decorate

▸ **decorate**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Inherited from

BaseInteractionContext.decorate

___

### getIntegerOption

▸ **getIntegerOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

___

### getNumberOption

▸ **getNumberOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

___

### getStringOption

▸ **getStringOption**(`name`): `APIApplicationCommandInteractionDataStringOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataStringOption`

___

### rawReply

▸ **rawReply**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `APIApplicationCommandAutocompleteResponse` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseInteractionContext.rawReply

___

### reply

▸ **reply**(`choices`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | `APIApplicationCommandOptionChoice`<`string` \| `number`\>[] |

#### Returns

`Promise`<`void`\>
