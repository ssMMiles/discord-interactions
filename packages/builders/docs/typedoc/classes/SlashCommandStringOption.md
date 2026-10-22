[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / SlashCommandStringOption

# Class: SlashCommandStringOption

Defined in: [packages/builders/src/commands/options/string.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L8)

## Extends

- `SlashCommandOptionBase`

## Constructors

### Constructor

> **new SlashCommandStringOption**(`name`, `description`): `SlashCommandStringOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:17](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L17)

#### Parameters

##### name

`string`

##### description

`string`

#### Returns

`SlashCommandStringOption`

#### Inherited from

`SlashCommandOptionBase.constructor`

## Properties

### autocomplete?

> `optional` **autocomplete?**: `boolean`

Defined in: [packages/builders/src/commands/options/string.ts:12](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L12)

***

### choices?

> `optional` **choices?**: `APIApplicationCommandOptionChoice`\<`string`\>[]

Defined in: [packages/builders/src/commands/options/string.ts:11](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L11)

***

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

### max\_length?

> `optional` **max\_length?**: `number`

Defined in: [packages/builders/src/commands/options/string.ts:15](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L15)

***

### min\_length?

> `optional` **min\_length?**: `number`

Defined in: [packages/builders/src/commands/options/string.ts:14](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L14)

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

> **type**: `String`

Defined in: [packages/builders/src/commands/options/string.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L9)

#### Overrides

`SlashCommandOptionBase.type`

## Methods

### addChoices()

> **addChoices**(...`choices`): `this`

Defined in: [packages/builders/src/commands/options/string.ts:22](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L22)

Adds multiple choices for this option

#### Parameters

##### choices

...`APIApplicationCommandOptionChoice`\<`string`\>[]

The choices to add

#### Returns

`this`

***

### setAutocomplete()

> **setAutocomplete**(`autocomplete`): `this`

Defined in: [packages/builders/src/commands/options/string.ts:52](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L52)

Marks the option as autocompletable

#### Parameters

##### autocomplete

`boolean`

If this option should be autocompletable

#### Returns

`this`

***

### setChoices()

> **setChoices**\<`Input`\>(...`choices`): `this`

Defined in: [packages/builders/src/commands/options/string.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L38)

#### Type Parameters

##### Input

`Input` *extends* `APIApplicationCommandOptionChoice`\<`string`\>[]

#### Parameters

##### choices

...`Input`

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

### setMaxLength()

> **setMaxLength**(`maxLength`): `this`

Defined in: [packages/builders/src/commands/options/string.ts:64](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L64)

#### Parameters

##### maxLength

`number`

#### Returns

`this`

***

### setMinLength()

> **setMinLength**(`minLength`): `this`

Defined in: [packages/builders/src/commands/options/string.ts:58](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L58)

#### Parameters

##### minLength

`number`

#### Returns

`this`

***

### setNameLocalizations()

> **setNameLocalizations**(`localizations`): `SlashCommandStringOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L36)

Set a dictionary of localized names

#### Parameters

##### localizations

`LocalizationMap`

#### Returns

`SlashCommandStringOption`

#### Inherited from

`SlashCommandOptionBase.setNameLocalizations`

***

### setRequired()

> **setRequired**(`required`): `SlashCommandStringOption`

Defined in: [packages/builders/src/commands/options/SlashCommandOptionBase.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/SlashCommandOptionBase.ts#L27)

Marks the option as required

#### Parameters

##### required

`boolean`

If this option should be required

#### Returns

`SlashCommandStringOption`

#### Inherited from

`SlashCommandOptionBase.setRequired`

***

### toJSON()

> **toJSON**(): `APIApplicationCommandStringOption`

Defined in: [packages/builders/src/commands/options/string.ts:70](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/commands/options/string.ts#L70)

#### Returns

`APIApplicationCommandStringOption`

#### Overrides

`SlashCommandOptionBase.toJSON`
