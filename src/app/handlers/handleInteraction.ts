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
import {
  DiscordApplication,
  ISubcommandGroup,
  ISubcommandHandler,
  RegisteredMessageCommand,
  RegisteredUserCommand,
  ResponseCallback
} from "..";
import { InteractionHandlerNotFound, UnknownApplicationCommandType, UnknownInteractionType } from "../..";
import {
  AutocompleteContext,
  ButtonContext,
  InteractionContext,
  MessageCommandContext,
  SelectMenuContext,
  SlashCommandContext,
  UserCommandContext
} from "../../contexts";
import { ModalSubmitContext } from "../../contexts/ModalSubmitContext";
import { PingContext } from "../../contexts/PingContext";
import { InteractionHooks } from "./Hooks";

function getExecutionContext(
  app: DiscordApplication,
  interaction: APIInteraction,
  responseCallback: ResponseCallback
): [InteractionContext, ((context: InteractionContext) => Promise<void | true>)[]] {
  let context, hook;

  switch (interaction.type) {
    case InteractionType.Ping:
      context = new PingContext(responseCallback);
      hook = "ping";

      break;
    case InteractionType.ApplicationCommand:
      switch (interaction.data.type) {
        case ApplicationCommandType.ChatInput:
          context = new SlashCommandContext(
            app,
            interaction as APIChatInputApplicationCommandInteraction,
            responseCallback
          );
          hook = "command.slash";

          break;
        case ApplicationCommandType.User:
          context = new UserCommandContext(app, interaction as APIUserApplicationCommandInteraction, responseCallback);
          hook = "command.user";

          break;
        case ApplicationCommandType.Message:
          context = new MessageCommandContext(
            app,
            interaction as APIMessageApplicationCommandInteraction,
            responseCallback
          );
          hook = "command.message";

          break;
        default:
          throw new UnknownApplicationCommandType(interaction);
      }

      break;
    case InteractionType.ApplicationCommandAutocomplete:
      context = new AutocompleteContext(app, interaction, responseCallback);
      hook = "command.autocomplete";

      break;
    case InteractionType.MessageComponent:
      switch (interaction.data.component_type) {
        case ComponentType.Button:
          context = new ButtonContext(app, interaction as APIMessageComponentButtonInteraction, responseCallback);
          hook = "component.button";

          break;
        case ComponentType.SelectMenu:
          context = new SelectMenuContext(
            app,
            interaction as APIMessageComponentSelectMenuInteraction,
            responseCallback
          );
          hook = "component.selectMenu";

          break;
        default:
          throw new UnknownInteractionType(interaction);
      }

      break;
    case InteractionType.ModalSubmit:
      context = new ModalSubmitContext(app, interaction, responseCallback);
      hook = "modal";

      break;
    default:
      throw new UnknownInteractionType(interaction);
  }

  return [
    context,
    app.hooks[hook as keyof InteractionHooks] as ((context: InteractionContext) => Promise<void | true>)[]
  ];
}

export async function _handleInteraction(
  this: DiscordApplication,
  interaction: APIInteraction,
  responseCallback: ResponseCallback
): Promise<InteractionContext> {
  const executionContext = getExecutionContext(this, interaction, responseCallback);

  // eslint-disable-next-line prefer-const
  let [context, hooks] = executionContext;

  for (const hook of hooks) {
    const result = await hook(context);

    if (result === true) return context;
  }

  switch (context.constructor) {
    case PingContext:
      (context as PingContext).reply();
      break;
    case SlashCommandContext:
    case AutocompleteContext: {
      context = context as SlashCommandContext | AutocompleteContext;

      const parentName = context.parentCommand ?? context.name;

      let command = context.manager.commands.slash.get(parentName);

      if (!command) {
        throw new InteractionHandlerNotFound(context.interaction);
      }

      if (context.interaction.guild_id) {
        const guildCommand = context.manager.guildCommands?.get(context.interaction.guild_id)?.slash?.get(parentName);

        if (guildCommand?.id === context.interaction.data.id) {
          command = guildCommand;
        }
      }

      let handler: (ctx: SlashCommandContext | AutocompleteContext) => Promise<void>;

      if ("handlers" in command) {
        let handlers: ISubcommandHandler | undefined;

        if (context.group) {
          const group = command.handlers[context.group] as ISubcommandGroup | undefined;

          handlers = group?.[context.name];
        } else {
          handlers = command.handlers[context.name] as ISubcommandHandler | undefined;
        }

        if (!handlers) throw new InteractionHandlerNotFound(context.interaction);

        handler = (
          context instanceof AutocompleteContext && handlers.autocompleteHandler !== undefined
            ? handlers.autocompleteHandler
            : handlers.handler
        ) as (ctx: SlashCommandContext | AutocompleteContext) => Promise<void>;
      } else {
        handler = (
          context instanceof AutocompleteContext && command.autocompleteHandler !== undefined
            ? command.autocompleteHandler
            : command.handler
        ) as (ctx: SlashCommandContext | AutocompleteContext) => Promise<void>;
      }

      if (!handler) throw new InteractionHandlerNotFound(context.interaction);

      await handler(context);

      break;
    }
    case UserCommandContext:
    case MessageCommandContext: {
      context = context as UserCommandContext | MessageCommandContext;

      const command = (
        context.interaction.guild_id
          ? context.manager.guildCommands
              ?.get(context.interaction.guild_id)
              ?.get(context.name, context.interaction.data.type) ??
            context.manager.commands.get(context.name, context.interaction.data.type)
          : context.manager.commands.get(context.name, context.interaction.data.type)
      ) as RegisteredMessageCommand | RegisteredUserCommand | undefined;

      if (!command) throw new InteractionHandlerNotFound(context.interaction);

      await command.handler(context as UserCommandContext & MessageCommandContext);

      break;
    }
    case ButtonContext:
    case SelectMenuContext:
    case ModalSubmitContext: {
      context = context as ButtonContext<never> & SelectMenuContext<never> & ModalSubmitContext<never>;

      await context._fetchState();

      const component = context.manager.components.get(context.id);

      if (!component) throw new InteractionHandlerNotFound(context.interaction);

      await component.handler(context as ButtonContext<never> & SelectMenuContext<never> & ModalSubmitContext<never>);

      break;
    }
  }

  return context;
}
