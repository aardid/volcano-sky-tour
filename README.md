# Volcano Sky Tour

An educational 3D "fly the volcanoes" web app in the spirit of
[World Sky Tour](https://ceddc.ch/arcgisworldskytour/) (Cédric Despierre
Corporon, Esri Switzerland), built on the same engine (ArcGIS Maps SDK for
JavaScript `SceneView`, World Imagery, World Elevation 3D, OpenStreetMap 3D
buildings) and fed by the Smithsonian GVP catalogue we assembled for the
Kennedy et al. volcano-terminology paper (`../000_papers_abs_ppts/BK_paper_2026`).

**Starts with Aotearoa New Zealand** (23 Holocene volcanoes, live GeoNet
Volcanic Alert Levels); one click opens the whole world (1,215 volcanoes).

## Run

Open `index.html` in a browser, ideally over a tiny local server so nothing
is blocked:

```
python -m http.server 8000
# then http://localhost:8000/index.html
```

Double-clicking `index.html` (file://) also works in Chrome/Edge because the
data is embedded as JS, not fetched. Internet access is required for the
ArcGIS SDK, imagery, terrain, buildings and GeoNet. No API key is needed:
the `satellite` basemap, `world-elevation` ground and the OSM buildings scene
layer are all public.

URL options:

| option | effect |
| --- | --- |
| `#vn=241100` | open on a volcano (GVP number); the Share button makes these links |
| `?q=low` / `?q=high` | rendering quality profile (default medium) |
| `?instant` | jump to volcanoes instead of animating the fly-in |

## What it does

- **Tours** – curated stops with a teaching note per volcano; *Play* auto-flies
  stop to stop and orbits each one. Defined in `tours.js` (plain list of GVP
  numbers + notes + optional camera geometry). NZ tours come first.
- **Explore** – search, filter by repose tier and landform, NZ / world scope,
  toggle buildings and labels. Click a marker to fly there.
- **Fly** – Sky-Tour-style free flight over the terrain: `W/S` pitch, `A/D`
  turn, `↑/↓` climb, `Shift` turbo, `Space` brake, `+/-` cruise speed,
  `Esc` stop. Terrain following keeps you ≥120 m above ground. Ctrl+click
  anywhere on the globe to start flying from that point.
- **Learn** – the erupting / high / moderate / dormant / extinct tiers of the
  paper's draft Table 2, why repose is a weak label, GeoNet alert levels, credits.
- **Info card** – GVP photo, tier badge, last eruption, repose, LandScan
  population within 30 / 100 km, confirmed-eruption sparkline (VEI), GVP
  geological summary, live GeoNet Volcanic Alert Level for NZ volcanoes.

Marker colours, thresholds (`erupting` 92 d, `high` 500 yr, `moderate` 12 kyr)
and reference year 2026 are identical to the paper figures and the 2D
`webapp/` in the BK repo.

## Data

```
python build_data.py [path/to/BK_paper_2026]
```

reads `gvp_holocene_volcanoes.csv`, `gvp_holocene_eruptions.csv` and
`gvp_population_exposure.csv` from the BK repo and writes `data/volcanoes.js`
(`window.VOLC`, ~2 MB: 1,215 volcanoes with summaries/photos, 9,918 confirmed
eruptions). Re-run after `build_catalogue.py` refreshes the catalogue.

GeoNet: `https://api.geonet.org.nz/volcano/val` (GeoJSON, CORS open), mapped
to GVP numbers in `GEONET_IDS` inside `index.html`.

## Credits

Global Volcanism Program, Smithsonian Institution (volcano.si.edu; Venzke ed.;
Andrews et al. 2025 *Bull. Volcanol.* 87:34). Population: LandScan via the GVP
exposure service. GeoNet / GNS Science. Esri ArcGIS Maps SDK for JavaScript,
World Imagery, World Elevation 3D; © OpenStreetMap contributors.

## Ideas not built yet

- Pleistocene ("dormant") volcanoes on the globe (GVP has no per-volcano ages).
- Eruption-timeline scrubber (exists in the 2D BK webapp; port to 3D).
- A plane/chase-camera model and cockpit view like the original Sky Tour.
- Hazard footprints (lahar paths, ashfall, AVF vent-density) as scene layers.
- Te reo Māori names/narration; multilingual UI.
