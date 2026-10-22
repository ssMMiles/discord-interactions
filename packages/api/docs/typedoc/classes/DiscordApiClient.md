[**@discord-interactions/api**](../README.md)

***

[@discord-interactions/api](../globals.md) / DiscordApiClient

# Class: DiscordApiClient

Defined in: [api/src/client.ts:50](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L50)

## Extends

- `default`

## Constructors

### Constructor

> **new DiscordApiClient**(`options?`): `DiscordApiClient`

Defined in: request/dist/src/client.d.ts:5

#### Parameters

##### options?

`ManagerArgs`

#### Returns

`DiscordApiClient`

#### Inherited from

`Client.constructor`

## Properties

### consumeEntitlement

> **consumeEntitlement**: (`this`, `applicationId`, `entitlementId`) => `Promise`\<`never`\>

Defined in: [api/src/client.ts:88](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L88)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### entitlementId

`string`

#### Returns

`Promise`\<`never`\>

***

### createApplicationEmoji

> **createApplicationEmoji**: (`this`, `applicationId`, `data`) => `Promise`\<`APIApplicationEmoji`\>

Defined in: [api/src/client.ts:81](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L81)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### data

`RESTPostAPIApplicationEmojiJSONBody`

#### Returns

`Promise`\<`APIApplicationEmoji`\>

***

### createDm

> **createDm**: (`this`, `userId`) => `Promise`\<`RESTPostAPICurrentUserCreateDMChannelJSONBody`\>

Defined in: [api/src/client.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L124)

#### Parameters

##### this

`DiscordApiClient`

##### userId

`string`

#### Returns

`Promise`\<`RESTPostAPICurrentUserCreateDMChannelJSONBody`\>

***

### createMessage

> **createMessage**: (`this`, `channelId`, `data`) => `Promise`\<`APIMessage`\>

Defined in: [api/src/client.ts:99](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L99)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### data

`RESTPostAPIChannelMessageJSONBody`

#### Returns

`Promise`\<`APIMessage`\>

***

### createTestEntitlement

> **createTestEntitlement**: (`this`, `applicationId`, `data`) => `Promise`\<`Partial`\<`Omit`\<`APIEntitlement`, `"ends_at"` \| `"starts_at"`\>\>\>

Defined in: [api/src/client.ts:89](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L89)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### data

`RESTPostAPIEntitlementJSONBody`

#### Returns

`Promise`\<`Partial`\<`Omit`\<`APIEntitlement`, `"ends_at"` \| `"starts_at"`\>\>\>

***

### deleteApplicationCommand

> **deleteApplicationCommand**: (`this`, `applicationId`, `commandId`, `guildId?`) => `Promise`\<`unknown`\>

Defined in: [api/src/client.ts:63](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L63)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### commandId

`string`

##### guildId?

`string`

#### Returns

`Promise`\<`unknown`\>

***

### deleteApplicationEmoji

> **deleteApplicationEmoji**: (`this`, `applicationId`, `emojiId`) => `Promise`\<`never`\>

Defined in: [api/src/client.ts:83](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L83)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### emojiId

`string`

#### Returns

`Promise`\<`never`\>

***

### deleteInteractionFollowup

> **deleteInteractionFollowup**: (`this`, `applicationId`, `interactionToken`, `id`) => `Promise`\<`undefined`\>

Defined in: [api/src/client.ts:72](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L72)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### interactionToken

`string`

##### id

`string`

#### Returns

`Promise`\<`undefined`\>

***

### deleteMessage

> **deleteMessage**: (`this`, `channelId`, `messageId`) => `Promise`\<`never`\>

Defined in: [api/src/client.ts:101](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L101)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

#### Returns

`Promise`\<`never`\>

***

### deleteTestEntitlement

> **deleteTestEntitlement**: (`this`, `applicationId`, `entitlementId`) => `Promise`\<`never`\>

Defined in: [api/src/client.ts:90](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L90)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### entitlementId

`string`

#### Returns

`Promise`\<`never`\>

***

### editApplicationEmoji

> **editApplicationEmoji**: (`this`, `applicationId`, `emojiId`, `data`) => `Promise`\<`APIApplicationEmoji`\>

Defined in: [api/src/client.ts:82](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L82)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### emojiId

`string`

##### data

`RESTPatchAPIApplicationEmojiJSONBody`

#### Returns

`Promise`\<`APIApplicationEmoji`\>

***

### editCurrentApplication

> **editCurrentApplication**: (`this`, `data`) => `Promise`\<`APIApplication`\>

Defined in: [api/src/client.ts:76](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L76)

Edit properties of the current application - including event_webhooks_url and
event_webhooks_types for receiving webhook events.

#### Parameters

##### this

`DiscordApiClient`

##### data

`RESTPatchCurrentApplicationJSONBody`

#### Returns

`Promise`\<`APIApplication`\>

***

### editMessage

> **editMessage**: (`this`, `channelId`, `messageId`, `data`) => `Promise`\<`APIMessage`\>

Defined in: [api/src/client.ts:100](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L100)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

##### data

`RESTPatchAPIChannelMessageJSONBody`

#### Returns

`Promise`\<`APIMessage`\>

***

### expirePoll

> **expirePoll**: (`this`, `channelId`, `messageId`) => `Promise`\<`APIMessage`\>

Defined in: [api/src/client.ts:110](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L110)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

#### Returns

`Promise`\<`APIMessage`\>

***

### getApplicationCommands

> **getApplicationCommands**: (`this`, `applicationId`, `guildId?`) => `Promise`\<`RESTGetAPIApplicationCommandsResult`\>

Defined in: [api/src/client.ts:59](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L59)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### guildId?

`string`

#### Returns

`Promise`\<`RESTGetAPIApplicationCommandsResult`\>

***

### getApplicationEmoji

> **getApplicationEmoji**: (`this`, `applicationId`, `emojiId`) => `Promise`\<`APIApplicationEmoji`\>

Defined in: [api/src/client.ts:80](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L80)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### emojiId

`string`

#### Returns

`Promise`\<`APIApplicationEmoji`\>

***

### getApplicationEmojis

> **getApplicationEmojis**: (`this`, `applicationId`) => `Promise`\<`RESTGetAPIApplicationEmojisResult`\>

Defined in: [api/src/client.ts:79](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L79)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

#### Returns

`Promise`\<`RESTGetAPIApplicationEmojisResult`\>

***

### getChannelMessage

> **getChannelMessage**: (`this`, `channelId`, `messageId`) => `Promise`\<`APIMessage`\>

Defined in: [api/src/client.ts:98](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L98)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

#### Returns

`Promise`\<`APIMessage`\>

***

### getChannelMessagePins

> **getChannelMessagePins**: (`this`, `channelId`, `query?`) => `Promise`\<`RESTGetAPIChannelMessagesPinsResult`\>

Defined in: [api/src/client.ts:104](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L104)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### query?

`RESTGetAPIChannelMessagesPinsQuery`

#### Returns

`Promise`\<`RESTGetAPIChannelMessagesPinsResult`\>

***

### getChannelMessages

> **getChannelMessages**: (`this`, `channelId`, `query?`) => `Promise`\<`RESTGetAPIChannelMessagesResult`\>

Defined in: [api/src/client.ts:97](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L97)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### query?

`RESTGetAPIChannelMessagesQuery`

#### Returns

`Promise`\<`RESTGetAPIChannelMessagesResult`\>

***

### getCurrentApplication

> **getCurrentApplication**: (`this`) => `Promise`\<`APIApplication`\>

Defined in: [api/src/client.ts:75](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L75)

#### Parameters

##### this

`DiscordApiClient`

#### Returns

`Promise`\<`APIApplication`\>

***

### getCurrentBotApplication

> **getCurrentBotApplication**: (`this`) => `Promise`\<`APIApplication`\>

Defined in: [api/src/client.ts:127](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L127)

#### Parameters

##### this

`DiscordApiClient`

#### Returns

`Promise`\<`APIApplication`\>

***

### getCurrentUser

> **getCurrentUser**: (`this`) => `Promise`\<`APIUser`\>

Defined in: [api/src/client.ts:115](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L115)

#### Parameters

##### this

`DiscordApiClient`

#### Returns

`Promise`\<`APIUser`\>

***

### getCurrentUserConnections

> **getCurrentUserConnections**: (`this`) => `Promise`\<`RESTGetAPICurrentUserConnectionsResult`\>

Defined in: [api/src/client.ts:118](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L118)

#### Parameters

##### this

`DiscordApiClient`

#### Returns

`Promise`\<`RESTGetAPICurrentUserConnectionsResult`\>

***

### getCurrentUserGuildMember

> **getCurrentUserGuildMember**: (`this`, `guildId`) => `Promise`\<`APIGuildMember`\>

Defined in: [api/src/client.ts:121](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L121)

#### Parameters

##### this

`DiscordApiClient`

##### guildId

`string`

#### Returns

`Promise`\<`APIGuildMember`\>

***

### getCurrentUserGuilds

> **getCurrentUserGuilds**: (`this`, `query?`) => `Promise`\<`RESTGetAPICurrentUserGuildsResult`\>

Defined in: [api/src/client.ts:120](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L120)

#### Parameters

##### this

`DiscordApiClient`

##### query?

`RESTGetAPICurrentUserGuildsQuery`

#### Returns

`Promise`\<`RESTGetAPICurrentUserGuildsResult`\>

***

### getEntitlement

> **getEntitlement**: (`this`, `applicationId`, `entitlementId`) => `Promise`\<`APIEntitlement`\>

Defined in: [api/src/client.ts:87](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L87)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### entitlementId

`string`

#### Returns

`Promise`\<`APIEntitlement`\>

***

### getEntitlements

> **getEntitlements**: (`this`, `applicationId`, `query?`) => `Promise`\<`RESTGetAPIEntitlementsResult`\>

Defined in: [api/src/client.ts:86](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L86)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### query?

`RESTGetAPIEntitlementsQuery`

#### Returns

`Promise`\<`RESTGetAPIEntitlementsResult`\>

***

### getGuild

> **getGuild**: (`this`, `id`, `query?`) => `Promise`\<`APIGuild`\>

Defined in: [api/src/client.ts:65](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L65)

#### Parameters

##### this

`DiscordApiClient`

##### id

`string`

##### query?

`RESTGetAPIGuildQuery`

#### Returns

`Promise`\<`APIGuild`\>

***

### getPollAnswerVoters

> **getPollAnswerVoters**: (`this`, `channelId`, `messageId`, `answerId`, `query?`) => `Promise`\<`RESTGetAPIPollAnswerVotersResult`\>

Defined in: [api/src/client.ts:109](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L109)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

##### answerId

`number`

##### query?

`RESTGetAPIPollAnswerVotersQuery`

#### Returns

`Promise`\<`RESTGetAPIPollAnswerVotersResult`\>

***

### getSKUs

> **getSKUs**: (`this`, `applicationId`) => `Promise`\<`RESTGetAPISKUsResult`\>

Defined in: [api/src/client.ts:92](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L92)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

#### Returns

`Promise`\<`RESTGetAPISKUsResult`\>

***

### getSKUSubscription

> **getSKUSubscription**: (`this`, `skuId`, `subscriptionId`) => `Promise`\<`APISubscription`\>

Defined in: [api/src/client.ts:94](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L94)

#### Parameters

##### this

`DiscordApiClient`

##### skuId

`string`

##### subscriptionId

`string`

#### Returns

`Promise`\<`APISubscription`\>

***

### getSKUSubscriptions

> **getSKUSubscriptions**: (`this`, `skuId`, `query?`) => `Promise`\<`RESTGetAPISKUSubscriptionsResult`\>

Defined in: [api/src/client.ts:93](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L93)

#### Parameters

##### this

`DiscordApiClient`

##### skuId

`string`

##### query?

`RESTGetAPISKUSubscriptionsQuery`

#### Returns

`Promise`\<`RESTGetAPISKUSubscriptionsResult`\>

***

### getUser

> **getUser**: (`this`, `userId?`) => `Promise`\<`APIUser`\>

Defined in: [api/src/client.ts:113](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L113)

#### Parameters

##### this

`DiscordApiClient`

##### userId?

`string`

#### Returns

`Promise`\<`APIUser`\>

***

### leaveGuild

> **leaveGuild**: (`this`, `guildId`) => `Promise`\<`void`\>

Defined in: [api/src/client.ts:123](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L123)

#### Parameters

##### this

`DiscordApiClient`

##### guildId

`string`

#### Returns

`Promise`\<`void`\>

***

### modifyCurrentUser

> **modifyCurrentUser**: (`this`, `data`) => `Promise`\<`APIUser`\>

Defined in: [api/src/client.ts:116](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L116)

#### Parameters

##### this

`DiscordApiClient`

##### data

`RESTPatchAPICurrentUserJSONBody`

#### Returns

`Promise`\<`APIUser`\>

***

### patchApplicationCommand

> **patchApplicationCommand**: (`this`, `applicationId`, `commandId`, `command`, `guildId?`) => `Promise`\<`APIApplicationCommand`\>

Defined in: [api/src/client.ts:62](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L62)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### commandId

`string`

##### command

`RESTPatchAPIApplicationCommandJSONBody`

##### guildId?

`string`

#### Returns

`Promise`\<`APIApplicationCommand`\>

***

### patchInteractionFollowup

> **patchInteractionFollowup**: (`this`, `applicationId`, `interactionToken`, `id`, `data`, `withComponents?`) => `Promise`\<`APIMessage`\>

Defined in: [api/src/client.ts:71](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L71)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### interactionToken

`string`

##### id

`string`

##### data

`RESTPatchAPIWebhookWithTokenMessageJSONBody`

##### withComponents?

`boolean`

#### Returns

`Promise`\<`APIMessage`\>

***

### pinMessage

> **pinMessage**: (`this`, `channelId`, `messageId`) => `Promise`\<`never`\>

Defined in: [api/src/client.ts:105](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L105)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

#### Returns

`Promise`\<`never`\>

***

### postApplicationCommand

> **postApplicationCommand**: (`this`, `applicationId`, `command`, `guildId?`) => `Promise`\<`APIApplicationCommand`\>

Defined in: [api/src/client.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L61)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### command

`RESTPostAPIApplicationCommandsJSONBody`

##### guildId?

`string`

#### Returns

`Promise`\<`APIApplicationCommand`\>

***

### postInteractionCallback

> **postInteractionCallback**: (`this`, `interactionId`, `interactionToken`, `data`, `withResponse?`) => `Promise`\<`RESTPostAPIInteractionCallbackWithResponseResult` \| `undefined`\>

Defined in: [api/src/client.ts:68](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L68)

Respond to an interaction via the REST callback endpoint (rather than the HTTP response body).
Pass withResponse to receive the created resource (message/activity instance) back.

#### Parameters

##### this

`DiscordApiClient`

##### interactionId

`string`

##### interactionToken

`string`

##### data

`APIInteractionResponse`

##### withResponse?

`boolean`

#### Returns

`Promise`\<`RESTPostAPIInteractionCallbackWithResponseResult` \| `undefined`\>

***

### postInteractionFollowup

> **postInteractionFollowup**: (`this`, `applicationId`, `interactionToken`, `data`, `withComponents?`) => `Promise`\<`APIMessage`\>

Defined in: [api/src/client.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L70)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### interactionToken

`string`

##### data

`RESTPostAPIInteractionFollowupJSONBody`

##### withComponents?

`boolean`

#### Returns

`Promise`\<`APIMessage`\>

***

### putApplicationCommands

> **putApplicationCommands**: (`this`, `applicationId`, `commands`, `guildId?`) => `Promise`\<`RESTPutAPIApplicationCommandsResult`\>

Defined in: [api/src/client.ts:60](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L60)

#### Parameters

##### this

`DiscordApiClient`

##### applicationId

`string`

##### commands

`RESTPutAPIApplicationCommandsJSONBody`

##### guildId?

`string`

#### Returns

`Promise`\<`RESTPutAPIApplicationCommandsResult`\>

***

### searchGuildMessages

> **searchGuildMessages**: (`this`, `id`, `query`) => `Promise`\<\{ `messages`: `APIMessage`[]; \}\>

Defined in: [api/src/client.ts:66](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L66)

Search a guild's messages. Requires READ_MESSAGE_HISTORY and the message content intent.
Returns 202 with error code 110000 while the guild's messages are still being indexed.

#### Parameters

##### this

`DiscordApiClient`

##### id

`string`

##### query

`RESTGetAPIGuildMessagesSearchQuery`

#### Returns

`Promise`\<\{ `messages`: `APIMessage`[]; \}\>

***

### unpinMessage

> **unpinMessage**: (`this`, `channelId`, `messageId`) => `Promise`\<`never`\>

Defined in: [api/src/client.ts:106](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L106)

#### Parameters

##### this

`DiscordApiClient`

##### channelId

`string`

##### messageId

`string`

#### Returns

`Promise`\<`never`\>

## Accessors

### abortSignal

#### Get Signature

> **get** **abortSignal**(): `AbortSignal` \| `null` \| `undefined`

Defined in: request/dist/src/client.d.ts:9

##### Returns

`AbortSignal` \| `null` \| `undefined`

#### Set Signature

> **set** **abortSignal**(`signal`): `void`

Defined in: request/dist/src/client.d.ts:10

##### Parameters

###### signal

`AbortSignal` \| `null` \| `undefined`

##### Returns

`void`

#### Inherited from

`Client.abortSignal`

***

### api

#### Get Signature

> **get** **api**(): `object`

Defined in: request/dist/src/client.d.ts:13

##### Returns

`object`

###### api

> **api**: `string`

###### cdn

> **cdn**: `string`

###### version

> **version**: `number`

#### Set Signature

> **set** **api**(`__namedParameters`): `void`

Defined in: request/dist/src/client.d.ts:18

##### Parameters

###### \_\_namedParameters

###### api

`string`

###### cdn

`string`

###### version

`number`

##### Returns

`void`

#### Inherited from

`Client.api`

***

### callbacks

#### Get Signature

> **get** **callbacks**(): `object`

Defined in: request/dist/src/client.d.ts:41

##### Returns

`object`

###### onBucketSweep?

> `optional` **onBucketSweep?**: (`swept`) => `void`

###### Parameters

###### swept

`Map`\<`string`, `Bucket`\>

###### Returns

`void`

###### onQueueSweep?

> `optional` **onQueueSweep?**: (`swept`) => `void`

###### Parameters

###### swept

`Map`\<`string`, `Queue`\>

###### Returns

`void`

###### onRateLimit?

> `optional` **onRateLimit?**: (`data`) => `void`

###### Parameters

###### data

`RateLimitData`

###### Returns

`void`

###### onRequest?

> `optional` **onRequest?**: (`parameters`, `resource`, `init`, `retries`) => `void`

###### Parameters

###### parameters

`Route`

###### resource

`string`

###### init

`RequestInit`

###### retries

`number`

###### Returns

`void`

#### Set Signature

> **set** **callbacks**(`__namedParameters`): `void`

Defined in: request/dist/src/client.d.ts:47

##### Parameters

###### \_\_namedParameters

###### onBucketSweep?

(`swept`) => `void`

###### onQueueSweep?

(`swept`) => `void`

###### onRateLimit?

(`data`) => `void`

###### onRequest?

(`parameters`, `resource`, `init`, `retries`) => `void`

##### Returns

`void`

#### Inherited from

`Client.callbacks`

***

### globalRequestsPerSecond

#### Get Signature

> **get** **globalRequestsPerSecond**(): `number`

Defined in: request/dist/src/client.d.ts:11

##### Returns

`number`

#### Set Signature

> **set** **globalRequestsPerSecond**(`value`): `void`

Defined in: request/dist/src/client.d.ts:12

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`Client.globalRequestsPerSecond`

***

### requestConfig

#### Get Signature

> **get** **requestConfig**(): `object`

Defined in: request/dist/src/client.d.ts:23

##### Returns

`object`

###### headers

> **headers**: `Record`\<`string`, `string`\>

###### retries

> **retries**: `number`

###### timeout

> **timeout**: `number`

#### Set Signature

> **set** **requestConfig**(`__namedParameters`): `void`

Defined in: request/dist/src/client.d.ts:28

##### Parameters

###### \_\_namedParameters

###### headers

`Record`\<`string`, `string`\>

###### retries

`number`

###### timeout

`number`

##### Returns

`void`

#### Inherited from

`Client.requestConfig`

***

### sweepIntervals

#### Get Signature

> **get** **sweepIntervals**(): `object`

Defined in: request/dist/src/client.d.ts:33

##### Returns

`object`

###### bucketSweepInterval

> **bucketSweepInterval**: `number`

###### queueSweepInterval

> **queueSweepInterval**: `number`

#### Set Signature

> **set** **sweepIntervals**(`__namedParameters`): `void`

Defined in: request/dist/src/client.d.ts:37

##### Parameters

###### \_\_namedParameters

###### bucketSweepInterval

`number`

###### queueSweepInterval

`number`

##### Returns

`void`

#### Inherited from

`Client.sweepIntervals`

***

### userAgent

#### Get Signature

> **get** **userAgent**(): `string`

Defined in: [api/src/client.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L51)

##### Returns

`string`

#### Set Signature

> **set** **userAgent**(`value`): `void`

Defined in: [api/src/client.ts:55](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/api/src/client.ts#L55)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

`Client.userAgent`

## Methods

### delete()

> **delete**(`path`, `options?`): `Promise`\<`unknown`\>

Defined in: request/dist/src/client.d.ts:57

#### Parameters

##### path

`string`

##### options?

`RequestOptions`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Client.delete`

***

### get()

> **get**(`path`, `options?`): `Promise`\<`unknown`\>

Defined in: request/dist/src/client.d.ts:53

#### Parameters

##### path

`string`

##### options?

`RequestOptions`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Client.get`

***

### patch()

> **patch**(`path`, `options?`): `Promise`\<`unknown`\>

Defined in: request/dist/src/client.d.ts:56

#### Parameters

##### path

`string`

##### options?

`RequestOptions`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Client.patch`

***

### post()

> **post**(`path`, `options?`): `Promise`\<`unknown`\>

Defined in: request/dist/src/client.d.ts:54

#### Parameters

##### path

`string`

##### options?

`RequestOptions`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Client.post`

***

### put()

> **put**(`path`, `options?`): `Promise`\<`unknown`\>

Defined in: request/dist/src/client.d.ts:55

#### Parameters

##### path

`string`

##### options?

`RequestOptions`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Client.put`

***

### setToken()

> **setToken**(`token`): `this`

Defined in: request/dist/src/client.d.ts:6

#### Parameters

##### token

`string`

#### Returns

`this`

#### Inherited from

`Client.setToken`
