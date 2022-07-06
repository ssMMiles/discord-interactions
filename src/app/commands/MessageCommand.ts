import type { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import type { MessageCommandBuilder } from "../../builders";
import type { MessageCommandContext } from "../contexts";
import { HandledInteraction } from "../handlers";
import type { ICommandBase } from "./Base";
import { RegisteredCommandBase } from "./Base";

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
