[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SubcommandGroupOption

# Class: SubcommandGroupOption

Defined in: [packages/builders/src/commands/options/subcommand-group.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand-group.ts#L10)

## Extends

- `SlashCommandOptionBase`

## Constructors

### Constructor

> **new SubcommandGroupOption**(`name`, `description`): `SubcommandGroupOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L17)

#### Parameters

##### name

`string`

##### description

`string`

#### Returns

`SubcommandGroupOption`

#### Inherited from

`SlashCommandOptionBase.constructor`

## Properties

### description

> **description**: `string`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L14)

#### Inherited from

`SlashCommandOptionBase.description`

***

### description\_localizations

> **description\_localizations**: `LocalizationMap` = `{}`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L15)

#### Inherited from

`SlashCommandOptionBase.description_localizations`

***

### name

> **name**: `string`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L11)

#### Inherited from

`SlashCommandOptionBase.name`

***

### name\_localizations

> **name\_localizations**: `LocalizationMap` = `{}`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:12](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L12)

#### Inherited from

`SlashCommandOptionBase.name_localizations`

***

### options

> **options**: `ToAPIApplicationCommandOptions`\<`APIApplicationCommandSubcommandOption`\>[] = `[]`

Defined in: [packages/builders/src/commands/options/subcommand-group.ts:13](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand-group.ts#L13)

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

#### Inherited from

`SlashCommandOptionBase.required`

***

### type

> **type**: `SubcommandGroup`

Defined in: [packages/builders/src/commands/options/subcommand-group.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand-group.ts#L11)

#### Overrides

`SlashCommandOptionBase.type`

## Methods

### addSubcommands()

> **addSubcommands**(...`subcommands`): `this`

Defined in: [packages/builders/src/commands/options/subcommand-group.ts:18](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand-group.ts#L18)

Adds a subcommand

#### Parameters

##### subcommands

...[`SubcommandOption`](SubcommandOption.md)[]

#### Returns

`this`

***

### setDescriptionLocalizations()

> **setDescriptionLocalizations**(`localizations`): `this`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L52)

Set a dictionary of localized descriptions

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`this`

#### Inherited from

`SlashCommandOptionBase.setDescriptionLocalizations`

***

### setLocalizedDescription()

> **setLocalizedDescription**(`locale`, `description`): `this`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:61](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L61)

Set a single locale's description

#### Parameters

##### locale

`Locale`

##### description

`string`

#### Returns

`this`

#### Inherited from

`SlashCommandOptionBase.setLocalizedDescription`

***

### setLocalizedName()

> **setLocalizedName**(`locale`, `name`): `void`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:45](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L45)

Set a single locale's name

#### Parameters

##### locale

`Locale`

##### name

`string`

#### Returns

`void`

#### Inherited from

`SlashCommandOptionBase.setLocalizedName`

***

### setNameLocalizations()

> **setNameLocalizations**(`localizations`): `SubcommandGroupOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

Set a dictionary of localized names

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`SubcommandGroupOption`

#### Inherited from

`SlashCommandOptionBase.setNameLocalizations`

***

### setRequired()

> **setRequired**(`required`): `SubcommandGroupOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

Marks the option as required

#### Parameters

##### required

`boolean`

If this option should be required

#### Returns

`SubcommandGroupOption`

#### Inherited from

`SlashCommandOptionBase.setRequired`

***

### toJSON()

> **toJSON**(): `APIApplicationCommandSubcommandGroupOption`

Defined in: [packages/builders/src/commands/options/subcommand-group.ts:26](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand-group.ts#L26)

#### Returns

`APIApplicationCommandSubcommandGroupOption`

#### Overrides

`SlashCommandOptionBase.toJSON`
