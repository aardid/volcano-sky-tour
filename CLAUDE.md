# volcano_fly_educational — Volcano Sky Tour

3D educational "fly the volcanoes" app modelled on https://ceddc.ch/arcgisworldskytour/
(ArcGIS Maps SDK for JS SceneView). Started 2026-09-05; **New Zealand first**,
whole world behind a toggle. Not a git repo (yet).

## Files
- `index.html` — whole app (AMD `require` from js.arcgis.com/4.34; no build step).
  Tier logic / colours copied from `../000_papers_abs_ppts/BK_paper_2026/webapp`.
- `tours.js` — curated tours (GVP numbers + notes + camera overrides). Curator-editable.
- `build_data.py` → `data/volcanoes.js` (`window.VOLC`) from the BK repo CSVs.
- `FOCUS` constant in `index.html` sets the starting country/camera.

## Conventions
- REF_YEAR 2026; thresholds erupting 0.252 yr / high 500 / moderate 12,000 / dormant 2.5e6 — keep in sync with the BK paper.
- Volcano markers: client-side `FeatureLayer` with `definitionExpression` for filters (tier, tg, cty).
- Camera framing: `defaultView()` — broad landforms (caldera, field) viewed from further away.
- GeoNet VAL API needs header `Accept: application/vnd.geo+json;version=2` (version=1 returns 400).

## Gotchas
- Bash heredocs on this UNC path choke on apostrophes in content; use the Write tool for prose-heavy files.
- Node cannot `require()` from the UNC path (package.json lookup fails); copy to scratchpad for `node --check`.
- Headless Chrome smoke test: serve a scratchpad copy on 127.0.0.1, one instance at a time, `--user-data-dir` set,
  `--use-angle=swiftshader --enable-unsafe-swiftshader`, `?q=low&instant` to avoid mid-animation shots.
