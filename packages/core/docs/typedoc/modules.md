[@discord-interactions/core](README.md) / Exports

# @discord-interactions/core

## Table of contents

### Classes

- [AutocompleteContext](classes/AutocompleteContext.md)
- [Button](classes/Button.md)
- [ButtonContext](classes/ButtonContext.md)
- [CommandGroup](classes/CommandGroup.md)
- [CommandManager](classes/CommandManager.md)
- [ComponentManager](classes/ComponentManager.md)
- [DiscordApplication](classes/DiscordApplication.md)
- [InteractionError](classes/InteractionError.md)
- [InteractionHandlerError](classes/InteractionHandlerError.md)
- [InteractionHandlerNotFound](classes/InteractionHandlerNotFound.md)
- [InteractionHandlerTimedOut](classes/InteractionHandlerTimedOut.md)
- [InteractionResponseAlreadySent](classes/InteractionResponseAlreadySent.md)
- [InteractionStateExpired](classes/InteractionStateExpired.md)
- [InteractionTokenExpired](classes/InteractionTokenExpired.md)
- [MessageCommand](classes/MessageCommand.md)
- [MessageCommandContext](classes/MessageCommandContext.md)
- [Modal](classes/Modal.md)
- [ModalSubmitContext](classes/ModalSubmitContext.md)
- [PingContext](classes/PingContext.md)
- [RegisteredCommandGroup](classes/RegisteredCommandGroup.md)
- [RegisteredMessageCommand](classes/RegisteredMessageCommand.md)
- [RegisteredSlashCommand](classes/RegisteredSlashCommand.md)
- [RegisteredUserCommand](classes/RegisteredUserCommand.md)
- [SelectMenu](classes/SelectMenu.md)
- [SelectMenuContext](classes/SelectMenuContext.md)
- [SlashCommand](classes/SlashCommand.md)
- [SlashCommandContext](classes/SlashCommandContext.md)
- [UnauthorizedInteraction](classes/UnauthorizedInteraction.md)
- [UnknownApplicationCommandType](classes/UnknownApplicationCommandType.md)
- [UnknownComponentType](classes/UnknownComponentType.md)
- [UnknownInteractionType](classes/UnknownInteractionType.md)
- [UserCommand](classes/UserCommand.md)
- [UserCommandContext](classes/UserCommandContext.md)
- [WebhookClient](classes/WebhookClient.md)

### Interfaces

- [APIApplicationMessageCommand](interfaces/APIApplicationMessageCommand.md)
- [APIApplicationSlashCommand](interfaces/APIApplicationSlashCommand.md)
- [APIApplicationUserCommand](interfaces/APIApplicationUserCommand.md)
- [DiscordApplicationOptions](interfaces/DiscordApplicationOptions.md)
- [GenericCache](interfaces/GenericCache.md)
- [ICommandGroup](interfaces/ICommandGroup.md)
- [ISlashCommand](interfaces/ISlashCommand.md)
- [ISubcommandHandler](interfaces/ISubcommandHandler.md)
- [ParsedCommands](interfaces/ParsedCommands.md)

### Type Aliases

- [AutocompleteResponse](modules.md#autocompleteresponse)
- [AutocompleteSupportedOptions](modules.md#autocompletesupportedoptions)
- [ChannelMessageResponse](modules.md#channelmessageresponse)
- [Command](modules.md#command)
- [Component](modules.md#component)
- [ComponentContext](modules.md#componentcontext)
- [ContextMap](modules.md#contextmap)
- [ICommand](modules.md#icommand)
- [IMessageCommand](modules.md#imessagecommand)
- [ISubcommandGroup](modules.md#isubcommandgroup)
- [ISubcommandHandlers](modules.md#isubcommandhandlers)
- [IUserCommand](modules.md#iusercommand)
- [InteractionContext](modules.md#interactioncontext)
- [InteractionHooks](modules.md#interactionhooks)
- [MappedCommandTypes](modules.md#mappedcommandtypes)
- [MessageUpdateResponse](modules.md#messageupdateresponse)
- [ModalSubmitResponse](modules.md#modalsubmitresponse)
- [PossibleInteractionErrors](modules.md#possibleinteractionerrors)
- [RegisteredCommand](modules.md#registeredcommand)
- [ResponseCallback](modules.md#responsecallback)

### Functions

- [SimpleEmbed](modules.md#simpleembed)
- [SimpleError](modules.md#simpleerror)
- [\_handleInteraction](modules.md#_handleinteraction)
- [isCommandGroup](modules.md#iscommandgroup)

## Type Aliases

### AutocompleteResponse

Ƭ **AutocompleteResponse**: `APIApplicationCommandAutocompleteResponse`

#### Defined in

[app/contexts/response-types.ts:23](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/response-types.ts#L23)

___

### AutocompleteSupportedOptions

Ƭ **AutocompleteSupportedOptions**: `APIApplicationCommandInteractionDataStringOption` \| `APIApplicationCommandInteractionDataIntegerOption` \| `APIApplicationCommandInteractionDataNumberOption`

#### Defined in

[app/contexts/ApplicationCommand/AutocompleteContext.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ApplicationCommand/AutocompleteContext.ts#L14)

___

### ChannelMessageResponse

Ƭ **ChannelMessageResponse**: `APIModalInteractionResponse` \| `APIInteractionResponseChannelMessageWithSource` \| `APIInteractionResponseDeferredChannelMessageWithSource` \| `FormData`

#### Defined in

[app/contexts/response-types.ts:17](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/response-types.ts#L17)

___

### Command

Ƭ **Command**: [`SlashCommand`](classes/SlashCommand.md) \| [`UserCommand`](classes/UserCommand.md) \| [`MessageCommand`](classes/MessageCommand.md) \| [`CommandGroup`](classes/CommandGroup.md)

#### Defined in

[app/commands/index.ts:12](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/index.ts#L12)

___

### Component

Ƭ **Component**: [`Button`](classes/Button.md) \| [`SelectMenu`](classes/SelectMenu.md)

#### Defined in

[app/components/index.ts:8](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/components/index.ts#L8)

___

### ComponentContext

Ƭ **ComponentContext**: [`ButtonContext`](classes/ButtonContext.md) \| [`SelectMenuContext`](classes/SelectMenuContext.md)

#### Defined in

[app/contexts/ComponentContext.ts:133](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/ComponentContext.ts#L133)

___

### ContextMap

Ƭ **ContextMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `command.autocomplete` | [`AutocompleteContext`](classes/AutocompleteContext.md) |
| `command.message` | [`MessageCommandContext`](classes/MessageCommandContext.md) |
| `command.slash` | [`SlashCommandContext`](classes/SlashCommandContext.md) |
| `command.user` | [`UserCommandContext`](classes/UserCommandContext.md) |
| `component.button` | [`ButtonContext`](classes/ButtonContext.md) |
| `component.selectMenu` | [`SelectMenuContext`](classes/SelectMenuContext.md) |
| `interaction` | [`InteractionContext`](modules.md#interactioncontext) |
| `modal` | [`ModalSubmitContext`](classes/ModalSubmitContext.md) |
| `ping` | [`PingContext`](classes/PingContext.md) |

#### Defined in

[app/handlers/Hooks.ts:13](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/handlers/Hooks.ts#L13)

___

### ICommand

Ƭ **ICommand**: [`ISlashCommand`](interfaces/ISlashCommand.md) \| [`IUserCommand`](modules.md#iusercommand) \| [`IMessageCommand`](modules.md#imessagecommand) \| [`ICommandGroup`](interfaces/ICommandGroup.md)

#### Defined in

[app/commands/index.ts:11](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/index.ts#L11)

___

### IMessageCommand

Ƭ **IMessageCommand**: `ICommandBase`<`MessageCommandBuilder`, [`MessageCommandContext`](classes/MessageCommandContext.md)\>

#### Defined in

[app/commands/MessageCommand.ts:7](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/MessageCommand.ts#L7)

___

### ISubcommandGroup

Ƭ **ISubcommandGroup**: `Record`<`string`, [`ISubcommandHandler`](interfaces/ISubcommandHandler.md)\>

#### Defined in

[app/commands/CommandGroup.ts:11](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/CommandGroup.ts#L11)

___

### ISubcommandHandlers

Ƭ **ISubcommandHandlers**: `Record`<`string`, [`ISubcommandGroup`](modules.md#isubcommandgroup) \| [`ISubcommandHandler`](interfaces/ISubcommandHandler.md)\>

#### Defined in

[app/commands/CommandGroup.ts:13](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/CommandGroup.ts#L13)

___

### IUserCommand

Ƭ **IUserCommand**: `ICommandBase`<`UserCommandBuilder`, [`UserCommandContext`](classes/UserCommandContext.md)\>

#### Defined in

[app/commands/UserCommand.ts:8](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/UserCommand.ts#L8)

___

### InteractionContext

Ƭ **InteractionContext**: [`PingContext`](classes/PingContext.md) \| [`SlashCommandContext`](classes/SlashCommandContext.md) \| [`UserCommandContext`](classes/UserCommandContext.md) \| [`MessageCommandContext`](classes/MessageCommandContext.md) \| [`AutocompleteContext`](classes/AutocompleteContext.md) \| [`ButtonContext`](classes/ButtonContext.md) \| [`SelectMenuContext`](classes/SelectMenuContext.md) \| [`ModalSubmitContext`](classes/ModalSubmitContext.md)

#### Defined in

[app/contexts/index.ts:16](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/index.ts#L16)

___

### InteractionHooks

Ƭ **InteractionHooks**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `command.autocomplete` | (`ctx`: [`AutocompleteContext`](classes/AutocompleteContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `command.message` | (`ctx`: [`MessageCommandContext`](classes/MessageCommandContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `command.slash` | (`ctx`: [`SlashCommandContext`](classes/SlashCommandContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `command.user` | (`ctx`: [`UserCommandContext`](classes/UserCommandContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `component.button` | (`ctx`: [`ButtonContext`](classes/ButtonContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `component.selectMenu` | (`ctx`: [`SelectMenuContext`](classes/SelectMenuContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `interaction` | (`ctx`: [`InteractionContext`](modules.md#interactioncontext)) => `Promise`<`void` \| ``true``\>[] |  |
| `modal` | (`ctx`: [`ModalSubmitContext`](classes/ModalSubmitContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `ping` | (`context`: [`PingContext`](classes/PingContext.md)) => `Promise`<`void` \| ``true``\>[] | - |

#### Defined in

[app/handlers/Hooks.ts:32](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/handlers/Hooks.ts#L32)

___

### MappedCommandTypes

Ƭ **MappedCommandTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`RegisteredSlashCommand`](classes/RegisteredSlashCommand.md) \| [`RegisteredCommandGroup`](classes/RegisteredCommandGroup.md) |
| `2` | [`RegisteredUserCommand`](classes/RegisteredUserCommand.md) |
| `3` | [`RegisteredMessageCommand`](classes/RegisteredMessageCommand.md) |

#### Defined in

[app/managers/CommandManager.ts:35](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/managers/CommandManager.ts#L35)

___

### MessageUpdateResponse

Ƭ **MessageUpdateResponse**: `APIModalInteractionResponse` \| `APIInteractionResponseUpdateMessage` \| `APIInteractionResponseDeferredMessageUpdate` \| `FormData`

#### Defined in

[app/contexts/response-types.ts:11](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/response-types.ts#L11)

___

### ModalSubmitResponse

Ƭ **ModalSubmitResponse**: `APIInteractionResponseChannelMessageWithSource` \| `APIInteractionResponseDeferredChannelMessageWithSource` \| `FormData`

#### Defined in

[app/contexts/response-types.ts:25](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/contexts/response-types.ts#L25)

___

### PossibleInteractionErrors

Ƭ **PossibleInteractionErrors**: [`UnauthorizedInteraction`](classes/UnauthorizedInteraction.md) \| [`UnknownInteractionType`](classes/UnknownInteractionType.md) \| [`UnknownApplicationCommandType`](classes/UnknownApplicationCommandType.md) \| [`UnknownComponentType`](classes/UnknownComponentType.md) \| [`InteractionResponseAlreadySent`](classes/InteractionResponseAlreadySent.md) \| [`InteractionTokenExpired`](classes/InteractionTokenExpired.md) \| [`InteractionHandlerTimedOut`](classes/InteractionHandlerTimedOut.md) \| [`InteractionHandlerNotFound`](classes/InteractionHandlerNotFound.md) \| [`InteractionStateExpired`](classes/InteractionStateExpired.md)

#### Defined in

[util/errors.ts:81](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/util/errors.ts#L81)

___

### RegisteredCommand

Ƭ **RegisteredCommand**: [`RegisteredSlashCommand`](classes/RegisteredSlashCommand.md) \| [`RegisteredUserCommand`](classes/RegisteredUserCommand.md) \| [`RegisteredMessageCommand`](classes/RegisteredMessageCommand.md) \| [`RegisteredCommandGroup`](classes/RegisteredCommandGroup.md)

#### Defined in

[app/commands/index.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/index.ts#L14)

___

### ResponseCallback

Ƭ **ResponseCallback**<`T`\>: (`response`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `APIInteractionResponse` \| `FormData` = `APIInteractionResponse` \| `FormData` |

#### Type declaration

▸ (`response`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `T` |

##### Returns

`void`

#### Defined in

[app/DiscordApplication.ts:40](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/DiscordApplication.ts#L40)

## Functions

### SimpleEmbed

▸ **SimpleEmbed**(`message`, `title?`): `MessageBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `title?` | `string` |

#### Returns

`MessageBuilder`

#### Defined in

[util/simple-responses.ts:14](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/util/simple-responses.ts#L14)

___

### SimpleError

▸ **SimpleError**(`message`, `title?`): `MessageBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `title?` | `string` |

#### Returns

`MessageBuilder`

#### Defined in

[util/simple-responses.ts:7](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/util/simple-responses.ts#L7)

___

### \_handleInteraction

▸ **_handleInteraction**(`this`, `interaction`, `responseCallback`): `Promise`<[`InteractionContext`](modules.md#interactioncontext)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApplication`](classes/DiscordApplication.md) |
| `interaction` | `APIInteraction` |
| `responseCallback` | [`ResponseCallback`](modules.md#responsecallback)<`FormData` \| `APIInteractionResponse`\> |

#### Returns

`Promise`<[`InteractionContext`](modules.md#interactioncontext)\>

#### Defined in

[app/handlers/handle.ts:119](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/handlers/handle.ts#L119)

___

### isCommandGroup

▸ **isCommandGroup**(`command`): command is ICommandGroup

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`ICommand`](modules.md#icommand) |

#### Returns

command is ICommandGroup

#### Defined in

[app/commands/CommandGroup.ts:102](https://github.com/ssMMiles/discord-interactions/blob/ef474ab/packages/core/src/app/commands/CommandGroup.ts#L102)
