[@discord-interactions/core](../README.md) / [Exports](../modules.md) / AutocompleteContext

# Class: AutocompleteContext

## Hierarchy

- `BaseInteractionContext`<`APIApplicationCommandAutocompleteInteraction`, `APIApplicationCommandAutocompleteResponse`\>

  ↳ **`AutocompleteContext`**

## Table of contents

### Constructors

- [constructor](AutocompleteContext.md#constructor)

### Properties

- [group](AutocompleteContext.md#group)
- [interaction](AutocompleteContext.md#interaction)
- [isDM](AutocompleteContext.md#isdm)
- [manager](AutocompleteContext.md#manager)
- [name](AutocompleteContext.md#name)
- [option](AutocompleteContext.md#option)
- [parentCommand](AutocompleteContext.md#parentcommand)
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

• **new AutocompleteContext**(`manager`, `interaction`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`DiscordApplication`](DiscordApplication.md) |
| `interaction` | `APIApplicationCommandAutocompleteInteraction` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<`APIApplicationCommandAutocompleteResponse`\> |

#### Overrides

BaseInteractionContext&lt;
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse
\&gt;.constructor

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L36)

## Properties

### group

• `Optional` **group**: `string`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:34](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L34)

___

### interaction

• **interaction**: `APIApplicationCommandAutocompleteInteraction`

#### Inherited from

BaseInteractionContext.interaction

#### Defined in

[app/contexts/Base.ts:26](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L26)

___

### isDM

• **isDM**: `boolean`

#### Inherited from

BaseInteractionContext.isDM

#### Defined in

[app/contexts/Base.ts:31](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L31)

___

### manager

• **manager**: [`DiscordApplication`](DiscordApplication.md)

#### Inherited from

BaseInteractionContext.manager

#### Defined in

[app/contexts/Base.ts:24](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L24)

___

### name

• **name**: `string`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:23](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L23)

___

### option

• **option**: [`AutocompleteSupportedOptions`](../modules.md#autocompletesupportedoptions)

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:24](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L24)

___

### parentCommand

• `Optional` **parentCommand**: `string`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:29](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L29)

___

### user

• **user**: `APIUser`

#### Inherited from

BaseInteractionContext.user

#### Defined in

[app/contexts/Base.ts:29](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L29)

## Accessors

### expired

• `get` **expired**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseInteractionContext.expired

#### Defined in

[app/contexts/Base.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L19)

## Methods

### createComponent

▸ **createComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilder` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilder` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `object` |
| `ttl?` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:68](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L68)

___

### createGlobalComponent

▸ **createGlobalComponent**<`Builder`\>(`name`, `state?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilder` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilder` |

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

#### Defined in

[app/contexts/Base.ts:65](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L65)

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

#### Defined in

[app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L58)

___

### getIntegerOption

▸ **getIntegerOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:90](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L90)

___

### getNumberOption

▸ **getNumberOption**(`name`): `APIApplicationCommandInteractionDataNumberOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataNumberOption`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:97](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L97)

___

### getStringOption

▸ **getStringOption**(`name`): `APIApplicationCommandInteractionDataStringOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`APIApplicationCommandInteractionDataStringOption`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:83](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L83)

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

#### Defined in

[app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/Base.ts#L54)

___

### reply

▸ **reply**(`choices`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | `APIApplicationCommandOptionChoice`<`string` \| `number`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:74](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L74)
