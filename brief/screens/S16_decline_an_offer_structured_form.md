# S16 — Decline an offer — structured form

**Personas:** In-House Solicitor
**User stories:** FR-B1-143

## Purpose

Structured decline with reason codes (legal conflict, capacity, other) to satisfy audit and reporting.

## Layout

Modal over the offer detail; full page on mobile.

## Elements to include

- Offer context (client, matter, offered by)
- Reason group: conflict / capacity / other — required choice
- Sub-reason detail field (conditional, shown based on reason)
- Free-text note (optional)
- Submit and cancel actions; confirmation screen on submit

## States

Default, conditional sub-fields visible, validation error, submitted.
