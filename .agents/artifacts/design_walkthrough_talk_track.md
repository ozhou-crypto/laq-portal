# LAQ Practitioner Portal — Design Walkthrough Talk Track

**Purpose:** Guide an internal team through the 23-screen prototype, explaining design decisions, user flows, and Salesforce implementation approach.

**Audience:** Internal stakeholders (product owners, business analysts, Salesforce developers, project managers)

**Duration:** Approximately 45–60 minutes

**How to present:** Open `mockups/index.html` in a browser. Click through each screen as you talk. Press `Shift+D` on any screen to toggle developer annotations (OOTB vs Custom components).

---

## Opening (3 minutes)

> "Today I'm walking you through the design for the LAQ Practitioner Portal — this is the new Salesforce Experience Cloud application that external practitioners and in-house solicitors will use to manage grants of legal aid on behalf of their clients.
>
> There are 23 screens across 9 capability areas. I'll walk through them in the order a practitioner would experience them — starting from login through to the key tasks they perform day-to-day.
>
> A few things to keep in mind as we go through:
> - **OOTB-first approach** — we've designed this to maximise use of Salesforce Experience Cloud out-of-the-box components. On any screen, press Shift+D to see which components are OOTB (green) versus custom (orange).
> - **WCAG 2.2 Level AA** — every screen has been designed for accessibility: visible focus states, 4.5:1 contrast ratios, status conveyed by icon and text (never colour alone).
> - **LAQ brand** — the portal uses LAQ's colour palette: navy, sapphire, sky blue, and teal. The chrome is consistent across all screens.
>
> Let's start with how a practitioner gets in."

---

## Section 1: Access and Identity (5 minutes)

### S01 — Sign-in (MFA)
*Click: S01_signin_mfa.html*

> "This is the login page for external practitioners — panel solicitors, CLCs, barristers, and FDRPs. It uses the standard Experience Cloud login component with LAQ branding.
>
> The practitioner enters their email and password, then clicks Login, which takes them to MFA verification.
>
> **User stories covered:** FR-B1-302 (MFA access), FR-B1-303 (self-service credential reset)."

### S01b — MFA Verify
*Click the Login button or navigate to S01b_mfa_verify.html*

> "After login, the practitioner verifies their identity using their authenticator app. This is a standard Salesforce MFA flow — the screen confirms which authenticator is linked and shows the account email.
>
> Once verified, they proceed to the Collection Notice."

### S03 — Collection Notice and Privacy Statement
*Click Verify or navigate to S03_collection_notice.html*

> "On first login — or when the notice is updated — the practitioner sees this blocking modal. They cannot access the portal until they acknowledge it.
>
> Key design decisions:
> - **No dismiss button** — this is intentionally blocking. You must acknowledge to proceed.
> - **Plain English summary at the top** — not everyone reads legal text, so we've included a clear summary above the full five-section notice.
> - **Sticky footer** — the 'I acknowledge' button is always visible regardless of scroll position.
> - **Version-stamped** — the notice shows a version number and date. The system tracks which version each user acknowledged.
> - **CMS-managed** — the notice text is authored in Experience Cloud CMS, so legal officers can update it without a code deployment.
>
> The only custom component here is the blocking modal itself — a standard SLDS modal doesn't block navigation or write to the audit log.
>
> **User story covered:** #160 (view data collection and privacy policies)."

**Transition:** *Click 'I acknowledge' — the modal fades and navigates to the dashboard.*

---

## Section 2: Home Dashboard (7 minutes)

### S04 — Home Dashboard
*Screen loads after acknowledgement, or navigate to S04_dashboard.html*

> "This is where practitioners land every day. The page is designed to answer three questions in under 5 seconds:
> 1. **What needs my attention?** — the three KPI tiles at the top
> 2. **Where are my current applications?** — the applications list below
> 3. **What offers do I need to respond to?** — the right rail
>
> Let me walk through each region:
>
> **Hero banner** — personalised greeting using Experience Cloud's merge field (fully OOTB). The background is a Brisbane cityscape silhouette. The tagline 'Manage your grants of aid, applications and invoices' tells the practitioner what this portal is for. In production, the banner image is set via the Experience Builder theme panel — completely OOTB.
>
> **KPI tiles** — three standard Tile components showing New Grant of Aid Offers, Active Applications, and Outstanding Invoices. Each has a 'Review' link. These are OOTB Record Count components.
>
> **Applications list** — shows the practitioner's recent applications with Client name, Legal Problem, Submitted date, and Status. Each card has a contextual action button — 'Continue' for drafts, 'Withdraw' for submitted applications. This is a standard Record List component.
>
> **Status badges** — colour-coded by status: grey for Draft, amber for In Review, pink for New. These are configured via Salesforce picklist colours — no custom code needed.
>
> **Right rail — Quick Actions** — four tiles linking to the most common tasks: Lodge Application, Submit Invoice, Request Extension, Manage Availability. All OOTB Tile components.
>
> **Right rail — Grant of Aid Offers** — lists pending offers with Client, Grant Amount, Date of Issue, and Status. The grant amount is intentionally a placeholder as it comes from a different data source. This section is a custom LWC because mixed record types prevent a single standard list view.
>
> **User stories covered:** FR-B1-324 (monitor application status), FR-B1-326 (notifications), FR-B1-308 (search and filter files)."

---

## Section 3: Applications (8 minutes)

### S06 — Lodge New Application
*Click 'Lodge Application' quick action or navigate to S06_lodge_application.html*

> "This is the multi-step application form — the most complex screen in the portal. The practitioner fills this out on behalf of their client to apply for a grant of legal aid.
>
> Key design decisions:
> - **Step indicator on the left** — shows progress through 5 steps, with completed steps marked green
> - **Pre-fill** — if the client has been through the system before, their details are pre-populated (FR-B1-068-2, FR-B1-068-3, FR-B1-317)
> - **Autosave** — the form saves automatically as the practitioner works, so nothing is lost if the browser crashes (FR-B1-070)
> - **Field validation** — mandatory fields are validated before submission, reducing back-and-forth with the Grants team (FR-B1-315)
> - **Dynamic fields** — the form adapts based on the legal problem type selected (FR-B1-316)
> - **Document upload** — practitioners can attach supporting documents (PDF, Word, JPEG) within the form (FR-B1-319, FR-B1-320)
> - **Client communication preference** — the practitioner can indicate whether LAQ should contact the client directly for follow-up (FR-B1-318)
>
> This screen has the most custom components — the multi-step wizard, autosave, and dynamic field logic."

### S07 — Draft Applications
*Navigate to S07_draft_applications.html*

> "If a practitioner saves an application and comes back later, they find it here. This is a standard list view showing all in-progress applications with their last-saved date.
>
> **User story:** FR-B1-314 (save and retrieve applications in progress)."

### S08 — Application Submitted Confirmation
*Navigate to S08_application_submitted.html*

> "After successful submission, the practitioner sees a confirmation page with a unique reference number — for example, IA-00000001. This is the number they quote when calling the Grants team.
>
> No celebratory illustrations — just a tick icon and clear text. Restrained and professional.
>
> **User story:** FR-B1-410 (receive unique reference number on submission)."

### S09 — Extension Request
*Navigate to S09_extension_request.html*

> "When a practitioner needs more time or funding on an existing grant, they submit an extension request here. The form pre-populates the grant details and asks for the reason and requested extension.
>
> FR-B1-330 also allows combining an invoice submission with an extension request in a single workflow.
>
> **User stories:** FR-B1-313 (submit extension), FR-B1-330 (combined invoice + extension)."

---

## Section 4: Grant of Aid Files (7 minutes)

### S10 — My Files List
*Navigate to S10_my_files.html*

> "This is the practitioner's caseload — all their active and archived Grant of Aid files. They can search by Q-Number, client name, or any standard field. Filters and sorting are built into the standard list view.
>
> **User story:** FR-B1-308 (search and filter files)."

### S11 — File Detail (Summary)
*Click into a file or navigate to S11_file_detail.html*

> "This is the heart of the portal — the detailed view of a single Grant of Aid file. It shows:
> - Grant summary — commitment, conditions, approval status
> - Key dates and amounts
> - Tabbed navigation to Correspondence, Documents, and Outcomes
>
> **User story:** FR-B1-325 (view essential grant components including commitment and conditions)."

### S12 — Correspondence Tab
*Click Correspondence tab or navigate to S12_correspondence.html*

> "Practitioners exchange messages with LAQ securely through this tab. All correspondence is linked directly to the file record — no more email chains or faxes.
>
> **User story:** FR-B1-321 (send and receive correspondence electronically via the portal)."

### S13 — Documents and Uploads
*Navigate to S13_documents.html*

> "Practitioners upload and view supporting documents here — QP9 material, court documents, evidence. Supports PDF, Word, JPEG, and other common formats.
>
> **User stories:** FR-B1-319 (upload multiple documents), FR-B1-320 (various file formats)."

### S14 — Outcomes
*Navigate to S14_outcomes.html*

> "This is primarily for in-house solicitors. They record matter outcomes here — hearing results, settlement details — so the grant file reflects the progress of legal work.
>
> **User story:** FR-B1-323 (submit outcomes electronically)."

### S15 — Historical Decision Letters
*Navigate to S15_decision_letters.html*

> "Every decision LAQ has made on a file — approvals, variations, refusals — is viewable here. Practitioners get a full electronic record of LAQ's instructions for matters where their firm is assigned.
>
> **User story:** FR-B1-327 (view historical decision letters and related documents)."

---

## Section 5: Offers (5 minutes)

### S24 — Accept Offer
*Navigate to S24_accept_offer.html*

> "When LAQ makes a Grant of Aid offer, the practitioner reviews the details here — the grant amount, conditions, and scope. They can accept the offer from this screen.
>
> **User story:** FR-B1-325 (review offer details)."

### S24b — Expired Offer
*Navigate to S24b_accept_offer_expired.html*

> "This is a state variant of S24. If the practitioner doesn't respond in time, the offer expires. The screen shows the same details but with no action buttons — just a clear 'Expired' status. Same FlexiPage in Salesforce, different record state.
>
> This is an important edge case — practitioners need to see why they can no longer act on an offer."

### S16 — Decline Offer
*Navigate to S16_decline_offer.html*

> "If a practitioner needs to decline — for example, due to a conflict of interest — they use this structured form. They must provide a reason, which is recorded against the file.
>
> This is primarily used by in-house solicitors.
>
> **User story:** FR-B1-143 (decline offer with structured reasons)."

---

## Section 6: Invoicing (5 minutes)

### S17 — Submit Invoice
*Navigate to S17_submit_invoice.html*

> "Practitioners submit invoices for approved work through this form. The invoice is linked to a specific grant, and line items must fall within the approved scope.
>
> **User stories:** FR-B1-328 (submit invoices electronically), FR-B1-330 (combined invoice + extension workflow)."

### S18 — Invoice List and Cancel
*Navigate to S18_invoice_list.html*

> "This is the practitioner's invoice history — submitted, paid, rejected, cancelled. They can filter by status and date range to verify payment history.
>
> If they need to cancel a submitted invoice, they do it here with a reason — no more emailing Accounts Payable.
>
> **User stories:** FR-B1-309 (search and filter invoices), FR-B1-334 (cancel invoice with reason)."

---

## Section 7: Profile and Firm Management (5 minutes)

### S19 — Practice Details
*Navigate to S19_practice_details.html*

> "Practitioners keep their contact details, ABN, and bank account information current here. Changes go through a verification workflow — the Preferred Supplier Coordinator reviews updates before they take effect.
>
> **User stories:** FR-B1-322 (update contact/ABN/banking), FR-B1-322-A (verification before system update)."

### S20 — User and Licence Management
*Navigate to S20_user_management.html*

> "Firm administrators manage who in their practice can access the portal. They can delegate access to support staff — paralegals and legal secretaries — who then work on behalf of the practitioner.
>
> There's a licence cap of 3 per firm-location. If they need more, they submit a request for LAQ approval.
>
> **User stories:** FR-B1-304 (delegate portal access), FR-B1-304-A (licence cap with approval workflow)."

### S25 — Manage Availability
*Navigate to S25_manage_availability.html*

> "Practitioners can toggle their availability for different areas of law. This feeds into LAQ's assignment process — if a practitioner is unavailable for family law matters, they won't receive offers in that area."

---

## Section 8: Knowledge and Notifications (4 minutes)

### S21 — Knowledge Base
*Navigate to S21_knowledge_base.html*

> "This is the practitioner's reference library — precedent case law database, upcoming CPD events, and the latest LAQ published articles. It's searchable and categorised.
>
> **User story:** FR-B1-310-A (access case law, CPD events, and LAQ articles)."

### S22 — Notifications Centre
*Navigate to S22_notifications.html*

> "All notifications in one place — file status changes, correspondence, decision letters, invoice updates, payment reductions. Practitioners can also set their channel preferences here: which types of updates they want via email, SMS, or portal only.
>
> **User story:** FR-B1-326 (multi-channel notifications about file status, correspondence, invoices, decisions)."

---

## Closing and Discussion (5 minutes)

> "That's the full portal — 23 screens covering the end-to-end practitioner experience from login to invoicing.
>
> **Key design principles to summarise:**
> 1. **OOTB-first** — we've maximised use of Experience Cloud standard components. Press Shift+D on any screen to see the breakdown.
> 2. **Accessible** — WCAG 2.2 Level AA across every screen.
> 3. **Plain Australian English** — no jargon, no marketing language.
> 4. **Realistic data** — Australian names, Q-numbers, AUD currency, real date formats.
> 5. **Professional tone** — no celebratory illustrations, no emojis, restrained and clear.
>
> **What I'd like feedback on today:**
> - Does the information architecture match how practitioners actually work?
> - Are there any flows or edge cases we've missed?
> - Are the OOTB/Custom splits realistic for our Salesforce implementation team?
>
> I'll leave the prototype open for you to click through. The gallery index is at `mockups/index.html`."

---

## Appendix: Screen Quick Reference

| # | Screen | Capability | Key User Stories |
|---|--------|-----------|-----------------|
| S01 | Sign-in (MFA) | Access | FR-B1-302, 303 |
| S01b | MFA Verify | Access | FR-B1-302 |
| S03 | Collection Notice | Access | #160 |
| S04 | Home Dashboard | Home | FR-B1-324, 326, 308 |
| S06 | Lodge Application | Applications | FR-B1-312, 068, 317, 316, 315, 070, 314, 318, 319, 320 |
| S07 | Draft Applications | Applications | FR-B1-314 |
| S08 | Submission Confirmation | Applications | FR-B1-410 |
| S09 | Extension Request | Applications | FR-B1-313, 330 |
| S10 | My Files List | Files | FR-B1-308 |
| S11 | File Detail (Summary) | Files | FR-B1-325, 321, 319, 327 |
| S12 | Correspondence Tab | Files | FR-B1-321 |
| S13 | Documents and Uploads | Files | FR-B1-319, 320 |
| S14 | Outcomes | Files | FR-B1-323 |
| S15 | Decision Letters | Files | FR-B1-327 |
| S16 | Decline Offer | Offers | FR-B1-143 |
| S17 | Submit Invoice | Invoicing | FR-B1-328, 330 |
| S18 | Invoice List and Cancel | Invoicing | FR-B1-309, 334 |
| S19 | Practice Details | Profile | FR-B1-322, 322-A |
| S20 | User and Licence Management | Profile | FR-B1-304, 304-A |
| S21 | Knowledge Base | Knowledge | FR-B1-310-A |
| S22 | Notifications Centre | Notifications | FR-B1-326 |
| S24 | Accept Offer | Offers | FR-B1-325 |
| S24b | Expired Offer | Offers | FR-B1-325 |
| S25 | Manage Availability | Profile | — |
