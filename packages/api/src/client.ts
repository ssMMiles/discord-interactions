import Client from "@discord-interactions/request";

// Kept in sync with package.json manually - JSON imports are not portable across node/worker runtimes.
const VERSION = "0.4.0";
import {
  deleteApplicationCommand,
  getApplicationCommands,
  patchApplicationCommand,
  postApplicationCommand,
  putApplicationCommands
} from "./routes/commands.js";
import { getGuild } from "./routes/guild.js";
import { deleteInteractionFollowup, patchInteractionFollowup, postInteractionFollowup } from "./routes/interactions.js";
import { getCurrentBotApplication } from "./routes/oauth2.js";
import {
  createDm,
  getCurrentUser,
  getCurrentUserConnections,
  getCurrentUserGuildMember,
  getCurrentUserGuilds,
  getUser,
  leaveGuild,
  modifyCurrentUser
} from "./routes/user.js";

export class DiscordApiClient extends Client {
  get userAgent() {
    return super.userAgent;
  }

  set userAgent(value: string) {
    super.userAgent = `${value}, @discord-interactions/api ${VERSION}`;
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

  // User
  getUser = getUser;

  getCurrentUser = getCurrentUser;
  modifyCurrentUser = modifyCurrentUser;

  getCurrentUserConnections = getCurrentUserConnections;

  getCurrentUserGuilds = getCurrentUserGuilds;
  getCurrentUserGuildMember = getCurrentUserGuildMember;

  leaveGuild = leaveGuild;
  createDm = createDm;

  // OAuth2
  getCurrentBotApplication = getCurrentBotApplication;
}