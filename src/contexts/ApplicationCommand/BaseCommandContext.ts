import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  APIMessage,
  APIModalInteractionResponse,
  InteractionResponseType
} from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../app";
import { ButtonBuilder, MessageBuilder, SelectMenuBuilder } from "../../builders";
import { ModalBuilder } from "../../builders/ModalBuilder";
import { ChannelMessageResponse, InteractionResponseAlreadySent, SimpleEmbed } from "../../util";
import { BaseInteractionContext } from "../BaseInteractionContext";

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
    return this.manager.components.createInstance(`${this.name}.name`, state, ttl);
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
  ): Promise<void> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.ChannelMessageWithSource,
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
