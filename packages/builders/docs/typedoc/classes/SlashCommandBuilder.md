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

#### Defined in

[src/commands/SlashCommandBuilder.ts:38](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L38)

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

#### Inherited from

CommandBuilderBase.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:42](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L42)

___

### description

• **description**: `string`

#### Defined in

[src/commands/SlashCommandBuilder.ts:33](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L33)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Defined in

[src/commands/SlashCommandBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L34)

___

### dm\_permission

• `Optional` **dm\_permission**: `boolean`

#### Inherited from

CommandBuilderBase.dm\_permission

#### Defined in

[src/commands/CommandBuilderBase.ts:37](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L37)

___

### name

• **name**: `string`

#### Inherited from

CommandBuilderBase.name

#### Defined in

[src/commands/CommandBuilderBase.ts:22](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L22)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

CommandBuilderBase.name\_localizations

#### Defined in

[src/commands/CommandBuilderBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L27)

___

### options

• **options**: [`ToAPIApplicationCommandOptions`](../interfaces/ToAPIApplicationCommandOptions.md)[] = `[]`

#### Defined in

[src/commands/SlashCommandBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L36)

___

### type

• **type**: `ChatInput` = `ApplicationCommandType.ChatInput`

#### Overrides

CommandBuilderBase.type

#### Defined in

[src/commands/SlashCommandBuilder.ts:31](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L31)

## Methods

### addAttachmentOption

▸ **addAttachmentOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md) |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:117](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L117)

___

### addBooleanOption

▸ **addBooleanOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandBooleanOption`](SlashCommandBooleanOption.md) |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:77](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L77)

___

### addChannelOption

▸ **addChannelOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandChannelOption`](SlashCommandChannelOption.md) |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:97](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L97)

___

### addIntegerOption

▸ **addIntegerOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandIntegerOption`](SlashCommandIntegerOption.md) \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), ``"addChoices"``\> |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:152](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L152)

___

### addMentionableOption

▸ **addMentionableOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandMentionableOption`](SlashCommandMentionableOption.md) |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:127](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L127)

___

### addNumberOption

▸ **addNumberOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandNumberOption`](SlashCommandNumberOption.md) \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), ``"addChoices"``\> |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:167](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L167)

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

#### Defined in

[src/commands/CommandBuilderBase.ts:99](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L99)

___

### addRoleOption

▸ **addRoleOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandRoleOption`](SlashCommandRoleOption.md) |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:107](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L107)

___

### addStringOption

▸ **addStringOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandStringOption`](SlashCommandStringOption.md) \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"setAutocomplete"``\> \| `Omit`<[`SlashCommandStringOption`](SlashCommandStringOption.md), ``"addChoices"``\> |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:137](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L137)

___

### addUserOption

▸ **addUserOption**(`input`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`SlashCommandUserOption`](SlashCommandUserOption.md) |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:87](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L87)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.clearRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:111](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L111)

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.disallowAllPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:117](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L117)

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

#### Defined in

[src/commands/SlashCommandBuilder.ts:177](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L177)

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

#### Defined in

[src/commands/CommandBuilderBase.ts:105](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L105)

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setDMEnabled

#### Defined in

[src/commands/CommandBuilderBase.ts:87](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L87)

___

### setDescription

▸ **setDescription**(`description`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` |  |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:49](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L49)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:58](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L58)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Defined in

[src/commands/SlashCommandBuilder.ts:67](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L67)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setLocalizedName

#### Defined in

[src/commands/CommandBuilderBase.ts:78](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L78)

___

### setName

▸ **setName**(`name`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setName

#### Defined in

[src/commands/CommandBuilderBase.ts:60](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L60)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setNameLocalizations

#### Defined in

[src/commands/CommandBuilderBase.ts:69](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L69)

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

#### Defined in

[src/commands/CommandBuilderBase.ts:93](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L93)

___

### toJSON

▸ **toJSON**(): [`SlashCommandData`](../modules.md#slashcommanddata)

#### Returns

[`SlashCommandData`](../modules.md#slashcommanddata)

#### Overrides

CommandBuilderBase.toJSON

#### Defined in

[src/commands/SlashCommandBuilder.ts:255](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/SlashCommandBuilder.ts#L255)
