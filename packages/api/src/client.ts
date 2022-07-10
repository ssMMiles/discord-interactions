import Client from "@discord-interactions/request";
import pkg from "../package.json" assert { type: "json" };
import {
  deleteApplicationCommand,
  getApplicationCommands,
  patchApplicationCommand,
  postApplicationCommand,
  putApplicationCommands
} from "./routes/commands.js";
import { getGuild } from "./routes/guild.js";
import { deleteInteractionFollowup, patchInteractionFollowup, postInteractionFollowup } from "./routes/interactions.js";

export class DiscordApiClient extends Client {
  get userAgent() {
    return this.userAgent;
  }

  set userAgent(value: string) {
    this.userAgent = `${value}, @discord-interactions/api ${pkg.version}`;
  }

  getApplicationCommands = getApplicationCommands;
  putApplicationCommands = putApplicationCommands;
  postApplicationCommand = postApplicationCommand;
  patchApplicationCommand = patchApplicationCommand;
  deleteApplicationCommand = deleteApplicationCommand;

  getGuild = getGuild;

  postInteractionFollowup = postInteractionFollowup;
  patchInteractionFollowup = patchInteractionFollowup;
  deleteInteractionFollowup = deleteInteractionFollowup;
}
