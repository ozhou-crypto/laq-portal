# LAQ Practitioner Portal — Project Context

## What this project is

You are helping design and prototype the Legal Aid Queensland (LAQ) Practitioner Portal, a Salesforce Experience Cloud application used by legal practitioners (panel solicitors, in-house solicitors, community legal centre solicitors, external barristers, family dispute resolution practitioners, and their authorised support staff) to manage grants of legal aid on behalf of clients.

## What's in this folder

- `brief/01_system_prompt.md` — the design system prompt. Read this first, always.
- `brief/personas_jtbd.md` — who the users are and what they're trying to do.
- `brief/screen_inventory.md` — the list of all 23 screens with IDs and groupings.
- `brief/screens/` — one markdown file per screen, each containing the full brief for that screen.
- `mockups/` — where you write HTML mockup files. One `.html` file per screen, named like `S04_dashboard.html`.
- `handoff/` — where you write developer handoff specs. One `.md` file per screen.
- `assets/` — reference images, logos, seed data.

## How to work with me (the UX designer)

I am not a developer. I can't read or write code. Talk to me in plain English.

When I ask you to generate a screen, always:
1. Read `brief/01_system_prompt.md` first to pick up the brand, SLDS and accessibility rules.
2. Read the specific screen brief from `brief/screens/` (e.g. `brief/screens/S04_dashboard.md`).
3. Read `brief/personas_jtbd.md` if the brief references personas you want to understand.
4. Write the mockup as a single self-contained HTML file with inline CSS to `mockups/SXX_name.html`.
5. Begin every HTML file with a ~200-word design rationale in a comment block at the top.

## Rules for all generated screens

- Salesforce Lightning Design System (SLDS) structural look — reproduce the patterns in HTML/CSS, do not try to load SLDS.
- LAQ brand: primary navy `#05325F`, sapphire `#09549F`, sky `#0085B3` (see system prompt for full palette).
- WCAG 2.2 Level AA — visible focus states, 4.5:1 contrast for body, status conveyed by icon + text (never colour alone).
- Plain Australian English. No marketing language. No emojis. No "Oops!".
- Realistic fictional data: Australian names, Q-numbers in format `Q-YYYY-NNNNNN`, AUD currency, dates as `DD Mmm YYYY`.
- No celebratory illustrations on success states — use a restrained tick icon and plain text.
- No purple or consumer-style gradients.

## When I'm vague

If I say "generate the dashboard", I mean screen S04. Match loose references to the ID in `brief/screen_inventory.md`.

If I ask for "all the screens", generate every screen listed in `brief/screen_inventory.md`, one HTML file each, then generate `mockups/index.html` as a gallery linking to every screen.

## After any batch generation

After generating one or more screens, end your response with three short lines:
- What you generated
- Where to find it (file path)
- The exact command I can run locally to preview it in my browser (e.g., `open mockups/index.html` on Mac)

## Things you should ask me before doing

- If a brief is missing for a screen I've asked for, ask me for it — do not invent.
- If you'd need to install new dependencies beyond what's in `package.json`, ask first.
- If I ask you to change a shared file (system prompt, screen inventory, CLAUDE.md), confirm before overwriting.

## Things you can just do without asking

- Create, edit, or delete anything inside `mockups/` and `handoff/`.
- Read anything in `brief/` or `assets/`.
- Run a local preview server on any free port above 3000.
