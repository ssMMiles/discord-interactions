import type {
  APIButtonComponent,
  APIButtonComponentWithCustomId,
  APIButtonComponentWithSKUId,
  APIButtonComponentWithURL,
  APIMessageComponentEmoji
} from "discord-api-types/v10";
import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "./ComponentBuilderBase.js";

export { ButtonStyle };

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
    (this.data as Partial<APIButtonComponentWithCustomId>).emoji = emoji;
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
    (this.data as Partial<APIButtonComponentWithCustomId>).label = label;
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

/**
 * A premium (SKU) button. Premium buttons have no custom_id, label, url or emoji,
 * and clicking one opens the SKU's purchase flow instead of sending an interaction.
 */
export class PremiumButtonBuilder extends ComponentBuilderBase<APIButtonComponentWithSKUId> {
  public constructor(skuId?: string) {
    super({ type: ComponentType.Button, style: ButtonStyle.Premium });

    if (skuId) this.setSkuId(skuId);
  }

  /**
   * Sets the SKU this button offers for purchase
   * @param skuId The id of a purchasable SKU
   */
  public setSkuId(skuId: string): this {
    this.data.sku_id = skuId;
    return this;
  }

  /**
   * Sets whether this button is disabled or not
   * @param disabled Whether or not to disable this button
   */
  public setDisabled(disabled = true): this {
    this.data.disabled = disabled;
    return this;
  }

  public toJSON(): APIButtonComponentWithSKUId {
    return {
      ...this.data
    } as APIButtonComponentWithSKUId;
  }
}
