import { InteractionResponseType } from "discord-api-types/v10";
import type { ResponseCallback } from "../DiscordApplication";

export class PingContext {
  constructor(public responseCallback: ResponseCallback) {
    this.responseCallback = responseCallback;
  }

  reply(): void {
    this.responseCallback({ type: InteractionResponseType.Pong });
  }
}
