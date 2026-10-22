[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / InteractionHandlerError

# Class: InteractionHandlerError

Defined in: [util/errors.ts:82](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L82)

## Extends

- [`InteractionError`](InteractionError.md)

## Constructors

### Constructor

> **new InteractionHandlerError**(`interaction`, `error`): `InteractionHandlerError`

Defined in: [util/errors.ts:85](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L85)

#### Parameters

##### interaction

`APIInteraction`

##### error

`unknown`

#### Returns

`InteractionHandlerError`

#### Overrides

[`InteractionError`](InteractionError.md).[`constructor`](InteractionError.md#constructor)

## Properties

### cause

> **cause**: `unknown`

Defined in: [util/errors.ts:83](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L83)

***

### interaction

> **interaction**: `APIInteraction`

Defined in: [util/errors.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/util/errors.ts#L15)

#### Inherited from

[`InteractionError`](InteractionError.md).[`interaction`](InteractionError.md#interaction)
