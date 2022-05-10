import { REST } from "@discordjs/rest";
import { APIInteraction, APIInteractionResponse, Snowflake } from "discord-api-types/v10";
import { sign } from "tweetnacl";
import {
  AutocompleteContext,
  ButtonContext,
  CommandManager,
  ComponentManager,
  InteractionContext,
  InteractionHandlerTimedOut,
  MessageCommandContext,
  PingContext,
  SelectMenuContext,
  SlashCommandContext,
  UnauthorizedInteraction,
  UserCommandContext
} from "..";
import { _handleInteraction } from "../handlers/handleInteraction";

/**
 * Callback to be executed with the result of an interaction.
 */
export type ResponseCallback<T extends APIInteractionResponse = APIInteractionResponse> = (
  response: T
) => Promise<void>;

/**
 * Hooks to be executed on receiving an interaction. These are executed before command handlers, and will abort further handling the interaction on returning true;
 */
export interface InteractionHooks {
  /** Pings */
  ping?: (context: PingContext) => Promise<void | true>;

  /** This hook will run first on all incoming interactions. */
  interaction?: (ctx: InteractionContext) => Promise<void | true>;

  command?: {
    slash?: (ctx: SlashCommandContext) => Promise<void | true>;
    autocomplete?: (ctx: AutocompleteContext) => Promise<void | true>;
    user?: (ctx: UserCommandContext) => Promise<void | true>;
    message?: (ctx: MessageCommandContext) => Promise<void | true>;
  };

  component?: {
    button?: (ctx: ButtonContext) => Promise<void | true>;
    selectMenu?: (ctx: SelectMenuContext) => Promise<void | true>;
  };
}

/** Component state cache for when it is too large for the `custom_id` field. TTL Defaults to 900 */
export interface GenericCache {
  ttl?: number;

  get: (key: string) => Promise<string | null>;
  set: (key: string, ttl: number, value: string) => Promise<string | void>;
}

export interface DiscordApplicationOptions {
  /** Discord Client ID */
  clientId: Snowflake;
  /** Application's Public Key */
  publicKey: string | Buffer;

  /** Application's Bot Token */
  token: string;

  /** Custom hooks to be executed on interactions */
  hooks?: InteractionHooks;

  /** Cache to store additional component state */
  cache?: GenericCache;

  /** Timeout(ms) after which InteractionHandlerTimedOut is thrown - Default: 2500ms */
  timeout?: number;
}

/**
 * Main class for managing a Discord Application's commands and handling interactions.
 */
export class DiscordApplication {
  public publicKey: Buffer;
  public clientId: Snowflake;

  public cache?: GenericCache;

  public commands: CommandManager;
  public components: ComponentManager;

  public guildCommands: Map<Snowflake, CommandManager>;

  public timeout = 2500;
  public hooks: InteractionHooks = {};

  public rest: REST;

  constructor(options: DiscordApplicationOptions) {
    this.clientId = options.clientId;
    this.publicKey = Buffer.isBuffer(options.publicKey) ? options.publicKey : Buffer.from(options.publicKey, "hex");

    this.rest = new REST().setToken(options.token);

    this.cache = options.cache;

    this.commands = new CommandManager(this);
    this.components = new ComponentManager(this.cache);

    this.guildCommands = new Map();

    if (options.timeout) this.timeout = options.timeout;
    if (options.hooks) this.hooks = options.hooks;
  }

  /**
   * Verify an incoming interaction's signature
   * @param publicKey Your application's public key
   * @param timestamp Interaction's "X-Signature-Timestamp" header
   * @param signature Interaction's "X-Signature-Ed25519" header
   * @param body Raw interaction body
   * @returns Whether or not the signature is valid
   */
  public static verifyInteractionSignature(
    publicKey: Buffer,
    timestamp: string,
    signature: string,
    body: string
  ): boolean {
    const message = Buffer.from(timestamp + body, "utf-8");
    const signatureBuffer = Buffer.from(signature, "hex");

    return sign.detached.verify(message, signatureBuffer, publicKey);
  }

  /**
   * Handle an incoming interaction request
   * @param body Raw interaction body
   * @param signature Request's "X-Signature-Ed25519" header or false to skip signature verification
   * @param timestamp Request's "X-Signature-Timestamp" header
   * @returns Array containing the interaction response, and a callback to be called after you have sent the response
   */
  public handleInteraction(
    responseCallback: ResponseCallback,
    body: string,
    signature: string | false,
    timestamp?: string
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      if (
        signature !== false &&
        (!timestamp || !DiscordApplication.verifyInteractionSignature(this.publicKey, signature, timestamp, body))
      ) {
        return reject(new UnauthorizedInteraction(body));
      }

      const interaction = JSON.parse(body) as APIInteraction;

      const timeout = setTimeout(() => {
        reject(new InteractionHandlerTimedOut(interaction));
      }, this.timeout);

      const responseCallbackWithTimeout: ResponseCallback = (response) => {
        clearTimeout(timeout);
        return responseCallback(response);
      };

      await this._handleInteraction(interaction, responseCallbackWithTimeout);

      resolve();
    });
  }

  private _handleInteraction = _handleInteraction;
}
