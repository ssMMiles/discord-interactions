import type { APIMessage, APIMessageApplicationCommandInteraction } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { ChannelMessageResponse } from "../response-types.js";
import { BaseCommandContext } from "./Base.js";

export class MessageCommandContext extends BaseCommandContext<APIMessageApplicationCommandInteraction> {
  public message: APIMessage;

  constructor(
    app: DiscordApplication,
    interaction: APIMessageApplicationCommandInteraction,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(app, interaction, timestamps, responseCallback);

    this.message = interaction.data.resolved.messages[interaction.data.target_id];
  }
}
