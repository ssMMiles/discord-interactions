[**@discord-interactions/builders**](../README.md)

***

[@discord-interactions/builders](../globals.md) / MessageTopLevelComponentBuilders

# Type Alias: MessageTopLevelComponentBuilders

> **MessageTopLevelComponentBuilders** = [`ActionRowBuilder`](../classes/ActionRowBuilder.md)\<[`MessageActionRowComponentBuilders`](MessageActionRowComponentBuilders.md)\> \| [`TextDisplayBuilder`](../classes/TextDisplayBuilder.md) \| [`SectionBuilder`](../classes/SectionBuilder.md) \| [`ContainerBuilder`](../classes/ContainerBuilder.md) \| [`MediaGalleryBuilder`](../classes/MediaGalleryBuilder.md) \| [`SeparatorBuilder`](../classes/SeparatorBuilder.md) \| [`FileBuilder`](../classes/FileBuilder.md)

Defined in: [packages/builders/src/responses/MessageBuilder.ts:28](https://github.com/ssMMiles/discord-interactions/blob/6f83de924580b28f6a9d2d51d6c72bfcd26a7e85/packages/builders/src/responses/MessageBuilder.ts#L28)

Top-level components allowed in a message. Anything other than an Action Row
requires the message to be flagged as Components V2.
