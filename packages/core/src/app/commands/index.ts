import type { CommandGroup, ICommandGroup, RegisteredCommandGroup } from "./CommandGroup.js";
import type { EntryPointCommand, IEntryPointCommand, RegisteredEntryPointCommand } from "./EntryPointCommand.js";
import type { IMessageCommand, MessageCommand, RegisteredMessageCommand } from "./MessageCommand.js";
import type { ISlashCommand, RegisteredSlashCommand, SlashCommand } from "./SlashCommand.js";
import type { IUserCommand, RegisteredUserCommand, UserCommand } from "./UserCommand.js";

export * from "./CommandGroup.js";
export * from "./EntryPointCommand.js";
export * from "./MessageCommand.js";
export * from "./SlashCommand.js";
export * from "./UserCommand.js";

export type ICommand = ISlashCommand | IUserCommand | IMessageCommand | ICommandGroup | IEntryPointCommand;
export type Command = SlashCommand | UserCommand | MessageCommand | CommandGroup | EntryPointCommand;

export type RegisteredCommand =
  | RegisteredSlashCommand
  | RegisteredUserCommand
  | RegisteredMessageCommand
  | RegisteredCommandGroup
  | RegisteredEntryPointCommand;
