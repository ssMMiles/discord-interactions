import { should } from "chai";
import { DiscordApplication, InteractionSecurityHeaders } from "../src";

should();

const publicKey = Buffer.from("67d3b5eaf0c0bf6b5a602d359daecc86a7a74053490ec37ae08e71360587c870", "hex");

const headers: InteractionSecurityHeaders = {
  "X-Signature-Ed25519":
    "dbd6c2a5df02e85cdd1779f7ff3ee14d51e56c7f7d9b30d12253ccdd9e84949327db7e1b41e636975b16103316a144f8b98a290112b19e8148bbafa6f4e04209",
  "X-Signature-Timestamp": ""
};

const invalidHeaders = {
  "X-Signature-Ed25519": headers["X-Signature-Ed25519"].replace("1", "2"),
  "X-Signature-Timestamp": headers["X-Signature-Timestamp"]
};

const body = "Oh no!";

describe("Interaction Authentication", () => {
  it("Valid Signature Accepted", () => {
    DiscordApplication.verifyInteractionSignature(
      publicKey,
      headers["X-Signature-Timestamp"],
      headers["X-Signature-Ed25519"],
      "Oh no!"
    ).should.be.true;
  });

  it("Invalid Signature Denied", () => {
    DiscordApplication.verifyInteractionSignature(
      publicKey,
      invalidHeaders["X-Signature-Timestamp"],
      invalidHeaders["X-Signature-Ed25519"],
      body
    ).should.be.false;
  });
});
