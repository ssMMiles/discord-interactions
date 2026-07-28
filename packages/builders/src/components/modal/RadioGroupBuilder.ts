import type { APIRadioGroupComponent, APIRadioGroupOption } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * A single-choice set of 2-10 radio options. Modal-only, must be placed inside a Label component.
 */
export class RadioGroupBuilder extends ComponentBuilderBase<APIRadioGroupComponent> {
  public readonly options: APIRadioGroupOption[] = [];

  public constructor(customId?: string) {
    super({ type: ComponentType.RadioGroup });

    if (customId !== undefined) this.setCustomId(customId);
  }

  /**
   * Sets the custom id for this radio group
   */
  public setCustomId(customId: string): this {
    this.data.custom_id = customId;
    return this;
  }

  /**
   * Adds options to this radio group (2-10 total)
   */
  public addOptions(...options: APIRadioGroupOption[]): this {
    this.options.push(...options);
    return this;
  }

  /**
   * Sets whether a selection is required to submit the modal (defaults to true)
   */
  public setRequired(required = true): this {
    this.data.required = required;
    return this;
  }

  public toJSON(): APIRadioGroupComponent {
    if (this.options.length < 2 || this.options.length > 10) {
      throw new RangeError("A Radio Group component must contain between 2 and 10 options.");
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data, options: this.options } as APIRadioGroupComponent;
  }
}
