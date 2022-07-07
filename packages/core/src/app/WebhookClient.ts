import { REST } from "@discordjs/rest";
import type { APIMessage } from "discord-api-types/v10";
import { Routes } from "discord-api-types/v10";
import FormData from "form-data";
import type { MessageBuilder } from "..";
import { SimpleEmbed } from "..";

export class WebhookClient {
  private id: string;
  private token: string;

  private rest: REST;

  constructor(id: string, token: string, rest?: REST) {
    this.id = id;
    this.token = token;

    this.rest = rest ?? new REST();
  }

  send(message: string | MessageBuilder, wait = true): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);
    const data = message.toWebhook();

    return this.rest.post(Routes.webhook(this.id, this.token), {
      query: new URLSearchParams(`wait=${wait ? "true" : "false"}`),
      body: data,
      passThroughBody: data instanceof FormData,
      auth: false
    }) as Promise<APIMessage>;
  }

  edit(message: string | MessageBuilder, id: string): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);
    const data = message.toWebhook();

    return this.rest.patch(Routes.webhookMessage(this.id, this.token, id), {
      body: data,
      passThroughBody: data instanceof FormData,
      auth: false
    }) as Promise<APIMessage>;
  }

  async delete(id: string): Promise<void> {
    await this.rest.delete(Routes.webhookMessage(this.id, this.token, id), {
      auth: false
    });
    return;
  }
}
