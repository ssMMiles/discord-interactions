[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / ModalBuilder

# Class: ModalBuilder

Defined in: [packages/builders/src/responses/ModalBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L18)

## Constructors

### Constructor

> **new ModalBuilder**(`id`, `title?`): `ModalBuilder`

Defined in: [packages/builders/src/responses/ModalBuilder.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L21)

#### Parameters

##### id

`string` \| `APIModalInteractionResponseCallbackData`

##### title?

`string`

#### Returns

`ModalBuilder`

## Properties

### data

> **data**: `Partial`\<`APIModalInteractionResponseCallbackData`\>

Defined in: [packages/builders/src/responses/ModalBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L19)

## Methods

### addComponents()

> **addComponents**(...`components`): `ModalBuilder`

Defined in: [packages/builders/src/responses/ModalBuilder.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L43)

Adds top-level components to this modal (1-5 total).
Interactive components must be wrapped in a Label component; Action Rows are deprecated.

#### Parameters

##### components

...[`ModalTopLevelComponentBuilders`](../type-aliases/ModalTopLevelComponentBuilders.md)[]

#### Returns

`ModalBuilder`

***

### setComponents()

> **setComponents**(`components?`): `ModalBuilder`

Defined in: [packages/builders/src/responses/ModalBuilder.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L54)

#### Parameters

##### components?

`APIModalInteractionResponseCallbackComponent`[] = `[]`

#### Returns

`ModalBuilder`

***

### setCustomId()

> **setCustomId**(`id`): `this`

Defined in: [packages/builders/src/responses/ModalBuilder.ts:29](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L29)

#### Parameters

##### id

`string`

#### Returns

`this`

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [packages/builders/src/responses/ModalBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L34)

#### Parameters

##### title

`string`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIModalInteractionResponseCallbackData`

Defined in: [packages/builders/src/responses/ModalBuilder.ts:60](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/ModalBuilder.ts#L60)

#### Returns

`APIModalInteractionResponseCallbackData`
