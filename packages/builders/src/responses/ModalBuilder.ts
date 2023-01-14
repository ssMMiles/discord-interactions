import type {
  APIActionRowComponent,
  APIModalActionRowComponent,
  APIModalInteractionResponseCallbackData
} from "discord-api-types/v10";
import type { ActionRowBuilder, ModalActionRowComponentBuilders } from "../components/ActionRowBuilder.js";

export class ModalBuilder {
  public data: Partial<APIModalInteractionResponseCallbackData> = { components: [] };

  public constructor(id: APIModalInteractionResponseCallbackData | string, title?: string);
  public constructor(data?: APIModalInteractionResponseCallbackData | string, title?: string) {
    if (typeof data === "string") return this.setCustomId(data);
    if (data) this.data = data;

    if (title) this.setTitle(title);
  }

  public setCustomId(id: string): this {
    this.data.custom_id = id;
    return this;
  }

  public setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  public addComponents(...components: ActionRowBuilder<ModalActionRowComponentBuilders>[]) {
    if (!this.data.components) this.data.components = [];

    this.data.components.push(...components.map((component) => component.toJSON()));

    return this;
  }

  public setComponents(components: APIActionRowComponent<APIModalActionRowComponent>[] = []) {
    if (!this.data.components) this.data.components = [];

    this.data.components = components;

    return this;
  }

  public toJSON(): APIModalInteractionResponseCallbackData {
    return this.data as APIModalInteractionResponseCallbackData;
  }
}
