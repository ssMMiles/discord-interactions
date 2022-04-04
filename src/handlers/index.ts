import {
  APIInteraction,
  APIInteractionResponse,
  InteractionResponseType,
  InteractionType
} from "discord-api-types/v10";
import { UnauthorizedInteraction, UnknownInteractionType } from "..";
import { DiscordApplication } from "../structs";
import { handleApplicationCommand, handleCommandAutocomplete } from "./ApplicationCommand";
import { handleMessageComponent } from "./Component";

export function handleInteraction(
  this: DiscordApplication,
  body: string,
  signature: string | false,
  timestamp?: string
): Promise<APIInteractionResponse> {
  if (
    signature !== false &&
    (!timestamp || !DiscordApplication.verifyInteractionSignature(this.publicKey, signature, timestamp, body))
  ) {
    throw new UnauthorizedInteraction(body);
  }

  const interaction = JSON.parse(body) as APIInteraction;

  switch (interaction.type) {
    case InteractionType.Ping:
      return Promise.resolve({ type: InteractionResponseType.Pong });
    case InteractionType.ApplicationCommand:
      return handleApplicationCommand(this, interaction);
    case InteractionType.ApplicationCommandAutocomplete:
      return handleCommandAutocomplete(this, interaction);
    case InteractionType.MessageComponent:
      return handleMessageComponent(this, interaction);
    default:
      throw new UnknownInteractionType(interaction);
  }
}

export * from "./ApplicationCommand";
export * from "./Component";
