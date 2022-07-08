[@discord-interactions/core](../README.md) / [Exports](../modules.md) / InteractionError

# Class: InteractionError

## Hierarchy

- `Error`

  ↳ **`InteractionError`**

  ↳↳ [`UnknownInteractionType`](UnknownInteractionType.md)

  ↳↳ [`UnknownApplicationCommandType`](UnknownApplicationCommandType.md)

  ↳↳ [`UnknownComponentType`](UnknownComponentType.md)

  ↳↳ [`InteractionResponseAlreadySent`](InteractionResponseAlreadySent.md)

  ↳↳ [`InteractionTokenExpired`](InteractionTokenExpired.md)

  ↳↳ [`InteractionHandlerTimedOut`](InteractionHandlerTimedOut.md)

  ↳↳ [`InteractionHandlerNotFound`](InteractionHandlerNotFound.md)

  ↳↳ [`InteractionStateExpired`](InteractionStateExpired.md)

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

[util/errors.ts:14](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/core/src/util/errors.ts#L14)
