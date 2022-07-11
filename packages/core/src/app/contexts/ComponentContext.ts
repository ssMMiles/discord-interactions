import { MessageBuilder, ModalBuilder } from "@discord-interactions/builders";
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
import { InteractionResponseAlreadySent, SimpleEmbed } from "../../index.js";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import { BaseStatefulInteractionContext } from "./Base.js";
import { MessageUpdateResponse } from "./response-types.js";

class BaseComponentContext<
  State,
  T extends APIMessageComponentInteraction = APIMessageComponentInteraction
> extends BaseStatefulInteractionContext<State, T, MessageUpdateResponse> {
  public message: APIMessage;

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<MessageUpdateResponse>) {
    super(manager, interaction, responseCallback);

    this.message = interaction.message;
  }

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent();

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
    if (this.replied) throw new InteractionResponseAlreadySent();

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

    this.values = interaction.data.values;
  }
}

export type ComponentContext = ButtonContext | SelectMenuContext;
