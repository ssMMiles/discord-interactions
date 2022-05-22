import {
  APIApplicationCommandAutocompleteResponse,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseDeferredChannelMessageWithSource,
  APIInteractionResponseDeferredMessageUpdate,
  APIInteractionResponseUpdateMessage,
  APIModalInteractionResponse
} from "discord-api-types/v10";

export type MessageUpdateResponse =
  | APIModalInteractionResponse
  | APIInteractionResponseUpdateMessage
  | APIInteractionResponseDeferredMessageUpdate;

export type ChannelMessageResponse =
  | APIModalInteractionResponse
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource;

export type AutocompleteResponse = APIApplicationCommandAutocompleteResponse;

export type ModalSubmitResponse =
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource;
