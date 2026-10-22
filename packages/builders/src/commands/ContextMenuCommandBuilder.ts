import type { APIApplicationCommand, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import { ApplicationCommandType } from "discord-api-types/v10";
import { CommandBuilderBase, CommandDataBase } from "./CommandBuilderBase.js";

export type ContextCommandData = Omit<CommandDataBase, "description">;

export type UserCommandData = ContextCommandData & {
  type: ApplicationCommandType.User;
};

export type MessageCommandData = ContextCommandData & {
  type: ApplicationCommandType.Message;
};

export class UserCommandBuilder extends CommandBuilderBase<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
> {
  public type: ApplicationCommandType.User = ApplicationCommandType.User;

  public toJSON(): UserCommandData {
    return {
      ...this.baseToJSON(),

      type: this.type
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

export class MessageCommandBuilder extends CommandBuilderBase<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.Message }
> {
  public type: ApplicationCommandType.Message = ApplicationCommandType.Message;

  public toJSON(): MessageCommandData {
    return {
      ...this.baseToJSON(),

      type: this.type
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
