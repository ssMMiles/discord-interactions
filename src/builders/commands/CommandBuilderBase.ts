import { ApplicationCommandType, LocalizationMap, RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { Bitfield } from "./Bitfield";

export abstract class CommandBuilder<Data extends RESTPostAPIApplicationCommandsJSONBody> {
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

  /**
   * Returns the final data that should be sent to Discord.
   */
  public abstract toJSON(): Data;
}
