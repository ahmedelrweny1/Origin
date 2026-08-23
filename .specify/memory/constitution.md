# Bacaloria Constitution

## Principles

1. **Classroom-first**: The site must work when projected on a classroom screen.
   Desktop-first design, large readable typography, high contrast.
2. **Exploration, not lectures**: Content is delivered through an interactive
   journey (timeline, stages, challenges) — never walls of text or boring
   lesson lists.
3. **Simple tech**: Static HTML/CSS/JS only. No backend, no database, no auth,
   no build step, no unnecessary libraries. A teacher should be able to
   understand the code.
4. **Teen-appropriate tone**: Modern and fun for 15–16 year olds. Not childish,
   not university-level. Simple English, short paragraphs, everyday examples.
5. **Extensible topics**: New computer-basics topics must be addable as data
   (a JS data file + a section), without redesigning the site.
6. **Calm motion**: Subtle transitions only. No distracting animations during
   a lecture.
7. **Deployable**: Must run correctly on Vercel as a static site.

## Constraints

- No frameworks unless already configured.
- All content data lives in plain JS data files.
- Progress tracking is per-browser (localStorage), no accounts.

## Governance

Changes that alter the learning experience or architecture require updating
the relevant spec under `specs/` first.
