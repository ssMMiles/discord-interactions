[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / ComponentManager

# Class: ComponentManager

Defined in: [app/managers/ComponentManager.ts:6](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L6)

## Constructors

### Constructor

> **new ComponentManager**(`cache?`): `ComponentManager`

Defined in: [app/managers/ComponentManager.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L14)

Create a new component manager, with an optional cache.

#### Parameters

##### cache?

[`GenericCache`](../interfaces/GenericCache.md)

Cache to use for storing large state objects

#### Returns

`ComponentManager`

## Properties

### cache?

> `optional` **cache?**: [`GenericCache`](../interfaces/GenericCache.md)

Defined in: [app/managers/ComponentManager.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L14)

Cache to use for storing large state objects

## Methods

### createInstance()

> **createInstance**\<`Builder`\>(`name`, `data?`, `ttl?`): `Promise`\<`Builder`\>

Defined in: [app/managers/ComponentManager.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L36)

#### Type Parameters

##### Builder

`Builder` *extends* `ButtonBuilder` \| `SelectMenuBuilders` \| `ModalBuilder` = `ButtonBuilder` \| `SelectMenuBuilders`

#### Parameters

##### name

`string`

##### data?

`object` = `{}`

##### ttl?

`number` = `...`

#### Returns

`Promise`\<`Builder`\>

***

### get()

> **get**(`name`): [`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md) \| `undefined`

Defined in: [app/managers/ComponentManager.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L22)

#### Parameters

##### name

`string`

#### Returns

[`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md) \| `undefined`

***

### has()

> **has**(`name`): `boolean`

Defined in: [app/managers/ComponentManager.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L18)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### register()

> **register**(...`components`): `void`

Defined in: [app/managers/ComponentManager.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L26)

#### Parameters

##### components

...([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

#### Returns

`void`

***

### unregister()

> **unregister**(`name`): `void`

Defined in: [app/managers/ComponentManager.ts:32](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/managers/ComponentManager.ts#L32)

#### Parameters

##### name

`string`

#### Returns

`void`
