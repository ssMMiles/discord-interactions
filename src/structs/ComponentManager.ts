import { APIMessageActionRowComponent } from "discord-api-types/v10";
import { ComponentBuilder } from "..";

export class ComponentManager {
  private _components: Map<string, ComponentBuilder> = new Map();

  has(name: string): boolean {
    return this._components.has(name);
  }

  get(name: string): ComponentBuilder | undefined {
    return this._components.get(name);
  }

  load(components: ComponentBuilder[] = []) {
    for (const component of components) {
      this._components.set(component.id, component);
    }
  }

  unload(id: string) {
    this._components.delete(id);
  }

  createInstance(name: string, args: string[] = []): APIMessageActionRowComponent {
    const component = this.get(name);

    if (!component) throw new Error(`Component ${name} does not exist.`);

    return component.createInstance(args);
  }
}
