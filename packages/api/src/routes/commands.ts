import {
  RESTGetAPIApplicationCommandsResult,
  RESTPatchAPIApplicationCommandJSONBody,
  RESTPatchAPIApplicationCommandResult,
  RESTPostAPIApplicationCommandsJSONBody,
  RESTPostAPIApplicationCommandsResult,
  RESTPutAPIApplicationCommandsJSONBody,
  RESTPutAPIApplicationCommandsResult,
  Routes,
  Snowflake
} from "discord-api-types/v10";
import { DiscordApiClient } from "../client.js";

// TODO: Test, Document
export async function getApplicationCommands(this: DiscordApiClient, applicationId: Snowflake, guildId?: Snowflake) {
  return this.get(
    guildId ? Routes.applicationGuildCommands(applicationId, guildId) : Routes.applicationCommands(applicationId)
  ) as Promise<RESTGetAPIApplicationCommandsResult>;
}

// TODO: Test, Document
export async function postApplicationCommand(
  this: DiscordApiClient,
  applicationId: Snowflake,
  command: RESTPostAPIApplicationCommandsJSONBody,
  guildId?: Snowflake
) {
  return this.post(
    guildId ? Routes.applicationGuildCommands(applicationId, guildId) : Routes.applicationCommands(applicationId),
    {
      body: command
    }
  ) as Promise<RESTPostAPIApplicationCommandsResult>;
}

// TODO: Test, Document
export async function putApplicationCommands(
  this: DiscordApiClient,
  applicationId: Snowflake,
  commands: RESTPutAPIApplicationCommandsJSONBody,
  guildId?: Snowflake
) {
  return this.put(
    guildId ? Routes.applicationGuildCommands(applicationId, guildId) : Routes.applicationCommands(applicationId),
    {
      body: commands
    }
  ) as Promise<RESTPutAPIApplicationCommandsResult>;
}

// TODO: Test, Document
export async function patchApplicationCommand(
  this: DiscordApiClient,
  applicationId: Snowflake,
  commandId: Snowflake,
  command: RESTPatchAPIApplicationCommandJSONBody,
  guildId?: Snowflake
) {
  return this.patch(
    guildId
      ? Routes.applicationGuildCommand(applicationId, guildId, commandId)
      : Routes.applicationCommand(applicationId, commandId),
    {
      body: command
    }
  ) as Promise<RESTPatchAPIApplicationCommandResult>;
}

// TODO: Test, Document
export async function deleteApplicationCommand(
  this: DiscordApiClient,
  applicationId: Snowflake,
  commandId: Snowflake,
  guildId?: Snowflake
) {
  return this.delete(
    guildId
      ? Routes.applicationGuildCommand(applicationId, guildId, commandId)
      : Routes.applicationCommand(applicationId, commandId)
  );
}
