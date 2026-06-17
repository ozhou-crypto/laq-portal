# LAQ Practitioner Portal — Claude Code Project

This is your working folder for generating and iterating on the LAQ Practitioner Portal design with Claude Code.

You are a UX designer. You do not need to code. You type instructions in plain English, Claude Code does the work.

---

## First time setup (5 minutes)

1. **Open Terminal** (Mac: press `Cmd + Space`, type `Terminal`, press Enter).
2. **Navigate into this folder.** Type `cd ` (with the space), then drag this folder from Finder into the Terminal window. Press Enter.
3. **Start Claude Code.** Type `claude` and press Enter.
4. **Verify Claude Code can see the project.** Type:

   > Read CLAUDE.md and tell me what this project is about.

   If Claude responds with a summary of the LAQ portal, you're set.

You only do this once. Next time, skip to step 2.

---

## The 10 most useful first prompts

Copy-paste these into Claude Code. Each one does something a UX designer would actually want.

### 1. Generate one screen
> Generate the mockup for screen S04 (the home dashboard). Follow the rules in CLAUDE.md.

### 2. Generate all 23 screens in one go
> Generate every screen listed in brief/screen_inventory.md as a separate HTML file in mockups/. Then generate mockups/index.html as a gallery linking to every screen with the screen name and ID shown.

Grab a coffee. This takes around 15–25 minutes and costs a few dollars in API usage. When it's done, open `mockups/index.html` in your browser.

### 3. Preview everything in your browser
> Open mockups/index.html in my default browser.

### 4. Tweak a screen based on stakeholder feedback
> On the dashboard (S04), change the KPI strip so there are 4 tiles instead of 5. Remove "Drafts" and merge it into "Active files".

### 5. Apply a change across every screen
> Every screen currently hardcodes colours inline. Extract all colours into a single mockups/tokens.css file using CSS variables, then update every HTML file to reference those variables.

### 6. Accessibility check
> Review every HTML file in mockups/ against WCAG 2.2 Level AA. Produce accessibility_audit.md in the project root listing issues grouped by screen, with severity and a suggested fix for each.

### 7. Generate seed data so your mockups don't all say "Sarah Wilson"
> Create assets/seed_data.json containing 20 fictional Australian legal aid clients (mix of family, criminal, civil law), 50 grant-of-aid files, and 30 invoices. Use realistic names, Q-numbers in format Q-YYYY-NNNNNN, AUD amounts, and Australian dates.

### 8. Generate a developer handoff doc per screen
> For every HTML file in mockups/, generate a matching markdown file in handoff/. Each should list: components used, data fields shown, interaction states, and the Salesforce objects and fields a developer would need to wire up.

### 9. Compare your design to a reference
> I've dropped a screenshot in assets/reference.png. Compare it to mockups/S04_dashboard.html and tell me where they differ in layout, colour, or component choice.

### 10. Live server for stakeholder demos
> Start a local preview server for the mockups/ folder and tell me the URL.

---

## What to do when Claude Code does something you don't want

Just tell it. Examples:

- "That's too cluttered. Reduce the KPI tiles from 6 back to 4."
- "The success state looks too celebratory. Remove the confetti / gradient / whatever. Just a tick icon and plain text."
- "You added a feature I didn't ask for. Remove the [thing]."
- "Undo the last change and try again with a different approach."

You can also **stop it mid-task** by pressing `Ctrl + C` (even mid-sentence). It won't break anything.

---

## Cost guardrails

Each screen costs roughly $0.20–$0.80 in API usage depending on complexity. All 23 screens in one go is typically $5–$15. A full day of iterating is typically $10–$30.

You can cap spend in your Anthropic Console: https://console.anthropic.com/settings/limits

---

## Project folder layout

```
laq-portal/
  CLAUDE.md                    ← tells Claude Code how this project works
  README.md                    ← this file
  brief/
    01_system_prompt.md        ← the design system + brand rules
    personas_jtbd.md           ← who the users are
    screen_inventory.md        ← the 23 screens
    screens/                   ← one brief per screen (S01..S23)
  mockups/                     ← Claude Code writes HTML here
  handoff/                     ← developer specs
  assets/                      ← reference images, seed data
```

---

## Troubleshooting

**"Claude Code says it can't find a file."**
You probably started Claude Code from your home directory, not from this folder. Quit (`exit` or `Ctrl + D`), `cd` into this folder, and run `claude` again.

**"It generated something that doesn't follow the brand."**
Tell it: "Re-read brief/01_system_prompt.md and regenerate this screen following those rules strictly." If it keeps drifting, paste the specific rule it violated.

**"The screen looks nothing like SLDS."**
SLDS is a structural reference, not a pixel-perfect requirement. It should look Salesforce-ish, not exactly like a live Salesforce app. If it looks too generic, say: "Make the screen feel more like a Salesforce Lightning app — use the SLDS record-detail pattern / list-view pattern / form pattern as appropriate."

**"It's asking me lots of questions before doing anything."**
Fine. Answer them. Better questions at the start than rework at the end. If you want it to just try something, say: "Make reasonable assumptions and generate a first draft. I'll give feedback after I see it."

**"I want to start over with a fresh conversation."**
Type `/clear` in Claude Code. This wipes the conversation but keeps the files and CLAUDE.md context. Good for when a conversation gets messy.
