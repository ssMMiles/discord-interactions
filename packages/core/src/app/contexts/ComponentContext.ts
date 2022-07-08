import { ButtonBuilder, MessageBuilder, ModalBuilder, SelectMenuBuilder } from "@discord-interactions/builders";
import type {
  APIInteractionResponseUpdateMessage,
  APIMessage,
  APIMessageComponentButtonInteraction,
  APIMessageComponentInteraction,
  APIMessageComponentSelectMenuInteraction,
  APIModalInteractionResponse
} from "discord-api-types/v10";
import { InteractionResponseType } from "discord-api-types/v10";
import type { FormData } from "formdata-node";
import { InteractionResponseAlreadySent, InteractionStateExpired, SimpleEmbed } from "../../index.js";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import { BaseInteractionContext } from "./Base.js";
import { MessageUpdateResponse } from "./response-types.js";

class BaseComponentContext<
  S,
  T extends APIMessageComponentInteraction = APIMessageComponentInteraction
> extends BaseInteractionContext<T, MessageUpdateResponse> {
  public allowExpired: boolean;
  public state: S = {} as S;

  public id: string;

  public parentCommand?: string;

  public message: APIMessage;

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<MessageUpdateResponse>) {
    super(manager, interaction, responseCallback);

    this.id = this.interaction.data.custom_id.split("|")[0];

    this.message = this.interaction.message;

    const component = manager.components.get(this.id);
    this.allowExpired = component?.allowExpired ?? false;

    if (component && component.parentCommand) this.parentCommand = component.parentCommand;
  }

  async fetchState(): Promise<void> {
    let dataStr = this.interaction.data.custom_id.split("|")[1];

    if (!dataStr.startsWith("{") && this.manager.components.cache) {
      const result = await this.manager.components.cache.get(dataStr);
      if (!result) throw new InteractionStateExpired(this.interaction);

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
      `${this.parentCommand ? `${this.parentCommand}.` : ""}${name}`,
      state,
      ttl
    );
  }

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply({
      type: InteractionResponseType.DeferredMessageUpdate
    });
  }

  reply(
    message:
      | string
      | MessageBuilder
      | APIInteractionResponseUpdateMessage
      | ModalBuilder
      | APIModalInteractionResponse
      | FormData
  ): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.UpdateMessage);

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
