[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / ComponentBase

# Abstract Class: ComponentBase\<Data, Builder, Context\>

Defined in: [app/components/Base.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L10)

## Extends

- `HandledInteraction`\<`Data`, `Builder`, `Context`\>

## Extended by

- [`Button`](Button.md)
- [`Modal`](Modal.md)
- [`ChannelSelectMenu`](ChannelSelectMenu.md)
- [`MentionableSelectMenu`](MentionableSelectMenu.md)
- [`RoleSelectMenu`](RoleSelectMenu.md)
- [`StringSelectMenu`](StringSelectMenu.md)
- [`UserSelectMenu`](UserSelectMenu.md)

## Type Parameters

### Data

`Data` *extends* [`APIActionRowComponentTypes`](../type-aliases/APIActionRowComponentTypes.md) \| `APIModalInteractionResponseCallbackData`

### Builder

`Builder` *extends* `object`

### Context

`Context`

## Constructors

### Constructor

> **new ComponentBase**\<`Data`, `Builder`, `Context`\>(`id`, `builder`, `handler`): `ComponentBase`\<`Data`, `Builder`, `Context`\>

Defined in: [app/components/Base.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L20)

#### Parameters

##### id

`string`

##### builder

`Builder`

##### handler

(`ctx`) => `Promise`\<`void`\>

#### Returns

`ComponentBase`\<`Data`, `Builder`, `Context`\>

#### Overrides

`HandledInteraction<Data, Builder, Context>.constructor`

## Properties

### allowExpired

> **allowExpired**: `boolean` = `false`

Defined in: [app/components/Base.ts:16](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L16)

***

### builder

> **builder**: `Builder`

Defined in: [app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L4)

#### Inherited from

`HandledInteraction.builder`

***

### components

> **components**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L11)

#### Inherited from

`HandledInteraction.components`

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L9)

#### Parameters

##### ctx

`Context`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`HandledInteraction.handler`

***

### id

> **id**: `string`

Defined in: [app/components/Base.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L15)

***

### parentCommand?

> `optional` **parentCommand?**: `string`

Defined in: [app/components/Base.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L18)

## Accessors

### data

#### Get Signature

> **get** **data**(): `Data`

Defined in: [app/handlers/HandledInteraction.ts:5](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L5)

##### Returns

`Data`

#### Inherited from

`HandledInteraction.data`

## Methods

### setAllowExpired()

> **setAllowExpired**(`value`): `ComponentBase`\<`Data`, `Builder`, `Context`\>

Defined in: [app/components/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L40)

Set whether component execution should continue when state data has expired

#### Parameters

##### value

`boolean`

#### Returns

`ComponentBase`\<`Data`, `Builder`, `Context`\>

***

### setHandler()

> **setHandler**(`handler`): `this`

Defined in: [app/handlers/HandledInteraction.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L20)

#### Parameters

##### handler

(`ctx`) => `Promise`\<`void`\>

#### Returns

`this`

#### Inherited from

`HandledInteraction.setHandler`

***

### setId()

> **setId**(`id`): `ComponentBase`\<`Data`, `Builder`, `Context`\>

Defined in: [app/components/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L34)

Set the component ID

#### Parameters

##### id

`string`

#### Returns

`ComponentBase`\<`Data`, `Builder`, `Context`\>
