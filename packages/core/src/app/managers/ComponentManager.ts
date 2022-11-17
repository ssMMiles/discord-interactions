import { ButtonBuilder, ModalBuilder, SelectMenuBuilders } from "@discord-interactions/builders";
import { v4 as uuidv4 } from "uuid";
import { GenericCache } from "../DiscordApplication.js";
import { Component, Modal } from "../index.js";

export class ComponentManager {
  private _components: Map<string, Component | Modal> = new Map();

  /**
   * Create a new component manager, with an optional cache.
   * @param cache Cache to use for storing large state objects
   * @param prefix Prefix for component IDs, used to namespace components (e.g per-command) as duplicate IDs will cause issues
   */
  constructor(public cache?: GenericCache) {
    this.cache = cache;
  }

  has(name: string): boolean {
    return this._components.has(name);
  }

  get(name: string): (Component | Modal) | undefined {
    return this._components.get(name);
  }

  register(...components: (Component | Modal)[]) {
    for (const component of components) {
      this._components.set(component.id, component);
    }
  }

  unregister(name: string) {
    this._components.delete(name);
  }

  async createInstance<
    Builder extends ButtonBuilder | SelectMenuBuilders | ModalBuilder = ButtonBuilder | SelectMenuBuilders
  >(name: string, data: object = {}, ttl = this.cache?.ttl ?? 900): Promise<Builder> {
    const component = this.get(name);

    if (!component) throw new Error(`Component ${name} does not exist.`);

    let dataStr = JSON.stringify(data);

    if (component.id.length + dataStr.length > 99) {
      if (!this.cache) throw new Error("Component state too large, please use a cache.");

      const uuid = uuidv4();

      await this.cache.set(uuid, ttl, dataStr);

      dataStr = uuid;
    }

    return component.createInstance(dataStr) as Builder;
  }
}
