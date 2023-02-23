import type {
  APIButtonComponent,
  APIButtonComponentWithCustomId,
  APIButtonComponentWithURL,
  APIMessageComponentEmoji
} from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "./ComponentBuilderBase.js";

export enum ButtonStyle {
  Primary = 1,
  Secondary = 2,
  Success = 3,
  Danger = 4,
  Link = 5
}

abstract class ButtonBuilderBase extends ComponentBuilderBase<APIButtonComponent> {
  public constructor(data?: Partial<APIButtonComponent> | ButtonStyle, label?: string) {
    if (typeof data === "number") {
      super({ type: ComponentType.Button });

      this.setStyle(data);
      if (label) this.setLabel(label);

      return;
    }

    super({ type: ComponentType.Button, label, ...data });
  }

  /**
   * Sets the style of this button
   * @param style The style of the button
   */
  public setStyle(style: ButtonStyle): this {
    this.data.style = style;
    return this;
  }

  /**
   * Sets the emoji to display on this button
   * @param emoji The emoji to display on this button
   */
  public setEmoji(emoji: APIMessageComponentEmoji): this {
    this.data.emoji = emoji;
    return this;
  }

  /**
   * Sets whether this button is disable or not
   * @param disabled Whether or not to disable this button or not
   */
  public setDisabled(disabled = true): this {
    this.data.disabled = disabled;
    return this;
  }

  /**
   * Sets the label for this button
   * @param label The label to display on this button
   */
  public setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  public toJSON(): APIButtonComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      ...this.data
    } as APIButtonComponent;
  }
}

/**
 * Represents a non-validated button component
 */
export class ButtonBuilder extends ButtonBuilderBase {
  /**
   * Sets the custom Id for this button
   * @param customId The custom id to use for this button
   */
  public setCustomId(customId: string): this {
    (this.data as APIButtonComponentWithCustomId).custom_id = customId;
    return this;
  }

  public toJSON(): APIButtonComponentWithCustomId {
    return {
      ...this.data
    } as APIButtonComponentWithCustomId;
  }
}

export class LinkButtonBuilder extends ButtonBuilderBase {
  /**
   * Sets the URL for this button
   * @param url The URL to open when this button is clicked
   */
  public setURL(url: string): this {
    (this.data as APIButtonComponentWithURL).url = url;
    return this;
  }

  public toJSON(): APIButtonComponentWithURL {
    return {
      ...this.data
    } as APIButtonComponentWithURL;
  }
}
