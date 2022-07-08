import { DiscordApplication } from "@discord-interactions/core";
import "dotenv/config";

import data from "./data.json";
const { PUBLIC_KEY, SIGNATURE } = data;

describe("Discord Application", () => {
  describe("Authentication", () => {
    const publicKey = Buffer.from(PUBLIC_KEY, "hex");
    const signature = SIGNATURE;

    const invalidSignature = signature.replace("1", "2");

    const timestamp = "";
    const body = "Oh no!";

    it("Valid Signature Is Accepted", () => {
      expect(DiscordApplication.verifyInteractionSignature(publicKey, timestamp, signature, body)).toBe(true);
    });

    it("Invalid Signature Is Denied", () => {
      expect(DiscordApplication.verifyInteractionSignature(publicKey, timestamp, invalidSignature, body)).toBe(false);
    });
  });
});
