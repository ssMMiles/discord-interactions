[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / ModalSubmitContext

# Class: ModalSubmitContext\<State\>

Defined in: [app/contexts/ModalSubmitContext.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L18)

## Extends

- `BaseStatefulInteractionContext`\<`State`, `APIModalSubmitInteraction`, [`ModalSubmitResponse`](../type-aliases/ModalSubmitResponse.md)\>

## Type Parameters

### State

`State` = `never`

## Constructors

### Constructor

> **new ModalSubmitContext**\<`State`\>(`manager`, `interaction`, `timestamps`, `responseCallback`): `ModalSubmitContext`\<`State`\>

Defined in: [app/contexts/ModalSubmitContext.ts:30](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L30)

#### Parameters

##### manager

[`DiscordApplication`](DiscordApplication.md)

##### interaction

`APIModalSubmitInteraction`

##### timestamps

###### received

`Date`

###### signature

`Date`

##### responseCallback

[`ResponseCallback`](../type-aliases/ResponseCallback.md)\<[`ModalSubmitResponse`](../type-aliases/ModalSubmitResponse.md)\>

#### Returns

`ModalSubmitContext`\<`State`\>

#### Overrides

`BaseStatefulInteractionContext< State, APIModalSubmitInteraction, ModalSubmitResponse >.constructor`

## Properties

### allowExpired

> **allowExpired**: `boolean` = `false`

Defined in: [app/contexts/Base.ts:152](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L152)

#### Inherited from

`BaseStatefulInteractionContext.allowExpired`

***

### app

> **app**: [`DiscordApplication`](DiscordApplication.md)

Defined in: [app/contexts/Base.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L38)

#### Inherited from

`BaseStatefulInteractionContext.app`

***

### app\_permissions

> **app\_permissions**: `Bitfield`

Defined in: [app/contexts/Base.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L47)

#### Inherited from

`BaseStatefulInteractionContext.app_permissions`

***

### attachmentSizeLimit?

> `optional` **attachmentSizeLimit?**: `number`

Defined in: [app/contexts/Base.ts:67](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L67)

Attachment size limit for the invoking user/guild, in bytes.

#### Inherited from

`BaseStatefulInteractionContext.attachmentSizeLimit`

***

### authorizingIntegrationOwners?

> `optional` **authorizingIntegrationOwners?**: `APIAuthorizingIntegrationOwnersMap`

Defined in: [app/contexts/Base.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L64)

Mapping of installation contexts that authorized the interaction to their owner ids.

#### Inherited from

`BaseStatefulInteractionContext.authorizingIntegrationOwners`

***

### channelId?

> `optional` **channelId?**: `string`

Defined in: [app/contexts/Base.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L52)

#### Inherited from

`BaseStatefulInteractionContext.channelId`

***

### components

> **components**: `Map`\<`string`, `ModalSubmitComponent`\>

Defined in: [app/contexts/ModalSubmitContext.ts:23](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L23)

***

### entitlements

> **entitlements**: `APIEntitlement`[] = `[]`

Defined in: [app/contexts/Base.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L70)

For monetized apps, entitlements of the invoking user.

#### Inherited from

`BaseStatefulInteractionContext.entitlements`

***

### guild?

> `optional` **guild?**: `APIPartialInteractionGuild`

Defined in: [app/contexts/Base.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L73)

Partial guild object for the guild the interaction was sent from.

#### Inherited from

`BaseStatefulInteractionContext.guild`

***

### guildId?

> `optional` **guildId?**: `string`

Defined in: [app/contexts/Base.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L51)

#### Inherited from

`BaseStatefulInteractionContext.guildId`

***

### guildLocale?

> `optional` **guildLocale?**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L58)

#### Inherited from

`BaseStatefulInteractionContext.guildLocale`

***

### id

> **id**: `string`

Defined in: [app/contexts/Base.ts:147](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L147)

#### Inherited from

`BaseStatefulInteractionContext.id`

***

### interactionContext?

> `optional` **interactionContext?**: `InteractionContextType`

Defined in: [app/contexts/Base.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L61)

Where this interaction was triggered from (guild, bot DM or private channel).

#### Inherited from

`BaseStatefulInteractionContext.interactionContext`

***

### interactionId

> **interactionId**: `string`

Defined in: [app/contexts/Base.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L44)

#### Inherited from

`BaseStatefulInteractionContext.interactionId`

***

### isDM

> **isDM**: `boolean`

Defined in: [app/contexts/Base.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L49)

#### Inherited from

`BaseStatefulInteractionContext.isDM`

***

### locale

> **locale**: `"id"` \| `"hr"` \| `"th"` \| `"tr"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"uk"` \| `"vi"`

Defined in: [app/contexts/Base.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L57)

#### Inherited from

`BaseStatefulInteractionContext.locale`

***

### member?

> `optional` **member?**: `APIInteractionGuildMember`

Defined in: [app/contexts/Base.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L55)

#### Inherited from

`BaseStatefulInteractionContext.member`

***

### parentCommand?

> `optional` **parentCommand?**: `string`

Defined in: [app/contexts/ModalSubmitContext.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L28)

#### Overrides

`BaseStatefulInteractionContext.parentCommand`

***

### raw?

> `optional` **raw?**: `APIModalSubmitInteraction`

Defined in: [app/contexts/Base.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L43)

#### Inherited from

`BaseStatefulInteractionContext.raw`

***

### receivedAt

> **receivedAt**: `Date`

Defined in: [app/contexts/Base.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L41)

#### Inherited from

`BaseStatefulInteractionContext.receivedAt`

***

### resolved?

> `optional` **resolved?**: `APIInteractionDataResolved`

Defined in: [app/contexts/ModalSubmitContext.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L26)

Resolved users, members, roles, channels and attachments referenced by this modal's components.

***

### signedAt

> **signedAt**: `Date`

Defined in: [app/contexts/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L40)

#### Inherited from

`BaseStatefulInteractionContext.signedAt`

***

### state

> **state**: `State`

Defined in: [app/contexts/Base.ts:150](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L150)

#### Inherited from

`BaseStatefulInteractionContext.state`

***

### user

> **user**: `APIUser`

Defined in: [app/contexts/Base.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L54)

#### Inherited from

`BaseStatefulInteractionContext.user`

## Accessors

### expired

#### Get Signature

> **get** **expired**(): `boolean`

Defined in: [app/contexts/Base.ts:33](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L33)

##### Returns

`boolean`

#### Inherited from

`BaseStatefulInteractionContext.expired`

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

`BaseStatefulInteractionContext.createComponent`

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

`BaseStatefulInteractionContext.createGlobalComponent`

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

`BaseStatefulInteractionContext.decorate`

***

### defer()

> **defer**(`flags?`): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:136](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L136)

#### Parameters

##### flags?

`MessageFlags`

#### Returns

`Promise`\<`void`\>

***

### deferFollowup()

> **deferFollowup**(`flags?`): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:148](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L148)

#### Parameters

##### flags?

`MessageFlags`

#### Returns

`Promise`\<`void`\>

***

### deferUpdate()

> **deferUpdate**(): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:162](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L162)

Note: This is only supported when replying to a component interaction.

#### Returns

`Promise`\<`void`\>

***

### delete()

> **delete**(): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:213](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L213)

#### Returns

`Promise`\<`void`\>

***

### edit()

> **edit**(`message`): `Promise`\<`APIMessage`\>

Defined in: [app/contexts/ModalSubmitContext.ts:209](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L209)

#### Parameters

##### message

`string` \| `MessageBuilder`

#### Returns

`Promise`\<`APIMessage`\>

***

### fetchState()

> **fetchState**(): `Promise`\<`void`\>

Defined in: [app/contexts/Base.ts:181](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L181)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseStatefulInteractionContext.fetchState`

***

### getAttachments()

> **getAttachments**(`customId`): `APIAttachment`[] \| `undefined`

Defined in: [app/contexts/ModalSubmitContext.ts:115](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L115)

Get the uploaded attachments of a File Upload component, resolved via the interaction's resolved data.

#### Parameters

##### customId

`string`

#### Returns

`APIAttachment`[] \| `undefined`

***

### getCheckbox()

> **getCheckbox**(`customId`): `boolean` \| `undefined`

Defined in: [app/contexts/ModalSubmitContext.ts:105](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L105)

Get the checked state of a Checkbox component.

#### Parameters

##### customId

`string`

#### Returns

`boolean` \| `undefined`

***

### getCheckboxGroupValues()

> **getCheckboxGroupValues**(`customId`): `string`[] \| `undefined`

Defined in: [app/contexts/ModalSubmitContext.ts:110](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L110)

Get the checked values of a Checkbox Group component. Empty array when none are checked.

#### Parameters

##### customId

`string`

#### Returns

`string`[] \| `undefined`

***

### getRadioValue()

> **getRadioValue**(`customId`): `string` \| `null` \| `undefined`

Defined in: [app/contexts/ModalSubmitContext.ts:100](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L100)

Get the selected value of a Radio Group component. Null when nothing was selected.

#### Parameters

##### customId

`string`

#### Returns

`string` \| `null` \| `undefined`

***

### getSelectValues()

> **getSelectValues**(`customId`): `string`[] \| `undefined`

Defined in: [app/contexts/ModalSubmitContext.ts:88](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L88)

Get the submitted values of any select menu component (string, user, role, mentionable or channel).

#### Parameters

##### customId

`string`

#### Returns

`string`[] \| `undefined`

***

### getTextInput()

> **getTextInput**(`customId`): `string` \| `undefined`

Defined in: [app/contexts/ModalSubmitContext.ts:83](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L83)

Get the submitted value of a Text Input component.

#### Parameters

##### customId

`string`

#### Returns

`string` \| `undefined`

***

### launchActivity()

> **launchActivity**(): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:128](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L128)

Launch your app's Activity in response to this modal submission.
Only available to apps with Activities enabled.

#### Returns

`Promise`\<`void`\>

***

### rawReply()

> **rawReply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/Base.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/Base.ts#L124)

#### Parameters

##### message

[`ModalSubmitResponse`](../type-aliases/ModalSubmitResponse.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseStatefulInteractionContext.rawReply`

***

### reply()

> **reply**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:170](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L170)

#### Parameters

##### message

`string` \| `APIInteractionResponseChannelMessageWithSource` \| `FormData` \| `MessageBuilder`

#### Returns

`Promise`\<`void`\>

***

### replyFollowup()

> **replyFollowup**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:180](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L180)

#### Parameters

##### message

`string` \| `APIInteractionResponseChannelMessageWithSource` \| `FormData` \| `MessageBuilder`

#### Returns

`Promise`\<`void`\>

***

### replyUpdate()

> **replyUpdate**(`message`): `Promise`\<`void`\>

Defined in: [app/contexts/ModalSubmitContext.ts:194](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L194)

Note: This is only supported when replying to a component interaction.

#### Parameters

##### message

`string` \| `APIInteractionResponseUpdateMessage` \| `FormData` \| `MessageBuilder`

#### Returns

`Promise`\<`void`\>

***

### send()

> **send**(`message`): `Promise`\<`APIMessage`\>

Defined in: [app/contexts/ModalSubmitContext.ts:205](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/contexts/ModalSubmitContext.ts#L205)

#### Parameters

##### message

`string` \| `MessageBuilder`

#### Returns

`Promise`\<`APIMessage`\>
