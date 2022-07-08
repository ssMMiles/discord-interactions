[@discord-interactions/builders](../README.md) / [Exports](../modules.md) / MessageCommandBuilder

# Class: MessageCommandBuilder

## Hierarchy

- `CommandBuilder`<`RESTPostAPIContextMenuApplicationCommandsJSONBody` & { `type`: `ApplicationCommandType.Message`  }\>

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

CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }
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

• **type**: `Message` = `ApplicationCommandType.Message`

#### Overrides

CommandBuilder.type

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:37](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L37)

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

CommandBuilder.addRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:94](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L94)

___

### clearRequiredPermissions

▸ **clearRequiredPermissions**(): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilder.clearRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:106](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L106)

___

### disallowAllPermissions

▸ **disallowAllPermissions**(): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

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
| `other` | `APIApplicationCommand` & { `type`: `Message`  } |

#### Returns

`boolean`

#### Overrides

CommandBuilder.equals

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:54](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L54)

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

CommandBuilder.removeRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:100](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L100)

___

### setDMEnabled

▸ **setDMEnabled**(`value`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilder.setDMEnabled

#### Defined in

[src/commands/CommandBuilderBase.ts:82](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L82)

___

### setLocalizedName

▸ **setLocalizedName**(`locale`, `name`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"`` |
| `name` | `string` |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilder.setLocalizedName

#### Defined in

[src/commands/CommandBuilderBase.ts:73](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L73)

___

### setName

▸ **setName**(`name`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilder.setName

#### Defined in

[src/commands/CommandBuilderBase.ts:55](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L55)

___

### setNameLocalizations

▸ **setNameLocalizations**(`localizations`): [`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localizations` | `Partial`<`Record`<``"hr"`` \| ``"th"`` \| ``"tr"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |

#### Returns

[`MessageCommandBuilder`](MessageCommandBuilder.md)

#### Inherited from

CommandBuilder.setNameLocalizations

#### Defined in

[src/commands/CommandBuilderBase.ts:64](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L64)

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

CommandBuilder.setRequiredPermissions

#### Defined in

[src/commands/CommandBuilderBase.ts:88](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/CommandBuilderBase.ts#L88)

___

### toJSON

▸ **toJSON**(): `Omit`<`APIApplicationCommand` & { `type`: `Message`  }, ``"description"`` \| ``"id"`` \| ``"guild_id"`` \| ``"application_id"`` \| ``"version"``\>

#### Returns

`Omit`<`APIApplicationCommand` & { `type`: `Message`  }, ``"description"`` \| ``"id"`` \| ``"guild_id"`` \| ``"application_id"`` \| ``"version"``\>

#### Overrides

CommandBuilder.toJSON

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:39](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L39)
