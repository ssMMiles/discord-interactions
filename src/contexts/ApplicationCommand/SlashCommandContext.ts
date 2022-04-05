import {
  APIApplicationCommandInteractionDataBasicOption,
  APIChatInputApplicationCommandInteraction,
  ApplicationCommandOptionType
} from "discord-api-types/v10";
import { DiscordApplication, ResponseCallback } from "../..";
import { ChannelMessageResponse } from "../../util";
import { BaseCommandContext } from "./BaseCommandContext";

export class SlashCommandContext extends BaseCommandContext<APIChatInputApplicationCommandInteraction> {
  public options: Map<string, APIApplicationCommandInteractionDataBasicOption> = new Map();

  constructor(
    manager: DiscordApplication,
    interaction: APIChatInputApplicationCommandInteraction,
    responseCallback: ResponseCallback<ChannelMessageResponse>
  ) {
    super(manager, interaction, responseCallback);

    const rootOption = this.interaction.data.options?.[0];

    switch (rootOption?.type) {
      case ApplicationCommandOptionType.SubcommandGroup:
        this.name += `${rootOption.name}.${rootOption.options[0].name}`;
        this.parseOptions(rootOption.options[0].options);
        break;

      case ApplicationCommandOptionType.Subcommand:
        this.name += `.${rootOption.name}`;
        this.parseOptions(rootOption.options);
        break;

      default:
        this.parseOptions(this.interaction.data.options as APIApplicationCommandInteractionDataBasicOption[]);
    }
  }

  private parseOptions(options: APIApplicationCommandInteractionDataBasicOption[] = []): void {
    this.options = new Map();

    for (const option of options) {
      this.options.set(option.name, option);
    }
  }
}
