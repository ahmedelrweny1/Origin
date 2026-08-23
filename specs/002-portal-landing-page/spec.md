# Feature Specification: Unique Portal Landing Page

**Feature Branch**: `002-portal-landing-page`
**Status**: Draft

## Purpose

A top-level portal landing page for the Origin site that acts as a gateway to multiple interactive journeys. It needs to have a unique, highly immersive "vibe" (distinct from typical educational sites) that instantly captures students' attention before the lecture begins.

## User Stories

1. **As a student**, I visit the root URL and see an immersive, futuristic or retro-futuristic "gateway" that feels like a video game start screen or an interactive experience.
2. **As a student**, I see a prominent link/card for the "From Abacus to AI" journey.
3. **As a teacher**, I can easily use this page to set the mood for the class as they walk in.
4. **As a teacher**, I see that there is room for future topics (e.g., "How the Internet Works", "Logic Gates") to be added later.

## Functional Requirements

- FR1: A root `index.html` that serves as the new portal landing page.
- FR2: The existing `index.html` (the journey) is moved to a subdirectory (e.g., `/journeys/abacus-to-ai/index.html`) or renamed (e.g., `abacus-to-ai.html`).
- FR3: Immersive hero section with a unique vibe (e.g., glassmorphism, animated gradient background, or particle effect — staying within HTML/CSS/JS without heavy libraries).
- FR4: A grid or carousel of available journeys, currently showing "From Abacus to AI" and perhaps "Coming Soon" placeholders for others.

## Non-Functional Requirements

- NFR1: Must use only vanilla HTML, CSS, and JS (no heavy frameworks).
- NFR2: Performance must remain high; any animations should be performant and not distract once the actual lesson starts (this is the portal, so slightly more flair is okay).
- NFR3: Adhere to the teenage-friendly tone.

## Edge Cases

- EC1: Users navigating to the old root URL who expect the journey directly should see the new portal and clearly understand how to start the journey.
