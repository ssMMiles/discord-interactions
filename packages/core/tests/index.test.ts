import {
  ButtonBuilder,
  CommandGroupBuilder,
  MessageBuilder,
  SlashCommandBuilder,
  SubcommandOption
} from "@discord-interactions/builders";
import { ButtonStyle, InteractionResponseType } from "discord-api-types/v10";
import "dotenv/config";
import {
  Button,
  ButtonContext,
  CommandGroup,
  DiscordApplication,
  DiscordApplicationOptions,
  SlashCommand
} from "../dist/index.js";

import data from "./data.json";
const { testCommandInteraction, buttonInteraction } = data;

import data2 from "./data2.json";
const { PUBLIC_KEY, BODY_INVALID, SIGNATURE_INVALID, TIMESTAMP_INVALID, BODY_VALID, SIGNATURE_VALID, TIMESTAMP_VALID } =
  data2;

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

      expect(app.commands.has("test")).toBe(true);
      expect(app.commands.get("test")?.constructor.name).toBe("RegisteredSlashCommand");
    });

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

      expect(app.commands.has("config")).toBe(true);
      expect(app.commands.get("config")?.constructor.name).toBe("RegisteredCommandGroup");
    });
  });

  describe("Signature Verification", () => {
    const app = new DiscordApplication({
      clientId: "123456789",
      token: "abcd",
      publicKey: PUBLIC_KEY
    });

    it("Valid Signature Is Accepted", async () => {
      try {
        const [_getResponse, handling] = await app.handleInteraction(BODY_VALID, SIGNATURE_VALID, TIMESTAMP_VALID);

        await handling;
        expect(true).toBe(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
        expect(err.constructor.name).toBe(null);
      }
    });

    it("Invalid Signature Is Denied", async () => {
      try {
        const [_getResponse, handling] = await app.handleInteraction(
          BODY_INVALID,
          SIGNATURE_INVALID,
          TIMESTAMP_INVALID
        );

        await handling;

        expect(false).toBe(true);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
        expect(err.constructor.name).toBe("UnauthorizedInteraction");
      }
    });
  });

  describe("Handling Interactions", () => {
    it("Slash Command", async () => {
      const [getResponse] = await app.handleInteraction(JSON.stringify(testCommandInteraction), false);

      expect(await getResponse).toEqual({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: "Test command executed!"
        }
      });
    });

    it("Button", async () => {
      app.components.register(
        new Button(
          "testButton",
          new ButtonBuilder().setLabel("Test Button").setStyle(ButtonStyle.Primary),
          async (context: ButtonContext) => {
            context.reply(new MessageBuilder().setContent("Test button executed!"));
          }
        )
      );

      const [getResponse] = await app.handleInteraction(JSON.stringify(buttonInteraction), false);

      expect(await getResponse).toEqual({
        type: InteractionResponseType.UpdateMessage,
        data: {
          content: "Test button executed!"
        }
      });
    });
  });
});
