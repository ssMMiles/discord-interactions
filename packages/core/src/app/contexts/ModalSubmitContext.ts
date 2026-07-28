import { MessageBuilder } from "@discord-interactions/builders";
import type {
  APIAttachment,
  APIInteractionDataResolved,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseUpdateMessage,
  APIMessage,
  APIModalSubmitInteraction,
  ModalSubmitComponent
} from "discord-api-types/v10";
import { ComponentType, InteractionResponseType, MessageFlags } from "discord-api-types/v10";
import { FormData } from "formdata-node";
import { deprecationWarning, InteractionResponseAlreadySent, SimpleEmbed } from "../../index.js";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import { BaseStatefulInteractionContext } from "./Base.js";
import { ModalSubmitResponse } from "./response-types.js";

export class ModalSubmitContext<State = never> extends BaseStatefulInteractionContext<
  State,
  APIModalSubmitInteraction,
  ModalSubmitResponse
> {
  public components: Map<string, ModalSubmitComponent> = new Map();

  /** Resolved users, members, roles, channels and attachments referenced by this modal's components. */
  public resolved?: APIInteractionDataResolved;

  public parentCommand?: string;

  constructor(
    manager: DiscordApplication,
    interaction: APIModalSubmitInteraction,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<ModalSubmitResponse>
  ) {
    super(manager, interaction, timestamps, responseCallback);

    this.resolved = interaction.data.resolved;

    if (interaction.data.components) {
      for (const component of interaction.data.components) {
        switch (component.type) {
          // Modern modals wrap each input in a Label component
          case ComponentType.Label:
            this.registerComponent(component.component);
            break;
          // Legacy modals wrap Text Inputs in Action Rows
          case ComponentType.ActionRow:
            for (const child of component.components) {
              this.registerComponent(child);
            }
            break;
          // Text Displays and other non-interactive components carry no submitted value
          default:
            break;
        }
      }
    }
  }

  private registerComponent(component: ModalSubmitComponent): void {
    this.components.set(component.custom_id.split("|")[0], component);
  }

  private getComponent<T extends ModalSubmitComponent["type"]>(
    customId: string,
    ...types: T[]
  ): Extract<ModalSubmitComponent, { type: T }> | undefined {
    const component = this.components.get(customId);
    if (component === undefined) return undefined;

    if (!types.includes(component.type as T)) {
      throw new TypeError(
        `Component "${customId}" is of type ${component.type}, expected one of: ${types.join(", ")}`
      );
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return component as Extract<ModalSubmitComponent, { type: T }>;
  }

  /** Get the submitted value of a Text Input component. */
  getTextInput(customId: string): string | undefined {
    return this.getComponent(customId, ComponentType.TextInput)?.value;
  }

  /** Get the submitted values of any select menu component (string, user, role, mentionable or channel). */
  getSelectValues(customId: string): string[] | undefined {
    return this.getComponent(
      customId,
      ComponentType.StringSelect,
      ComponentType.UserSelect,
      ComponentType.RoleSelect,
      ComponentType.MentionableSelect,
      ComponentType.ChannelSelect
    )?.values;
  }

  /** Get the selected value of a Radio Group component. Null when nothing was selected. */
  getRadioValue(customId: string): string | null | undefined {
    return this.getComponent(customId, ComponentType.RadioGroup)?.value;
  }

  /** Get the checked state of a Checkbox component. */
  getCheckbox(customId: string): boolean | undefined {
    return this.getComponent(customId, ComponentType.Checkbox)?.value;
  }

  /** Get the checked values of a Checkbox Group component. Empty array when none are checked. */
  getCheckboxGroupValues(customId: string): string[] | undefined {
    return this.getComponent(customId, ComponentType.CheckboxGroup)?.values;
  }

  /** Get the uploaded attachments of a File Upload component, resolved via the interaction's resolved data. */
  getAttachments(customId: string): APIAttachment[] | undefined {
    const component = this.getComponent(customId, ComponentType.FileUpload);
    if (component === undefined) return undefined;

    return component.values
      .map((id) => this.resolved?.attachments?.[id])
      .filter((attachment): attachment is APIAttachment => attachment !== undefined);
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
