# Discord Interactions.TS

A full command framework for Discord interactions based on [@discord.js/builders](https://github.com/discordjs/discord.js/tree/main/packages/builders/).

**Still a work in progress.**

### To-Do:
 - Modal Support
 - More Tests

### Install

`npm install interactions.ts @discordjs/builders`

### Links
 - #### [Example Bot](https://github.com/ssMMiles/bot-template)
 - #### [Documentation](https://interactions-ts.pages.dev/)
 - #### [Github](https://github.com/ssMMiles/interactions.ts)
 - #### [NPM](https://www.npmjs.com/package/interactions.ts)

# Getting Started

## Registering a basic Slash Command

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

This will create a global `/ping` command on your application. If one is already registered, it will be overwritten.

---------------------------------------------------------------------------------------------------------------------

Components must be registered similarly before they can be used. You can then create instances of your components and use them in your commands with an arbitrary state object to be passed through. 

This state is stored in the `custom_id` property by default, which will constrain the size of your data. To avoid this, an external cache can be configured.

## Command using Components

```typescript
type TestButtonState = {
  word: string;
};

const components = [
  new HandledButtonBuilder("testbutton")
    .setEmoji({ name: "🔍" })
    .setHandler(async (ctx: ButtonContext<TestButtonState>): Promise<void> => {
      const word = ctx.state ? ctx.state.word : "Component State expired";

      return ctx.reply(new MessageBuilder().addEmbed(new UnsafeEmbedBuilder().setTitle(word)));
    })
    .setStyle(ButtonStyle.Primary)
]

app.components.load(components);

app.commands.load([
  new SlashCommandBuilder("test").setDescription("Test!").setHandler(async (context) => {
    return context.reply(
      new MessageBuilder()
        .addEmbed(new UnsafeEmbedBuilder().setTitle("Press the button to update the message!"))
        .addComponents(
          new ActionRowBuilder().addComponents(await context.manager.components.createInstance("testbutton", { word: "Surprise!" }))
        )
    );
  })
]);

```

## Using Redis for caching

```typescript
const redisClient = createClient();

await redisClient.connect();

const app = new DiscordApplication({
  clientId: process.env.CLIENT_ID as string,
  token: process.env.TOKEN as string,
  publicKey: process.env.PUBLIC_KEY as string,

  cache: {
    get: (key: string) => redisClient.get(key),
    set: (key: string, ttl: number, value: string) => redisClient.setEx(key, ttl, value)
  }
});
```

---------------------------------------------------------------------------------------------------------------------

## Receiving + Handling interactions with Fastify

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

Once incoming interaction requests start being passed to `app.handleInteraction()`, your application should appear online and be ready to respond to any commands you have configured.