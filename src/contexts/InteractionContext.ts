import { APIInteraction, APIInteractionResponse, APIUser } from "discord-api-types/v10";
import { DiscordApplication, InteractionHandlerTimedOut, InteractionResponseAlreadySent, ResponseCallback } from "..";

// lasts 15 minutes, 5s buffer to be safe
const InteractionTokenExpiryTime = 15 * 60 * 1000 - 5000;

export class InteractionContext<
  T extends APIInteraction = APIInteraction,
  R extends APIInteractionResponse = APIInteractionResponse
> {
  private responseCallback: ResponseCallback<R>;
  protected replied = false;

  private invokedAt: number = Date.now();
  public get expired(): boolean {
    return this.invokedAt + InteractionTokenExpiryTime < Date.now();
  }

  private _timeout: NodeJS.Timeout;

  public manager: DiscordApplication;

  public interaction: T;
  public user: APIUser;

  public isDM: boolean;

  constructor(manager: DiscordApplication, interaction: T, responseCallback: ResponseCallback<R>) {
    this.responseCallback = responseCallback;

    this.manager = manager;
    this.interaction = interaction;

    this.isDM = this.interaction.user !== undefined;
    this.user = (this.isDM ? this.interaction.user : this.interaction?.member?.user) as APIUser;

    this._timeout = setTimeout(() => {
      throw new InteractionHandlerTimedOut(this.interaction);
    }, this.manager.timeout);
  }

  protected async _reply(message: R): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);
    this.replied = true;

    clearTimeout(this._timeout);
    return this.responseCallback(message);
  }

  rawReply(message: R): Promise<void> {
    return this._reply(message);
  }

  decorate(key: string, value: unknown): void {
    const data: Record<string, unknown> = {};
    data[key] = value;

    Object.assign(this, data);
  }
}
