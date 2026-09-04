// Curated educational tours for the Volcano Sky Tour.
// Each stop is a GVP volcano number (see data/volcanoes.js) plus an optional
// teaching note shown in the info card, and optional camera overrides:
//   dist (km from summit), alt (m above summit), bearing (deg, camera sits on
//   this side of the volcano), tilt (deg), orbit (seconds for one full orbit).
// Tours whose volcanoes lie outside the focus country switch the globe to
// "whole world" automatically. Edit freely - this file is for teachers and
// curators, not developers.
window.TOURS = [
  {
    id: "nz",
    title: "Aotearoa New Zealand: the big picture",
    blurb: "From the Taupo Volcanic Zone to Taranaki and the city built on the Auckland Volcanic Field.",
    stops: [
      { n: 241040, note: "Whakaari / White Island: Aotearoa's most active cone volcano. The December 2019 eruption killed 22 people on the crater floor. GVP counts 39 confirmed eruptions.", dist: 7, alt: 2500, bearing: 160 },
      { n: 241050, note: "Okataina (Tarawera): the 1886 basaltic fissure eruption tore a 17 km rift, destroyed Te Wairoa and buried the Pink and White Terraces. Last activity 1981 (hydrothermal).", dist: 20, alt: 8000, bearing: 200 },
      { n: 241070, note: "Taupo caldera, now Lake Taupo. The ~232 CE eruption was one of the most violent of the last 5,000 years. ~1,800 years of repose = 'moderate' tier, yet the caldera is restless (2022-23 unrest).", dist: 45, alt: 22000, bearing: 180 },
      { n: 241080, note: "Tongariro: the Te Maari craters erupted in August and November 2012 after 115 years of quiet, showering the Tongariro Alpine Crossing with blocks.", dist: 12, alt: 4000, bearing: 330 },
      { n: 241100, note: "Ruapehu: crater-lake stratovolcano. The 1995-96 eruptions closed the ski fields; the 1953 Tangiwai lahar killed 151. 64 confirmed eruptions, last in 2007.", dist: 12, alt: 4500, bearing: 20 },
      { n: 241030, note: "Taranaki: last erupted ~1800 CE, so ~225 years of repose ('high' tier). A textbook symmetric andesitic cone with a high probability of erupting again this century.", dist: 14, alt: 5000, bearing: 300 },
      { n: 241020, note: "Auckland Volcanic Field: ~53 monogenetic vents under a city of 1.7 million (1.2 million within 30 km). Rangitoto erupted ~600 years ago. The next vent will open somewhere new.", dist: 22, alt: 9000, bearing: 190 },
      { n: 241021, note: "Tuhua / Mayor Island: a peralkaline rhyolite shield with a summit caldera. Last eruption ~7,000 years ago: Holocene, so 'active' to GVP, but few would call it that.", dist: 12, alt: 4500, bearing: 220 },
    ],
  },
  {
    id: "kermadec",
    title: "Kermadec arc: the volcanoes offshore",
    blurb: "Most of New Zealand's volcanoes are under the sea. Terrain shows bathymetry; the imagery is just ocean.",
    stops: [
      { n: 241130, note: "Rumble III: the most active Kermadec seamount, summit 220 m below the sea. Erupted 2008-09; the cone lost ~100 m of height.", dist: 12, alt: 4000 },
      { n: 241150, note: "Brothers: a submarine caldera with the arc's most vigorous hydrothermal vent field, 1,350 m down. No dated eruption: 'active but undated'.", dist: 14, alt: 5000 },
      { n: 242005, note: "Havre Seamount: the 2012 eruption produced a 400 km2 pumice raft from a vent ~900 m deep, the largest deep-sea silicic eruption ever observed.", dist: 14, alt: 5000 },
      { n: 242030, note: "Raoul Island: the 2006 phreatic eruption killed a DOC ranger. 17 confirmed eruptions.", dist: 10, alt: 3500, bearing: 160 },
      { n: 242050, note: "Monowai: erupts every few years (25 confirmed); its summit cone grows and collapses by tens of metres between surveys.", dist: 12, alt: 4000 },
    ],
  },
  {
    id: "terminology",
    title: "What does 'active' mean?",
    blurb: "One volcano per tier of the draft Table 2 classification: erupting, high, moderate, plus the 30% that are 'active' but undated. Worldwide.",
    stops: [
      { n: 211040, note: "Stromboli has erupted almost continuously for ~2,000 years: the textbook 'erupting' volcano (last eruption within 92 days of the reference year)." },
      { n: 211020, note: "Vesuvius last erupted in 1944, so its repose is ~80 years: 'high' tier. Around 3.9 million people live within 30 km." },
      { n: 211010, note: "Campi Flegrei last erupted in 1538 (Monte Nuovo). Nearly 500 years of repose puts it at the edge of the 'high'/'moderate' boundary, yet 3 million people live inside or beside the caldera.", dist: 22, alt: 9000, bearing: 200 },
      { n: 241070, note: "Taupo's last eruption (~232 CE) was one of the most violent of the last 5,000 years. ~1,800 years of repose = 'moderate' tier, but the caldera is still restless.", dist: 45, alt: 22000, bearing: 180 },
      { n: 210020, note: "Chaine des Puys, France: last eruption ~6,000 years ago (Lac Pavin). Holocene, so GVP lists it as 'active', but most people would call it dormant.", dist: 25, alt: 9000, bearing: 150 },
      { n: 211004, note: "Colli Albani, next to Rome, has NO dated Holocene eruption: one of 366 'active but undated' volcanoes (30% of the catalogue). Undated does not mean safe.", dist: 25, alt: 10000, bearing: 160 },
    ],
  },
  {
    id: "ring",
    title: "Pacific Ring of Fire",
    blurb: "Subduction-zone stratovolcanoes and calderas around the Pacific. Worldwide.",
    stops: [
      { n: 283030, note: "Fujisan: last eruption 1707 (Hoei). ~320 years repose, 'high' tier; 20+ million people within 100 km." },
      { n: 282110, note: "Asosan: one of the world's largest calderas (25 km across) with an active central cone.", dist: 30, alt: 12000 },
      { n: 273083, note: "Pinatubo, 1991: the largest eruption of the late 20th century (VEI 6) after ~500 years of repose.", dist: 12, alt: 4500 },
      { n: 273070, note: "Taal: a lake inside a caldera inside a lake; the 2020 eruption displaced 300,000 people.", dist: 20, alt: 8000 },
      { n: 263250, note: "Merapi: frequent dome collapses and pyroclastic flows above densely populated Java." },
      { n: 262000, note: "Krakatau, 1883: caldera collapse, tsunamis, ~36,000 deaths. Anak Krakatau collapsed again in 2018.", dist: 12, alt: 4000 },
      { n: 264040, note: "Tambora, 1815: the largest eruption in recorded history (VEI 7), the 'year without a summer'.", dist: 18, alt: 7000 },
      { n: 321050, note: "Mount St. Helens, 1980: lateral blast and debris avalanche; dome growth 2004-2008.", dist: 12, alt: 4500, bearing: 20 },
      { n: 321030, note: "Rainier: last eruption ~1450 CE, but lahars from its glaciers threaten the Seattle-Tacoma suburbs.", dist: 18, alt: 6000 },
      { n: 341090, note: "Popocatepetl: erupting since 1994, 25 million people within 100 km." },
      { n: 342090, note: "Fuego, Guatemala: the June 2018 pyroclastic flows killed hundreds in San Miguel Los Lotes." },
      { n: 352050, note: "Cotopaxi: glacier-capped; 1877 lahars reached both the Pacific and the Amazon.", dist: 14, alt: 5000 },
      { n: 357120, note: "Villarrica: persistent lava lake above Pucon; last eruption 2025." },
    ],
  },
  {
    id: "hotspots",
    title: "Hotspots and rifts",
    blurb: "Shield volcanoes, fissure eruptions and lava lakes away from subduction zones. Worldwide.",
    stops: [
      { n: 332010, note: "Kilauea: effusive shield; the 2018 lower Puna eruption destroyed 700 homes.", dist: 14, alt: 5000 },
      { n: 332020, note: "Mauna Loa: the largest active volcano on Earth; erupted in 2022 after 38 years.", dist: 40, alt: 15000 },
      { n: 233020, note: "Piton de la Fournaise, Reunion: one of the most frequently erupting volcanoes anywhere.", dist: 14, alt: 5000 },
      { n: 221080, note: "Erta Ale, Afar: a persistent lava lake in the East African Rift.", dist: 10, alt: 3500 },
      { n: 223030, note: "Nyiragongo: world's largest lava lake; 2002 and 2021 lava flows entered Goma (1 million people).", dist: 14, alt: 5000, bearing: 180 },
      { n: 222120, note: "Ol Doinyo Lengai: the only volcano erupting natrocarbonatite lava, cool enough to look black in daylight.", dist: 10, alt: 3500 },
      { n: 371032, note: "Fagradalsfjall, Iceland: 2021 fissure eruption after ~800 years of quiet on the Reykjanes peninsula.", dist: 10, alt: 3000 },
      { n: 372020, note: "Eyjafjallajokull, 2010: a modest eruption that closed European airspace for a week.", dist: 16, alt: 5000 },
      { n: 383010, note: "La Palma (Cumbre Vieja), 2021: 85 days of lava flows destroyed ~3,000 buildings.", dist: 16, alt: 5000 },
    ],
  },
  {
    id: "exposure",
    title: "Living with volcanoes",
    blurb: "Long repose, huge populations: the volcanoes where the 'dormant' label is most dangerous. Worldwide.",
    stops: [
      { n: 211010, note: "Campi Flegrei: ~3 million within 30 km, last eruption 1538, uplift and seismicity ongoing since 2005.", dist: 22, alt: 9000, bearing: 200 },
      { n: 211020, note: "Vesuvius: 3.9 million within 30 km; the 79 CE eruption buried Pompeii and Herculaneum." },
      { n: 281032, note: "Tatun Volcanic Group: ~6 million people within 30 km (Taipei), last eruption ~1,400 years ago.", dist: 20, alt: 7000 },
      { n: 341080, note: "Chichinautzin field, south of Mexico City: monogenetic vents last active ~1,600 years ago under 20+ million people.", dist: 30, alt: 12000 },
      { n: 341090, note: "Popocatepetl: 'Don Goyo' has been erupting since 1994 beside Puebla and Mexico City." },
      { n: 263250, note: "Merapi: the 2010 eruption evacuated 350,000 people from the flanks." },
      { n: 273070, note: "Taal: 2020 eruption; Volcano Island was declared a permanent danger zone.", dist: 20, alt: 8000 },
      { n: 241020, note: "Auckland Volcanic Field: a future eruption will happen somewhere under the city; the question is where.", dist: 22, alt: 9000, bearing: 190 },
    ],
  },
];
