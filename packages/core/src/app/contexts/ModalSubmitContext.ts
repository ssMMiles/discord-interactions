import type {
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseUpdateMessage,
  APIMessage,
  APIModalSubmitInteraction,
  ModalSubmitComponent
} from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import { InteractionResponseAlreadySent, SimpleEmbed, deprecationWarning } from "../../index.js";
import { InteractionResponseType, MessageFlags } from "discord-api-types/v10";

import { BaseStatefulInteractionContext } from "./Base.js";
import { FormData } from "formdata-node";
import { MessageBuilder } from "@discord-interactions/builders";
import { ModalSubmitResponse } from "./response-types.js";

export class ModalSubmitContext<State = never> extends BaseStatefulInteractionContext<
  State,
  APIModalSubmitInteraction,
  ModalSubmitResponse
> {
  public components: Map<string, ModalSubmitComponent> = new Map();

  constructor(
    manager: DiscordApplication,
    interaction: APIModalSubmitInteraction,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<ModalSubmitResponse>
  ) {
    super(manager, interaction, timestamps, responseCallback);

    if (interaction.data.components) {
      interaction.data.components?.map((actionRow) => {
        for (const component of actionRow.components) {
          this.components.set(component.custom_id.split("|")[0], component);
        }
      });
    }
  }

  defer(flags?: MessageFlags): Promise<void> {
    deprecationWarning("ModalSubmitContext#defer", "ModalSubmitContext#deferFollowup/deferUpdate");
    if (this.replied) throw new InteractionResponseAlreadySent();

    return this._reply({
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data: flags && {
        flags
      }
    });
  }

  deferFollowup(flags?: MessageFlags): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent();

    return this._reply({
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data: flags && {
        flags
      }
    });
  }

  /**
   * Note: This is only supported when replying to a component interaction.
   */
  deferUpdate(): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent();

    return this._reply({
      type: InteractionResponseType.DeferredMessageUpdate
    });
  }

  reply(message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource | FormData): Promise<void> {
    deprecationWarning("ModalSubmitContext#reply", "ModalSubmitContext#replyFollowup/replyUpdate");
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.ChannelMessageWithSource);

    return this._reply(message);
  }

  replyFollowup(
    message: string | MessageBuilder | APIInteractionResponseChannelMessageWithSource | FormData
  ): Promise<void> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.ChannelMessageWithSource);

    return this._reply(message);
  }

  /**
   * Note: This is only supported when replying to a component interaction.
   */
  replyUpdate(message: string | MessageBuilder | APIInteractionResponseUpdateMessage | FormData): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent();

    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.UpdateMessage);

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
