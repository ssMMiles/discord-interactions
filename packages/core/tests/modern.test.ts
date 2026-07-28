import {
  EntryPointCommandBuilder,
  LabelBuilder,
  ModalBuilder,
  TextInputBuilder
} from "@discord-interactions/builders";
import { InteractionResponseType } from "discord-api-types/v10";
import {
  DiscordApplication,
  EntryPointCommand,
  Modal,
  ModalSubmitContext,
  SyncMode
} from "../dist/index.js";

import data2 from "./data2.json";
const { PUBLIC_KEY, BODY_INVALID, SIGNATURE_INVALID, TIMESTAMP_INVALID } = data2;

const app = new DiscordApplication({
  clientId: "123456789",
  token: "offline-test-token",
  publicKey: PUBLIC_KEY,
  syncMode: SyncMode.Disabled
});

const baseInteraction = {
  id: "1",
  application_id: "123456789",
  token: "interaction-token",
  version: 1,
  locale: "en-US",
  app_permissions: "0",
  entitlements: [],
  authorizing_integration_owners: {},
  attachment_size_limit: 10485760,
  channel_id: "500",
  channel: { id: "500", type: 1 },
  user: { id: "42", username: "tester", discriminator: "0", global_name: "Tester", avatar: null }
};

describe("Modern modal submissions", () => {
  const modalSubmitInteraction = {
    ...baseInteraction,
    type: 5,
    data: {
      custom_id: "testModal|{}",
      components: [
        { type: 10, id: 1, content: "Some display text" },
        { type: 18, id: 2, component: { type: 4, custom_id: "name", value: "Miles" } },
        { type: 18, id: 3, component: { type: 3, custom_id: "color", values: ["blue", "green"] } },
        { type: 18, id: 4, component: { type: 21, custom_id: "size", value: "large" } },
        { type: 18, id: 5, component: { type: 23, custom_id: "subscribe", value: true } },
        { type: 18, id: 6, component: { type: 22, custom_id: "toppings", values: ["cheese"] } },
        { type: 18, id: 7, component: { type: 19, custom_id: "files", values: ["900"] } },
        { type: 1, id: 8, components: [{ type: 4, custom_id: "legacy", value: "legacy value" }] }
      ],
      resolved: {
        attachments: {
          "900": { id: "900", filename: "photo.png", size: 1024, url: "https://cdn.test/photo.png", proxy_url: "https://proxy.test/photo.png" }
        }
      }
    }
  };

  let capturedContext: ModalSubmitContext | undefined;

  beforeAll(async () => {
    app.components.register(
      new Modal(
        "testModal",
        new ModalBuilder("testModal", "Test Modal").addComponents(
          new LabelBuilder("Name", new TextInputBuilder("name"))
        ),
        async (context: ModalSubmitContext) => {
          capturedContext = context;
          context.replyFollowup("received");
        }
      )
    );

    const [getResponse, handling] = await app.handleInteraction(JSON.stringify(modalSubmitInteraction), false);
    await handling;
    await getResponse;
  });

  it("parses Label-wrapped and legacy Action Row components", () => {
    expect(capturedContext).toBeDefined();
    const ctx = capturedContext as ModalSubmitContext;

    expect(ctx.components.size).toBe(7);

    expect(ctx.getTextInput("name")).toBe("Miles");
    expect(ctx.getTextInput("legacy")).toBe("legacy value");
    expect(ctx.getSelectValues("color")).toEqual(["blue", "green"]);
    expect(ctx.getRadioValue("size")).toBe("large");
    expect(ctx.getCheckbox("subscribe")).toBe(true);
    expect(ctx.getCheckboxGroupValues("toppings")).toEqual(["cheese"]);
  });

  it("resolves file uploads through resolved attachments", () => {
    const ctx = capturedContext as ModalSubmitContext;

    const attachments = ctx.getAttachments("files");
    expect(attachments).toHaveLength(1);
    expect(attachments?.[0].filename).toBe("photo.png");
  });

  it("returns undefined for absent components and throws on type mismatches", () => {
    const ctx = capturedContext as ModalSubmitContext;

    expect(ctx.getTextInput("missing")).toBeUndefined();
    expect(() => ctx.getCheckbox("name")).toThrow(TypeError);
  });
});

describe("Entry Point commands", () => {
  it("routes type 4 command interactions and responds with LaunchActivity", async () => {
    await app.commands.register(new EntryPointCommand(new EntryPointCommandBuilder("launch")));

    const entryPointInteraction = {
      ...baseInteraction,
      type: 2,
      data: { id: "10", name: "launch", type: 4 }
    };

    const [getResponse] = await app.handleInteraction(JSON.stringify(entryPointInteraction), false);

    expect(await getResponse).toEqual({
      type: InteractionResponseType.LaunchActivity
    });
  });

  it("rejects registering Entry Point commands on guild command managers", async () => {
    const guildManager = app.createGuildCommandManager("987654321", SyncMode.Disabled);

    await expect(
      guildManager.register(new EntryPointCommand(new EntryPointCommandBuilder("launch")))
    ).rejects.toThrow("Entry Point commands cannot be registered as guild commands.");
  });
});

describe("Webhook events", () => {
  it("acknowledges PING events", async () => {
    await expect(
      app.handleWebhookEvent(JSON.stringify({ version: 1, application_id: "123456789", type: 0 }), false)
    ).resolves.toBeUndefined();
  });

  it("dispatches ENTITLEMENT_CREATE to registered hooks", async () => {
    let received: unknown;

    app.addWebhookEventHook("entitlementCreate", async (data) => {
      received = data;
    });

    const event = {
      version: 1,
      application_id: "123456789",
      type: 1,
      event: {
        type: "ENTITLEMENT_CREATE",
        timestamp: "2026-01-01T00:00:00.000000+00:00",
        data: { id: "700", sku_id: "800", application_id: "123456789", user_id: "42", type: 8, deleted: false }
      }
    };

    await app.handleWebhookEvent(JSON.stringify(event), false);

    expect(received).toMatchObject({ id: "700", sku_id: "800" });
  });

  it("rejects invalid signatures", async () => {
    await expect(app.handleWebhookEvent(BODY_INVALID, SIGNATURE_INVALID, TIMESTAMP_INVALID)).rejects.toThrow();
  });
});
