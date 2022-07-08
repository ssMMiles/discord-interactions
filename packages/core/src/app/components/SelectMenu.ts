import { SelectMenuBuilder } from "@discord-interactions/builders";
import type { APISelectMenuComponent } from "discord-api-types/v10";
import type { SelectMenuContext } from "../contexts/index.js";
import { ComponentBase } from "./Base.js";

export class SelectMenu extends ComponentBase<APISelectMenuComponent, SelectMenuBuilder, SelectMenuContext> {
  constructor(
    id: string,
    builder: SelectMenuBuilder,
    handler: (ctx: SelectMenuContext) => Promise<void> = async (ctx: SelectMenuContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new SelectMenuBuilder(this.getInstanceData(state));
  }
}
