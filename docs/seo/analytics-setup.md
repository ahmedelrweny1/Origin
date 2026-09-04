# Analytics Setup — T005 — Ready to Apply (needs site owner)

## 1. Search Console (5 min, owner does)
1. Add property `https://winch-elsuez.com/` (URL prefix, non-www only)
2. Verify via HTML file or DNS TXT
3. Submit `https://winch-elsuez.com/sitemap.xml` (after T010 prune)
4. Set preferred: do NOT add www property as separate — 301 already passes equity
5. Check Index Coverage daily for 817 -> <60 drop, and Removals for 410 URLs

Proof needed: screenshot GSC property + sitemap Submitted/Discovered count -> paste into docs/seo/gbp-proof.md appendix.

## 2. GA4 + call tracking (dev applies once, 15 min)

Target site is React CRA. Add in `public/index.html` before </head>:
```html
<!-- GA4 - replace G-XXXXXXX with real ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config','G-XXXXXXX');
</script>
```

Add in main JS (e.g. `src/utils/track.js`):
```js
export function trackCall(where){
  if(window.gtag){ window.gtag('event','click_call',{event_label:where, value:1}); }
}
export function trackWhats(where){
  if(window.gtag){ window.gtag('event','click_whatsapp',{event_label:where, value:1}); }
}
// usage: <a href="tel:01063186992" onClick={()=>trackCall('header')}> , <a href="https://wa.me/201063186992" onClick={()=>trackWhats('sticky')}>
```

GA4 custom events to mark as conversions: `click_call`, `click_whatsapp`. Report: Engagement > Events > Conversions.

## 3. KPI wiring
- Update `docs/seo/kpi-tracker.csv` columns organic_calls_month + whatsapp_clicks_month from GA4 weekly
- GBP calls (after T024) tracked separately in GBP Insights — do NOT mix

## Grill
- Assumed? No GA4 ID assumed — owner must supply G-XXXXXXX. No GSC access from here.
- Verify: view-source shows gtag ID + GA4 Realtime shows click_call on test click.
- Status: DOC READY, awaiting owner apply + proof screenshot. Unblocks T016 verification.
