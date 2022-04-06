import { should, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ButtonStyle, ComponentType, InteractionResponseType } from "discord-api-types/v10";
import "dotenv/config";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonContext,
  DiscordApplication,
  LoadedSlashCommand,
  MessageBuilder,
  SlashCommandBuilder,
  SlashCommandContext
} from "../src";
import { test2CommandInteraction, testCommandInteraction } from "./data";

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

const options = {
  clientId: process.env.CLIENT_ID,
  token: process.env.TOKEN,
  publicKey: process.env.PUBLIC_KEY
};

describe("Discord Application", () => {
  describe("Authentication", () => {
    const publicKey = Buffer.from("67d3b5eaf0c0bf6b5a602d359daecc86a7a74053490ec37ae08e71360587c870", "hex");

    const signature =
        "dbd6c2a5df02e85cdd1779f7ff3ee14d51e56c7f7d9b30d12253ccdd9e84949327db7e1b41e636975b16103316a144f8b98a290112b19e8148bbafa6f4e04209",
      invalidSignature = signature.replace("1", "2"),
      timestamp = "",
      body = "Oh no!";
    it("Valid Signature Is Accepted", () => {
      DiscordApplication.verifyInteractionSignature(publicKey, timestamp, signature, body).should.be.true;
    });

    it("Invalid Signature Is Denied", () => {
      DiscordApplication.verifyInteractionSignature(publicKey, timestamp, invalidSignature, body).should.be.false;
    });
  });

  const app = new DiscordApplication(options);

  describe("Handling Commands", () => {
    it("Basic Command", async () => {
      await app.commands.load([
        new SlashCommandBuilder()
          .setName("test")
          .setDescription("Test command")
          .setHandler(async (context: SlashCommandContext) => {
            await context.reply(new MessageBuilder().setContent("Test command executed!"));
          })
      ]);

      app.commands.has("test").should.be.true;
      app.commands.get("test")?.should.be.instanceOf(LoadedSlashCommand);

      await app.handleInteraction(
        async (response) => {
          response.should.deep.equal({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
              content: "Test command executed!"
            }
          });
        },
        JSON.stringify(testCommandInteraction),
        false
      );
    });

    it("Basic Command With A Button", async () => {
      app.components.load([
        new ButtonBuilder("testButton")
          .setLabel("Test Button")
          .setStyle(ButtonStyle.Primary)
          .setHandler(async (context: ButtonContext) => {
            context.reply(new MessageBuilder().setContent("Test button executed!"));
          })
      ]);

      app.components.has("testButton").should.be.true;
      app.components.get("testButton")?.should.be.instanceOf(ButtonBuilder);

      await app.commands.load([
        new SlashCommandBuilder()
          .setName("test2")
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
      ]);

      app.commands.has("test2").should.be.true;
      app.commands.get("test2")?.should.be.instanceOf(LoadedSlashCommand);

      await app.handleInteraction(
        async (response) => {
          response.should.deep.equal({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
              content: "Test command executed!",
              components: [
                {
                  type: ComponentType.ActionRow,
                  components: [
                    {
                      type: ComponentType.Button,
                      custom_id: "testButton|",
                      label: "Test Button",
                      style: 1
                    }
                  ]
                }
              ]
            }
          });
        },
        JSON.stringify(test2CommandInteraction),
        false
      );
    });
  });
});
