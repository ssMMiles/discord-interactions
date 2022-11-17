import { APISelectMenuOption, APIStringSelectComponent, ComponentType } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";
import { SelectMenuOptionBuilder } from "./StringSelectMenuOptionsBuilder.js";

/**
 * Represents a non-validated select menu component
 */
export class StringSelectMenuBuilder extends SelectMenuBuilderBase {
  /**
   * The options within this select menu
   */
  public readonly options: SelectMenuOptionBuilder[];

  public constructor(data?: Partial<APIStringSelectComponent>) {
    const { options, ...initData } = data ?? {};
    super(ComponentType.StringSelect, initData);

    this.options = options ? options.map((o: APISelectMenuOption) => new SelectMenuOptionBuilder(o)) : [];
  }

  /**
   * Adds options to this select menu
   * @param options The options to add to this select menu
   * @returns
   */
  public addOptions(...options: SelectMenuOptionBuilder[]): this {
    for (const option of options) {
      this.options.push(option);
    }

    return this;
  }

  /**
   * Sets the options on this select menu
   * @param options The options to set on this select menu
   */
  public setOptions(options: (SelectMenuOptionBuilder | APISelectMenuOption)[]): this {
    this.options.splice(
      0,
      this.options.length,
      ...options.map((option) =>
        option instanceof SelectMenuOptionBuilder ? option : new SelectMenuOptionBuilder(option)
      )
    );
    return this;
  }

  public toJSON(): APIStringSelectComponent {
    return {
      ...this.data,
      options: this.options.map((o) => o.toJSON())
    } as APIStringSelectComponent;
  }
}
