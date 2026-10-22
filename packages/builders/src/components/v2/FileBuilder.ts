import type { APIFileComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * Displays an uploaded file as an attachment. Only supports attachment:// references. Message-only (Components V2).
 */
export class FileBuilder extends ComponentBuilderBase<APIFileComponent> {
  public constructor(file?: string) {
    super({ type: ComponentType.File });

    if (file !== undefined) this.setFile(file);
  }

  /**
   * Sets the file to display
   * @param file An attachment:// reference, e.g. "attachment://report.pdf", or a bare filename
   */
  public setFile(file: string): this {
    if (!file.startsWith("attachment://")) file = `attachment://${file}`;

    this.data.file = { url: file };
    return this;
  }

  /**
   * Sets whether this file is blurred as a spoiler
   */
  public setSpoiler(spoiler = true): this {
    this.data.spoiler = spoiler;
    return this;
  }

  public toJSON(): APIFileComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data } as APIFileComponent;
  }
}
