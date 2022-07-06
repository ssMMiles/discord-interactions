import type {
  AutocompleteContext,
  MessageCommandContext,
  SlashCommandContext,
  UserCommandContext
} from "./ApplicationCommand";
import type { ButtonContext, SelectMenuContext } from "./ComponentContext";
import type { ModalSubmitContext } from "./ModalSubmitContext";
import type { PingContext } from "./PingContext";

export * from "./ApplicationCommand";
export * from "./Base";
export * from "./ComponentContext";
export * from "./ModalSubmitContext";
export * from "./PingContext";

export type InteractionContext =
  | PingContext
  | SlashCommandContext
  | UserCommandContext
  | MessageCommandContext
  | AutocompleteContext
  | ButtonContext
  | SelectMenuContext
  | ModalSubmitContext;
