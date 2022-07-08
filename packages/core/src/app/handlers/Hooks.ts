import {
  AutocompleteContext,
  ButtonContext,
  InteractionContext,
  MessageCommandContext,
  ModalSubmitContext,
  PingContext,
  SelectMenuContext,
  SlashCommandContext,
  UserCommandContext
} from "../index.js";

export type ContextMap = {
  ping: PingContext;

  interaction: InteractionContext;

  "command.slash": SlashCommandContext;
  "command.autocomplete": AutocompleteContext;
  "command.user": UserCommandContext;
  "command.message": MessageCommandContext;

  "component.button": ButtonContext;
  "component.selectMenu": SelectMenuContext;

  modal: ModalSubmitContext;
};

/**
 * Hooks to be executed on receiving an interaction. These are executed before command handlers, and will abort further handling the interaction upon returning true.
 */
export type InteractionHooks = {
  /** This hook runs first for all types of interaction. */
  interaction: ((ctx: InteractionContext) => Promise<void | true>)[];

  ping: ((context: PingContext) => Promise<void | true>)[];

  "command.slash": ((ctx: SlashCommandContext) => Promise<void | true>)[];
  "command.autocomplete": ((ctx: AutocompleteContext) => Promise<void | true>)[];
  "command.user": ((ctx: UserCommandContext) => Promise<void | true>)[];
  "command.message": ((ctx: MessageCommandContext) => Promise<void | true>)[];

  "component.button": ((ctx: ButtonContext) => Promise<void | true>)[];
  "component.selectMenu": ((ctx: SelectMenuContext) => Promise<void | true>)[];

  modal: ((ctx: ModalSubmitContext) => Promise<void | true>)[];
};
