import { APIMessage, APIMessageApplicationCommandInteraction } from "discord-api-types/v10";
import { DiscordApplication } from "../..";
import { BaseCommandContext } from "./BaseCommandContext";

export class MessageCommandContext extends BaseCommandContext<APIMessageApplicationCommandInteraction> {
  public message: APIMessage;

  constructor(manager: DiscordApplication, interaction: APIMessageApplicationCommandInteraction) {
    super(manager, interaction);

    const messageId = Object.keys(this.interaction.data.resolved.messages)[0];

    this.message = this.interaction.data.resolved.messages[messageId];
  }
}
