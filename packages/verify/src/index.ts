declare function verifyInteractionSignature(
  publicKey: string,
  signature: string,
  timestamp: string,
  body: string
): Promise<boolean>;
