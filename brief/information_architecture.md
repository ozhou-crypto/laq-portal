# Information Architecture — LAQ Practitioner Portal

Version 1.0 · prepared from the v3 clickable prototype (22 screens, mockups/v3/).

This document describes **how the portal is structured**, **what lives where**, and **how users move between areas**. It is organised to answer four questions:

1. Who uses the portal and in what context (entry points)?
2. What is the top-level navigation, and what sits underneath each area?
3. How do the main user journeys string screens together?
4. How are objects named and linked (labels, URL patterns, taxonomy)?

---

## 1. Top-level structure

```
LAQ Practitioner Portal
├── Access & Identity
│   ├── Sign in (external)                     → S01
│   ├── Sign in with LAQ Identity (SSO)         → S02
│   └── Collection notice & privacy             → S03  (also every footer)
│
├── Home                                        → S04
│
├── My files (Grant of Aid Files)
│   ├── List view                               → S10
│   └── File detail
│       ├── Summary                             → S11
│       ├── Correspondence                      → S12
│       ├── Documents & uploads                 → S13
│       ├── Invoices (filtered view of S18)
│       ├── Outcomes                            → S14
│       └── Activity (log view of S23 data, scoped to file)
│
├── Applications
│   ├── Draft applications list                 → S07
│   ├── Lodge new application  (5-step flow)    → S06
│   ├── Application submitted                   → S08
│   └── Extension request                       → S09
│
├── Invoices
│   ├── Invoice list & cancel                   → S18
│   └── Submit invoice                          → S17
│
├── Correspondence  (cross-file messaging inbox)
│   └── Two-pane inbox scoped to the user       → S12 (file-scoped) / cross-file variant
│
├── Offers
│   └── Decline an offer                        → S16
│
├── Decision letters
│   └── Historical viewer                       → S15
│
├── Search (cross-cutting)
│   └── Global search results                   → S05
│
├── Notifications
│   └── Notifications centre                    → S22
│
├── Profile & practice
│   ├── Practice details                        → S19
│   └── User & licence management (firm admin)  → S20
│
└── LAQ Admin  (distinct dark chrome)
    └── Audit log & access overview              → S23
```

### How this maps to the v3 navigation bar

The persistent top navigation exposes six areas:

| Nav label        | Target screen                              | Audience |
|------------------|--------------------------------------------|----------|
| Home             | S04 Dashboard                              | All signed-in users |
| My files         | S10 My files list                          | All signed-in users |
| Applications     | S07 Draft applications list                | All signed-in users |
| Invoices         | S18 Invoice list                           | All signed-in users |
| Correspondence   | S12 Correspondence (cross-file inbox)      | All signed-in users |
| Profile          | S19 Practice details (profile dropdown)    | Surfaced via the user-menu dropdown in the top-right |

**Deliberately not in the global nav:**
- **Decision letters (S15)** and **Offers (S16)** are secondary destinations reached from file detail or from the dashboard's "Needs attention" list.
- **Admin audit log (S23)** is in a separate admin console (darker chrome) reached by LAQ System Administrators via Setup, not from the practitioner nav.
- **Search (S05)** is always available through the search field in the white header band, not a nav item.
- **Notifications (S22)** is reached via the bell icon next to the user menu, or "View all notifications →" in the dashboard rail.
- **Collection notice (S03)** is a footer link on every screen (plus a blocking modal on first sign-in).

The **user-menu dropdown** (top-right) surfaces: My profile (→ S19), Practice details (→ S19), User & licence management (→ S20), Sign out (→ S01). LAQ admin users see only My profile + Sign out.

---

## 2. Area-by-area content

### 2.1 Access & Identity
- **S01 Sign-in (external)** — username + password + MFA + SSO button. Three regions (HTML Editor header + OOTB Login Form + HTML Editor footer).
- **S02 Sign-in (SSO)** — "Sign in with LAQ Identity" for in-house solicitors.
- **S03 Collection notice & privacy** — blocking modal on first login; standalone page after that, accessible from every footer.

### 2.2 Home (S04)
The logged-in landing page. Layout is LWR two-column.

- **Page greeting** — name, firm, location, date.
- **At a glance (KPI strip)** — five tiles: Active files, Draft applications, Awaiting LAQ, Invoices in progress, Unread notifications. Each tile deep-links to the matching list view.
- **Needs your attention** — heterogeneous action items (information requests, decision letters to acknowledge, invoice queries). Each item has its own CTA.
- **Recent files** — last three files edited. Row click opens S11.
- **Quick actions** — four icon tiles: Lodge application, Submit extension, Submit invoice, Practice details.
- **Right rail** — Notifications panel (OOtB bell stream) and Draft applications list.

### 2.3 My files (Grant of Aid Files)

**S10 — List view.** Tabbed: Active / Awaiting action / Archived / Closed. Columns: Client · Q-number · Matter type · Status · Next action · Last activity. Row click → S11.

**S11–S14 — File detail (tabbed).** Common chrome: breadcrumb → highlights panel (navy 4px accent) → record actions row → tab strip → content + right rail.

| Tab            | Screen | Primary content |
|----------------|--------|------------------|
| Summary        | S11    | Grant scope, matter details, action-required banner. Related lists rail: decision letters, assigned parties, key dates. |
| Correspondence | S12    | Two-pane thread list + reader with compose box. |
| Documents      | S13    | Drop zone + document grid/list with category tags. |
| Invoices       | →S18 filtered | Invoices for this file. |
| Outcomes       | S14    | Record-outcome form + chronological timeline (editable vs. audit-locked entries). |
| Activity       | →S23 scoped | Read-only audit log entries for this file. |

### 2.4 Applications

- **S07 Draft applications list** — tabbed Record List: My drafts / Shared with me / All firm drafts. Sortable columns, bulk delete with guard, row-level Continue/Duplicate/Delete.
- **S06 Lodge new application** — five-step OmniScript: Client → Matter → Scope → Documents → Review. Autosave, inline validation, conditional logic on matter type.
- **S08 Confirmation** — quoted Q-number with Copy button, three-step "What happens next" timeline, four actions (Email, Print, Start another, Return to home).
- **S09 Extension request** — launched from a file's record actions. File-context panel pinned; optional "Also submit invoice for work performed" toggle that expands a bundled invoice panel.

### 2.5 Invoices

- **S17 Submit invoice** — OmniScript. Editable line items (Task code · Description · Date · Units · Rate · Amount) with live total and scope meter rail. Over-scope warning surfaces three ways: inline banner, red total, destructive CTA variant.
- **S18 Invoice list & cancel** — six columns: Invoice # · File/Q · Submitted · Amount · Status · Payment date. Seven status badges (Submitted, Under review, Approved, Paid, Reduced, Refused, Cancelled). Row-level cancel with reason-code modal; disabled on Paid/Reduced.

### 2.6 Correspondence (S12)
When reached from the global nav, it opens as a cross-file inbox. When reached from a file's Correspondence tab, it is scoped to that file. Both variants are two-pane (thread list + thread view) and share the OOtB Messaging engine.

### 2.7 Offers (S16)
Structured decline form (modal over the Offers page). Reason group: Conflict / Capacity / Other. Conditional sub-fields per reason. Confirmation card on submit with a DC-reference number.

### 2.8 Decision letters (S15)
List pane (letters grouped by year, searchable) + reader pane (embedded PDF + metadata strip + Acknowledge / Download / Print actions). Restricted-access rows are visible with a padlock icon but not openable.

### 2.9 Search (S05)
Global search entry point is the input in the white site header, available on every signed-in page. Results layout: filter rail (240px, type / status / date / location / Q-number) + result stream (Files / Clients / Correspondence / Decisions) + saved-searches panel. Predictive type-ahead in the header groups suggestions by type.

### 2.10 Notifications (S22)
Two-pane inbox, grouped Today / Earlier. Selecting an item opens the full message on the right with a "View file" primary CTA when a record is referenced. Channel preferences link at the top-right.

### 2.11 Profile & practice

- **S19 Practice details** — three sections (Contact · ABN & GST · Banking) each independently editable and saveable, each with its own change-history strip. Banking is masked-by-default with a Reveal toggle; any change triggers LAQ verification (pending state visible until approved).
- **S20 User & licence management (firm admin)** — licence meter per firm-location (X of 3), user list with Invite CTA, delegated access approvals panel.

### 2.12 LAQ Admin (S23)
Distinct dark-navy chrome. KPI strip (active users, licences in use, WCAG issues, privacy acknowledgements pending) + audit log table (seven columns) + export-with-reason modal + access overview of delegated relationships. Reached by LAQ System Administrators only.

---

## 3. Persistent chrome

Present on every signed-in screen except S01–S03, S08 and modal variants (S16):

| Region    | Position     | Content |
|-----------|--------------|---------|
| Site header | top, white | LAQ logo tile (navy) · brand wordmark · global search · notifications bell · annotation toggle · user-menu dropdown |
| Nav band    | below header, navy | Home · My files · Applications · Invoices · Correspondence · Profile (user menu) |
| Annotation legend | below nav (toggleable) | Build-approach colour key |
| Footer      | bottom, navy | © LAQ · Collection notice · Accessibility · Contact LAQ |

The user-menu dropdown (added from the top-right avatar pill) exposes:

- Avatar + user identity header
- My profile → S19
- Practice details → S19
- User & licence management → S20
- Sign out → S01

---

## 4. Primary user journeys

### 4.1 End-to-end Preferred Supplier journey
```
S01 Sign in → S04 Dashboard → S06 Lodge application → S08 Confirmation
→ S11 File detail (Summary) → S13 Documents → S12 Correspondence
→ S17 Submit invoice → S18 Invoice list
```

### 4.2 In-House Solicitor journey
```
S02 SSO → S04 Dashboard → S16 Decline offer  (if conflicted)
        └→ S10 My files → S11 Summary → S14 Outcomes
        └→ S15 Decision letters (acknowledge)
```

### 4.3 Authorised Support Staff journey
```
S01 Sign in → S04 Dashboard → S07 Draft applications → S06 Lodge (prepare)
→ hand off to practitioner for declaration and submit
```

### 4.4 Firm admin journey
```
S01 Sign in → S04 → S19 Practice details → S20 User & licence management
        └→ Invite user · request more licences · approve delegations
```

### 4.5 LAQ System Administrator journey
```
Setup (Salesforce internal) → S23 Admin audit log
        └→ Apply filters → Inspect entry → Export (with reason)
        └→ Access overview → Inspect delegated relationships
```

---

## 5. Global patterns

### 5.1 Naming and terminology
- **Files** = Grants of Aid (Salesforce object `FundingAward` under PSS Grantmaking). Always referred to in the UI as "files" or "grant of aid files", never "cases" or "matters" except when the practitioner's own matter is meant.
- **Q-number** — file reference in `Q-YYYY-NNNNNN` format, monospaced, always shown alongside the client name.
- **Invoice number** — `INV-YYYY-NNNN`, monospaced.
- **Draft reference** — `DR-YYYY-MM-NNNN`, monospaced.
- **Decline reference** — `DC-YYYY-MM-NNNN`, monospaced.
- **LAQ contact** — the grants officer assigned to a file.
- **Firm-location** — the licence scope unit; users are allocated against a firm-location (e.g. "Halloran & Associates — Brisbane CBD").

### 5.2 State taxonomies (icon + text — never colour alone)

**File status:** Active · Awaiting LAQ · Archived · Closed.
**Application status:** Draft · Submitted · Under review · Approved · Refused · Shared.
**Invoice status:** Submitted · Under review · Approved · Paid · Reduced · Refused · Cancelled.
**Decision acknowledgement:** Required · Acknowledged · Not required.

### 5.3 Build-approach annotations
Every component region on a screen is labelled with a build-approach badge, toggleable via the ⚡ button in the header:

| Badge | Meaning |
|-------|---------|
| ⚡ OOtB EC component | Experience Cloud / SLDS component, no code |
| 🃏 OmniStudio: FlexCard | OmniStudio FlexCard |
| 📋 OmniStudio: OmniScript | OmniStudio OmniScript (multi-step form) |
| 🔄 Salesforce Flow | Flow (simpler screen logic) |
| ⚙ OmniStudio: DataRaptor | DataRaptor extract / transform |
| 🔧 Custom LWC | Custom Lightning Web Component (used sparingly) |

### 5.4 URL pattern (Experience Builder pages)

| Page                  | URL path                        |
|-----------------------|---------------------------------|
| Sign in               | `/s/login/`                     |
| Home dashboard        | `/s/`                           |
| My files              | `/s/files`                      |
| File detail           | `/s/file/{Q-number}`            |
| Applications          | `/s/applications`               |
| Lodge application     | `/s/apply/{OmniScriptSession}`  |
| Confirmation          | `/s/apply/confirmation/{Q}`     |
| Invoices              | `/s/invoices`                   |
| Submit invoice        | `/s/invoice/new?file={Q}`       |
| Correspondence        | `/s/messages`                   |
| Decision letters      | `/s/decisions`                  |
| Knowledge             | *(removed from v3 scope)*       |
| Notifications         | `/s/notifications`              |
| Profile / Practice    | `/s/profile`                    |
| User & licences       | `/s/users`                      |
| Privacy statement     | `/s/privacy`                    |
| Admin audit log       | `/admin/audit` (Salesforce internal) |

---

## 6. Role-based access summary

| Area / screen               | Ext. Panel | CLC / Barrister / FDRP | In-House | Firm admin | Support staff | LAQ admin |
|-----------------------------|:----------:|:----------------------:|:--------:|:----------:|:-------------:|:---------:|
| S01 Sign-in (external)       | ✓ | ✓ | – | ✓ | ✓ | – |
| S02 Sign-in (SSO)            | – | – | ✓ | – | – | ✓ |
| S04 Dashboard                | ✓ | ✓ | ✓ | ✓ | ✓ (scoped) | – |
| S06–S09 Applications         | ✓ | ✓ | ✓ | ✓ | ✓ (prep only) | – |
| S10–S14 Files & tabs         | ✓ | ✓ | ✓ | ✓ | ✓ (delegated files) | – |
| S15 Decision letters          | ✓ | ✓ | ✓ | ✓ | ✓ (read only) | – |
| S16 Decline offer             | ✓ | ✓ | ✓ | – | – | – |
| S17–S18 Invoices             | ✓ | ✓ | ✓ | ✓ | ✓ (prep only) | – |
| S19 Practice details          | ✓ (own) | ✓ (own) | – | ✓ (firm) | – | – |
| S20 User & licence management | – | – | – | ✓ | – | – |
| S22 Notifications             | ✓ | ✓ | ✓ | ✓ | ✓ | – |
| S23 Admin audit log           | – | – | – | – | – | ✓ |

Legend: ✓ = full access · – = no access · "(scoped)" = access via delegated context.

---

## 7. What's *not* in the IA (deliberate)

- **Knowledge Base** — removed from the v3 scope at the user's direction; any future reintroduction would live alongside Correspondence/Profile in the nav.
- **Client-facing screens** — this portal is for practitioners, not legal aid applicants.
- **Payment processing screens** — LAQ pays practitioners via external finance system; the portal shows status only.
- **Report builder / CRM Analytics dashboards** — S23 shows KPI tiles sourced from Event Monitoring / reports, but authoring reports is done in Salesforce Setup, not the portal.

---

## 8. Change log

| Version | Date        | Change |
|---------|-------------|--------|
| 1.0     | 29 Apr 2026 | Initial IA drafted from v3 clickable prototype (22 screens). Knowledge Base removed from scope. |
