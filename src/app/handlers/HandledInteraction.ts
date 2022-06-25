import { Component, Modal } from "../..";

export abstract class HandledInteraction<Data, Builder extends { toJSON: () => Data }, Context> {
  public builder: Builder;
  public get data(): Data {
    return this.builder.toJSON();
  }

  public handler: (ctx: Context) => Promise<void>;

  public components: (Component | Modal)[];

  constructor(builder: Builder, handler: (ctx: Context) => Promise<void>, components: (Component | Modal)[] = []) {
    this.builder = builder;
    this.handler = handler;

    this.components = components;
  }

  setHandler(handler: (ctx: Context) => Promise<void>): this {
    this.handler = handler;

    return this;
  }
}
