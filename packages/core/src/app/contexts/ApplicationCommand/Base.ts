import { ButtonBuilder, MessageBuilder, ModalBuilder, SelectMenuBuilder } from "@discord-interactions/builders";
import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  APIMessage,
  APIModalInteractionResponse,
  InteractionResponseType
} from "discord-api-types/v10";
import { FormData } from "formdata-node";
import { InteractionResponseAlreadySent } from "../../../util/errors.js";
import { SimpleEmbed } from "../../../util/simple-responses.js";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { BaseInteractionContext } from "../Base.js";
import { ChannelMessageResponse } from "../response-types.js";

export class BaseCommandContext<
  T extends APIApplicationCommandInteraction = APIApplicationCommandInteraction
> extends BaseInteractionContext<T, ChannelMessageResponse> {
  public name: string;

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<ChannelMessageResponse>) {
    super(manager, interaction, responseCallback);

    this.name = this.interaction.data.name;
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilder | ModalBuilder = ButtonBuilder | SelectMenuBuilder
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return super.createGlobalComponent(`${this.name}.${name}`, state, ttl);
  }

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply({
      type: InteractionResponseType.DeferredChannelMessageWithSource
    });
  }

  reply(
    message:
      | string
      | MessageBuilder
      | APIInteractionResponseChannelMessageWithSource
      | ModalBuilder
      | APIModalInteractionResponse
      | FormData
  ): Promise<void> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.ChannelMessageWithSource);

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
