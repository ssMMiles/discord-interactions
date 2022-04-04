import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseDeferredChannelMessageWithSource,
  APIMessage,
  InteractionResponseType
} from "discord-api-types/v10";
import { WebhookClient, WebhookEditMessageOptions, WebhookMessageOptions } from "discord.js";
import {
  ChannelMessageResponse,
  DiscordApplication,
  InteractionResponseAlreadySent,
  InteractionTokenExpired,
  MessageBuilder,
  SimpleEmbed
} from "../..";
import { InteractionContext } from "../InteractionContext";

export class BaseCommandContext<
  T extends APIApplicationCommandInteraction = APIApplicationCommandInteraction
> extends InteractionContext<T, ChannelMessageResponse> {
  public name: string;
  private webhook: WebhookClient;

  constructor(manager: DiscordApplication, interaction: T) {
    super(manager, interaction);

    this.name = this.interaction.data.name;

    this.webhook = new WebhookClient({
      id: this.interaction.application_id,
      token: this.interaction.token
    });
  }

  async defer(): Promise<APIInteractionResponseDeferredChannelMessageWithSource> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply<APIInteractionResponseDeferredChannelMessageWithSource>({
      type: InteractionResponseType.DeferredChannelMessageWithSource
    });
  }

  reply(
    message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource
  ): Promise<APIInteractionResponseChannelMessageWithSource> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: message.toJSON()
      };

    return this._reply<APIInteractionResponseChannelMessageWithSource>(message);
  }

  async editMessage(
    message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource,
    id = "@original"
  ): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: message.toJSON()
      };

    if (this.expired) {
      throw new InteractionTokenExpired(this.interaction);
    }

    // TODO: fix this it's messy
    return this.webhook.editMessage(id, message.data as WebhookEditMessageOptions) as unknown as Promise<APIMessage>;
  }

  async sendMessage(
    message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource
  ): Promise<APIMessage> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: message.toJSON()
      };

    if (this.expired) {
      throw new InteractionTokenExpired(this.interaction);
    }

    // TODO: fix this it's messy
    return this.webhook.send(message.data as WebhookMessageOptions) as unknown as Promise<APIMessage>;
  }
}
