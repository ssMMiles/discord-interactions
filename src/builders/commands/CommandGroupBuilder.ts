import {
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
  ApplicationCommandType,
  LocalizationMap,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { CommandBuilder } from "./CommandBuilderBase";
import { SubcommandOption } from "./options/subcommand";
import { SubcommandGroupOption } from "./options/subcommand-group";

export interface ToAPIApplicationCommandGroupOptions {
  toJSON: () => APIApplicationCommandSubcommandGroupOption | APIApplicationCommandSubcommandOption;
}

export class CommandGroupBuilder extends CommandBuilder<RESTPostAPIChatInputApplicationCommandsJSONBody> {
  public type: ApplicationCommandType.ChatInput = ApplicationCommandType.ChatInput;

  public description: string;
  public description_localizations: LocalizationMap = {};

  public options: ToAPIApplicationCommandGroupOptions[] = [];

  constructor(name: string, description: string) {
    super(name);

    this.description = description;
  }

  /**
   * Set the description
   *
   * @param description The description
   */
  public setDescription(description: string): this {
    this.description = description;

    return this;
  }

  /**
   * Set a dictionary of localized descriptions
   */
  public setDescriptionLocalizations(localizations: LocalizationMap): this {
    this.description_localizations = localizations;

    return this;
  }

  /**
   * Set a single locale's description
   */
  public setLocalizedDescription(locale: keyof LocalizationMap, description: string): this {
    this.description_localizations[locale] = description;
    return this;
  }

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

  public toJSON() {
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
