import { APIButtonComponentWithCustomId } from "discord-api-types/v10";
import { ButtonBuilder } from "../../builders";
import { ButtonContext } from "../contexts";
import { ComponentBase } from "./Base";

export class Button extends ComponentBase<APIButtonComponentWithCustomId, ButtonBuilder, ButtonContext> {
  constructor(
    id: string,
    builder: ButtonBuilder,
    handler: (ctx: ButtonContext) => Promise<void> = async (ctx: ButtonContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new ButtonBuilder(this.getInstanceData(state));
  }
}
