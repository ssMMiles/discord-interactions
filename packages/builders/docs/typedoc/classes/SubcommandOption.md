[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SubcommandOption

# Class: SubcommandOption

Defined in: [packages/builders/src/commands/options/subcommand.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L19)

## Extends

- `SlashCommandOptionBase`

## Constructors

### Constructor

> **new SubcommandOption**(`name`, `description`): `SubcommandOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L17)

#### Parameters

##### name

`string`

##### description

`string`

#### Returns

`SubcommandOption`

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

> **options**: `ToAPIApplicationCommandOptions`\<`APIApplicationCommandBasicOption`\>[] = `[]`

Defined in: [packages/builders/src/commands/options/subcommand.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L22)

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

#### Inherited from

`SlashCommandOptionBase.required`

***

### type

> **type**: `Subcommand`

Defined in: [packages/builders/src/commands/options/subcommand.ts:20](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L20)

#### Overrides

`SlashCommandOptionBase.type`

## Methods

### addAttachmentOption()

> **addAttachmentOption**(`input`): `this`

Defined in: [packages/builders/src/commands/options/subcommand.ts:69](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L69)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:29](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L29)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L49)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:104](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L104)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:79](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L79)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:119](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L119)

Adds a number option

#### Parameters

##### input

[`SlashCommandNumberOption`](SlashCommandNumberOption.md) \| `Omit`\<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), `"setAutocomplete"`\> \| `Omit`\<[`SlashCommandNumberOption`](SlashCommandNumberOption.md), `"addChoices"`\>

A function that returns an option builder, or an already built builder

#### Returns

`this`

***

### addRoleOption()

> **addRoleOption**(`input`): `this`

Defined in: [packages/builders/src/commands/options/subcommand.ts:59](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L59)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:89](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L89)

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

Defined in: [packages/builders/src/commands/options/subcommand.ts:39](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L39)

Adds a user option

#### Parameters

##### input

[`SlashCommandUserOption`](SlashCommandUserOption.md)

A function that returns an option builder, or an already built builder

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

> **setNameLocalizations**(`localizations`): `SubcommandOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

Set a dictionary of localized names

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`SubcommandOption`

#### Inherited from

`SlashCommandOptionBase.setNameLocalizations`

***

### setRequired()

> **setRequired**(`required`): `SubcommandOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

Marks the option as required

#### Parameters

##### required

`boolean`

If this option should be required

#### Returns

`SubcommandOption`

#### Inherited from

`SlashCommandOptionBase.setRequired`

***

### toJSON()

> **toJSON**(): `APIApplicationCommandSubcommandOption`

Defined in: [packages/builders/src/commands/options/subcommand.ts:129](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/subcommand.ts#L129)

#### Returns

`APIApplicationCommandSubcommandOption`

#### Overrides

`SlashCommandOptionBase.toJSON`
