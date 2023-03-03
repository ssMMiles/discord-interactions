[@discord-interactions/core](../README.md) / [Exports](../modules.md) / GenericCache

# Interface: GenericCache

Cache used to store component states. Redis is recommended.

## Table of contents

### Properties

- [get](GenericCache.md#get)
- [set](GenericCache.md#set)
- [ttl](GenericCache.md#ttl)

## Properties

### get

• **get**: (`key`: `string`) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`key`): `Promise`<``null`` \| `string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[app/DiscordApplication.ts:17](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/DiscordApplication.ts#L17)

___

### set

• **set**: (`key`: `string`, `ttl`: `number`, `value`: `string`) => `Promise`<`string` \| `void`\>

#### Type declaration

▸ (`key`, `ttl`, `value`): `Promise`<`string` \| `void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `ttl` | `number` |
| `value` | `string` |

##### Returns

`Promise`<`string` \| `void`\>

#### Defined in

[app/DiscordApplication.ts:18](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/DiscordApplication.ts#L18)

___

### ttl

• `Optional` **ttl**: `number`

Default Time To Live for cache entries, defaults to 900.

#### Defined in

[app/DiscordApplication.ts:15](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/core/src/app/DiscordApplication.ts#L15)
