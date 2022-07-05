import {
  APIApplicationCommand,
  ApplicationCommandType,
  RESTPostAPIContextMenuApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { CommandBuilder } from "./CommandBuilderBase";

export class UserCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
> {
  public type: ApplicationCommandType.User = ApplicationCommandType.User;

  public toJSON(): Omit<
    APIApplicationCommand & {
      type: ApplicationCommandType.User;
    },
    "id" | "application_id" | "guild_id" | "version" | "description"
  > {
    return {
      name: this.name,
      type: this.type,

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }

  public equals(
    other: APIApplicationCommand & {
      type: ApplicationCommandType.User;
    }
  ) {
    return super.equals(other);
  }
}

export class MessageCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }
> {
  public type: ApplicationCommandType.Message = ApplicationCommandType.Message;

  public toJSON(): Omit<
    APIApplicationCommand & {
      type: ApplicationCommandType.Message;
    },
    "id" | "application_id" | "guild_id" | "version" | "description"
  > {
    return {
      name: this.name,
      type: this.type,

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }

  public equals(
    other: APIApplicationCommand & {
      type: ApplicationCommandType.Message;
    }
  ) {
    return super.equals(other);
  }
}
