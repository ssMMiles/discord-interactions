import {
  CommandGroupBuilder,
  EmbedBuilder,
  MessageBuilder,
  PermissionBits,
  SubcommandOption,
} from "@discord-interactions/builders";
import { ICommandGroup, SlashCommandContext } from "@discord-interactions/core";

export class Config implements ICommandGroup {
  public builder = new CommandGroupBuilder("config", "Simple config command.")
    .addSubcommands(
      new SubcommandOption("set", "Set a config value."),
      new SubcommandOption("get", "Fetch a config value.")
    )
    .addRequiredPermissions(PermissionBits.ADMINISTRATOR);

  public handlers = {
    set: {
      handler: async (ctx: SlashCommandContext): Promise<void> => {
        return ctx.reply(new MessageBuilder().addEmbeds(new EmbedBuilder().setTitle("Set config value!")));
      },
    },
    get: {
      handler: async (ctx: SlashCommandContext): Promise<void> => {
        return ctx.reply(new MessageBuilder().addEmbeds(new EmbedBuilder().setTitle("Fetched config value.")));
      },
    },
    joe: {
      real: {
        handler: async (ctx: SlashCommandContext): Promise<void> => {
          return ctx.reply(new MessageBuilder().addEmbeds(new EmbedBuilder().setTitle("Real joe!")));
        },
      },
    },
  };

  public components = [];
}
