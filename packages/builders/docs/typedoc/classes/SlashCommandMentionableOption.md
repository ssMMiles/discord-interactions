[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SlashCommandMentionableOption

# Class: SlashCommandMentionableOption

Defined in: [packages/builders/src/commands/options/mentionable.ts:4](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/mentionable.ts#L4)

## Extends

- `SlashCommandOptionBase`

## Constructors

### Constructor

> **new SlashCommandMentionableOption**(`name`, `description`): `SlashCommandMentionableOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L17)

#### Parameters

##### name

`string`

##### description

`string`

#### Returns

`SlashCommandMentionableOption`

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

### required

> **required**: `boolean` = `false`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L9)

#### Inherited from

`SlashCommandOptionBase.required`

***

### type

> `readonly` **type**: `Mentionable`

Defined in: [packages/builders/src/commands/options/mentionable.ts:5](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/mentionable.ts#L5)

#### Overrides

`SlashCommandOptionBase.type`

## Methods

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

> **setNameLocalizations**(`localizations`): `SlashCommandMentionableOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

Set a dictionary of localized names

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`SlashCommandMentionableOption`

#### Inherited from

`SlashCommandOptionBase.setNameLocalizations`

***

### setRequired()

> **setRequired**(`required`): `SlashCommandMentionableOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

Marks the option as required

#### Parameters

##### required

`boolean`

If this option should be required

#### Returns

`SlashCommandMentionableOption`

#### Inherited from

`SlashCommandOptionBase.setRequired`

***

### toJSON()

> **toJSON**(): `APIApplicationCommandMentionableOption`

Defined in: [packages/builders/src/commands/options/mentionable.ts:7](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/mentionable.ts#L7)

#### Returns

`APIApplicationCommandMentionableOption`

#### Overrides

`SlashCommandOptionBase.toJSON`
