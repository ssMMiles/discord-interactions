[@discord-interactions/core](../README.md) / [Exports](../modules.md) / InteractionContextError

# Class: InteractionContextError

## Hierarchy

- `Error`

  ↳ **`InteractionContextError`**

## Table of contents

### Constructors

- [constructor](InteractionContextError.md#constructor)

### Properties

- [context](InteractionContextError.md#context)

## Constructors

### constructor

• **new InteractionContextError**(`message`, `context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `context` | `BaseInteractionContext`<`APIInteraction`, `APIInteractionResponse`\> |

#### Overrides

Error.constructor

## Properties

### context

• **context**: `BaseInteractionContext`<`APIInteraction`, `APIInteractionResponse`\>

#### Defined in

[util/errors.ts:25](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/core/src/util/errors.ts#L25)
