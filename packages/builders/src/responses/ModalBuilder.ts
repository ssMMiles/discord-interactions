import type {
  APIModalInteractionResponseCallbackComponent,
  APIModalInteractionResponseCallbackData
} from "discord-api-types/v10";
import type { ActionRowBuilder, ModalActionRowComponentBuilders } from "../components/ActionRowBuilder.js";
import type { LabelBuilder } from "../components/modal/LabelBuilder.js";
import type { TextDisplayBuilder } from "../components/v2/TextDisplayBuilder.js";

/**
 * Top-level components allowed in a modal: Labels wrapping interactive components,
 * Text Displays, or (deprecated) Action Rows containing a Text Input.
 */
export type ModalTopLevelComponentBuilders =
  | LabelBuilder
  | TextDisplayBuilder
  | ActionRowBuilder<ModalActionRowComponentBuilders>;

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

  /**
   * Adds top-level components to this modal (1-5 total).
   * Interactive components must be wrapped in a Label component; Action Rows are deprecated.
   */
  public addComponents(...components: ModalTopLevelComponentBuilders[]) {
    if (!this.data.components) this.data.components = [];

    this.data.components.push(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      ...components.map((component) => component.toJSON() as APIModalInteractionResponseCallbackComponent)
    );

    return this;
  }

  public setComponents(components: APIModalInteractionResponseCallbackComponent[] = []) {
    this.data.components = components;

    return this;
  }

  public toJSON(): APIModalInteractionResponseCallbackData {
    const components = this.data.components ?? [];
    if (components.length < 1 || components.length > 5) {
      throw new RangeError("A modal must contain between 1 and 5 top-level components.");
    }

    return this.data as APIModalInteractionResponseCallbackData;
  }
}
