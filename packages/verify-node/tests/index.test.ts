import { DiscordApplication } from "@discord-interactions/core";
import "@discord-interactions/verify-node";
import "dotenv/config";

import data from "./data.json";
const { PUBLIC_KEY, SIGNATURE } = data;

describe("Discord Application", () => {
  describe("Authentication", () => {
    const signature = SIGNATURE;

    const invalidSignature = signature.replace("1", "2");

    const timestamp = "";
    const body = "Oh no!";

    it("Valid Signature Is Accepted", async () => {
      expect(await DiscordApplication.verifyInteractionSignature(PUBLIC_KEY, timestamp, signature, body)).toBe(true);
    });

    it("Invalid Signature Is Denied", async () => {
      expect(await DiscordApplication.verifyInteractionSignature(PUBLIC_KEY, timestamp, invalidSignature, body)).toBe(
        false
      );
    });
  });
});
