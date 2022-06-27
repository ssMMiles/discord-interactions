import { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import { APIApplicationMessageCommand, APIApplicationUserCommand } from "../../app";
import { CommandBuilder } from "./CommandBuilderBase";

export class UserCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
> {
  public type: ApplicationCommandType.User = ApplicationCommandType.User;

  public toJSON(): Omit<APIApplicationUserCommand, "id" | "application_id" | "guild_id" | "version" | "description"> {
    return {
      name: this.name,
      type: this.type,

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }
}

export class MessageCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }
> {
  public type: ApplicationCommandType.Message = ApplicationCommandType.Message;

  public toJSON(): Omit<
    APIApplicationMessageCommand,
    "id" | "application_id" | "guild_id" | "version" | "description"
  > {
    return {
      name: this.name,
      type: this.type,

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }
}
