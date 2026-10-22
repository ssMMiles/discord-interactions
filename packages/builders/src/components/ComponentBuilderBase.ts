import type {
  APIActionRowComponent,
  APIBaseComponent,
  APIComponentInMessageActionRow,
  APIComponentInModalActionRow,
  ComponentType
} from "discord-api-types/v10";

export type APIActionRowComponentTypes = APIComponentInMessageActionRow | APIComponentInModalActionRow;

export type AnyAPIActionRowComponent = APIActionRowComponentTypes | APIActionRowComponent<APIActionRowComponentTypes>;

/**
 * @hidden
 */
export abstract class ComponentBuilderBase<
  DataType extends Partial<APIBaseComponent<ComponentType>> = APIBaseComponent<ComponentType>
> {
  /**
   * The API data associated with this component
   */
  public readonly data: Partial<DataType>;

  public abstract toJSON(): object;

  public constructor(data: Partial<DataType>) {
    this.data = data;
  }

  /**
   * Sets this component's optional 32-bit numeric identifier, unique within the message.
   * Discord generates sequential ids for components sent without one.
   */
  public setId(id: number): this {
    this.data.id = id;
    return this;
  }
}
