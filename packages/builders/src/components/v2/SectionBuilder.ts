import type { APISectionComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import type { ButtonBuilder, LinkButtonBuilder, PremiumButtonBuilder } from "../ButtonBuilder.js";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";
import { TextDisplayBuilder } from "./TextDisplayBuilder.js";
import type { ThumbnailBuilder } from "./ThumbnailBuilder.js";

export type SectionAccessoryBuilder = ButtonBuilder | LinkButtonBuilder | PremiumButtonBuilder | ThumbnailBuilder;

/**
 * Associates 1-3 Text Display components with a Button or Thumbnail accessory. Message-only (Components V2).
 */
export class SectionBuilder extends ComponentBuilderBase<APISectionComponent> {
  public readonly components: TextDisplayBuilder[] = [];
  private accessory?: SectionAccessoryBuilder;

  public constructor(...components: (TextDisplayBuilder | string)[]) {
    super({ type: ComponentType.Section });

    if (components.length > 0) this.addText(...components);
  }

  /**
   * Adds Text Display components to this section (max 3)
   * @param components Text Display builders, or plain strings
   */
  public addText(...components: (TextDisplayBuilder | string)[]): this {
    for (const component of components) {
      this.components.push(typeof component === "string" ? new TextDisplayBuilder(component) : component);
    }

    return this;
  }

  /**
   * Sets the accessory shown beside this section's text
   * @param accessory A Button or Thumbnail builder
   */
  public setAccessory(accessory: SectionAccessoryBuilder): this {
    this.accessory = accessory;
    return this;
  }

  public toJSON(): APISectionComponent {
    if (this.accessory === undefined) {
      throw new Error("A Section component requires an accessory (Button or Thumbnail).");
    }

    if (this.components.length < 1 || this.components.length > 3) {
      throw new RangeError("A Section component must contain between 1 and 3 Text Display components.");
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON()),
      accessory: this.accessory.toJSON()
    } as APISectionComponent;
  }
}
