import {
  ApplicationCommandType,
  LocalizationMap,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord-api-types/v10";
import { CommandBuilder } from "./CommandBuilderBase";

export class SlashCommandBuilder extends CommandBuilder<RESTPostAPIChatInputApplicationCommandsJSONBody> {
  public type: ApplicationCommandType.ChatInput = ApplicationCommandType.ChatInput;

  public description: string;
  public description_localizations: LocalizationMap = {};

  constructor(name: string, description: string) {
    super(name);

    this.description = description;
  }
  /**
   * Set the description
   *
   * @param description The description
   */
  public setDescription(description: string) {
    this.description = description;

    return this;
  }

  /**
   * Set a dictionary of localized descriptions
   */
  public setDescriptionLocalizations(localizations: LocalizationMap) {
    this.description_localizations = localizations;

    return this;
  }

  /**
   * Set a single locale's description
   */
  public setLocalizedDescription(locale: keyof LocalizationMap, description: string) {
    this.description_localizations[locale] = description;
  }

  public toJSON() {
    return {
      name: this.name,
      description: this.description,
      type: this.type
    };
  }
}
