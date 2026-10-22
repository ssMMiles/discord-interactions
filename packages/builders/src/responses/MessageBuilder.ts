/* eslint-disable @typescript-eslint/ban-ts-comment */
import type {
  APIActionRowComponent,
  APIAllowedMentions,
  APIInteractionResponseCallbackData,
  APIInteractionResponseChannelMessageWithSource,
  APIComponentInMessageActionRow,
  APIInteractionResponseUpdateMessage,
  RESTPostAPIWebhookWithTokenJSONBody
} from "discord-api-types/v10";
import type { RESTAPIPoll } from "discord-api-types/v10";
import { InteractionResponseType, MessageFlags } from "discord-api-types/v10";
import { Blob, FormData } from "formdata-node";
import { ActionRowBuilder, MessageActionRowComponentBuilders } from "../components/ActionRowBuilder.js";
import type { ContainerBuilder } from "../components/v2/ContainerBuilder.js";
import type { FileBuilder } from "../components/v2/FileBuilder.js";
import type { MediaGalleryBuilder } from "../components/v2/MediaGalleryBuilder.js";
import type { SectionBuilder } from "../components/v2/SectionBuilder.js";
import type { SeparatorBuilder } from "../components/v2/SeparatorBuilder.js";
import type { TextDisplayBuilder } from "../components/v2/TextDisplayBuilder.js";
import { EmbedBuilder } from "./EmbedBuilder.js";
import type { PollBuilder } from "./PollBuilder.js";

/**
 * Top-level components allowed in a message. Anything other than an Action Row
 * requires the message to be flagged as Components V2.
 */
export type MessageTopLevelComponentBuilders =
  | ActionRowBuilder<MessageActionRowComponentBuilders>
  | TextDisplayBuilder
  | SectionBuilder
  | ContainerBuilder
  | MediaGalleryBuilder
  | SeparatorBuilder
  | FileBuilder;

export interface AttachedFile {
  name?: string;
  description?: string;

  data: Uint8Array | Blob | string;
}

export class MessageBuilder {
  public data: APIInteractionResponseCallbackData = {};
  public files?: AttachedFile[];

  public constructor(data?: string | EmbedBuilder | APIInteractionResponseCallbackData) {
    if (data instanceof EmbedBuilder) return this.addEmbeds(data);
    if (typeof data === "string") return this.setContent(data);

    if (data) this.data = data;
  }

  /**
   * Sets the content of the message.
   * @param content Text content for your message.
   * @returns
   */
  public setContent(content: string): this {
    this.data.content = content;

    return this;
  }

  /**
   * Set whether to enable TTS for this message.
   * @param tts Whether or not the message should be read aloud.
   * @returns
   */
  public setTts(tts: boolean): this {
    this.data.tts = tts;

    return this;
  }

  /**
   * Set which mentions will be allowed in this message.
   * @param allowedMentions Allowed mentions for this message. https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure - TODO: Builder for this
   * @returns
   */
  public setAllowedMentions(allowedMentions: APIAllowedMentions): this {
    this.data.allowed_mentions = allowedMentions;

    return this;
  }

  private setMessageFlag(flag: MessageFlags, value: boolean): this {
    let flags = this.data.flags ?? 0;

    if (value) {
      flags |= flag;
    } else {
      flags &= ~flag;
    }

    this.data.flags = flags;

    return this;
  }

  /**
   * Set the SuppressEmbeds flag on this messgae.
   * @param value Whether or not embeds in this message should be suppressed (hidden).
   * @returns
   */
  public suppressEmbeds(value: boolean): this {
    return this.setMessageFlag(MessageFlags.SuppressEmbeds, value);
  }

  /**
   * Set the Ephemeral flag on this message. https://discord.com/developers/docs/tutorials/upgrading-to-application-commands#responding-to-a-command
   * @param value Whether or not the message should be ephemeral.
   * @returns
   */
  public setEphemeral(value: boolean): this {
    return this.setMessageFlag(MessageFlags.Ephemeral, value);
  }

  /**
   * Set the SuppressNotifications flag on this message, sending it without triggering push/desktop notifications.
   * @param value Whether or not notifications should be suppressed.
   */
  public setSuppressNotifications(value = true): this {
    return this.setMessageFlag(MessageFlags.SuppressNotifications, value);
  }

  /**
   * Set the IsComponentsV2 flag on this message. Components V2 messages can use layout and
   * content components (Text Display, Section, Container, Media Gallery, Separator, File),
   * but cannot use content, embeds, polls or stickers. This flag cannot be removed once
   * a message has been sent with it.
   * @param value Whether or not this message uses Components V2.
   */
  public setComponentsV2(value = true): this {
    return this.setMessageFlag(MessageFlags.IsComponentsV2, value);
  }

  /**
   * Whether this message has the IsComponentsV2 flag set.
   */
  public get isComponentsV2(): boolean {
    return ((this.data.flags ?? 0) & MessageFlags.IsComponentsV2) !== 0;
  }

  /**
   * Attach a poll to this message. Not available on Components V2 messages.
   * @param poll A PollBuilder or raw poll create request.
   */
  public setPoll(poll: PollBuilder | RESTAPIPoll): this {
    this.data.poll = "toJSON" in poll && typeof poll.toJSON === "function" ? poll.toJSON() : (poll as RESTAPIPoll);

    return this;
  }

  /**
   * Add one or more embeds to this message. Maximum of 10.
   * @param embeds Embeds to add to this message.
   * @returns
   */
  public addEmbeds(...embeds: EmbedBuilder[]): this {
    if (!this.data.embeds) this.data.embeds = [];

    for (const embed of embeds) {
      this.data.embeds.push(embed.toJSON());
    }

    return this;
  }

  /**
   * Set an array of embeds to be sent with this message.
   * @param embeds Array of embeds to be sent.
   * @returns
   */
  public setEmbeds(...embeds: EmbedBuilder[]): this {
    this.data.embeds = embeds.map((embed) => embed.toJSON());

    return this;
  }

  /**
   * Add one or more top-level components to the message.
   * Legacy messages accept up to 5 Action Rows; adding any other component type
   * automatically flags this message as Components V2 (max 40 components total).
   * @param components Components to add to this message.
   * @returns
   */
  public addComponents(...components: MessageTopLevelComponentBuilders[]): this {
    if (!this.data.components) this.data.components = [];

    for (const component of components) {
      if (!(component instanceof ActionRowBuilder)) this.setComponentsV2(true);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.data.components.push(component.toJSON() as any);
    }

    return this;
  }

  /**
   * Set an array of Action Rows to be sent with this message.
   * @param components Array of Action Rows to be sent.
   * @returns
   */
  public setComponents(components: APIActionRowComponent<APIComponentInMessageActionRow>[] = []): this {
    this.data.components = components;

    return this;
  }

  /**
   * Add one or more files to this message.
   * @param files Files to attach to this message.
   * @returns
   */
  public addAttachments(...files: AttachedFile[]): this {
    if (!this.files) this.files = [];
    if (!this.data.attachments) this.data.attachments = [];

    for (const file of files) {
      const id = this.files.length.toString();

      if (!file.name) file.name = `file${id}`;

      this.files.push(file as AttachedFile);

      this.data.attachments.push({
        id,
        filename: file.name,
        description: file.description
      });
    }

    return this;
  }

  /**
   * Set an array of files to be sent with this message.
   * @param files Array of files to be sent.
   * @returns
   **/
  public setAttachments(...files: AttachedFile[]): this {
    this.files = [];
    this.data.attachments = [];

    return this.addAttachments(...files);
  }

  /**
   * Fetch this message's files and data as a FormData object.
   * @param data Data to be included as the `payload_json` property.
   * @returns
   */
  private toFormData(
    data: RESTPostAPIWebhookWithTokenJSONBody | APIInteractionResponseCallbackData | ResponseMap[keyof ResponseMap]
  ): FormData {
    const form = new FormData();

    form.append("payload_json", JSON.stringify(data));

    for (let i = 0; i < (this.files?.length ?? 0); i++) {
      const file = this?.files?.[i] as AttachedFile;
      if (file.data instanceof Uint8Array) file.data = new Blob([file.data]);

      form.append(`files[${i}]`, file.data, file.name);
    }

    return form;
  }

  /**
   * Fetch this message's data as an HTTP interaction response.
   * @param responseType The interaction response type, depending on whether this is a response to a message or a reaction.
   * @returns
   */
  public toInteractionJSON<
    T extends InteractionResponseType.ChannelMessageWithSource | InteractionResponseType.UpdateMessage
  >(responseType: T): ResponseMap[T] {
    return {
      type: responseType,
      data: this.toJSON()
    } as ResponseMap[T];
  }

  /**
   * Fetch this message and its files as an HTTP interaction response.
   * @param responseType The interaction response type, depending on whether this is a response to a message or a reaction.
   * @returns
   */
  public toInteractionResponse<
    T extends InteractionResponseType.ChannelMessageWithSource | InteractionResponseType.UpdateMessage
  >(responseType: T): ResponseMap[T] | FormData {
    if (this.files === undefined) return this.toInteractionJSON(responseType);

    return this.toFormData(this.toInteractionJSON(responseType));
  }

  /**
   * Fetch this message's data as an object, validating Components V2 constraints.
   */
  public toJSON(): APIInteractionResponseCallbackData {
    if (this.isComponentsV2) {
      if (this.data.content) {
        throw new Error("Components V2 messages cannot have content - use a Text Display component instead.");
      }

      if (this.data.embeds?.length) {
        throw new Error("Components V2 messages cannot have embeds - use a Container component instead.");
      }

      if (this.data.poll) {
        throw new Error("Components V2 messages cannot have a poll.");
      }

      const count = countComponents(this.data.components ?? []);
      if (count > 40) {
        throw new RangeError(`Components V2 messages can contain at most 40 components, got ${count}.`);
      }
    }

    return this.data;
  }

  public toWebhook(username?: string, avatar_url?: string): RESTPostAPIWebhookWithTokenJSONBody | FormData {
    const data = {
      username,
      avatar_url,
      ...this.data
    };

    if (this.files === undefined) return data;

    return this.toFormData(data);
  }
}

export type ResponseMap = {
  [InteractionResponseType.ChannelMessageWithSource]: APIInteractionResponseChannelMessageWithSource;
  [InteractionResponseType.UpdateMessage]: APIInteractionResponseUpdateMessage;
};

/** Recursively counts components, including children of Action Rows, Sections and Containers. */
function countComponents(components: object[]): number {
  let count = 0;

  for (const component of components) {
    count++;

    if ("components" in component && Array.isArray(component.components)) {
      count += countComponents(component.components);
    }

    if ("accessory" in component && component.accessory) {
      count++;
    }
  }

  return count;
}
