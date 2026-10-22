import { DiscordApplication } from "@discord-interactions/core";
import "dotenv/config";

// A valid-format Ed25519 public key for offline testing (all zeros is fine for construction)
const OFFLINE_PUBLIC_KEY = "0".repeat(64);

describe("To-Do", () => {
  it("Create DiscordApplication", () => {
    const app = new DiscordApplication({
      clientId: process.env.CLIENT_ID ?? "123456789",
      token: process.env.TOKEN ?? "offline-test-token",
      publicKey: process.env.PUBLIC_KEY ?? OFFLINE_PUBLIC_KEY
    });

    expect(app.constructor.name).toBe("DiscordApplication");
  });
});
