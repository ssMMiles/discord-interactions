import type { APIMessage, APIMessageApplicationCommandInteraction } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { ChannelMessageResponse } from "../response-types.js";
import { BaseCommandContext } from "./Base.js";

export class MessageCommandContext extends BaseCommandContext<APIMessageApplicationCommandInteraction> {
  public message: APIMessage;

  constructor(
    manager: DiscordApplication,
    interaction: APIMessageApplicationCommandInteraction,
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(manager, interaction, responseCallback);

    const messageId = Object.keys(this.interaction.data.resolved.messages)[0];

    this.message = this.interaction.data.resolved.messages[messageId];
  }
}
