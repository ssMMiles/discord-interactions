import { APIRoleSelectComponent, ComponentType } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class RoleSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIRoleSelectComponent>) {
    super(ComponentType.RoleSelect, data);
  }
  public toJSON(): APIRoleSelectComponent {
    return {
      ...this.data
    } as APIRoleSelectComponent;
  }
}
