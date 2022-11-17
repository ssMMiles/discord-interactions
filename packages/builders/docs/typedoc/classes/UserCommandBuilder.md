[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / UserCommandBuilder

# Class: UserCommandBuilder

## Hierarchy

- `CommandBuilderBase`<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `ApplicationCommandType.User`  }\>

  ↳ **`UserCommandBuilder`**

## Table of contents

### Constructors

- [constructor](UserCommandBuilder.md#constructor)

### Properties

- [default\_member\_permissions](UserCommandBuilder.md#default_member_permissions)
- [dm\_permission](UserCommandBuilder.md#dm_permission)
- [name](UserCommandBuilder.md#name)
- [name\_localizations](UserCommandBuilder.md#name_localizations)
- [type](UserCommandBuilder.md#type)

### Methods

- [addRequiredPermissions](UserCommandBuilder.md#addrequiredpermissions)
- [clearRequiredPermissions](UserCommandBuilder.md#clearrequiredpermissions)
- [disallowAllPermissions](UserCommandBuilder.md#disallowallpermissions)
- [equals](UserCommandBuilder.md#equals)
- [removeRequiredPermissions](UserCommandBuilder.md#removerequiredpermissions)
- [setDMEnabled](UserCommandBuilder.md#setdmenabled)
- [setLocalizedName](UserCommandBuilder.md#setlocalizedname)
- [setName](UserCommandBuilder.md#setname)
- [setNameLocalizations](UserCommandBuilder.md#setnamelocalizations)
- [setRequiredPermissions](UserCommandBuilder.md#setrequiredpermissions)
- [toJSON](UserCommandBuilder.md#tojson)

## Constructors

### constructor

• **new UserCommandBuilder**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `User`  } |

#### Inherited from

CommandBuilderBase<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
\>.constructor

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

Default member permissions required to use the command

#### Inherited from

CommandBuilderBase.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:48](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/commands/CommandBuilderBase.ts#L48)

___

### dm\_permission

• `Optional` **dm\_permission**: `boolean`

Whether the command is visible in DMs - Only available for global commands and defaults to true.

#### Inherited from

CommandBuilderBase.dm\_permission

#### Defined in

[src/commands/CommandBuilderBase.ts:43](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/commands/CommandBuilderBase.ts#L43)

___

### name

• **name**: `string`

The name of this context menu command

#### Inherited from

CommandBuilderBase.name

#### Defined in

[src/commands/CommandBuilderBase.ts:28](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/commands/CommandBuilderBase.ts#L28)

___

### name\_localizations

• **name\_localizations**: `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> = `{}`

The localized names for this command

#### Inherited from

CommandBuilderBase.name\_localizations

#### Defined in

[src/commands/CommandBuilderBase.ts:33](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/commands/CommandBuilderBase.ts#L33)

___

### type

• **type**: `User` = `ApplicationCommandType.User`

#### Overrides

CommandBuilderBase.type

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/e15756f/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L18)

## Methods

### addRequiredPermissions

▸ **addRequiredPermissions**(...`permissions`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.addRequiredPermissions

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.clearRequiredPermissions

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.disallowAllPermissions

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `APIApplicationCommand` & { `type`: `User`  } |

#### Returns

`boolean`

#### Overrides

CommandBuilderBase.equals

___

### removeRequiredPermissions

▸ **removeRequiredPermissions**(...`permissions`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.removeRequiredPermissions

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`UserCommandBuilder`](UserCommandBuilder.md)

Set whether this command will be visible in DMs - Only applicable to Global commands.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setDMEnabled

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`UserCommandBuilder`](UserCommandBuilder.md)

Set a single locale's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setLocalizedName

___

### setName

▸ **setName**(`name`): [`UserCommandBuilder`](UserCommandBuilder.md)

Set the name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setName

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`UserCommandBuilder`](UserCommandBuilder.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setNameLocalizations

___

### setRequiredPermissions

▸ **setRequiredPermissions**(`permissions`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Bitfield`](Bitfield.md) |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setRequiredPermissions

___

### toJSON

▸ **toJSON**(): [`UserCommandData`](../modules.md#usercommanddata)

#### Returns

[`UserCommandData`](../modules.md#usercommanddata)

#### Overrides

CommandBuilderBase.toJSON
