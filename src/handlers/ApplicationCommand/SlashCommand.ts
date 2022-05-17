import { SimpleError, SlashCommandContext } from "../..";
import { ISubcommandGroup, ISubcommandHandler } from "../../app";

export async function handleSlashCommand(ctx: SlashCommandContext): Promise<void> {
  if (ctx.manager.hooks.command?.slash) {
    const result = await ctx.manager.hooks.command.slash(ctx);

    if (result === true) return;
  }

  const parentName = ctx.parentCommand ?? ctx.name;

  const command = ctx.interaction.guild_id
    ? ctx.manager.guildCommands?.get(ctx.interaction.guild_id)?.slash?.get(parentName) ??
      ctx.manager.commands.slash.get(parentName)
    : ctx.manager.commands.slash.get(parentName);

  if (!command) return ctx.reply(SimpleError("Command not found."));

  if ("handlers" in command) {
    let handlers: ISubcommandHandler | undefined;

    if (ctx.group) {
      const group = command.handlers[ctx.group] as ISubcommandGroup | undefined;

      handlers = group?.[ctx.name];
    } else {
      handlers = command.handlers[ctx.name] as ISubcommandHandler | undefined;
    }

    if (handlers === undefined || handlers.handler === undefined)
      return ctx.reply(SimpleError("Subcommand handler not found."));

    return handlers.handler(ctx);
  }

  return command.handler(ctx);
}
