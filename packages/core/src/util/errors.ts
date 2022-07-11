import type { APIInteraction, APIInteractionResponse } from "discord-api-types/v10";
import { BaseInteractionContext } from "../app/contexts/Base.js";

export class UnauthorizedInteraction extends Error {
  public body: string;

  constructor(body: string) {
    super(`Unauthorized Interaction`);

    this.body = body;
  }
}

export class InteractionError extends Error {
  public interaction: APIInteraction;

  constructor(message: string, interaction: APIInteraction) {
    super(message);

    this.interaction = interaction;
  }
}

export class InteractionContextError extends Error {
  public context: BaseInteractionContext<APIInteraction, APIInteractionResponse>;

  constructor(message: string, context: BaseInteractionContext<APIInteraction, APIInteractionResponse>) {
    super(message);

    this.context = context;
  }
}

export class UnknownInteractionType extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Unknown Interaction Type: ${interaction.type}`, interaction);
  }
}

export class UnknownApplicationCommandType extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Unknown Interaction Type: ${interaction.type}`, interaction);
  }
}

export class UnknownComponentType extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Unknown Interaction Type: ${interaction.type}`, interaction);
  }
}

export class InteractionResponseAlreadySent extends Error {
  constructor() {
    super(`Interaction Response Already Sent`);
  }
}

export class InteractionTokenExpired extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Interaction Token Expired`, interaction);
  }
}

export class InteractionHandlerTimedOut extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Interaction Handler Timed Out`, interaction);
  }
}

export class InteractionHandlerNotFound extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Interaction Handler Not Found`, interaction);
  }
}

export class InteractionStateExpired extends Error {
  constructor() {
    super(`Interaction State Expired`);
  }
}

export class InteractionHandlerError extends InteractionError {
  public cause: unknown;

  constructor(interaction: APIInteraction, error: unknown) {
    super(`Interaction Handler Error`, interaction);

    this.cause = error;
  }
}

export type PossibleInteractionErrors =
  | UnauthorizedInteraction
  | UnknownInteractionType
  | UnknownApplicationCommandType
  | UnknownComponentType
  | InteractionResponseAlreadySent
  | InteractionTokenExpired
  | InteractionHandlerTimedOut
  | InteractionHandlerNotFound
  | InteractionStateExpired;
