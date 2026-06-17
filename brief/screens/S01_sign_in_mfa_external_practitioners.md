# S01 — Sign-in (MFA) — external practitioners

**Personas:** Preferred Supplier, CLC, Barrister, FDRP, Authorised Support Staff
**User stories:** FR-B1-302, FR-B1-303

## Purpose

Primary entry point for external users. MFA challenge after password, device-trust option, independent credential reset path.

## Layout

Centred single-column card (max 480px), full-bleed QLD-navy background panel on the left (desktop), LAQ lock-up top-left. Mobile: full-width form.

## Elements to include

- LAQ lock-up and 'Practitioner Portal' wordmark
- Username and password fields with inline validation
- 'Remember this device for 30 days' checkbox
- Primary 'Continue' button, secondary 'Forgot password' and 'Need help signing in?' links
- MFA step: 6-digit code input, resend timer, alternative method link
- Collection notice acknowledgement link in footer
- Session timeout notice (subtle)

## States

Default, error (incorrect credentials), MFA challenge, account locked, reset-link-sent confirmation.

## Designer notes

Do not offer SSO on this screen — SSO is an In-House Solicitor path on a separate entry (S02).
