import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  MessageBuilder,
  SlashCommandBuilder,
  UserSelectMenuBuilder
} from "@discord-interactions/builders";
import {
  Button,
  ButtonContext,
  ISlashCommand,
  SlashCommandContext,
  UserSelectMenuContext
} from "@discord-interactions/core";
import { UserSelectMenu } from "@discord-interactions/core/dist/app/components/select_menus/UserSelectMenu.js";

type TestButtonState = {
  ping: boolean;
};

export class Ping implements ISlashCommand {
  public builder = new SlashCommandBuilder("ping", "Simple ping command.");

  public handler = async (ctx: SlashCommandContext): Promise<void> => {
    const button = await ctx.createComponent("pong", { ping: false });
    const menu = await ctx.createComponent("testSelect");

    return ctx.reply(
      new MessageBuilder(new EmbedBuilder().setTitle("Pong!")).addComponents(new ActionRowBuilder().addComponents(menu))
    );
  };

  public components = [
    new Button(
      "pong",
      new ButtonBuilder().setEmoji({ name: "🏓" }).setStyle(1),
      async (ctx: ButtonContext<TestButtonState>): Promise<void> => {
        if (!ctx.state) throw new Error("State missing.");

        ctx.reply(
          new MessageBuilder(new EmbedBuilder().setTitle(ctx.state.ping ? "Pong!" : "Ping!")).addComponents(
            new ActionRowBuilder([await ctx.createComponent("pong", { ping: !ctx.state.ping })])
          )
        );
      }
    ),
    new UserSelectMenu(
      "testSelect",
      new UserSelectMenuBuilder().setMaxValues(1).setPlaceholder("Select a user..."),
      async (ctx: UserSelectMenuContext): Promise<void> => {
        ctx.reply(new MessageBuilder(`You selected <@${ctx.target.user.id}>`));
      }
    )
  ];
}
