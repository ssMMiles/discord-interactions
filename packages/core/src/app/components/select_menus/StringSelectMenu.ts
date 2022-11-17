import { StringSelectMenuBuilder } from "@discord-interactions/builders";
import { APIStringSelectComponent } from "discord-api-types/v10";
import type { SelectMenuContext, StringSelectMenuContext } from "../../contexts/index.js";
import { ComponentBase } from "../Base.js";

export class StringSelectMenu extends ComponentBase<
  APIStringSelectComponent,
  StringSelectMenuBuilder,
  StringSelectMenuContext
> {
  constructor(
    id: string,
    builder: StringSelectMenuBuilder,
    handler: (ctx: SelectMenuContext) => Promise<void> = async (ctx: SelectMenuContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new StringSelectMenuBuilder(this.getInstanceData(state));
  }
}
