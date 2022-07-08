[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandNumberOption

# Class: SlashCommandNumberOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SlashCommandNumberOption`**

## Table of contents

### Constructors

- [constructor](SlashCommandNumberOption.md#constructor)

### Properties

- [autocomplete](SlashCommandNumberOption.md#autocomplete)
- [choices](SlashCommandNumberOption.md#choices)
- [description](SlashCommandNumberOption.md#description)
- [description\_localizations](SlashCommandNumberOption.md#description_localizations)
- [max\_value](SlashCommandNumberOption.md#max_value)
- [min\_value](SlashCommandNumberOption.md#min_value)
- [name](SlashCommandNumberOption.md#name)
- [name\_localizations](SlashCommandNumberOption.md#name_localizations)
- [required](SlashCommandNumberOption.md#required)
- [type](SlashCommandNumberOption.md#type)

### Methods

- [addChoices](SlashCommandNumberOption.md#addchoices)
- [setAutocomplete](SlashCommandNumberOption.md#setautocomplete)
- [setChoices](SlashCommandNumberOption.md#setchoices)
- [setDescriptionLocalizations](SlashCommandNumberOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandNumberOption.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandNumberOption.md#setlocalizedname)
- [setMaxValue](SlashCommandNumberOption.md#setmaxvalue)
- [setMinValue](SlashCommandNumberOption.md#setminvalue)
- [setNameLocalizations](SlashCommandNumberOption.md#setnamelocalizations)
- [setRequired](SlashCommandNumberOption.md#setrequired)
- [toJSON](SlashCommandNumberOption.md#tojson)

## Constructors

### constructor

• **new SlashCommandNumberOption**(`name`, `description`)

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

### autocomplete

• `Optional` **autocomplete**: `boolean`

#### Defined in

[src/commands/options/number.ts:15](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L15)

___

### choices

• `Optional` **choices**: `APIApplicationCommandOptionChoice`<`number`\>[]

#### Defined in

[src/commands/options/number.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L14)

___

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

### max\_value

• `Optional` **max\_value**: `number`

#### Defined in

[src/commands/options/number.ts:11](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L11)

___

### min\_value

• `Optional` **min\_value**: `number`

#### Defined in

[src/commands/options/number.ts:12](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L12)

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

• **type**: `Number`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/number.ts:9](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L9)

## Methods

### addChoices

▸ **addChoices**(...`choices`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...choices` | `APIApplicationCommandOptionChoice`<`number`\>[] |  |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Defined in

[src/commands/options/number.ts:34](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L34)

___

### setAutocomplete

▸ **setAutocomplete**(`autocomplete`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autocomplete` | `boolean` |  |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Defined in

[src/commands/options/number.ts:64](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L64)

___

### setChoices

▸ **setChoices**<`Input`\>(...`choices`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `APIApplicationCommandOptionChoice`<`number`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...choices` | `Input` |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Defined in

[src/commands/options/number.ts:50](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L50)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

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

### setMaxValue

▸ **setMaxValue**(`max`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Defined in

[src/commands/options/number.ts:17](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L17)

___

### setMinValue

▸ **setMinValue**(`min`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Defined in

[src/commands/options/number.ts:23](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L23)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` |  |

#### Returns

[`SlashCommandNumberOption`](SlashCommandNumberOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandNumberOption`

#### Returns

`APIApplicationCommandNumberOption`

#### Overrides

SlashCommandOptionBase.toJSON

#### Defined in

[src/commands/options/number.ts:70](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/number.ts#L70)
