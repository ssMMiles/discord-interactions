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

#### Defined in

[core/src/app/WebhookClient.ts:16](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/WebhookClient.ts#L16)

## Methods

### delete

▸ **delete**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app/WebhookClient.ts:46](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/WebhookClient.ts#L46)

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

#### Defined in

[core/src/app/WebhookClient.ts:35](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/WebhookClient.ts#L35)

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

#### Defined in

[core/src/app/WebhookClient.ts:23](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/core/src/app/WebhookClient.ts#L23)
