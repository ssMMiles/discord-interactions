import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  APIMessage,
  InteractionResponseType
} from "discord-api-types/v10";
import {
  ChannelMessageResponse,
  DiscordApplication,
  InteractionResponseAlreadySent,
  InteractionWebhook,
  MessageBuilder,
  ResponseCallback,
  SimpleEmbed
} from "../..";
import { BaseInteractionContext } from "../BaseInteractionContext";

export class BaseCommandContext<
  T extends APIApplicationCommandInteraction = APIApplicationCommandInteraction
> extends BaseInteractionContext<T, ChannelMessageResponse> {
  public name: string;
  private followup: InteractionWebhook;

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<ChannelMessageResponse>) {
    super(manager, interaction, responseCallback);

    this.name = this.interaction.data.name;

    this.followup = new InteractionWebhook(this.interaction.application_id, this.interaction.token);
  }

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply({
      type: InteractionResponseType.DeferredChannelMessageWithSource
    });
  }

  reply(message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource): Promise<void> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: message.toJSON()
      };

    return this._reply(message);
  }

  edit(message: string | MessageBuilder): Promise<APIMessage> {
    return this.followup.edit(message, "@original");
  }

  delete(): Promise<void> {
    return this.followup.delete("@original");
  }
}
