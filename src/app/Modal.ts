import { APIModalInteractionResponseCallbackData } from "discord-api-types/v10";
import { ModalBuilder } from "../builders/ModalBuilder";
import { ModalSubmitContext } from "../contexts/ModalSubmitContext";
import { ComponentBase } from "./components/ComponentBase";

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
