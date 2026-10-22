[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / ActionRowBuilder

# Class: ActionRowBuilder\<T\>

Defined in: [packages/builders/src/components/ActionRowBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ActionRowBuilder.ts#L18)

Represents an action row component

## Type Parameters

### T

`T` *extends* [`ComponentBuilders`](../type-aliases/ComponentBuilders.md) = [`MessageActionRowComponentBuilders`](../type-aliases/MessageActionRowComponentBuilders.md)

## Constructors

### Constructor

> **new ActionRowBuilder**\<`T`\>(`components?`): `ActionRowBuilder`\<`T`\>

Defined in: [packages/builders/src/components/ActionRowBuilder.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ActionRowBuilder.ts#L26)

#### Parameters

##### components?

`T`[]

#### Returns

`ActionRowBuilder`\<`T`\>

#### Overrides

ComponentBuilderBase\<APIActionRowComponent\<APIComponentInMessageActionRow /\* \| APIComponentInModalActionRow\*/\>\>.constructor

## Properties

### components

> `readonly` **components**: `T`[] = `[]`

Defined in: [packages/builders/src/components/ActionRowBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ActionRowBuilder.ts#L24)

The components within this action row

***

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### addComponents()

> **addComponents**(...`components`): `this`

Defined in: [packages/builders/src/components/ActionRowBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ActionRowBuilder.ts#L36)

Adds components to this action row.

#### Parameters

##### components

...`T`[]

The components to add to this action row.

#### Returns

`this`

***

### setComponents()

> **setComponents**(`components`): `this`

Defined in: [packages/builders/src/components/ActionRowBuilder.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ActionRowBuilder.ts#L45)

Sets the components in this action row

#### Parameters

##### components

`T`[]

The components to set this row to

#### Returns

`this`

***

### setId()

> **setId**(`id`): `this`

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L34)

Sets this component's optional 32-bit numeric identifier, unique within the message.
Discord generates sequential ids for components sent without one.

#### Parameters

##### id

`number`

#### Returns

`this`

#### Inherited from

`ComponentBuilderBase.setId`

***

### toJSON()

> **toJSON**(): `APIActionRowComponent`\<`ReturnType`\<`T`\[`"toJSON"`\]\>\>

Defined in: [packages/builders/src/components/ActionRowBuilder.ts:50](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ActionRowBuilder.ts#L50)

#### Returns

`APIActionRowComponent`\<`ReturnType`\<`T`\[`"toJSON"`\]\>\>

#### Overrides

`ComponentBuilderBase.toJSON`
