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

#### Defined in

[core/src/util/errors.ts:16](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/util/errors.ts#L16)

## Properties

### interaction

• **interaction**: `APIInteraction`

#### Defined in

[core/src/util/errors.ts:14](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/util/errors.ts#L14)
