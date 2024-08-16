import { Bitfield, ButtonBuilder, ModalBuilder, SelectMenuBuilders } from "@discord-interactions/builders";
import { Snowflake } from "discord-api-types/globals";
import {
  APIInteraction,
  APIInteractionResponse,
  APIMessageComponentInteraction,
  APIModalSubmitInteraction,
  APIUser,
  Locale
} from "discord-api-types/v10";
import { LocaleString } from "discord-api-types/v6";
import { APIInteractionGuildMember } from "discord-api-types/v9";
import type { FormData } from "formdata-node";
import { InteractionResponseAlreadySent, InteractionStateExpired } from "../../util/errors.js";
import { DiscordApplication, ResponseCallback } from "../DiscordApplication.js";
import { WebhookClient } from "../WebhookClient.js";

// 15 minute token, minus 250ms to account for latency
const TokenExpiryOffset = isNaN(Number(process.env.TOKEN_EXPIRY_OFFSET))
  ? 250
  : Number(process.env.TOKEN_EXPIRY_OFFSET);
const InteractionTokenExpiryTime = 15 * 60 * 1000 - TokenExpiryOffset;

export class BaseInteractionContext<
  T extends APIInteraction = APIInteraction,
  R extends APIInteractionResponse | FormData = APIInteractionResponse
> {
  private responseCallback: ResponseCallback<R>;
  protected replied = false;

  private repliedAt: number | undefined;
  public get expired(): boolean {
    if (!this.replied) return false;
    return (this.repliedAt as number) + InteractionTokenExpiryTime < Date.now();
  }

  public app: DiscordApplication;

  public signedAt: Date;
  public receivedAt: Date;

  public raw?: T;
  public interactionId: Snowflake;

  protected followup: WebhookClient;
  public app_permissions: Bitfield;

  public isDM: boolean;

  public guildId?: Snowflake;
  public channelId?: Snowflake;

  public user: APIUser;
  public member?: APIInteractionGuildMember;

  public locale: LocaleString;
  public guildLocale?: LocaleString;

  constructor(
    app: DiscordApplication,
    interaction: T,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<R>
  ) {
    this.responseCallback = responseCallback;

    this.app = app;
    if (this.app.preserveRaw) this.raw = interaction;

    this.interactionId = interaction.id;

    this.signedAt = timestamps.signature;
    this.receivedAt = timestamps.received;

    this.followup = new WebhookClient(interaction.application_id, interaction.token, this.app.rest);
    this.app_permissions = new Bitfield(BigInt(interaction.app_permissions ?? "0"));

    this.isDM = interaction.user !== undefined;

    if (!this.isDM) {
      this.guildId = interaction.guild_id;
      this.channelId = interaction.channel_id;

      this.guildLocale = interaction.guild_locale;
    }

    this.user = (this.isDM ? interaction.user : interaction?.member?.user) as APIUser;
    this.member = interaction.member;

    this.locale = "locale" in interaction ? interaction.locale : Locale.EnglishUS;
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
    Builder extends ButtonBuilder | SelectMenuBuilders | ModalBuilder = ButtonBuilder | SelectMenuBuilders
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return this.app.components.createInstance(name, state, ttl);
  }
}

export class BaseStatefulInteractionContext<
  S = never,
  T extends APIMessageComponentInteraction | APIModalSubmitInteraction = APIMessageComponentInteraction,
  R extends APIInteractionResponse | FormData = APIInteractionResponse
> extends BaseInteractionContext<T, R> {
  public id: string;
  private stateRef: string;

  public state: S = {} as S;

  public allowExpired = false;
  public parentCommand?: string;

  constructor(
    app: DiscordApplication,
    interaction: T,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<R>
  ) {
    super(app, interaction, timestamps, responseCallback);

    const custom_id = interaction.data.custom_id;
    const id_border = custom_id.indexOf("|");

    this.id = id_border !== -1 ? custom_id.substring(0, id_border) : custom_id;
    this.stateRef = id_border !== -1 ? custom_id.substring(id_border + 1) : "{}";

    const builder = app.components.get(this.id);
    if (builder) this.allowExpired = builder.allowExpired;

    if (builder && builder.parentCommand) this.parentCommand = builder.parentCommand;
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilders | ModalBuilder = ButtonBuilder | SelectMenuBuilders
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

    try {
      this.state = JSON.parse(dataStr) as never;
    } catch (err) {
      throw err;
    }
  }
}
