import type { APIPrimaryEntryPointCommandInteraction } from "discord-api-types/v10";
import { BaseCommandContext } from "./ApplicationCommandContext.js";

/**
 * Context for an Entry Point command interaction - the primary way users launch your app's Activity.
 * Typically answered with launchActivity() or a regular message response.
 */
export class EntryPointCommandContext extends BaseCommandContext<APIPrimaryEntryPointCommandInteraction> {}
