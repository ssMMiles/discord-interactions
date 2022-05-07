export abstract class HandledInteraction<Data, Builder extends { toJSON: () => Data }, Context> {
  public builder: Builder;
  public get data(): Data {
    return this.builder.toJSON();
  }

  public handler: (ctx: Context) => Promise<void>;

  constructor(builder: Builder, handler: (ctx: Context) => Promise<void>) {
    this.builder = builder;
    this.handler = handler;
  }

  setHandler(handler: (ctx: Context) => Promise<void>): this {
    this.handler = handler;

    return this;
  }
}
