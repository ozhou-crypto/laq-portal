# S07 — Draft applications list

**Personas:** Preferred Supplier, CLC, In-House Solicitor, Authorised Support Staff
**User stories:** FR-B1-314

## Purpose

Retrieve in-progress drafts. Critical because complex submissions stretch over days.

## Layout

Data table with sortable columns and row-level actions. Top strip with 'New application' CTA and filter chips.

## Elements to include

- Columns: Client / matter reference, Type, Last edited, Progress %, Last editor, Status
- Row actions: Continue, Delete, Duplicate
- Empty state: 'No drafts — start a new application'
- Bulk-delete with confirmation

## States

Empty, populated, last-editor shows support-staff delegation.

## Designer notes

Progress % is derived from the stepper in S06.
