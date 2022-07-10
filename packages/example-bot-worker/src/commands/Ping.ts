import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageBuilder,
  SlashCommandBuilder,
  SlashCommandStringOption,
} from "@discord-interactions/builders";
import { Button, ButtonContext, ISlashCommand, SlashCommandContext } from "@discord-interactions/core";

type TestButtonState = {
  word: string;
};

export class Ping implements ISlashCommand {
  public builder = new SlashCommandBuilder("ping", "Simple ping command.").addStringOption(
    new SlashCommandStringOption("word", "Enter a word to store with the button.").setRequired(true)
  );

  public handler = async (ctx: SlashCommandContext): Promise<void> => {
    const word = ctx.getStringOption("word");
    const button = await ctx.createComponent("test", { word: word });

    return ctx.reply(
      new MessageBuilder()
        .addEmbeds(new EmbedBuilder().setTitle("Pong!"))
        .addComponents(new ActionRowBuilder().addComponents(button))
    );
  };

  public components = [
    new Button(
      "test",
      new ButtonBuilder().setEmoji({ name: "🔍" }).setStyle(ButtonStyle.Primary),
      async (ctx: ButtonContext<TestButtonState>): Promise<void> => {
        return ctx.reply(new MessageBuilder().addEmbeds(new EmbedBuilder().setTitle(ctx.state.word)));
      }
    ),
  ];
}
