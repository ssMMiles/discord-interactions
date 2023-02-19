import { APIActionRowComponent, APIMessageActionRowComponent, ComponentType } from "discord-api-types/v10";
import type { ButtonBuilderBase } from "./ButtonBuilder.js";
import { ComponentBuilderBase } from "./ComponentBuilderBase.js";
import { SelectMenuBuilders } from "./index.js";
import type { TextInputBuilder } from "./TextInputBuilder.js";

export type MessageActionRowComponentBuilders = ButtonBuilderBase | SelectMenuBuilders;
export type ModalActionRowComponentBuilders = TextInputBuilder;

export type ComponentBuilders = MessageActionRowComponentBuilders | ModalActionRowComponentBuilders;

export type MessageActionRowBuilder = ActionRowBuilder<MessageActionRowComponentBuilders>;
export type ModalActionRowBuilder = ActionRowBuilder<ModalActionRowComponentBuilders>;

/**
 * Represents an action row component
 */
export class ActionRowBuilder<
  T extends ComponentBuilders = MessageActionRowComponentBuilders
> extends ComponentBuilderBase<APIActionRowComponent<APIMessageActionRowComponent /* | APIModalActionRowComponent*/>> {
  /**
   * The components within this action row
   */
  public readonly components: T[] = [];

  public constructor(components?: T[]) {
    super({ type: ComponentType.ActionRow });
    if (components) this.components.push(...components);
  }

  /**
   * Adds components to this action row.
   * @param components The components to add to this action row.
   * @returns
   */
  public addComponents(...components: T[]): this {
    this.components.push(...components);
    return this;
  }

  /**
   * Sets the components in this action row
   * @param components The components to set this row to
   */
  public setComponents(components: T[]): this {
    this.components.splice(0, this.components.length, ...components);
    return this;
  }

  public toJSON(): APIActionRowComponent<ReturnType<T["toJSON"]>> {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    } as APIActionRowComponent<ReturnType<T["toJSON"]>>;
  }
}
