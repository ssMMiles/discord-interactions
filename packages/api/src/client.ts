import Client from "@discord-interactions/request";

// Kept in sync with package.json manually - JSON imports are not portable across node/worker runtimes.
const VERSION = "0.4.0";
import { editCurrentApplication, getCurrentApplication } from "./routes/application.js";
import {
  deleteApplicationCommand,
  getApplicationCommands,
  patchApplicationCommand,
  postApplicationCommand,
  putApplicationCommands
} from "./routes/commands.js";
import {
  createApplicationEmoji,
  deleteApplicationEmoji,
  editApplicationEmoji,
  getApplicationEmoji,
  getApplicationEmojis
} from "./routes/emoji.js";
import {
  consumeEntitlement,
  createTestEntitlement,
  deleteTestEntitlement,
  getEntitlement,
  getEntitlements
} from "./routes/entitlements.js";
import { getGuild, searchGuildMessages } from "./routes/guild.js";
import {
  deleteInteractionFollowup,
  patchInteractionFollowup,
  postInteractionCallback,
  postInteractionFollowup
} from "./routes/interactions.js";
import { createMessage, deleteMessage, editMessage, getChannelMessage, getChannelMessages } from "./routes/messages.js";
import { getSKUs, getSKUSubscription, getSKUSubscriptions } from "./routes/monetization.js";
import { getCurrentBotApplication } from "./routes/oauth2.js";
import { getChannelMessagePins, pinMessage, unpinMessage } from "./routes/pins.js";
import { expirePoll, getPollAnswerVoters } from "./routes/polls.js";
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
  searchGuildMessages = searchGuildMessages;

  postInteractionCallback = postInteractionCallback;

  postInteractionFollowup = postInteractionFollowup;
  patchInteractionFollowup = patchInteractionFollowup;
  deleteInteractionFollowup = deleteInteractionFollowup;

  // Application
  getCurrentApplication = getCurrentApplication;
  editCurrentApplication = editCurrentApplication;

  // Application Emoji
  getApplicationEmojis = getApplicationEmojis;
  getApplicationEmoji = getApplicationEmoji;
  createApplicationEmoji = createApplicationEmoji;
  editApplicationEmoji = editApplicationEmoji;
  deleteApplicationEmoji = deleteApplicationEmoji;

  // Monetization
  getEntitlements = getEntitlements;
  getEntitlement = getEntitlement;
  consumeEntitlement = consumeEntitlement;
  createTestEntitlement = createTestEntitlement;
  deleteTestEntitlement = deleteTestEntitlement;

  getSKUs = getSKUs;
  getSKUSubscriptions = getSKUSubscriptions;
  getSKUSubscription = getSKUSubscription;

  // Messages
  getChannelMessages = getChannelMessages;
  getChannelMessage = getChannelMessage;
  createMessage = createMessage;
  editMessage = editMessage;
  deleteMessage = deleteMessage;

  // Pins
  getChannelMessagePins = getChannelMessagePins;
  pinMessage = pinMessage;
  unpinMessage = unpinMessage;

  // Polls
  getPollAnswerVoters = getPollAnswerVoters;
  expirePoll = expirePoll;

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