[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / StringSelectMenu

# Class: StringSelectMenu

Defined in: [app/components/select\_menus/StringSelectMenu.ts:6](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/select_menus/StringSelectMenu.ts#L6)

## Extends

- [`ComponentBase`](ComponentBase.md)\<`APIStringSelectComponent`, `StringSelectMenuBuilder`, [`StringSelectMenuContext`](StringSelectMenuContext.md)\>

## Constructors

### Constructor

> **new StringSelectMenu**(`id`, `builder`, `handler?`): `StringSelectMenu`

Defined in: [app/components/select\_menus/StringSelectMenu.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/select_menus/StringSelectMenu.ts#L11)

#### Parameters

##### id

`string`

##### builder

`StringSelectMenuBuilder`

##### handler?

(`ctx`) => `Promise`\<`void`\>

#### Returns

`StringSelectMenu`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

### allowExpired

> **allowExpired**: `boolean` = `false`

Defined in: [app/components/Base.ts:16](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L16)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`allowExpired`](ComponentBase.md#allowexpired)

***

### builder

> **builder**: `StringSelectMenuBuilder`

Defined in: [app/handlers/HandledInteraction.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L4)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`builder`](ComponentBase.md#builder-1)

***

### components

> **components**: ([`Component`](../type-aliases/Component.md) \| [`Modal`](Modal.md))[]

Defined in: [app/handlers/HandledInteraction.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L11)

#### Inherited from

[`EntryPointCommand`](EntryPointCommand.md).[`components`](EntryPointCommand.md#components)

***

### handler

> **handler**: (`ctx`) => `Promise`\<`void`\>

Defined in: [app/handlers/HandledInteraction.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L9)

#### Parameters

##### ctx

[`StringSelectMenuContext`](StringSelectMenuContext.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`handler`](ComponentBase.md#handler)

***

### id

> **id**: `string`

Defined in: [app/components/Base.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L15)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`id`](ComponentBase.md#id)

***

### parentCommand?

> `optional` **parentCommand?**: `string`

Defined in: [app/components/Base.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L18)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`parentCommand`](ComponentBase.md#parentcommand)

## Accessors

### data

#### Get Signature

> **get** **data**(): `Data`

Defined in: [app/handlers/HandledInteraction.ts:5](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/HandledInteraction.ts#L5)

##### Returns

`Data`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`data`](ComponentBase.md#data-1)

## Methods

### createInstance()

> **createInstance**(`state`): `StringSelectMenuBuilder`

Defined in: [app/components/select\_menus/StringSelectMenu.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/select_menus/StringSelectMenu.ts#L21)

#### Parameters

##### state

`string`

#### Returns

`StringSelectMenuBuilder`

***

### setAllowExpired()

> **setAllowExpired**(`value`): `StringSelectMenu`

Defined in: [app/components/Base.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L40)

Set whether component execution should continue when state data has expired

#### Parameters

##### value

`boolean`

#### Returns

`StringSelectMenu`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`setAllowExpired`](ComponentBase.md#setallowexpired)

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

[`ComponentBase`](ComponentBase.md).[`setHandler`](ComponentBase.md#sethandler)

***

### setId()

> **setId**(`id`): `StringSelectMenu`

Defined in: [app/components/Base.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/components/Base.ts#L34)

Set the component ID

#### Parameters

##### id

`string`

#### Returns

`StringSelectMenu`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`setId`](ComponentBase.md#setid)
