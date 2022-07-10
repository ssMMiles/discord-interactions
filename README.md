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

*Although this is still a work in progress, the [previous stable version](https://www.npmjs.com/package/interactions.ts) is still available and exposes a similar API. Work is currently being done to split the library into packages and remove dependencies on Node.js APIs/primitives for use in environments like CF Workers and Vercel's Edge Functions.*

### To-Do:
 - Better documentation and more tests.

## Packages
 - [@discord-interactions/core](./packages/core) - *Our core framework for handling and verifying incoming Discord interactions.*
 - [@discord-interactions/builders](./packages/builders) - *Easy builder classes for interaction responses (Messages/Modals), Components and Commands.*
 - [@discord-interactions/api](./packages/api) - *A simple, typed wrapper around the Discord API.*
 - [@discord-interactions/request](./packages/request) - *A low level Discord HTTP client that handles global and resource rate limits.*
 - [@discord-interactions/verify](./packages/verify) - *Verification module for `@discord-interactions/core`. Implements signature verification using the Web SubtleCrypto API.*
 - [@discord-interactions/verify-node](./packages/verify-node) - *Verification module for `@discord-interactions/core`. Implements signature verification using the Node.JS (todo libsodium?) Crypto API.*
 - [isomorphic-fetch-polyfill](./packages/isomorphic-fetch-polyfill) - *A fetch ponyfill that supports Node.JS, Service Workers, anything?*