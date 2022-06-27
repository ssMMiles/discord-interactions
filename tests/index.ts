import { expect, should, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import equal from "deep-equal";
import { ButtonStyle, InteractionResponseType } from "discord-api-types/v10";
import "dotenv/config";
import {
  Button,
  ButtonBuilder,
  ButtonContext,
  CommandGroup,
  DiscordApplication,
  DiscordApplicationOptions,
  MessageBuilder,
  RegisteredCommandGroup,
  RegisteredSlashCommand,
  SlashCommand,
  SlashCommandBuilder,
  SubcommandOption
} from "../src";
import { CommandGroupBuilder } from "../src/builders/commands/CommandGroupBuilder";
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

  describe("Managing Application Commands", () => {
    it("Creating Slash Command", async () => {
      expect(
        await app.commands.register(
          new SlashCommand(new SlashCommandBuilder("test", "A simple testing command!"), async (context) => {
            context.reply(new MessageBuilder().setContent("Test command executed!"));
          })
        )
      );

      app.commands.has("test").should.be.true;
      app.commands.get("test")?.should.be.instanceOf(RegisteredSlashCommand);
    }).timeout(3000);

    it("Creating Slash Command Group", async () => {
      expect(
        await app.commands.register(
          new CommandGroup(
            new CommandGroupBuilder("config", "A simple config command.").addSubcommands(
              new SubcommandOption("get", "Get a config value."),
              new SubcommandOption("set", "Set a config value.")
            ),
            {
              get: {
                handler: async (context) => {
                  const value = "x";
                  context.reply(new MessageBuilder(`Config value: ${value}!`));
                }
              },
              set: {
                handler: async (context) => {
                  context.reply(new MessageBuilder("Config value set!"));
                }
              }
            }
          )
        )
      );

      app.commands.has("config").should.be.true;
      app.commands.get("config")?.should.be.instanceOf(RegisteredCommandGroup);
    }).timeout(3000);
  });

  describe("Handling Interactions", () => {
    it("Slash Command", (done) => {
      const [response] = app.handleInteraction(JSON.stringify(testCommandInteraction), false);

      response.then((response) => {
        expect(
          equal(response, {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
              content: "Test command executed!"
            }
          }).should.be.true
        );

        done();
      });
    });

    it("Button", (done) => {
      app.components.register(
        new Button(
          "testButton",
          new ButtonBuilder().setLabel("Test Button").setStyle(ButtonStyle.Primary),
          async (context: ButtonContext) => {
            context.reply(new MessageBuilder().setContent("Test button executed!"));
          }
        )
      );

      const [response] = app.handleInteraction(JSON.stringify(buttonInteraction), false);

      response.then((response) => {
        const data = {
          type: InteractionResponseType.UpdateMessage,
          data: {
            content: "Test button executed!"
          }
        };

        equal(response, data, { strict: true }).should.be.true;

        done();
      });
    });
  });
});
