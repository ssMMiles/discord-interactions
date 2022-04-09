import {
  AutocompleteContext,
  ButtonContext,
  MessageCommandContext,
  SelectMenuContext,
  SlashCommandContext,
  UserCommandContext
} from "..";
import { PingContext } from "./PingContext";

export * from "./ApplicationCommand";
export * from "./BaseInteractionContext";
export * from "./ComponentContext";

export type InteractionContext =
  | PingContext
  | SlashCommandContext
  | UserCommandContext
  | MessageCommandContext
  | AutocompleteContext
  | ButtonContext
  | SelectMenuContext;
