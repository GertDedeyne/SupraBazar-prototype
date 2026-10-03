# Project Notes

Durable context established 2026-08-27, per CLAUDE.md §4.0.

## Goal

Heuristic UX audit of suprabazar.be + quick-win recommendations. Not a full redesign.

## Scope (round 1)

1. Category overview page — filter UX (Puzzelen category as reference)
2. Account pages — missing features & data visualization

## Constraints

- Synthesis files never overwrite originals (CLAUDE.md §5.0)
- `PROJECT-STATUS.md` updated after each milestone
- One deliverable validated with the user before moving to the next (no more than one major deliverable without validation)
- Audit deliverables use plain titles, no numbered headings, no emojis (user override of CLAUDE.md §6.0, for audit/prototype deliverables only)
- HTML prototypes must use Bootstrap (CDN, no build step) for visual consistency
- Audit write-ups must be Confluence-paste-friendly (simple headings, tables, bullets — no exotic markdown)

## Environment limitation

This environment cannot render JS-heavy pages, log in, or take live screenshots. Inspection depends on screenshots dropped into `project-inputs/Screenshots/`.

## Already-agreed account-page directions

Source: `project-inputs/ux-improvements.md` — fold into the audit rather than "discover" independently:

- Order status should sync real delivery states (cancelled / shipped / delivered) instead of the current static list
- Order overview needs a better summary view
- Returns should be requestable directly from an order (not present today)
- Gift cards should live on the profile — auto-selectable at checkout, with a visible balance (not present today)
