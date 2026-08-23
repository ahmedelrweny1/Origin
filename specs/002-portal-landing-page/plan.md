# Implementation Plan: Unique Portal Landing Page

## Architecture & Stack

- **Tech Stack**: Vanilla HTML5, CSS3, Vanilla JS.
- **Design System**: Unique "Neon/Cyber" or "Glassmorphism" vibe. Dark mode by default for an immersive, cinematic feel.
- **File Structure Updates**:
  - Rename current `index.html` to `abacus.html` (or similar).
  - Create a new `index.html` for the portal.
  - Create `portal.css` for the portal's specific styles to avoid breaking the existing `styles.css`.
  - Create `portal.js` for any portal-specific interactions.

## Data Model

- Create a `journeys.js` data file containing an array of available journeys to dynamically render the grid.
  - `id`, `title`, `description`, `url`, `status` (active, coming-soon), `icon`

## Phases

### Phase 1: Structure Reorganization
- Rename `index.html` to `abacus.html`.
- Update references in `abacus.html` if needed.

### Phase 2: Portal Foundation
- Create new `index.html` with basic HTML5 boilerplate.
- Link new `portal.css` and `portal.js`.

### Phase 3: Unique UI & Data Integration
- Build a striking, immersive background (e.g., CSS-only animated gradient mesh).
- Create a data-driven card grid reading from `journeys.js`.
- Design the "From Abacus to AI" card to stand out.
