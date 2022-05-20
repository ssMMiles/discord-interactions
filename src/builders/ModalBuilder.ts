import {
  APIActionRowComponent,
  APIModalActionRowComponent,
  APIModalInteractionResponseCallbackData
} from "discord-api-types/v10";
import { ActionRowBuilder } from "..";
import { ModalActionRowComponentBuilders } from "./components";

export class ModalBuilder {
  public data: APIModalInteractionResponseCallbackData;

  public constructor(title: string, customId?: string) {
    this.data = {
      components: [],

      title,
      custom_id: customId ?? ""
    };
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
    return this.data;
  }
}
