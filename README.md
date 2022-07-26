# @discord-interactions
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord Server" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/core"><img src="https://img.shields.io/npm/v/@discord-interactions/core.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/core"><img src="https://img.shields.io/npm/dt/@discord-interactions/core.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/@discord-interactions/core/actions"><img src="https://github.com/ssMMiles/discord-interactions/actions/workflows/tests.yml/badge.svg" alt="Tests tatus" /></a>
  </p>
</div>

A complete framework for [Discord's Interactions](https://discord.com/developers/docs/interactions/receiving-and-responding), allowing you to build new Slash Command based bots with ease. If you don't need the framework, our [verify](./packages/verify/), [builders](./packages/builders/) or [api](./packages/api/) packages are fully independent and might be of use in your own applications.

**Supports Node.JS 16+ as well as Service Worker based runtimes such as Cloudflare Workers.**

### Templates
 - [Node.js](https://github.com/ssMMiles/discord-interactions-node)
 - [Cloudflare Workers](https://github.com/ssMMiles/discord-interactions-worker)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ssMMiles/discord-interactions-worker)

If you're just looking to build your own bot as easily as possible, clone one of the above templates and check out the [`@discord-interactions/core`](./packages/core) package!

## Packages
 - [@discord-interactions/core](./packages/core) - *Core framework for Bots using Discord Interactions.*
 - [@discord-interactions/verify](./packages/verify) - *Verify discord interactions using either Node.js' Crypto or the Web SubtleCrypto API.*
 - [@discord-interactions/builders](./packages/builders) - *Easy builder classes for interaction responses (Messages/Modals), Components and Commands.*
 - [@discord-interactions/api](./packages/api) - *A simple, typed wrapper around the Discord API.*
 - [@discord-interactions/request](./packages/request) - *A low level Discord HTTP client that handles global and resource rate limits.*
 - [isomorphic-fetch-ponyfill](./packages/isomorphic-fetch-ponyfill) - *A fetch ponyfill that supports Node.js, Cloudflare Workers, Service Workers + Browsers?.*

### To-Do:
 - More Tests
 - Documentation
