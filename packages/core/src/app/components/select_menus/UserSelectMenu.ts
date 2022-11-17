import { UserSelectMenuBuilder } from "@discord-interactions/builders";
import { APIUserSelectComponent } from "discord-api-types/v10";
import type { UserSelectMenuContext } from "../../contexts/index.js";
import { ComponentBase } from "../Base.js";

export class UserSelectMenu extends ComponentBase<
  APIUserSelectComponent,
  UserSelectMenuBuilder,
  UserSelectMenuContext
> {
  constructor(
    id: string,
    builder: UserSelectMenuBuilder,
    handler: (ctx: UserSelectMenuContext) => Promise<void> = async (ctx: UserSelectMenuContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new UserSelectMenuBuilder(this.getInstanceData(state));
  }
}
