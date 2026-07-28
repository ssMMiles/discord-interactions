import { CommandGroupBuilder, CommandGroupData } from "./CommandGroupBuilder.js";
import {
  MessageCommandBuilder,
  MessageCommandData,
  UserCommandBuilder,
  UserCommandData
} from "./ContextMenuCommandBuilder.js";
import { EntryPointCommandBuilder, EntryPointCommandData } from "./EntryPointCommandBuilder.js";
import { SlashCommandBuilder, SlashCommandData } from "./SlashCommandBuilder.js";

export * from "./CommandGroupBuilder.js";
export * from "./ContextMenuCommandBuilder.js";
export * from "./EntryPointCommandBuilder.js";
export * from "./options/index.js";
export * from "./permissions/index.js";
export * from "./SlashCommandBuilder.js";

export type CommandData =
  | SlashCommandData
  | CommandGroupData
  | UserCommandData
  | MessageCommandData
  | EntryPointCommandData;
export type CommandBuilder =
  | SlashCommandBuilder
  | CommandGroupBuilder
  | UserCommandBuilder
  | MessageCommandBuilder
  | EntryPointCommandBuilder;
