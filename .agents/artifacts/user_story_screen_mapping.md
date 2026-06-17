# LAQ Practitioner Portal — User Story to Screen Mapping

## Portal Use Cases (grouped by capability area)

---

### 1. Access and Identity (S01, S01b, S02, S03)

**What the user does:** Securely log in, verify identity, acknowledge privacy notice.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S01 — Sign-in (MFA) | FR-B1-302 | Panel practitioners log in with multi-factor authentication to protect sensitive client/case data |
| S01 — Sign-in (MFA) | FR-B1-303 | Practitioners self-service reset their sign-in credentials without contacting LAQ support |
| S01b — MFA Verify | FR-B1-302 | Second step of MFA — enter authenticator code to complete login |
| S02 — Sign-in (SSO) | FR-B1-302-A | In-house solicitors access the portal via SSO using their existing LAQ identity |
| S03 — Collection Notice | #160 | All portal users view and acknowledge LAQ's data collection and privacy policies on first login |

---

### 2. Home and Navigation (S04, S05)

**What the user does:** See an at-a-glance summary of their workload, find things quickly, act on urgent items.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S04 — Home Dashboard | FR-B1-324 | Monitor status of submitted applications and extensions online without calling the Grants team |
| S04 — Home Dashboard | FR-B1-326 | Receive multi-channel notifications (SMS/email) about file status, correspondence, invoices, decisions |
| S04 — Home Dashboard | FR-B1-308 | Search and filter active/archived Grant of Aid files by Q-Number, client name, etc. |
| S05 — Global Search | FR-B1-308 | Search and filter Grant of Aid files using standard and custom fields |
| S05 — Global Search | FR-B1-311 | Context-based search with predictive text to quickly find clients or documents |

---

### 3. Applications (S06, S07, S08, S09)

**What the user does:** Lodge new applications for clients, save drafts, submit, get a reference number, request extensions.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S06 — Lodge Application | FR-B1-312 | Lodge an initial application for a grant of aid electronically on behalf of a client |
| S06 — Lodge Application | FR-B1-068-2 | System pre-fills the application form with client details (preferred supplier) |
| S06 — Lodge Application | FR-B1-068-3 | System pre-fills with data previously submitted for a returning client (in-house solicitor) |
| S06 — Lodge Application | FR-B1-317 | Forms pre-filled with client or case data to save time and reduce errors |
| S06 — Lodge Application | FR-B1-316 | Dynamic, guided and responsive application form experience |
| S06 — Lodge Application | FR-B1-315 | Field validations detect errors before submission, reducing admin follow-up |
| S06 — Lodge Application | FR-B1-070 | Consistent autosave so applications in progress are not lost due to system crashes |
| S06 — Lodge Application | FR-B1-314 | Save an application in progress and retrieve it later |
| S06 — Lodge Application | FR-B1-318 | Select preference for LAQ to communicate directly with the client for follow-up |
| S06 — Lodge Application | FR-B1-319 | Upload and attach multiple supporting documents (e.g. QP9 material) in one transaction |
| S06 — Lodge Application | FR-B1-320 | Attach files in various common formats (PDF, Word, JPEG) |
| S07 — Draft Applications | FR-B1-314 | View and retrieve saved in-progress applications and extensions |
| S08 — Submission Confirmation | FR-B1-410 | Receive a unique reference number after submission to quote when contacting the Grants team |
| S09 — Extension Request | FR-B1-313 | Submit an extension request for existing grants of aid electronically |
| S09 — Extension Request | FR-B1-330 | Submit an invoice and request an extension in a single streamlined workflow |

---

### 4. Grant of Aid Files (S10, S11, S12, S13, S14, S15)

**What the user does:** Browse their caseload, view file details, exchange correspondence, upload documents, record outcomes, review historical decisions.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S10 — My Files List | FR-B1-308 | Search and filter active and archived Grant of Aid files by Q-Number, client name, etc. |
| S11 — File Detail (Summary) | FR-B1-325 | View a summary of essential grant components including commitment and conditions |
| S11 — File Detail (Summary) | FR-B1-321 | Send and receive correspondence electronically, linked to the file record |
| S11 — File Detail (Summary) | FR-B1-319 | Upload multiple supporting documents to the file |
| S11 — File Detail (Summary) | FR-B1-327 | View historical decision letters and related documents |
| S12 — Correspondence Tab | FR-B1-321 | Send and receive correspondence electronically via the portal, secure and linked to the file |
| S13 — Documents and Uploads | FR-B1-319 | Upload and attach multiple supporting documents securely |
| S13 — Documents and Uploads | FR-B1-320 | Attach files in various common formats without restriction |
| S14 — Outcomes | FR-B1-323 | In-house solicitors submit outcomes for the matter electronically so the grant file reflects progress |
| S15 — Decision Letters | FR-B1-327 | View historical decision letters and related documents — full electronic record of LAQ instructions and approvals |

---

### 5. Offers (S16, S24, S24b)

**What the user does:** Review, accept, or decline Grant of Aid offers.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S24 — Accept Offer | FR-B1-325 | Review offer details (commitment, conditions) and accept a Grant of Aid offer |
| S24b — Expired Offer | FR-B1-325 | View an offer that has expired — no action available |
| S16 — Decline Offer | FR-B1-143 | Decline an offer using a structured form with reasons (primarily in-house solicitors for conflicts) |

---

### 6. Invoicing (S17, S18)

**What the user does:** Submit invoices for approved work, track payment status, cancel invoices if needed.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S17 — Submit Invoice | FR-B1-328 | Submit invoices electronically for work performed on Grants of Aid cases |
| S17 — Submit Invoice | FR-B1-330 | Submit an invoice and request extension in a combined workflow |
| S18 — Invoice List and Cancel | FR-B1-309 | Search and filter submitted invoices and extensions to verify status and payment history |
| S18 — Invoice List and Cancel | FR-B1-334 | Cancel a submitted invoice with a reason electronically, without emailing Accounts Payable |

---

### 7. Profile and Firm Management (S19, S20)

**What the user does:** Keep practice details current, manage who in the firm can access the portal.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S19 — Practice Details | FR-B1-322 | Electronically update contact details, ABN, and bank account details for accurate payments |
| S19 — Practice Details | FR-B1-322-A | Updates are sent to a Preferred Supplier Coordinator for verification before the system is updated |
| S20 — User and Licence Management | FR-B1-304 | Approve and delegate portal access to authorised support roles (paralegals, legal secretaries) |
| S20 — User and Licence Management | FR-B1-304-A | Limit portal user licences to 3 per firm-location; additional licences require LAQ approval |

---

### 8. Knowledge and Resources (S21)

**What the user does:** Access reference materials, CPD events, and LAQ publications.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S21 — Knowledge Base | FR-B1-310-A | Access precedent Case Law Database, upcoming CPD events, and latest LAQ published articles |

---

### 9. Notifications (S22)

**What the user does:** View all notifications in one place, choose how they want to be alerted.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S22 — Notifications Centre | FR-B1-326 | Receive and manage multi-channel notifications (SMS, email) about file status, correspondence, decisions, invoices, payment reductions/refusals |

---

### 10. Administration (S23)

**What the user does:** LAQ administrators audit portal activity and ensure compliance.

| Screen | User Story | Summary |
|--------|-----------|---------|
| S23 — Admin Audit Log | FR-B1-306 | Track all user actions on the portal to satisfy auditing requirements |
| S23 — Admin Audit Log | FR-B1-305 | Ensure the portal complies with WCAG 2.2 Level AA (cross-cutting, evidenced here) |

---

## Cross-cutting user stories (apply to multiple screens)

| User Story | Summary | Screens affected |
|-----------|---------|-----------------|
| FR-B1-305 | WCAG 2.2 Level AA compliance | All screens |
| FR-B1-306 | Audit logging of all user actions | All screens (captured in S23) |
| FR-B1-326 | Multi-channel notifications | S04 (dashboard alerts), S22 (preferences) |
| FR-B1-308 | Search and filter files | S04 (quick search), S05 (full results), S10 (file list) |
| FR-B1-314 | Save and retrieve in-progress forms | S06 (autosave), S07 (drafts list) |
| FR-B1-319/320 | Document upload in multiple formats | S06 (during application), S11/S13 (on file) |

---

## Summary: 7 core use cases a practitioner performs

1. **Log in securely** — MFA or SSO, acknowledge privacy notice (S01 → S01b → S03 → S04)
2. **Lodge and manage applications** — create, pre-fill, save drafts, validate, submit, get reference number (S06 → S07 → S08)
3. **Manage their grant of aid caseload** — search files, view details, correspond with LAQ, upload documents, record outcomes (S10 → S11 → S12/S13/S14/S15)
4. **Respond to offers** — review, accept or decline Grant of Aid offers (S24 / S16)
5. **Invoice for work done** — submit invoices, track payment, cancel if needed (S17 → S18)
6. **Keep their profile current** — update contact/ABN/banking, manage firm users and licences (S19, S20)
7. **Stay informed** — dashboard KPIs, notifications, knowledge base, CPD events (S04, S22, S21)
