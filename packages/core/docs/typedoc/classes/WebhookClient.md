[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / WebhookClient

# Class: WebhookClient

Defined in: [app/WebhookClient.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/WebhookClient.ts#L8)

## Constructors

### Constructor

> **new WebhookClient**(`id`, `token`, `rest?`): `WebhookClient`

Defined in: [app/WebhookClient.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/WebhookClient.ts#L14)

#### Parameters

##### id

`string`

##### token

`string`

##### rest?

`DiscordApiClient`

#### Returns

`WebhookClient`

## Methods

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [app/WebhookClient.ts:53](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/WebhookClient.ts#L53)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### edit()

> **edit**(`message`, `id`): `Promise`\<`APIMessage`\>

Defined in: [app/WebhookClient.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/WebhookClient.ts#L38)

#### Parameters

##### message

`string` \| `MessageBuilder`

##### id

`string`

#### Returns

`Promise`\<`APIMessage`\>

***

### send()

> **send**(`message`, `wait?`): `Promise`\<`APIMessage`\>

Defined in: [app/WebhookClient.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/WebhookClient.ts#L21)

#### Parameters

##### message

`string` \| `MessageBuilder`

##### wait?

`boolean` = `true`

#### Returns

`Promise`\<`APIMessage`\>
