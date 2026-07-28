[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SeparatorBuilder

# Class: SeparatorBuilder

Defined in: [packages/builders/src/components/v2/SeparatorBuilder.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SeparatorBuilder.ts#L10)

Adds vertical spacing (and optionally a divider line) between components. Message-only (Components V2).

## Constructors

### Constructor

> **new SeparatorBuilder**(`spacing?`, `divider?`): `SeparatorBuilder`

Defined in: [packages/builders/src/components/v2/SeparatorBuilder.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SeparatorBuilder.ts#L11)

#### Parameters

##### spacing?

[`SeparatorSpacingSize`](../enumerations/SeparatorSpacingSize.md)

##### divider?

`boolean`

#### Returns

`SeparatorBuilder`

#### Overrides

`ComponentBuilderBase<APISeparatorComponent>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setDivider()

> **setDivider**(`divider?`): `this`

Defined in: [packages/builders/src/components/v2/SeparatorBuilder.ts:21](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SeparatorBuilder.ts#L21)

Sets whether a divider line is shown (defaults to true on Discord's side)

#### Parameters

##### divider?

`boolean` = `true`

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

### setSpacing()

> **setSpacing**(`spacing`): `this`

Defined in: [packages/builders/src/components/v2/SeparatorBuilder.ts:30](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SeparatorBuilder.ts#L30)

Sets the spacing size

#### Parameters

##### spacing

[`SeparatorSpacingSize`](../enumerations/SeparatorSpacingSize.md)

Small (1) or Large (2)

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APISeparatorComponent`

Defined in: [packages/builders/src/components/v2/SeparatorBuilder.ts:35](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/v2/SeparatorBuilder.ts#L35)

#### Returns

`APISeparatorComponent`

#### Overrides

`ComponentBuilderBase.toJSON`
