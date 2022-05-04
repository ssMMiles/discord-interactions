import { UnsafeButtonBuilder, UnsafeSelectMenuBuilder } from "@discordjs/builders";
import { v4 as uuidv4 } from "uuid";
import { GenericCache, HandledComponentBuilder } from "..";

export class ComponentManager {
  private _components: Map<string, HandledComponentBuilder> = new Map();

  constructor(public cache?: GenericCache) {}

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

  async createInstance(
    name: string,
    data: object = {},
    ttl = this.cache?.ttl ?? 900
  ): Promise<UnsafeButtonBuilder | UnsafeSelectMenuBuilder> {
    const component = this.get(name);

    if (!component) throw new Error(`Component ${name} does not exist.`);

    let dataStr = JSON.stringify(data);

    if (component.id.length + dataStr.length > 99) {
      if (!this.cache) throw new Error("Component state too large, please use a cache.");

      const uuid = uuidv4();

      await this.cache.set(uuid, ttl, dataStr);

      dataStr = uuid;
    }

    return component.createInstance(dataStr);
  }
}
