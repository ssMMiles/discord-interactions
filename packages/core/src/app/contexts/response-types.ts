import type {
  APIApplicationCommandAutocompleteResponse,
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseDeferredChannelMessageWithSource,
  APIInteractionResponseDeferredMessageUpdate,
  APIInteractionResponseLaunchActivity,
  APIInteractionResponseUpdateMessage,
  APIModalInteractionResponse
} from "discord-api-types/v10";
import { FormData } from "formdata-node";

export type MessageUpdateResponse =
  | APIModalInteractionResponse
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource
  | APIInteractionResponseUpdateMessage
  | APIInteractionResponseDeferredMessageUpdate
  | APIInteractionResponseLaunchActivity
  | FormData;

export type ChannelMessageResponse =
  | APIModalInteractionResponse
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource
  | APIInteractionResponseLaunchActivity
  | FormData;

export type AutocompleteResponse = APIApplicationCommandAutocompleteResponse;

export type ModalSubmitResponse =
  | APIInteractionResponseChannelMessageWithSource
  | APIInteractionResponseDeferredChannelMessageWithSource
  | APIInteractionResponseUpdateMessage
  | APIInteractionResponseDeferredMessageUpdate
  | APIInteractionResponseLaunchActivity
  | FormData;
