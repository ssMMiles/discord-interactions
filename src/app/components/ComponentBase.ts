import { APIActionRowComponentTypes } from "discord-api-types/v10";
import { HandledInteraction } from "../HandledInteraction";

export abstract class ComponentBase<
  Data extends APIActionRowComponentTypes,
  Builder extends { toJSON: () => Data },
  Context
> extends HandledInteraction<Data, Builder, Context> {
  public id: string;
  public allowExpired = false;

  constructor(id: string, builder: Builder, handler: (ctx: Context) => Promise<void>) {
    super(builder, handler);

    this.id = id;
  }

  protected getInstanceData(state: string): Data {
    return {
      ...this.data,
      custom_id: `${this.id}|${state}`
    };
  }

  /** Set the component ID */
  setId(id: string) {
    this.id = id;
    return this;
  }

  /** Set whether component execution should continue when state data has expired */
  allowExpiredState(value: boolean) {
    this.allowExpired = value;
    return this;
  }
}
