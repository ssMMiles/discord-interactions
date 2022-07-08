import type {
  AutocompleteContext,
  MessageCommandContext,
  SlashCommandContext,
  UserCommandContext
} from "./ApplicationCommand/index.js";
import type { ButtonContext, SelectMenuContext } from "./ComponentContext.js";
import type { ModalSubmitContext } from "./ModalSubmitContext.js";
import type { PingContext } from "./PingContext.js";

export * from "./ApplicationCommand/index.js";
export * from "./ComponentContext.js";
export * from "./ModalSubmitContext.js";
export * from "./PingContext.js";

export type InteractionContext =
  | PingContext
  | SlashCommandContext
  | UserCommandContext
  | MessageCommandContext
  | AutocompleteContext
  | ButtonContext
  | SelectMenuContext
  | ModalSubmitContext;
