import { DiscordApplication } from "@discord-interactions/core";
import "@discord-interactions/verify-node";
import "dotenv/config";

const keys = ["CLIENT_ID", "TOKEN", "PUBLIC_KEY", "PORT"];

const missing = keys.filter((key) => !(key in process.env));

if (missing.length !== 0) {
  console.error(`Missing Enviroment Variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`);
  process.exit(1);
}

describe("To-Do", () => {
  it("Create DiscordApplication", () => {
    const app = new DiscordApplication({
      clientId: process.env.CLIENT_ID as string,
      token: process.env.TOKEN as string,
      publicKey: process.env.PUBLIC_KEY as string
    });

    expect(app.constructor.name).toBe("DiscordApplication");
  });
});
