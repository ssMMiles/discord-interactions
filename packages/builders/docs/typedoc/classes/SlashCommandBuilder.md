[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandBuilder

# Class: SlashCommandBuilder

## Hierarchy

- `CommandBuilderBase`<`RESTPostAPIChatInputApplicationCommandsJSONBody`\>

  ↳ **`SlashCommandBuilder`**

## Table of contents

### Constructors

- [constructor](SlashCommandBuilder.md#constructor)

### Properties

- [default\_member\_permissions](SlashCommandBuilder.md#default_member_permissions)
- [description](SlashCommandBuilder.md#description)
- [description\_localizations](SlashCommandBuilder.md#description_localizations)
- [dm\_permission](SlashCommandBuilder.md#dm_permission)
- [name](SlashCommandBuilder.md#name)
- [name\_localizations](SlashCommandBuilder.md#name_localizations)
- [options](SlashCommandBuilder.md#options)
- [type](SlashCommandBuilder.md#type)

### Methods

- [addAttachmentOption](SlashCommandBuilder.md#addattachmentoption)
- [addBooleanOption](SlashCommandBuilder.md#addbooleanoption)
- [addChannelOption](SlashCommandBuilder.md#addchanneloption)
- [addIntegerOption](SlashCommandBuilder.md#addintegeroption)
- [addMentionableOption](SlashCommandBuilder.md#addmentionableoption)
- [addNumberOption](SlashCommandBuilder.md#addnumberoption)
- [addRequiredPermissions](SlashCommandBuilder.md#addrequiredpermissions)
- [addRoleOption](SlashCommandBuilder.md#addroleoption)
- [addStringOption](SlashCommandBuilder.md#addstringoption)
- [addUserOption](SlashCommandBuilder.md#adduseroption)
- [clearRequiredPermissions](SlashCommandBuilder.md#clearrequiredpermissions)
- [disallowAllPermissions](SlashCommandBuilder.md#disallowallpermissions)
- [equals](SlashCommandBuilder.md#equals)
- [removeRequiredPermissions](SlashCommandBuilder.md#removerequiredpermissions)
- [setDMEnabled](SlashCommandBuilder.md#setdmenabled)
- [setDescription](SlashCommandBuilder.md#setdescription)
- [setDescriptionLocalizations](SlashCommandBuilder.md#setdescriptionlocalizations)
- [setLocalizedDescription](SlashCommandBuilder.md#setlocalizeddescription)
- [setLocalizedName](SlashCommandBuilder.md#setlocalizedname)
- [setName](SlashCommandBuilder.md#setname)
- [setNameLocalizations](SlashCommandBuilder.md#setnamelocalizations)
- [setRequiredPermissions](SlashCommandBuilder.md#setrequiredpermissions)
- [toJSON](SlashCommandBuilder.md#tojson)

## Constructors

### constructor

• **new SlashCommandBuilder**(`name`, `description`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `description` | `string` |

#### Overrides

CommandBuilderBase&lt;RESTPostAPIChatInputApplicationCommandsJSONBody\&gt;.constructor

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

Default member permissions required to use the command

#### Inherited from

CommandBuilderBase.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:42](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandBuilderBase.ts#L42)

___

### description

• **description**: `string`

#### Defined in

[src/commands/SlashCommandBuilder.ts:33](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/SlashCommandBuilder.ts#L33)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Defined in

[src/commands/SlashCommandBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/SlashCommandBuilder.ts#L34)

___

### dm\_permission

• `Optional` **dm\_permission**: `boolean`

Whether the command is visible in DMs - Only available for global commands and defaults to true.

#### Inherited from

CommandBuilderBase.dm\_permission

#### Defined in

[src/commands/CommandBuilderBase.ts:37](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandBuilderBase.ts#L37)

___

### name

• **name**: `string`

The name of this context menu command

#### Inherited from

CommandBuilderBase.name

#### Defined in

[src/commands/CommandBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandBuilderBase.ts#L22)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

The localized names for this command

#### Inherited from

CommandBuilderBase.name\_localizations

#### Defined in

[src/commands/CommandBuilderBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandBuilderBase.ts#L27)

___

### options

• **options**: [`ToAPIApplicationCommandOptions`](../interfaces/ToAPIApplicationCommandOptions.md)[] = `[]`

#### Defined in

[src/commands/SlashCommandBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/SlashCommandBuilder.ts#L36)

___

### type

• **type**: `ChatInput` = `ApplicationCommandType.ChatInput`

#### Overrides

CommandBuilderBase.type

#### Defined in

[src/commands/SlashCommandBuilder.ts:31](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/SlashCommandBuilder.ts#L31)

## Methods

### addAttachmentOption

▸ **addAttachmentOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds an attachment option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addBooleanOption

▸ **addBooleanOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a boolean option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandBooleanOption`](SlashCommandBooleanOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addChannelOption

▸ **addChannelOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a channel option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandChannelOption`](SlashCommandChannelOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addIntegerOption

▸ **addIntegerOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds an integer option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md) \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"addChoices"``\> | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addMentionableOption

▸ **addMentionableOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a mentionable option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addNumberOption

▸ **addNumberOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a number option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandNumberOption`](SlashCommandNumberOption.md) \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"addChoices"``\> | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addRequiredPermissions

▸ **addRequiredPermissions**(...`permissions`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.addRequiredPermissions

___

### addRoleOption

▸ **addRoleOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a role option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandRoleOption`](SlashCommandRoleOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addStringOption

▸ **addStringOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a string option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandStringOption`](SlashCommandStringOption.md) \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"addChoices"``\> | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### addUserOption

▸ **addUserOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Adds a user option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandUserOption`](SlashCommandUserOption.md) | A function that returns an option builder, or an already built builder |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.clearRequiredPermissions

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.disallowAllPermissions

___

### equals

▸ **equals**(`remote`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `remote` | `APIApplicationCommand` & { `type`: `ChatInput`  } |

#### Returns

`boolean`

#### Overrides

CommandBuilderBase.equals

___

### removeRequiredPermissions

▸ **removeRequiredPermissions**(...`permissions`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.removeRequiredPermissions

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set whether this command will be visible in DMs - Only applicable to Global commands.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setDMEnabled

___

### setDescription

▸ **setDescription**(`description`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set the description

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set a dictionary of localized descriptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set a single locale's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set a single locale's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setLocalizedName

___

### setName

▸ **setName**(`name`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set the name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setName

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setNameLocalizations

___

### setRequiredPermissions

▸ **setRequiredPermissions**(`permissions`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Bitfield`](Bitfield.md) |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setRequiredPermissions

___

### toJSON

▸ **toJSON**(): [`SlashCommandData`](../modules.md#slashcommanddata)

#### Returns

[`SlashCommandData`](../modules.md#slashcommanddata)

#### Overrides

CommandBuilderBase.toJSON
