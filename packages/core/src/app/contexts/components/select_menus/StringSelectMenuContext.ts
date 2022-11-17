import { APIMessageStringSelectInteractionData } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../../DiscordApplication.js";
import { MessageUpdateResponse } from "../../response-types.js";
import { BaseSelectMenuContext, SelectMenuInteraction } from "./BaseSelectMenuContext.js";

type SelectMenuDataType = APIMessageStringSelectInteractionData;
export class StringSelectMenuContext<S = never> extends BaseSelectMenuContext<S, SelectMenuDataType> {
  public values: string[];

  constructor(
    manager: DiscordApplication,
    interaction: SelectMenuInteraction<SelectMenuDataType>,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<MessageUpdateResponse>
  ) {
    super(manager, interaction, timestamps, responseCallback);

    this.values = interaction.data.values;
  }
}
