import type { APIModalInteractionResponseCallbackData } from "discord-api-types/v10";
import { ModalBuilder } from "../../builders";
import type { ModalSubmitContext } from "../contexts";
import { ComponentBase } from "./Base";

export class Modal extends ComponentBase<APIModalInteractionResponseCallbackData, ModalBuilder, ModalSubmitContext> {
  constructor(
    id: string,
    builder: ModalBuilder,
    handler: (ctx: ModalSubmitContext) => Promise<void> = async (ctx: ModalSubmitContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new ModalBuilder(this.getInstanceData(state));
  }
}
