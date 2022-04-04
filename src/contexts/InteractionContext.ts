import { APIInteraction, APIInteractionResponse, APIUser } from "discord-api-types/v10";
import { DiscordApplication, InteractionHandlerTimedOut, InteractionResponseAlreadySent } from "..";

// lasts 15 minutes, 5s buffer to be safe
const InteractionTokenExpiryTime = 15 * 60 * 1000 - 5000;

class Response<T> {
  promise: Promise<T>;

  resolve!: (response: T) => void;
  reject!: (error: Error) => void;

  constructor(timeout: NodeJS.Timeout) {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (response) => {
        clearTimeout(timeout);
        resolve(response);
      };
      this.reject = reject;
    });
  }
}

export class InteractionContext<T extends APIInteraction = APIInteraction, R = APIInteractionResponse> {
  private _response: Response<R>;
  protected replied = false;

  /** Internal, used to resolve initial reply */
  public response: Promise<R>;

  private invokedAt: number = Date.now();
  public get expired(): boolean {
    return this.invokedAt + InteractionTokenExpiryTime < Date.now();
  }

  private _timeout: NodeJS.Timeout;

  public manager: DiscordApplication;

  public interaction: T;
  public user: APIUser;

  public isDM: boolean;

  constructor(manager: DiscordApplication, interaction: T) {
    this.manager = manager;
    this.interaction = interaction;

    this.isDM = this.interaction.user !== undefined;
    this.user = (this.isDM ? this.interaction.user : this.interaction?.member?.user) as APIUser;

    this._timeout = setTimeout(() => {
      this._response.reject(new InteractionHandlerTimedOut(this.interaction));
    }, this.manager.timeout);

    this._response = new Response(this._timeout);
    this.response = this._response.promise;
  }

  protected _reply<T extends R>(message: R): Promise<T> {
    if (this.replied) throw new InteractionResponseAlreadySent(this.interaction);
    this.replied = true;

    if (this._timeout) clearTimeout(this._timeout);

    this._response.resolve(message);

    return this.response as Promise<T>;
  }

  decorate(key: string, value: unknown): void {
    const data: Record<string, unknown> = {};
    data[key] = value;

    Object.assign(this, data);
  }
}
