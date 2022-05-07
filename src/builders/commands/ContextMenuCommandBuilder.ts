import { ApplicationCommandType, RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord-api-types/v10";
import { CommandBuilder } from "./CommandBuilderBase";

export abstract class UserCommandBuilder extends CommandBuilder<
  RESTPostAPIContextMenuApplicationCommandsJSONBody & { type: ApplicationCommandType.User }
> {
  public type: ApplicationCommandType.User = ApplicationCommandType.User;

  public toJSON() {
    return {
      name: this.name,
      type: this.type
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
      type: this.type
    };
  }
}
