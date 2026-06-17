# S20 — User & licence management (firm admin)

**Personas:** Preferred Supplier principal, Authorised Support Staff, LAQ System Administrator
**User stories:** FR-B1-304, FR-B1-304-A

## Purpose

Firm-level console to delegate portal access, enforce the 3-licence cap per firm-location, and request LAQ approval for additional licences.

## Layout

List of users with role and location; 'Invite user' CTA; licence meter and 'Request more licences' flow.

## Elements to include

- Licence meter per firm-location: X of 3 used, colour-coded
- User list: name, role (Practitioner / Support), location, status, last active
- Invite user modal with role and location pickers
- Delegation approval flow — the practitioner whose files are being delegated must approve
- Request-more-licences workflow with LAQ approval states

## States

Under cap, at cap, over-cap-requested, LAQ-approved increase, LAQ-declined increase.
