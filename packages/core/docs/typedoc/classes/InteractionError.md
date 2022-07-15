[@discord-interactions/core](../README.md) / [Exports](../modules.md) / InteractionError

# Class: InteractionError

## Hierarchy

- `Error`

  ↳ **`InteractionError`**

  ↳↳ [`UnknownInteractionType`](UnknownInteractionType.md)

  ↳↳ [`UnknownApplicationCommandType`](UnknownApplicationCommandType.md)

  ↳↳ [`UnknownComponentType`](UnknownComponentType.md)

  ↳↳ [`InteractionTokenExpired`](InteractionTokenExpired.md)

  ↳↳ [`InteractionHandlerTimedOut`](InteractionHandlerTimedOut.md)

  ↳↳ [`InteractionHandlerNotFound`](InteractionHandlerNotFound.md)

  ↳↳ [`InteractionHandlerError`](InteractionHandlerError.md)

## Table of contents

### Constructors

- [constructor](InteractionError.md#constructor)

### Properties

- [interaction](InteractionError.md#interaction)

## Constructors

### constructor

• **new InteractionError**(`message`, `interaction`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `interaction` | `APIInteraction` |

#### Overrides

Error.constructor

## Properties

### interaction

• **interaction**: `APIInteraction`

#### Defined in

[util/errors.ts:15](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/util/errors.ts#L15)
