[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / CommandGroupBuilder

# Class: CommandGroupBuilder

## Hierarchy

- `CommandBuilderBase`<`RESTPostAPIChatInputApplicationCommandsJSONBody`\>

  ↳ **`CommandGroupBuilder`**

## Table of contents

### Constructors

- [constructor](CommandGroupBuilder.md#constructor)

### Properties

- [default\_member\_permissions](CommandGroupBuilder.md#default_member_permissions)
- [description](CommandGroupBuilder.md#description)
- [description\_localizations](CommandGroupBuilder.md#description_localizations)
- [dm\_permission](CommandGroupBuilder.md#dm_permission)
- [name](CommandGroupBuilder.md#name)
- [name\_localizations](CommandGroupBuilder.md#name_localizations)
- [options](CommandGroupBuilder.md#options)
- [type](CommandGroupBuilder.md#type)

### Methods

- [addRequiredPermissions](CommandGroupBuilder.md#addrequiredpermissions)
- [addSubcommandGroups](CommandGroupBuilder.md#addsubcommandgroups)
- [addSubcommands](CommandGroupBuilder.md#addsubcommands)
- [clearRequiredPermissions](CommandGroupBuilder.md#clearrequiredpermissions)
- [disallowAllPermissions](CommandGroupBuilder.md#disallowallpermissions)
- [equals](CommandGroupBuilder.md#equals)
- [removeRequiredPermissions](CommandGroupBuilder.md#removerequiredpermissions)
- [setDMEnabled](CommandGroupBuilder.md#setdmenabled)
- [setDescription](CommandGroupBuilder.md#setdescription)
- [setDescriptionLocalizations](CommandGroupBuilder.md#setdescriptionlocalizations)
- [setLocalizedDescription](CommandGroupBuilder.md#setlocalizeddescription)
- [setLocalizedName](CommandGroupBuilder.md#setlocalizedname)
- [setName](CommandGroupBuilder.md#setname)
- [setNameLocalizations](CommandGroupBuilder.md#setnamelocalizations)
- [setRequiredPermissions](CommandGroupBuilder.md#setrequiredpermissions)
- [toJSON](CommandGroupBuilder.md#tojson)

## Constructors

### constructor

• **new CommandGroupBuilder**(`name`, `description`)

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

[src/commands/CommandGroupBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandGroupBuilder.ts#L24)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Defined in

[src/commands/CommandGroupBuilder.ts:25](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandGroupBuilder.ts#L25)

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

• **options**: [`ToAPIApplicationCommandGroupOptions`](../interfaces/ToAPIApplicationCommandGroupOptions.md)[] = `[]`

#### Defined in

[src/commands/CommandGroupBuilder.ts:27](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandGroupBuilder.ts#L27)

___

### type

• **type**: `ChatInput` = `ApplicationCommandType.ChatInput`

#### Overrides

CommandBuilderBase.type

#### Defined in

[src/commands/CommandGroupBuilder.ts:22](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandGroupBuilder.ts#L22)

## Methods

### addRequiredPermissions

▸ **addRequiredPermissions**(...`permissions`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.addRequiredPermissions

___

### addSubcommandGroups

▸ **addSubcommandGroups**(...`subcommandGroups`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Adds an integer option

#### Parameters

| Name | Type |
| :------ | :------ |
| `...subcommandGroups` | [`SubcommandGroupOption`](SubcommandGroupOption.md)[] |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

___

### addSubcommands

▸ **addSubcommands**(...`subcommands`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Adds a subcommand

#### Parameters

| Name | Type |
| :------ | :------ |
| `...subcommands` | [`SubcommandOption`](SubcommandOption.md)[] |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.clearRequiredPermissions

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.disallowAllPermissions

___

### equals

▸ **equals**(`remote`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `remote` | `APIApplicationCommand` |

#### Returns

`boolean`

#### Inherited from

CommandBuilderBase.equals

___

### removeRequiredPermissions

▸ **removeRequiredPermissions**(...`permissions`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.removeRequiredPermissions

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set whether this command will be visible in DMs - Only applicable to Global commands.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.setDMEnabled

___

### setDescription

▸ **setDescription**(`description`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set the description

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set a dictionary of localized descriptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set a single locale's description

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set a single locale's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.setLocalizedName

___

### setName

▸ **setName**(`name`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set the name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.setName

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.setNameLocalizations

___

### setRequiredPermissions

▸ **setRequiredPermissions**(`permissions`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Bitfield`](Bitfield.md) |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilderBase.setRequiredPermissions

___

### toJSON

▸ **toJSON**(): [`CommandGroupData`](../modules.md#commandgroupdata)

#### Returns

[`CommandGroupData`](../modules.md#commandgroupdata)

#### Overrides

CommandBuilderBase.toJSON
