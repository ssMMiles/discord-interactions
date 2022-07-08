[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / UserCommandBuilder

# Class: UserCommandBuilder

## Hierarchy

- `CommandBuilder`<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `ApplicationCommandType.User`  }\>

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

CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
\>.constructor

#### Defined in

[src/commands/CommandBuilderBase.ts:39](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L39)

## Properties

### default\_member\_permissions

• **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

#### Inherited from

CommandBuilder.default\_member\_permissions

#### Defined in

[src/commands/CommandBuilderBase.ts:37](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L37)

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

### type

• **type**: `User` = `ApplicationCommandType.User`

#### Overrides

CommandBuilder.type

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:8](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L8)

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

CommandBuilder.addRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:94](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L94)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilder.clearRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:106](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L106)

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`UserCommandBuilder`](UserCommandBuilder.md)

#### Returns

[`UserCommandBuilder`](UserCommandBuilder.md)

#### Inherited from

CommandBuilder.disallowAllPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:112](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L112)

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

CommandBuilder.equals

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:25](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L25)

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

CommandBuilder.removeRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:100](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L100)

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

CommandBuilder.setDMEnabled

#### Defined in

[src/commands/CommandBuilderBase.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L82)

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

CommandBuilder.setLocalizedName

#### Defined in

[src/commands/CommandBuilderBase.ts:73](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L73)

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

CommandBuilder.setName

#### Defined in

[src/commands/CommandBuilderBase.ts:55](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L55)

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

CommandBuilder.setNameLocalizations

#### Defined in

[src/commands/CommandBuilderBase.ts:64](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L64)

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

CommandBuilder.setRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:88](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L88)

___

### toJSON

▸ **toJSON**(): `Omit`<`APIApplicationCommand` & { `type`: `User`  }, ``"description"`` \| ``"id"`` \| ``"guild_id"`` \| ``"application_id"`` \| ``"version"``\>

#### Returns

`Omit`<`APIApplicationCommand` & { `type`: `User`  }, ``"description"`` \| ``"id"`` \| ``"guild_id"`` \| ``"application_id"`` \| ``"version"``\>

#### Overrides

CommandBuilder.toJSON

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:10](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L10)
