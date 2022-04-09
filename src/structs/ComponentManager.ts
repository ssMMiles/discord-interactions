import { UnsafeButtonBuilder, UnsafeSelectMenuBuilder } from "@discordjs/builders";
import { HandledComponentBuilder } from "..";

export class ComponentManager {
  private _components: Map<string, HandledComponentBuilder> = new Map();

  has(name: string): boolean {
    return this._components.has(name);
  }

  get(name: string): HandledComponentBuilder | undefined {
    return this._components.get(name);
  }

  load(components: HandledComponentBuilder[] = []) {
    for (const component of components) {
      this._components.set(component.id, component);
    }
  }

  unload(id: string) {
    this._components.delete(id);
  }

  createInstance(name: string, ...args: string[]): UnsafeButtonBuilder | UnsafeSelectMenuBuilder {
    const component = this.get(name);

    if (!component) throw new Error(`Component ${name} does not exist.`);

    return component.createInstance(...args);
  }
}
