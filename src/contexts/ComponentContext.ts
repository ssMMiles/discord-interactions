import {
  APIInteractionResponseUpdateMessage,
  APIMessage,
  APIMessageComponentButtonInteraction,
  APIMessageComponentInteraction,
  APIMessageComponentSelectMenuInteraction,
  APIModalInteractionResponse,
  InteractionResponseType
} from "discord-api-types/v10";
import {
  DiscordApplication,
  InteractionResponseAlreadySent,
  MessageBuilder,
  MessageUpdateResponse,
  ResponseCallback,
  SimpleEmbed
} from "..";
import { ModalBuilder } from "../builders/ModalBuilder";
import { BaseInteractionContext } from "./BaseInteractionContext";

class BaseComponentContext<
  S,
  T extends APIMessageComponentInteraction = APIMessageComponentInteraction
> extends BaseInteractionContext<T, MessageUpdateResponse> {
  public allowExpired = false;

  public id: string;
  public state?: S;

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<MessageUpdateResponse>) {
    super(manager, interaction, responseCallback);

    this.id = this.interaction.data.custom_id.split("|")[0];

    const builder = manager.components.get(this.id);
    if (builder) this.allowExpired = builder.allowExpired;
  }

  async _fetchState(): Promise<void> {
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

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply({
      type: InteractionResponseType.DeferredMessageUpdate
    });
  }

  reply(
    message: string | MessageBuilder | APIInteractionResponseUpdateMessage | ModalBuilder | APIModalInteractionResponse
  ): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.UpdateMessage,
        data: message.toJSON()
      };

    if (message instanceof ModalBuilder) {
      message = {
        type: InteractionResponseType.Modal,
        data: message.toJSON()
      };
    }

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

export class ButtonContext<S = never> extends BaseComponentContext<S, APIMessageComponentButtonInteraction> {}

export class SelectMenuContext<S = never> extends BaseComponentContext<S, APIMessageComponentSelectMenuInteraction> {
  public values: string[];

  constructor(
    manager: DiscordApplication,
    interaction: APIMessageComponentSelectMenuInteraction,
    responseCallback: ResponseCallback<MessageUpdateResponse>
  ) {
    super(manager, interaction, responseCallback);

    this.values = this.interaction.data.values;
  }
}

export type ComponentContext = ButtonContext | SelectMenuContext;
