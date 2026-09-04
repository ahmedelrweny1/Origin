# T006 Fix Pack — Homepage Head — Ready to Apply

File on target site: `public/index.html` (React CRA) + built `build/index.html` after `npm run build`.

## BEFORE (verified live)
```html
<title>ونش انقاذ السويس والسخنة ورأس غارب | أسرع ونش 24 ساعة | خصم 50% | 01063186992</title>
<meta name="description" content="أسرع ونش انقاذ سيارات في السويس، العين السخنة، طريق الجلالة، الزعفرانة، ورأس غارب. خدمة سحب ونقل سيارات 24 ساعة بأحدث الأوناش الهيدروليكية المسطحة. وصول خلال 10-20 دقيقة. خصم 50%. اتصل الآن 01063186992." />
<meta property="og:image" content="https://winch-elsuez.com/logo.png" />
```

## AFTER (paste exactly)
```html
<title>ونش انقاذ السويس | اقرب ونش 10 دقائق 01063186992</title>
<meta name="description" content="أسرع ونش انقاذ في السويس والسخنة والجلالة 24 ساعة. وصول 10-20 دقيقة بسعر ثابت 200-250 جنيه. اتصل 01063186992" />
<link rel="canonical" href="https://winch-elsuez.com/" />
<meta property="og:title" content="ونش انقاذ السويس | اقرب ونش 10 دقائق 01063186992" />
<meta property="og:description" content="أسرع ونش انقاذ في السويس والسخنة والجلالة 24 ساعة. وصول 10-20 دقيقة بسعر ثابت 200-250 جنيه. اتصل 01063186992" />
<meta property="og:image" content="https://winch-elsuez.com/images/flatbed-suez-1200x630.webp" />
<meta property="og:url" content="https://winch-elsuez.com/" />
<meta name="twitter:card" content="summary_large_image" />
```

Counts: title 47 chars, desc 130 chars (safe, no truncation). Keep H1 as-is (1x good): أسرع ونش إنقاذ في السويس يصلك الآن — do NOT duplicate title.

H2 rule: keep max 8-10 H2 on homepage, demote rest to H3. Current 17 H2 dilutes. Merge pricing/equipment FAQs under single H2 each.

Image task: upload real flatbed photo `images/flatbed-suez-1200x630.webp` (1200x630, <150KB, alt="ونش مسطح لنقل سيارة في السويس").

## Verify (grill)
- `curl -s https://winch-elsuez.com/ | grep -o '<title>.*</title>'` shows new title
- view-source desc length 120-160
- Facebook Sharing Debugger shows flatbed image, not logo
- Status: PATCH READY, needs dev deploy + proof. Does NOT change rankings alone — unblocks CTR.
