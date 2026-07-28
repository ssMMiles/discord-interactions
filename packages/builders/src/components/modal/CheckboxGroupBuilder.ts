import type { APICheckboxGroupComponent, APICheckboxGroupOption } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * A multi-select group of 1-10 checkboxes. Modal-only, must be placed inside a Label component.
 */
export class CheckboxGroupBuilder extends ComponentBuilderBase<APICheckboxGroupComponent> {
  public readonly options: APICheckboxGroupOption[] = [];

  public constructor(customId?: string) {
    super({ type: ComponentType.CheckboxGroup });

    if (customId !== undefined) this.setCustomId(customId);
  }

  /**
   * Sets the custom id for this checkbox group
   */
  public setCustomId(customId: string): this {
    this.data.custom_id = customId;
    return this;
  }

  /**
   * Adds options to this checkbox group (1-10 total)
   */
  public addOptions(...options: APICheckboxGroupOption[]): this {
    this.options.push(...options);
    return this;
  }

  /**
   * Sets the minimum number of options that must be checked (0-10)
   */
  public setMinValues(minValues: number): this {
    this.data.min_values = minValues;
    return this;
  }

  /**
   * Sets the maximum number of options that can be checked (defaults to the option count)
   */
  public setMaxValues(maxValues: number): this {
    this.data.max_values = maxValues;
    return this;
  }

  /**
   * Sets whether at least one selection is required to submit the modal (defaults to true)
   */
  public setRequired(required = true): this {
    this.data.required = required;
    return this;
  }

  public toJSON(): APICheckboxGroupComponent {
    if (this.options.length < 1 || this.options.length > 10) {
      throw new RangeError("A Checkbox Group component must contain between 1 and 10 options.");
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data, options: this.options } as APICheckboxGroupComponent;
  }
}
