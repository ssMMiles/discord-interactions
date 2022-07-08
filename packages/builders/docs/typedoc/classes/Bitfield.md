[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / Bitfield

# Class: Bitfield

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

#### Defined in

[src/commands/permissions/Bitfield.ts:7](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L7)

## Properties

### bitfield

• `Optional` **bitfield**: `bigint`

#### Defined in

[src/commands/permissions/Bitfield.ts:5](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L5)

## Methods

### add

▸ **add**(...`bits`): [`Bitfield`](Bitfield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | `bigint`[] |

#### Returns

[`Bitfield`](Bitfield.md)

#### Defined in

[src/commands/permissions/Bitfield.ts:25](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L25)

___

### allowAll

▸ **allowAll**(): `void`

#### Returns

`void`

#### Defined in

[src/commands/permissions/Bitfield.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L54)

___

### disallowAll

▸ **disallowAll**(): `void`

#### Returns

`void`

#### Defined in

[src/commands/permissions/Bitfield.ts:50](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L50)

___

### has

▸ **has**(`bit`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bit` | `bigint` |  |

#### Returns

`boolean`

#### Defined in

[src/commands/permissions/Bitfield.ts:15](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L15)

___

### remove

▸ **remove**(...`bits`): [`Bitfield`](Bitfield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | `bigint`[] |

#### Returns

[`Bitfield`](Bitfield.md)

#### Defined in

[src/commands/permissions/Bitfield.ts:40](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L40)

___

### toJSON

▸ **toJSON**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/commands/permissions/Bitfield.ts:58](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/permissions/Bitfield.ts#L58)
