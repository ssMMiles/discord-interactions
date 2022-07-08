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

#### Defined in

[src/commands/CommandBuilderBase.ts:44](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L44)

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

#### Inherited from

CommandBuilderBase.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:42](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L42)

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

### type

• **type**: `User` = `ApplicationCommandType.User`

#### Overrides

CommandBuilderBase.type

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L18)

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

#### Defined in

[src/commands/CommandBuilderBase.ts:99](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L99)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.clearRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:111](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L111)

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.disallowAllPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:117](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L117)

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

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:30](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L30)

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

#### Defined in

[src/commands/CommandBuilderBase.ts:105](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L105)

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setDMEnabled

#### Defined in

[src/commands/CommandBuilderBase.ts:87](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L87)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setLocalizedName

#### Defined in

[src/commands/CommandBuilderBase.ts:78](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L78)

___

### setName

▸ **setName**(`name`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setName

#### Defined in

[src/commands/CommandBuilderBase.ts:60](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L60)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilderBase.setNameLocalizations

#### Defined in

[src/commands/CommandBuilderBase.ts:69](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L69)

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

#### Defined in

[src/commands/CommandBuilderBase.ts:93](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/CommandBuilderBase.ts#L93)

___

### toJSON

▸ **toJSON**(): [`UserCommandData`](../modules.md#usercommanddata)

#### Returns

[`UserCommandData`](../modules.md#usercommanddata)

#### Overrides

CommandBuilderBase.toJSON

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:20](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L20)
