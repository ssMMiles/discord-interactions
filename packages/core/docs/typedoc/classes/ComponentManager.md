[@discord-interactions/core](../README.md) / [Exports](../modules.md) / ComponentManager

# Class: ComponentManager

## Table of contents

### Constructors

- [constructor](ComponentManager.md#constructor)

### Properties

- [cache](ComponentManager.md#cache)

### Methods

- [createInstance](ComponentManager.md#createinstance)
- [get](ComponentManager.md#get)
- [has](ComponentManager.md#has)
- [register](ComponentManager.md#register)
- [unregister](ComponentManager.md#unregister)

## Constructors

### constructor

• **new ComponentManager**(`cache?`)

Create a new component manager, with an optional cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cache?` | [`GenericCache`](../interfaces/GenericCache.md) | Cache to use for storing large state objects |

## Properties

### cache

• `Optional` **cache**: [`GenericCache`](../interfaces/GenericCache.md)

#### Defined in

[app/managers/ComponentManager.ts:14](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/core/src/app/managers/ComponentManager.ts#L14)

## Methods

### createInstance

▸ **createInstance**<`Builder`\>(`name`, `data?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `object` |
| `ttl` | `number` |

#### Returns

`Promise`<`Builder`\>

___

### get

▸ **get**(`name`): `undefined` \| [`Component`](../modules.md#component) \| [`Modal`](Modal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Component`](../modules.md#component) \| [`Modal`](Modal.md)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### register

▸ **register**(...`components`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[] |

#### Returns

`void`

___

### unregister

▸ **unregister**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`
