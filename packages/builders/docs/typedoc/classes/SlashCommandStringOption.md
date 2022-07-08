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

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:17](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L17)

## Properties

### autocomplete

• `Optional` **autocomplete**: `boolean`

#### Defined in

[src/commands/options/string.ts:12](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L12)

___

### choices

• `Optional` **choices**: `APIApplicationCommandOptionChoice`<`string`\>[]

#### Defined in

[src/commands/options/string.ts:11](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L11)

___

### description

• **description**: `string`

#### Inherited from

SlashCommandOptionBase.description

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:14](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L14)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.description\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:15](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L15)

___

### name

• **name**: `string`

#### Inherited from

SlashCommandOptionBase.name

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:11](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L11)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.name\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:12](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L12)

___

### required

• **required**: `boolean` = `false`

#### Inherited from

SlashCommandOptionBase.required

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

___

### type

• **type**: `String`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/string.ts:9](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L9)

## Methods

### addChoices

▸ **addChoices**(...`choices`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...choices` | `APIApplicationCommandOptionChoice`<`string`\>[] |  |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Defined in

[src/commands/options/string.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L19)

___

### setAutocomplete

▸ **setAutocomplete**(`autocomplete`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autocomplete` | `boolean` |  |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Defined in

[src/commands/options/string.ts:49](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L49)

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

#### Defined in

[src/commands/options/string.ts:35](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L35)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setLocalizedDescription

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:61](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L61)

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

[src/commands/options/SlashCommandOptionBase.ts:45](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L45)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` |  |

#### Returns

[`SlashCommandStringOption`](SlashCommandStringOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandStringOption`

#### Returns

`APIApplicationCommandStringOption`

#### Overrides

SlashCommandOptionBase.toJSON

#### Defined in

[src/commands/options/string.ts:55](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/string.ts#L55)
