import type { APIThumbnailComponent, APIUnfurledMediaItem } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * A small image usable as a Section accessory. Supports external urls and attachment:// references.
 */
export class ThumbnailBuilder extends ComponentBuilderBase<APIThumbnailComponent> {
  public constructor(media?: string | APIUnfurledMediaItem) {
    super({ type: ComponentType.Thumbnail });

    if (media !== undefined) this.setMedia(media);
  }

  /**
   * Sets the image for this thumbnail
   * @param media A url or attachment:// reference, or an unfurled media item
   */
  public setMedia(media: string | APIUnfurledMediaItem): this {
    this.data.media = typeof media === "string" ? { url: media } : media;
    return this;
  }

  /**
   * Sets the alt text for this thumbnail
   * @param description Alt text, max 1024 characters
   */
  public setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Sets whether this thumbnail is blurred as a spoiler
   */
  public setSpoiler(spoiler = true): this {
    this.data.spoiler = spoiler;
    return this;
  }

  public toJSON(): APIThumbnailComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data } as APIThumbnailComponent;
  }
}
