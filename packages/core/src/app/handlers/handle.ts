import {
  APIChatInputApplicationCommandInteraction,
  APIInteraction,
  APIMessageApplicationCommandInteraction,
  APIMessageChannelSelectInteractionData,
  APIMessageComponentButtonInteraction,
  APIMessageMentionableSelectInteractionData,
  APIMessageRoleSelectInteractionData,
  APIMessageStringSelectInteractionData,
  APIMessageUserSelectInteractionData,
  APIUserApplicationCommandInteraction,
  ApplicationCommandType,
  ComponentType,
  InteractionType
} from "discord-api-types/v10";
import {
  InteractionHandlerError,
  InteractionHandlerNotFound,
  InteractionStateExpired,
  UnknownApplicationCommandType,
  UnknownInteractionType
} from "../../util/errors.js";
import { SelectMenuInteraction } from "../contexts/components/select_menus/BaseSelectMenuContext.js";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import {
  AutocompleteContext,
  ButtonContext,
  ChannelSelectMenuContext,
  ComponentContext,
  InteractionContext,
  ISubcommandGroup,
  ISubcommandHandler,
  MentionableSelectMenuContext,
  MessageCommandContext,
  ModalSubmitContext,
  PingContext,
  RegisteredMessageCommand,
  RegisteredUserCommand,
  RoleSelectMenuContext,
  SlashCommandContext,
  StringSelectMenuContext,
  UserCommandContext,
  UserSelectMenuContext
} from "../index.js";
import { InteractionHooks } from "./Hooks.js";

function getExecutionContext(
  app: DiscordApplication,
  interaction: APIInteraction,
  timestamps: { signature: Date; received: Date },
  responseCallback: ResponseCallback
): [InteractionContext, ((context: InteractionContext) => Promise<void | true>)[]] {
  let context, hook;

  switch (interaction.type) {
    case InteractionType.Ping:
      context = new PingContext(timestamps, responseCallback);
      hook = "ping";

      break;
    case InteractionType.ApplicationCommand:
      switch (interaction.data.type) {
        case ApplicationCommandType.ChatInput:
          context = new SlashCommandContext(
            app,
            interaction as APIChatInputApplicationCommandInteraction,
            timestamps,
            responseCallback
          );
          hook = "command.slash";

          break;
        case ApplicationCommandType.User:
          context = new UserCommandContext(
            app,
            interaction as APIUserApplicationCommandInteraction,
            timestamps,
            responseCallback
          );
          hook = "command.user";

          break;
        case ApplicationCommandType.Message:
          context = new MessageCommandContext(
            app,
            interaction as APIMessageApplicationCommandInteraction,
            timestamps,
            responseCallback
          );
          hook = "command.message";

          break;
        default:
          throw new UnknownApplicationCommandType(interaction);
      }

      break;
    case InteractionType.ApplicationCommandAutocomplete:
      context = new AutocompleteContext(app, interaction, timestamps, responseCallback);
      hook = "command.autocomplete";

      break;
    case InteractionType.MessageComponent:
      switch (interaction.data.component_type) {
        case ComponentType.Button:
          context = new ButtonContext(
            app,
            interaction as APIMessageComponentButtonInteraction,
            timestamps,
            responseCallback
          );
          hook = "component.button";

          break;
        case ComponentType.StringSelect:
          context = new StringSelectMenuContext(
            app,
            interaction as SelectMenuInteraction<APIMessageStringSelectInteractionData>,
            timestamps,
            responseCallback
          );
          hook = "component.selectMenu";

          break;
        case ComponentType.UserSelect:
          context = new UserSelectMenuContext(
            app,
            interaction as SelectMenuInteraction<APIMessageUserSelectInteractionData>,
            timestamps,
            responseCallback
          );
          hook = "component.selectMenu";

          break;
        case ComponentType.RoleSelect:
          context = new RoleSelectMenuContext(
            app,
            interaction as SelectMenuInteraction<APIMessageRoleSelectInteractionData>,
            timestamps,
            responseCallback
          );
          hook = "component.selectMenu";

          break;
        case ComponentType.MentionableSelect:
          context = new MentionableSelectMenuContext(
            app,
            interaction as SelectMenuInteraction<APIMessageMentionableSelectInteractionData>,
            timestamps,
            responseCallback
          );
          hook = "component.selectMenu";

          break;
        case ComponentType.ChannelSelect:
          context = new ChannelSelectMenuContext(
            app,
            interaction as SelectMenuInteraction<APIMessageChannelSelectInteractionData>,
            timestamps,
            responseCallback
          );
          hook = "component.selectMenu";

          break;
        default:
          throw new UnknownInteractionType(interaction);
      }

      break;
    case InteractionType.ModalSubmit:
      context = new ModalSubmitContext(app, interaction, timestamps, responseCallback);
      hook = "modal";

      break;
    default:
      throw new UnknownInteractionType(interaction);
  }

  return [
    context,
    [...app.hooks["interaction"], ...app.hooks[hook as keyof InteractionHooks]] as ((
      context: InteractionContext
    ) => Promise<void | true>)[]
  ];
}

export async function _handleInteraction(
  this: DiscordApplication,
  interaction: APIInteraction,
  timestamps: { signature: Date; received: Date },
  responseCallback: ResponseCallback
): Promise<InteractionContext> {
  let [context, hooks] = getExecutionContext(this, interaction, timestamps, responseCallback);

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

      let command = this.commands[ApplicationCommandType.ChatInput].get(parentName);

      if (!command) {
        throw new InteractionHandlerNotFound(interaction);
      }

      if (context.commandGuildId) {
        const guildCommand = this.guildCommands
          ?.get(context.commandGuildId)
          ?.[ApplicationCommandType.ChatInput]?.get(parentName);

        if (guildCommand !== undefined && guildCommand.id === context.commandGuildId) {
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

        if (!handlers) throw new InteractionHandlerNotFound(interaction);

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

      if (!handler) throw new InteractionHandlerNotFound(interaction);

      try {
        await handler(context);
      } catch (err: unknown) {
        throw new InteractionHandlerError(interaction, err);
      }

      break;
    }
    case UserCommandContext:
    case MessageCommandContext: {
      context = context as UserCommandContext | MessageCommandContext;
      interaction = interaction as APIUserApplicationCommandInteraction | APIMessageApplicationCommandInteraction;

      const command = (
        interaction.guild_id
          ? this.guildCommands?.get(interaction.guild_id)?.get(context.name, interaction.data.type) ??
            this.commands[interaction.data.type].get(context.name)
          : this.commands[interaction.data.type].get(context.name)
      ) as RegisteredMessageCommand | RegisteredUserCommand | undefined;

      if (!command) throw new InteractionHandlerNotFound(interaction);

      try {
        await command.handler(context as UserCommandContext & MessageCommandContext);
      } catch (err: unknown) {
        throw new InteractionHandlerError(interaction, err);
      }

      break;
    }

    case ButtonContext:
    case StringSelectMenuContext:
    case UserSelectMenuContext:
    case RoleSelectMenuContext:
    case MentionableSelectMenuContext:
    case ChannelSelectMenuContext:
    case ModalSubmitContext: {
      context = context as ComponentContext<never>;

      try {
        await context.fetchState();
      } catch (e) {
        if (e instanceof InteractionStateExpired) {
          if (!context.allowExpired) throw e;
        } else {
          console.error("Unknown error fetching interaction state: ", e);
        }
      }

      const component = this.components.get(context.id);

      if (!component) throw new InteractionHandlerNotFound(interaction);

      try {
        await component.handler(context as any);
      } catch (err: unknown) {
        throw new InteractionHandlerError(interaction, err);
      }

      break;
    }
  }

  return context;
}
