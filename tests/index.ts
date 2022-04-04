import { should, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ButtonStyle, InteractionResponseType } from "discord-api-types/v10";
import "dotenv/config";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonContext,
  DiscordApplication,
  MessageBuilder,
  SlashCommandBuilder,
  SlashCommandContext
} from "../src";

use(chaiAsPromised);
should();

if (
  typeof process.env.CLIENT_ID !== "string" ||
  typeof process.env.TOKEN !== "string" ||
  typeof process.env.PUBLIC_KEY !== "string"
) {
  console.error("Please set the CLIENT_ID, TOKEN, and PUBLIC_KEY environment variables.");
  process.exit(1);
}

const testCommandInteraction = {
  application_id: "820553335492837377",
  channel_id: "690256246003204228",
  data: { id: "952134723654799410", name: "queue", type: 1 },
  guild_id: "690255418060046348",
  guild_locale: "en-US",
  id: "959430816138661908",
  locale: "en-GB",
  member: {
    avatar: "66ccf96f0b4230525f0407a479e43440",
    communication_disabled_until: null,
    deaf: false,
    flags: 0,
    is_pending: false,
    joined_at: "2020-03-19T17:48:36.147000+00:00",
    mute: false,
    nick: "goblin giggler",
    pending: false,
    permissions: "4398046511103",
    premium_since: "2021-06-11T19:17:43.822000+00:00",
    roles: ["690258902016852041", "693450982423789591"],
    user: {
      avatar: "ced436c7745589b6357303089f0fabc9",
      discriminator: "6969",
      id: "170531778354741248",
      public_flags: 131648,
      username: "miles"
    }
  },
  token:
    "aW50ZXJhY3Rpb246OTU5NDMwODE2MTM4NjYxOTA4OnpDejNWbmt6VUJuNjdWcVpCeWdyM2pDRENlNlpnVExqVU5rekI2Tmp0MFc4RVEwaVQ3WE9kOVlLRFFuWkgzWlJHNXZiWGNPOTFBcmt5Yjk2VE15Nk1jRVZTRkRVR3FpeVpJVU93TnJlc2xDeTNkVmNYYTExcHF5b3FNdjBnRUk0",
  type: 2,
  version: 1
};

const options = {
  clientId: process.env.CLIENT_ID,
  token: process.env.TOKEN,
  publicKey: process.env.PUBLIC_KEY
};

describe("Discord Application", () => {
  const app = new DiscordApplication(options);

  it("Loading Command", () => {
    app.commands.loadCommand(
      new SlashCommandBuilder()
        .setName("test")
        .setDescription("Test command")
        .setHandler(async (context: SlashCommandContext) => {
          await context.reply(
            new MessageBuilder()
              .setContent("Test command executed!")
              .addActionRow(
                new ActionRowBuilder().addComponents(context.manager.components.createInstance("testButton"))
              )
          );
        })
    );

    app.commands.has("test").should.be.true;
    app.commands.get("test")?.should.be.instanceOf(SlashCommandBuilder);
  });

  it("Loading Component", () => {
    app.components.loadComponent(
      new ButtonBuilder("testButton")
        .setLabel("Test Button")
        .setStyle(ButtonStyle.Primary)
        .setHandler(async (context: ButtonContext) => {
          context.reply(new MessageBuilder().setContent("Test button executed!"));
        })
    );

    app.components.has("testButton").should.be.true;
    app.components.get("testButton")?.should.be.instanceOf(ButtonBuilder);
  });

  it("Setting Global Commands", () => {
    app.putGlobalCommands().should.eventually.not.throw();
  });

  it("Command Interaction Returns Handler Message", async () => {
    const response = await app.handleInteraction(JSON.stringify(testCommandInteraction), false);

    response.should.not.throw;
    response.should.have.property("type", InteractionResponseType.ChannelMessageWithSource);
  });
});
