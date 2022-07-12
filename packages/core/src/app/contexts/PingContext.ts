import { InteractionResponseType } from "discord-api-types/v10";
import { ResponseCallback } from "../DiscordApplication.js";

export class PingContext {
  public signedAt: Date;
  public receivedAt: Date;

  public responseCallback: ResponseCallback;

  constructor(timestamps: { signature: Date; received: Date }, responseCallback: ResponseCallback) {
    this.signedAt = timestamps.signature;
    this.receivedAt = timestamps.received;

    this.responseCallback = responseCallback;
  }

  reply(): void {
    this.responseCallback({ type: InteractionResponseType.Pong });
  }
}
