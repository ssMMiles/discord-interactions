/* eslint-disable @typescript-eslint/ban-ts-comment */

import type {
  APIActionRowComponent,
  APIAllowedMentions,
  APIInteractionResponseCallbackData,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseUpdateMessage,
  APIMessageActionRowComponent,
  RESTPostAPIWebhookWithTokenJSONBody
} from "discord-api-types/v10";
import type { ActionRowBuilder, MessageActionRowComponentBuilders } from "../components/ActionRowBuilder.js";
import { Blob, FormData } from "formdata-node";
import { InteractionResponseType, MessageFlags } from "discord-api-types/v10";

import { EmbedBuilder } from "./EmbedBuilder.js";

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
    // We need this hack because we can't set it to 0 as an incompatible type.
    if (this.data.flags === undefined) this.data.flags = flag &= ~flag;

    if (value) {
      this.data.flags |= flag;
    } else {
      this.data.flags &= ~flag;
    }

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
   * Add one or more Action Rows to the message. Maximum of 5.
   * @param components Action Rows to add to this message.
   * @returns
   */
  public addComponents(...components: ActionRowBuilder<MessageActionRowComponentBuilders>[]): this {
    if (!this.data.components) this.data.components = [];

    this.data.components.push(...components.map((component) => component.toJSON()));

    return this;
  }

  /**
   * Set an array of Action Rows to be sent with this message.
   * @param components Array of Action Rows to be sent.
   * @returns
   */
  public setComponents(components: APIActionRowComponent<APIMessageActionRowComponent>[] = []): this {
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
  private toFormData(data: RESTPostAPIWebhookWithTokenJSONBody | APIInteractionResponseCallbackData): FormData {
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
   * Fetch this message's data as an object.
   */
  public toJSON(): APIInteractionResponseCallbackData {
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
