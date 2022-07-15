# @discord-interactions/verify
<div align="center">
  <p>
    <a href="https://discord.gg/BTXJmW4Bh7"><img src="https://img.shields.io/discord/395423304112013334?logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/verify"><img src="https://img.shields.io/npm/v/@discord-interactions/verify.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@discord-interactions/verify"><img src="https://img.shields.io/npm/dt/@discord-interactions/verify.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/ssMMiles/discord-interactions/actions"><img src="https://github.com/ssMMiles/discord-interactions/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

*Verification module for `@discord-interactions/core`. Implements signature verification using the Web SubtleCrypto API.*

```ts
import verifySignature from "@discord-interactions/verify";
```

### verifySignature

▸ **verifySignature**(publicKey, signature, timestamp, rawBody): `Promise`<`boolean`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `publicKey` | `string` |
| `signature` | `string` |
| `timestamp` | `string` |
| `rawBody`   | `string` |