import type { APITextDisplayComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * Displays markdown-formatted text. Usable in messages (Components V2) and as a top-level modal component.
 */
export class TextDisplayBuilder extends ComponentBuilderBase<APITextDisplayComponent> {
  public constructor(content?: string) {
    super({ type: ComponentType.TextDisplay });

    if (content !== undefined) this.setContent(content);
  }

  /**
   * Sets the markdown text to display
   * @param content Text to display, supports markdown and mentions
   */
  public setContent(content: string): this {
    this.data.content = content;
    return this;
  }

  public toJSON(): APITextDisplayComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data } as APITextDisplayComponent;
  }
}
