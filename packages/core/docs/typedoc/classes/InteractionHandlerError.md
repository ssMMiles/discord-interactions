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

## Properties

### cause

• **cause**: `unknown`

#### Defined in

[util/errors.ts:83](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/util/errors.ts#L83)

___

### interaction

• **interaction**: `APIInteraction`

#### Inherited from

[InteractionError](InteractionError.md).[interaction](InteractionError.md#interaction)

#### Defined in

[util/errors.ts:15](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/core/src/util/errors.ts#L15)
