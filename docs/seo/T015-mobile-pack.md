# T015 Mobile Pack — Sticky Bar + Calculator + Form

```css
/* sticky bottom bar, 56px, does not cover footer CTA */
.callbar{position:fixed;bottom:0;left:0;right:0;display:flex;z-index:50;background:#0b6e2e;color:#fff}
.callbar a{flex:1;text-align:center;padding:14px;font-size:18px;font-weight:700}
body{padding-bottom:64px}
```
- Left: `اتصال الآن 01063186992` tel:+201063186992 (trackCall header)
- Right: `واتساب موقعي` https://wa.me/201063186992?text=موقعي: (trackWhats)
- Calculator: 360px usable, select area + vehicle -> price/time, button `أرسل التقدير واتساب` prefills location.
- Form service select values exactly: إنقاذ سيارات/نقل معدات/وقود/بطارية/إطارات. Submit -> WhatsApp, not dead POST.
- Tap targets >=48px, contrast AA, RTL.

Verify: Moto G4 emulator, bar visible all pages, no overlap, clicks fire GA4 events.
