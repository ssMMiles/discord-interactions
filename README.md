# Discord Interactions.TS
A simple command framework for Discord's HTTP interactions. 

Easily create and manage your application's commands with helpers based on [@discord.js/builders](https://github.com/discordjs/discord.js/tree/main/packages/builders/), then just pass along incoming requests from your webserver of choice to start responding to them.

Maintaining state information in the `custom_id` field of components is supported, as well as an external cache (Redis recommended) to store larger data.

**Still a work in progress.**

<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/interactions.ts"><img src="https://img.shields.io/npm/v/interactions.ts.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/interactions.ts"><img src="https://img.shields.io/npm/dt/interactions.ts.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/interactions.ts/actions"><img src="https://github.com/ssMMiles/interactions.ts/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

### To-Do:
 - Modal Support
 - Better Tests

### Install

`npm install interactions.ts`

### Links
 - #### [Example Bot](https://github.com/ssMMiles/bot-template)
 - #### [Documentation](https://interactions-ts.pages.dev/)
 - #### [Github](https://github.com/ssMMiles/interactions.ts)
 - #### [NPM](https://www.npmjs.com/package/interactions.ts)

# Example Usage

## Registering a basic Slash Command

```typescript
const app = new DiscordApplication({
  clientId: process.env.CLIENT_ID as string,
  token: process.env.TOKEN as string,
  publicKey: process.env.PUBLIC_KEY as string,
});

const commands = [
  new SlashCommand(new SlashCommandBuilder("test", "A simple testing command!"), async (context) => {
    context.reply(new MessageBuilder().setContent("Test command executed!"));
  })
]

app.commands.register(commands);
```

This will create a global `/ping` command on your application. If one is already registered, it will be overwritten.

---------------------------------------------------------------------------------------------------------------------

## Registering a guild-specific command

```typescript

const guild = new CommandManager(app, guildId);

guild.register(commands);
```

---------------------------------------------------------------------------------------------------------------------

Components must be registered similarly before they can be used. You can then create instances of your components and use them in your commands with an arbitrary state object to be passed through. 

This state is stored in the `custom_id` property by default, which will constrain the size of your data. To avoid this, an external cache can be configured.

## Command using Components

```typescript
type TestButtonState = {
  word: string;
};

const components = [
  new Button(
    "testButton",
    new ButtonBuilder().setLabel("Test Button").setStyle(ButtonStyle.Primary),
    async (ctx: ButtonContext<TestButtonState>): Promise<void> => {
      const word = ctx.state ? ctx.state.word : "Component State expired";

      return ctx.reply(new MessageBuilder().addEmbed(new UnsafeEmbedBuilder().setTitle(word)));
    }
  ).setAllowExpired(true)
]

app.components.register(components);

app.commands.register([
  new SlashCommand(new SlashCommandBuilder("test", "A simple testing command!"), async (context) => {
    context.reply(
      new MessageBuilder()
        .addEmbed(new UnsafeEmbedBuilder().setTitle("Press the button to update the message!"))
        .addComponents(
          new ActionRowBuilder().addComponents(await context.manager.components.createInstance("testButton", { word: "Surprise!" }))
        )
    );
  })
]);

```

---------------------------------------------------------------------------------------------------------------------

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