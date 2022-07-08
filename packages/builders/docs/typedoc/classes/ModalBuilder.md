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

#### Defined in

[src/responses/ModalBuilder.ts:11](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/ModalBuilder.ts#L11)

## Properties

### data

• **data**: `Partial`<`APIModalInteractionResponseCallbackData`\>

#### Defined in

[src/responses/ModalBuilder.ts:9](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/ModalBuilder.ts#L9)

## Methods

### addComponents

▸ **addComponents**(...`components`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | [`ActionRowBuilder`](ActionRowBuilder.md)<[`TextInputBuilder`](TextInputBuilder.md)\>[] |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

#### Defined in

[src/responses/ModalBuilder.ts:24](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/ModalBuilder.ts#L24)

___

### setComponents

▸ **setComponents**(`components?`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `components` | `APIActionRowComponent`<`APITextInputComponent`\>[] | `[]` |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

#### Defined in

[src/responses/ModalBuilder.ts:32](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/ModalBuilder.ts#L32)

___

### setTitle

▸ **setTitle**(`title`): [`ModalBuilder`](ModalBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

[`ModalBuilder`](ModalBuilder.md)

#### Defined in

[src/responses/ModalBuilder.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/ModalBuilder.ts#L19)

___

### toJSON

▸ **toJSON**(): `APIModalInteractionResponseCallbackData`

#### Returns

`APIModalInteractionResponseCallbackData`

#### Defined in

[src/responses/ModalBuilder.ts:40](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/ModalBuilder.ts#L40)
