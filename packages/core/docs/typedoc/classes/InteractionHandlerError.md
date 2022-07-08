[@discord-interactions/core](../README.md) / [Exports](../modules.md) / InteractionHandlerError

# Class: InteractionHandlerError

## Hierarchy

- [`InteractionError`](InteractionError.md)

  ↳ **`InteractionHandlerError`**

## Table of contents

### Constructors

- [constructor](InteractionHandlerError.md#constructor)

### Properties

- [cause](InteractionHandlerError.md#cause)
- [interaction](InteractionHandlerError.md#interaction)

## Constructors

### constructor

• **new InteractionHandlerError**(`interaction`, `error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `APIInteraction` |
| `error` | `unknown` |

#### Overrides

[InteractionError](InteractionError.md).[constructor](InteractionError.md#constructor)

#### Defined in

[util/errors.ts:74](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/util/errors.ts#L74)

## Properties

### cause

• **cause**: `unknown`

#### Defined in

[util/errors.ts:72](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/util/errors.ts#L72)

___

### interaction

• **interaction**: `APIInteraction`

#### Inherited from

[InteractionError](InteractionError.md).[interaction](InteractionError.md#interaction)

#### Defined in

[util/errors.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/util/errors.ts#L14)
