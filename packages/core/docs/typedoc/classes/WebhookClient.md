[@discord-interactions/core](../README.md) / [Exports](../modules.md) / WebhookClient

# Class: WebhookClient

## Table of contents

### Constructors

- [constructor](WebhookClient.md#constructor)

### Methods

- [delete](WebhookClient.md#delete)
- [edit](WebhookClient.md#edit)
- [send](WebhookClient.md#send)

## Constructors

### constructor

• **new WebhookClient**(`id`, `token`, `rest?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `token` | `string` |
| `rest?` | `any` |

## Methods

### delete

▸ **delete**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

___

### edit

▸ **edit**(`message`, `id`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `MessageBuilder` |
| `id` | `string` |

#### Returns

`Promise`<`APIMessage`\>

___

### send

▸ **send**(`message`, `wait?`): `Promise`<`APIMessage`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` \| `MessageBuilder` | `undefined` |
| `wait` | `boolean` | `true` |

#### Returns

`Promise`<`APIMessage`\>
