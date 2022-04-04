import { UnsafeSelectMenuBuilder } from "@discordjs/builders";
import { APISelectMenuComponent } from "discord-api-types/v10";
import { SelectMenuContext, SimpleError } from "../..";
import { createHandledComponent } from "./ComponentBuilder";

const HandledSelectMenu = createHandledComponent(UnsafeSelectMenuBuilder);

export class SelectMenuBuilder extends HandledSelectMenu {
  constructor(id: string) {
    super();

    this.id = id;
  }

  createInstance(args: string[]): APISelectMenuComponent {
    return {
      ...this.data,
      ...{
        custom_id: this.buildCustomId(args)
      }
    } as APISelectMenuComponent;
  }

  handler: (ctx: SelectMenuContext) => Promise<void> = async (ctx: SelectMenuContext) => {
    ctx.reply(SimpleError("No handler defined."));
  };

  setHandler(handler: (ctx: SelectMenuContext) => Promise<void>): this {
    this.handler = handler;
    return this;
  }
}
