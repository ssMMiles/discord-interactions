import { ButtonBuilder, ModalBuilder, SelectMenuBuilders } from "@discord-interactions/builders";
import type {
  APIApplicationCommandInteractionDataAttachmentOption,
  APIApplicationCommandInteractionDataBasicOption,
  APIApplicationCommandInteractionDataBooleanOption,
  APIApplicationCommandInteractionDataChannelOption,
  APIApplicationCommandInteractionDataMentionableOption,
  APIApplicationCommandInteractionDataNumberOption,
  APIApplicationCommandInteractionDataRoleOption,
  APIApplicationCommandInteractionDataStringOption,
  APIApplicationCommandInteractionDataUserOption,
  APIAttachment,
  APIChatInputApplicationCommandInteraction,
  APIInteractionDataResolvedChannel,
  APIInteractionDataResolvedGuildMember,
  APIRole,
  APIUser
} from "discord-api-types/v10";
import { ApplicationCommandOptionType } from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../../DiscordApplication.js";
import { ChannelMessageResponse } from "../response-types.js";
import { BaseCommandContext } from "./ApplicationCommandContext.js";

export class SlashCommandContext extends BaseCommandContext<APIChatInputApplicationCommandInteraction> {
  private options: Map<string, APIApplicationCommandInteractionDataBasicOption> = new Map();

  /**
   * The parent command, if this is a subcommand.
   */
  public parentCommand?: string;

  /**
   * The subcommand group
   */
  public group?: string;

  constructor(
    app: DiscordApplication,
    interaction: APIChatInputApplicationCommandInteraction,
    timestamps: { signature: Date; received: Date },
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(app, interaction, timestamps, responseCallback);

    const rootOption = interaction.data.options?.[0];

    this.parentCommand = this.name;

    switch (rootOption?.type) {
      case ApplicationCommandOptionType.SubcommandGroup:
        this.group = rootOption.name;

        this.name = rootOption.options[0].name;
        this.parseOptions(rootOption.options[0].options);

        break;

      case ApplicationCommandOptionType.Subcommand:
        this.name = rootOption.name;
        this.parseOptions(rootOption.options);

        break;

      default:
        this.parseOptions(interaction.data.options as APIApplicationCommandInteractionDataBasicOption[]);
    }
  }

  private parseOptions(options: APIApplicationCommandInteractionDataBasicOption[] = []): void {
    this.options = new Map();

    for (const option of options) {
      this.options.set(option.name, option);
    }
  }

  async createComponent<
    Builder extends ButtonBuilder | SelectMenuBuilders | ModalBuilder = ButtonBuilder | SelectMenuBuilders
  >(name: string, state: object = {}, ttl?: number): Promise<Builder> {
    return super.createGlobalComponent(`${this.parentCommand ?? this.name}.${name}`, state, ttl);
  }

  public hasOption(name: string): boolean {
    return this.options.has(name);
  }

  public getStringOption(name: string): APIApplicationCommandInteractionDataStringOption {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataStringOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return option;
  }

  public getIntegerOption(name: string): APIApplicationCommandInteractionDataNumberOption {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataNumberOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return option;
  }

  public getBooleanOption(name: string): APIApplicationCommandInteractionDataBooleanOption {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataBooleanOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return option;
  }

  public getUserOption(name: string): APIApplicationCommandInteractionDataUserOption & {
    user: APIUser;
    member?: APIInteractionDataResolvedGuildMember;
  } {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataUserOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    const user = this.resolved.users.get(option.value);
    if (user === undefined) throw new Error(`Resolved user not found.`);

    const member = this.resolved.members.get(option.value);

    return { user, member, ...option };
  }

  public getChannelOption(
    name: string
  ): APIApplicationCommandInteractionDataChannelOption & { channel: APIInteractionDataResolvedChannel } {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataChannelOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    const channel = this.resolved.channels.get(option.value);
    if (channel === undefined) throw new Error(`Resolved channel not found.`);

    return { channel, ...option };
  }

  public getRoleOption(name: string): APIApplicationCommandInteractionDataRoleOption & { role: APIRole } {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataRoleOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    const role = this.resolved.roles.get(option.value);
    if (role === undefined) throw new Error(`Resolved role not found.`);

    return { role, ...option };
  }

  public getMentionableOption(
    name: string
  ): APIApplicationCommandInteractionDataMentionableOption & { user?: APIUser; role?: APIRole } {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataMentionableOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    const user = this.resolved.users.get(option.value);
    const role = this.resolved.roles.get(option.value);

    return { user, role, ...option };
  }

  public getNumberOption(name: string): APIApplicationCommandInteractionDataNumberOption {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataNumberOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    return { ...option };
  }

  public getAttachmentOption(
    name: string
  ): APIApplicationCommandInteractionDataAttachmentOption & { attachment: APIAttachment } {
    const option = this.options.get(name) as APIApplicationCommandInteractionDataAttachmentOption | undefined;
    if (option === undefined) throw new Error(`${name} | Option does not exist.`);

    const attachment = this.resolved.attachments.get(option.value);
    if (attachment === undefined) throw new Error(`Resolved attachment not found.`);

    return { attachment, ...option };
  }
}
