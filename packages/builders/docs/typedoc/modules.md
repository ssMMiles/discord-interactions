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
- [ToAPIApplicationCommandGroupOptions](interfaces/ToAPIApplicationCommandGroupOptions.md)
- [ToAPIApplicationCommandOptions](interfaces/ToAPIApplicationCommandOptions.md)
- [ToAPIApplicationCommandSubcommandOption](interfaces/ToAPIApplicationCommandSubcommandOption.md)

### Type Aliases

- [ApplicationCommandOptionAllowedChannelTypes](modules.md#applicationcommandoptionallowedchanneltypes)
- [ComponentBuilders](modules.md#componentbuilders)
- [EmbedAuthorData](modules.md#embedauthordata)
- [EmbedAuthorOptions](modules.md#embedauthoroptions)
- [EmbedFooterData](modules.md#embedfooterdata)
- [EmbedFooterOptions](modules.md#embedfooteroptions)
- [MessageActionRowBuilder](modules.md#messageactionrowbuilder)
- [MessageActionRowComponentBuilders](modules.md#messageactionrowcomponentbuilders)
- [ModalActionRowBuilder](modules.md#modalactionrowbuilder)
- [ModalActionRowComponentBuilders](modules.md#modalactionrowcomponentbuilders)
- [RGBTuple](modules.md#rgbtuple)
- [ResponseMap](modules.md#responsemap)

### Variables

- [AllowedChannelTypes](modules.md#allowedchanneltypes)
- [PermissionBits](modules.md#permissionbits)

## Type Aliases

### ApplicationCommandOptionAllowedChannelTypes

Ƭ **ApplicationCommandOptionAllowedChannelTypes**: typeof [`AllowedChannelTypes`](modules.md#allowedchanneltypes)[`number`]

#### Defined in

[src/commands/options/channel.ts:15](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/channel.ts#L15)

___

### ComponentBuilders

Ƭ **ComponentBuilders**: [`MessageActionRowComponentBuilders`](modules.md#messageactionrowcomponentbuilders) \| [`ModalActionRowComponentBuilders`](modules.md#modalactionrowcomponentbuilders)

#### Defined in

[src/components/ActionRowBuilder.ts:10](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L10)

___

### EmbedAuthorData

Ƭ **EmbedAuthorData**: `Omit`<`APIEmbedAuthor`, ``"icon_url"`` \| ``"proxy_icon_url"``\> & [`IconData`](interfaces/IconData.md)

#### Defined in

[src/responses/EmbedBuilder.ts:16](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L16)

___

### EmbedAuthorOptions

Ƭ **EmbedAuthorOptions**: `Omit`<[`EmbedAuthorData`](modules.md#embedauthordata), ``"proxyIconURL"``\>

#### Defined in

[src/responses/EmbedBuilder.ts:18](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L18)

___

### EmbedFooterData

Ƭ **EmbedFooterData**: `Omit`<`APIEmbedFooter`, ``"icon_url"`` \| ``"proxy_icon_url"``\> & [`IconData`](interfaces/IconData.md)

#### Defined in

[src/responses/EmbedBuilder.ts:20](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L20)

___

### EmbedFooterOptions

Ƭ **EmbedFooterOptions**: `Omit`<[`EmbedFooterData`](modules.md#embedfooterdata), ``"proxyIconURL"``\>

#### Defined in

[src/responses/EmbedBuilder.ts:22](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L22)

___

### MessageActionRowBuilder

Ƭ **MessageActionRowBuilder**: [`ActionRowBuilder`](classes/ActionRowBuilder.md)<[`MessageActionRowComponentBuilders`](modules.md#messageactionrowcomponentbuilders)\>

#### Defined in

[src/components/ActionRowBuilder.ts:12](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L12)

___

### MessageActionRowComponentBuilders

Ƭ **MessageActionRowComponentBuilders**: [`ButtonBuilder`](classes/ButtonBuilder.md) \| [`SelectMenuBuilder`](classes/SelectMenuBuilder.md)

#### Defined in

[src/components/ActionRowBuilder.ts:7](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L7)

___

### ModalActionRowBuilder

Ƭ **ModalActionRowBuilder**: [`ActionRowBuilder`](classes/ActionRowBuilder.md)<[`ModalActionRowComponentBuilders`](modules.md#modalactionrowcomponentbuilders)\>

#### Defined in

[src/components/ActionRowBuilder.ts:13](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L13)

___

### ModalActionRowComponentBuilders

Ƭ **ModalActionRowComponentBuilders**: [`TextInputBuilder`](classes/TextInputBuilder.md)

#### Defined in

[src/components/ActionRowBuilder.ts:8](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/components/ActionRowBuilder.ts#L8)

___

### RGBTuple

Ƭ **RGBTuple**: [red: number, green: number, blue: number]

#### Defined in

[src/responses/EmbedBuilder.ts:3](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/EmbedBuilder.ts#L3)

___

### ResponseMap

Ƭ **ResponseMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `4` | `APIInteractionResponseChannelMessageWithSource` |
| `7` | `APIInteractionResponseUpdateMessage` |

#### Defined in

[src/responses/MessageBuilder.ts:256](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/responses/MessageBuilder.ts#L256)

## Variables

### AllowedChannelTypes

• `Const` **AllowedChannelTypes**: readonly [`GuildText`, `GuildVoice`, `GuildCategory`, `GuildNews`, `GuildNewsThread`, `GuildPublicThread`, `GuildPrivateThread`, `GuildStageVoice`]

#### Defined in

[src/commands/options/channel.ts:4](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/options/channel.ts#L4)

___

### PermissionBits

• `Const` **PermissionBits**: `Object`

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

[src/commands/permissions/PermissionBits.ts:1](https://github.com/ssMMiles/interactions.ts/blob/df1cc9e/packages/builders/src/commands/permissions/PermissionBits.ts#L1)
