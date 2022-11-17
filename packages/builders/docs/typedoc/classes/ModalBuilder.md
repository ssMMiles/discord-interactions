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
- [setTitle](ModalBuilder.md#settitle)
- [toJSON](ModalBuilder.md#tojson)

## Constructors

### constructor

• **new ModalBuilder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `string` \| `APIModalInteractionResponseCallbackData` |

## Properties

### data

• **data**: `Partial`<`APIModalInteractionResponseCallbackData`\>

#### Defined in

[src/responses/ModalBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/responses/ModalBuilder.ts#L9)

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
