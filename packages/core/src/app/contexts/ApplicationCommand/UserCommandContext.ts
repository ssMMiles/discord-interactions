import type {
  APIInteractionDataResolvedGuildMember,
  APIUser,
  APIUserApplicationCommandInteraction
} from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { ChannelMessageResponse } from "../response-types.js";
import { BaseCommandContext } from "./Base.js";

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
