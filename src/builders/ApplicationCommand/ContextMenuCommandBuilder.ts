import { ContextMenuCommandBuilder as ContextMenuCommandBuilderBase } from "@discordjs/builders";
import { ApplicationCommandType } from "discord-api-types/v10";
import { HandledComponentBuilder, MessageCommandContext, UserCommandContext } from "../..";

class ContextMenuCommandBuilder<
  T extends UserCommandContext | MessageCommandContext
> extends ContextMenuCommandBuilderBase {
  public components: HandledComponentBuilder[] = [];

  public guildOnly = true;

  constructor(name?: string) {
    super();

    if (name) this.setName(name);
  }

  handler: (ctx: T) => Promise<void> = async (ctx: T) => {
    ctx.reply("No command handler has been defined.");
  };

  setHandler(handler: (ctx: T) => Promise<void>) {
    this.handler = handler;

    return this;
  }
}

export class UserCommandBuilder extends ContextMenuCommandBuilder<UserCommandContext> {
  constructor(name?: string) {
    super(name);
    this.setType(ApplicationCommandType.User);
  }
}

export class MessageCommandBuilder extends ContextMenuCommandBuilder<MessageCommandContext> {
  constructor(name?: string) {
    super(name);
    this.setType(ApplicationCommandType.Message);
  }
}

export type ContextMenuCommand = UserCommandBuilder | MessageCommandBuilder;
