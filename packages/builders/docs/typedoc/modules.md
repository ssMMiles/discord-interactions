[@discord-interactions/builders](README.md) / Exports

# @discord-interactions/builders

## Table of contents

### Enumerations

- [ButtonStyle](enums/ButtonStyle.md)
- [TextInputStyle](enums/TextInputStyle.md)

### Classes

- [ActionRowBuilder](classes/ActionRowBuilder.md)
- [Bitfield](classes/Bitfield.md)
- [ButtonBuilder](classes/ButtonBuilder.md)
- [CommandGroupBuilder](classes/CommandGroupBuilder.md)
- [EmbedBuilder](classes/EmbedBuilder.md)
- [LinkButtonBuilder](classes/LinkButtonBuilder.md)
- [MessageBuilder](classes/MessageBuilder.md)
- [MessageCommandBuilder](classes/MessageCommandBuilder.md)
- [ModalBuilder](classes/ModalBuilder.md)
- [SelectMenuBuilder](classes/SelectMenuBuilder.md)
- [SelectMenuOptionBuilder](classes/SelectMenuOptionBuilder.md)
- [SlashCommandAttachmentOption](classes/SlashCommandAttachmentOption.md)
- [SlashCommandBooleanOption](classes/SlashCommandBooleanOption.md)
- [SlashCommandBuilder](classes/SlashCommandBuilder.md)
- [SlashCommandChannelOption](classes/SlashCommandChannelOption.md)
- [SlashCommandIntegerOption](classes/SlashCommandIntegerOption.md)
- [SlashCommandMentionableOption](classes/SlashCommandMentionableOption.md)
- [SlashCommandNumberOption](classes/SlashCommandNumberOption.md)
- [SlashCommandRoleOption](classes/SlashCommandRoleOption.md)
- [SlashCommandStringOption](classes/SlashCommandStringOption.md)
- [SlashCommandUserOption](classes/SlashCommandUserOption.md)
- [SubcommandGroupOption](classes/SubcommandGroupOption.md)
- [SubcommandOption](classes/SubcommandOption.md)
- [TextInputBuilder](classes/TextInputBuilder.md)
- [UserCommandBuilder](classes/UserCommandBuilder.md)

### Interfaces

- [AttachedFile](interfaces/AttachedFile.md)
- [EmbedImageData](interfaces/EmbedImageData.md)
- [IconData](interfaces/IconData.md)

### Type Aliases

- [ApplicationCommandOptionAllowedChannelTypes](modules.md#applicationcommandoptionallowedchanneltypes)
- [CommandBuilder](modules.md#commandbuilder)
- [CommandData](modules.md#commanddata)
- [CommandGroupData](modules.md#commandgroupdata)
- [ComponentBuilders](modules.md#componentbuilders)
- [ContextCommandData](modules.md#contextcommanddata)
- [EmbedAuthorData](modules.md#embedauthordata)
- [EmbedAuthorOptions](modules.md#embedauthoroptions)
- [EmbedFooterData](modules.md#embedfooterdata)
- [EmbedFooterOptions](modules.md#embedfooteroptions)
- [MessageActionRowBuilder](modules.md#messageactionrowbuilder)
- [MessageActionRowComponentBuilders](modules.md#messageactionrowcomponentbuilders)
- [MessageCommandData](modules.md#messagecommanddata)
- [ModalActionRowBuilder](modules.md#modalactionrowbuilder)
- [ModalActionRowComponentBuilders](modules.md#modalactionrowcomponentbuilders)
- [RGBTuple](modules.md#rgbtuple)
- [ResponseMap](modules.md#responsemap)
- [SlashCommandData](modules.md#slashcommanddata)
- [UserCommandData](modules.md#usercommanddata)

### Variables

- [AllowedChannelTypes](modules.md#allowedchanneltypes)
- [PermissionBits](modules.md#permissionbits)

## Type Aliases

### ApplicationCommandOptionAllowedChannelTypes

?? **ApplicationCommandOptionAllowedChannelTypes**: typeof [`AllowedChannelTypes`](modules.md#allowedchanneltypes)[`number`]

#### Defined in

[src/commands/options/channel.ts:15](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/channel.ts#L15)

___

### CommandBuilder

?? **CommandBuilder**: [`SlashCommandBuilder`](classes/SlashCommandBuilder.md) \| [`CommandGroupBuilder`](classes/CommandGroupBuilder.md) \| [`UserCommandBuilder`](classes/UserCommandBuilder.md) \| [`MessageCommandBuilder`](classes/MessageCommandBuilder.md)

#### Defined in

[src/commands/index.ts:17](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/index.ts#L17)

___

### CommandData

?? **CommandData**: [`SlashCommandData`](modules.md#slashcommanddata) \| [`CommandGroupData`](modules.md#commandgroupdata) \| [`UserCommandData`](modules.md#usercommanddata) \| [`MessageCommandData`](modules.md#messagecommanddata)

#### Defined in

[src/commands/index.ts:16](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/index.ts#L16)

___

### CommandGroupData

?? **CommandGroupData**: `CommandDataBase` & { `options`: (`APIApplicationCommandSubcommandGroupOption` \| `APIApplicationCommandSubcommandOption`)[] ; `type`: `ApplicationCommandType.ChatInput`  }

#### Defined in

[src/commands/CommandGroupBuilder.ts:10](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/CommandGroupBuilder.ts#L10)

___

### ComponentBuilders

?? **ComponentBuilders**: [`MessageActionRowComponentBuilders`](modules.md#messageactionrowcomponentbuilders) \| [`ModalActionRowComponentBuilders`](modules.md#modalactionrowcomponentbuilders)

#### Defined in

[src/components/ActionRowBuilder.ts:10](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/components/ActionRowBuilder.ts#L10)

___

### ContextCommandData

?? **ContextCommandData**: `Omit`<`CommandDataBase`, ``"description"``\>

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:5](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L5)

___

### EmbedAuthorData

?? **EmbedAuthorData**: `Omit`<`APIEmbedAuthor`, ``"icon_url"`` \| ``"proxy_icon_url"``\> & [`IconData`](interfaces/IconData.md)

#### Defined in

[src/responses/EmbedBuilder.ts:16](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/responses/EmbedBuilder.ts#L16)

___

### EmbedAuthorOptions

?? **EmbedAuthorOptions**: `Omit`<[`EmbedAuthorData`](modules.md#embedauthordata), ``"proxyIconURL"``\>

#### Defined in

[src/responses/EmbedBuilder.ts:18](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/responses/EmbedBuilder.ts#L18)

___

### EmbedFooterData

?? **EmbedFooterData**: `Omit`<`APIEmbedFooter`, ``"icon_url"`` \| ``"proxy_icon_url"``\> & [`IconData`](interfaces/IconData.md)

#### Defined in

[src/responses/EmbedBuilder.ts:20](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/responses/EmbedBuilder.ts#L20)

___

### EmbedFooterOptions

?? **EmbedFooterOptions**: `Omit`<[`EmbedFooterData`](modules.md#embedfooterdata), ``"proxyIconURL"``\>

#### Defined in

[src/responses/EmbedBuilder.ts:22](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/responses/EmbedBuilder.ts#L22)

___

### MessageActionRowBuilder

?? **MessageActionRowBuilder**: [`ActionRowBuilder`](classes/ActionRowBuilder.md)<[`MessageActionRowComponentBuilders`](modules.md#messageactionrowcomponentbuilders)\>

#### Defined in

[src/components/ActionRowBuilder.ts:12](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/components/ActionRowBuilder.ts#L12)

___

### MessageActionRowComponentBuilders

?? **MessageActionRowComponentBuilders**: [`ButtonBuilder`](classes/ButtonBuilder.md) \| [`SelectMenuBuilder`](classes/SelectMenuBuilder.md)

#### Defined in

[src/components/ActionRowBuilder.ts:7](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/components/ActionRowBuilder.ts#L7)

___

### MessageCommandData

?? **MessageCommandData**: [`ContextCommandData`](modules.md#contextcommanddata) & { `type`: `ApplicationCommandType.Message`  }

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:11](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L11)

___

### ModalActionRowBuilder

?? **ModalActionRowBuilder**: [`ActionRowBuilder`](classes/ActionRowBuilder.md)<[`ModalActionRowComponentBuilders`](modules.md#modalactionrowcomponentbuilders)\>

#### Defined in

[src/components/ActionRowBuilder.ts:13](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/components/ActionRowBuilder.ts#L13)

___

### ModalActionRowComponentBuilders

?? **ModalActionRowComponentBuilders**: [`TextInputBuilder`](classes/TextInputBuilder.md)

#### Defined in

[src/components/ActionRowBuilder.ts:8](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/components/ActionRowBuilder.ts#L8)

___

### RGBTuple

?? **RGBTuple**: [red: number, green: number, blue: number]

#### Defined in

[src/responses/EmbedBuilder.ts:3](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/responses/EmbedBuilder.ts#L3)

___

### ResponseMap

?? **ResponseMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `4` | `APIInteractionResponseChannelMessageWithSource` |
| `7` | `APIInteractionResponseUpdateMessage` |

#### Defined in

[src/responses/MessageBuilder.ts:255](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/responses/MessageBuilder.ts#L255)

___

### SlashCommandData

?? **SlashCommandData**: `CommandDataBase` & { `options`: `APIApplicationCommandBasicOption`[] ; `type`: `ApplicationCommandType.ChatInput`  }

#### Defined in

[src/commands/SlashCommandBuilder.ts:13](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/SlashCommandBuilder.ts#L13)

___

### UserCommandData

?? **UserCommandData**: [`ContextCommandData`](modules.md#contextcommanddata) & { `type`: `ApplicationCommandType.User`  }

#### Defined in

[src/commands/ContextMenuCommandBuilder.ts:7](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/ContextMenuCommandBuilder.ts#L7)

## Variables

### AllowedChannelTypes

??? `Const` **AllowedChannelTypes**: readonly [`GuildText`, `GuildVoice`, `GuildCategory`, `GuildNews`, `GuildNewsThread`, `GuildPublicThread`, `GuildPrivateThread`, `GuildStageVoice`]

#### Defined in

[src/commands/options/channel.ts:4](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/options/channel.ts#L4)

___

### PermissionBits

??? `Const` **PermissionBits**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADD_REACTIONS` | `bigint` |
| `ADMINISTRATOR` | `bigint` |
| `ATTACH_FILES` | `bigint` |
| `BAN_MEMBERS` | `bigint` |
| `CHANGE_NICKNAME` | `bigint` |
| `CONNECT` | `bigint` |
| `CREATE_INSTANT_INVITE` | `bigint` |
| `CREATE_PRIVATE_THREADS` | `bigint` |
| `CREATE_PUBLIC_THREADS` | `bigint` |
| `DEAFEN_MEMBERS` | `bigint` |
| `EMBED_LINKS` | `bigint` |
| `KICK_MEMBERS` | `bigint` |
| `MANAGE_CHANNELS` | `bigint` |
| `MANAGE_EMOJIS_AND_STICKERS` | `bigint` |
| `MANAGE_EVENTS` | `bigint` |
| `MANAGE_GUILD` | `bigint` |
| `MANAGE_MESSAGES` | `bigint` |
| `MANAGE_NICKNAMES` | `bigint` |
| `MANAGE_ROLES` | `bigint` |
| `MANAGE_THREADS` | `bigint` |
| `MANAGE_WEBHOOKS` | `bigint` |
| `MENTION_EVERYONE` | `bigint` |
| `MODERATE_MEMBERS` | `bigint` |
| `MOVE_MEMBERS` | `bigint` |
| `MUTE_MEMBERS` | `bigint` |
| `PRIORITY_SPEAKER` | `bigint` |
| `READ_MESSAGE_HISTORY` | `bigint` |
| `REQUEST_TO_SPEAK` | `bigint` |
| `SEND_MESSAGES` | `bigint` |
| `SEND_MESSAGES_IN_THREADS` | `bigint` |
| `SEND_TTS_MESSAGES` | `bigint` |
| `SPEAK` | `bigint` |
| `START_EMBEDDED_ACTIVITIES` | `bigint` |
| `STREAM` | `bigint` |
| `USE_APPLICATION_COMMANDS` | `bigint` |
| `USE_EXTERNAL_EMOJIS` | `bigint` |
| `USE_EXTERNAL_STICKERS` | `bigint` |
| `USE_VAD` | `bigint` |
| `VIEW_AUDIT_LOG` | `bigint` |
| `VIEW_CHANNEL` | `bigint` |
| `VIEW_GUILD_INSIGHTS` | `bigint` |

#### Defined in

[src/commands/permissions/PermissionBits.ts:1](https://github.com/ssMMiles/discord-interactions/blob/41cab1d/packages/builders/src/commands/permissions/PermissionBits.ts#L1)
