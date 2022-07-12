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
    app: DiscordApplication,
    interaction: APIUserApplicationCommandInteraction,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(app, interaction, timestamps, responseCallback);

    this.target = {
      user: this.resolved.users?.get(interaction.data.target_id) as APIUser,
      member: this.resolved.members?.get(interaction.data.target_id)
    };
  }
}
