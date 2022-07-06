import type { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import type { UserCommandBuilder } from "../../builders";
import type { UserCommandContext } from "../contexts";
import { HandledInteraction } from "../handlers";
import type { ICommandBase } from "./Base";
import { RegisteredCommandBase } from "./Base";

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
