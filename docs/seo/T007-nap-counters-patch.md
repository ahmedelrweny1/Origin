# T007 Fix Pack — NAP / Phones / Counters / Geo — Ready to Apply

## Bugs verified
- Counters render `0 عاما / 0 مكتب / 0 عملية / 0 عنصر` (JS not hydrating SSR value)
- Phones: header `01063186992 + 01070722736` correct, FAQ body `01274644112` wrong
- Address: `السويس، مصر - نخدم...` only, no street, no GBP link, no map
- Brand flip: `خدمات ونش السويس` vs `ونش انقاذ السويس - winch-elsuez.com`

## Patches

### 1. Counters — server-render real numbers (React component)
```jsx
// BEFORE: <Counter end={0} /> or useEffect only
// AFTER: hardcode fallback text for no-JS + SSR
<span>30+ عاما من الخبرة</span>
<span>150+ ونش متمركز</span>
<span>10000+ عملية إنقاذ</span>
// remove 4th counter "عنصر في الفريق" (meaningless) OR replace with "24/7 طوارئ"
```
Verify: disable JS -> numbers still visible. view-source contains `30+`.

### 2. Phones — single primary everywhere
Find-replace in ALL components: `01274644112` -> `01063186992`
Footer canonical NAP block (paste exactly):
```html
<p><strong>ونش انقاذ السويس - winch-elsuez.com</strong><br>
السويس، مصر — نخدم الأربعين، فيصل، عتاقة، الجناين، بور توفيق، العين السخنة، الجلالة<br>
<a href="tel:+201063186992">01063186992</a> (أساسي 24/7) | <a href="tel:+201070722736">01070722736</a> (احتياطي)<br>
<a href="mailto:info@winch-elsuez.com">info@winch-elsuez.com</a></p>
```

### 3. Map + GBP placeholder (after T024 fill href)
```html
<iframe title="موقع ونش انقاذ السويس" src="https://www.google.com/maps?q=29.9668,32.5498&output=embed" loading="lazy" style="width:100%;height:300px;border:0"></iframe>
```

## Verify
- `grep -r 01274644112` returns 0 hits
- view-source contains `30+` + `10000+`
- Status: PATCH READY, needs dev deploy.
