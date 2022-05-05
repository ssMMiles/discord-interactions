import { should, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import equal from "deep-equal";
import { ButtonStyle, InteractionResponseType } from "discord-api-types/v10";
import "dotenv/config";
import {
  ButtonContext,
  DiscordApplication,
  DiscordApplicationOptions,
  HandledButtonBuilder,
  LoadedSlashCommand,
  MessageBuilder,
  SlashCommandBuilder,
  SlashCommandContext
} from "../src";
import { buttonInteraction, testCommandInteraction } from "./data";

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

const options: DiscordApplicationOptions = {
  clientId: process.env.CLIENT_ID,
  token: process.env.TOKEN,
  publicKey: process.env.PUBLIC_KEY,

  removeUnregistered: false
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

  describe("Managing Application", () => {
    it("Creating Slash Command", (done) => {
      app.commands
        .load(
          [
            new SlashCommandBuilder()
              .setName("test")
              .setDescription("Test command")
              .setHandler(async (context: SlashCommandContext) => {
                await context.reply(new MessageBuilder().setContent("Test command executed!"));
              })
          ],
          false
        )
        .then(async () => {
          app.commands.has("test").should.be.true;
          app.commands.get("test")?.should.be.instanceOf(LoadedSlashCommand);

          done();
        });
    }).timeout(3000);
  });

  describe("Handling Interactions", () => {
    it("Slash Command", (done) => {
      app.handleInteraction(
        async (response) => {
          // If test is timing out this is just not equal, it don't fail properly
          equal(response, {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
              content: "Test command executed!"
            }
          }).should.be.true;

          done();
        },
        JSON.stringify(testCommandInteraction),
        false
      );
    });

    it("Button", (done) => {
      app.components.load([
        new HandledButtonBuilder("testButton")
          .setLabel("Test Button")
          .setStyle(ButtonStyle.Primary)
          .setHandler(async (context: ButtonContext) => {
            context.reply(new MessageBuilder().setContent("Test button executed!"));
          })
      ]);

      app.handleInteraction(
        async (response) => {
          const data = {
            type: InteractionResponseType.UpdateMessage,
            data: {
              content: "Test button executed!"
            }
          };

          equal(response, data, { strict: true }).should.be.true;

          done();
        },
        JSON.stringify(buttonInteraction),
        false
      );
    });
  });
});
