import { APIInteraction, APIInteractionResponse, APIUser } from "discord-api-types/v10";
import { DiscordApplication, InteractionResponseAlreadySent, ResponseCallback } from "..";

// lasts 15 minutes, 5s buffer to be safe
const InteractionTokenExpiryTime = 15 * 60 * 1000 - 5000;

export class BaseInteractionContext<
  T extends APIInteraction = APIInteraction,
  R extends APIInteractionResponse = APIInteractionResponse
> {
  private responseCallback: ResponseCallback<R>;
  protected replied = false;

  private repliedAt: number | undefined;
  public get expired(): boolean {
    if (!this.replied) return false;
    return (this.repliedAt as number) + InteractionTokenExpiryTime < Date.now();
  }

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
  }

  protected async _reply(message: R): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);

    this.replied = true;
    this.repliedAt = Date.now();

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