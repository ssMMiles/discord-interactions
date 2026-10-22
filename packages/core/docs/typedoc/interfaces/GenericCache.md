[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / GenericCache

# Interface: GenericCache

Defined in: [app/DiscordApplication.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L14)

Cache used to store component states. Redis is recommended.

## Properties

### get

> **get**: (`key`) => `Promise`\<`string` \| `null`\>

Defined in: [app/DiscordApplication.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L18)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### set

> **set**: (`key`, `ttl`, `value`) => `Promise`\<`string` \| `void`\>

Defined in: [app/DiscordApplication.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L19)

#### Parameters

##### key

`string`

##### ttl

`number`

##### value

`string`

#### Returns

`Promise`\<`string` \| `void`\>

***

### ttl?

> `optional` **ttl?**: `number`

Defined in: [app/DiscordApplication.ts:16](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/DiscordApplication.ts#L16)

Default Time To Live for cache entries, defaults to 900.
