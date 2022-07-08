[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandStringOption

# Class: SlashCommandStringOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SlashCommandStringOption`**

## Table of contents

### Constructors

- [constructor](SlashCommandStringOption.md#constructor)

### Properties

- [autocomplete](SlashCommandStringOption.md#autocomplete)
- [choices](SlashCommandStringOption.md#choices)
- [description](SlashCommandStringOption.md#description)
- [description\_localizations](SlashCommandStringOption.md#description_localizations)
- [name](SlashCommandStringOption.md#name)
- [name\_localizations](SlashCommandStringOption.md#name_localizations)
- [required](SlashCommandStringOption.md#required)
- [type](SlashCommandStringOption.md#type)

### Methods

- [addChoices](SlashCommandStringOption.md#addchoices)
- [setAutocomplete](SlashCommandStringOption.md#setautocomplete)
- [setChoices](SlashCommandStringOption.md#setchoices)
- [setDescriptionLocalizations](SlashCommandStringOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandStringOption.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandStringOption.md#setlocalizedname)
- [setNameLocalizations](SlashCommandStringOption.md#setnamelocalizations)
- [setRequired](SlashCommandStringOption.md#setrequired)
- [toJSON](SlashCommandStringOption.md#tojson)

## Constructors

### constructor

• **new SlashCommandStringOption**(`name`, `description`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `description` | `string` |

#### Inherited from

SlashCommandOptionBase.constructor

## Properties

### autocomplete

• `Optional` **autocomplete**: `boolean`

#### Defined in

[src/commands/options/string.ts:12](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/string.ts#L12)

___

### choices

• `Optional` **choices**: `APIApplicationCommandOptionChoice`<`string`\>[]

#### Defined in

[src/commands/options/string.ts:11](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/string.ts#L11)

___

### description

• **description**: `string`

#### Inherited from

SlashCommandOptionBase.description

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:14](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L14)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.description\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:15](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L15)

___

### name

• **name**: `string`

#### Inherited from

SlashCommandOptionBase.name

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:11](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L11)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.name\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:12](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L12)

___

### required

• **required**: `boolean` = `false`

#### Inherited from

SlashCommandOptionBase.required

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

___

### type

• **type**: `String`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/string.ts:9](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/string.ts#L9)

## Methods

### addChoices

▸ **addChoices**(...`choices`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

Adds multiple choices for this option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...choices` | `APIApplicationCommandOptionChoice`<`string`\>[] | The choices to add |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

___

### setAutocomplete

▸ **setAutocomplete**(`autocomplete`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

Marks the option as autocompletable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autocomplete` | `boolean` | If this option should be autocompletable |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

___

### setChoices

▸ **setChoices**<`Input`\>(...`choices`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `APIApplicationCommandOptionChoice`<`string`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...choices` | `Input` |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

Set a dictionary of localized descriptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

Set a single locale's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

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

▸ **setNameLocalizations**(`localizations`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

Marks the option as required

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` | If this option should be required |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandStringOption`

#### Returns

`APIApplicationCommandStringOption`

#### Overrides

SlashCommandOptionBase.toJSON
