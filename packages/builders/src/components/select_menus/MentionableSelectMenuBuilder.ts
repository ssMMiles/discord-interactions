import {
  APIMentionableSelectComponent,
  APISelectMenuDefaultValue,
  ComponentType,
  SelectMenuDefaultValueType
} from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class MentionableSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIMentionableSelectComponent>) {
    super(ComponentType.MentionableSelect, data);
  }

  /**
   * Sets the users and/or roles selected by default
   * @param defaultValues Default values, each with an id and a type of "user" or "role"
   */
  public setDefaultValues(
    ...defaultValues: APISelectMenuDefaultValue<SelectMenuDefaultValueType.User | SelectMenuDefaultValueType.Role>[]
  ): this {
    (this.data as Partial<APIMentionableSelectComponent>).default_values = defaultValues;
    return this;
  }
  public toJSON(): APIMentionableSelectComponent {
    return {
      ...this.data
    } as APIMentionableSelectComponent;
  }
}
