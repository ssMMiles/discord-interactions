import type { APILabelComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";
import type { SelectMenuBuilders } from "../select_menus/index.js";
import type { TextInputBuilder } from "../TextInputBuilder.js";
import type { CheckboxBuilder } from "./CheckboxBuilder.js";
import type { CheckboxGroupBuilder } from "./CheckboxGroupBuilder.js";
import type { FileUploadBuilder } from "./FileUploadBuilder.js";
import type { RadioGroupBuilder } from "./RadioGroupBuilder.js";

export type LabelChildBuilders =
  | TextInputBuilder
  | SelectMenuBuilders
  | FileUploadBuilder
  | RadioGroupBuilder
  | CheckboxGroupBuilder
  | CheckboxBuilder;

/**
 * Associates a label and optional description with a single interactive component. Modal-only.
 * This replaces Action Rows (and the Text Input label field) in modals.
 */
export class LabelBuilder extends ComponentBuilderBase<APILabelComponent> {
  private component?: LabelChildBuilders;

  public constructor(label?: string, component?: LabelChildBuilders) {
    super({ type: ComponentType.Label });

    if (label !== undefined) this.setLabel(label);
    if (component !== undefined) this.setComponent(component);
  }

  /**
   * Sets the label text (max 45 characters)
   */
  public setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Sets the description shown under the label (max 100 characters)
   */
  public setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Sets the interactive component this label wraps
   */
  public setComponent(component: LabelChildBuilders): this {
    this.component = component;
    return this;
  }

  public toJSON(): APILabelComponent {
    if (this.component === undefined) {
      throw new Error("A Label component requires a child component.");
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      ...this.data,
      component: this.component.toJSON()
    } as APILabelComponent;
  }
}
