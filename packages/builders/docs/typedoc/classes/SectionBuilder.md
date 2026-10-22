[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SectionBuilder

# Class: SectionBuilder

Defined in: [packages/builders/src/components/v2/SectionBuilder.ts:13](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SectionBuilder.ts#L13)

Associates 1-3 Text Display components with a Button or Thumbnail accessory. Message-only (Components V2).

## Constructors

### Constructor

> **new SectionBuilder**(...`components`): `SectionBuilder`

Defined in: [packages/builders/src/components/v2/SectionBuilder.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SectionBuilder.ts#L17)

#### Parameters

##### components

...(`string` \| [`TextDisplayBuilder`](TextDisplayBuilder.md))[]

#### Returns

`SectionBuilder`

#### Overrides

`ComponentBuilderBase<APISectionComponent>.constructor`

## Properties

### components

> `readonly` **components**: [`TextDisplayBuilder`](TextDisplayBuilder.md)[] = `[]`

Defined in: [packages/builders/src/components/v2/SectionBuilder.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SectionBuilder.ts#L14)

***

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### addText()

> **addText**(...`components`): `this`

Defined in: [packages/builders/src/components/v2/SectionBuilder.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SectionBuilder.ts#L27)

Adds Text Display components to this section (max 3)

#### Parameters

##### components

...(`string` \| [`TextDisplayBuilder`](TextDisplayBuilder.md))[]

Text Display builders, or plain strings

#### Returns

`this`

***

### setAccessory()

> **setAccessory**(`accessory`): `this`

Defined in: [packages/builders/src/components/v2/SectionBuilder.ts:39](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SectionBuilder.ts#L39)

Sets the accessory shown beside this section's text

#### Parameters

##### accessory

[`SectionAccessoryBuilder`](../type-aliases/SectionAccessoryBuilder.md)

A Button or Thumbnail builder

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

> **toJSON**(): `APISectionComponent`

Defined in: [packages/builders/src/components/v2/SectionBuilder.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SectionBuilder.ts#L44)

#### Returns

`APISectionComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
