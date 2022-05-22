import { Modal } from "../app/Modal";
import { ModalSubmitContext } from "../contexts/ModalSubmitContext";
import { SimpleError } from "../util";

export async function handleModalSubmit(ctx: ModalSubmitContext): Promise<void> {
  await ctx._fetchState();

  if (!ctx.state && !ctx.allowExpired) return ctx.defer();

  if (ctx.manager.hooks.modal) {
    const result = await ctx.manager.hooks.modal(ctx);

    if (result === true) return;
  }

  const modal = ctx.manager.components.get(ctx.id);

  if (!modal || !(modal instanceof Modal)) return ctx.reply(SimpleError("Modal not found."));

  return modal.handler(ctx);
}
