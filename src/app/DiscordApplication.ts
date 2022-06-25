import { REST } from "@discordjs/rest";
import { APIInteraction, APIInteractionResponse, Snowflake } from "discord-api-types/v10";
import { createPublicKey, verify } from "node:crypto";
import { InteractionHandlerTimedOut, UnauthorizedInteraction } from "../util";
import { ContextMap, InteractionHooks, _handleInteraction } from "./handlers";
import { CommandManager } from "./managers/CommandManager";
import { ComponentManager } from "./managers/ComponentManager";

/**
 * Callback to be executed with the result of an interaction.
 */
export type ResponseCallback<T extends APIInteractionResponse = APIInteractionResponse> = (
  response: T
) => Promise<void>;

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
  hooks?: Partial<InteractionHooks>;

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
  public hooks: InteractionHooks = {
    ping: [],

    interaction: [],

    "command.slash": [],
    "command.autocomplete": [],
    "command.user": [],
    "command.message": [],

    "component.button": [],
    "component.selectMenu": [],

    modal: []
  };

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

    if (options.hooks) {
      Object.assign(this.hooks, options.hooks);
    }
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

    return verify(
      null,
      message,
      createPublicKey({
        key: Buffer.concat([Buffer.from("MCowBQYDK2VwAyEA", "base64"), publicKey]),
        format: "der",
        type: "spki"
      }),
      signatureBuffer
    );
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

  public addHook<T extends keyof InteractionHooks>(
    hook: T,
    handler: (ctx: ContextMap[T]) => Promise<void | true>
  ): void {
    (this.hooks[hook] as ((ctx: ContextMap[T]) => Promise<void | true>)[]).push(handler);
  }
}
