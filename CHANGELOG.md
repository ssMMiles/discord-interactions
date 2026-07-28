# Changelog

## 0.4.0 (2026-07-28)

Catch-up release covering Discord API changes from late 2024 through mid 2026.

### Breaking changes

- **Modal submissions**: Discord now sends Label-wrapped components instead of Action Rows.
  `ModalSubmitContext` parses both the modern and legacy payload shapes, and gains typed getters:
  `getTextInput`, `getSelectValues`, `getRadioValue`, `getCheckbox`, `getCheckboxGroupValues`,
  and `getAttachments` (resolving File Upload ids through `resolved.attachments`).
- **TypeScript / tooling**: builds now require Node >= 18 and TypeScript 5. `discord-api-types`
  bumped from 0.37 to ^0.38.52 - some renamed types (e.g. `APIMessageActionRowComponent` ->
  `APIComponentInMessageActionRow`) leak into public signatures.
- `ButtonStyle` and `TextInputStyle` are now re-exports of the discord-api-types enums rather
  than local copies (adds `ButtonStyle.Premium`).
- `PermissionBits.MANAGE_EMOJIS_AND_STICKERS` renamed to `MANAGE_GUILD_EXPRESSIONS`
  (deprecated alias kept).
- `Bitfield.remove()` previously cleared every bit *except* the ones passed - this is fixed.
- `ModalBuilder.toJSON()` now enforces the 1-5 top-level component limit.
- The repo now uses yarn workspaces; `lerna bootstrap` is no longer needed (`yarn install` does it all).

### New features

- **Components V2** (messages): `TextDisplayBuilder`, `SectionBuilder`, `ThumbnailBuilder`,
  `MediaGalleryBuilder`, `FileBuilder`, `SeparatorBuilder`, `ContainerBuilder`.
  `MessageBuilder.addComponents` accepts them, auto-sets the `IS_COMPONENTS_V2` flag, and
  validates V2 constraints (no content/embeds/poll, max 40 components).
- **Modern modals**: `LabelBuilder`, `FileUploadBuilder`, `RadioGroupBuilder`,
  `CheckboxGroupBuilder`, `CheckboxBuilder`; selects are usable in modals (with `setRequired`);
  `TextInputBuilder` labels are deprecated in favor of Labels.
- **Entry Point commands** (Activities): `EntryPointCommandBuilder` + `EntryPointCommand`,
  routed via the new `command.entryPoint` hook; `launchActivity()` response on command,
  component and modal contexts.
- **Webhook Events**: `DiscordApplication.handleWebhookEvent` + `addWebhookEventHook` for
  `APPLICATION_AUTHORIZED`/`APPLICATION_DEAUTHORIZED`/`ENTITLEMENT_*` HTTP events.
- **Premium buttons**: `PremiumButtonBuilder` (style 6, `sku_id`).
- **Polls**: `PollBuilder` + `MessageBuilder.setPoll`.
- Select menus: `setDefaultValues` (user/role/channel/mentionable), `setChannelTypes` (channel).
- Command builders: `setIntegrationTypes`, `setContexts`, `setNSFW` (user-installable apps).
- Contexts expose `interactionContext`, `authorizingIntegrationOwners`, `attachmentSizeLimit`,
  `entitlements` and the partial `guild` object.
- `MessageBuilder.setSuppressNotifications`; universal `setId` (numeric id) on components.
- REST client: entitlements (incl. consume + test entitlements), SKUs, subscriptions, polls,
  paginated pins, channel messages, current application (incl. `event_webhooks_url`),
  application emoji, guild message search, interaction callback with `with_response`,
  `with_components` on followups/webhooks (auto-set for V2 messages).

### Fixes

- Cloudflare Workers signature verification uses the standard `"Ed25519"` algorithm name.
- `PermissionBits` covers bits 41-52 (soundboard, expressions, events, voice messages, polls,
  external apps, pin messages, bypass slowmode).
- Channel command options allow Directory, Forum and Media channels.
- `DiscordApiClient.userAgent` accessor no longer recurses infinitely.
- Select-menu handled-components are exported from `@discord-interactions/core`'s root.
