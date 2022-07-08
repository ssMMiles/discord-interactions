/* eslint-disable @typescript-eslint/no-unused-vars */
import { DiscordApplication } from "@discord-interactions/core";
import "../dist/index.js";

import data from "./data.json";
const { PUBLIC_KEY, BODY_INVALID, SIGNATURE_INVALID, TIMESTAMP_INVALID, BODY_VALID, SIGNATURE_VALID, TIMESTAMP_VALID } =
  data;

describe("Discord Application", () => {
  describe("Standalone Authentication", () => {
    it("Valid Signature Is Accepted", async () => {
      expect(
        await DiscordApplication.verifyInteractionSignature(PUBLIC_KEY, SIGNATURE_VALID, TIMESTAMP_VALID, BODY_VALID)
      ).toBe(true);
    });

    it("Invalid Signature Is Denied", async () => {
      expect(
        await DiscordApplication.verifyInteractionSignature(
          PUBLIC_KEY,
          SIGNATURE_INVALID,
          TIMESTAMP_INVALID,
          BODY_INVALID
        )
      ).toBe(false);
    });
  });

  describe("Built-in (.handleInteraction) Authentication", () => {
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
        expect(err.constructor.name).toBe("UnauthorizedInteraction");
      }
    });
  });
});
