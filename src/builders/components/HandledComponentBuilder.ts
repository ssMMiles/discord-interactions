import { HandledButtonBuilder, HandledSelectMenuBuilder } from "..";

export type HandledComponentBuilder = HandledButtonBuilder | HandledSelectMenuBuilder;

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
type Constructor = new (...args: any[]) => {};

export function createHandledComponent<TBase extends Constructor>(Base: TBase) {
  return class HandledComponent extends Base {
    id!: string;
    allowExpired = false;

    /** Set the component's ID */
    setId(id: string) {
      this.id = id;
      return this;
    }

    /** Set whether component execution should continue after state is expired */
    allowExpiredState(value: boolean) {
      this.allowExpired = value;
      return this;
    }

    /** Internal - Builds custom_id string */
    _buildCustomId(data: string): string {
      const customId = `${this.id}|${data}`;
      if (customId.length > 100) throw new Error("Custom ID is too long.");

      return customId;
    }
  };
}
