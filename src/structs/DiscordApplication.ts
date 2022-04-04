import { REST } from "@discordjs/rest";
import { Snowflake } from "discord.js";
import { sign } from "tweetnacl";
import {
  AutocompleteContext,
  AutocompleteResponse,
  ButtonContext,
  ChannelMessageResponse,
  CommandManager,
  ComponentManager,
  handleInteraction,
  MessageCommandContext,
  MessageUpdateResponse,
  SelectMenuContext,
  SlashCommandContext,
  UserCommandContext
} from "..";

export interface InteractionHooks {
  applicationCommand?: {
    slashCommand: (ctx: SlashCommandContext) => Promise<[boolean, ChannelMessageResponse] | void>;
    autocomplete: (ctx: AutocompleteContext) => Promise<[boolean, AutocompleteResponse] | void>;
    user: (ctx: UserCommandContext) => Promise<[boolean, ChannelMessageResponse] | void>;
    message: (ctx: MessageCommandContext) => Promise<[boolean, ChannelMessageResponse] | void>;
  };
  component?: {
    button: (ctx: ButtonContext) => Promise<[boolean, MessageUpdateResponse] | void>;
    selectMenu: (ctx: SelectMenuContext) => Promise<[boolean, MessageUpdateResponse] | void>;
  };
}

export interface DiscordApplicationOptions {
  /** Discord Client ID */
  clientId: Snowflake;
  /** Application's Public Key */
  publicKey: string | Buffer;

  /** Application's Bot Token */
  token: string;

  /** Whether to delete commands not handled by the client upon loading */
  removeUnregistered?: boolean;

  /** Functions to be run on interactions. For commands, these are executed before the main handler. */
  hooks?: InteractionHooks;
  /** Timeout(ms) after which InteractionHandlerTimedOut is thrown - Default: 2500ms */
  timeout?: number;
}

export class DiscordApplication {
  public publicKey: Buffer;

  public clientId: Snowflake;

  public commands: CommandManager;
  public components: ComponentManager;

  public timeout = 2500;
  public hooks: InteractionHooks = {};

  public rest: REST;

  constructor(options: DiscordApplicationOptions) {
    this.clientId = options.clientId;
    this.publicKey = Buffer.isBuffer(options.publicKey) ? options.publicKey : Buffer.from(options.publicKey, "hex");

    this.rest = new REST().setToken(options.token);

    this.commands = new CommandManager(this, options.removeUnregistered);

    this.components = new ComponentManager();

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

  public handleInteraction = handleInteraction;
}
