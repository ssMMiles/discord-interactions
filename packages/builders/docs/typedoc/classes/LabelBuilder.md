[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / LabelBuilder

# Class: LabelBuilder

Defined in: [packages/builders/src/components/modal/LabelBuilder.ts:23](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/LabelBuilder.ts#L23)

Associates a label and optional description with a single interactive component. Modal-only.
This replaces Action Rows (and the Text Input label field) in modals.

## Constructors

### Constructor

> **new LabelBuilder**(`label?`, `component?`): `LabelBuilder`

Defined in: [packages/builders/src/components/modal/LabelBuilder.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/LabelBuilder.ts#L26)

#### Parameters

##### label?

`string`

##### component?

[`LabelChildBuilders`](../type-aliases/LabelChildBuilders.md)

#### Returns

`LabelBuilder`

#### Overrides

`ComponentBuilderBase<APILabelComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setComponent()

> **setComponent**(`component`): `this`

Defined in: [packages/builders/src/components/modal/LabelBuilder.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/LabelBuilder.ts#L52)

Sets the interactive component this label wraps

#### Parameters

##### component

[`LabelChildBuilders`](../type-aliases/LabelChildBuilders.md)

#### Returns

`this`

***

### setDescription()

> **setDescription**(`description`): `this`

Defined in: [packages/builders/src/components/modal/LabelBuilder.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/LabelBuilder.ts#L44)

Sets the description shown under the label (max 100 characters)

#### Parameters

##### description

`string`

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

### setLabel()

> **setLabel**(`label`): `this`

Defined in: [packages/builders/src/components/modal/LabelBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/LabelBuilder.ts#L36)

Sets the label text (max 45 characters)

#### Parameters

##### label

`string`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APILabelComponent`

Defined in: [packages/builders/src/components/modal/LabelBuilder.ts:57](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/modal/LabelBuilder.ts#L57)

#### Returns

`APILabelComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
