# S18 — Invoice list & cancel invoice

**Personas:** Preferred Supplier, In-House, CLC, Barrister, FDRP
**User stories:** FR-B1-334

## Purpose

Track submitted invoices and cancel them with a reason without emailing Accounts Payable.

## Layout

List view with row-level cancel action; cancel opens a modal.

## Elements to include

- Columns: Invoice #, File / Q-number, Submitted, Amount, Status, Payment date
- Status badges: Submitted, Under review, Approved, Paid, Reduced, Refused, Cancelled
- Row action: Cancel (enabled only where allowed)
- Cancel modal: reason dropdown + free text, confirmation, audit capture

## States

All statuses represented; cancel allowed / blocked explanations visible.
