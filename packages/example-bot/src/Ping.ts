import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  MessageBuilder,
  SlashCommandBuilder
} from "@discord-interactions/builders";
import { Button, ButtonContext, ISlashCommand, SlashCommandContext } from "@discord-interactions/core";

type TestButtonState = {
  ping: boolean;
};

export class Ping implements ISlashCommand {
  public builder = new SlashCommandBuilder("ping", "Simple ping command.");

  public handler = async (ctx: SlashCommandContext): Promise<void> => {
    const button = await ctx.createComponent("pong", { ping: false });

    return ctx.reply(
      new MessageBuilder(new EmbedBuilder().setTitle("Pong!")).addComponents(
        new ActionRowBuilder().addComponents(button)
      )
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
    )
  ];
}
