[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / Bitfield

# Class: Bitfield

Data structure that makes it easy to interact with a bitfield.

## Table of contents

### Constructors

- [constructor](Bitfield.md#constructor)

### Properties

- [bitfield](Bitfield.md#bitfield)

### Methods

- [add](Bitfield.md#add)
- [allowAll](Bitfield.md#allowall)
- [disallowAll](Bitfield.md#disallowall)
- [has](Bitfield.md#has)
- [remove](Bitfield.md#remove)
- [toJSON](Bitfield.md#tojson)

## Constructors

### constructor

• **new Bitfield**(...`bits`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | `bigint`[] |

## Properties

### bitfield

• `Optional` **bitfield**: `bigint`

#### Defined in

[src/commands/permissions/Bitfield.ts:5](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/builders/src/commands/permissions/Bitfield.ts#L5)

## Methods

### add

▸ **add**(...`bits?`): [`Bitfield`](Bitfield.md)

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits?` | `bigint`[] | Bits to add |

#### Returns

[`Bitfield`](Bitfield.md)

___

### allowAll

▸ **allowAll**(): `void`

#### Returns

`void`

___

### disallowAll

▸ **disallowAll**(): `void`

#### Returns

`void`

___

### has

▸ **has**(`bit`): `boolean`

Checks whether the bitfield has a bit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bit` | `bigint` | Bit to check for |

#### Returns

`boolean`

___

### remove

▸ **remove**(...`bits?`): [`Bitfield`](Bitfield.md)

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits?` | `bigint`[] | Bits to remove |

#### Returns

[`Bitfield`](Bitfield.md)

These bits or new BitField if the instance is frozen.

___

### toJSON

▸ **toJSON**(): ``null`` \| `string`

#### Returns

``null`` \| `string`
