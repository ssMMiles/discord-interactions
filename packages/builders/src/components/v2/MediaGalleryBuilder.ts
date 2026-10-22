import type { APIMediaGalleryComponent, APIMediaGalleryItem, APIUnfurledMediaItem } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

export interface MediaGalleryItemOptions {
  /** A url or attachment:// reference, or an unfurled media item */
  media: string | APIUnfurledMediaItem;
  /** Alt text, max 1024 characters */
  description?: string;
  /** Whether the item is blurred as a spoiler */
  spoiler?: boolean;
}

/**
 * Displays 1-10 images/media items in a gallery. Message-only (Components V2).
 */
export class MediaGalleryBuilder extends ComponentBuilderBase<APIMediaGalleryComponent> {
  public readonly items: APIMediaGalleryItem[] = [];

  public constructor(...items: (MediaGalleryItemOptions | string)[]) {
    super({ type: ComponentType.MediaGallery });

    if (items.length > 0) this.addItems(...items);
  }

  /**
   * Adds items to this gallery (max 10)
   * @param items Media urls or item options
   */
  public addItems(...items: (MediaGalleryItemOptions | string)[]): this {
    for (const item of items) {
      if (typeof item === "string") {
        this.items.push({ media: { url: item } });
        continue;
      }

      this.items.push({
        media: typeof item.media === "string" ? { url: item.media } : item.media,
        description: item.description,
        spoiler: item.spoiler
      });
    }

    return this;
  }

  public toJSON(): APIMediaGalleryComponent {
    if (this.items.length < 1 || this.items.length > 10) {
      throw new RangeError("A Media Gallery component must contain between 1 and 10 items.");
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data, items: this.items } as APIMediaGalleryComponent;
  }
}
