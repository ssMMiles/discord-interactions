import { UserCommandBuilder } from "@discord-interactions/builders";
import type { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import { HandledInteraction } from "../handlers/HandledInteraction.js";
import { UserCommandContext } from "../index.js";

import { ICommandBase, RegisteredCommandBase } from "./Base.js";

export type IUserCommand = ICommandBase<UserCommandBuilder, UserCommandContext>;

export class UserCommand extends HandledInteraction<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User },
  UserCommandBuilder,
  UserCommandContext
> {
  public handler = async (ctx: UserCommandContext) => {
    ctx.reply("No command handler has been defined.");
  };
}

export class RegisteredUserCommand extends RegisteredCommandBase<UserCommandBuilder, UserCommandContext> {}
