# S04 — Home dashboard

**Personas:** Preferred Supplier, CLC, In-House Solicitor, Barrister, FDRP
**User stories:** FR-B1-324, FR-B1-326, FR-B1-308

## Purpose

Default landing page after sign-in. Surfaces what needs attention today.

## Layout

Three-column desktop: left navigation, centre main region with stacked widget rows, right rail with notifications. Single-column stacked on mobile.

## Elements to include

- Greeting and firm-location context switcher (top)
- KPI strip: Active files, Drafts, Awaiting LAQ, Invoices in progress, Unread notifications
- 'Needs your attention' list (LAQ info requests, decision letters to acknowledge, invoice issues)
- Recent files list (last 10 opened, with search)
- Shortcut tiles: Lodge new application, Submit extension, Submit invoice, Update practice details
- Notifications panel (right rail) with SMS/email channel indicator

## States

First-time empty state, populated state, high-volume state with pagination.

## Designer notes

KPI tiles are clickable and pre-filter the file list.
