import { APIUserSelectComponent, ComponentType, SelectMenuDefaultValueType, Snowflake } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class UserSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIUserSelectComponent>) {
    super(ComponentType.UserSelect, data);
  }

  /**
   * Sets the users selected by default
   * @param userIds Ids of the default users
   */
  public setDefaultValues(...userIds: Snowflake[]): this {
    (this.data as Partial<APIUserSelectComponent>).default_values = userIds.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.User as const
    }));
    return this;
  }
  public toJSON(): APIUserSelectComponent {
    return {
      ...this.data
    } as APIUserSelectComponent;
  }
}
