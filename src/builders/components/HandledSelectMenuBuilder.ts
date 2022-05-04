import { UnsafeSelectMenuBuilder } from "@discordjs/builders";
import { APISelectMenuComponent } from "discord-api-types/v10";
import { SelectMenuContext, SimpleError } from "../..";
import { createHandledComponent } from "./HandledComponentBuilder";

const HandledSelectMenu = createHandledComponent(UnsafeSelectMenuBuilder);

export class HandledSelectMenuBuilder extends HandledSelectMenu {
  constructor(id: string, opts?: Partial<APISelectMenuComponent>) {
    super(opts);

    this.id = id;
  }

  createInstance(data: string): UnsafeSelectMenuBuilder {
    return new UnsafeSelectMenuBuilder({
      ...this.data,
      ...{
        custom_id: this._buildCustomId(data)
      }
    });
  }

  handler: (ctx: SelectMenuContext) => Promise<void> = async (ctx: SelectMenuContext) => {
    ctx.reply(SimpleError("No handler defined."));
  };

  setHandler(handler: (ctx: SelectMenuContext) => Promise<void>): this {
    this.handler = handler;
    return this;
  }
}
