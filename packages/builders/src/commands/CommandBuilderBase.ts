import {
  APIApplicationCommand,
  APIApplicationCommandBasicOption,
  APIApplicationCommandOption,
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  LocalizationMap,
  RESTPostAPIApplicationCommandsJSONBody,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { shallowEquals } from "../util/shallow-equals.js";
import { Bitfield } from "./permissions/Bitfield.js";

/**
 * @hidden
 */
export type CommandDataBase = Omit<APIApplicationCommand, "id" | "application_id" | "guild_id" | "version">;

/**
 * @hidden
 */
export abstract class CommandBuilderBase<Data extends RESTPostAPIApplicationCommandsJSONBody> {
  /**
   * The name of this context menu command
   */
  public name: string;

  /**
   * The localized names for this command
   */
  public name_localizations: LocalizationMap = {};

  /**
   * The type of this context menu command
   */
  public abstract type: ApplicationCommandType;

  /**
   * Whether the command is visible in DMs - Only available for global commands and defaults to true.
   */
  public dm_permission?: boolean;

  /**
   * Default member permissions required to use the command
   */
  public default_member_permissions: Bitfield = new Bitfield();

  constructor(data: Data | string) {
    if (typeof data === "string") {
      this.name = data;
      return;
    }

    this.name = data.name;

    for (const key in data) {
      Object.assign(this, { [key]: data[key] });
    }
  }

  /**
   * Set the name
   */
  public setName(name: string): this {
    this.name = name;

    return this;
  }

  /**
   * Set a dictionary of localized names
   */
  public setNameLocalizations(localizations: LocalizationMap): this {
    this.name_localizations = localizations;

    return this;
  }

  /**
   * Set a single locale's name
   */
  public setLocalizedName(locale: keyof LocalizationMap, name: string): this {
    this.name_localizations[locale] = name;

    return this;
  }

  /**
   * Set whether this command will be visible in DMs - Only applicable to Global commands.
   */
  setDMEnabled(value: boolean): this {
    this.dm_permission = value;

    return this;
  }

  setRequiredPermissions(permissions: Bitfield): this {
    this.default_member_permissions = permissions;

    return this;
  }

  addRequiredPermissions(...permissions: bigint[]): this {
    this.default_member_permissions.add(...permissions);

    return this;
  }

  removeRequiredPermissions(...permissions: bigint[]): this {
    this.default_member_permissions.remove(...permissions);

    return this;
  }

  clearRequiredPermissions(): this {
    this.default_member_permissions.allowAll();

    return this;
  }

  disallowAllPermissions(): this {
    this.default_member_permissions.disallowAll();

    return this;
  }

  equals(remote: APIApplicationCommand): boolean {
    if (this.type !== remote.type) return false;

    if (this.name !== remote.name) return false;
    if (!shallowEquals(this.name_localizations ?? {}, remote.name_localizations ?? {})) return false;

    return true;
  }

  /**
   * Returns the final data that should be sent to Discord.
   */
  public abstract toJSON(): Data;
}

export interface ToAPIApplicationCommandOptions<
  OptionType extends
    | APIApplicationCommandSubcommandOption
    | APIApplicationCommandSubcommandGroupOption
    | APIApplicationCommandBasicOption
> {
  toJSON: () => OptionType;
}

export abstract class ChatInputCommandBuilderBase<
  OptionType extends
    | APIApplicationCommandSubcommandOption
    | APIApplicationCommandSubcommandGroupOption
    | APIApplicationCommandBasicOption
> extends CommandBuilderBase<RESTPostAPIChatInputApplicationCommandsJSONBody> {
  public type: ApplicationCommandType.ChatInput = ApplicationCommandType.ChatInput;

  public description!: string;
  public description_localizations: LocalizationMap = {};

  public options: ToAPIApplicationCommandOptions<OptionType>[] = [];

  constructor(name: RESTPostAPIChatInputApplicationCommandsJSONBody | string, description?: string) {
    super(name);

    if (description) this.description = description;
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

  equals(
    remote: APIApplicationCommand & {
      type: ApplicationCommandType.ChatInput;
    }
  ): boolean {
    if (!super.equals(remote)) return false;

    if (this.description !== remote.description) return false;
    if (!shallowEquals(this.description_localizations ?? {}, remote.description_localizations ?? {})) return false;

    if (
      this.options &&
      remote.options &&
      (this.options.length !== remote.options.length ||
        this.options.length < remote.options.length ||
        this.options.some((option, i) => {
          if (remote.options?.[i] === undefined) return true;
          return !isEqualOption(option.toJSON(), remote.options[i]);
        }))
    )
      return false;

    function isEqualOption(localOption: APIApplicationCommandOption, remoteOption: APIApplicationCommandOption) {
      if (localOption.type !== remoteOption.type) return false;

      if (localOption.name !== remoteOption.name) return false;
      if (!shallowEquals(localOption.name_localizations ?? {}, remoteOption.name_localizations ?? {})) return false;

      if (localOption.description !== remoteOption.description) return false;
      if (!shallowEquals(localOption.description_localizations ?? {}, remoteOption.description_localizations ?? {}))
        return false;

      if (localOption.required !== remoteOption.required) return false;

      if (
        (localOption.type === ApplicationCommandOptionType.Subcommand ||
          localOption.type === ApplicationCommandOptionType.SubcommandGroup) &&
        (remoteOption.type === ApplicationCommandOptionType.Subcommand ||
          remoteOption.type === ApplicationCommandOptionType.SubcommandGroup)
      ) {
        if (
          localOption.options &&
          remoteOption.options &&
          (localOption.options.length !== remoteOption.options.length ||
            localOption.options.length < remoteOption.options.length ||
            localOption.options.some((option, i) => {
              if (remoteOption.options?.[i] === undefined) return true;
              return !isEqualOption(option, remoteOption.options[i]);
            }))
        )
          return false;
      }

      if (
        localOption.type === ApplicationCommandOptionType.String &&
        remoteOption.type === ApplicationCommandOptionType.String
      ) {
        if (localOption.autocomplete !== remoteOption.autocomplete) return false;
      }

      if (
        (localOption.type === ApplicationCommandOptionType.Integer ||
          localOption.type === ApplicationCommandOptionType.Number) &&
        (remoteOption.type === ApplicationCommandOptionType.Integer ||
          remoteOption.type === ApplicationCommandOptionType.Number)
      ) {
        if (localOption.min_value !== remoteOption.min_value) return false;
        if (localOption.max_value !== remoteOption.max_value) return false;

        if (localOption.autocomplete !== remoteOption.autocomplete) return false;
      }

      return true;
    }

    return true;
  }
}
