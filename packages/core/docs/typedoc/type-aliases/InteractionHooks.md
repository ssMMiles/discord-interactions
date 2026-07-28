[**@discord-interactions/core**](../README.md)

***

[@discord-interactions/core](../globals.md) / InteractionHooks

# Type Alias: InteractionHooks

> **InteractionHooks** = `object`

Defined in: [app/handlers/Hooks.ts:34](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L34)

Hooks to be executed on receiving an interaction. These are executed before command handlers, and will abort further handling the interaction upon returning true.

## Properties

### command.autocomplete

> **command.autocomplete**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:41](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L41)

#### Parameters

##### ctx

[`AutocompleteContext`](../classes/AutocompleteContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### command.entryPoint

> **command.entryPoint**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:44](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L44)

#### Parameters

##### ctx

[`EntryPointCommandContext`](../classes/EntryPointCommandContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### command.message

> **command.message**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:43](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L43)

#### Parameters

##### ctx

[`MessageCommandContext`](../classes/MessageCommandContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### command.slash

> **command.slash**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:40](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L40)

#### Parameters

##### ctx

[`SlashCommandContext`](../classes/SlashCommandContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### command.user

> **command.user**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:42](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L42)

#### Parameters

##### ctx

[`UserCommandContext`](../classes/UserCommandContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### component.button

> **component.button**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:46](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L46)

#### Parameters

##### ctx

[`ButtonContext`](../classes/ButtonContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### component.selectMenu

> **component.selectMenu**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:47](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L47)

#### Parameters

##### ctx

[`SelectMenuContext`](SelectMenuContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### interaction

> **interaction**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:36](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L36)

This hook runs first for all types of interaction.

#### Parameters

##### ctx

[`InteractionContext`](InteractionContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### modal

> **modal**: (`ctx`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:49](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L49)

#### Parameters

##### ctx

[`ModalSubmitContext`](../classes/ModalSubmitContext.md)

#### Returns

`Promise`\<`void` \| `true`\>

***

### ping

> **ping**: (`context`) => `Promise`\<`void` \| `true`\>[]

Defined in: [app/handlers/Hooks.ts:38](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/core/src/app/handlers/Hooks.ts#L38)

#### Parameters

##### context

[`PingContext`](../classes/PingContext.md)

#### Returns

`Promise`\<`void` \| `true`\>
