import {
  APIApplicationCommandAutocompleteResponse,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseDeferredChannelMessageWithSource,
  APIInteractionResponseDeferredMessageUpdate,
  APIInteractionResponseUpdateMessage
} from "discord-api-types/v10";

export type MessageUpdateResponse = APIInteractionResponseUpdateMessage | APIInteractionResponseDeferredMessageUpdate;

export type ChannelMessageResponse =
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource;

export type AutocompleteResponse = APIApplicationCommandAutocompleteResponse;
