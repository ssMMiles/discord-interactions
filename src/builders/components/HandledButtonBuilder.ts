import { UnsafeButtonBuilder } from "@discordjs/builders";
import { APIButtonComponent } from "discord-api-types/v10";
import { ButtonContext, SimpleError } from "../..";
import { createHandledComponent } from "./HandledComponentBuilder";

const HandledButton = createHandledComponent(UnsafeButtonBuilder);

export class HandledButtonBuilder extends HandledButton {
  constructor(id: string, opts?: Partial<APIButtonComponent>) {
    super(opts);

    this.id = id;
  }

  createInstance(data: string): UnsafeButtonBuilder {
    return new UnsafeButtonBuilder({
      ...this.data,
      ...{
        custom_id: this._buildCustomId(data)
      }
    });
  }

  handler: (ctx: ButtonContext) => Promise<void> = async (ctx: ButtonContext) => {
    ctx.reply(SimpleError("No handler defined."));
  };

  setHandler(handler: (ctx: ButtonContext) => Promise<void>): this {
    this.handler = handler;
    return this;
  }
}
