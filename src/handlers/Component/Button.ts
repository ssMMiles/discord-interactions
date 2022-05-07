import { Button } from "../../app";
import { ButtonContext } from "../../contexts";
import { SimpleError } from "../../util";

export async function handleButton(ctx: ButtonContext): Promise<void> {
  await ctx._fetchState();

  if (!ctx.state && !ctx.allowExpired) return ctx.defer();

  if (ctx.manager.hooks.component?.button) {
    const result = await ctx.manager.hooks.component.button(ctx);

    if (result === true) return;
  }

  const button = ctx.manager.components.get(ctx.id);

  if (!button || !(button instanceof Button)) return ctx.reply(SimpleError("Button not found."));

  return button.handler(ctx);
}
