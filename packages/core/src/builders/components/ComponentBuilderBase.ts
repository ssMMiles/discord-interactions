import type {
  APIActionRowComponent,
  APIActionRowComponentTypes,
  APIBaseComponent,
  ComponentType
} from "discord-api-types/v10";

export type AnyAPIActionRowComponent = APIActionRowComponentTypes | APIActionRowComponent<APIActionRowComponentTypes>;

/**
 * Represents a discord component
 */
export abstract class ComponentBuilderBase<
  DataType extends Partial<APIBaseComponent<ComponentType>> = APIBaseComponent<ComponentType>
> {
  /**
   * The API data associated with this component
   */
  public readonly data: Partial<DataType>;

  public abstract toJSON(): AnyAPIActionRowComponent;

  public constructor(data: Partial<DataType>) {
    this.data = data;
  }
}
