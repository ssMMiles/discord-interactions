import * as core from "@discord-interactions/core";
import { createPublicKey, verify } from "node:crypto";

async function verifyInteractionSignature(
  publicKey: string,
  timestamp: string,
  signature: string,
  body: string
): Promise<boolean> {
  const message = Buffer.from(timestamp + body, "utf-8");
  const signatureBuffer = Buffer.from(signature, "hex");

  return verify(
    null,
    message,
    createPublicKey({
      key: Buffer.concat([Buffer.from("MCowBQYDK2VwAyEA", "base64"), Buffer.from(publicKey, "hex")]),
      format: "der",
      type: "spki"
    }),
    signatureBuffer
  );
}

export function register() {
  core.DiscordApplication.verifyInteractionSignature = verifyInteractionSignature;
}
