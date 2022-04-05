import {
  APIInteractionResponseUpdateMessage,
  APIMessage,
  APIMessageComponentButtonInteraction,
  APIMessageComponentInteraction,
  APIMessageComponentSelectMenuInteraction,
  InteractionResponseType
} from "discord-api-types/v10";
import {
  DiscordApplication,
  InteractionContext,
  InteractionResponseAlreadySent,
  InteractionWebhook,
  MessageBuilder,
  MessageUpdateResponse,
  ResponseCallback,
  SimpleEmbed
} from "..";

class BaseComponentContext<
  T extends APIMessageComponentInteraction = APIMessageComponentInteraction
> extends InteractionContext<T, MessageUpdateResponse> {
  private followup: InteractionWebhook;

  public id: string;
  public args: string[];

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<MessageUpdateResponse>) {
    super(manager, interaction, responseCallback);

    this.followup = new InteractionWebhook(this.interaction.application_id, this.interaction.token);

    this.args = this.interaction.data.custom_id.split("|");

    if (this.args.length === 0) throw new Error("Component ID not found.");
    this.id = this.args.shift() as string;
  }

  defer(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    return this._reply({
      type: InteractionResponseType.DeferredMessageUpdate
    });
  }

  reply(message: string | MessageBuilder | APIInteractionResponseUpdateMessage): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = {
        type: InteractionResponseType.UpdateMessage,
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

export class ButtonContext extends BaseComponentContext<APIMessageComponentButtonInteraction> {}

export class SelectMenuContext extends BaseComponentContext<APIMessageComponentSelectMenuInteraction> {
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
