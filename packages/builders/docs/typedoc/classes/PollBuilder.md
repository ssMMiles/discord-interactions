[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / PollBuilder

# Class: PollBuilder

Defined in: [packages/builders/src/responses/PollBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L8)

Builds a poll to attach to a message. Polls support up to 10 answers
and a duration of up to 32 days (defaults to 24 hours).

## Constructors

### Constructor

> **new PollBuilder**(`question?`): `PollBuilder`

Defined in: [packages/builders/src/responses/PollBuilder.ts:12](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L12)

#### Parameters

##### question?

`string`

#### Returns

`PollBuilder`

## Properties

### answers

> `readonly` **answers**: `APIBasePollAnswer`[] = `[]`

Defined in: [packages/builders/src/responses/PollBuilder.ts:10](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L10)

***

### data

> **data**: `Partial`\<`RESTAPIPoll`\> = `{}`

Defined in: [packages/builders/src/responses/PollBuilder.ts:9](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L9)

## Methods

### addAnswers()

> **addAnswers**(...`answers`): `this`

Defined in: [packages/builders/src/responses/PollBuilder.ts:27](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L27)

Adds answers to this poll (max 10, text max 55 characters each)

#### Parameters

##### answers

...(`string` \| `APIPollMedia`)[]

#### Returns

`this`

***

### setAllowMultiselect()

> **setAllowMultiselect**(`allowMultiselect?`): `this`

Defined in: [packages/builders/src/responses/PollBuilder.ts:46](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L46)

Sets whether users can select multiple answers

#### Parameters

##### allowMultiselect?

`boolean` = `true`

#### Returns

`this`

***

### setDuration()

> **setDuration**(`hours`): `this`

Defined in: [packages/builders/src/responses/PollBuilder.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L38)

Sets how long the poll stays open, in hours (max 768 = 32 days, defaults to 24)

#### Parameters

##### hours

`number`

#### Returns

`this`

***

### setLayoutType()

> **setLayoutType**(`layoutType`): `this`

Defined in: [packages/builders/src/responses/PollBuilder.ts:54](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L54)

Sets the poll's layout type

#### Parameters

##### layoutType

`PollLayoutType`

#### Returns

`this`

***

### setQuestion()

> **setQuestion**(`question`): `this`

Defined in: [packages/builders/src/responses/PollBuilder.ts:19](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L19)

Sets the poll's question (max 300 characters)

#### Parameters

##### question

`string` \| `APIPollMedia`

#### Returns

`this`

***

### toJSON()

> **toJSON**(): `RESTAPIPoll`

Defined in: [packages/builders/src/responses/PollBuilder.ts:59](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/PollBuilder.ts#L59)

#### Returns

`RESTAPIPoll`
