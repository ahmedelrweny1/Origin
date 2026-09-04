# prune-verify.md — T012 Live Proof (fill after deploy)

Date: ____
- `curl -s https://winch-elsuez.com/sitemap.xml | grep -c '<loc>'` = __ (want 36)
- GSC Index Coverage Indexed=__ Excluded=__ (want <100 / 750+)
- `site:winch-elsuez.com القاهرة` = __ results (want 0)
- Typo 410s: `curl -I https://winch-elsuez.com/articles/omplete-guide-car-recovery/` = __ (want 410) ×5
- Homepage inlinks to pruned = __ (want 0, Screaming Frog)
Verdict: PASS/FAIL. Fail = redo T009-T011.
