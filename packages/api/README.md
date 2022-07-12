# @discord-interactions/api
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/api"><img src="https://img.shields.io/npm/v/@discord-interactions/api.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/api"><img src="https://img.shields.io/npm/dt/@discord-interactions/api.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/discord-interactions/actions"><img src="https://github.com/ssMMiles/discord-interactions/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

*A simple, typed wrapper around the Discord API.*

This package is built on top of [`@discord-interactions/request`](../request) and [`discord-api-types`](https://www.npmjs.com/package/discord-api-types) - it is fully typed and handles rate limits appropriately.

It is used internally within [`@discord-interactions/core`](../core), but can easily be used outside of this context.

## Installation

`npm install @discord-interactions/api`

## Example Usage

```ts
import { client } from "discord-api";

try {
	const response = await client.postGlobalApplicationCommand(
		process.env.APPLICATION_ID,
		payload
	);
} catch (error: unknown) {
	console.error((error as Error).message);
}
```

# Credits
This code is derived from @IanMitchell's [Interaction Kit: discord-api](https://github.com/IanMitchell/interaction-kit/packages/discord-api) and distributed under the Apache 2 license. It was changed to use [`@discord-interactions/request`](../request).