[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / SlashCommandBuilder

# Class: SlashCommandBuilder

## Hierarchy

- `CommandBuilder`<`RESTPostAPIChatInputApplicationCommandsJSONBody`\>

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

CommandBuilder&lt;RESTPostAPIChatInputApplicationCommandsJSONBody\&gt;.constructor

#### Defined in

[src/commands/SlashCommandBuilder.ts:33](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L33)

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

#### Inherited from

CommandBuilder.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:37](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L37)

___

### description

• **description**: `string`

#### Defined in

[src/commands/SlashCommandBuilder.ts:28](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L28)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Defined in

[src/commands/SlashCommandBuilder.ts:29](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L29)

___

### dm\_permission

• `Optional` **dm\_permission**: `boolean`

#### Inherited from

CommandBuilder.dm\_permission

#### Defined in

[src/commands/CommandBuilderBase.ts:32](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L32)

___

### name

• **name**: `string`

#### Inherited from

CommandBuilder.name

#### Defined in

[src/commands/CommandBuilderBase.ts:17](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L17)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Inherited from

CommandBuilder.name\_localizations

#### Defined in

[src/commands/CommandBuilderBase.ts:22](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L22)

___

### options

• **options**: [`ToAPIApplicationCommandOptions`](../interfaces/ToAPIApplicationCommandOptions.md)[] = `[]`

#### Defined in

[src/commands/SlashCommandBuilder.ts:31](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L31)

___

### type

• **type**: `ChatInput` = `ApplicationCommandType.ChatInput`

#### Overrides

CommandBuilder.type

#### Defined in

[src/commands/SlashCommandBuilder.ts:26](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L26)

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

[src/commands/SlashCommandBuilder.ts:112](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L112)

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

[src/commands/SlashCommandBuilder.ts:72](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L72)

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

[src/commands/SlashCommandBuilder.ts:92](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L92)

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

[src/commands/SlashCommandBuilder.ts:147](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L147)

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

[src/commands/SlashCommandBuilder.ts:122](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L122)

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

[src/commands/SlashCommandBuilder.ts:162](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L162)

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

CommandBuilder.addRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:94](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L94)

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

[src/commands/SlashCommandBuilder.ts:102](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L102)

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

[src/commands/SlashCommandBuilder.ts:132](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L132)

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

[src/commands/SlashCommandBuilder.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L82)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilder.clearRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:106](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L106)

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Returns

[`SlashCommandBuilder`](SlashCommandBuilder.md)

#### Inherited from

CommandBuilder.disallowAllPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:112](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L112)

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

CommandBuilder.equals

#### Defined in

[src/commands/SlashCommandBuilder.ts:172](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L172)

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

CommandBuilder.removeRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:100](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L100)

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

CommandBuilder.setDMEnabled

#### Defined in

[src/commands/CommandBuilderBase.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L82)

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

[src/commands/SlashCommandBuilder.ts:44](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L44)

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

[src/commands/SlashCommandBuilder.ts:53](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L53)

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

[src/commands/SlashCommandBuilder.ts:62](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L62)

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

CommandBuilder.setLocalizedName

#### Defined in

[src/commands/CommandBuilderBase.ts:73](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L73)

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

CommandBuilder.setName

#### Defined in

[src/commands/CommandBuilderBase.ts:55](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L55)

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

CommandBuilder.setNameLocalizations

#### Defined in

[src/commands/CommandBuilderBase.ts:64](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L64)

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

CommandBuilder.setRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:88](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L88)

___

### toJSON

▸ **toJSON**(): `Omit`<`APIApplicationCommand` & { `type`: `ChatInput`  }, ``"id"`` \| ``"guild_id"`` \| ``"application_id"`` \| ``"version"``\>

#### Returns

`Omit`<`APIApplicationCommand` & { `type`: `ChatInput`  }, ``"id"`` \| ``"guild_id"`` \| ``"application_id"`` \| ``"version"``\>

#### Overrides

CommandBuilder.toJSON

#### Defined in

[src/commands/SlashCommandBuilder.ts:250](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/SlashCommandBuilder.ts#L250)
