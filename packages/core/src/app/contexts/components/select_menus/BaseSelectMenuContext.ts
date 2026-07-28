import { APIBaseInteraction, APIMessageSelectMenuInteractionData, InteractionType } from "discord-api-types/v10";
import { APIMessageStringSelectInteractionData } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../../DiscordApplication.js";
import { MessageUpdateResponse } from "../../response-types.js";
import { BaseComponentContext } from "../ComponentContext.js";

export type SelectMenuInteraction<DataType> = APIBaseInteraction<InteractionType.MessageComponent, DataType> &
  Required<
    Pick<
      APIBaseInteraction<InteractionType.MessageComponent, DataType>,
      "channel_id" | "channel" | "data" | "message" | "app_permissions"
    >
  >;

export class BaseSelectMenuContext<
  S = never,
  DataType extends APIMessageSelectMenuInteractionData = APIMessageStringSelectInteractionData
> extends BaseComponentContext<S, SelectMenuInteraction<DataType>> {
  public values: string[];

  constructor(
    manager: DiscordApplication,
    interaction: SelectMenuInteraction<DataType>,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<MessageUpdateResponse>
  ) {
    super(manager, interaction, timestamps, responseCallback);

    this.values = interaction.data.values;
  }
}
