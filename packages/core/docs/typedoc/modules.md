[@discord-interactions/core](README.md) / Exports

# @discord-interactions/core

## Table of contents

### Enumerations

- [SyncMode](enums/SyncMode.md)

### Classes

- [AutocompleteContext](classes/AutocompleteContext.md)
- [Button](classes/Button.md)
- [ButtonContext](classes/ButtonContext.md)
- [ChannelSelectMenuContext](classes/ChannelSelectMenuContext.md)
- [CommandGroup](classes/CommandGroup.md)
- [CommandManager](classes/CommandManager.md)
- [ComponentManager](classes/ComponentManager.md)
- [DiscordApplication](classes/DiscordApplication.md)
- [InteractionContextError](classes/InteractionContextError.md)
- [InteractionError](classes/InteractionError.md)
- [InteractionHandlerError](classes/InteractionHandlerError.md)
- [InteractionHandlerNotFound](classes/InteractionHandlerNotFound.md)
- [InteractionHandlerTimedOut](classes/InteractionHandlerTimedOut.md)
- [InteractionResponseAlreadySent](classes/InteractionResponseAlreadySent.md)
- [InteractionStateExpired](classes/InteractionStateExpired.md)
- [InteractionTokenExpired](classes/InteractionTokenExpired.md)
- [MentionableSelectMenuContext](classes/MentionableSelectMenuContext.md)
- [MessageCommand](classes/MessageCommand.md)
- [MessageCommandContext](classes/MessageCommandContext.md)
- [Modal](classes/Modal.md)
- [ModalSubmitContext](classes/ModalSubmitContext.md)
- [PingContext](classes/PingContext.md)
- [RegisteredCommandGroup](classes/RegisteredCommandGroup.md)
- [RegisteredMessageCommand](classes/RegisteredMessageCommand.md)
- [RegisteredSlashCommand](classes/RegisteredSlashCommand.md)
- [RegisteredUserCommand](classes/RegisteredUserCommand.md)
- [RoleSelectMenuContext](classes/RoleSelectMenuContext.md)
- [SlashCommand](classes/SlashCommand.md)
- [SlashCommandContext](classes/SlashCommandContext.md)
- [StringSelectMenu](classes/StringSelectMenu.md)
- [StringSelectMenuContext](classes/StringSelectMenuContext.md)
- [UnauthorizedInteraction](classes/UnauthorizedInteraction.md)
- [UnknownApplicationCommandType](classes/UnknownApplicationCommandType.md)
- [UnknownComponentType](classes/UnknownComponentType.md)
- [UnknownInteractionType](classes/UnknownInteractionType.md)
- [UserCommand](classes/UserCommand.md)
- [UserCommandContext](classes/UserCommandContext.md)
- [UserSelectMenuContext](classes/UserSelectMenuContext.md)
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

- [ApplicationCommandContext](modules.md#applicationcommandcontext)
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
- [SelectMenuContext](modules.md#selectmenucontext)

### Functions

- [SimpleEmbed](modules.md#simpleembed)
- [SimpleError](modules.md#simpleerror)
- [\_handleInteraction](modules.md#_handleinteraction)
- [isCommandGroup](modules.md#iscommandgroup)

## Type Aliases

### ApplicationCommandContext

Ƭ **ApplicationCommandContext**: [`SlashCommandContext`](classes/SlashCommandContext.md) \| [`UserCommandContext`](classes/UserCommandContext.md) \| [`MessageCommandContext`](classes/MessageCommandContext.md)

#### Defined in

[app/contexts/index.ts:31](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/index.ts#L31)

___

### AutocompleteResponse

Ƭ **AutocompleteResponse**: `APIApplicationCommandAutocompleteResponse`

#### Defined in

[app/contexts/response-types.ts:23](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/response-types.ts#L23)

___

### AutocompleteSupportedOptions

Ƭ **AutocompleteSupportedOptions**: `APIApplicationCommandInteractionDataStringOption` \| `APIApplicationCommandInteractionDataIntegerOption` \| `APIApplicationCommandInteractionDataNumberOption`

#### Defined in

[app/contexts/application_commands/AutocompleteContext.ts:16](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/application_commands/AutocompleteContext.ts#L16)

___

### ChannelMessageResponse

Ƭ **ChannelMessageResponse**: `APIModalInteractionResponse` \| `APIInteractionResponseChannelMessageWithSource` \| `APIInteractionResponseDeferredChannelMessageWithSource` \| `FormData`

#### Defined in

[app/contexts/response-types.ts:17](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/response-types.ts#L17)

___

### Command

Ƭ **Command**: [`SlashCommand`](classes/SlashCommand.md) \| [`UserCommand`](classes/UserCommand.md) \| [`MessageCommand`](classes/MessageCommand.md) \| [`CommandGroup`](classes/CommandGroup.md)

#### Defined in

[app/commands/index.ts:12](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/index.ts#L12)

___

### Component

Ƭ **Component**: [`Button`](classes/Button.md) \| `SelectMenu`

#### Defined in

[app/components/index.ts:8](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/components/index.ts#L8)

___

### ComponentContext

Ƭ **ComponentContext**<`S`\>: [`ButtonContext`](classes/ButtonContext.md)<`S`\> \| [`SelectMenuContext`](modules.md#selectmenucontext)<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Defined in

[app/contexts/index.ts:33](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/index.ts#L33)

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
| `component.selectMenu` | [`SelectMenuContext`](modules.md#selectmenucontext) |
| `interaction` | [`InteractionContext`](modules.md#interactioncontext) |
| `modal` | [`ModalSubmitContext`](classes/ModalSubmitContext.md) |
| `ping` | [`PingContext`](classes/PingContext.md) |

#### Defined in

[app/handlers/Hooks.ts:13](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/Hooks.ts#L13)

___

### ICommand

Ƭ **ICommand**: [`ISlashCommand`](interfaces/ISlashCommand.md) \| [`IUserCommand`](modules.md#iusercommand) \| [`IMessageCommand`](modules.md#imessagecommand) \| [`ICommandGroup`](interfaces/ICommandGroup.md)

#### Defined in

[app/commands/index.ts:11](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/index.ts#L11)

___

### IMessageCommand

Ƭ **IMessageCommand**: `ICommandBase`<`MessageCommandBuilder`, [`MessageCommandContext`](classes/MessageCommandContext.md)\>

#### Defined in

[app/commands/MessageCommand.ts:7](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/MessageCommand.ts#L7)

___

### ISubcommandGroup

Ƭ **ISubcommandGroup**: `Record`<`string`, [`ISubcommandHandler`](interfaces/ISubcommandHandler.md)\>

#### Defined in

[app/commands/CommandGroup.ts:12](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/CommandGroup.ts#L12)

___

### ISubcommandHandlers

Ƭ **ISubcommandHandlers**: `Record`<`string`, [`ISubcommandGroup`](modules.md#isubcommandgroup) \| [`ISubcommandHandler`](interfaces/ISubcommandHandler.md)\>

#### Defined in

[app/commands/CommandGroup.ts:14](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/CommandGroup.ts#L14)

___

### IUserCommand

Ƭ **IUserCommand**: `ICommandBase`<`UserCommandBuilder`, [`UserCommandContext`](classes/UserCommandContext.md)\>

#### Defined in

[app/commands/UserCommand.ts:8](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/UserCommand.ts#L8)

___

### InteractionContext

Ƭ **InteractionContext**: [`ApplicationCommandContext`](modules.md#applicationcommandcontext) \| [`ComponentContext`](modules.md#componentcontext) \| [`AutocompleteContext`](classes/AutocompleteContext.md) \| [`ModalSubmitContext`](classes/ModalSubmitContext.md) \| [`PingContext`](classes/PingContext.md)

#### Defined in

[app/contexts/index.ts:24](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/index.ts#L24)

___

### InteractionHooks

Ƭ **InteractionHooks**: `Object`

Hooks to be executed on receiving an interaction. These are executed before command handlers, and will abort further handling the interaction upon returning true.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `command.autocomplete` | (`ctx`: [`AutocompleteContext`](classes/AutocompleteContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `command.message` | (`ctx`: [`MessageCommandContext`](classes/MessageCommandContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `command.slash` | (`ctx`: [`SlashCommandContext`](classes/SlashCommandContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `command.user` | (`ctx`: [`UserCommandContext`](classes/UserCommandContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `component.button` | (`ctx`: [`ButtonContext`](classes/ButtonContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `component.selectMenu` | (`ctx`: [`SelectMenuContext`](modules.md#selectmenucontext)) => `Promise`<`void` \| ``true``\>[] | - |
| `interaction` | (`ctx`: [`InteractionContext`](modules.md#interactioncontext)) => `Promise`<`void` \| ``true``\>[] | This hook runs first for all types of interaction. |
| `modal` | (`ctx`: [`ModalSubmitContext`](classes/ModalSubmitContext.md)) => `Promise`<`void` \| ``true``\>[] | - |
| `ping` | (`context`: [`PingContext`](classes/PingContext.md)) => `Promise`<`void` \| ``true``\>[] | - |

#### Defined in

[app/handlers/Hooks.ts:32](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/handlers/Hooks.ts#L32)

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

[app/managers/CommandManager.ts:36](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/managers/CommandManager.ts#L36)

___

### MessageUpdateResponse

Ƭ **MessageUpdateResponse**: `APIModalInteractionResponse` \| `APIInteractionResponseUpdateMessage` \| `APIInteractionResponseDeferredMessageUpdate` \| `FormData`

#### Defined in

[app/contexts/response-types.ts:11](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/response-types.ts#L11)

___

### ModalSubmitResponse

Ƭ **ModalSubmitResponse**: `APIInteractionResponseChannelMessageWithSource` \| `APIInteractionResponseDeferredChannelMessageWithSource` \| `FormData`

#### Defined in

[app/contexts/response-types.ts:25](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/response-types.ts#L25)

___

### PossibleInteractionErrors

Ƭ **PossibleInteractionErrors**: [`UnauthorizedInteraction`](classes/UnauthorizedInteraction.md) \| [`UnknownInteractionType`](classes/UnknownInteractionType.md) \| [`UnknownApplicationCommandType`](classes/UnknownApplicationCommandType.md) \| [`UnknownComponentType`](classes/UnknownComponentType.md) \| [`InteractionResponseAlreadySent`](classes/InteractionResponseAlreadySent.md) \| [`InteractionTokenExpired`](classes/InteractionTokenExpired.md) \| [`InteractionHandlerTimedOut`](classes/InteractionHandlerTimedOut.md) \| [`InteractionHandlerNotFound`](classes/InteractionHandlerNotFound.md) \| [`InteractionStateExpired`](classes/InteractionStateExpired.md)

#### Defined in

[util/errors.ts:92](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/util/errors.ts#L92)

___

### RegisteredCommand

Ƭ **RegisteredCommand**: [`RegisteredSlashCommand`](classes/RegisteredSlashCommand.md) \| [`RegisteredUserCommand`](classes/RegisteredUserCommand.md) \| [`RegisteredMessageCommand`](classes/RegisteredMessageCommand.md) \| [`RegisteredCommandGroup`](classes/RegisteredCommandGroup.md)

#### Defined in

[app/commands/index.ts:14](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/commands/index.ts#L14)

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

[app/DiscordApplication.ts:47](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/DiscordApplication.ts#L47)

___

### SelectMenuContext

Ƭ **SelectMenuContext**<`S`\>: [`StringSelectMenuContext`](classes/StringSelectMenuContext.md)<`S`\> \| [`UserSelectMenuContext`](classes/UserSelectMenuContext.md)<`S`\> \| [`RoleSelectMenuContext`](classes/RoleSelectMenuContext.md)<`S`\> \| [`ChannelSelectMenuContext`](classes/ChannelSelectMenuContext.md)<`S`\> \| [`MentionableSelectMenuContext`](classes/MentionableSelectMenuContext.md)<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `never` |

#### Defined in

[app/contexts/index.ts:34](https://github.com/ssMMiles/discord-interactions/blob/fae7bc7/packages/core/src/app/contexts/index.ts#L34)

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

___

### \_handleInteraction

▸ **_handleInteraction**(`this`, `interaction`, `timestamps`, `responseCallback`): `Promise`<[`InteractionContext`](modules.md#interactioncontext)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DiscordApplication`](classes/DiscordApplication.md) |
| `interaction` | `APIInteraction` |
| `timestamps` | `Object` |
| `timestamps.received` | `Date` |
| `timestamps.signature` | `Date` |
| `responseCallback` | [`ResponseCallback`](modules.md#responsecallback)<`APIInteractionResponse` \| `FormData`\> |

#### Returns

`Promise`<[`InteractionContext`](modules.md#interactioncontext)\>

___

### isCommandGroup

▸ **isCommandGroup**(`command`): command is ICommandGroup

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`ICommand`](modules.md#icommand) |

#### Returns

command is ICommandGroup
