import { HandledSelectMenuBuilder } from "../../builders";
import { SelectMenuContext } from "../../contexts";
import { SimpleError } from "../../util";

export async function handleSelectMenu(ctx: SelectMenuContext): Promise<void> {
  if (ctx.manager.hooks.component?.selectMenu) {
    const result = await ctx.manager.hooks.component.selectMenu(ctx);

    if (result === true) return;
  }

  const selectMenu = ctx.manager.components.get(ctx.id);

  if (!selectMenu || !(selectMenu instanceof HandledSelectMenuBuilder))
    return ctx.reply(SimpleError("Select menu not found."));

  return selectMenu.handler(ctx);
}
