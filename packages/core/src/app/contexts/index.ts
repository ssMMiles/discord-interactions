import type {
  AutocompleteContext,
  MessageCommandContext,
  SlashCommandContext,
  UserCommandContext
} from "./application_commands/index.js";

import type {
  ButtonContext,
  ChannelSelectMenuContext,
  MentionableSelectMenuContext,
  RoleSelectMenuContext,
  StringSelectMenuContext,
  UserSelectMenuContext
} from "./components/index.js";
import type { ModalSubmitContext } from "./ModalSubmitContext.js";
import type { PingContext } from "./PingContext.js";

export * from "./application_commands/index.js";
export * from "./components/index.js";
export * from "./ModalSubmitContext.js";
export * from "./PingContext.js";

export type InteractionContext =
  | ApplicationCommandContext
  | ComponentContext
  | AutocompleteContext
  | ModalSubmitContext
  | PingContext;

export type ApplicationCommandContext = SlashCommandContext | UserCommandContext | MessageCommandContext;

export type ComponentContext<S = never> = ButtonContext<S> | SelectMenuContext<S>;
export type SelectMenuContext<S = never> =
  | StringSelectMenuContext<S>
  | UserSelectMenuContext<S>
  | RoleSelectMenuContext<S>
  | ChannelSelectMenuContext<S>
  | MentionableSelectMenuContext<S>;
