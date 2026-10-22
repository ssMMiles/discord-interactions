[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / TextDisplayBuilder

# Class: TextDisplayBuilder

Defined in: [packages/builders/src/components/v2/TextDisplayBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/TextDisplayBuilder.ts#L8)

Displays markdown-formatted text. Usable in messages (Components V2) and as a top-level modal component.

## Constructors

### Constructor

> **new TextDisplayBuilder**(`content?`): `TextDisplayBuilder`

Defined in: [packages/builders/src/components/v2/TextDisplayBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/TextDisplayBuilder.ts#L9)

#### Parameters

##### content?

`string`

#### Returns

`TextDisplayBuilder`

#### Overrides

`ComponentBuilderBase<APITextDisplayComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setContent()

> **setContent**(`content`): `this`

Defined in: [packages/builders/src/components/v2/TextDisplayBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/TextDisplayBuilder.ts#L19)

Sets the markdown text to display

#### Parameters

##### content

`string`

Text to display, supports markdown and mentions

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

> **toJSON**(): `APITextDisplayComponent`

Defined in: [packages/builders/src/components/v2/TextDisplayBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/TextDisplayBuilder.ts#L24)

#### Returns

`APITextDisplayComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
