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
  MessageUpdateResponse,
  SelectMenuBuilder,
  SelectMenuContext,
  SimpleError,
  UnknownComponentType
} from "..";

/**
 * Component handling
 */
export async function handleMessageComponent(
  manager: DiscordApplication,
  interaction: APIMessageComponentInteraction
): Promise<MessageUpdateResponse> {
  const componentData = interaction.data;
  switch (componentData.component_type) {
    case ComponentType.Button: {
      const context = new ButtonContext(manager, interaction as APIMessageComponentButtonInteraction);

      if (manager.hooks.component?.button) {
        const result = await manager.hooks.component.button(context);

        if (result && result[0] === true) return result[1];
      }

      const button = manager.components.get(context.id);

      if (!button || !(button instanceof ButtonBuilder)) {
        return context.reply(SimpleError("Button not found."));
      }

      await button.handler(context);

      return context.response;
    }
    case ComponentType.SelectMenu: {
      const context = new SelectMenuContext(manager, interaction as APIMessageComponentSelectMenuInteraction);

      if (manager.hooks.component?.selectMenu) {
        const result = await manager.hooks.component.selectMenu(context);

        if (result && result[0] === true) return result[1];
      }

      const selectMenu = manager.components.get(context.id);

      if (!selectMenu || !(selectMenu instanceof SelectMenuBuilder)) {
        return context.reply(SimpleError("Select menu not found."));
      }

      await selectMenu.handler(context);

      return context.response;
    }
    default: {
      throw new UnknownComponentType(interaction);
    }
  }
}
