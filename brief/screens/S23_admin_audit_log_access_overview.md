# S23 — Admin audit log & access overview

**Personas:** LAQ System Administrator
**User stories:** FR-B1-306, FR-B1-305

## Purpose

Audit all user actions and surface WCAG / licence / privacy compliance at a glance.

## Layout

Full-width admin shell distinct from the practitioner theme (darker chrome) so users never confuse it with practitioner-facing screens.

## Elements to include

- KPI strip: active users, licences in use, WCAG issues open, privacy acknowledgements pending
- Audit log table: timestamp, actor, acting-on-behalf-of, action, target, IP, result
- Filters: user, firm, action type, date range
- Export (CSV/JSON) with audit reason prompt
- Access overview panel: delegated relationships across firms

## States

Populated, filtered, exported, empty (unlikely in production).
