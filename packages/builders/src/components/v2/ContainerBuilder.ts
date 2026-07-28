import type { APIContainerComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import type { ActionRowBuilder, MessageActionRowComponentBuilders } from "../ActionRowBuilder.js";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";
import type { FileBuilder } from "./FileBuilder.js";
import type { MediaGalleryBuilder } from "./MediaGalleryBuilder.js";
import type { SectionBuilder } from "./SectionBuilder.js";
import type { SeparatorBuilder } from "./SeparatorBuilder.js";
import { TextDisplayBuilder } from "./TextDisplayBuilder.js";

export type ContainerChildBuilders =
  | ActionRowBuilder<MessageActionRowComponentBuilders>
  | TextDisplayBuilder
  | SectionBuilder
  | MediaGalleryBuilder
  | SeparatorBuilder
  | FileBuilder;

/**
 * Visually groups a set of components, with an optional accent color bar. Message-only (Components V2).
 */
export class ContainerBuilder extends ComponentBuilderBase<APIContainerComponent> {
  public readonly components: ContainerChildBuilders[] = [];

  public constructor(...components: (ContainerChildBuilders | string)[]) {
    super({ type: ComponentType.Container });

    if (components.length > 0) this.addComponents(...components);
  }

  /**
   * Adds child components to this container. Strings become Text Display components.
   */
  public addComponents(...components: (ContainerChildBuilders | string)[]): this {
    for (const component of components) {
      this.components.push(typeof component === "string" ? new TextDisplayBuilder(component) : component);
    }

    return this;
  }

  /**
   * Sets the accent color shown on the container's left edge
   * @param color An RGB color value (0x000000 - 0xFFFFFF)
   */
  public setAccentColor(color: number | null): this {
    this.data.accent_color = color;
    return this;
  }

  /**
   * Sets whether this container's contents are blurred as a spoiler
   */
  public setSpoiler(spoiler = true): this {
    this.data.spoiler = spoiler;
    return this;
  }

  public toJSON(): APIContainerComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    } as APIContainerComponent;
  }
}
