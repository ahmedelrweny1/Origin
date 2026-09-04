# T013 Perf Pack — React CRA CWV (INP/LCP/CLS)

## Actions (dev, 2-4h)
1. Images: convert hero + fleet to WebP <150KB, `loading=lazy` below fold, `fetchpriority=high` hero, width/height attrs (fix CLS).
2. JS: `npm run build -- --stats`, code-split calculator + maps (`React.lazy`), defer non-critical, remove unused CSS (PurgeCSS or manual).
3. Fonts: `font-display:swap`, preload Arabic font woff2.
4. Maps iframe: `loading=lazy`, load only on click ("اضغط لعرض الخريطة") to save INP.
5. Targets: LCP<=2.5s, INP<=200ms, CLS<=0.1 on Moto G4 / 4G lab.

## Verify
PageSpeed Mobile screenshots for `/` + 1 money page, filmstrip LCP element = hero, no layout shift from sticky bar/counters.
File proof: `docs/seo/cwv-proof.md` (fill after deploy — T016).
