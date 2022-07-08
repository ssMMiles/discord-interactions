import { ButtonBuilder } from "@discord-interactions/builders";
import type { APIButtonComponentWithCustomId } from "discord-api-types/v10";
import { ButtonContext } from "../index.js";
import { ComponentBase } from "./Base.js";

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
