[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / ContainerBuilder

# Class: ContainerBuilder

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L22)

Visually groups a set of components, with an optional accent color bar. Message-only (Components V2).

## Constructors

### Constructor

> **new ContainerBuilder**(...`components`): `ContainerBuilder`

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:25](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L25)

#### Parameters

##### components

...(`string` \| [`ContainerChildBuilders`](../type-aliases/ContainerChildBuilders.md))[]

#### Returns

`ContainerBuilder`

#### Overrides

`ComponentBuilderBase<APIContainerComponent>.constructor`

## Properties

### components

> `readonly` **components**: [`ContainerChildBuilders`](../type-aliases/ContainerChildBuilders.md)[] = `[]`

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:23](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L23)

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

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L34)

Adds child components to this container. Strings become Text Display components.

#### Parameters

##### components

...(`string` \| [`ContainerChildBuilders`](../type-aliases/ContainerChildBuilders.md))[]

#### Returns

`this`

***

### setAccentColor()

> **setAccentColor**(`color`): `this`

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:46](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L46)

Sets the accent color shown on the container's left edge

#### Parameters

##### color

`number` \| `null`

An RGB color value (0x000000 - 0xFFFFFF)

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

### setSpoiler()

> **setSpoiler**(`spoiler?`): `this`

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L54)

Sets whether this container's contents are blurred as a spoiler

#### Parameters

##### spoiler?

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIContainerComponent`

Defined in: [packages/builders/src/components/v2/ContainerBuilder.ts:59](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/ContainerBuilder.ts#L59)

#### Returns

`APIContainerComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
