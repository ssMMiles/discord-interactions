import type { APISeparatorComponent } from "discord-api-types/v10";
import { ComponentType, SeparatorSpacingSize } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

export { SeparatorSpacingSize };

/**
 * Adds vertical spacing (and optionally a divider line) between components. Message-only (Components V2).
 */
export class SeparatorBuilder extends ComponentBuilderBase<APISeparatorComponent> {
  public constructor(spacing?: SeparatorSpacingSize, divider?: boolean) {
    super({ type: ComponentType.Separator });

    if (spacing !== undefined) this.setSpacing(spacing);
    if (divider !== undefined) this.setDivider(divider);
  }

  /**
   * Sets whether a divider line is shown (defaults to true on Discord's side)
   */
  public setDivider(divider = true): this {
    this.data.divider = divider;
    return this;
  }

  /**
   * Sets the spacing size
   * @param spacing Small (1) or Large (2)
   */
  public setSpacing(spacing: SeparatorSpacingSize): this {
    this.data.spacing = spacing;
    return this;
  }

  public toJSON(): APISeparatorComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data } as APISeparatorComponent;
  }
}
