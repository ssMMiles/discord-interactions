[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / ModalBuilder

# Class: ModalBuilder

## Table of contents

### Constructors

- [constructor](ModalBuilder.md#constructor)

### Properties

- [data](ModalBuilder.md#data)

### Methods

- [addComponents](ModalBuilder.md#addcomponents)
- [setComponents](ModalBuilder.md#setcomponents)
- [setCustomId](ModalBuilder.md#setcustomid)
- [setTitle](ModalBuilder.md#settitle)
- [toJSON](ModalBuilder.md#tojson)

## Constructors

### constructor

• **new ModalBuilder**(`id`, `title?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `APIModalInteractionResponseCallbackData` |
| `title?` | `string` |

## Properties

### data

• **data**: `Partial`<`APIModalInteractionResponseCallbackData`\>

#### Defined in

[src/responses/ModalBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/7421ca0/packages/builders/src/responses/ModalBuilder.ts#L9)

## Methods

### addComponents

▸ **addComponents**(...`components`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | [`ActionRowBuilder`](ActionRowBuilder.md)<[`TextInputBuilder`](TextInputBuilder.md)\>[] |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

___

### setComponents

▸ **setComponents**(`components?`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `components` | `APIActionRowComponent`<`APITextInputComponent`\>[] | `[]` |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

___

### setCustomId

▸ **setCustomId**(`id`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

___

### setTitle

▸ **setTitle**(`title`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

___

### toJSON

▸ **toJSON**(): `APIModalInteractionResponseCallbackData`

#### Returns

`APIModalInteractionResponseCallbackData`
