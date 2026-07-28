import { webcrypto } from "node:crypto";
import verifyNode from "../dist/node.js";
import verifyWeb from "../dist/web.js";

const supportsEd25519 = async (): Promise<boolean> => {
  try {
    await webcrypto.subtle.generateKey({ name: "Ed25519" }, false, ["sign", "verify"]);
    return true;
  } catch {
    return false;
  }
};

describe("Ed25519 signature verification", () => {
  let publicKeyHex: string;
  let signatureHex: string;
  const timestamp = "1700000000";
  const body = JSON.stringify({ type: 1 });
  let available = false;

  beforeAll(async () => {
    available = await supportsEd25519();
    if (!available) return;

    const keyPair = (await webcrypto.subtle.generateKey({ name: "Ed25519" }, true, [
      "sign",
      "verify"
    ])) as CryptoKeyPair;

    const rawPublicKey = new Uint8Array(await webcrypto.subtle.exportKey("raw", keyPair.publicKey));
    publicKeyHex = Buffer.from(rawPublicKey).toString("hex");

    const signature = await webcrypto.subtle.sign(
      "Ed25519",
      keyPair.privateKey,
      new TextEncoder().encode(timestamp + body)
    );
    signatureHex = Buffer.from(new Uint8Array(signature)).toString("hex");
  });

  it("web implementation accepts valid signatures", async () => {
    if (!available) return;

    expect(await verifyWeb(publicKeyHex, signatureHex, timestamp, body)).toBe(true);
  });

  it("web implementation rejects tampered bodies", async () => {
    if (!available) return;

    expect(await verifyWeb(publicKeyHex, signatureHex, timestamp, body + "tampered")).toBe(false);
  });

  it("node implementation accepts valid signatures", async () => {
    if (!available) return;

    expect(await verifyNode(publicKeyHex, signatureHex, timestamp, body)).toBe(true);
  });

  it("node implementation rejects tampered bodies", async () => {
    if (!available) return;

    expect(await verifyNode(publicKeyHex, signatureHex, timestamp, body + "tampered")).toBe(false);
  });
});
