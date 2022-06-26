import {
  APIActionRowComponent,
  APIAllowedMentions,
  APIInteractionResponseCallbackData,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseUpdateMessage,
  APIMessageActionRowComponent,
  InteractionResponseType,
  MessageFlags,
  RESTPostAPIWebhookWithTokenJSONBody
} from "discord-api-types/v10";
import FormData from "form-data";
import fs from "node:fs";
import path from "node:path";
import { ActionRowBuilder } from "..";
import { MessageActionRowComponentBuilders } from "./components";
import { EmbedBuilder } from "./EmbedBuilder";

export interface AttachedFile {
  name: string;
  path: string;
  description?: string;
}

export class MessageBuilder {
  public data: APIInteractionResponseCallbackData = {};
  public files?: AttachedFile[];

  public constructor(data?: string | EmbedBuilder | APIInteractionResponseCallbackData) {
    if (data instanceof EmbedBuilder) return this.addEmbeds(data);
    if (typeof data === "string") return this.setContent(data);

    if (data) this.data = data;
  }

  public setContent(content: string) {
    this.data.content = content;

    return this;
  }

  public setTts(tts: boolean) {
    this.data.tts = tts;

    return this;
  }

  public setAllowedMentions(allowedMentions: APIAllowedMentions) {
    this.data.allowed_mentions = allowedMentions;

    return this;
  }

  private setMessageFlag(flag: MessageFlags, value: boolean) {
    if (this.data.flags === undefined) this.data.flags = 0;

    if (value) {
      this.data.flags |= flag;
    } else {
      this.data.flags &= ~flag;
    }

    return this;
  }

  public suppressEmbeds(value: boolean) {
    return this.setMessageFlag(MessageFlags.SuppressEmbeds, value);
  }

  public setEphemeral(value: boolean) {
    return this.setMessageFlag(MessageFlags.Ephemeral, value);
  }

  public addEmbeds(...embeds: EmbedBuilder[]) {
    if (!this.data.embeds) this.data.embeds = [];

    for (const embed of embeds) {
      this.data.embeds.push(embed.toJSON());
    }

    return this;
  }

  public setEmbeds(...embeds: EmbedBuilder[]) {
    this.data.embeds = embeds.map((embed) => embed.toJSON());

    return this;
  }

  public addComponents(...components: ActionRowBuilder<MessageActionRowComponentBuilders>[]) {
    if (!this.data.components) this.data.components = [];

    this.data.components.push(...components.map((component) => component.toJSON()));

    return this;
  }

  public setComponents(components: APIActionRowComponent<APIMessageActionRowComponent>[] = []) {
    this.data.components = components;

    return this;
  }

  public addAttachments(...files: ((Omit<AttachedFile, "name"> & Partial<Pick<AttachedFile, "name">>) | string)[]) {
    if (!this.files) this.files = [];
    if (!this.data.attachments) this.data.attachments = [];

    for (let file of files) {
      if (typeof file === "string") {
        file = {
          path: file
        };
      }

      if (file.name === undefined) {
        file.name = path.parse(file.path).base;
      }

      try {
        fs.accessSync(file.path, fs.constants.R_OK);
      } catch (e) {
        throw new Error(`File ${file.path} cannot be read.`);
      }

      this.data.attachments.push({
        id: (this.files.push(file as AttachedFile) - 1) as unknown as string,
        filename: file.name,
        description: file.description
      });
    }

    return this;
  }

  public setAttachments(...files: (AttachedFile | string)[]) {
    this.files = [];
    this.data.attachments = [];

    return this.addAttachments(...files);
  }

  public toJSON(): APIInteractionResponseCallbackData {
    return this.data;
  }

  public toFormData(data: RESTPostAPIWebhookWithTokenJSONBody | APIInteractionResponseCallbackData): FormData {
    const form = new FormData();

    form.append("payload_json", Buffer.from(JSON.stringify(data)), { contentType: "application/json" });

    for (let i = 0; i < (this.files?.length ?? 0); i++) {
      const file = this?.files?.[i] as AttachedFile;

      form.append(`files[${i}]`, fs.createReadStream(file.path), {
        filename: file.name,
        contentType: "image/png"
      });
    }

    return form;
  }

  public toInteractionJSON<
    T extends InteractionResponseType.ChannelMessageWithSource | InteractionResponseType.UpdateMessage
  >(responseType: T): ResponseMap[T] {
    return {
      type: responseType,
      data: this.toJSON()
    } as ResponseMap[T];
  }

  public toInteractionResponse<
    T extends InteractionResponseType.ChannelMessageWithSource | InteractionResponseType.UpdateMessage
  >(responseType: T): ResponseMap[T] | FormData {
    if (this.files === undefined) return this.toInteractionJSON(responseType);

    return this.toFormData(this.toInteractionJSON(responseType));
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
