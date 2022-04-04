import { UnsafeButtonBuilder } from "@discordjs/builders";
import { APIButtonComponent } from "discord-api-types/v10";
import { ButtonContext, SimpleError } from "../..";
import { createHandledComponent } from "./ComponentBuilder";

const HandledButton = createHandledComponent(UnsafeButtonBuilder);

export class ButtonBuilder extends HandledButton {
  constructor(id: string) {
    super();

    this.id = id;
  }

  createInstance(args: string[]): APIButtonComponent {
    return {
      ...this.data,
      ...{
        custom_id: this.buildCustomId(args)
      }
    } as APIButtonComponent;
  }

  handler: (ctx: ButtonContext) => Promise<void> = async (ctx: ButtonContext) => {
    ctx.reply(SimpleError("No handler defined."));
  };

  setHandler(handler: (ctx: ButtonContext) => Promise<void>): this {
    this.handler = handler;
    return this;
  }
}
