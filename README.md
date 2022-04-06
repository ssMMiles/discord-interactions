# Interactions.ts

This library provides an easy way to create and manage your Discord Application's commands based on [@discord.js/builders](https://github.com/discordjs/discord.js/tree/main/packages/builders/).

**Still a work in progress.**

### To-Do
 - Modal Support
 - Logging
 - Tests

## Links 
 - ### [Documentation](https://interactions-ts.pages.dev/)
 - ### [NPM](https://www.npmjs.com/package/interactions.ts)

## Getting Started

### Install

`npm install interactions.ts @discordjs/builders@dev`

### Creating A Global Slash Command

```typescript
const app = new DiscordApplication({
  clientId: process.env.CLIENT_ID as string,
  token: process.env.TOKEN as string,
  publicKey: process.env.PUBLIC_KEY as string,
});

const commands = [
  new SlashCommandBuilder("ping").setDescription("Pong!").setHandler((context) => {
    return context.reply(new MessageBuilder().addEmbed(new UnsafeEmbedBuilder().setTitle("Pong!")));
  })
]

app.commands.load(commands);
```

This will create a global `/ping` command. If one is already registered, it will be overwritten.

Incoming interactions must then be passed to `app.handleInteractions()` from your webserver, as shown below with a fastify server.


### Receiving Interactions From Fastify

```typescript
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
    await app.handleInteraction(
      async (response) => {
        reply.code(200).send(response);
      },
      request.rawBody,
      timestamp,
      signature
    );
  } catch (err) {
    console.error(err);
  }
});
```