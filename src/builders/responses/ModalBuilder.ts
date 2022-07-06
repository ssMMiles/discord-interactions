import type {
  APIActionRowComponent,
  APIModalActionRowComponent,
  APIModalInteractionResponseCallbackData
} from "discord-api-types/v10";
import type { ActionRowBuilder, ModalActionRowComponentBuilders } from "../components";

export class ModalBuilder {
  public data: Partial<APIModalInteractionResponseCallbackData> = { components: [] };

  public constructor(data?: APIModalInteractionResponseCallbackData | string) {
    if (data) {
      if (typeof data === "string") return this.setTitle(data);

      this.data = data;
    }
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
