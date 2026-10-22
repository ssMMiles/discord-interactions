import type { APIApplicationCommand, RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody } from "discord-api-types/v10";
import { ApplicationCommandType, EntryPointCommandHandlerType } from "discord-api-types/v10";
import { CommandBuilderBase, CommandDataBase } from "./CommandBuilderBase.js";

export { EntryPointCommandHandlerType };

export type EntryPointCommandData = Omit<CommandDataBase, "description" | "description_localizations"> & {
  type: ApplicationCommandType.PrimaryEntryPoint;
};

/**
 * An app's Entry Point command - the primary way to launch its Activity.
 * Only one global Entry Point command is allowed, and it cannot be guild-scoped.
 */
export class EntryPointCommandBuilder extends CommandBuilderBase<
  RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody & { type: ApplicationCommandType.PrimaryEntryPoint }
> {
  public type: ApplicationCommandType.PrimaryEntryPoint = ApplicationCommandType.PrimaryEntryPoint;

  /**
   * How interactions with this command are handled.
   */
  public handler?: EntryPointCommandHandlerType;

  /**
   * Set whether interactions are handled by your app (AppHandler) or by Discord
   * launching your Activity directly (DiscordLaunchActivity).
   * Only valid for apps with the EMBEDDED flag.
   */
  public setHandler(handler: EntryPointCommandHandlerType): this {
    this.handler = handler;

    return this;
  }

  public toJSON(): EntryPointCommandData {
    return {
      ...this.baseToJSON(),

      type: this.type,

      handler: this.handler
    };
  }

  public equals(
    other: APIApplicationCommand & {
      type: ApplicationCommandType.PrimaryEntryPoint;
    }
  ) {
    if (!super.equals(other)) return false;

    if (this.handler !== undefined && this.handler !== other.handler) return false;

    return true;
  }
}
