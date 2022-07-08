[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SubcommandOption

# Class: SubcommandOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SubcommandOption`**

## Table of contents

### Constructors

- [constructor](SubcommandOption.md#constructor)

### Properties

- [description](SubcommandOption.md#description)
- [description\_localizations](SubcommandOption.md#description_localizations)
- [name](SubcommandOption.md#name)
- [name\_localizations](SubcommandOption.md#name_localizations)
- [options](SubcommandOption.md#options)
- [required](SubcommandOption.md#required)
- [type](SubcommandOption.md#type)

### Methods

- [addAttachmentOption](SubcommandOption.md#addattachmentoption)
- [addBooleanOption](SubcommandOption.md#addbooleanoption)
- [addChannelOption](SubcommandOption.md#addchanneloption)
- [addIntegerOption](SubcommandOption.md#addintegeroption)
- [addMentionableOption](SubcommandOption.md#addmentionableoption)
- [addNumberOption](SubcommandOption.md#addnumberoption)
- [addRoleOption](SubcommandOption.md#addroleoption)
- [addStringOption](SubcommandOption.md#addstringoption)
- [addUserOption](SubcommandOption.md#adduseroption)
- [setDescriptionLocalizations](SubcommandOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SubcommandOption.md#setlocalizeddescription)
- [setLocalizedName](SubcommandOption.md#setlocalizedname)
- [setNameLocalizations](SubcommandOption.md#setnamelocalizations)
- [setRequired](SubcommandOption.md#setrequired)
- [toJSON](SubcommandOption.md#tojson)

## Constructors

### constructor

• **new SubcommandOption**(`name`, `description`)

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

### options

• **options**: [`ToAPIApplicationCommandOptions`](../interfaces/ToAPIApplicationCommandOptions.md)[] = `[]`

#### Defined in

[src/commands/options/subcommand.ts:17](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L17)

___

### required

• **required**: `boolean` = `false`

#### Inherited from

SlashCommandOptionBase.required

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

___

### type

• **type**: `Subcommand`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/subcommand.ts:15](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L15)

## Methods

### addAttachmentOption

▸ **addAttachmentOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md) |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:64](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L64)

___

### addBooleanOption

▸ **addBooleanOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandBooleanOption`](SlashCommandBooleanOption.md) |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:24](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L24)

___

### addChannelOption

▸ **addChannelOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandChannelOption`](SlashCommandChannelOption.md) |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:44](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L44)

___

### addIntegerOption

▸ **addIntegerOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md) \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"addChoices"``\> |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:99](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L99)

___

### addMentionableOption

▸ **addMentionableOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md) |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:74](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L74)

___

### addNumberOption

▸ **addNumberOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandNumberOption`](SlashCommandNumberOption.md) \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"addChoices"``\> |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:114](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L114)

___

### addRoleOption

▸ **addRoleOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandRoleOption`](SlashCommandRoleOption.md) |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:54](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L54)

___

### addStringOption

▸ **addStringOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandStringOption`](SlashCommandStringOption.md) \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"addChoices"``\> |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:84](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L84)

___

### addUserOption

▸ **addUserOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandUserOption`](SlashCommandUserOption.md) |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Defined in

[src/commands/options/subcommand.ts:34](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L34)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

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

▸ **setNameLocalizations**(`localizations`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

___

### setRequired

▸ **setRequired**(`required`): [`SubcommandOption`](SubcommandOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` |  |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandSubcommandOption`

#### Returns

`APIApplicationCommandSubcommandOption`

#### Overrides

SlashCommandOptionBase.toJSON

#### Defined in

[src/commands/options/subcommand.ts:124](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/subcommand.ts#L124)
