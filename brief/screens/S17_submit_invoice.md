# S17 — Submit invoice

**Personas:** Preferred Supplier, CLC, Barrister, FDRP, Authorised Support Staff
**User stories:** FR-B1-328, FR-B1-330

## Purpose

Electronic invoice submission against an approved grant of aid, with optional extension bundling.

## Layout

Two-column: left form (lines, totals, attachments), right summary (scope remaining, approved rates, totals).

## Elements to include

- File picker if launched outside a file context
- Line items table (task code, description, date, units, rate, amount) with validation against approved scope
- Attachments (time sheets, receipts)
- Right summary showing scope remaining in real time
- 'Request extension with this invoice' optional toggle
- Submit / save draft / cancel

## States

Draft, validating against scope, scope-exceeded warning, submitted.
