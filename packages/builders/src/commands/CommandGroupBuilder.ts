import {
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
  ApplicationCommandType
} from "discord-api-types/v10";
import { ChatInputCommandBuilderBase, CommandDataBase } from "./CommandBuilderBase.js";
import type { SubcommandGroupOption } from "./options/subcommand-group.js";
import type { SubcommandOption } from "./options/subcommand.js";

export type CommandGroupData = CommandDataBase & {
  type: ApplicationCommandType.ChatInput;
  options: (APIApplicationCommandSubcommandGroupOption | APIApplicationCommandSubcommandOption)[];
};

export class CommandGroupBuilder extends ChatInputCommandBuilderBase<
  APIApplicationCommandSubcommandGroupOption | APIApplicationCommandSubcommandOption
> {
  /**
   * Adds an integer option
   *
   * @param input A function that returns an option builder, or an already built builder
   */
  public addSubcommandGroups(...subcommandGroups: SubcommandGroupOption[]): this {
    for (const subcommandGroup of subcommandGroups) {
      this.options.push(subcommandGroup);
    }

    return this;
  }

  /**
   * Adds a subcommand
   */
  public addSubcommands(...subcommands: SubcommandOption[]): this {
    for (const subcommand of subcommands) {
      this.options.push(subcommand);
    }

    return this;
  }

  public toJSON(): CommandGroupData {
    return {
      type: this.type,

      name: this.name,
      name_localizations: this.name_localizations,

      description: this.description,
      description_localizations: this.description_localizations,

      options: this.options.map((option) => option.toJSON()),

      dm_permission: this.dm_permission,
      default_member_permissions: this.default_member_permissions.toJSON()
    };
  }
}
