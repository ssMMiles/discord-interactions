[@discord-interactions/api](../README.md) / [Exports](../modules.md) / DiscordApiClient

# Class: DiscordApiClient

## Hierarchy

- `default`

  ↳ **`DiscordApiClient`**

## Table of contents

### Constructors

- [constructor](DiscordApiClient.md#constructor)

### Properties

- [deleteApplicationCommand](DiscordApiClient.md#deleteapplicationcommand)
- [deleteInteractionFollowup](DiscordApiClient.md#deleteinteractionfollowup)
- [getApplicationCommands](DiscordApiClient.md#getapplicationcommands)
- [getGuild](DiscordApiClient.md#getguild)
- [patchApplicationCommand](DiscordApiClient.md#patchapplicationcommand)
- [patchInteractionFollowup](DiscordApiClient.md#patchinteractionfollowup)
- [postApplicationCommand](DiscordApiClient.md#postapplicationcommand)
- [postInteractionFollowup](DiscordApiClient.md#postinteractionfollowup)
- [putApplicationCommands](DiscordApiClient.md#putapplicationcommands)

### Accessors

- [abortSignal](DiscordApiClient.md#abortsignal)
- [api](DiscordApiClient.md#api)
- [callbacks](DiscordApiClient.md#callbacks)
- [globalRequestsPerSecond](DiscordApiClient.md#globalrequestspersecond)
- [requestConfig](DiscordApiClient.md#requestconfig)
- [sweepIntervals](DiscordApiClient.md#sweepintervals)
- [userAgent](DiscordApiClient.md#useragent)

### Methods

- [delete](DiscordApiClient.md#delete)
- [get](DiscordApiClient.md#get)
- [patch](DiscordApiClient.md#patch)
- [post](DiscordApiClient.md#post)
- [put](DiscordApiClient.md#put)
- [setToken](DiscordApiClient.md#settoken)

## Constructors

### constructor

• **new DiscordApiClient**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ManagerArgs` |

#### Inherited from

Client.constructor

## Properties

### deleteApplicationCommand

• **deleteApplicationCommand**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `commandId`: `string`, `guildId?`: `string`) => `Promise`<`unknown`\> = `deleteApplicationCommand`

#### Type declaration

▸ (`this`, `applicationId`, `commandId`, `guildId?`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `commandId` | `string` |
| `guildId?` | `string` |

##### Returns

`Promise`<`unknown`\>

#### Defined in

[api/src/client.ts:26](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L26)

___

### deleteInteractionFollowup

• **deleteInteractionFollowup**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `interactionToken`: `string`, `id`: `string`) => `Promise`<`never`\> = `deleteInteractionFollowup`

#### Type declaration

▸ (`this`, `applicationId`, `interactionToken`, `id`): `Promise`<`never`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `interactionToken` | `string` |
| `id` | `string` |

##### Returns

`Promise`<`never`\>

#### Defined in

[api/src/client.ts:32](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L32)

___

### getApplicationCommands

• **getApplicationCommands**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `guildId?`: `string`) => `Promise`<`RESTGetAPIApplicationCommandsResult`\> = `getApplicationCommands`

#### Type declaration

▸ (`this`, `applicationId`, `guildId?`): `Promise`<`RESTGetAPIApplicationCommandsResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `guildId?` | `string` |

##### Returns

`Promise`<`RESTGetAPIApplicationCommandsResult`\>

#### Defined in

[api/src/client.ts:22](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L22)

___

### getGuild

• **getGuild**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `id`: `string`, `options`: { `counts?`: `boolean`  }) => `Promise`<`APIGuild`\> = `getGuild`

#### Type declaration

▸ (`this`, `id`, `options?`): `Promise`<`APIGuild`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `id` | `string` |
| `options` | `Object` |
| `options.counts?` | `boolean` |

##### Returns

`Promise`<`APIGuild`\>

#### Defined in

[api/src/client.ts:28](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L28)

___

### patchApplicationCommand

• **patchApplicationCommand**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `commandId`: `string`, `command`: `RESTPatchAPIApplicationCommandJSONBody`, `guildId?`: `string`) => `Promise`<`APIApplicationCommand`\> = `patchApplicationCommand`

#### Type declaration

▸ (`this`, `applicationId`, `commandId`, `command`, `guildId?`): `Promise`<`APIApplicationCommand`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `commandId` | `string` |
| `command` | `RESTPatchAPIApplicationCommandJSONBody` |
| `guildId?` | `string` |

##### Returns

`Promise`<`APIApplicationCommand`\>

#### Defined in

[api/src/client.ts:25](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L25)

___

### patchInteractionFollowup

• **patchInteractionFollowup**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `interactionToken`: `string`, `id`: `string`, `data`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`<`Nullable`<`Pick`<`AddUndefinedToPossiblyUndefinedPropertiesOfInterface`<{}\>, ``"content"`` \| ``"embeds"`` \| ``"allowed_mentions"`` \| ``"components"``\>\> & {}\>) => `Promise`<`APIMessage`\> = `patchInteractionFollowup`

#### Type declaration

▸ (`this`, `applicationId`, `interactionToken`, `id`, `data`): `Promise`<`APIMessage`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `interactionToken` | `string` |
| `id` | `string` |
| `data` | `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`<`Nullable`<`Pick`<`AddUndefinedToPossiblyUndefinedPropertiesOfInterface`<{}\>, ``"content"`` \| ``"embeds"`` \| ``"allowed_mentions"`` \| ``"components"``\>\> & {}\> |

##### Returns

`Promise`<`APIMessage`\>

#### Defined in

[api/src/client.ts:31](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L31)

___

### postApplicationCommand

• **postApplicationCommand**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `command`: `RESTPostAPIApplicationCommandsJSONBody`, `guildId?`: `string`) => `Promise`<`APIApplicationCommand`\> = `postApplicationCommand`

#### Type declaration

▸ (`this`, `applicationId`, `command`, `guildId?`): `Promise`<`APIApplicationCommand`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `command` | `RESTPostAPIApplicationCommandsJSONBody` |
| `guildId?` | `string` |

##### Returns

`Promise`<`APIApplicationCommand`\>

#### Defined in

[api/src/client.ts:24](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L24)

___

### postInteractionFollowup

• **postInteractionFollowup**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `interactionToken`: `string`, `data`: `APIInteractionResponseCallbackData`) => `Promise`<`APIMessage`\> = `postInteractionFollowup`

#### Type declaration

▸ (`this`, `applicationId`, `interactionToken`, `data`): `Promise`<`APIMessage`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `interactionToken` | `string` |
| `data` | `APIInteractionResponseCallbackData` |

##### Returns

`Promise`<`APIMessage`\>

#### Defined in

[api/src/client.ts:30](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L30)

___

### putApplicationCommands

• **putApplicationCommands**: (`this`: [`DiscordApiClient`](DiscordApiClient.md), `applicationId`: `string`, `commands`: `RESTPutAPIApplicationCommandsJSONBody`, `guildId?`: `string`) => `Promise`<`RESTPutAPIApplicationCommandsResult`\> = `putApplicationCommands`

#### Type declaration

▸ (`this`, `applicationId`, `commands`, `guildId?`): `Promise`<`RESTPutAPIApplicationCommandsResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApiClient`](DiscordApiClient.md) |
| `applicationId` | `string` |
| `commands` | `RESTPutAPIApplicationCommandsJSONBody` |
| `guildId?` | `string` |

##### Returns

`Promise`<`RESTPutAPIApplicationCommandsResult`\>

#### Defined in

[api/src/client.ts:23](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/api/src/client.ts#L23)

## Accessors

### abortSignal

• `get` **abortSignal**(): `undefined` \| ``null`` \| `AbortSignal`

#### Returns

`undefined` \| ``null`` \| `AbortSignal`

#### Inherited from

Client.abortSignal

• `set` **abortSignal**(`signal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `undefined` \| ``null`` \| `AbortSignal` |

#### Returns

`void`

#### Inherited from

Client.abortSignal

___

### api

• `get` **api**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `api` | `string` |
| `cdn` | `string` |
| `version` | `number` |

#### Inherited from

Client.api

• `set` **api**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.api` | `string` |
| `__namedParameters.cdn` | `string` |
| `__namedParameters.version` | `number` |

#### Returns

`void`

#### Inherited from

Client.api

___

### callbacks

• `get` **callbacks**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onBucketSweep?` | (`swept`: `Map`<`string`, `Bucket`\>) => `void` |
| `onQueueSweep?` | (`swept`: `Map`<`string`, `Queue`\>) => `void` |
| `onRateLimit?` | (`data`: `RateLimitData`) => `void` |
| `onRequest?` | (`parameters`: `Route`, `resource`: `string`, `init`: `RequestInit`, `retries`: `number`) => `void` |

#### Inherited from

Client.callbacks

• `set` **callbacks**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.onBucketSweep?` | (`swept`: `Map`<`string`, `Bucket`\>) => `void` |
| `__namedParameters.onQueueSweep?` | (`swept`: `Map`<`string`, `Queue`\>) => `void` |
| `__namedParameters.onRateLimit?` | (`data`: `RateLimitData`) => `void` |
| `__namedParameters.onRequest?` | (`parameters`: `Route`, `resource`: `string`, `init`: `RequestInit`, `retries`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

Client.callbacks

___

### globalRequestsPerSecond

• `get` **globalRequestsPerSecond**(): `number`

#### Returns

`number`

#### Inherited from

Client.globalRequestsPerSecond

• `set` **globalRequestsPerSecond**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Client.globalRequestsPerSecond

___

### requestConfig

• `get` **requestConfig**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `headers` | `Record`<`string`, `string`\> |
| `retries` | `number` |
| `timeout` | `number` |

#### Inherited from

Client.requestConfig

• `set` **requestConfig**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.headers` | `Record`<`string`, `string`\> |
| `__namedParameters.retries` | `number` |
| `__namedParameters.timeout` | `number` |

#### Returns

`void`

#### Inherited from

Client.requestConfig

___

### sweepIntervals

• `get` **sweepIntervals**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bucketSweepInterval` | `number` |
| `queueSweepInterval` | `number` |

#### Inherited from

Client.sweepIntervals

• `set` **sweepIntervals**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.bucketSweepInterval` | `number` |
| `__namedParameters.queueSweepInterval` | `number` |

#### Returns

`void`

#### Inherited from

Client.sweepIntervals

___

### userAgent

• `get` **userAgent**(): `string`

#### Returns

`string`

#### Overrides

Client.userAgent

• `set` **userAgent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Overrides

Client.userAgent

## Methods

### delete

▸ **delete**(`path`, `options?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `RequestOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Client.delete

___

### get

▸ **get**(`path`, `options?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `RequestOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Client.get

___

### patch

▸ **patch**(`path`, `options?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `RequestOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Client.patch

___

### post

▸ **post**(`path`, `options?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `RequestOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Client.post

___

### put

▸ **put**(`path`, `options?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `RequestOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Client.put

___

### setToken

▸ **setToken**(`token`): [`DiscordApiClient`](DiscordApiClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`DiscordApiClient`](DiscordApiClient.md)

#### Inherited from

Client.setToken
