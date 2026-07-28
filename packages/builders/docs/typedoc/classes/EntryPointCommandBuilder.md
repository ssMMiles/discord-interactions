[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / EntryPointCommandBuilder

# Class: EntryPointCommandBuilder

Defined in: [packages/builders/src/commands/EntryPointCommandBuilder.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/EntryPointCommandBuilder.ts#L15)

An app's Entry Point command - the primary way to launch its Activity.
Only one global Entry Point command is allowed, and it cannot be guild-scoped.

## Extends

- `CommandBuilderBase`\<`RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody` & `object`\>

## Constructors

### Constructor

> **new EntryPointCommandBuilder**(`data`): `EntryPointCommandBuilder`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:73](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L73)

#### Parameters

##### data

`string` \| `RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody` & `object`

#### Returns

`EntryPointCommandBuilder`

#### Inherited from

`CommandBuilderBase< RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody & { type: ApplicationCommandType.PrimaryEntryPoint } >.constructor`

## Properties

### contexts?

> `optional` **contexts?**: `InteractionContextType`[]

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:66](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L66)

Interaction contexts where this command can be used - Only for global commands.

#### Inherited from

`CommandBuilderBase.contexts`

***

### default\_member\_permissions

> **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:56](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L56)

Default member permissions required to use the command

#### Inherited from

`CommandBuilderBase.default_member_permissions`

***

### ~~dm\_permission?~~

> `optional` **dm\_permission?**: `boolean`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L51)

Whether the command is visible in DMs - Only available for global commands and defaults to true.

#### Deprecated

Use CommandBuilderBase.setContexts instead.

#### Inherited from

`CommandBuilderBase.dm_permission`

***

### handler?

> `optional` **handler?**: [`EntryPointCommandHandlerType`](../enumerations/EntryPointCommandHandlerType.md)

Defined in: [packages/builders/src/commands/EntryPointCommandBuilder.ts:23](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/EntryPointCommandBuilder.ts#L23)

How interactions with this command are handled.

***

### integration\_types?

> `optional` **integration\_types?**: `ApplicationIntegrationType`[]

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L61)

Installation contexts where this command is available - Only for global commands.

#### Inherited from

`CommandBuilderBase.integration_types`

***

### name

> **name**: `string`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:35](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L35)

The name of this context menu command

#### Inherited from

`CommandBuilderBase.name`

***

### name\_localizations

> **name\_localizations**: `LocalizationMap` = `{}`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L40)

The localized names for this command

#### Inherited from

`CommandBuilderBase.name_localizations`

***

### nsfw?

> `optional` **nsfw?**: `boolean`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:71](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L71)

Whether this command is age-restricted.

#### Inherited from

`CommandBuilderBase.nsfw`

***

### type

> **type**: `PrimaryEntryPoint` = `ApplicationCommandType.PrimaryEntryPoint`

Defined in: [packages/builders/src/commands/EntryPointCommandBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/EntryPointCommandBuilder.ts#L18)

The type of this context menu command

#### Overrides

`CommandBuilderBase.type`

## Methods

### addRequiredPermissions()

> **addRequiredPermissions**(...`permissions`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:176](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L176)

#### Parameters

##### permissions

...`bigint`[]

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.addRequiredPermissions`

***

### clearRequiredPermissions()

> **clearRequiredPermissions**(): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:188](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L188)

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.clearRequiredPermissions`

***

### disallowAllPermissions()

> **disallowAllPermissions**(): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:194](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L194)

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.disallowAllPermissions`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [packages/builders/src/commands/EntryPointCommandBuilder.ts:46](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/EntryPointCommandBuilder.ts#L46)

#### Parameters

##### other

`APIApplicationCommand` & `object`

#### Returns

`boolean`

#### Overrides

`CommandBuilderBase.equals`

***

### removeRequiredPermissions()

> **removeRequiredPermissions**(...`permissions`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:182](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L182)

#### Parameters

##### permissions

...`bigint`[]

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.removeRequiredPermissions`

***

### setContexts()

> **setContexts**(...`contexts`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:137](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L137)

Set the interaction contexts where this command can be used (guild, bot DM, private channel).
Only applicable to Global commands.

#### Parameters

##### contexts

...`InteractionContextType`[]

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setContexts`

***

### ~~setDMEnabled()~~

> **setDMEnabled**(`value`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:117](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L117)

Set whether this command will be visible in DMs - Only applicable to Global commands.

#### Parameters

##### value

`boolean`

#### Returns

`this`

#### Deprecated

Use CommandBuilderBase.setContexts instead.

#### Inherited from

`CommandBuilderBase.setDMEnabled`

***

### setHandler()

> **setHandler**(`handler`): `this`

Defined in: [packages/builders/src/commands/EntryPointCommandBuilder.ts:30](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/EntryPointCommandBuilder.ts#L30)

Set whether interactions are handled by your app (AppHandler) or by Discord
launching your Activity directly (DiscordLaunchActivity).
Only valid for apps with the EMBEDDED flag.

#### Parameters

##### handler

[`EntryPointCommandHandlerType`](../enumerations/EntryPointCommandHandlerType.md)

#### Returns

`this`

***

### setIntegrationTypes()

> **setIntegrationTypes**(...`integrationTypes`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:127](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L127)

Set the installation contexts where this command is available (guild install and/or user install).
Only applicable to Global commands.

#### Parameters

##### integrationTypes

...`ApplicationIntegrationType`[]

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setIntegrationTypes`

***

### setLocalizedName()

> **setLocalizedName**(`locale`, `name`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:107](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L107)

Set a single locale's name

#### Parameters

##### locale

`Locale`

##### name

`string`

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setLocalizedName`

***

### setName()

> **setName**(`name`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:89](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L89)

Set the name

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setName`

***

### setNameLocalizations()

> **setNameLocalizations**(`localizations`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:98](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L98)

Set a dictionary of localized names

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setNameLocalizations`

***

### setNSFW()

> **setNSFW**(`nsfw?`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:146](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L146)

Set whether this command is age-restricted.

#### Parameters

##### nsfw?

`boolean` = `true`

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setNSFW`

***

### setRequiredPermissions()

> **setRequiredPermissions**(`permissions`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:170](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L170)

#### Parameters

##### permissions

[`Bitfield`](Bitfield.md)

#### Returns

`this`

#### Inherited from

`CommandBuilderBase.setRequiredPermissions`

***

### toJSON()

> **toJSON**(): [`EntryPointCommandData`](../type-aliases/EntryPointCommandData.md)

Defined in: [packages/builders/src/commands/EntryPointCommandBuilder.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/EntryPointCommandBuilder.ts#L36)

Returns the final data that should be sent to Discord.

#### Returns

[`EntryPointCommandData`](../type-aliases/EntryPointCommandData.md)

#### Overrides

`CommandBuilderBase.toJSON`
