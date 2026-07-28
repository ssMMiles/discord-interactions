import { APISelectMenuComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

export type SelectMenuComponentTypes =
  | ComponentType.StringSelect
  | ComponentType.UserSelect
  | ComponentType.ChannelSelect
  | ComponentType.RoleSelect
  | ComponentType.MentionableSelect;

/**
 * Represents a non-validated select menu component
 */
export class SelectMenuBuilderBase extends ComponentBuilderBase<APISelectMenuComponent> {
  public constructor(type: SelectMenuComponentTypes, data?: Partial<APISelectMenuComponent>) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    super({ ...data, type } as Partial<APISelectMenuComponent>);
  }

  /**
   * Sets the placeholder for this select menu
   * @param placeholder The placeholder to use for this select menu
   */
  public setPlaceholder(placeholder: string): this {
    this.data.placeholder = placeholder;
    return this;
  }

  /**
   * Sets the minimum values that must be selected in the select menu
   * @param minValues The minimum values that must be selected
   */
  public setMinValues(minValues: number): this {
    this.data.min_values = minValues;
    return this;
  }

  /**
   * Sets the maximum values that must be selected in the select menu
   * @param minValues The maximum values that must be selected
   */
  public setMaxValues(maxValues: number): this {
    this.data.max_values = maxValues;
    return this;
  }

  /**
   * Sets the custom Id for this select menu
   * @param customId The custom id to use for this select menu
   */
  public setCustomId(customId: string): this {
    this.data.custom_id = customId;
    return this;
  }

  /**
   * Sets whether or not this select menu is disabled.
   * Note: disabled select menus are not allowed in modals.
   * @param disabled Whether or not this select menu is disabled
   */
  public setDisabled(disabled = true): this {
    this.data.disabled = disabled;
    return this;
  }

  /**
   * Sets whether a selection is required to submit the modal (defaults to true).
   * Only used when this select menu is placed in a modal; ignored in messages.
   */
  public setRequired(required = true): this {
    this.data.required = required;
    return this;
  }

  public toJSON(): APISelectMenuComponent {
    return {
      ...this.data
    } as APISelectMenuComponent;
  }
}
