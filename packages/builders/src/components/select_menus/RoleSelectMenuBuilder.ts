import { APIRoleSelectComponent, ComponentType, SelectMenuDefaultValueType, Snowflake } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class RoleSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIRoleSelectComponent>) {
    super(ComponentType.RoleSelect, data);
  }

  /**
   * Sets the roles selected by default
   * @param roleIds Ids of the default roles
   */
  public setDefaultValues(...roleIds: Snowflake[]): this {
    (this.data as Partial<APIRoleSelectComponent>).default_values = roleIds.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.Role as const
    }));
    return this;
  }
  public toJSON(): APIRoleSelectComponent {
    return {
      ...this.data
    } as APIRoleSelectComponent;
  }
}
