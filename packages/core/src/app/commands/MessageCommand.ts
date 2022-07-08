import { MessageCommandBuilder } from "@discord-interactions/builders";
import { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import { HandledInteraction } from "../handlers/HandledInteraction.js";
import { MessageCommandContext } from "../index.js";
import { ICommandBase, RegisteredCommandBase } from "./Base.js";

export type IMessageCommand = ICommandBase<MessageCommandBuilder, MessageCommandContext>;

export class MessageCommand extends HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message },
  MessageCommandBuilder,
  MessageCommandContext
> {
  public handler = async (ctx: MessageCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };
}

export class RegisteredMessageCommand extends RegisteredCommandBase<MessageCommandBuilder, MessageCommandContext> {}
