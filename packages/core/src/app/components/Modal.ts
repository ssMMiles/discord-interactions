import { ModalBuilder } from "@discord-interactions/builders";
import type { APIModalInteractionResponseCallbackData } from "discord-api-types/v10";
import type { ModalSubmitContext } from "../contexts/index.js";
import { ComponentBase } from "./Base.js";

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
