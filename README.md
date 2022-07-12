# @discord-interactions
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord Server" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/core"><img src="https://img.shields.io/npm/v/@discord-interactions/core.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/core"><img src="https://img.shields.io/npm/dt/@discord-interactions/core.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/@discord-interactions/core/actions"><img src="https://github.com/ssMMiles/discord-interactions/actions/workflows/tests.yml/badge.svg" alt="Tests tatus" /></a>
  </p>
</div>

A complete framework for [Discord's Interactions](https://discord.com/developers/docs/interactions/receiving-and-responding), allowing you to build new Slash Command based bots with ease.

Even if you don't need a full framework, you might still find some use in our [builders](./packages/builders/) or [api](./packages/api/) packages for your own applications.

The project is for the most part runtime independent, meaning you can run your bots in both classic Node.JS as well as CF Workers/Vercel's Edge Functions, etc. The only current limitation is that you must import the correct verification module for your runtime yourself.

**Note: Node.JS support is currently limited to 18.x and above, due to a lack of global `Blob` before this. I'll get this fixed soon.**


### Template Bot
A template repository to deploy a bot on Cloudflare Workers is available [here](https://github.com/ssMMiles/discord-interactions-worker).

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ssMMiles/discord-interactions-worker)

## Packages
 - [@discord-interactions/core](./packages/core) - *Core framework for handling and verifying incoming Discord interactions.*
 - [@discord-interactions/builders](./packages/builders) - *Easy builder classes for interaction responses (Messages/Modals), Components and Commands.*
 - [@discord-interactions/api](./packages/api) - *A simple, typed wrapper around the Discord API.*
 - [@discord-interactions/request](./packages/request) - *A low level Discord HTTP client that handles global and resource rate limits.*
 - [@discord-interactions/verify](./packages/verify) - *Verification module for `@discord-interactions/core`. Implements signature verification using the Web SubtleCrypto API.*
 - [@discord-interactions/verify-node](./packages/verify-node) - *Verification module for `@discord-interactions/core`. Implements signature verification using the Node.JS (todo libsodium?) Crypto API.*
 - [isomorphic-fetch-ponyfill](./packages/isomorphic-fetch-ponyfill) - *A fetch ponyfill that supports Node.JS, Service Workers, anything?*


### To-Do:
 - Better documentation and more tests.
