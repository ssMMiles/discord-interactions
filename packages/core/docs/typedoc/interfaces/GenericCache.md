[@discord-interactions/core](../README.md) / [Exports](../modules.md) / GenericCache

# Interface: GenericCache

## Table of contents

### Properties

- [ttl](GenericCache.md#ttl)

### Methods

- [get](GenericCache.md#get)
- [set](GenericCache.md#set)

## Properties

### ttl

• `Optional` **ttl**: `number`

#### Defined in

[app/DiscordApplication.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/DiscordApplication.ts#L14)

## Methods

### get

▸ **get**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[app/DiscordApplication.ts:16](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/DiscordApplication.ts#L16)

___

### set

▸ **set**(`key`, `ttl`, `value`): `Promise`<`string` \| `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `ttl` | `number` |
| `value` | `string` |

#### Returns

`Promise`<`string` \| `void`\>

#### Defined in

[app/DiscordApplication.ts:17](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/DiscordApplication.ts#L17)
