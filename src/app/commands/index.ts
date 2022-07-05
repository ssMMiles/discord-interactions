import { CommandGroup, ICommandGroup, RegisteredCommandGroup } from "./CommandGroup";
import { IMessageCommand, MessageCommand, RegisteredMessageCommand } from "./MessageCommand";
import { ISlashCommand, RegisteredSlashCommand, SlashCommand } from "./SlashCommand";
import { IUserCommand, RegisteredUserCommand, UserCommand } from "./UserCommand";

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
