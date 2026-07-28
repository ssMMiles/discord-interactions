[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / Bitfield

# Class: Bitfield

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L4)

Data structure that makes it easy to interact with a bitfield.

## Constructors

### Constructor

> **new Bitfield**(...`bits`): `Bitfield`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:7](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L7)

#### Parameters

##### bits

...`bigint`[]

#### Returns

`Bitfield`

## Properties

### bitfield?

> `optional` **bitfield?**: `bigint`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:5](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L5)

## Methods

### add()

> **add**(...`bits?`): `Bitfield`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:25](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L25)

Adds bits to these ones.

#### Parameters

##### bits?

...`bigint`[]

Bits to add

#### Returns

`Bitfield`

***

### allowAll()

> **allowAll**(): `void`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L54)

#### Returns

`void`

***

### disallowAll()

> **disallowAll**(): `void`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:50](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L50)

#### Returns

`void`

***

### has()

> **has**(`bit`): `boolean`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L15)

Checks whether the bitfield has a bit

#### Parameters

##### bit

`bigint`

Bit to check for

#### Returns

`boolean`

***

### remove()

> **remove**(...`bits?`): `Bitfield`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L40)

Removes bits from these.

#### Parameters

##### bits?

...`bigint`[]

Bits to remove

#### Returns

`Bitfield`

These bits or new BitField if the instance is frozen.

***

### toJSON()

> **toJSON**(): `string` \| `null`

Defined in: [packages/builders/src/commands/permissions/Bitfield.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/permissions/Bitfield.ts#L58)

#### Returns

`string` \| `null`
