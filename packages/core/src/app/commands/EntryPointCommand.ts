import { EntryPointCommandBuilder } from "@discord-interactions/builders";
import type { ApplicationCommandType, RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody } from "discord-api-types/v10";
import { HandledInteraction } from "../handlers/HandledInteraction.js";
import { EntryPointCommandContext } from "../index.js";

import { ICommandBase, RegisteredCommandBase } from "./Base.js";

export type IEntryPointCommand = ICommandBase<EntryPointCommandBuilder, EntryPointCommandContext>;

export class EntryPointCommand extends HandledInteraction<
  RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody & { type: ApplicationCommandType.PrimaryEntryPoint },
  EntryPointCommandBuilder,
  EntryPointCommandContext
> {
  constructor(
    builder: EntryPointCommandBuilder,
    handler: (ctx: EntryPointCommandContext) => Promise<void> = async (ctx: EntryPointCommandContext) => {
      ctx.launchActivity();
    }
  ) {
    super(builder, handler);
  }
}

export class RegisteredEntryPointCommand extends RegisteredCommandBase<
  EntryPointCommandBuilder,
  EntryPointCommandContext
> {}
