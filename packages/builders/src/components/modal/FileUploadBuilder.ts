import type { APIFileUploadComponent, FileUploadType } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import { ComponentBuilderBase } from "../ComponentBuilderBase.js";

/**
 * Lets users upload 0-10 files in a modal. Must be placed inside a Label component.
 */
export class FileUploadBuilder extends ComponentBuilderBase<APIFileUploadComponent> {
  public constructor(customId?: string) {
    super({ type: ComponentType.FileUpload });

    if (customId !== undefined) this.setCustomId(customId);
  }

  /**
   * Sets the custom id for this file upload
   */
  public setCustomId(customId: string): this {
    this.data.custom_id = customId;
    return this;
  }

  /**
   * Sets the minimum number of files that must be uploaded (0-10)
   */
  public setMinValues(minValues: number): this {
    this.data.min_values = minValues;
    return this;
  }

  /**
   * Sets the maximum number of files that can be uploaded (max 10)
   */
  public setMaxValues(maxValues: number): this {
    this.data.max_values = maxValues;
    return this;
  }

  /**
   * Restricts the accepted file types
   */
  public setFileTypes(...fileTypes: FileUploadType[]): this {
    this.data.file_types = fileTypes;
    return this;
  }

  /**
   * Sets whether an upload is required to submit the modal (defaults to true)
   */
  public setRequired(required = true): this {
    this.data.required = required;
    return this;
  }

  public toJSON(): APIFileUploadComponent {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data } as APIFileUploadComponent;
  }
}
