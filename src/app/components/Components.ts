import { APIButtonComponentWithCustomId, APISelectMenuComponent } from "discord-api-types/v10";
import { ButtonBuilder, ButtonContext, SelectMenuBuilder, SelectMenuContext } from "../..";
import { ComponentBase } from "./ComponentBase";

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

export type Component = Button | SelectMenu;
