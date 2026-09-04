# T017-T019 Money Pages — Outlines (dev builds, writer fills Arabic)

## Common structure (all 3, 1000-1300 words, 1x H1 unique, price/time table, map, FAQ human-readable, sticky bar)
- H1: T017 `/winch/السويس/` = `ونش انقاذ السويس — وصول 10 دقائق بسعر ثابت` / T018 `/winch/العين-السخنة/` = `ونش انقاذ العين السخنة — مسطح Zero-Degree للفارهة` / T019 `/winch/طريق-الجلالة/` = `ونش انقاذ طريق الجلالة — مجهز للمرتفعات 24 ساعة`
- Above fold: tel:01063186992 + WhatsApp location + badges (تأمين مجاني/بدون رسوم خفية)
- Table per حي/منتجع: المنطقة | وقت الوصول | السعر بعد 50% | نوع الونش (ex: الأربعين 5-10د 200-250 هيدروليك, بورتو 15-20د 350+ فلات)
- Sections: لماذا نحن (GPS/تثبيت), المعدات (فلات/هيدروليك), خطوات 3, تغطية (روابط spokes), تقييمات حقيقية (بعد T027), اتصل.
- Schema per page: LocalBusiness with single-city areaServed + geo precise.
- Internal: each links to home (ونش انقاذ السويس) + 2 siblings + 3 spokes. No Cairo links.

## T020 9x Suez districts (500+ words 40%+ unique each)
الأربعين/فيصل/عتاقة/الجناين/بور-توفيق/الأدبية/الملاحة/جنيفة/المثلث — each: landmarks (شارع الجيش/الكورنيش/ميدان الخضر), كمائن/ورش قريبة, وقت/سعر, testimonial per area, CTA.

## T021 8x corridors (500+ words each)
بورتو-السخنة/الزعفرانة/رأس-غارب/طريق-السويس/نفق-الشهيد-احمد-حمدى/محور-30-يونيو/ميناء-السخنة/وادي-حجول — each: road risks (رياح/مرتفعات/مقطوع), تثبيت رباعي/سحب طويل, نقل للمحافظات, CTA.

## T022 Hub rewire
Homepage: hub cards 5 only (أحياء السويس/السخنة/الجلالة/غارب والزعفرانة/الطرق السريعة) with Arabic anchors. Delete all القاهرة/الجيزة/الإسكندرية cards + footer links. `/areas/` hub same 5 only.

## T023 Verify
Copyscape/unique % per page, Screaming Frog inlinks, mobile call test 3 pages. Proof: `docs/seo/content-verify.md`.
