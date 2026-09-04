"""
build_data.py
-------------
Pack the GVP catalogue built for the BK terminology paper
(../000_papers_abs_ppts/BK_paper_2026, via build_catalogue.py) into a single
JS data file for the Volcano Sky Tour 3D flight app.

    python build_data.py [path/to/BK_paper_2026]

Output: data/volcanoes.js  ->  window.VOLC = {meta, volcanoes[], eruptions{}}

Same REF_YEAR, tier thresholds (draft Table 2) and type_group() as the paper
figure scripts, so the app never disagrees with the paper.
"""
import json
import math
import os
import sys

import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    HERE, "..", "000_papers_abs_ppts", "BK_paper_2026")
OUT = os.path.join(HERE, "data", "volcanoes.js")

REF_YEAR = 2026
THRESHOLDS = {"erupting": 0.252, "high": 500, "moderate": 12000, "dormant": 2.5e6}


def type_group(t):
    if not isinstance(t, str):
        return "Other"
    s = t.lower()
    if "caldera" in s:
        return "Caldera"
    if "shield" in s:
        return "Shield"
    if "stratovolcano" in s or "complex" in s or "compound" in s:
        return "Stratovolcano / complex"
    if any(k in s for k in ["field", "cone", "fissure", "maar", "dome",
                            "tuff", "crater", "lava"]):
        return "Monogenetic / field"
    return "Other"


def num(x):
    try:
        f = float(x)
    except (TypeError, ValueError):
        return None
    return None if math.isnan(f) else f


def i_or_none(x):
    f = num(x)
    return None if f is None else int(round(f))


def s_or_empty(x):
    return x if isinstance(x, str) else ""


vol = pd.read_csv(os.path.join(SRC, "gvp_holocene_volcanoes.csv"))
eru = pd.read_csv(os.path.join(SRC, "gvp_holocene_eruptions.csv"))
pop = pd.read_csv(os.path.join(SRC, "gvp_population_exposure.csv")).rename(
    columns={"VolcanoNumber": "Volcano_Number"})
vol = vol.merge(pop[["Volcano_Number", "Within_5km", "Within_10km",
                     "Within_30km", "Within_100km"]],
                on="Volcano_Number", how="left")

# confirmed-eruption history per volcano: [[year, VEI|null], ...] sorted
conf = eru[eru["Activity_Type"] == "Confirmed Eruption"]
hist = {}
for vn, grp in conf.groupby("Volcano_Number"):
    rows = []
    for _, r in grp.iterrows():
        yr = num(r["StartDateYear"])
        if yr is None:
            continue
        vei = num(r["ExplosivityIndexMax"])
        rows.append([int(yr), None if vei is None else int(vei)])
    rows.sort(key=lambda a: a[0])
    if rows:
        hist[int(vn)] = rows

volcanoes = []
for _, r in vol.iterrows():
    lat, lon = num(r["Latitude"]), num(r["Longitude"])
    if lat is None or lon is None:
        continue
    vn = int(r["Volcano_Number"])
    volcanoes.append({
        "n": vn,
        "name": r["Volcano_Name"],
        "cty": s_or_empty(r["Country"]),
        "reg": s_or_empty(r["Region"]),
        "sreg": s_or_empty(r["Subregion"]),
        "type": s_or_empty(r["Primary_Volcano_Type"]) or "Unknown",
        "tg": type_group(r["Primary_Volcano_Type"]),
        "tec": s_or_empty(r["Tectonic_Setting"]),
        "rock": s_or_empty(r["Major_Rock_Type"]),
        "lat": round(lat, 4),
        "lon": round(lon, 4),
        "elev": i_or_none(r["Elevation"]),
        "ley": i_or_none(r["Last_Eruption_Year"]),  # None = undated
        "p5": i_or_none(r["Within_5km"]),
        "p10": i_or_none(r["Within_10km"]),
        "p30": i_or_none(r["Within_30km"]),
        "p100": i_or_none(r["Within_100km"]),
        "ne": len(hist.get(vn, [])),
        "photo": s_or_empty(r["Primary_Photo_Link"]),
        "cap": s_or_empty(r["Primary_Photo_Caption"]),
        "credit": s_or_empty(r["Primary_Photo_Credit"]),
        "sum": s_or_empty(r["Geological_Summary"]),
    })

meta = {
    "ref_year": REF_YEAR,
    "thresholds": THRESHOLDS,
    "n_volcanoes": len(volcanoes),
    "n_dated": sum(1 for v in volcanoes if v["ley"] is not None),
    "n_undated": sum(1 for v in volcanoes if v["ley"] is None),
    "n_eruptions": int(sum(len(h) for h in hist.values())),
    "source": "Smithsonian GVP - Volcanoes of the World (WFS), "
              "population = LandScan via GVP E3WebApp",
}

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w", encoding="utf-8") as f:
    f.write("window.VOLC = ")
    json.dump({"meta": meta, "volcanoes": volcanoes, "eruptions": hist},
              f, ensure_ascii=False, separators=(",", ":"))
    f.write(";\n")
print("wrote", OUT, "(%.0f KB)" % (os.path.getsize(OUT) / 1024))
print(json.dumps(meta, indent=2))
