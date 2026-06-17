# S19 — Practice details — contact, ABN, banking

**Personas:** Preferred Supplier, CLC, Barrister, FDRP
**User stories:** FR-B1-322

## Purpose

Self-service update of contact, ABN and bank account details so payments are processed accurately.

## Layout

Sectioned settings page. Each section is individually editable and saveable.

## Elements to include

- Section: Contact details (addresses, phone, email)
- Section: ABN / GST registration with validation
- Section: Bank account for payments with masked account numbers and 'reveal' control
- Change history log (read-only) per section
- Where a change requires LAQ verification, clearly flag the pending-review state

## States

Default, edit mode, saved, pending LAQ verification, verification failed.
