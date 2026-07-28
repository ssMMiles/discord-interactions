[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SlashCommandBuilder

# Class: SlashCommandBuilder

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L18)

## Extends

- `ChatInputCommandBuilderBase`\<`APIApplicationCommandBasicOption`\>

## Constructors

### Constructor

> **new SlashCommandBuilder**(`name`, `description?`): `SlashCommandBuilder`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:258](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L258)

#### Parameters

##### name

`string` \| `RESTPostAPIChatInputApplicationCommandsJSONBody`

##### description?

`string`

#### Returns

`SlashCommandBuilder`

#### Inherited from

`ChatInputCommandBuilderBase<APIApplicationCommandBasicOption>.constructor`

## Properties

### contexts?

> `optional` **contexts?**: `InteractionContextType`[]

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:66](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L66)

Interaction contexts where this command can be used - Only for global commands.

#### Inherited from

`ChatInputCommandBuilderBase.contexts`

***

### default\_member\_permissions

> **default\_member\_permissions**: [`Bitfield`](Bitfield.md)

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:56](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L56)

Default member permissions required to use the command

#### Inherited from

`ChatInputCommandBuilderBase.default_member_permissions`

***

### description

> **description**: `string`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:253](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L253)

#### Inherited from

`ChatInputCommandBuilderBase.description`

***

### description\_localizations

> **description\_localizations**: `LocalizationMap` = `{}`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:254](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L254)

#### Inherited from

`ChatInputCommandBuilderBase.description_localizations`

***

### ~~dm\_permission?~~

> `optional` **dm\_permission?**: `boolean`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:51](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L51)

Whether the command is visible in DMs - Only available for global commands and defaults to true.

#### Deprecated

Use CommandBuilderBase.setContexts instead.

#### Inherited from

`ChatInputCommandBuilderBase.dm_permission`

***

### integration\_types?

> `optional` **integration\_types?**: `ApplicationIntegrationType`[]

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L61)

Installation contexts where this command is available - Only for global commands.

#### Inherited from

`ChatInputCommandBuilderBase.integration_types`

***

### name

> **name**: `string`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:35](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L35)

The name of this context menu command

#### Inherited from

`ChatInputCommandBuilderBase.name`

***

### name\_localizations

> **name\_localizations**: `LocalizationMap` = `{}`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L40)

The localized names for this command

#### Inherited from

`ChatInputCommandBuilderBase.name_localizations`

***

### nsfw?

> `optional` **nsfw?**: `boolean`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:71](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L71)

Whether this command is age-restricted.

#### Inherited from

`ChatInputCommandBuilderBase.nsfw`

***

### options

> **options**: `ToAPIApplicationCommandOptions`\<`APIApplicationCommandBasicOption`\>[] = `[]`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:256](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L256)

#### Inherited from

`ChatInputCommandBuilderBase.options`

***

### type

> **type**: `ChatInput` = `ApplicationCommandType.ChatInput`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:251](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L251)

The type of this context menu command

#### Inherited from

`ChatInputCommandBuilderBase.type`

## Methods

### addAttachmentOption()

> **addAttachmentOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L64)

Adds an attachment option

#### Parameters

##### input

[`SlashCommandAttachmentOption`](SlashCommandAttachmentOption.md)

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addBooleanOption()

> **addBooleanOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:24](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L24)

Adds a boolean option

#### Parameters

##### input

[`SlashCommandBooleanOption`](SlashCommandBooleanOption.md)

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addChannelOption()

> **addChannelOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L44)

Adds a channel option

#### Parameters

##### input

[`SlashCommandChannelOption`](SlashCommandChannelOption.md)

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addIntegerOption()

> **addIntegerOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:99](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L99)

Adds an integer option

#### Parameters

##### input

[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md) \| `Omit`\<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), `"setAutocomplete"`\> \| `Omit`\<[`SlashCommandIntegerOption`](SlashCommandIntegerOption.md), `"addChoices"`\>

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addMentionableOption()

> **addMentionableOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:74](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L74)

Adds a mentionable option

#### Parameters

##### input

[`SlashCommandMentionableOption`](SlashCommandMentionableOption.md)

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addNumberOption()

> **addNumberOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:114](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L114)

Adds a number option

#### Parameters

##### input

[`SlashCommandNumberOption`](SlashCommandNumberOption.md) \| `Omit`\<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), `"setAutocomplete"`\> \| `Omit`\<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), `"addChoices"`\>

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addRequiredPermissions()

> **addRequiredPermissions**(...`permissions`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:176](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L176)

#### Parameters

##### permissions

...`bigint`[]

#### Returns

`this`

#### Inherited from

`ChatInputCommandBuilderBase.addRequiredPermissions`

***

### addRoleOption()

> **addRoleOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L54)

Adds a role option

#### Parameters

##### input

[`SlashCommandRoleOption`](SlashCommandRoleOption.md)

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addStringOption()

> **addStringOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:84](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L84)

Adds a string option

#### Parameters

##### input

[`SlashCommandStringOption`](SlashCommandStringOption.md) \| `Omit`\<[`SlashCommandStringOption`](SlashCommandStringOption.md), `"setAutocomplete"`\> \| `Omit`\<[`SlashCommandStringOption`](SlashCommandStringOption.md), `"addChoices"`\>

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addUserOption()

> **addUserOption**(`input`): `this`

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L34)

Adds a user option

#### Parameters

##### input

[`SlashCommandUserOption`](SlashCommandUserOption.md)

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### clearRequiredPermissions()

> **clearRequiredPermissions**(): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:188](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L188)

#### Returns

`this`

#### Inherited from

`ChatInputCommandBuilderBase.clearRequiredPermissions`

***

### disallowAllPermissions()

> **disallowAllPermissions**(): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:194](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L194)

#### Returns

`this`

#### Inherited from

`ChatInputCommandBuilderBase.disallowAllPermissions`

***

### equals()

> **equals**(`remote`): `boolean`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:292](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L292)

#### Parameters

##### remote

`APIApplicationCommand` & `object`

#### Returns

`boolean`

#### Inherited from

`ChatInputCommandBuilderBase.equals`

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

`ChatInputCommandBuilderBase.removeRequiredPermissions`

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

`ChatInputCommandBuilderBase.setContexts`

***

### setDescription()

> **setDescription**(`description`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:269](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L269)

Set the description

#### Parameters

##### description

`string`

The description

#### Returns

`this`

#### Inherited from

`ChatInputCommandBuilderBase.setDescription`

***

### setDescriptionLocalizations()

> **setDescriptionLocalizations**(`localizations`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:278](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L278)

Set a dictionary of localized descriptions

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`this`

#### Inherited from

`ChatInputCommandBuilderBase.setDescriptionLocalizations`

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

`ChatInputCommandBuilderBase.setDMEnabled`

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

`ChatInputCommandBuilderBase.setIntegrationTypes`

***

### setLocalizedDescription()

> **setLocalizedDescription**(`locale`, `description`): `this`

Defined in: [packages/builders/src/commands/CommandBuilderBase.ts:287](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/CommandBuilderBase.ts#L287)

Set a single locale's description

#### Parameters

##### locale

`Locale`

##### description

`string`

#### Returns

`this`

#### Inherited from

`ChatInputCommandBuilderBase.setLocalizedDescription`

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

`ChatInputCommandBuilderBase.setLocalizedName`

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

`ChatInputCommandBuilderBase.setName`

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

`ChatInputCommandBuilderBase.setNameLocalizations`

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

`ChatInputCommandBuilderBase.setNSFW`

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

`ChatInputCommandBuilderBase.setRequiredPermissions`

***

### toJSON()

> **toJSON**(): [`SlashCommandData`](../type-aliases/SlashCommandData.md)

Defined in: [packages/builders/src/commands/SlashCommandBuilder.ts:124](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/SlashCommandBuilder.ts#L124)

Returns the final data that should be sent to Discord.

#### Returns

[`SlashCommandData`](../type-aliases/SlashCommandData.md)

#### Overrides

`ChatInputCommandBuilderBase.toJSON`
