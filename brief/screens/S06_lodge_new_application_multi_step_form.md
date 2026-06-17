# S06 — Lodge new application — multi-step form

**Personas:** Preferred Supplier, In-House Solicitor, CLC, Authorised Support Staff
**User stories:** FR-B1-312, FR-B1-314, FR-B1-315, FR-B1-316, FR-B1-317, FR-B1-070

## Purpose

Dynamic, guided, autosaving initial application for a grant of aid.

## Layout

Two-column: left progress stepper (5–7 steps), right form panel. Persistent footer with Save & exit, Previous, Save & continue.

## Elements to include

- Step indicator with completion ticks and conditional-step pills
- Section heading and short help text per step
- Pre-filled client / matter fields sourced from the client record (editable where allowed)
- Field-level inline validation and section-level summary on step change
- Autosave status chip ('Saved 12 seconds ago')
- 'Hand off follow-up to LAQ' preference toggle
- Review & submit step with editable collapsed sections and submission declaration

## States

Empty, in-progress with autosave, validation errors, submitted (see S08), save-and-exit confirmation.

## Designer notes

Form is dynamic — the step set changes based on matter type. Stepper must visually reflect conditional steps appearing and disappearing.
