import { DiscordApiClient } from "@discord-interactions/api";
import { MessageBuilder } from "@discord-interactions/builders";
import type { APIMessage, Snowflake } from "discord-api-types/v10";
import { Routes } from "discord-api-types/v10";
import { FormData } from "formdata-node";
import { SimpleEmbed } from "../index.js";

export class WebhookClient {
  private id: Snowflake;
  private token: string;

  private rest: DiscordApiClient;

  constructor(id: Snowflake, token: string, rest?: DiscordApiClient) {
    this.id = id;
    this.token = token;

    this.rest = rest ?? new DiscordApiClient();
  }

  send(message: string | MessageBuilder, wait = true): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);

    const query = new URLSearchParams(`wait=${wait ? "true" : "false"}`);
    // Non-app-owned webhooks require with_components to send components; app-owned webhooks ignore it
    if (message.isComponentsV2) query.set("with_components", "true");

    const data = message.toWebhook();

    return this.rest.post(Routes.webhook(this.id, this.token), {
      query,
      body: data,
      rawBody: data instanceof FormData,
      auth: false
    }) as Promise<APIMessage>;
  }

  edit(message: string | MessageBuilder, id: Snowflake): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);

    const query = message.isComponentsV2 ? new URLSearchParams({ with_components: "true" }) : undefined;

    const data = message.toWebhook();

    return this.rest.patch(Routes.webhookMessage(this.id, this.token, id), {
      query,
      body: data,
      rawBody: data instanceof FormData,
      auth: false
    }) as Promise<APIMessage>;
  }

  async delete(id: Snowflake): Promise<void> {
    await this.rest.delete(Routes.webhookMessage(this.id, this.token, id), {
      auth: false
    });
    return;
  }
}
