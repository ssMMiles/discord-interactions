[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / InteractionError

# Class: InteractionError

Defined in: [util/errors.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L14)

## Extends

- `Error`

## Extended by

- [`UnknownInteractionType`](UnknownInteractionType.md)
- [`UnknownApplicationCommandType`](UnknownApplicationCommandType.md)
- [`UnknownComponentType`](UnknownComponentType.md)
- [`InteractionTokenExpired`](InteractionTokenExpired.md)
- [`InteractionHandlerTimedOut`](InteractionHandlerTimedOut.md)
- [`InteractionHandlerNotFound`](InteractionHandlerNotFound.md)
- [`InteractionHandlerError`](InteractionHandlerError.md)

## Constructors

### Constructor

> **new InteractionError**(`message`, `interaction`): `InteractionError`

Defined in: [util/errors.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L17)

#### Parameters

##### message

`string`

##### interaction

`APIInteraction`

#### Returns

`InteractionError`

#### Overrides

`Error.constructor`

## Properties

### interaction

> **interaction**: `APIInteraction`

Defined in: [util/errors.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L15)
