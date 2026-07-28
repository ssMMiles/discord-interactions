import { ChannelType, ComponentType, MessageFlags } from "discord-api-types/v10";
import {
  Bitfield,
  ButtonStyle,
  ChannelSelectMenuBuilder,
  CheckboxBuilder,
  CheckboxGroupBuilder,
  ContainerBuilder,
  FileBuilder,
  FileUploadBuilder,
  LabelBuilder,
  MediaGalleryBuilder,
  MessageBuilder,
  ModalBuilder,
  PermissionBits,
  PollBuilder,
  PremiumButtonBuilder,
  RadioGroupBuilder,
  SectionBuilder,
  SeparatorBuilder,
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  TextDisplayBuilder,
  TextInputBuilder,
  ThumbnailBuilder,
  UserSelectMenuBuilder
} from "../dist/index.js";

describe("Components V2 builders", () => {
  it("serializes a Container with nested components", () => {
    const container = new ContainerBuilder("Hello!")
      .addComponents(
        new SectionBuilder("Section text").setAccessory(new ThumbnailBuilder("https://cdn.test/thumb.png")),
        new SeparatorBuilder(),
        new MediaGalleryBuilder("https://cdn.test/image.png"),
        new FileBuilder("report.pdf")
      )
      .setAccentColor(0x5865f2)
      .setSpoiler(false);

    expect(container.toJSON()).toEqual({
      type: ComponentType.Container,
      accent_color: 0x5865f2,
      spoiler: false,
      components: [
        { type: ComponentType.TextDisplay, content: "Hello!" },
        {
          type: ComponentType.Section,
          components: [{ type: ComponentType.TextDisplay, content: "Section text" }],
          accessory: { type: ComponentType.Thumbnail, media: { url: "https://cdn.test/thumb.png" } }
        },
        { type: ComponentType.Separator },
        { type: ComponentType.MediaGallery, items: [{ media: { url: "https://cdn.test/image.png" } }] },
        { type: ComponentType.File, file: { url: "attachment://report.pdf" } }
      ]
    });
  });

  it("supports the universal numeric id field", () => {
    expect(new TextDisplayBuilder("x").setId(5).toJSON()).toEqual({
      type: ComponentType.TextDisplay,
      id: 5,
      content: "x"
    });
  });

  it("requires a Section accessory", () => {
    expect(() => new SectionBuilder("text").toJSON()).toThrow();
  });
});

describe("MessageBuilder Components V2 mode", () => {
  it("auto-sets the IsComponentsV2 flag for V2 components", () => {
    const message = new MessageBuilder().addComponents(new TextDisplayBuilder("Hi"));

    expect(message.isComponentsV2).toBe(true);
    expect((message.toJSON().flags ?? 0) & MessageFlags.IsComponentsV2).toBe(MessageFlags.IsComponentsV2);
  });

  it("rejects content on V2 messages", () => {
    const message = new MessageBuilder().addComponents(new TextDisplayBuilder("Hi")).setContent("nope");

    expect(() => message.toJSON()).toThrow(/content/);
  });

  it("rejects more than 40 components", () => {
    const message = new MessageBuilder();

    for (let i = 0; i < 41; i++) {
      message.addComponents(new TextDisplayBuilder(`line ${i}`));
    }

    expect(() => message.toJSON()).toThrow(RangeError);
  });

  it("leaves legacy Action Row messages untouched", () => {
    const message = new MessageBuilder().setContent("hello");

    expect(message.isComponentsV2).toBe(false);
    expect(message.toJSON()).toEqual({ content: "hello" });
  });
});

describe("Modern modal builders", () => {
  it("builds Label-wrapped modals", () => {
    const modal = new ModalBuilder("myModal", "My Modal").addComponents(
      new LabelBuilder("Name", new TextInputBuilder("name")).setDescription("Your name"),
      new LabelBuilder("Color", new StringSelectMenuBuilder().setCustomId("color").setRequired(false)),
      new LabelBuilder("Size", new RadioGroupBuilder("size").addOptions(
        { value: "s", label: "Small" },
        { value: "l", label: "Large" }
      )),
      new LabelBuilder("Files", new FileUploadBuilder("files").setMaxValues(3)),
      new TextDisplayBuilder("Some help text")
    );

    const data = modal.toJSON();
    expect(data.custom_id).toBe("myModal");
    expect(data.components).toHaveLength(5);
    expect(data.components[0]).toEqual({
      type: ComponentType.Label,
      label: "Name",
      description: "Your name",
      component: { type: ComponentType.TextInput, custom_id: "name", style: 1, label: undefined }
    });
  });

  it("enforces the 1-5 top-level component limit", () => {
    expect(() => new ModalBuilder("empty", "Empty").toJSON()).toThrow(RangeError);
  });

  it("enforces Radio Group and Checkbox Group option counts", () => {
    expect(() => new RadioGroupBuilder("r").addOptions({ value: "only", label: "Only" }).toJSON()).toThrow(RangeError);
    expect(() => new CheckboxGroupBuilder("c").toJSON()).toThrow(RangeError);
    expect(new CheckboxBuilder("x").setDefault().toJSON()).toEqual({
      type: ComponentType.Checkbox,
      custom_id: "x",
      default: true
    });
  });
});

describe("Buttons and selects", () => {
  it("builds premium buttons", () => {
    expect(new PremiumButtonBuilder("12345").toJSON()).toEqual({
      type: ComponentType.Button,
      style: ButtonStyle.Premium,
      sku_id: "12345"
    });
  });

  it("supports select default values and channel types", () => {
    expect(new UserSelectMenuBuilder().setCustomId("u").setDefaultValues("1", "2").toJSON()).toEqual({
      type: ComponentType.UserSelect,
      custom_id: "u",
      default_values: [
        { id: "1", type: "user" },
        { id: "2", type: "user" }
      ]
    });

    expect(
      new ChannelSelectMenuBuilder().setCustomId("c").setChannelTypes(ChannelType.GuildText, ChannelType.GuildForum).toJSON()
    ).toEqual({
      type: ComponentType.ChannelSelect,
      custom_id: "c",
      channel_types: [ChannelType.GuildText, ChannelType.GuildForum]
    });
  });
});

describe("PollBuilder", () => {
  it("builds poll create requests", () => {
    expect(
      new PollBuilder("Favorite color?").addAnswers("Blue", "Green").setDuration(48).setAllowMultiselect().toJSON()
    ).toEqual({
      question: { text: "Favorite color?" },
      answers: [{ poll_media: { text: "Blue" } }, { poll_media: { text: "Green" } }],
      duration: 48,
      allow_multiselect: true
    });
  });

  it("requires at least one answer", () => {
    expect(() => new PollBuilder("Empty?").toJSON()).toThrow(RangeError);
  });
});

describe("Permissions", () => {
  it("removes only the targeted bit", () => {
    const bits = new Bitfield(PermissionBits.SEND_MESSAGES, PermissionBits.EMBED_LINKS, PermissionBits.PIN_MESSAGES);

    bits.remove(PermissionBits.EMBED_LINKS);

    expect(bits.has(PermissionBits.SEND_MESSAGES)).toBe(true);
    expect(bits.has(PermissionBits.PIN_MESSAGES)).toBe(true);
    expect(bits.has(PermissionBits.EMBED_LINKS)).toBe(false);
  });

  it("defines the 2024-2026 permission bits", () => {
    expect(PermissionBits.CREATE_GUILD_EXPRESSIONS).toBe(1n << 43n);
    expect(PermissionBits.CREATE_EVENTS).toBe(1n << 44n);
    expect(PermissionBits.SEND_POLLS).toBe(1n << 49n);
    expect(PermissionBits.USE_EXTERNAL_APPS).toBe(1n << 50n);
    expect(PermissionBits.PIN_MESSAGES).toBe(1n << 51n);
    expect(PermissionBits.BYPASS_SLOWMODE).toBe(1n << 52n);
  });
});

describe("Command builder additions", () => {
  it("serializes integration types, contexts and nsfw", () => {
    const data = new SlashCommandBuilder("test", "A test command")
      .setIntegrationTypes(0, 1)
      .setContexts(0, 1, 2)
      .setNSFW(false)
      .toJSON();

    expect(data.integration_types).toEqual([0, 1]);
    expect(data.contexts).toEqual([0, 1, 2]);
    expect(data.nsfw).toBe(false);
  });
});
