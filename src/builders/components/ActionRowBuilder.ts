import { ComponentBuilder as BaseComponentBuilder } from "@discordjs/builders";
import { APIActionRowComponent, APIMessageActionRowComponent, ComponentType } from "discord-api-types/v10";
import { ComponentBuilder } from "../..";

export class ActionRowBuilder extends BaseComponentBuilder<
  Omit<
    Partial<APIActionRowComponent<APIMessageActionRowComponent>> & {
      type: ComponentType.ActionRow;
    },
    "components"
  >
> {
  private components: APIMessageActionRowComponent[] = [];

  public constructor(components: ComponentBuilder[] | APIMessageActionRowComponent[] = []) {
    super({ type: ComponentType.ActionRow });
    this.components = this.flattenComponentBuilders(components);
  }

  private flattenComponentBuilders(
    components: ComponentBuilder[] | APIMessageActionRowComponent[]
  ): APIMessageActionRowComponent[] {
    return components.map((component) => ("toJSON" in component ? component.toJSON() : component));
  }

  public addComponents(...components: ComponentBuilder[] | APIMessageActionRowComponent[]) {
    this.components.push(...this.flattenComponentBuilders(components));
    return this;
  }

  public setComponents(...components: ComponentBuilder[] | APIMessageActionRowComponent[]) {
    this.components = this.flattenComponentBuilders(components);
    return this;
  }

  toJSON(): APIActionRowComponent<APIMessageActionRowComponent> {
    return {
      ...this.data,
      components: this.components
    };
  }
}
