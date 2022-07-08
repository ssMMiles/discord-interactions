[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandChannelOption

# Class: SlashCommandChannelOption

## Hierarchy

- `SlashCommandOptionBase`

  ↳ **`SlashCommandChannelOption`**

## Table of contents

### Constructors

- [constructor](SlashCommandChannelOption.md#constructor)

### Properties

- [channel\_types](SlashCommandChannelOption.md#channel_types)
- [description](SlashCommandChannelOption.md#description)
- [description\_localizations](SlashCommandChannelOption.md#description_localizations)
- [name](SlashCommandChannelOption.md#name)
- [name\_localizations](SlashCommandChannelOption.md#name_localizations)
- [required](SlashCommandChannelOption.md#required)
- [type](SlashCommandChannelOption.md#type)

### Methods

- [addChannelTypes](SlashCommandChannelOption.md#addchanneltypes)
- [setDescriptionLocalizations](SlashCommandChannelOption.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandChannelOption.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandChannelOption.md#setlocalizedname)
- [setNameLocalizations](SlashCommandChannelOption.md#setnamelocalizations)
- [setRequired](SlashCommandChannelOption.md#setrequired)
- [toJSON](SlashCommandChannelOption.md#tojson)

## Constructors

### constructor

• **new SlashCommandChannelOption**(`name`, `description`)

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

### channel\_types

• `Optional` **channel\_types**: (`GuildText` \| `GuildVoice` \| `GuildCategory` \| `GuildNews` \| `GuildNewsThread` \| `GuildPublicThread` \| `GuildPrivateThread` \| `GuildStageVoice`)[]

#### Defined in

[src/commands/options/channel.ts:19](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/channel.ts#L19)

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

• `Readonly` **type**: `Channel`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/channel.ts:18](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/channel.ts#L18)

## Methods

### addChannelTypes

▸ **addChannelTypes**(...`channelTypes`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...channelTypes` | (`GuildText` \| `GuildVoice` \| `GuildCategory` \| `GuildNews` \| `GuildNewsThread` \| `GuildPublicThread` \| `GuildPrivateThread` \| `GuildStageVoice`)[] |  |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Defined in

[src/commands/options/channel.ts:26](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/channel.ts#L26)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

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

▸ **setNameLocalizations**(`localizations`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` |  |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandChannelOption`

#### Returns

`APIApplicationCommandChannelOption`

#### Overrides

SlashCommandOptionBase.toJSON

#### Defined in

[src/commands/options/channel.ts:34](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/options/channel.ts#L34)
