# T009 Deploy — Noindex + Link Removal — Ready to Apply

## A. Noindex list (769 URLs)
File: `docs/seo/T009-noindex-urls.txt` (769 lines). Source: url-inventory.csv action=noindex-then-410.

### React implementation (dev, 20 min)
In router (e.g. `src/App.js` or route guard), add:
```js
const NOINDEX_PATTERNS = [/\/winch\/(القاهرة|الجيزة|الإسكندرية|بورسعيد|شمال-سيناء|جنوب-سيناء|البحر-الأحمر)/, /\/articles\/(winch-|car-rescue-|battery-|fuel-|tire-|equipment-)/];
// if match and not in keep-list -> <meta name="robots" content="noindex,nofollow">
import {Helmet} from 'react-helmet';
{isPruned && <Helmet><meta name="robots" content="noindex,nofollow" /><link rel="canonical" href="https://winch-elsuez.com/" /></Helmet>}
```
Better: return HTTP header via LiteSpeed `.htaccess` for pruned paths:
```
<IfModule mod_headers.c>
Header set X-Robots-Tag "noindex, nofollow" env=PRUNED
</IfModule>
```
Simplest reliable: delete the 769 routes from build + keep sitemap without them. GSC will drop them in 2-3 weeks. Noindex is safety net.

## B. Remove internal links (critical — stops equity leak)
1. `src/components/Header/AreasMenu` — delete links to القاهرة (284)، الجيزة (106)، الإسكندرية (57)، بورسعيد، سيناء، البحر الأحمر. Keep only 8 Suez hubs.
2. `src/pages/Home/AreasSection` — keep 20 Suez-cluster cards only, delete rest.
3. `src/components/Footer` — delete `كلمات بحث شائعة` 22-link farm (replaced in T033), delete `افضل ونش في القاهرة/الجيزة...` links.
4. `/areas?filter=القاهرة` etc — remove filter options, keep السويس/السخنة/الجلالة/الزعفرانة/غارب only.
5. Verify: `grep -r "القاهرة\|الجيزة\|الإسكندرية" src/ --include="*.js"` returns 0 (except blog text mentions, not links).

## Verify
- View-source of pruned URL shows noindex. Screaming Frog crawl shows 0 inlinks to pruned after deploy.
- Status: PACK READY, needs dev deploy + GSC URL Inspection proof.
