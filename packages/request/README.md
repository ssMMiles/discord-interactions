# discord-request
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/request"><img src="https://img.shields.io/npm/v/@discord-interactions/request.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/request"><img src="https://img.shields.io/npm/dt/@discord-interactions/request.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/discord-interactions/actions"><img src="https://github.com/ssMMiles/discord-interactions/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

*A Discord HTTP client that handles global and resource rate limits automatically.*

> **Looking for an API Wrapper?**
> Check out [`@discord-interactions/api`](https://github.com/ssMMiles/discord-interactions/blob/main/packages/api/) instead. This package is low level, and works best in libraries as opposed to applications.

## Usage

This package works best in conjuction with [`discord-api-types`](https://www.npmjs.com/package/discord-api-types). To begin, install both:

`npm install discord-api discord-api-types`

Then you can combine the two (with or without typing the results):

```ts
import Client from "discord-request";
import {
	Routes,
	RESTGetAPIApplicationGuildCommandsResult,
} from "discord-api-types/v10";

const instance = new Client();

const guildCommands = instance.get(
	Routes.applicationGuildCommands(applicationId, guildId)
) as Promise<RESTGetAPIApplicationGuildCommandsResult>;
```

## Options

When creating a new client, you can configure it by passing in optional arguments:

```ts
const instance = new Client({
	retries: 0,
	timeout: 1000,
	globalRequestsPerSecond: 100,
	onRateLimit: (data) => console.log({ data }),
});
```

Every parameter listed below is optional.

- `api`: The API URL to use. Defaults to `https://discord.com/api`.
- `version`: The API version to use. Defaults to `10`.
- `cdn`: The CDN URL to use. Defaults to `https://cdn.discordapp.com`.
- `headers`: An object of additional headers to send with each request.
- `userAgent`: The user agent to use. Defaults to `Discord Request v0`.
- `retries`: The number of times to retry a request if it fails. Defaults to `3`.
- `timeout`: The number of milliseconds to wait before timing out a request. Defaults to `15000` (15 seconds).
- `globalRequestsPerSecond`: The number of global requests per second to allow. Defaults to `50`.
- `shutdownSignal`: An AbortSignal to use when you need to cancel all unfinished requests to shut down the application.
- `queueSweepInterval`: The number of milliseconds to wait between sweeping the queue. Defaults to `0` (no sweeping). **If you use discord-request in a persistent environment, you should set this value.**
- `bucketSweepInterval`: The number of milliseconds to wait between sweeping the buckets. Defaults to `0` (no sweeping). **If you use discord-request in a persistent environment, you should set this value.**
- `onBucketSweep`: See callbacks below.
- `onQueueSweep`: See callbacks below.
- `onRateLimit`: See callbacks below.
- `onRequest`: See callbacks below.

#### Callbacks

###### `onBucketSweep?: (swept: Map<string, Bucket>) => void;`

Runs when a bucket sweep finishes. Returns a Map of removed buckets.

###### `onQueueSweep?: (swept: Map<string, Queue>) => void;`

Runs when a queue sweep finishes. Returns a Map of removed queues.

###### `onRateLimit?: (data: RateLimitData) => void;`

Runs when a rate limit is encountered. Returns information about the rate limit.

###### `onRequest?: (parameters: Route, resource: string, init: RequestInit, options: RequestOptions, retries: number) => void;`

Runs when a request is sent to the Discord API. Returns information used to send the request.

# Credits
This code is derived from @IanMitchell's [Interaction Kit: discord-request & discord-error](https://github.com/IanMitchell/interaction-kit) and distributed under the Apache 2 license. It was changed to merge these packages together.