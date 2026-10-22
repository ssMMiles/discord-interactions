import {
  APIChannelSelectComponent,
  ChannelType,
  ComponentType,
  SelectMenuDefaultValueType,
  Snowflake
} from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class ChannelSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIChannelSelectComponent>) {
    super(ComponentType.ChannelSelect, data);
  }

  /**
   * Restricts the channel types shown in this select menu
   * @param channelTypes The channel types to allow
   */
  public setChannelTypes(...channelTypes: ChannelType[]): this {
    (this.data as Partial<APIChannelSelectComponent>).channel_types = channelTypes;
    return this;
  }

  /**
   * Sets the channels selected by default
   * @param channelIds Ids of the default channels
   */
  public setDefaultValues(...channelIds: Snowflake[]): this {
    (this.data as Partial<APIChannelSelectComponent>).default_values = channelIds.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.Channel as const
    }));
    return this;
  }
  public toJSON(): APIChannelSelectComponent {
    return {
      ...this.data
    } as APIChannelSelectComponent;
  }
}
