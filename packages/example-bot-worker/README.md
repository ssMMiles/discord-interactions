# @discord-interactions/example-bot
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://github.com/ssMMiles/discord-interactions/actions"><img src="https://github.com/ssMMiles/interactions.ts/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>
*An example Discord bot made using `@discord-interactions`.*

To experiment, simply clone the repository and run `yarn install`.

Create a `.env` file:
```
CLIENT_ID=<your client id>
TOKEN=<your token>
PUBLIC_KEY=<your public key>

PORT=8080
```

Then run `yarn build && yarn start` to run the bot locally, or ``yarn build && yarn dev`` to also open an SSH tunnel to Ngrok.
```