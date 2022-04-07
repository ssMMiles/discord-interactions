import { REST } from "@discordjs/rest";
import { APIMessage, Routes } from "discord-api-types/v10";
import { MessageBuilder, SimpleEmbed } from "..";

export class InteractionWebhook {
  private id: string;
  private token: string;

  private rest: REST;

  constructor(id: string, token: string) {
    this.id = id;
    this.token = token;

    this.rest = new REST();
  }

  send(message: string | MessageBuilder): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);

    return this.rest.post(Routes.webhook(this.id, this.token), {
      body: message.toJSON(),
      auth: false
    }) as Promise<APIMessage>;
  }

  edit(message: string | MessageBuilder, id: string): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);

    return this.rest.patch(Routes.webhookMessage(this.id, this.token, id), {
      body: message.toJSON(),
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
