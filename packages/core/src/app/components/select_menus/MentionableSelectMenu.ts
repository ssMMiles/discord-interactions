import { MentionableSelectMenuBuilder } from "@discord-interactions/builders";
import { APIMentionableSelectComponent } from "discord-api-types/v10";
import type { MentionableSelectMenuContext } from "../../contexts/index.js";
import { ComponentBase } from "../Base.js";

export class MentionableSelectMenu extends ComponentBase<
  APIMentionableSelectComponent,
  MentionableSelectMenuBuilder,
  MentionableSelectMenuContext
> {
  constructor(
    id: string,
    builder: MentionableSelectMenuBuilder,
    handler: (ctx: MentionableSelectMenuContext) => Promise<void> = async (ctx: MentionableSelectMenuContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new MentionableSelectMenuBuilder(this.getInstanceData(state));
  }
}
