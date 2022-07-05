import { APIMessage, APIMessageApplicationCommandInteraction } from "discord-api-types/v10";
import { ChannelMessageResponse } from "../../../util";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication";
import { BaseCommandContext } from "./Base";

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
