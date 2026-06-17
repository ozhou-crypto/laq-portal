# WCAG 2.2 Level AA Accessibility Audit — LAQ Practitioner Portal Mockups

**Date:** 11 May 2026  
**Scope:** All 23 HTML mockup screens in `/mockups/`  
**Standard:** WCAG 2.2 Level AA  

---

## Summary

The mockups generally do a good job with semantic HTML, `aria-label` attributes, visible labels on form fields, and status conveyed by icon + text (not colour alone). However, there are **14 distinct issues** that would fail WCAG 2.2 Level AA compliance. None are insurmountable — most are CSS fixes.

| Severity | Count |
|----------|-------|
| Critical | 3     |
| Major    | 6     |
| Minor    | 5     |

---

## Critical Issues

### 1. No skip-navigation link on any screen
**WCAG 2.4.1 — Bypass Blocks (Level A)**  
**Screens affected:** All screens (S01–S23)

No screen provides a "Skip to main content" link. Every authenticated screen has a fixed top bar, a left navigation column, and sometimes breadcrumbs, forcing keyboard and screen-reader users to tab through dozens of elements on every page load.

**Fix:** Add a visually-hidden skip link as the first focusable element in `<body>`:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
with CSS that makes it visible on focus.

---

### 2. Row actions hidden from keyboard users (S07 — Draft Applications)
**WCAG 2.1.1 — Keyboard (Level A)**  
**Screen:** S07

Row actions (Continue, Duplicate, Delete) are set to `display: none` and only shown on `:hover`:
```css
.data-table tbody tr .row-actions { display: none; }
.data-table tbody tr:hover .row-actions { display: flex; }
```
There is no `:focus-within` rule. Keyboard users can never reach these actions.

**Contrast with S10** (My Files), which correctly adds:
```css
tr:focus-within .row-actions { visibility: visible; }
```

**Fix:** Add `tr:focus-within .row-actions { display: flex; }` to S07, and change from `display: none` to `visibility: hidden` (so elements remain in the accessibility tree and are tab-reachable).

---

### 3. Reduced-opacity text fails contrast on navy backgrounds
**WCAG 1.4.3 — Contrast Minimum (Level AA)**  
**Screens affected:** S02, S12, and all screens using the highlights panel pattern

Several text elements use white text with reduced `opacity` on the `#05325F` navy background, falling below the 4.5:1 minimum:

| Screen | Element | Effective colour | Background | Ratio | Verdict |
|--------|---------|-----------------|------------|-------|---------|
| S02 | `.brand-panel__footer-note` | `rgba(255,255,255,0.6)` | `#05325F` | ~3.4:1 | **FAIL** |
| S02 | `.brand-panel__org` | `rgba(255,255,255,0.75)` | `#05325F` | ~5.0:1 | Pass (but tight) |
| S02 | `.brand-panel__description` | `rgba(255,255,255,0.85)` | `#05325F` | ~7.4:1 | Pass |
| S12 | `.hl-field-label` | `rgba(255,255,255,0.5)` | `#05325F` | ~2.6:1 | **FAIL** |
| S12 | `.hl-sub` | `rgba(255,255,255,0.65)` | `#05325F` | ~3.8:1 | **FAIL** |
| S12 | `.tab-btn` (inactive) | `rgba(255,255,255,0.6)` | `#05325F` | ~3.4:1 | **FAIL** |

**Fix:** Replace `opacity` values with explicit lighter colours that meet 4.5:1 contrast against `#05325F`. For example:
- Use `#a3bdd4` (4.5:1) instead of `rgba(255,255,255,0.5)`
- Use `#c4d8e8` (7:1) instead of `rgba(255,255,255,0.65)`

---

## Major Issues

### 4. `#706e6b` helper text fails contrast on white/light backgrounds
**WCAG 1.4.3 — Contrast Minimum (Level AA)**  
**Screens affected:** S02, S03, S05, S06, S07, S08, S09, S10, S11, S12 (system-wide)

The colour `#706e6b` is used extensively for muted/helper text, captions, timestamps, and filter labels. Against a `#ffffff` background, it produces a contrast ratio of approximately **4.2:1**, which **fails** the 4.5:1 minimum for normal-sized text.

Examples:
- `.sso-caption` (S02)
- `.modal__meta` (S03)
- `.filter-section-label`, `.sort-select-wrap label`, `.result-meta-row` (S05)
- `.field-hint`, `.step-sub` (S06)
- `.card-toolbar-count` (S07)
- `.pagination-count` (S10)

**Fix:** Darken the muted text colour to at least `#595959` (which gives exactly 7:1) or `#636363` (5.9:1). Alternatively, use `#585858` for a comfortable margin.

---

### 5. Placeholder text has extremely low contrast
**WCAG 1.4.3 — Contrast Minimum (Level AA)**  
**Screens affected:** S04, S05, S09, S10, S11, S12

While WCAG does not technically require placeholders to meet contrast minimums (they are not "text"), the search bar placeholders double as the only visible instruction for the search field, making them functionally equivalent to labels:

| Screen | Placeholder colour | Background | Approx ratio |
|--------|--------------------|------------|-------------|
| S04 | `#aaa` | `#f3f3f3` | ~1.8:1 |
| S05 | `rgba(255,255,255,0.65)` | `rgba(255,255,255,0.18)` on navy | ~1.5:1 |
| S09–S12 | `rgba(255,255,255,0.6)` | `rgba(255,255,255,0.15)` on navy | ~1.5:1 |

**Fix:** Ensure placeholder text meets at least 4.5:1 contrast, or add a persistent visible label. For the navy top-bar search, use a lighter background colour and darker placeholder text.

---

### 6. Tabs implemented as `<a>` links with `role="tab"` lack keyboard pattern
**WCAG 2.1.1 — Keyboard (Level A) / 4.1.2 — Name, Role, Value**  
**Screens affected:** S10, S11, S12

Tabs are coded as `<a href="#" role="tab">` elements. The ARIA tabs pattern requires:
- Only the active tab should be in the tab order (`tabindex="0"`); others should have `tabindex="-1"`.
- Arrow keys should navigate between tabs.
- `<a>` elements activate on Enter; tabs should also activate on Space.

Currently, all tabs are in the tab order and there is no arrow-key navigation.

**Fix:** Use `<button>` elements for tabs, or add `tabindex` management and arrow-key event handlers. Ensure non-selected tabs have `tabindex="-1"`.

---

### 7. S04 Dashboard — search input has `outline: none` with no replacement focus indicator
**WCAG 2.4.7 — Focus Visible (Level AA)**  
**Screen:** S04

```css
.header-search input {
  ...
  outline: none;
}
```
The search input inside `.header-search` removes the outline but provides no `:focus` or `:focus-visible` style. Keyboard users cannot see when this input is focused.

**Fix:** Add a visible focus style:
```css
.header-search input:focus-visible {
  outline: 2px solid #005288;
  outline-offset: 2px;
}
```

---

### 8. S03 Collection Notice modal has no focus trap
**WCAG 2.4.3 — Focus Order (Level A)**  
**Screen:** S03

The modal uses `role="dialog"` and `aria-modal="true"`, which is semantically correct. However, there is no JavaScript focus trap — keyboard users can Tab past the modal into the blurred background content. The `pointer-events: none` on the background only prevents mouse interaction.

**Fix:** In production, the LWC implementation must trap focus within the modal (first and last focusable elements wrap around). For the mockup, add a comment noting this requirement.

---

### 9. Duplicate `<main>` landmark (S12)
**WCAG 1.3.1 — Info and Relationships (Level A) / Best Practice**  
**Screen:** S12

The thread view panel has `role="main"`:
```html
<div class="thread-view" role="main" ...>
```
But there is already a `<main class="main" id="main-content">` element on the page. Two `main` landmarks confuse screen readers.

**Fix:** Remove `role="main"` from the thread-view `<div>`. Use `role="region"` with an `aria-label` instead.

---

## Minor Issues

### 10. Invalid HTML: `<div>` inside `<span>` (S05)
**WCAG 4.1.1 — Parsing (Level A — deprecated in 2.2 but still best practice)**  
**Screen:** S05

```html
<span>
  <div class="topbar-logo-text">Practitioner Portal</div>
  <div class="topbar-logo-sub">Legal Aid Queensland</div>
</span>
```
Block-level `<div>` elements inside an inline `<span>` is invalid HTML and can cause unpredictable rendering and screen-reader behaviour.

**Fix:** Change the outer `<span>` to a `<div>`, or change the inner elements to `<span>`.

---

### 11. S05 — Disabled pagination link uses `aria-disabled` but remains navigable
**WCAG 4.1.2 — Name, Role, Value (Level A)**  
**Screen:** S05

```html
<a href="#" class="page-btn" aria-label="Previous page" aria-disabled="true">
```
`aria-disabled="true"` on an `<a>` tag does not prevent activation — the link is still clickable and keyboard-navigable. The CSS uses `pointer-events: none` (mouse only).

**Fix:** Use a `<button disabled>` instead, or add `tabindex="-1"` and `role="link"` with an `onclick` handler that returns false.

---

### 12. Social media icon links have 24x24px target but need spacing check
**WCAG 2.5.8 — Target Size Minimum (Level AA — new in 2.2)**  
**Screens affected:** S01, S04 (footer)

Footer social icons are `24x24px` with only `8px` gap between them. WCAG 2.5.8 requires a minimum 24x24px target size OR sufficient spacing so that the target plus spacing totals at least 24px. The icons meet the 24px minimum, but the tight 8px gap means adjacent targets overlap the spacing requirement.

**Fix:** Increase the icon touch-target size to 44x44px (the comfortable WCAG recommendation), or increase the gap to at least 12px.

---

### 13. S01 — White text on gradient background fails at the teal end
**WCAG 1.4.3 — Contrast Minimum (Level AA)**  
**Screen:** S01

The login heading uses white text on a gradient:
```css
background: linear-gradient(to right, #005288 0%, #008493 50%, #47c3d3 100%);
```
White on `#005288` passes (~8:1). White on `#47c3d3` fails (~2.2:1). The SSO section and heading text can land in the failing zone on wider viewports.

**Fix:** Darken the gradient endpoint to at least `#006B7D` (4.5:1 with white), or restrict white text to the navy region only.

---

### 14. S09 — Toggle control implemented as `<div>` with no keyboard event handler
**WCAG 2.1.1 — Keyboard (Level A)**  
**Screen:** S09

```html
<div class="toggle-track" role="switch" aria-checked="true" tabindex="0" ...>
```
The toggle has `role="switch"` and `tabindex="0"` (correct), but without JavaScript, pressing Space or Enter does nothing. The mockup should note that the LWC must handle `keydown` for Space/Enter to toggle the switch.

**Fix:** Add a note in the mockup comment that the production component must handle keyboard events. Alternatively, use an `<input type="checkbox">` with custom styling (as done correctly in S06).

---

## What's Already Done Well

These are worth acknowledging so they're not accidentally regressed:

- All form inputs have associated `<label>` elements or `aria-label` attributes.
- Status indicators (Draft, Active, Awaiting LAQ, etc.) always use icon + text, never colour alone.
- All pages have `lang="en"` on the `<html>` element.
- All pages have descriptive `<title>` elements.
- Most interactive elements have `:focus-visible` styles with 2px solid outlines.
- Error states (S06 opposing-party field) use `aria-invalid`, `aria-describedby`, `role="alert"`, and a visible error message with icon — textbook accessible error handling.
- The S03 modal correctly uses `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`.
- Required fields use `aria-required="true"` and visible asterisks.
- Decorative SVGs are marked `aria-hidden="true"`.
- Data tables use `<th scope="col">` for column headers.
- Live regions (`aria-live="polite"`) are used for autosave status and character counts.
