[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / CommandGroupBuilder

# Class: CommandGroupBuilder

## Hierarchy

- `CommandBuilder`<`RESTPostAPIChatInputApplicationCommandsJSONBody`\>

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

CommandBuilder&lt;RESTPostAPIChatInputApplicationCommandsJSONBody\&gt;.constructor

#### Defined in

[src/commands/CommandGroupBuilder.ts:24](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L24)

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

[src/commands/CommandGroupBuilder.ts:19](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L19)

___

### description\_localizations

• **description\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

#### Defined in

[src/commands/CommandGroupBuilder.ts:20](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L20)

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

• **options**: [`ToAPIApplicationCommandGroupOptions`](../interfaces/ToAPIApplicationCommandGroupOptions.md)[] = `[]`

#### Defined in

[src/commands/CommandGroupBuilder.ts:22](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L22)

___

### type

• **type**: `ChatInput` = `ApplicationCommandType.ChatInput`

#### Overrides

CommandBuilder.type

#### Defined in

[src/commands/CommandGroupBuilder.ts:17](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L17)

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

CommandBuilder.addRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:94](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L94)

___

### addSubcommandGroups

▸ **addSubcommandGroups**(...`subcommandGroups`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...subcommandGroups` | [`SubcommandGroupOption`](SubcommandGroupOption.md)[] |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Defined in

[src/commands/CommandGroupBuilder.ts:63](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L63)

___

### addSubcommands

▸ **addSubcommands**(...`subcommands`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...subcommands` | [`SubcommandOption`](SubcommandOption.md)[] |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Defined in

[src/commands/CommandGroupBuilder.ts:74](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L74)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilder.clearRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:106](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L106)

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

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
| `remote` | `APIApplicationCommand` |

#### Returns

`boolean`

#### Inherited from

CommandBuilder.equals

#### Defined in

[src/commands/CommandBuilderBase.ts:118](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L118)

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

CommandBuilder.removeRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:100](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L100)

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilder.setDMEnabled

#### Defined in

[src/commands/CommandBuilderBase.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L82)

___

### setDescription

▸ **setDescription**(`description`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` |  |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Defined in

[src/commands/CommandGroupBuilder.ts:35](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L35)

___

### setDescriptionLocalizations

▸ **setDescriptionLocalizations**(`localizations`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Defined in

[src/commands/CommandGroupBuilder.ts:44](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L44)

___

### setLocalizedDescription

▸ **setLocalizedDescription**(`locale`, `description`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `description` | `string` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Defined in

[src/commands/CommandGroupBuilder.ts:53](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L53)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilder.setLocalizedName

#### Defined in

[src/commands/CommandBuilderBase.ts:73](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L73)

___

### setName

▸ **setName**(`name`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilder.setName

#### Defined in

[src/commands/CommandBuilderBase.ts:55](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L55)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`CommandGroupBuilder`](CommandGroupBuilder.md)

#### Inherited from

CommandBuilder.setNameLocalizations

#### Defined in

[src/commands/CommandBuilderBase.ts:64](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L64)

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

CommandBuilder.setRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:88](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L88)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `default_member_permissions` | ``null`` \| `string` |
| `description` | `string` |
| `description_localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |
| `dm_permission` | `undefined` \| `boolean` |
| `name` | `string` |
| `name_localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |
| `options` | (`APIApplicationCommandSubcommandOption` \| `APIApplicationCommandSubcommandGroupOption`)[] |
| `type` | `ChatInput` |

#### Overrides

CommandBuilder.toJSON

#### Defined in

[src/commands/CommandGroupBuilder.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandGroupBuilder.ts#L82)
