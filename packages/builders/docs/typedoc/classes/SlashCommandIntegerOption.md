[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandIntegerOption

# Class: SlashCommandIntegerOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SlashCommandIntegerOption`**

## Table of contents

### Constructors

- [constructor](SlashCommandIntegerOption.md#constructor)

### Properties

- [autocomplete](SlashCommandIntegerOption.md#autocomplete)
- [choices](SlashCommandIntegerOption.md#choices)
- [description](SlashCommandIntegerOption.md#description)
- [description\_localizations](SlashCommandIntegerOption.md#description_localizations)
- [max\_value](SlashCommandIntegerOption.md#max_value)
- [min\_value](SlashCommandIntegerOption.md#min_value)
- [name](SlashCommandIntegerOption.md#name)
- [name\_localizations](SlashCommandIntegerOption.md#name_localizations)
- [required](SlashCommandIntegerOption.md#required)
- [type](SlashCommandIntegerOption.md#type)

### Methods

- [addChoices](SlashCommandIntegerOption.md#addchoices)
- [setAutocomplete](SlashCommandIntegerOption.md#setautocomplete)
- [setChoices](SlashCommandIntegerOption.md#setchoices)
- [setDescriptionLocalizations](SlashCommandIntegerOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandIntegerOption.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandIntegerOption.md#setlocalizedname)
- [setMaxValue](SlashCommandIntegerOption.md#setmaxvalue)
- [setMinValue](SlashCommandIntegerOption.md#setminvalue)
- [setNameLocalizations](SlashCommandIntegerOption.md#setnamelocalizations)
- [setRequired](SlashCommandIntegerOption.md#setrequired)
- [toJSON](SlashCommandIntegerOption.md#tojson)

## Constructors

### constructor

• **new SlashCommandIntegerOption**(`name`, `description`)

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

[src/commands/options/integer.ts:15](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/integer.ts#L15)

___

### choices

• `Optional` **choices**: `APIApplicationCommandOptionChoice`<`number`\>[]

#### Defined in

[src/commands/options/integer.ts:14](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/integer.ts#L14)

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

### max\_value

• `Optional` **max\_value**: `number`

#### Defined in

[src/commands/options/integer.ts:11](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/integer.ts#L11)

___

### min\_value

• `Optional` **min\_value**: `number`

#### Defined in

[src/commands/options/integer.ts:12](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/integer.ts#L12)

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

• **type**: `Integer`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/integer.ts:9](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/options/integer.ts#L9)

## Methods

### addChoices

▸ **addChoices**(...`choices`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

Adds multiple choices for this option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...choices` | `APIApplicationCommandOptionChoice`<`number`\>[] | The choices to add |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

___

### setAutocomplete

▸ **setAutocomplete**(`autocomplete`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

Marks the option as autocompletable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autocomplete` | `boolean` | If this option should be autocompletable |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

___

### setChoices

▸ **setChoices**<`Input`\>(...`choices`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `APIApplicationCommandOptionChoice`<`number`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...choices` | `Input` |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

Set a dictionary of localized descriptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

Set a single locale's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

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

### setMaxValue

▸ **setMaxValue**(`max`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

___

### setMinValue

▸ **setMinValue**(`min`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

Marks the option as required

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` | If this option should be required |

#### Returns

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandIntegerOption`

#### Returns

`APIApplicationCommandIntegerOption`

#### Overrides

SlashCommandOptionBase.toJSON
