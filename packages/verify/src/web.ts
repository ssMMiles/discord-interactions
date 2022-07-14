const encoder = new TextEncoder();

const KEYS: Record<string, CryptoKey> = {};

function hexToBinary(hex: string | null) {
  if (hex == null) {
    return new Uint8Array(0);
  }

  const buffer = new Uint8Array(Math.ceil(hex.length / 2));
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }

  return buffer;
}

async function getCryptoKey(publicKey: string) {
  if (KEYS[publicKey] != null) {
    return KEYS[publicKey];
  }

  const key = await crypto.subtle.importKey(
    "raw",
    hexToBinary(publicKey),
    {
      name: "NODE-ED25519",
      namedCurve: "NODE-ED25519"
    },
    true,
    ["verify"]
  );

  KEYS[publicKey] = key;
  return key;
}

/**
 * Verify an incoming interaction's signature.
 * @param publicKey Your Application's Public Key
 * @param timestamp Interaction Request's "X-Signature-Timestamp" Header
 * @param signature Interaction Request's "X-Signature-Ed25519" Header
 * @param body Raw Interaction Request Body - If you parse this as JSON beforehand, verification will fail for certain interactions.
 * @returns Whether or not the signature is valid.
 */
export default async function verifyInteractionSignature(
  publicKey: string,
  signature: string,
  timestamp: string,
  body: string
): Promise<boolean> {
  const key = await getCryptoKey(publicKey);
  const signatureBin = hexToBinary(signature);

  if (signature == null || timestamp == null || body == null) {
    return false;
  }

  return crypto.subtle.verify("NODE-ED25519", key, signatureBin, encoder.encode(timestamp + body));
}
