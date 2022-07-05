import {
  AutocompleteContext,
  MessageCommandContext,
  SlashCommandContext,
  UserCommandContext
} from "./ApplicationCommand";
import { ButtonContext, SelectMenuContext } from "./ComponentContext";
import { ModalSubmitContext } from "./ModalSubmitContext";
import { PingContext } from "./PingContext";

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
