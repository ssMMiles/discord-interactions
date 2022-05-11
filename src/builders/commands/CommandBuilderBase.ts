import { ApplicationCommandType, LocalizationMap, RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { Bitfield } from "./permissions/Bitfield";

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
   * Whether the command is visible in DMs
   */
  public dm_permission = true;

  /**
   * Default member permissions required to use the command
   */
  public default_member_permissions?: Bitfield;

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

  setDefaultMemberPermissions(permissions: Bitfield | undefined): this {
    this.default_member_permissions = permissions;

    return this;
  }

  addDefaultMemberPermissions(...permissions: bigint[]): this {
    if (!this.default_member_permissions) {
      this.default_member_permissions = new Bitfield();
    }

    this.default_member_permissions.add(...permissions);

    return this;
  }

  removeDefaultMemberPermissions(...permissions: bigint[]): this {
    if (this.default_member_permissions) this.default_member_permissions.remove(...permissions);

    return this;
  }

  /**
   * Returns the final data that should be sent to Discord.
   */
  public abstract toJSON(): Data;
}
