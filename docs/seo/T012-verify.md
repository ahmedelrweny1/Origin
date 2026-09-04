# T012 Prune Verify — Checklist (owner runs 21 days after T009-T011)

- [ ] `curl -s https://winch-elsuez.com/sitemap.xml | grep -c '<loc>'` = 32
- [ ] GSC Index Coverage: Indexed <100, Excluded (noindex/410) = 750+
- [ ] `site:winch-elsuez.com القاهرة` = 0 results
- [ ] 5x typo URLs `curl -I` = 410 Gone
- [ ] Screaming Frog: 0 inlinks to pruned URLs from homepage/nav/footer
- [ ] GSC Performance: Suez queries impressions stabilizing (not zero — filter lifting)

Paste proofs into `docs/seo/prune-verify.md` (create from this template). Fail any = redo T009-T011. Pass all = proceed to US2/US3.
