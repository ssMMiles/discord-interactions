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

## Properties

### channel\_types

• `Optional` **channel\_types**: (`GuildText` \| `GuildVoice` \| `GuildCategory` \| `GuildAnnouncement` \| `AnnouncementThread` \| `PublicThread` \| `PrivateThread` \| `GuildStageVoice`)[]

#### Defined in

[src/commands/options/channel.ts:19](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/channel.ts#L19)

___

### description

• **description**: `string`

#### Inherited from

SlashCommandOptionBase.description

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:14](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L14)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.description\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:15](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L15)

___

### name

• **name**: `string`

#### Inherited from

SlashCommandOptionBase.name

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:11](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L11)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

SlashCommandOptionBase.name\_localizations

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:12](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L12)

___

### required

• **required**: `boolean` = `false`

#### Inherited from

SlashCommandOptionBase.required

#### Defined in

[src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

___

### type

• `Readonly` **type**: `Channel`

#### Overrides

SlashCommandOptionBase.type

#### Defined in

[src/commands/options/channel.ts:18](https://github.com/ssMMiles/discord-interactions/blob/50693ee/packages/builders/src/commands/options/channel.ts#L18)

## Methods

### addChannelTypes

▸ **addChannelTypes**(...`channelTypes`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

Adds channel types to this option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...channelTypes` | (`GuildText` \| `GuildVoice` \| `GuildCategory` \| `GuildAnnouncement` \| `AnnouncementThread` \| `PublicThread` \| `PrivateThread` \| `GuildStageVoice`)[] | The channel types to add |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

Set a dictionary of localized descriptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Inherited from

SlashCommandOptionBase.setDescriptionLocalizations

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

Set a single locale's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

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

▸ **setNameLocalizations**(`localizations`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Inherited from

SlashCommandOptionBase.setNameLocalizations

___

### setRequired

▸ **setRequired**(`required`): [`SlashCommandChannelOption`](SlashCommandChannelOption.md)

Marks the option as required

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | `boolean` | If this option should be required |

#### Returns

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

#### Inherited from

SlashCommandOptionBase.setRequired

___

### toJSON

▸ **toJSON**(): `APIApplicationCommandChannelOption`

#### Returns

`APIApplicationCommandChannelOption`

#### Overrides

SlashCommandOptionBase.toJSON
