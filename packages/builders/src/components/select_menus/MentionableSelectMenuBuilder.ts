import { APIMentionableSelectComponent, ComponentType } from "discord-api-types/v10";
import { SelectMenuBuilderBase } from "./SelectMenuBuilderBase.js";

/**
 * Represents a non-validated select menu component
 */
export class MentionableSelectMenuBuilder extends SelectMenuBuilderBase {
  public constructor(data?: Partial<APIMentionableSelectComponent>) {
    super(ComponentType.MentionableSelect, data);
  }
  public toJSON(): APIMentionableSelectComponent {
    return {
      ...this.data
    } as APIMentionableSelectComponent;
  }
}
