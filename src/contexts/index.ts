import {
  AutocompleteContext,
  ButtonContext,
  MessageCommandContext,
  PingContext,
  SelectMenuContext,
  SlashCommandContext,
  UserCommandContext
} from "..";

export * from "./ApplicationCommand";
export * from "./BaseInteractionContext";
export * from "./ComponentContext";
export * from "./PingContext";

export type InteractionContext =
  | PingContext
  | SlashCommandContext
  | UserCommandContext
  | MessageCommandContext
  | AutocompleteContext
  | ButtonContext
  | SelectMenuContext;
