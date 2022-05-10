import { APIActionRowComponent, APIMessageActionRowComponent, ComponentType } from "discord-api-types/v10";
import { ButtonBuilder } from "./ButtonBuilder";
import { ComponentBuilderBase } from "./ComponentBuilderBase";
import { SelectMenuBuilder } from "./SelectMenuBuilder";

export type MessageComponentBuilder =
  | MessageActionRowComponentBuilder
  | ActionRowBuilder<MessageActionRowComponentBuilder>;
//export type ModalComponentBuilder = ModalActionRowComponentBuilder | ActionRowBuilder<ModalActionRowComponentBuilder>;
export type MessageActionRowComponentBuilder = ButtonBuilder | SelectMenuBuilder;
//export type ModalActionRowComponentBuilder = TextInputBuilder;
export type AnyComponentBuilder = MessageActionRowComponentBuilder /* | ModalActionRowComponentBuilder */;

/**
 * Represents an action row component
 */
export class ActionRowBuilder<T extends AnyComponentBuilder> extends ComponentBuilderBase<
  APIActionRowComponent<APIMessageActionRowComponent /* | APIModalActionRowComponent*/>
> {
  /**
   * The components within this action row
   */
  public readonly components: T[];

  public constructor(components: T[] = []) {
    super({ type: ComponentType.ActionRow });
    this.components = components;
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
