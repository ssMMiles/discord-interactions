import type {
  APIInteractionResponseChannelMessageWithSource,
  APIMessage,
  APIModalSubmitInteraction,
  ModalSubmitComponent
} from "discord-api-types/v10";
import { InteractionResponseType } from "discord-api-types/v10";
import type FormData from "form-data";
import type { ButtonBuilder, ModalBuilder, SelectMenuBuilder } from "../../builders";
import { MessageBuilder } from "../../builders";
import type { ModalSubmitResponse } from "../../util";
import { InteractionResponseAlreadySent, SimpleEmbed } from "../../util";
import type { DiscordApplication, ResponseCallback } from "../DiscordApplication";
import { BaseInteractionContext } from "./Base";

export class ModalSubmitContext<State = never> extends BaseInteractionContext<
  APIModalSubmitInteraction,
  ModalSubmitResponse
> {
  public allowExpired = false;

  public id: string;
  public state?: State;

  public components: Map<string, ModalSubmitComponent> = new Map();

  public parentCommand?: string;

  constructor(
    manager: DiscordApplication,
    interaction: APIModalSubmitInteraction,
    responseCallback: ResponseCallback<ModalSubmitResponse>
  ) {
    super(manager, interaction, responseCallback);

    if (this.interaction.data.components) {
      this.interaction.data.components?.map((actionRow) => {
        for (const component of actionRow.components) {
          this.components.set(component.custom_id.split("|")[0], component);
        }
      });
    }

    this.id = this.interaction.data.custom_id.split("|")[0];

    const builder = manager.components.get(this.id);
    if (builder) this.allowExpired = builder.allowExpired;

    if (builder && builder.parentCommand) this.parentCommand = builder.parentCommand;
  }

  async fetchState(): Promise<void> {
    this.state = undefined;
    let dataStr = this.interaction.data.custom_id.split("|")[1];

    if (!dataStr.startsWith("{") && this.manager.components.cache) {
      const result = await this.manager.components.cache.get(dataStr);
      if (!result) return;

      dataStr = result;
    }

    try {
      this.state = JSON.parse(dataStr);
    } catch (err) {
      throw err;
    }
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilder | ModalBuilder = ButtonBuilder | SelectMenuBuilder
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return this.manager.components.createInstance(
      this.parentCommand ? `${this.parentCommand}.${name}` : name,
      state,
      ttl
    );
  }

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply({
      type: InteractionResponseType.DeferredChannelMessageWithSource
    });
  }

  reply(message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource | FormData): Promise<void> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.ChannelMessageWithSource);

    return this._reply(message);
  }

  send(message: string | MessageBuilder): Promise<APIMessage> {
    return this.followup.send(message);
  }

  edit(message: string | MessageBuilder): Promise<APIMessage> {
    return this.followup.edit(message, "@original");
  }

  delete(): Promise<void> {
    return this.followup.delete("@original");
  }
}
