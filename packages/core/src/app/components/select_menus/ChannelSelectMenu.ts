import { ChannelSelectMenuBuilder } from "@discord-interactions/builders";
import { APIChannelSelectComponent } from "discord-api-types/v10";
import type { ChannelSelectMenuContext } from "../../contexts/index.js";
import { ComponentBase } from "../Base.js";

export class ChannelSelectMenu extends ComponentBase<
  APIChannelSelectComponent,
  ChannelSelectMenuBuilder,
  ChannelSelectMenuContext
> {
  constructor(
    id: string,
    builder: ChannelSelectMenuBuilder,
    handler: (ctx: ChannelSelectMenuContext) => Promise<void> = async (ctx: ChannelSelectMenuContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new ChannelSelectMenuBuilder(this.getInstanceData(state));
  }
}
