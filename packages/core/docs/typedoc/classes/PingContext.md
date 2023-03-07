[@discord-interactions/core](../README.md) / [Exports](../modules.md) / PingContext

# Class: PingContext

## Table of contents

### Constructors

- [constructor](PingContext.md#constructor)

### Properties

- [receivedAt](PingContext.md#receivedat)
- [responseCallback](PingContext.md#responsecallback)
- [signedAt](PingContext.md#signedat)

### Methods

- [reply](PingContext.md#reply)

## Constructors

### constructor

• **new PingContext**(`timestamps`, `responseCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](../modules.md#responsecallback)<`APIInteractionResponse` \| `FormData`\> |

## Properties

### receivedAt

• **receivedAt**: `Date`

#### Defined in

[app/contexts/PingContext.ts:6](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/PingContext.ts#L6)

___

### responseCallback

• **responseCallback**: [`ResponseCallback`](../modules.md#responsecallback)<`APIInteractionResponse` \| `FormData`\>

#### Defined in

[app/contexts/PingContext.ts:8](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/PingContext.ts#L8)

___

### signedAt

• **signedAt**: `Date`

#### Defined in

[app/contexts/PingContext.ts:5](https://github.com/ssMMiles/discord-interactions/blob/c2e131f/packages/core/src/app/contexts/PingContext.ts#L5)

## Methods

### reply

▸ **reply**(): `void`

#### Returns

`void`
