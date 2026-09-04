# T014 Schema Pack — LocalBusiness (C5 FIX: no assumptions)

Paste into `public/index.html` <head> as JSON-LD. Validate at validator.schema.org + Rich Results Test.

```json
{
  "@context":"https://schema.org",
  "@type":["LocalBusiness","AutomotiveBusiness"],
  "@id":"https://winch-elsuez.com/#organization",
  "name":"ونش انقاذ السويس - winch-elsuez.com",
  "url":"https://winch-elsuez.com/",
  "telephone":"+201063186992",
  "email":"info@winch-elsuez.com",
  "priceRange":"200-350 EGP",
  "image":"https://winch-elsuez.com/images/flatbed-suez-1200x630.webp",
  "address":{"@type":"PostalAddress","addressLocality":"Suez","addressRegion":"Suez","addressCountry":"EG"},
  "geo":{"@type":"GeoCoordinates","latitude":29.96679,"longitude":32.54981},
  "openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"},
  "areaServed":[{"@type":"City","name":"Suez"},{"@type":"City","name":"Ain Sokhna"},{"@type":"City","name":"Zaafarana"},{"@type":"City","name":"Ras Ghareb"}]
}
```
C5 fixes applied 2026-09-03:
- REMOVED postalCode 43511 (was assumed, UNKNOWN — add only from official address proof).
- REMOVED sameAs facebook.com/winch.elsuez/ (was assumed slug, UNKNOWN — add only after owner pastes real FB URL).
- GEO 4→5 decimals (29.96679,32.54981 = Suez city center, 1m precision) BUT marked APPROXIMATE from geo meta 29.9668;32.5498 — replace with GPS pin of yard/parking after owner sends Maps link. Per-location pages must use their own pin, not copy home.
Rules: NO aggregateRating until T027 real reviews. NO HowTo. FAQPage keep INFO only.
