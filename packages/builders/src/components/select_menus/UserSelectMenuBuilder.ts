import { APIUserSelectComponent, ComponentType } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class UserSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIUserSelectComponent>) {
    super(ComponentType.UserSelect, data);
  }
  public toJSON(): APIUserSelectComponent {
    return {
      ...this.data
    } as APIUserSelectComponent;
  }
}
