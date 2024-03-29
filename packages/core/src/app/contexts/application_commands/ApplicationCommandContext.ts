import { ButtonBuilder, MessageBuilder, ModalBuilder, SelectMenuBuilders } from "@discord-interactions/builders";
import {
  APIApplicationCommandInteraction,
  APIAttachment,
  APIInteractionDataResolvedChannel,
  APIInteractionDataResolvedGuildMember,
  APIInteractionResponseChannelMessageWithSource,
  APIMessage,
  APIModalInteractionResponse,
  APIRole,
  APIUser,
  InteractionResponseType,
  MessageFlags,
  Snowflake
} from "discord-api-types/v10";
import { FormData } from "formdata-node";
import { InteractionResponseAlreadySent } from "../../../util/errors.js";
import { SimpleEmbed } from "../../../util/simple-responses.js";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { BaseInteractionContext } from "../Base.js";
import { ChannelMessageResponse } from "../response-types.js";

export class ResolvedData {
  public users: Map<Snowflake, APIUser>;
  public members: Map<Snowflake, APIInteractionDataResolvedGuildMember>;

  public roles: Map<Snowflake, APIRole>;
  public channels: Map<Snowflake, APIInteractionDataResolvedChannel>;
  public messages: Map<Snowflake, APIMessage>;

  public attachments: Map<Snowflake, APIAttachment>;

  constructor() {
    this.users = new Map();
    this.members = new Map();
    this.roles = new Map();
    this.channels = new Map();
    this.messages = new Map();
    this.attachments = new Map();
  }
}

export class BaseCommandContext<
  T extends APIApplicationCommandInteraction = APIApplicationCommandInteraction
> extends BaseInteractionContext<T, ChannelMessageResponse> {
  public name: string;
  public id: Snowflake;

  // Duplicate data, but Discord includes it for some reason
  public commandGuildId?: Snowflake;

  public resolved: ResolvedData;

  constructor(
    app: DiscordApplication,
    interaction: T,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(app, interaction, timestamps, responseCallback);

    this.name = interaction.data.name;
    this.id = interaction.data.id;

    this.commandGuildId = interaction.data.guild_id;

    this.resolved = new ResolvedData();
    if (interaction.data.resolved !== undefined) {
      for (const [key, map] of Object.entries(interaction.data.resolved)) {
        for (const [id, value] of Object.entries(map)) {
          this.resolved[key].set(id, value);
        }
      }
    }
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilders | ModalBuilder = ButtonBuilder | SelectMenuBuilders
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return super.createGlobalComponent(`${this.name}.${name}`, state, ttl);
  }

  defer(flags?: MessageFlags): Promise<void> {
    if (this.replied) throw new InteractionResponseAlreadySent();

    return this._reply({
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data: flags && {
        flags
      }
    });
  }

  reply(
    message:
      | string
      | MessageBuilder
      | APIInteractionResponseChannelMessageWithSource
      | ModalBuilder
      | APIModalInteractionResponse
      | FormData
  ): Promise<void> {
    if (typeof message === "string") message = SimpleEmbed(message);

    if (message instanceof MessageBuilder)
      message = message.toInteractionResponse(InteractionResponseType.ChannelMessageWithSource);

    if (message instanceof ModalBuilder) {
      message = {
        type: InteractionResponseType.Modal,
        data: message.toJSON()
      };
    }

    return this._reply(message);
  }

  send(message: string | MessageBuilder): Promise<APIMessage> {
    return this.followup.send(message);
  }

  edit(message: string | MessageBuilder): Promise<APIMessage> {
    return this.followup.edit(message, "@original");
  }

  delete(): Promise<void> {
    return this.followup.delete("@original");
  }
}
