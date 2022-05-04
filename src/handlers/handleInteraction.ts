import {
  APIChatInputApplicationCommandInteraction,
  APIInteraction,
  APIMessageApplicationCommandInteraction,
  APIMessageComponentButtonInteraction,
  APIMessageComponentSelectMenuInteraction,
  APIUserApplicationCommandInteraction,
  ApplicationCommandType,
  ComponentType,
  InteractionType
} from "discord-api-types/v10";
import { UnknownApplicationCommandType, UnknownInteractionType } from "..";
import {
  AutocompleteContext,
  ButtonContext,
  InteractionContext,
  MessageCommandContext,
  SelectMenuContext,
  SlashCommandContext,
  UserCommandContext
} from "../contexts";
import { PingContext } from "../contexts/PingContext";
import { DiscordApplication, ResponseCallback } from "../structs";
import { handleAutocomplete, handleMessageCommand, handleSlashCommand, handleUserCommand } from "./ApplicationCommand";
import { handleButton, handleSelectMenu } from "./Component";

export async function _handleInteraction(
  this: DiscordApplication,
  interaction: APIInteraction,
  responseCallback: ResponseCallback
): Promise<InteractionContext> {
  const globalHook = this.hooks.interaction;
  let context: InteractionContext;

  switch (interaction.type) {
    case InteractionType.Ping:
      context = new PingContext(responseCallback);

      if (this.hooks.ping) {
        const result = await this.hooks.ping(context);

        if (result === true) break;
      }

      context.reply();
      break;
    case InteractionType.ApplicationCommand:
      switch (interaction.data.type) {
        case ApplicationCommandType.ChatInput:
          context = new SlashCommandContext(
            this,
            interaction as APIChatInputApplicationCommandInteraction,
            responseCallback
          );

          if (globalHook) await globalHook(context);

          await handleSlashCommand(context);

          break;
        case ApplicationCommandType.User:
          context = new UserCommandContext(this, interaction as APIUserApplicationCommandInteraction, responseCallback);

          if (globalHook) await globalHook(context);

          await handleUserCommand(context);

          break;
        case ApplicationCommandType.Message:
          context = new MessageCommandContext(
            this,
            interaction as APIMessageApplicationCommandInteraction,
            responseCallback
          );

          if (globalHook) await globalHook(context);

          await handleMessageCommand(context);

          break;
        default:
          throw new UnknownApplicationCommandType(interaction);
      }

      break;
    case InteractionType.ApplicationCommandAutocomplete:
      context = new AutocompleteContext(this, interaction, responseCallback);

      if (globalHook) await globalHook(context);

      await handleAutocomplete(context);

      break;
    case InteractionType.MessageComponent:
      switch (interaction.data.component_type) {
        case ComponentType.Button:
          context = new ButtonContext(this, interaction as APIMessageComponentButtonInteraction, responseCallback);

          if (globalHook) await globalHook(context);

          await handleButton(context);

          break;
        case ComponentType.SelectMenu:
          context = new SelectMenuContext(
            this,
            interaction as APIMessageComponentSelectMenuInteraction,
            responseCallback
          );

          if (globalHook) await globalHook(context);

          await handleSelectMenu(context);

          return context;
        default:
          throw new UnknownInteractionType(interaction);
      }

      break;
    default:
      throw new UnknownInteractionType(interaction);
  }

  return context;
}
