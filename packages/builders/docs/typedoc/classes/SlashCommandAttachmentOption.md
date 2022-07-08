[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandAttachmentOption

# Class: SlashCommandAttachmentOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SlashCommandAttachmentOption`**

## Table of contents

### Constructors

- [constructor](SlashCommandAttachmentOption.md#constructor)

### Properties

- [description](SlashCommandAttachmentOption.md#description)
- [description\_localizations](SlashCommandAttachmentOption.md#description_localizations)
- [name](SlashCommandAttachmentOption.md#name)
- [name\_localizations](SlashCommandAttachmentOption.md#name_localizations)
- [required](SlashCommandAttachmentOption.md#required)
- [type](SlashCommandAttachmentOption.md#type)

### Methods

- [setDescriptionLocalizations](SlashCommandAttachmentOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandAttachmentOption.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandAttachmentOption.md#setlocalizedname)
- [setNameLocalizations](SlashCommandAttachmentOption.md#setnamelocalizations)
- [setRequired](SlashCommandAttachmentOption.md#setrequired)
- [toJSON](SlashCommandAttachmentOption.md#tojson)

## Constructors

### constructor

• **new SlashCommandAttachmentOption**(`name`, `description`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `description` | `string` |

#### Inherited from

SlashCommandOptionBase.constructor

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:17](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L17)

## Properties

### description

• **description**: `string`

#### Inherited from

SlashCommandOptionBase.description

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L14)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.description\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:15](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L15)

___

### name

• **name**: `string`

#### Inherited from

SlashCommandOptionBase.name

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:11](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L11)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.name\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:12](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L12)

___

### required

• **required**: `boolean` = `false`

#### Inherited from

SlashCommandOptionBase.required

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

___

### type

• `Readonly` **type**: `Attachment`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/attachment.ts:5](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/attachment.ts#L5)

## Methods

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Inherited from

SlashCommandOptionBase.setLocalizedDescription

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:61](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L61)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

SlashCommandOptionBase.setLocalizedName

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:45](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L45)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` |  |

#### Returns

[`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandAttachmentOption`

#### Returns

`APIApplicationCommandAttachmentOption`

#### Overrides

SlashCommandOptionBase.toJSON

#### Defined in

[src/commands/options/attachment.ts:7](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/attachment.ts#L7)
