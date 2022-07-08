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

[core/src/app/DiscordApplication.ts:15](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L15)

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

[core/src/app/DiscordApplication.ts:17](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L17)

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

[core/src/app/DiscordApplication.ts:18](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/DiscordApplication.ts#L18)
