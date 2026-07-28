import type { APICheckboxComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * A single checkbox for a binary choice. Modal-only, must be placed inside a Label component.
 * Cannot be required - use a one-option Checkbox Group for that.
 */
export class CheckboxBuilder extends ComponentBuilderBase<APICheckboxComponent> {
  public constructor(customId?: string) {
    super({ type: ComponentType.Checkbox });

    if (customId !== undefined) this.setCustomId(customId);
  }

  /**
   * Sets the custom id for this checkbox
   */
  public setCustomId(customId: string): this {
    this.data.custom_id = customId;
    return this;
  }

  /**
   * Sets whether this checkbox starts checked
   */
  public setDefault(checked = true): this {
    this.data.default = checked;
    return this;
  }

  public toJSON(): APICheckboxComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data } as APICheckboxComponent;
  }
}
