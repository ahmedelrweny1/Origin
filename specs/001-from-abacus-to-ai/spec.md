# Feature Specification: From Abacus to AI — Interactive Computer History Journey

**Feature Branch**: `001-from-abacus-to-ai`
**Status**: Approved

## Purpose

An interactive, story-style web experience that teaches first-year secondary
students (15–16 y/o) how computers evolved. Used by a teacher during intro
computer lessons, projected on a classroom screen.

## User Stories

1. **As a student**, I land on a page titled "From Abacus to AI" and understand
   within seconds that I'm about to travel through the history of computers.
2. **As a student**, I click through an interactive timeline of 11 eras — from
   the Abacus to AI — and each stage opens a panel with: simple explanation,
   important people, main invention, why it mattered, a fun fact, and a simple
   visual representation.
3. **As a student**, I answer short multiple-choice quizzes after some stages,
   see "Guess what comes next?" prompts between eras, and discover fun facts
   through interactions.
4. **As a student**, I see a progress indicator showing how much of the journey
   I've completed (saved in my browser).
5. **As a student**, I finish with a mini challenge: put mixed-up inventions in
   the correct chronological order.
6. **As a teacher**, I can jump between topics/stages clearly from navigation,
   and nothing on screen distracts from my explanation.

## Milestones (required timeline stages)

Abacus → Pascaline → Charles Babbage → Ada Lovelace → ENIAC → Transistors →
Integrated Circuits → Microprocessors → Personal Computers → Smartphones → AI

## Functional Requirements

- FR1: Landing hero with strong title + one-paragraph intro.
- FR2: Horizontal/vertical interactive timeline; clickable era nodes.
- FR3: Era detail view with the six content blocks listed in US2.
- FR4: Quiz (MCQ) after selected eras; instant feedback.
- FR5: "Guess what comes next?" teaser between eras.
- FR6: Progress bar reflecting visited eras; persisted via localStorage.
- FR7: Final drag/click ordering challenge with score.
- FR8: Topic navigation (sidebar/top nav) listing all stages; teacher can jump.
- FR9: Prev/next era movement so the journey feels sequential.

## Non-Functional Requirements

- NFR1: Desktop-first (≥1280px), responsive down to phones (~360px).
- NFR2: Static hosting on Vercel; no backend.
- NFR3: Simple English, short paragraphs, everyday analogies.
- NFR4: Subtle transitions only (<300ms); no autoplaying animations.
- NFR5: Plain HTML/CSS/JS, no build step.

## Out of Scope

Accounts/auth, backend, database, multiple languages, additional topics
(structure supports them later).
