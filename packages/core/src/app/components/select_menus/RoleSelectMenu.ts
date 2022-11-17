import { RoleSelectMenuBuilder } from "@discord-interactions/builders";
import { APIRoleSelectComponent } from "discord-api-types/v10";
import type { RoleSelectMenuContext } from "../../contexts/index.js";
import { ComponentBase } from "../Base.js";

export class RoleSelectMenu extends ComponentBase<
  APIRoleSelectComponent,
  RoleSelectMenuBuilder,
  RoleSelectMenuContext
> {
  constructor(
    id: string,
    builder: RoleSelectMenuBuilder,
    handler: (ctx: RoleSelectMenuContext) => Promise<void> = async (ctx: RoleSelectMenuContext) => {
      ctx.reply("No command handler has been defined.");
    }
  ) {
    super(id, builder, handler);
  }

  public createInstance(state: string) {
    return new RoleSelectMenuBuilder(this.getInstanceData(state));
  }
}
