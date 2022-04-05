import {
  APIMessageComponentButtonInteraction,
  APIMessageComponentInteraction,
  APIMessageComponentSelectMenuInteraction,
  ComponentType
} from "discord-api-types/v10";
import {
  ButtonBuilder,
  ButtonContext,
  DiscordApplication,
  ResponseCallback,
  SelectMenuBuilder,
  SelectMenuContext,
  SimpleError,
  UnknownComponentType
} from "..";
import { MessageUpdateResponse } from "../util";

/**
 * Component handling
 */
export async function handleMessageComponent(
  manager: DiscordApplication,
  interaction: APIMessageComponentInteraction,
  responseCallback: ResponseCallback<MessageUpdateResponse>
): Promise<void> {
  const componentData = interaction.data;
  switch (componentData.component_type) {
    case ComponentType.Button: {
      const context = new ButtonContext(manager, interaction as APIMessageComponentButtonInteraction, responseCallback);

      if (manager.hooks.component?.button) {
        const result = await manager.hooks.component.button(context);

        if (result === true) return;
      }

      const button = manager.components.get(context.id);

      if (!button || !(button instanceof ButtonBuilder)) return context.reply(SimpleError("Button not found."));

      return button.handler(context);
    }
    case ComponentType.SelectMenu: {
      const context = new SelectMenuContext(
        manager,
        interaction as APIMessageComponentSelectMenuInteraction,
        responseCallback
      );

      if (manager.hooks.component?.selectMenu) {
        const result = await manager.hooks.component.selectMenu(context);

        if (result === true) return;
      }

      const selectMenu = manager.components.get(context.id);

      if (!selectMenu || !(selectMenu instanceof SelectMenuBuilder))
        return context.reply(SimpleError("Select menu not found."));

      return selectMenu.handler(context);
    }
    default: {
      throw new UnknownComponentType(interaction);
    }
  }
}
