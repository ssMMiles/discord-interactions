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

## Properties

### description

• **description**: `string`

#### Inherited from

SlashCommandOptionBase.description

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:14](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L14)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.description\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:15](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L15)

___

### name

• **name**: `string`

#### Inherited from

SlashCommandOptionBase.name

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:11](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L11)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.name\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:12](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L12)

___

### options

• **options**: `ToAPIApplicationCommandOptions`<`APIApplicationCommandBasicOption`\>[] = `[]`

#### Defined in

[src/commands/options/subcommand.ts:22](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/subcommand.ts#L22)

___

### required

• **required**: `boolean` = `false`

#### Inherited from

SlashCommandOptionBase.required

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

___

### type

• **type**: `Subcommand`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/subcommand.ts:20](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/subcommand.ts#L20)

## Methods

### addAttachmentOption

▸ **addAttachmentOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds an attachment option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addBooleanOption

▸ **addBooleanOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a boolean option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandBooleanOption`](SlashCommandBooleanOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addChannelOption

▸ **addChannelOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a channel option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandChannelOption`](SlashCommandChannelOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addIntegerOption

▸ **addIntegerOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds an integer option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md) \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"addChoices"``\> | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addMentionableOption

▸ **addMentionableOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a mentionable option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addNumberOption

▸ **addNumberOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a number option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandNumberOption`](SlashCommandNumberOption.md) \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"addChoices"``\> | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addRoleOption

▸ **addRoleOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a role option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandRoleOption`](SlashCommandRoleOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addStringOption

▸ **addStringOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a string option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandStringOption`](SlashCommandStringOption.md) \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"addChoices"``\> | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### addUserOption

▸ **addUserOption**(`input`): [`SubcommandOption`](SubcommandOption.md)

Adds a user option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandUserOption`](SlashCommandUserOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SubcommandOption`](SubcommandOption.md)

Set a dictionary of localized descriptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SubcommandOption`](SubcommandOption.md)

Set a single locale's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setLocalizedDescription

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): `void`

Set a single locale's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

SlashCommandOptionBase.setLocalizedName

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SubcommandOption`](SubcommandOption.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

___

### setRequired

▸ **setRequired**(`required`): [`SubcommandOption`](SubcommandOption.md)

Marks the option as required

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` | If this option should be required |

#### Returns

[`SubcommandOption`](SubcommandOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandSubcommandOption`

#### Returns

`APIApplicationCommandSubcommandOption`

#### Overrides

SlashCommandOptionBase.toJSON
