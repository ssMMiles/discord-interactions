# @discord-interactions
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord Server" /></a>
    <a href="https://www.npmjs.com/package/interactions.ts"><img src="https://img.shields.io/npm/v/interactions.ts.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/interactions.ts"><img src="https://img.shields.io/npm/dt/interactions.ts.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/interactions.ts/actions"><img src="https://github.com/ssMMiles/interactions.ts/actions/workflows/tests.yml/badge.svg" alt="Tests tatus" /></a>
  </p>
</div>

A complete framework for [Discord's Interactions](https://discord.com/developers/docs/interactions/receiving-and-responding), allowing you to build new Slash Command based bots with ease.

*Although this is still a work in progress, the [previous stable version](https://www.npmjs.com/package/interactions.ts) is still available and exposes a similar API. Work is currently being done to split the library into packages and remove dependencies on Node.js APIs/primitives for use in environments like CF Workers and Vercel's Edge Functions.*

### To-Do:
 - Implement a `rest` module based on `@discordjs/rest`, with typed routes, Discord error parsing, support for external ratelimit relays ([Twilight](https://github.com/twilight-rs/http-proxy), [Nirn](https://github.com/germanoeich/nirn-proxy)). The `request` and `request-node` packages will provide the implementations for actually sending requests, using Web/Node APIs respectively.
 - Better documentation and more tests.

## Packages
 - [@interactions.ts/core](./packages/core/README.md) - *Our core framework for handling and verifying incoming Discord interactions.*
 - [@interactions.ts/builders](./packages/builders/README.md) - *Easy builder classes for interaction responses (Messages/Modals), Components and Commands.*
 - [@interactions.ts/rest](./packages/rest/README.md) - Unimplemented
 - [@interactions.ts/request](./packages/request/README.md) - Unimplemented
 - [@interacitonts.ts/request-node](./packages/request-node/README.md) - Unimplemented
 - [@interactions.ts/verify](./packages/verify/README.md) - *Addon verification module for `@discord-interactions/core`. Implements signature verification using the Web SubtleCrypto API.*
 - [@interactions.ts/verify-node](./packages/verify-node/README.md) - *Addon verification module for `@discord-interactions/core`. Implements signature verification using the Node.JS (todo libsodium?) Crypto API.*