[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandMentionableOption

# Class: SlashCommandMentionableOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SlashCommandMentionableOption`**

## Table of contents

### Constructors

- [constructor](SlashCommandMentionableOption.md#constructor)

### Properties

- [description](SlashCommandMentionableOption.md#description)
- [description\_localizations](SlashCommandMentionableOption.md#description_localizations)
- [name](SlashCommandMentionableOption.md#name)
- [name\_localizations](SlashCommandMentionableOption.md#name_localizations)
- [required](SlashCommandMentionableOption.md#required)
- [type](SlashCommandMentionableOption.md#type)

### Methods

- [setDescriptionLocalizations](SlashCommandMentionableOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandMentionableOption.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandMentionableOption.md#setlocalizedname)
- [setNameLocalizations](SlashCommandMentionableOption.md#setnamelocalizations)
- [setRequired](SlashCommandMentionableOption.md#setrequired)
- [toJSON](SlashCommandMentionableOption.md#tojson)

## Constructors

### constructor

• **new SlashCommandMentionableOption**(`name`, `description`)

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

• `Readonly` **type**: `Mentionable`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/mentionable.ts:5](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/mentionable.ts#L5)

## Methods

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

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

▸ **setNameLocalizations**(`localizations`): [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` |  |

#### Returns

[`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandMentionableOption`

#### Returns

`APIApplicationCommandMentionableOption`

#### Overrides

SlashCommandOptionBase.toJSON

#### Defined in

[src/commands/options/mentionable.ts:7](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/mentionable.ts#L7)
