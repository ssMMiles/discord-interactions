import { APITextInputComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "./ComponentBuilderBase";

export enum TextInputStyle {
  Short = 1, // Single-line
  Paragraph = 2 // Multi-line
}

/**
 * Represents a non-validated text input component
 */
export class TextInputBuilder extends ComponentBuilderBase<APITextInputComponent> {
  public constructor(id: string, label: string, style: TextInputStyle) {
    super({
      type: ComponentType.TextInput,

      custom_id: id,
      label,
      style
    });
  }

  /**
   * Sets the placeholder for this text input
   * @param placeholder The placeholder to use for this text input
   */
  public setPlaceholder(placeholder: string): this {
    this.data.placeholder = placeholder;
    return this;
  }

  /**
   * Sets a prefilled value for the text input
   * @param value Text to fill with
   */
  public setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Sets the label for this button
   * @param label The label to display on this button
   */
  public setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Sets the style of this button
   * @param style The style of the button
   */
  public setStyle(style: TextInputStyle): this {
    this.data.style = style;
    return this;
  }

  /**
   * Sets the minimum values that must be selected in the text input
   * @param minValues The minimum values that must be selected
   */
  public setMinLength(minLength: number): this {
    this.data.min_length = minLength;
    return this;
  }

  /**
   * Sets the maximum values that must be selected in the text input
   * @param minValues The maximum values that must be selected
   */
  public setMaxLength(maxLength: number): this {
    this.data.max_length = maxLength;
    return this;
  }

  /**
   * Sets the custom Id for this text input
   * @param customId The custom id to use for this text input
   */
  public setCustomId(customId: string): this {
    this.data.custom_id = customId;
    return this;
  }

  /**
   * Sets whether or not this text input is required
   * @param disabled Whether or not this text input is required - Default: true
   */
  public setRequired(required = true): this {
    this.data.required = required;
    return this;
  }

  public toJSON(): APITextInputComponent {
    return {
      ...this.data
    } as APITextInputComponent;
  }
}
