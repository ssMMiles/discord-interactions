import { Bitfield, ButtonBuilder, ModalBuilder, SelectMenuBuilder } from "@discord-interactions/builders";
import { Snowflake } from "discord-api-types/globals";
import {
  APIGuildMember,
  APIInteraction,
  APIInteractionResponse,
  APIMessageComponentInteraction,
  APIModalSubmitInteraction,
  APIUser,
  Locale
} from "discord-api-types/v10";
import { LocaleString } from "discord-api-types/v6";
import type { FormData } from "formdata-node";
import { InteractionResponseAlreadySent, InteractionStateExpired } from "../../util/errors.js";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import { WebhookClient } from "../WebhookClient.js";

// lasts 15 minutes, 5s buffer to be safe
const InteractionTokenExpiryTime = 15 * 60 * 1000 - 5000;

export class ClientPermissions extends Bitfield {
  add(): this {
    throw new Error("ClientPermissions is read-only");
  }

  remove(): this {
    throw new Error("ClientPermissions is read-only");
  }

  allowAll(): this {
    throw new Error("ClientPermissions is read-only");
  }

  disallowAll(): this {
    throw new Error("ClientPermissions is read-only");
  }
}

export class BaseInteractionContext<
  T extends APIInteraction = APIInteraction,
  R extends APIInteractionResponse | FormData = APIInteractionResponse
> {
  private readonly responseCallback: ResponseCallback<R>;
  protected replied = false;

  private repliedAt: number | undefined;
  public get expired(): boolean {
    if (!this.replied) return false;
    return (this.repliedAt as number) + InteractionTokenExpiryTime < Date.now();
  }

  public readonly app: DiscordApplication;

  public readonly raw?: T;
  public readonly interactionId: Snowflake;

  protected readonly followup: WebhookClient;
  public readonly app_permissions: Bitfield;

  public readonly isDM: boolean;

  public readonly guildId?: Snowflake;
  public readonly channelId?: Snowflake;

  public readonly user: APIUser;
  public readonly member?: APIGuildMember;

  public readonly locale: LocaleString;
  public readonly guildLocale?: LocaleString;

  constructor(app: DiscordApplication, interaction: T, responseCallback: ResponseCallback<R>) {
    this.responseCallback = responseCallback;

    this.app = app;
    if (this.app.preserveRaw) this.raw = interaction;

    this.interactionId = interaction.id;

    this.followup = new WebhookClient(interaction.application_id, interaction.token, this.app.rest);
    this.app_permissions = new ClientPermissions(BigInt(interaction.app_permissions ?? "0"));

    this.isDM = interaction.user !== undefined;

    this.user = (this.isDM ? interaction.user : interaction?.member?.user) as APIUser;
    this.member = interaction.member;

    // Locale shouldn't exist for PING interactions, but oh well
    this.locale = "locale" in interaction ? interaction.locale : Locale.EnglishUS;
    this.guildLocale = interaction.guild_locale;
  }

  protected async _reply(message: R): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent();

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

  async createGlobalComponent<
    Builder extends ButtonBuilder | SelectMenuBuilder | ModalBuilder = ButtonBuilder | SelectMenuBuilder
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return this.app.components.createInstance(name, state, ttl);
  }
}

export class BaseStatefulInteractionContext<
  S = never,
  T extends APIMessageComponentInteraction | APIModalSubmitInteraction = APIMessageComponentInteraction,
  R extends APIInteractionResponse | FormData = APIInteractionResponse
> extends BaseInteractionContext<T, R> {
  public readonly id: string;
  private readonly stateRef: string;

  public readonly state: S = {} as S;

  public readonly allowExpired: boolean = false;
  public readonly parentCommand?: string;

  constructor(app: DiscordApplication, interaction: T, responseCallback: ResponseCallback<R>) {
    super(app, interaction, responseCallback);

    const custom_id = interaction.data.custom_id.split("|");

    this.id = custom_id[0];
    this.stateRef = custom_id[1] ?? "{}";

    const builder = app.components.get(this.id);
    if (builder) this.allowExpired = builder.allowExpired;

    if (builder && builder.parentCommand) this.parentCommand = builder.parentCommand;
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilder | ModalBuilder = ButtonBuilder | SelectMenuBuilder
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return this.app.components.createInstance(this.parentCommand ? `${this.parentCommand}.${name}` : name, state, ttl);
  }

  async fetchState(): Promise<void> {
    let dataStr = this.stateRef;

    if (!this.stateRef.startsWith("{") && this.app.components.cache) {
      const result = await this.app.components.cache.get(this.stateRef);
      if (!result) throw new InteractionStateExpired();

      dataStr = result;
    }

    // Disgusting
    const mutableThis = this as unknown as Mutable<BaseStatefulInteractionContext>;
    try {
      mutableThis.state = JSON.parse(dataStr) as never;
    } catch (err) {
      throw err;
    }
  }
}
