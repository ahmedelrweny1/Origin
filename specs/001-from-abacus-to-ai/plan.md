# Implementation Plan: From Abacus to AI

**Branch**: `001-from-abacus-to-ai`

## Stack Decision

Plain **HTML + CSS + vanilla JS**. No build step, no dependencies — Vercel
serves the repo root as a static site.

```
/               (repo root = site root)
├── index.html      # single-page shell: hero, nav, timeline, stage, challenge
├── styles.css      # design tokens + layout + responsive rules
├── data.js         # ERAS array: content, quizzes, guess-next, challenge pool
├── app.js          # rendering + state (localStorage progress)
└── specs/, .specify/, .claude/   # spec-kit artifacts (not served paths)
```

## Architecture

- **State**: `visited:Set<eraId>`, `currentEraIndex`, persisted in
  `localStorage["bacaloria-progress"]`.
- **Rendering**: `renderEra(i)` fills the stage panel; timeline nodes update
  classes (`done`, `active`). No framework — template strings.
- **Quiz**: per-era optional MCQ; feedback inline; no score persistence needed.
- **Guess-next**: between eras, show 3 options of what came next before moving.
- **Final challenge**: shuffled invention list; student clicks two cards to
  swap until order is correct → success state with count of moves.

## Design System

- Font: system stack (`Segoe UI` etc.) — zero network cost.
- Colors: dark ink `#1a1d29`, warm paper `#faf8f5`, accent electric blue
  `#3b6ef6`, accent-2 amber `#f5a623`. One accent gradient allowed on hero only.
- Type scale: clamp() based; body ≥18px desktop.
- Spacing: 8px grid. Radius: 16px panels.
- Motion: opacity/transform transitions ≤250ms ease-out only.

## Responsive Strategy

- Desktop (>900px): horizontal timeline strip, era panel beside mini-map.
- Tablet/mobile (≤900px): vertical timeline list; panel full-width below;
  nav collapses into horizontal scroll chips.

## Risks

- Drag-and-drop is fragile cross-device → use tap-to-swap instead.
- Long content breaks panel height → panel scrolls internally on desktop,
  page scrolls naturally on mobile.
