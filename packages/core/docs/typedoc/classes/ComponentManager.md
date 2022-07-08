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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cache?` | [`GenericCache`](../interfaces/GenericCache.md) |  |

#### Defined in

[app/managers/ComponentManager.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/ComponentManager.ts#L14)

## Properties

### cache

• `Optional` **cache**: [`GenericCache`](../interfaces/GenericCache.md)

## Methods

### createInstance

▸ **createInstance**<`Builder`\>(`name`, `data?`, `ttl?`): `Promise`<`Builder`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Builder` | extends `ButtonBuilder` \| `SelectMenuBuilder` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilder` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `object` |
| `ttl` | `number` |

#### Returns

`Promise`<`Builder`\>

#### Defined in

[app/managers/ComponentManager.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/ComponentManager.ts#L36)

___

### get

▸ **get**(`name`): `undefined` \| [`Component`](../modules.md#component) \| [`Modal`](Modal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Component`](../modules.md#component) \| [`Modal`](Modal.md)

#### Defined in

[app/managers/ComponentManager.ts:22](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/ComponentManager.ts#L22)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[app/managers/ComponentManager.ts:18](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/ComponentManager.ts#L18)

___

### register

▸ **register**(...`components`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | ([`Component`](../modules.md#component) \| [`Modal`](Modal.md))[] |

#### Returns

`void`

#### Defined in

[app/managers/ComponentManager.ts:26](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/ComponentManager.ts#L26)

___

### unregister

▸ **unregister**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[app/managers/ComponentManager.ts:32](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/ComponentManager.ts#L32)
