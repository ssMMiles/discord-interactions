import type {
  APIApplicationCommandBasicOption,
  ApplicationCommandOptionType,
  LocalizationMap
} from "discord-api-types/v10";

export abstract class SlashCommandOptionBase {
  public abstract readonly type: ApplicationCommandOptionType;

  public required = false;

  public name: string;
  public name_localizations: LocalizationMap = {};

  public description: string;
  public description_localizations: LocalizationMap = {};

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  /**
   * Marks the option as required
   *
   * @param required If this option should be required
   */
  public setRequired(required: boolean) {
    this.required = required;

    return this;
  }

  /**
   * Set a dictionary of localized names
   */
  public setNameLocalizations(localizations: LocalizationMap) {
    this.name_localizations = localizations;

    return this;
  }

  /**
   * Set a single locale's name
   */
  public setLocalizedName(locale: keyof LocalizationMap, name: string) {
    this.name_localizations[locale] = name;
  }

  public abstract toJSON(): APIApplicationCommandBasicOption;
}
