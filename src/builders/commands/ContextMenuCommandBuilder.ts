import { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import { CommandBuilder } from "./CommandBuilderBase";

export abstract class UserCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
> {
  public type: ApplicationCommandType.User = ApplicationCommandType.User;

  public toJSON() {
    return {
      name: this.name,
      type: this.type,

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }
}

export abstract class MessageCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }
> {
  public type: ApplicationCommandType.Message = ApplicationCommandType.Message;

  public toJSON() {
    return {
      name: this.name,
      type: this.type,

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }
}
