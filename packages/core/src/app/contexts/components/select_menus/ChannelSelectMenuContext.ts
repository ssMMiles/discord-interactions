import { APIInteractionDataResolvedChannel, APIMessageChannelSelectInteractionData } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../../DiscordApplication.js";
import { MessageUpdateResponse } from "../../response-types.js";
import { BaseSelectMenuContext, SelectMenuInteraction } from "./BaseSelectMenuContext.js";

type SelectMenuDataType = APIMessageChannelSelectInteractionData;
export class ChannelSelectMenuContext<S = never> extends BaseSelectMenuContext<S, SelectMenuDataType> {
  public values: string[];

  public target: {
    channel: APIInteractionDataResolvedChannel;
  };

  constructor(
    manager: DiscordApplication,
    interaction: SelectMenuInteraction<SelectMenuDataType>,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<MessageUpdateResponse>
  ) {
    super(manager, interaction, timestamps, responseCallback);

    this.values = interaction.data.values;

    this.target = {
      channel: interaction.data.resolved.channels[interaction.data.values[0]]
    };
  }
}
