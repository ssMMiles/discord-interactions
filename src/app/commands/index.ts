import type { CommandGroup, ICommandGroup, RegisteredCommandGroup } from "./CommandGroup";
import type { IMessageCommand, MessageCommand, RegisteredMessageCommand } from "./MessageCommand";
import type { ISlashCommand, RegisteredSlashCommand, SlashCommand } from "./SlashCommand";
import type { IUserCommand, RegisteredUserCommand, UserCommand } from "./UserCommand";

export * from "./CommandGroup";
export * from "./MessageCommand";
export * from "./SlashCommand";
export * from "./UserCommand";

export type ICommand = ISlashCommand | IUserCommand | IMessageCommand | ICommandGroup;
export type Command = SlashCommand | UserCommand | MessageCommand | CommandGroup;

export type RegisteredCommand =
  | RegisteredSlashCommand
  | RegisteredUserCommand
  | RegisteredMessageCommand
  | RegisteredCommandGroup;
