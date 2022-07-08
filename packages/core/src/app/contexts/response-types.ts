import type {
  APIApplicationCommandAutocompleteResponse,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseDeferredChannelMessageWithSource,
  APIInteractionResponseDeferredMessageUpdate,
  APIInteractionResponseUpdateMessage,
  APIModalInteractionResponse
} from "discord-api-types/v10";
import { FormData } from "formdata-node";

export type MessageUpdateResponse =
  | APIModalInteractionResponse
  | APIInteractionResponseUpdateMessage
  | APIInteractionResponseDeferredMessageUpdate
  | FormData;

export type ChannelMessageResponse =
  | APIModalInteractionResponse
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource
  | FormData;

export type AutocompleteResponse = APIApplicationCommandAutocompleteResponse;

export type ModalSubmitResponse =
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource
  | FormData;
