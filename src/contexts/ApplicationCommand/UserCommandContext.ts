import {
  APIInteractionDataResolvedGuildMember,
  APIUser,
  APIUserApplicationCommandInteraction
} from "discord-api-types/v10";
import { DiscordApplication } from "../..";
import { BaseCommandContext } from "./BaseCommandContext";

export class UserCommandContext extends BaseCommandContext<APIUserApplicationCommandInteraction> {
  public target: {
    user: APIUser;
    member?: APIInteractionDataResolvedGuildMember;
  };

  constructor(manager: DiscordApplication, interaction: APIUserApplicationCommandInteraction) {
    super(manager, interaction);

    const userId = Object.keys(this.interaction.data.resolved.users)[0];

    this.target = {
      user: this.interaction.data.resolved.users[userId],
      member: this.interaction.data.resolved.members?.[userId]
    };
  }
}
