# Discord Interactions.TS
<div align="center">
  <img src="https://github.com/ssMMiles/interactions.ts/raw/main/logo.png" alt="Logo" />
  <br />
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord Server" /></a>
    <a href="https://www.npmjs.com/package/interactions.ts"><img src="https://img.shields.io/npm/v/interactions.ts.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/interactions.ts"><img src="https://img.shields.io/npm/dt/interactions.ts.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/interactions.ts/actions"><img src="https://github.com/ssMMiles/interactions.ts/actions/workflows/tests.yml/badge.svg" alt="Tests tatus" /></a>
  </p>
</div>

A complete framework for [Discord's Interactions](https://discord.com/developers/docs/interactions/receiving-and-responding), allowing you to build new Slash Command based bots with ease.

*Although this is still a work in progress, the current version of `interactions.ts` is stable and mostly feature complete. Current work is to remove dependencies on Node.js APIs and primitives, allowing for use in environments like CF Workers and Vercel's Edge Functions.*

### To-Do:
 - Move the `builders` package out of `core`.
 - Decouple signature verification into `verify` and `verify-node` packages, using WebCrypto/Libsodium.
 - Implement a `rest` module based on `@discordjs/rest`, with typed routes, Discord error parsing, support for external ratelimit relays ([Twilight](https://github.com/twilight-rs/http-proxy), [Nirn](https://github.com/germanoeich/nirn-proxy)). The `request` and `request-node` packages will provide the implementations for actually sending requests, using Web/Node APIs respectively.
 - Better documentation and more tests.

## Packages
 - [@interactions.ts/core](https://github.com/ssMMiles/interactions.ts/tree/main/packages/core)
 - [@interactions.ts/builders](https://github.com/ssMMiles/interactions.ts/tree/main/packages/builders)
 - [@interactions.ts/rest](https://github.com/ssMMiles/interactions.ts/tree/main/packages/rest)
 - [@interactions.ts/request](https://github.com/ssMMiles/interactions.ts/tree/main/packages/request)
 - [@interacitonts.ts/request-node](https://github.com/ssMMiles/interactions.ts/tree/main/packages/request-node)
 - [@interactions.ts/verify](https://github.com/ssMMiles/interactions.ts/tree/main/packages/verify)
 - [@interactions.ts/verify-node](https://github.com/ssMMiles/interactions.ts/tree/main/packages/verify-node)