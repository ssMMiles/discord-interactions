import {
  APIInteractionDataResolvedGuildMember,
  APIUser,
  APIUserApplicationCommandInteraction
} from "discord-api-types/v10";
import { ChannelMessageResponse } from "../../../util";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication";
import { BaseCommandContext } from "./Base";

export class UserCommandContext extends BaseCommandContext<APIUserApplicationCommandInteraction> {
  public target: {
    user: APIUser;
    member?: APIInteractionDataResolvedGuildMember;
  };

  constructor(
    manager: DiscordApplication,
    interaction: APIUserApplicationCommandInteraction,
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(manager, interaction, responseCallback);

    const userId = Object.keys(this.interaction.data.resolved.users)[0];

    this.target = {
      user: this.interaction.data.resolved.users[userId],
      member: this.interaction.data.resolved.members?.[userId]
    };
  }
}
