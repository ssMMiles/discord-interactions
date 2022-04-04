import { APIInteraction } from "discord-api-types/v10";

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

export class InteractionResponseAlreadySent extends InteractionError {
  constructor(interaction: APIInteraction) {
    super(`Interaction Response Already Sent`, interaction);
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
