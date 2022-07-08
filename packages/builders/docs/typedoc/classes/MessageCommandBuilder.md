[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / MessageCommandBuilder

# Class: MessageCommandBuilder

## Hierarchy

- `CommandBuilderBase`<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `ApplicationCommandType.Message`  }\>

  ↳ **`MessageCommandBuilder`**

## Table of contents

### Constructors

- [constructor](MessageCommandBuilder.md#constructor)

### Properties

- [default\_member\_permissions](MessageCommandBuilder.md#default_member_permissions)
- [dm\_permission](MessageCommandBuilder.md#dm_permission)
- [name](MessageCommandBuilder.md#name)
- [name\_localizations](MessageCommandBuilder.md#name_localizations)
- [type](MessageCommandBuilder.md#type)

### Methods

- [addRequiredPermissions](MessageCommandBuilder.md#addrequiredpermissions)
- [clearRequiredPermissions](MessageCommandBuilder.md#clearrequiredpermissions)
- [disallowAllPermissions](MessageCommandBuilder.md#disallowallpermissions)
- [equals](MessageCommandBuilder.md#equals)
- [removeRequiredPermissions](MessageCommandBuilder.md#removerequiredpermissions)
- [setDMEnabled](MessageCommandBuilder.md#setdmenabled)
- [setLocalizedName](MessageCommandBuilder.md#setlocalizedname)
- [setName](MessageCommandBuilder.md#setname)
- [setNameLocalizations](MessageCommandBuilder.md#setnamelocalizations)
- [setRequiredPermissions](MessageCommandBuilder.md#setrequiredpermissions)
- [toJSON](MessageCommandBuilder.md#tojson)

## Constructors

### constructor

• **new MessageCommandBuilder**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `Message`  } |

#### Inherited from

CommandBuilderBase<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }
\>.constructor

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

Default member permissions required to use the command

#### Inherited from

CommandBuilderBase.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:42](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/CommandBuilderBase.ts#L42)

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

### type

• **type**: `Message` = `ApplicationCommandType.Message`

#### Overrides

CommandBuilderBase.type

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:42](https://github.com/ssMMiles/discord-interactions/blob/aef28b7/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L42)

## Methods

### addRequiredPermissions

▸ **addRequiredPermissions**(...`permissions`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.addRequiredPermissions

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.clearRequiredPermissions

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.disallowAllPermissions

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `APIApplicationCommand` & { `type`: `Message`  } |

#### Returns

`boolean`

#### Overrides

CommandBuilderBase.equals

___

### removeRequiredPermissions

▸ **removeRequiredPermissions**(...`permissions`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...permissions` | `bigint`[] |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.removeRequiredPermissions

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

Set whether this command will be visible in DMs - Only applicable to Global commands.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setDMEnabled

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

Set a single locale's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setLocalizedName

___

### setName

▸ **setName**(`name`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

Set the name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setName

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

Set a dictionary of localized names

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setNameLocalizations

___

### setRequiredPermissions

▸ **setRequiredPermissions**(`permissions`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Bitfield`](Bitfield.md) |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setRequiredPermissions

___

### toJSON

▸ **toJSON**(): [`MessageCommandData`](../modules.md#messagecommanddata)

#### Returns

[`MessageCommandData`](../modules.md#messagecommanddata)

#### Overrides

CommandBuilderBase.toJSON
