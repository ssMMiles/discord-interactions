// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { REST } from "@discordjs/rest";
import type { APIInteraction, APIInteractionResponse, Snowflake } from "discord-api-types/v10";
import type { FormData } from "formdata-node";
import { InteractionHandlerTimedOut, UnauthorizedInteraction } from "../util/errors.js";
import { ContextMap, InteractionHooks, _handleInteraction } from "./index.js";
import { CommandManager } from "./managers/CommandManager.js";
import { ComponentManager } from "./managers/ComponentManager.js";

/** Cache used to store component states. Redis is recommended. */
export interface GenericCache {
  /** Default Time To Live for cache entries, defaults to 900. */
  ttl?: number;

  get: (key: string) => Promise<string | null>;
  set: (key: string, ttl: number, value: string) => Promise<string | void>;
}

export interface DiscordApplicationOptions {
  /** Application Client ID */
  clientId: Snowflake;

  /** Application Public Key */
  publicKey: string;

  /** Application Bot Token */
  token: string;

  /** Hooks to perform additional processing on certain interactions before passing to their handlers. Upon returning true, all further execution is halted. */
  hooks?: Partial<InteractionHooks>;

  /** Component State Cache */
  cache?: GenericCache;

  /** Timeout after which InteractionHandlerTimedOut is thrown - Default: 2500ms */
  timeout?: number;
}

export type ResponseCallback<T extends APIInteractionResponse | FormData = APIInteractionResponse | FormData> = (
  response: T
) => void;

/**
 * Main class for managing a Discord Application's commands and handling interactions.
 */
export class DiscordApplication {
  public publicKey: string;
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
    this.publicKey = options.publicKey;

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
   * Verify an incoming interaction's signature. This method is not implemented in `core`, please import either `@discord-interactions/verify` or `@discord-interactions/verify-node`.
   * @param publicKey Your application's public key
   * @param timestamp Interaction's "X-Signature-Timestamp" header
   * @param signature Interaction's "X-Signature-Ed25519" header
   * @param body Raw interaction body
   * @returns Whether or not the signature is valid
   */
  public static async verifyInteractionSignature(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    publicKey: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signature: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    timestamp: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    body: string
  ): Promise<boolean> {
    throw new Error(
      "Unimplemented. Please import one of `@discord-interactions/verify`/`@discord-interactions/verify-node`."
    );
  }

  /**
   * Handle an incoming interaction request
   * @param body Raw interaction body
   * @param signature Request's "X-Signature-Ed25519" header or false to skip signature verification
   * @param timestamp Request's "X-Signature-Timestamp" header
   * @returns Array containing the interaction response, and a callback to be called after you have sent the response
   */
  public async handleInteraction(
    body: string,
    signature: string | false,
    timestamp?: string
  ): Promise<[Promise<APIInteractionResponse | FormData>, Promise<void>]> {
    let isValidSignature = false;

    if (signature === false) {
      isValidSignature = true;
    } else if (typeof timestamp === "string") {
      isValidSignature = await DiscordApplication.verifyInteractionSignature(
        this.publicKey,
        signature,
        timestamp,
        body
      );
    }

    if (!isValidSignature) {
      const err = new UnauthorizedInteraction(body);

      throw err;
    }

    let responseCallbackWithTimeout: (response: APIInteractionResponse | FormData) => void, timeout: NodeJS.Timeout;

    let response;

    const handling = new Promise<void>(async (resolve, reject) => {
      const interaction = JSON.parse(body) as APIInteraction;

      response = new Promise<APIInteractionResponse | FormData>((resolve, reject) => {
        if (!isValidSignature) {
          return reject(new UnauthorizedInteraction(body));
        }

        timeout = setTimeout(() => {
          reject(new InteractionHandlerTimedOut(interaction));
        }, this.timeout);

        responseCallbackWithTimeout = (response: APIInteractionResponse | FormData) => {
          clearTimeout(timeout);
          return resolve(response);
        };
      });

      try {
        await this._handleInteraction(interaction, responseCallbackWithTimeout);
      } catch (e) {
        clearTimeout(timeout);
        reject(e);
      }

      resolve();
    });

    return [response, handling];
  }

  private _handleInteraction = _handleInteraction;

  public addHook<T extends keyof InteractionHooks>(
    hook: T,
    handler: (ctx: ContextMap[T]) => Promise<void | true>
  ): void {
    (this.hooks[hook] as ((ctx: ContextMap[T]) => Promise<void | true>)[]).push(handler);
  }
}
