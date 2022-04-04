import "dotenv/config";
import fastify from "fastify";
import rawBody from "fastify-raw-body";
import {
  DiscordApplication,
  MessageBuilder,
  SlashCommandBuilder,
  UnauthorizedInteraction,
  UnknownApplicationCommandType,
  UnknownComponentType,
  UnknownInteractionType
} from "interactions.ts";

if (
  !("CLIENT_ID" in process.env) ||
  !("TOKEN" in process.env) ||
  !("PUBLIC_KEY" in process.env) ||
  !("PORT" in process.env)
) {
  console.error(`Invalid Enviroment Variables`);
  process.exit(1);
}

const app = new DiscordApplication({
  clientId: process.env.CLIENT_ID as string,
  token: process.env.TOKEN as string,
  publicKey: process.env.PUBLIC_KEY as string,

  removeUnregistered: true
});

app.commands.load([
  new SlashCommandBuilder("joke").setDescription("funny joke").setHandler(async (context) => {
    context.reply(new MessageBuilder().setContent(":rofl: classic"));
  })
]);

const server = fastify();
server.register(rawBody);

server.post("/", async (request, reply) => {
  const signature = request.headers["x-signature-ed25519"];
  const timestamp = request.headers["x-signature-timestamp"];

  if (typeof request.rawBody !== "string" || typeof signature !== "string" || typeof timestamp !== "string") {
    return reply.code(400).send({
      error: "Invalid request"
    });
  }

  try {
    const response = await app.handleInteraction(request.rawBody, timestamp, signature);

    return reply.code(200).send(response);
  } catch (err) {
    if (err instanceof UnauthorizedInteraction) {
      console.error("Unauthorized Interaction");
      return reply.code(401).send();
    }

    if (
      err instanceof UnknownInteractionType ||
      err instanceof UnknownApplicationCommandType ||
      err instanceof UnknownComponentType
    ) {
      console.error("Unknown Interaction - Library may be out of date.");
      console.dir(err.interaction);

      return reply.code(400).send();
    }

    console.error(err);
  }
});

const address = "127.0.0.1";
const port = process.env.PORT as string;

server.listen(port, address);
console.log(`Listening for interactions on ${address}:${port}.`);
