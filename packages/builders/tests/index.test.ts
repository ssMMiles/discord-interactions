/* eslint-disable @typescript-eslint/ban-ts-comment */

import { InteractionResponseType } from "discord-api-types/v10";
import { readFileSync } from "fs";
import { EmbedBuilder, MessageBuilder } from "../dist/index.js";

describe("Responses", () => {
  describe("Messages", () => {
    it("Text", () => {
      expect(new MessageBuilder("Hello World").toJSON()).toEqual({
        content: "Hello World"
      });
    });

    it("Embeds", () => {
      expect(new MessageBuilder(new EmbedBuilder("Hello World", "My description")).toJSON()).toEqual({
        embeds: [
          {
            title: "Hello World",
            description: "My description"
          }
        ]
      });
    });

    it("Attached Files", async () => {
      const file = readFileSync("./tests/attachment");
      const form = new MessageBuilder("Example")
        .addAttachments({
          name: "attachment",
          data: file
        })
        .toInteractionResponse(InteractionResponseType.ChannelMessageWithSource) as FormData;

      expect(form.constructor.name).toEqual("FormData");

      expect(form.has("payload_json")).toEqual(true);
      expect(form.has("files[0]")).toEqual(true);

      //@ts-ignore
      expect(await form.get("files[0]")?.text()).toEqual(file.toString());
    });
  });
});
