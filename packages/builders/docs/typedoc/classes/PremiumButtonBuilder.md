[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / PremiumButtonBuilder

# Class: PremiumButtonBuilder

Defined in: [packages/builders/src/components/ButtonBuilder.ts:112](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L112)

A premium (SKU) button. Premium buttons have no custom_id, label, url or emoji,
and clicking one opens the SKU's purchase flow instead of sending an interaction.

## Constructors

### Constructor

> **new PremiumButtonBuilder**(`skuId?`): `PremiumButtonBuilder`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:113](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L113)

#### Parameters

##### skuId?

`string`

#### Returns

`PremiumButtonBuilder`

#### Overrides

`ComponentBuilderBase<APIButtonComponentWithSKUId>.constructor`

## Properties

### data

> `readonly` **data**: `Partial`\<`DataType`\>

Defined in: [packages/builders/src/components/ComponentBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ComponentBuilderBase.ts#L22)

The API data associated with this component

#### Inherited from

`ComponentBuilderBase.data`

## Methods

### setDisabled()

> **setDisabled**(`disabled?`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:132](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L132)

Sets whether this button is disabled or not

#### Parameters

##### disabled?

`boolean` = `true`

Whether or not to disable this button

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

### setSkuId()

> **setSkuId**(`skuId`): `this`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:123](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L123)

Sets the SKU this button offers for purchase

#### Parameters

##### skuId

`string`

The id of a purchasable SKU

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `APIButtonComponentWithSKUId`

Defined in: [packages/builders/src/components/ButtonBuilder.ts:137](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/components/ButtonBuilder.ts#L137)

#### Returns

`APIButtonComponentWithSKUId`

#### Overrides

`ComponentBuilderBase.toJSON`
