import { APIChannelSelectComponent, ComponentType } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class ChannelSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIChannelSelectComponent>) {
    super(ComponentType.ChannelSelect, data);
  }
  public toJSON(): APIChannelSelectComponent {
    return {
      ...this.data
    } as APIChannelSelectComponent;
  }
}
