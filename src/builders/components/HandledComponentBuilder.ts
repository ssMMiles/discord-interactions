import { HandledButtonBuilder, HandledSelectMenuBuilder } from "..";

export type HandledComponentBuilder = HandledButtonBuilder | HandledSelectMenuBuilder;

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
type Constructor = new (...args: any[]) => {};

export function createHandledComponent<TBase extends Constructor>(Base: TBase) {
  return class HandledComponent extends Base {
    id!: string;

    setId(id: string) {
      this.id = id;
      return this;
    }

    buildCustomId(args: string[] = []): string {
      const customId = `${this.id}|${args.join("|")}`;
      if (customId.length > 100) throw new Error("Custom ID is too long.");

      return customId;
    }
  };
}
