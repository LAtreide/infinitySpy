// data.js — Infinity N5 Unit Database
// Generado automáticamente desde la API oficial de Corvus Belli
//
// ESQUEMA:
//   UNITS: estadísticas y perfiles de cada unidad (sin AVA)
//   FACTION_DEFS: por facción, lista de { id: clave-unidad, ava: N }
//     ava: 999 = AVA TOTAL (sin límite); el AVA puede variar entre facciones
//
// Para editar: busca la unidad en UNITS por nombre y modifica cost/swc
//              o busca la clave en FACTION_DEFS para cambiar el AVA en esa facción
// Tipos: LI=Ligera, MI=Media, HI=Pesada, TAG=Blindado, REM=Remoto, SK=Eskirmidora, WB=Warband
// mov en cm (10-10 = 4-4" en tablero)

"use strict";

const UNITS = {

  // ─────────────────────────────────────────────────────────────────
  // PanOceania y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "pano_neoterra_bolts": {
    name: "Neoterra Bolts", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 12, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Shotgun",                 cost:  21, swc: 0 },
      { name: "Boarding Shotgun+Drop Bears",               cost:  19, swc: 0 },
      { name: "Missile Launcher",                          cost:  24, swc: 1.5 },
      { name: "Spitfire",                                  cost:  25, swc: 1.5 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  26, swc: 0 },
      { name: "Boarding Shotgun+E/M Mine",                 cost:  24, swc: 0.5 },
      { name: "Boarding Shotgun+E/M Mine",                 cost:  22, swc: 0 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  23, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  26, swc: 1.5 },
      { name: "Combi Rifle+Light Shotgun Lt.L1",           cost:  21, swc: 0 },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHacker: true
    , skills: [267,162,156,58,26,1000,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/neoterra-bolts"
  },
  "pano_fireflies_clandestine_demo_squad": {
    name: "Fireflies Clandestine Demo Squad", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+D-Charges",           cost:  24, swc: 1.5 },
      { name: "Submachine Gun+Panzerfaust",                cost:  19, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  23, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  24, swc: 0 },
      { name: "Combi Rifle+Panzerfaust",                   cost:  25, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  24, swc: 0.5 },
    ]
    , ltSkills: ["coc"]
    , isHacker: true
    , skills: [201,162,164,211,58,26,49,56,64,1000]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/fireflies-clandestine-demo-squad"
  },
  "pano_cutters_varuna_naval_chasseurs": {
    name: "Cutters, Varuna Naval Chasseurs", type: "TAG",
    mov: "15-10", cc: 18, bs: 15, ph: 15, wip: 12, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun",                   cost:  97, swc: 2, ocultable: true },
      { name: "MULTI Heavy Machine Gun Lt.L1",             cost:  95, swc: 2.5, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,191,29,84,238,40,254,28,235,58,211,119,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/cutters-varuna-naval-chasseurs"
  },
  "pano_banshees_airborne_assault_unit": {
    name: "Banshees, Airborne Assault Unit", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Pulzar",                      cost:  19, swc: 0, ocultable: true },
      { name: "Submachine Gun+Pulzar",                     cost:  22, swc: 0, ocultable: true },
      { name: "Submachine Gun+Pulzar",                     cost:  25, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Pulzar",                     cost:  23, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [33,35,74,1000]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/banshees-airborne-assault-unit"
  },
  "pano_joan_of_arc_v2_mobility_armor": {
    name: "Jeanne d'Arc v2 (Mobility Armor)", type: "HI",
    mov: "15-5", cc: 23, bs: 15, ph: 14, wip: 15, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+Pulzar",                        cost:  45, swc: 1.5 },
      { name: "AP Spitfire+Pulzar",                        cost:  51, swc: 1.5 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  45, swc: 1 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  49, swc: 1 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  51, swc: 1 },
    ]
    , ltSkills: ["coc", "lt2"]
    , skills: [21,40,52,86,58,83,250,213,164,122,26,251,119]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/jeanne-d-arc-v2-mobility-armor"
  },
  "pano_palbots": {
    name: "Palbots", type: "REM",
    mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   3, swc: 0 },
    ]
    , skills: [243,84,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/palbots"
  },
  "pano_trauma_docs": {
    name: "Trauma-Docs", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  14, swc: 0 },
    ]
    , skills: [53]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/trauma-docs"
  },
  "pano_swiss_guard": {
    name: "Swiss Guard", type: "HI",
    mov: "10-10", cc: 15, bs: 15, ph: 14, wip: 13, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Pulzar",                  cost:  56, swc: 1.5, ocultable: true },
      { name: "Light Shotgun+Missile Launcher",            cost:  60, swc: 1.5, ocultable: true },
      { name: "MULTI Rifle+Pulzar",                        cost:  56, swc: 0.5, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  44, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  47, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,28,164,1000,19,274,161]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/swiss-guard"
  },
  "pano_tikbalangs_armored_chasseurs_regiment": {
    name: "Tikbalangs, Armored Chasseurs Regiment", type: "TAG",
    mov: "15-10", cc: 17, bs: 15, ph: 15, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Heavy Machine Gun+Heavy Flamethrower",      cost:  69, swc: 1.5 },
      { name: "Heavy Machine Gun+Heavy Flamethrower Lt.L1", cost:  73, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [235,201,84,254,28,213,58,82,40,119,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/tikbalangs"
  },
  "pano_team_crux_father_knights": {
    name: "Team Crux Father-Knights", type: "HI",
    mov: "15-5", cc: 22, bs: 14, ph: 14, wip: 13, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+Flash Pulse",             cost:  47, swc: 0 },
      { name: "AP Submachine Gun+Flash Pulse",             cost:  48, swc: 0.5 },
      { name: "MULTI Marksman Rifle+D-Charges",            cost:  54, swc: 0 },
      { name: "MULTI Marksman Rifle+Drop Bears",           cost:  46, swc: 0 },
      { name: "Spitfire+Drop Bears",                       cost:  49, swc: 1.5 },
      { name: "MULTI Marksman Rifle+Drop Bears",           cost:  50, swc: 0 },
    ]
    , skills: [20,201,24,39,189,164,83,191,161,238,251]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/team-crux-father-knights"
  },
  "pano_fusilier_indigo_bipandra": {
    name: "Fusilier Indigo Bipandra", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  23, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  25, swc: 0 },
    ]
    , skills: [40,162,53,213]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/fusilier-indigo-bipandra"
  },
  "pano_locust_clandestine_action_team": {
    name: "Locust, Clandestine Action Team ", type: "SK",
    mov: "10-10", cc: 16, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Grenades",                 cost:  24, swc: 0, ocultable: true },
      { name: "MULTI Marksman Rifle+Boarding Pistol",      cost:  27, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  21, swc: 0, ocultable: true },
      { name: "Breaker Combi Rifle+D-Charges",             cost:  29, swc: 0.5, ocultable: true },
      { name: "Breaker Combi Rifle+D-Charges",             cost:  27, swc: 0, ocultable: true },
      { name: "Breaker Combi Rifle+Flash Pulse",           cost:  31, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,238,28,161,164,58,271,189,1000,29]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/locust-clandestine-action-team"
  },
  "pano_dr_priya_harper_archeo_raider": {
    name: "Dr. Priya Harper, Archeo-raider", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Plasma Carbine+Nanopulser",                 cost:  32, swc: 1 },
      { name: "Plasma Carbine+Nanopulser",                 cost:  35, swc: 1 },
    ]
    , skills: [25,40,162,189,86,264,213,161]
    , equips: [108,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/dr-priya-harper-archeo-raider"
  },
  "pano_helot_militia": {
    name: "Helot Militia", type: "LI",
    mov: "10-10", cc: 12, bs: 11, ph: 10, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Shock Marksman Rifle",                      cost:  11, swc: 0 },
      { name: "Red Fury",                                  cost:  13, swc: 1 },
      { name: "Submachine Gun+Light Rocket Launcher",      cost:  10, swc: 0 },
      { name: "Shock Marksman Rifle",                      cost:  13, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  17, swc: 1.5 },
      { name: "Red Fury",                                  cost:  15, swc: 1 },
      { name: "Submachine Gun+Light Rocket Launcher",      cost:  12, swc: 0 },
    ]
    , skills: [162,109,58,164,65,191,29]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/helot-militia"
  },
  "pano_tech_bees_maintenance_battalions": {
    name: "Tech-Bees, Maintenance Battalions", type: "LI",
    mov: "10-10", cc: 12, bs: 11, ph: 10, wip: 12, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+Flash Pulse",       cost:   9, swc: 0 },
    ]
    , skills: [189,270]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/tech-bees"
  },
  "pano_sacred_military_order_of_teutonic_knights": {
    name: "Teutonic Knights", type: "HI",
    mov: "15-5", cc: 22, bs: 13, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Panzerfaust",                 cost:  18, swc: 0 },
      { name: "Light Shotgun+Panzerfaust",                 cost:  19, swc: 0 },
      { name: "Missile Launcher+Zapper",                   cost:  28, swc: 1.5 },
      { name: "Submachine Gun+Panzerfaust",                cost:  19, swc: 0 },
      { name: "Spitfire",                                  cost:  29, swc: 1.5 },
      { name: "Light Shotgun+Panzerfaust Lt.L1",           cost:  18, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,268,40,58,83,256,201,189,211,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/teutonic-knights"
  },
  "pano_zulu_cobra_recon_and_special_intervention_group": {
    name: "Zulu-Cobra, Recon and Special Intervention Group", type: "LI",
    mov: "10-10", cc: 14, bs: 13, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Spitfire+Assault Pistol",                   cost:  27, swc: 1, ocultable: true },
      { name: "Combi Rifle+Jammer",                        cost:  23, swc: 0, ocultable: true },
      { name: "Breaker Combi Rifle+Assault Pistol",        cost:  26, swc: 0, ocultable: true },
      { name: "Breaker Combi Rifle+Flash Pulse",           cost:  24, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,161,28,164,58,242,65,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/zulu-cobra"
  },
  "pano_paradiso_croc_men": {
    name: "Croc Men", type: "SK",
    mov: "10-10", cc: 14, bs: 12, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  25, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle+Shock Mine",             cost:  29, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+D-Charges",                     cost:  33, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  26, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Flash Pulse",                   cost:  30, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,28,164,58,47,1000,56,59]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/croc-men"
  },
  "pano_squalos_mk_ii_panoceanian_armored_cavalry_heavy_lancers": {
    name: "Squalos Mk-II", type: "TAG",
    mov: "15-10", cc: 18, bs: 15, ph: 15, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "MULTI Marksman Rifle+MULTI Pistol",         cost:  55, swc: 1 },
      { name: "Heavy Machine Gun+Grenade Launcher",        cost:  62, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+MULTI Pistol",      cost:  66, swc: 1.5 },
    ]
    , skills: [201,84,40,254,262,235,213,211,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/squalos-mk-ii"
  },
  "pano_scarecrows_active_recon_group": {
    name: "Scarecrows Active Recon Group", type: "SK",
    mov: "10-10", cc: 15, bs: 13, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Nanopulser",               cost:  26, swc: 0, ocultable: true },
      { name: "Submachine Gun+Nanopulser",                 cost:  29, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Nanopulser",                 cost:  27, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Nanopulser",               cost:  27, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Nanopulser",                 cost:  25, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,47,28,164,58,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/scarecrows-active-recon-group"
  },
  "pano_fennec_fusiliers": {
    name: "Fennec Fusiliers", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 12, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  10, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  18, swc: 1 },
      { name: "Missile Launcher",                          cost:  15, swc: 1.5 },
      { name: "Submachine Gun+Light Rocket Launcher",      cost:  12, swc: 0 },
      { name: "Thunderbolt+Shock Mine",                    cost:  14, swc: 0 },
      { name: "Combi Rifle",                               cost:  12, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  16, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  13, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  10, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [58,242,56,260,189,1000,59,65,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/fennec-fusiliers"
  },
  "pano_bca_magistrates": {
    name: "BCA Magistrates", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  17, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  21, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  21, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  25, swc: 0 },
      { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  19, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser Lt.L1",     cost:  23, swc: 0 },
    ]
    , ltSkills: ["coc", "s1", "lt2", "ci"]
    , skills: [207,261,162,189,26,119,69]
    , equips: [184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/bca-magistrates"
  },
  "pano_aquila_guard": {
    name: "Aquila Guard", type: "HI",
    mov: "15-5", cc: 15, bs: 15, ph: 14, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+MULTI Pistol",            cost:  52, swc: 1.5 },
      { name: "MULTI Marksman Rifle+Disco Baller",         cost:  49, swc: 0 },
      { name: "MULTI Marksman Rifle+Disco Baller Lt.L1",   cost:  49, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,263,189,119]
    , equips: [116,241,238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/aquila-guard"
  },
  "pano_drummers_mobile_support_section": {
    name: "Drummers, Mobile Support Section", type: "LI",
    mov: "10-10", cc: 14, bs: 13, ph: 10, wip: 12, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Marksman Rifle",                            cost:  40, swc: 1 },
      { name: "Marksman Rifle",                            cost:  42, swc: 1.5 },
      { name: "Marksman Rifle",                            cost:  42, swc: 1 },
      { name: "Marksman Rifle+Flash Pulse",                cost:  21, swc: 0 },
      { name: "Marksman Rifle+Flash Pulse",                cost:  47, swc: 1 },
      { name: "MULTI Sniper Rifle+Flash Pulse",            cost:  28, swc: 1.5 },
    ]
    , skills: [161,59,201,84,28,243,109]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/drummers-mobile-support-section"
  },
  "pano_redeye_close_air_support_squad": {
    name: "Redeye Close Air Support Squad", type: "t8",
    mov: "20-5", cc: -1, bs: 14, ph: 13, wip: 13, arm: 6, bts: 6, w: 0, str: 2, s: 7,
    profiles: [
      { name: "Spitfire+Chain Rifle",                      cost:  37, swc: 1.5 },
      { name: "Spitfire+Chain Rifle",                      cost:  38, swc: 1.5 },
    ]
    , skills: [265,84,40,254,28,235,74,58,264,275,65]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/redeye-close-air-support-squad"
  },
  "pano_hetkari_shooters": {
    name: "Hetkari Shooters", type: "HI",
    mov: "15-5", cc: 17, bs: 14, ph: 14, wip: 12, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Missile Launcher+AP Submachine Gun",        cost:  47, swc: 1.5 },
      { name: "MULTI Red Fury+E/Marat",                    cost:  48, swc: 1.5 },
      { name: "Missile Launcher+AP Submachine Gun Lt.L1",  cost:  47, swc: 1.5 },
      { name: "MULTI Red Fury+E/Marat Lt.L1",              cost:  48, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,156,262,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/hetkari-shooters"
  },
  "pano_blink_team": {
    name: "Blink Team", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 10, wip: 12, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Shock Marksman Rifle+Shock Mine",           cost:  28, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle+Assault Pistol",         cost:  32, swc: 1.5, ocultable: true },
      { name: "Heavy Rocket Launcher+WildParrot",          cost:  28, swc: 1.5, ocultable: true },
    ]
    , skills: [191,29,238,28,164]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/blink-team"
  },
  "pano_black_a_i_r": {
    name: "Black A.I.R.", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Nanopulser",                 cost:  26, swc: 0.5 },
      { name: "K1 Marksman Rifle+Nanopulser",              cost:  29, swc: 0.5 },
      { name: "MULTI Sniper Rifle+Nanopulser",             cost:  33, swc: 1.5 },
      { name: "Submachine Gun+Flash Pulse",                cost:  31, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,262,122,58,1000,59,109,33]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/black-a-i-r"
  },
  "pano_joan_of_arc": {
    name: "Jeanne d'Arc", type: "HI",
    mov: "10-10", cc: 23, bs: 15, ph: 15, wip: 15, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Pulzar",                        cost:  47, swc: 0 },
      { name: "MULTI Rifle+Pulzar",                        cost:  53, swc: 0 },
      { name: "MULTI Rifle+Pulzar Lt.L1",                  cost:  47, swc: 1 },
      { name: "MULTI Rifle+Pulzar Lt.L1",                  cost:  51, swc: 1 },
      { name: "MULTI Rifle+Pulzar Lt.L1",                  cost:  53, swc: 1 },
    ]
    , ltSkills: ["coc", "lt2"]
    , skills: [21,201,250,52,164,86,83,213,122,26,251,119]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/jeanne-d-arc"
  },
  "pano_patsy_garnett_orc_troops_varuna_div_nco": {
    name: "Patsy Garnett, Orc Troops' Varuna Div. NCO", type: "HI",
    mov: "15-5", cc: 19, bs: 14, ph: 14, wip: 13, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+E/Mitter",                cost:  34, swc: 0 },
    ]
    , skills: [267,59,164,211,58,261]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/patsy-garnett"
  },
  "pano_griffin_troops": {
    name: "Griffin Troops", type: "HI",
    mov: "15-5", cc: 16, bs: 14, ph: 12, wip: 12, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Pulzar",                        cost:  31, swc: 0 },
      { name: "Heavy Machine Gun+Pulzar",                  cost:  37, swc: 1.5 },
      { name: "Feuerbach+Pulzar",                          cost:  38, swc: 1.5 },
      { name: "Heavy Machine Gun+Pulzar Lt.L1",            cost:  37, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,58,263,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/griffin-troops"
  },
  "pano_machinists": {
    name: "Machinists", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 12, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  15, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  16, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  18, swc: 0 },
    ]
    , skills: [49]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/machinists"
  },
  "pano_knights_of_montesa": {
    name: "Knights of Montesa", type: "HI",
    mov: "10-10", cc: 23, bs: 13, ph: 13, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Red Fury+Boarding Pistol",                  cost:  32, swc: 1.5 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  26, swc: 0 },
      { name: "Boarding Pistol+Boarding Shotgun",          cost:  20, swc: 0 },
      { name: "Spitfire+Drop Bears",                       cost:  35, swc: 1.5 },
    ]
    , skills: [20,268,58,201,28,83,256,161,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/knights-of-montesa"
  },
  "pano_military_order_curators": {
    name: "Military Order Curators", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 12, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  17, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  18, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  20, swc: 0 },
    ]
    , skills: [49,162,83]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/military-order-curators"
  },
  "pano_panoceanian_black_friars": {
    name: "PanOceanian Black Friars", type: "MI",
    mov: "10-10", cc: 19, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Thunderbolt+Nanopulser",                    cost:  24, swc: 0 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  27, swc: 0 },
      { name: "Heavy Rocket Launcher+Nanopulser",          cost:  22, swc: 1.5 },
    ]
    , skills: [83,262,131]
    , equips: [183,115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/panoceanian-black-friars"
  },
  "pano_infirmarers_of_saint_lazarus": {
    name: "Infirmarers of Saint Lazarus", type: "MI",
    mov: "15-5", cc: 21, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Boarding Pistol",               cost:  20, swc: 0 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  17, swc: 0 },
    ]
    , skills: [19,40,53,83,164,58]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/infirmarers-of-saint-lazarus"
  },
  "pano_order_sergeants": {
    name: "Order Sergeants", type: "LI",
    mov: "10-10", cc: 18, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  13, swc: 0 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  15, swc: 1.5 },
      { name: "Combi Rifle+Nanopulser",                    cost:  18, swc: 0.5 },
      { name: "Combi Rifle+Nanopulser",                    cost:  17, swc: 0 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  22, swc: 1.5 },
      { name: "Combi Rifle+Nanopulser",                    cost:  22, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [83,1000,109,243,84,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/order-sergeants"
  },
  "pano_trinitarian_tertiaries": {
    name: "Trinitarian Tertiaries", type: "SK",
    mov: "10-10", cc: 18, bs: 12, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle",                        cost:  25, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  24, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  22, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 1, ocultable: true },
      { name: "Submachine Gun+Flash Pulse",                cost:  23, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  23, swc: 1, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,28,164,83,47,1000,59,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/trinitarian-tertiaries"
  },
  "pano_coadjutor_crosiers_military_order_infantry": {
    name: "Coadjutor Crosiers, Military Order Infantry", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  11, swc: 0 },
      { name: "Combi Rifle+Blitzen",                       cost:  12, swc: 0 },
      { name: "MULTI Sniper Rifle+E/M Mine",               cost:  19, swc: 1 },
      { name: "Spitfire",                                  cost:  18, swc: 1 },
      { name: "Combi Rifle",                               cost:  13, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  24, swc: 1 },
    ]
    , skills: [83,56,64,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/military-orders/coadjutor-crosiers-military-order-infantry"
  },
  "pano_equestrian_order_of_knights_of_the_holy_sepulchre": {
    name: "Knights of the Holy Sepulchre", type: "HI",
    mov: "15-5", cc: 22, bs: 14, ph: 13, wip: 13, arm: 5, bts: 9, w: 2, str: 0, s: 5,
    profiles: [
      { name: "MULTI Marksman Rifle",                      cost:  53, swc: 0 },
      { name: "AP Heavy Machine Gun",                      cost:  53, swc: 1 },
    ]
    , skills: [201,191,267,39,164,83,211]
    , equips: [104]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/knights-of-the-holy-sepulchre"
  },
  "pano_father_officer_gabriele_de_fersen": {
    name: "Father-Officer Gabriele De Fersen", type: "HI",
    mov: "15-5", cc: 22, bs: 14, ph: 14, wip: 14, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Light Flamethrower",            cost:  42, swc: 0.5 },
      { name: "Spitfire+AP + Shock CC Weapon",             cost:  46, swc: 1.5 },
      { name: "MULTI Rifle+Light Flamethrower Lt.L1",      cost:  42, swc: 0.5 },
      { name: "Spitfire+AP + Shock CC Weapon Lt.L1",       cost:  46, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [21,1000,164,83,40,119]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/gabriele-de-fersen"
  },
  "pano_holy_order_of_hospitaller_knights_of_saint_john_of_skovorodino": {
    name: "Knights Hospitaller", type: "HI",
    mov: "10-10", cc: 22, bs: 14, ph: 14, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle",                               cost:  27, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  32, swc: 1.5 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  26, swc: 0 },
      { name: "MULTI Rifle",                               cost:  30, swc: 0 },
      { name: "MULTI Rifle Lt.L1",                         cost:  27, swc: 0 },
      { name: "Boarding Shotgun+Contender",                cost:  32, swc: 0 },
      { name: "Heavy Machine Gun Lt.L1",                   cost:  32, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,164,83,250,53,119,161]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/knights-hospitaller"
  },
  "pano_crusader_brethren": {
    name: "Crusader Brethren", type: "MI",
    mov: "10-10", cc: 21, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 0, ocultable: true },
      { name: "MULTI Rifle+Light Flamethrower",            cost:  28, swc: 0, ocultable: true },
      { name: "Spitfire",                                  cost:  31, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  23, swc: 0, ocultable: true },
    ]
    , skills: [20,33,35,74,58,83,24,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/crusader-brethren"
  },
  "pano_montesa_order_motorized_knights": {
    name: "Motorized Knights of Montesa", type: "HI",
    mov: "20-15", cc: 23, bs: 13, ph: 13, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 4,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  21, swc: 0 },
      { name: "MULTI Rifle+Boarding Pistol",               cost:  26, swc: 0 },
      { name: "Red Fury+Boarding Pistol",                  cost:  29, swc: 1 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  23, swc: 0 },
    ]
    , skills: [20,268,40,162,28,83,256,64]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/motorized-knights-of-montesa"
  },
  "pano_seraphs_armoured_cavalry_of_military_order": {
    name: "Seraphs", type: "TAG",
    mov: "15-10", cc: 23, bs: 15, ph: 16, wip: 13, arm: 7, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "AP Spitfire+Pulzar",                        cost:  72, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Pulzar",            cost:  74, swc: 1.5 },
    ]
    , skills: [19,201,40,235,213,211,74,83,254,243,84,28,189]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/seraphs"
  },
  "pano_indigo_brother_konstantinos": {
    name: "Indigo Brother Konstantinos", type: "LI",
    mov: "10-10", cc: 18, bs: 12, ph: 12, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+D-Charges",                     cost:  23, swc: 0 },
      { name: "AP Submachine Gun+Flammenspeer",            cost:  26, swc: 0 },
    ]
    , skills: [28,189,83,240,65,191,238,47]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/indigo-brother-konstantinos"
  },
  "pano_knight_hospitaller_kyle_hawkins": {
    name: "Knight Hospitaller Kyle Hawkins", type: "HI",
    mov: "15-5", cc: 23, bs: 14, ph: 13, wip: 13, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Pulzar",               cost:  32, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  26, swc: 0 },
    ]
    , skills: [21,40,250,262,189,164,83,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/knight-hospitaller-kyle-hawkins"
  },
  "pano_padre_inquisidor_mendoza": {
    name: "Padre-Inquisidor Mendoza", type: "HI",
    mov: "15-5", cc: 22, bs: 14, ph: 13, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Shotgun+Grenades",                    cost:  40, swc: 0 },
      { name: "MULTI Rifle+Grenades",                      cost:  45, swc: 0 },
      { name: "MULTI Rifle+Grenades",                      cost:  40, swc: 0 },
    ]
    , skills: [20,240,201,24,40,250,28,83,161,215,122]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/padre-inquisidor-mendoza"
  },
  "pano_knight_of_justice_koj_of_military_order": {
    name: "Knight of Justice (KOJ)", type: "HI",
    mov: "15-5", cc: 23, bs: 14, ph: 14, wip: 13, arm: 5, bts: 9, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Missile Launcher",                          cost:  46, swc: 1.5 },
      { name: "Spitfire",                                  cost:  42, swc: 1.5 },
      { name: "MULTI Marksman Rifle+Pitcher",              cost:  45, swc: 0.5 },
      { name: "MULTI Marksman Rifle+Flash Pulse",          cost:  41, swc: 0 },
      { name: "Spitfire Lt.L1",                            cost:  42, swc: 1.5 },
      { name: "Spitfire+D-Charges",                        cost:  45, swc: 1 },
      { name: "MULTI Marksman Rifle+Flash Pulse Lt.L1",    cost:  41, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [20,164,58,83,122,1000,59,119,161]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/knight-of-justice"
  },
  "pano_knight_commander": {
    name: "Knight Commander", type: "MI",
    mov: "10-10", cc: 20, bs: 13, ph: 12, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Pulzar",                      cost:  23, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Pulzar Lt.L1",             cost:  20, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Pulzar Lt.L1",             cost:  24, swc: 0, ocultable: true },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHolomask: true
    , skills: [20,162,83,40,201,26,119]
    , equips: [24]
    , armyUrl: "https://infinityuniverse.com/army/infinity/military-orders/knight-commander"
  },
  "pano_fusilier_indigo_richard_quinn": {
    name: "Fusilier Indigo Richard Quinn", type: "LI",
    mov: "10-10", cc: 13, bs: 13, ph: 10, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Flash Pulse",          cost:  26, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  24, swc: 0 },
      { name: "MULTI Rifle+Flash Pulse",                   cost:  26, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [267,162,59,26]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/fusilier-indigo-richard-quinn"
  },
  "pano_indigo_spec_ops_captain_uma_s_rensen": {
    name: "Indigo Spec-Ops Captain Uma Sørensen", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+E/M Mine",                   cost:  27, swc: 0 },
      { name: "Breaker Combi Rifle+Silenced Pistol",       cost:  25, swc: 0 },
      { name: "Submachine Gun+E/M Mine",                   cost:  23, swc: 0 },
      { name: "Breaker Combi Rifle+Silenced Pistol Lt.L1", cost:  25, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [162,262,28,189,164,58,82,191,29,161,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/captain-uma-sorensen"
  },
  "pano_auxilia": {
    name: "Auxilia", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 10, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  15, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0 },
      { name: "Submachine Gun+Flash Pulse",                cost:  15, swc: 0 },
      { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  15, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [59,119,84,28,243]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/auxilia"
  },
  "pano_clausewitz_uhlans": {
    name: "Clausewitz Uhlans", type: "TAG",
    mov: "15-10", cc: 15, bs: 15, ph: 15, wip: 12, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Spitfire+Heavy Rocket Launcher",            cost:  80, swc: 1.5, ocultable: true },
      { name: "Feuerbach+Panzerfaust",                     cost:  70, swc: 1.5, ocultable: true },
    ]
    , skills: [201,191,29,84,40,254,28,235,213,267,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/clausewitz-uhlans"
  },
  "pano_hexas_strategic_security_division": {
    name: "Hexas, Strategic Security Division", type: "LI",
    mov: "10-10", cc: 17, bs: 13, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Spitfire+E/Marat",                          cost:  31, swc: 1.5, ocultable: true },
      { name: "MULTI Sniper Rifle+Silenced Pistol",        cost:  30, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+Panzerfaust",                   cost:  30, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+E/Marat",                       cost:  27, swc: 0, ocultable: true },
    ]
    , ltSkills: ["ci"]
    , isHacker: true
    , skills: [191,29,84,238,28,164,162,207,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/hexas-strategic-security-division"
  },
  "pano_hannibal_mercenary_team_leader": {
    name: "Hannibal, Neoterran Mercenary Team Leader", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Nanopulser",                 cost:  23, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  29, swc: 0 },
      { name: "Vulkan Shotgun+Nanopulser",                 cost:  26, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  32, swc: 1 },
    ]
    , skills: [201,84,40,162,65,213,86,251]
    , armyUrl: "https://infinityuniverse.com/army/infinity/neoterran-capitaline-army/hannibal-neoterran-mercenary-team-leader"
  },
  "pano_jotums_svalarheima_armoured_cuirassiers": {
    name: "Jotums. Svalarheima Armoured Cuirassiers Regiment", type: "TAG",
    mov: "15-10", cc: 18, bs: 15, ph: 17, wip: 13, arm: 10, bts: 9, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  82, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower Lt.L1", cost:  82, swc: 2 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,84,40,254,235,213,58,162,119,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/jotums"
  },
  "pano_b_yg_soldiers": {
    name: "Bøyg Soldiers", type: "HI",
    mov: "10-10", cc: 16, bs: 14, ph: 13, wip: 12, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Missile Launcher+Disco Baller",             cost:  44, swc: 1.5 },
      { name: "Mk12+Disco Baller",                         cost:  44, swc: 0 },
    ]
    , skills: [201,58]
    , equips: [183,241,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/boyg-soldiers"
  },
  "pano_vargar_maximum_security_team": {
    name: "Vargar Maximum Security Team", type: "MI",
    mov: "15-5", cc: 15, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Spitfire",                                  cost:  26, swc: 1.5 },
      { name: "Combi Rifle+Heavy Flamethrower",            cost:  27, swc: 0 },
      { name: "K1 Marksman Rifle+E/M Mine",                cost:  26, swc: 0 },
      { name: "Combi Rifle+Heavy Flamethrower",            cost:  24, swc: 0 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  22, swc: 1.5 },
    ]
    , skills: [162,58,74,242,65,56,59]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/vargar-maximum-security-team"
  },
  "pano_troll_hunter_gunnar_lundmark": {
    name: "Troll-hunter Gunnar Lundmark", type: "MI",
    mov: "10-10", cc: 23, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Chain-colt",                    cost:  30, swc: 0 },
      { name: "Boarding Shotgun+Chain-colt",               cost:  29, swc: 0 },
    ]
    , skills: [20,24,84,40,250,162,28,189,213,164,58,82,161,215]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/gunnar-lundmark"
  },
  "pano_flight_officer_agnes_ferreira": {
    name: "Flight Officer Agnes Ferreira", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Nanopulser",                 cost:  13, swc: 0 },
      { name: "Submachine Gun+Nanopulser",                 cost:  16, swc: 0 },
      { name: "Submachine Gun+Nanopulser",                 cost:  18, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [84,189,67,58,255,26]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/flight-officer-agnes-ferreira"
  },
  "pano_minescorp_jackals": {
    name: "Minescorp Jackals", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Panzerfaust",                cost:   6, swc: 0 },
      { name: "Light Rocket Launcher+Boarding Pistol",     cost:   6, swc: 0 },
      { name: "Boarding Shotgun+E/M Carbine",              cost:  10, swc: 0 },
      { name: "Combi Rifle+Blitzen",                       cost:  10, swc: 0 },
      { name: "Boarding Shotgun+E/M Grenade Launcher",     cost:  11, swc: 0.5 },
    ]
    , skills: [25,47,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/kestrel-colonial-force/minescorp-jackals"
  },

  // ─────────────────────────────────────────────────────────────────
  // Yu Jing y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "yj_cha_yi_yaokong_messenger_remote": {
    name: "Chaīyì Yáokòng", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/chaiyi-yaokong"
  },
  "yj_daoy_ng_operative_control_unit": {
    name: "Dāoyīng Operative Control Unit", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun",                          cost:  19, swc: 0, ocultable: true },
      { name: "Boarding Shotgun",                          cost:  24, swc: 0.5, ocultable: true },
      { name: "MULTI Sniper Rifle+Shock Mine",             cost:  30, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun Lt.L1",                    cost:  28, swc: 0.5, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [191,29,162,28,164,1000,56,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/daoying-operative-control-unit"
  },
  "yj_lei_gong_invincibles_lord_of_thunder": {
    name: "Léi Gōng, Invincibles Lord of Thunder", type: "HI",
    mov: "15-5", cc: 18, bs: 13, ph: 12, wip: 14, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+E/Mitter",                cost:  32, swc: 0 },
      { name: "MULTI Marksman Rifle+Zapper",               cost:  34, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  29, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  34, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [84,162,86,74,33,26]
    , equips: [183,114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/lei-g-ng-invincibles-lord-of-thunder"
  },
  "yj_shang_ji_invincibles": {
    name: "Shàng Jí Invincibles", type: "HI",
    mov: "15-5", cc: 19, bs: 13, ph: 14, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Boarding Pistol",               cost:  37, swc: 0 },
      { name: "MULTI Rifle+Flash Pulse",                   cost:  40, swc: 0.5 },
      { name: "MULTI Rifle+Flash Pulse",                   cost:  36, swc: 0 },
      { name: "AP Heavy Machine Gun+Boarding Pistol",      cost:  45, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  34, swc: 1.5 },
      { name: "AP Heavy Machine Gun+Boarding Pistol Lt.L1", cost:  45, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [201,40,122,58,213,263,1000,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/shang-ji-invincibles"
  },
  "yj_daof_i_tactical_section": {
    name: "Dàofei Tactical Section", type: "HI",
    mov: "15-5", cc: 19, bs: 13, ph: 14, wip: 13, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+D-Charges",                     cost:  52, swc: 1.5, ocultable: true },
      { name: "MULTI Rifle+D-Charges",                     cost:  52, swc: 0.5, ocultable: true },
      { name: "AP Spitfire+D-Charges Lt.L1",               cost:  52, swc: 1.5, ocultable: true },
      { name: "MULTI Rifle+D-Charges Lt.L1",               cost:  52, swc: 0.5, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [191,29,40,47,28,164,58,189,1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/daofei-tactical-section"
  },
  "yj_mowang_troops": {
    name: "Mówáng Troops", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 13, wip: 13, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Spitfire+Flammenspeer",                     cost:  42, swc: 1.5 },
      { name: "Red Fury+Flammenspeer",                     cost:  44, swc: 1 },
      { name: "Spitfire+Flammenspeer",                     cost:  44, swc: 1.5 },
      { name: "Spitfire+Flammenspeer Lt.L1",               cost:  42, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,28,164,86,58,262,211,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/mowang-troops"
  },
  "yj_hwarang_corps": {
    name: "Hwarang Corps", type: "HI",
    mov: "15-5", cc: 22, bs: 12, ph: 13, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Panzerfaust",                 cost:  19, swc: 0 },
      { name: "Thunderbolt+Light Shotgun",                 cost:  24, swc: 0 },
      { name: "Combi Rifle",                               cost:  25, swc: 0 },
      { name: "Light Shotgun+Panzerfaust",                 cost:  20, swc: 0 },
    ]
    , skills: [250,21,84,40,164,162,262,201]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/hwarang-corps"
  },
  "yj_dokkaebi_cyberteam": {
    name: "Dokkaebi Cyberteam", type: "HI",
    mov: "15-5", cc: 14, bs: 12, ph: 10, wip: 13, arm: 3, bts: 6, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Combi Rifle+Pitcher",                       cost:  23, swc: 0.5 },
      { name: "Combi Rifle+Pitcher",                       cost:  22, swc: 0 },
      { name: "Mk12+MULTI Pistol",                         cost:  28, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [235,40,86,84,1000,156]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/dokkaebi-cyberteam"
  },
  "yj_haetae_unit": {
    name: "Haetae Unit", type: "HI",
    mov: "10-10", cc: 15, bs: 14, ph: 12, wip: 12, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Assault Pistol+AP Heavy Machine Gun",       cost:  40, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  36, swc: 1.5 },
    ]
    , skills: [213,83,267,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/haetae-unit"
  },
  "yj_husong_yaokong_escort_remote": {
    name: "Hùsòng Yáokòng", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  23, swc: 1 },
      { name: "Thunderbolt",                               cost:  18, swc: 0 },
    ]
    , skills: [235,84,61]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/husong-yaokong"
  },
  "yj_naval_operations_group_sulyong": {
    name: "Naval Operations Group Sulyong", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle",                      cost:  24, swc: 0 },
      { name: "Red Fury",                                  cost:  25, swc: 1 },
      { name: "Light Shotgun+Thunderbolt",                 cost:  22, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  21, swc: 0 },
    ]
    , skills: [211,58,59,64]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/sulyong"
  },
  "yj_sun_tze": {
    name: "Sun Tze", type: "HI",
    mov: "15-5", cc: 16, bs: 12, ph: 12, wip: 17, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Pulzar Lt.L1",               cost:  53, swc: 0 },
      { name: "Thunderbolt+Light Shotgun Lt.L1",           cost:  53, swc: 0 },
    ]
    , ltSkills: ["s2", "lt2", "ci"]
    , skills: [201,207,162,28,215,86,70,119]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/sun-tze"
  },
  "yj_blue_wolf_mongol_cavalry": {
    name: "Blue Wolf Mongol Cavalry", type: "TAG",
    mov: "15-10", cc: 23, bs: 14, ph: 15, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "AP Spitfire+Heavy Flamethrower",            cost:  70, swc: 1.5 },
    ]
    , skills: [24,201,84,40,254,213,58,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/blue-wolf-mongol-cavalry"
  },
  "yj_zhany_ng_imperial_agents": {
    name: "Zhànyīng Imperial Agents", type: "LI",
    mov: "10-10", cc: 18, bs: 12, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Boarding Pistol",         cost:  26, swc: 1 },
      { name: "Missile Launcher+Boarding Pistol",          cost:  23, swc: 1.5 },
      { name: "Breaker Combi Rifle+Pitcher",               cost:  24, swc: 0.5 },
      { name: "Breaker Combi Rifle+D-Charges",             cost:  20, swc: 0 },
      { name: "Breaker Combi Rifle+Madtraps",              cost:  23, swc: 0 },
      { name: "Breaker Combi Rifle+Madtraps Lt.L1",        cost:  23, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [40,162,67,1000,59,242,56,65,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/zhanying-imperial-agents"
  },
  "yj_major_lunah_ex_aristeia_sniper": {
    name: "Major Lunah, ex-Aristeia! Sniper", type: "LI",
    mov: "10-10", cc: 16, bs: 13, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Pistol+VIRAL Sniper Rifle",        cost:  29, swc: 1.5, ocultable: true },
    ]
    , skills: [242,29,162,28,164,58,83,191,201]
    , equips: [114]
  },
  "yj_yaofang_long_ya": {
    name: "Yáofáng Lóng Yá", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 12, arm: 1, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Panzerfaust+Flammenspeer",                  cost:  16, swc: 0, ocultable: true },
      { name: "Panzerfaust+Flammenspeer",                  cost:  19, swc: 0, ocultable: true },
      { name: "Panzerfaust+Flammenspeer",                  cost:  17, swc: 0.5, ocultable: true },
    ]
    , skills: [235,191,29,84,161,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/yaofang-long-ya"
  },
  "yj_qishi_stateempire_tag_support_pilots": {
    name: "Qíshì, StateEmpire TAG Support Pilots ", type: "LI",
    mov: "10-10", cc: 21, bs: 11, ph: 11, wip: 13, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun",                            cost:  11, swc: 0 },
      { name: "Light Shotgun",                             cost:  10, swc: 0 },
      { name: "Adhesive Launcher Rifle+Assault Pistol",    cost:  10, swc: 0 },
    ]
    , skills: [84,189,164,270,19,58,240]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/qishi-stateempire-tag-support-pilots"
  },
  "yj_yan_hu_invincibles_fire_support_heavy_regiment": {
    name: "Yān Huǒ Invincibles, Fire Support Heavy Regiment", type: "HI",
    mov: "10-10", cc: 18, bs: 14, ph: 13, wip: 13, arm: 5, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "MULTI Heavy Machine Gun",                   cost:  45, swc: 1.5 },
      { name: "Hyper-Rapid Magnetic Cannon",               cost:  47, swc: 1.5 },
      { name: "Missile Launcher+Mine Dispenser",           cost:  41, swc: 1.5 },
      { name: "Missile Launcher",                          cost:  42, swc: 1.5 },
    ]
    , skills: [162,267,83,109]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/yan-hu-invincibles"
  },
  "yj_hac_tao_special_unit": {
    name: "Hac Tao Special Unit", type: "HI",
    mov: "15-5", cc: 19, bs: 14, ph: 14, wip: 14, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Missile Launcher+Nanopulser",               cost:  60, swc: 1.5, ocultable: true },
      { name: "MULTI Rifle+Nanopulser",                    cost:  58, swc: 0.5, ocultable: true },
      { name: "Heavy Machine Gun+Nanopulser",              cost:  59, swc: 1.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,40,28,164,1000,211]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/hac-tao-special-unit"
  },
  "yj_hsien_warriors": {
    name: "Hsien Warriors", type: "HI",
    mov: "15-5", cc: 21, bs: 14, ph: 14, wip: 14, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  47, swc: 0 },
      { name: "Heavy Machine Gun+Nanopulser",              cost:  49, swc: 1.5 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  44, swc: 1 },
      { name: "MULTI Marksman Rifle+Nanopulser Lt.L1",     cost:  47, swc: 1 },
      { name: "Heavy Machine Gun+Nanopulser Lt.L1",        cost:  49, swc: 1 },
      { name: "MULTI Marksman Rifle+Nanopulser Lt.L1",     cost:  51, swc: 1 },
      { name: "MULTI Rifle+Nanopulser Lt.L1",              cost:  48, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [19,84,40,189,119]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/hsien-warriors"
  },
  "yj_krit_kokram_zuy_ng_invincibles_specialist": {
    name: "Krit Kokram, Zúyŏng Invincibles Specialist", type: "HI",
    mov: "15-5", cc: 19, bs: 13, ph: 12, wip: 14, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Shotgun+E/Mitter",                    cost:  37, swc: 0 },
      { name: "MULTI Rifle+Chain-colt",                    cost:  35, swc: 0 },
      { name: "Feuerbach+Chain-colt",                      cost:  40, swc: 1.5 },
    ]
    , skills: [84,40,49,211,161,56]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/krit-kokram"
  },
  "yj_hundun_ambush_unit": {
    name: "Hùndùn Ambush Unit", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle",                      cost:  31, swc: 0.5, ocultable: true },
      { name: "MULTI Sniper Rifle",                        cost:  29, swc: 1.5, ocultable: true },
      { name: "Heavy Rocket Launcher",                     cost:  22, swc: 1.5, ocultable: true },
    ]
    , skills: [191,29,238,28,164]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/hundun-ambush-unit"
  },
  "yj_shaolin_warrior_monks": {
    name: "Shaolin Warrior Monks", type: "WB",
    mov: "10-10", cc: 23, bs: 10, ph: 13, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:   5, swc: 0 },
      { name: "Chain Rifle+Smoke Grenades",                cost:   6, swc: 0 },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:   7, swc: 0 },
      { name: "Combi Rifle+Smoke Grenade Launcher",        cost:  10, swc: 0.5 },
    ]
    , skills: [21,40,164,83,256,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/shaolin-warrior-monks"
  },
  "yj_weib_ng_yaokong_guardian_remote": {
    name: "Wèibīng Yáokòng", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  14, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  17, swc: 0 },
    ]
    , skills: [235,84,242,59,65,213]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/weibing-yaokong"
  },
  "yj_sulsa_warriors": {
    name: "Sulsa Warriors", type: "SK",
    mov: "10-10", cc: 23, bs: 11, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  28, swc: 0, ocultable: true },
      { name: "Submachine Gun",                            cost:  31, swc: 0, ocultable: true },
      { name: "Submachine Gun+Shock Mine",                 cost:  29, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [21,29,84,40,47,28,164,58,24,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/sulsa-warriors"
  },
  "yj_imperial_agent_pheasant_rank_y_j": {
    name: "Imperial Agents, Pheasant Rank", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+E/Mitter",                      cost:  28, swc: 0.5 },
      { name: "Combi Rifle+E/Mitter",                      cost:  26, swc: 0 },
      { name: "Combi Rifle+E/Mitter",                      cost:  27, swc: 0 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  23, swc: 0 },
      { name: "Red Fury",                                  cost:  28, swc: 1 },
    ]
    , ltSkills: ["coc"]
    , isHacker: true
    , skills: [26,251,40,162,164,1000,53,56,213]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/imperial-agents-pheasant-rank"
  },
  "yj_kuang_shi": {
    name: "KUANG SHI", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle",                               cost:   6, swc: 0 },
      { name: "Boarding Shotgun",                          cost:   8, swc: 0 },
    ]
    , skills: [40,264,83,38,256]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/kuang-shi"
  },
  "yj_celestial_guard_monitor": {
    name: "CELESTIAL GUARD Monitor", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Smoke Grenade Launcher",        cost:  13, swc: 0.5 },
    ]
    , skills: [40,261]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/kuang-shi"
  },
  "yj_zhanshi": {
    name: "Zhanshi", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  10, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  18, swc: 1 },
      { name: "MULTI Sniper Rifle",                        cost:  16, swc: 1 },
      { name: "Missile Launcher",                          cost:  15, swc: 1.5 },
      { name: "Combi Rifle",                               cost:  15, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  11, swc: 0 },
      { name: "Combi Rifle",                               cost:  12, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  10, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [1000,59,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/zhanshi"
  },
  "yj_silver_snakes_yin_she_unit": {
    name: "Silver Snakes, Yín-Shé Unit  ", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+E/M Carbine",                   cost:  22, swc: 0 },
      { name: "K1 Marksman Rifle+E/M Carbine",             cost:  26, swc: 0 },
      { name: "MULTI Marksman Rifle+E/M Carbine",          cost:  26, swc: 0 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  22, swc: 0 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  24, swc: 0.5 },
      { name: "K1 Sniper Rifle+E/Mitter",                  cost:  27, swc: 0.5 },
    ]
    , skills: [84,164,58,201,189,161,56,156]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/silver-snakes-yin-she-unit"
  },
  "yj_f_iquan_imperial_tactical_wing": {
    name: "Fēiquán Imperial Tactical Wing", type: "t8",
    mov: "20-5", cc: -1, bs: 13, ph: 12, wip: 13, arm: 3, bts: 3, w: 0, str: 2, s: 7,
    profiles: [
      { name: "E/M Carbine+Flash Pulse",                   cost:  28, swc: 0 },
      { name: "MULTI Rifle+Akrylat-Kanone",                cost:  27, swc: 0 },
    ]
    , skills: [265,84,40,254,28,264,65,74,58,275,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/feiquan-imperial-tactical-wing"
  },
  "yj_longwang_imperial_tag_police": {
    name: "Lóngwáng, Imperial TAG Police", type: "TAG",
    mov: "15-10", cc: 18, bs: 14, ph: 14, wip: 13, arm: 7, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "AP Heavy Machine Gun+Adhesive Launcher Rifle", cost:  70, swc: 1.5 },
      { name: "Mk12+Adhesive Launcher Rifle",              cost:  68, swc: 1 },
      { name: "AP Heavy Machine Gun+Adhesive Launcher Rifle", cost:  72, swc: 1.5 },
    ]
    , skills: [201,84,40,254,213,211,28,189,243]
    , equips: [239,184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/longwang-imperial-tag-police"
  },
  "yj_son_bae_yaokong": {
    name: "Son-Bae  Yáokòng", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
      { name: "Missile Launcher",                          cost:  19, swc: 1.5 },
    ]
    , skills: [235,84,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/son-bae-yaokong"
  },
  "yj_liu_x_ng_jump_infantry": {
    name: "Liú Xīng Jump Infantry", type: "HI",
    mov: "15-5", cc: 19, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  24, swc: 0, ocultable: true },
      { name: "Spitfire+Boarding Pistol",                  cost:  33, swc: 1.5, ocultable: true },
      { name: "MULTI Rifle+D-Charges",                     cost:  30, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  30, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [84,40,162,35,33,86,74,189,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/liu-xing-jump-infantry"
  },
  "yj_gud_n_troops": {
    name: "Gūdǎn Troops", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Heavy Flamethrower",          cost:  11, swc: 0 },
      { name: "Submachine Gun+Zapper",                     cost:  11, swc: 0 },
      { name: "Light Shotgun+Heavy Flamethrower",          cost:  13, swc: 0 },
      { name: "Submachine Gun+Zapper",                     cost:  12, swc: 0 },
    ]
    , skills: [267,58,29,161]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/gud-n-troops"
  },
  "yj_su_jian_immediate_action_unit": {
    name: "Sù-Jiàn Immediate Action Unit", type: "HI",
    mov: "20-5", cc: 9, bs: 12, ph: 14, wip: 13, arm: 5, bts: 6, w: 0, str: 2, s: 3,
    profiles: [
      { name: "Spitfire+Light Flamethrower",               cost:  50, swc: 1.5 },
      { name: "Heavy Shotgun+Light Flamethrower",          cost:  46, swc: 0 },
    ]
    , skills: [84,40,86,58,82,246,235,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/su-jian-immediate-action-unit"
  },
  "yj_dragon_lords_imperial_service_judges": {
    name: "Dragon Lords, Imperial Service Judges", type: "LI",
    mov: "10-10", cc: 18, bs: 10, ph: 10, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Nanopulser+Flash Pulse",                    cost:   5, swc: 0 },
    ]
    , skills: [19,189,164]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/dragon-lords-imperial-service-judges"
  },
  "yj_imperial_vanguard_qianf_ng": {
    name: "Imperial Vanguard Qiánfēng", type: "MI",
    mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Heavy Flamethrower",       cost:  25, swc: 0 },
      { name: "Submachine Gun+E/Marat",                    cost:  24, swc: 0 },
      { name: "Submachine Gun+E/Marat",                    cost:  26, swc: 0 },
      { name: "Light Shotgun+E/M Carbine",                 cost:  27, swc: 0 },
      { name: "Boarding Shotgun+Heavy Flamethrower",       cost:  28, swc: 0 },
    ]
    , isHacker: true
    , skills: [201,40,28,189,164,58,83,33,1000,191,238,47,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/imperial-vanguard-qianfeng"
  },
  "yj_bayara_palace_guard": {
    name: "Bayara Palace Guard", type: "LI",
    mov: "10-10", cc: 22, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Light Shotgun+Heavy Flamethrower",          cost:  18, swc: 0 },
      { name: "Light Shotgun+Heavy Flamethrower",          cost:  19, swc: 0 },
      { name: "Submachine Gun+E/Marat",                    cost:  20, swc: 0 },
    ]
    , skills: [131,247,83,56]
    , equips: [113,184,114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/bayara-palace-guard"
  },
  "yj_imperial_agent_adil_mehmut_crane_rank_armor": {
    name: "Imperial Agent Adil Mehmut (Crane Rank Armor)", type: "HI",
    mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+Nanopulser",                    cost:  49, swc: 1.5 },
      { name: "AP Spitfire+Nanopulser Lt.L1",              cost:  49, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [21,201,84,40,267,122,189,65,164,119]
    , equips: [238,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/imperial-agent-adil-mehmut-crane-rank-armor"
  },
  "yj_gu_f_ng_xi_zhuang": {
    name: "Guǐ Fēng Xi Zhuang", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Flash Pulse",                cost:  21, swc: 0 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  21, swc: 0 },
    ]
    , skills: [40,162,122,59,131,201,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/gu-feng-xi-zhuang"
  },
  "yj_bao_troops_judicial_watch_unit": {
    name: "Bào Troops, Judicial Watch Unit", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 14, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+Flash Pulse",            cost:  27, swc: 1.5 },
      { name: "Light Shotgun+Heavy Riotstopper",           cost:  16, swc: 0 },
      { name: "Submachine Gun+Heavy Riotstopper",          cost:  17, swc: 0 },
      { name: "Thunderbolt+Flash Pulse",                   cost:  23, swc: 0 },
    ]
    , skills: [131,83,201]
    , equips: [183,184,115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/bao-troops"
  },
  "yj_k_nren_counter_insurgency_group": {
    name: "Kǎnrèn Counter-insurgency Group", type: "SK",
    mov: "10-10", cc: 18, bs: 13, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  27, swc: 0 },
      { name: "Submachine Gun+D-Charges",                  cost:  25, swc: 0.5 },
      { name: "Boarding Shotgun+Shock Mine",               cost:  26, swc: 0.5 },
      { name: "Submachine Gun+Madtraps",                   cost:  22, swc: 0.5 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  25, swc: 0 },
    ]
    , isHacker: true
    , skills: [191,161,40,164,58,28,215,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/k-nren-counter-insurgency-group"
  },
  "yj_koga_ninjas": {
    name: "Koga Ninjas", type: "LI",
    mov: "15-5", cc: 23, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "E/M Carbine+Pulzar",                        cost:  27, swc: 0 },
      { name: "E/M Carbine+Pulzar",                        cost:  28, swc: 0.5 },
      { name: "E/M Carbine+Pulzar",                        cost:  30, swc: 0 },
      { name: "E/M Carbine+Contender",                     cost:  28, swc: 0 },
      { name: "E/M Carbine+Pulzar",                        cost:  25, swc: 0 },
    ]
    , isHacker: true
    , skills: [21,191,84,40,28,189,215,164,82,29,161,56,1000,33]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/koga-ninjas"
  },
  "yj_imperial_agents_crane_rank_xian_he": {
    name: "Imperial Agents, Crane Rank", type: "HI",
    mov: "15-5", cc: 24, bs: 13, ph: 13, wip: 14, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Heavy Machine Gun+Pulzar",               cost:  49, swc: 1.5 },
      { name: "AP Spitfire+Pulzar",                        cost:  47, swc: 1 },
      { name: "MULTI Rifle+Pulzar",                        cost:  41, swc: 0 },
      { name: "MULTI Rifle+Pulzar",                        cost:  45, swc: 0.5 },
      { name: "AP Heavy Machine Gun+Pulzar Lt.L1",         cost:  49, swc: 1 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  47, swc: 0 },
      { name: "MULTI Rifle+Pulzar Lt.L1",                  cost:  41, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [21,84,40,262,164,242,65,1000,119]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/imperial-agents-crane-rank"
  },
  "yj_shenji_ying_divine_machine_battalion": {
    name: "Shénjī Yíng, Divine Machine Battalion", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Akrylat-Kanone",                cost:  18, swc: 0 },
      { name: "Thunderbolt+Light Shotgun",                 cost:  19, swc: 0 },
      { name: "Thunderbolt+Light Shotgun",                 cost:  20, swc: 0 },
      { name: "Combi Rifle+Akrylat-Kanone",                cost:  21, swc: 0 },
    ]
    , skills: [49]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/shenji-ying-divine-machine-battalion"
  },
  "yj_jinwei_the_forbidden_troops": {
    name: "Jìnwèi, the Forbidden Troops", type: "HI",
    mov: "10-10", cc: 18, bs: 12, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+Heavy Riotstopper", cost:  18, swc: 0 },
      { name: "Adhesive Launcher Rifle+Heavy Riotstopper", cost:  19, swc: 0 },
      { name: "E/Mitter+Heavy Riotstopper",                cost:  23, swc: 0 },
    ]
    , skills: [201,162,65,67,83,235,242]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/jinwei-the-forbidden-troops"
  },
  "yj_celestial_guard": {
    name: "Celestial Guard", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Riotstopper",             cost:  13, swc: 0 },
      { name: "Submachine Gun+Light Riotstopper",          cost:  14, swc: 0.5 },
      { name: "Combi Rifle+Light Riotstopper",             cost:  14, swc: 0 },
      { name: "Combi Rifle+Light Riotstopper Lt.L1",       cost:  13, swc: 0 },
      { name: "Combi Rifle+Light Riotstopper",             cost:  15, swc: 0 },
      { name: "Combi Rifle+Smoke Grenade Launcher",        cost:  13, swc: 0.5 },
      { name: "MULTI Marksman Rifle",                      cost:  17, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [40,1000,59,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/celestial-guard"
  },
  "yj_j_nyao_drop_unit": {
    name: "Jinyao Drop Unit", type: "REM",
    mov: "15-5", cc: 12, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Heavy Riotstopper",        cost:  17, swc: 0, ocultable: true },
      { name: "Red Fury+Heavy Riotstopper",                cost:  24, swc: 1, ocultable: true },
      { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  18, swc: 0, ocultable: true },
      { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  19, swc: 0, ocultable: true },
    ]
    , skills: [235,84,33,35,74,64]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/jinyao-drop-unit"
  },
  "yj_captain_qiang_gao_invincibles_officer": {
    name: "Captain Qiang Gāo, Invincibles Officer", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 12, wip: 14, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Nanopulser",              cost:  48, swc: 1.5 },
      { name: "Heavy Machine Gun+Nanopulser Lt.L1",        cost:  48, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,40,267,162,119]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/captain-qiang-gao-invincibles-officer"
  },
  "yj_tai_sheng_zuy_ng_invincibles_nco": {
    name: "Tai Sheng, Zúyŏng Invincibles NCO", type: "HI",
    mov: "15-5", cc: 18, bs: 14, ph: 12, wip: 14, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Chain-colt",            cost:  37, swc: 0 },
      { name: "Thunderbolt+Chain-colt",                    cost:  33, swc: 0 },
      { name: "Breaker Combi Rifle+Chain-colt",            cost:  40, swc: 0 },
      { name: "Thunderbolt+Chain-colt",                    cost:  36, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [84,40,59,211,267,67,26]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/tai-sheng-zuy-ng-invincibles-nco"
  },
  "yj_chief_mech_engineer_chung_hee_jeong": {
    name: "Chief Mech-Engineer Chung-Hee Jeong", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+E/Mitter",                      cost:  31, swc: 0 },
      { name: "K1 Combi Rifle+D-Charges",                  cost:  27, swc: 0 },
    ]
    , skills: [201,40,162,49]
    , equips: [238,237,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/chung-hee-jeong"
  },
  "yj_sergeant_so_ra_kwon_jujak_regiment": {
    name: "Sergeant So-ra Kwon, Jujak Regiment", type: "HI",
    mov: "15-5", cc: 17, bs: 14, ph: 12, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Light Shotgun",        cost:  32, swc: 0 },
      { name: "MULTI Marksman Rifle+Light Shotgun",        cost:  34, swc: 0 },
      { name: "Combi Rifle+Heavy Flamethrower",            cost:  31, swc: 0 },
      { name: "Combi Rifle+Heavy Flamethrower",            cost:  33, swc: 0 },
    ]
    , skills: [84,40,201,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/sergeant-so-ra-kwon"
  },
  "yj_jing_qo_the_shadow_of_huangdi": {
    name: "Jing Qo, the Shadow of Huangdi", type: "MI",
    mov: "15-5", cc: 23, bs: 13, ph: 12, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Boarding Pistol",               cost:  32, swc: 0 },
    ]
    , skills: [21,24,40,261,162,28,189,86,164,82,83]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/jing-qo"
  },
  "yj_y_mao_infantry": {
    name: "Yě Māo Infantry", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Panzerfaust",                   cost:  23, swc: 0 },
      { name: "AP Spitfire+Boarding Pistol",               cost:  28, swc: 1.5 },
      { name: "Missile Launcher+Boarding Pistol",          cost:  26, swc: 1.5 },
      { name: "MULTI Rifle+Boarding Pistol",               cost:  27, swc: 0.5 },
      { name: "MULTI Rifle+Boarding Pistol",               cost:  25, swc: 0 },
      { name: "MULTI Rifle+Panzerfaust",                   cost:  27, swc: 0 },
      { name: "MULTI Rifle+Panzerfaust",                   cost:  24, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,58,74,1000,49,59]
    , equips: [114,246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/ye-mao-infantry"
  },

  // ─────────────────────────────────────────────────────────────────
  // Ariadna y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "ari_uxia_cherry_mcneill_corporal_of_1st_highlanders_s_a_s": {
    name: "Uxía McNeill", type: "SK",
    mov: "10-10", cc: 22, bs: 11, ph: 13, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Grenades",                 cost:  25, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  25, swc: 0, ocultable: true },
    ]
    , skills: [20,191,84,29,40,28,164,58,250,47,201,189]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/uxia-mcneill"
  },
  "ari_cadin_firststrike_donn_point_man_of_the_grenadiers_reg": {
    name: "Cadin \"FirstStrike\" Donn, Point-man of the Grenadiers Reg.", type: "WB",
    mov: "15-5", cc: 23, bs: 12, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "T2 Boarding Shotgun+Flammenspeer",          cost:  30, swc: 0 },
    ]
    , skills: [250,84,40,82,240,19,24,39]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/cadin-firststrike-donn"
  },
  "ari_roger_van_zant_captain_of_6th_airborne_ranger_reg_oklahoma": {
    name: "Van Zant", type: "LI",
    mov: "10-10", cc: 22, bs: 13, ph: 13, wip: 14, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Rifle+Chain-colt",                       cost:  33, swc: 0, ocultable: true },
      { name: "T2 Boarding Shotgun+Chain-colt",            cost:  35, swc: 0, ocultable: true },
    ]
    , skills: [84,40,33,85,164,21,24,213,162,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/van-zant"
  },
  "ari_briscards_8eme_regiment_d_infanterie_de_montagne": {
    name: "Briscards, 8éme Régiment d'Infanterie de Montagne", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 12, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Sniper Rifle+Assault Pistol",            cost:  24, swc: 0.5 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  20, swc: 1.5 },
      { name: "AP Marksman Rifle+Flash Pulse",             cost:  22, swc: 0 },
      { name: "AP Marksman Rifle+Assault Pistol",          cost:  23, swc: 0 },
      { name: "AP Marksman Rifle+Flash Pulse Lt.L1",       cost:  26, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,267,58,273,82,201,59,64,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/briscards"
  },
  "ari_veteran_kazaks": {
    name: "Veteran Kazaks", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 12, wip: 14, arm: 4, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Heavy Machine Gun",                      cost:  45, swc: 1.5 },
      { name: "T2 Rifle+Light Flamethrower",               cost:  38, swc: 0 },
      { name: "T2 Rifle+Light Flamethrower",               cost:  36, swc: 0 },
      { name: "T2 Rifle+Light Flamethrower Lt.L1",         cost:  36, swc: 0 },
      { name: "AP Heavy Machine Gun Lt.L1",                cost:  45, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,162,28,67,86,267,262,40,273,58,64,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/veteran-kazaks"
  },
  "ari_vassily_plushenko_tankhunters_officer": {
    name: "Vassily Plushenko, TankHunters Officer", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 12, wip: 14, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Marksman Rifle+Akrylat-Kanone",          cost:  39, swc: 0, ocultable: true },
      { name: "T2 Sniper Rifle+D-Charges",                 cost:  39, swc: 1, ocultable: true },
      { name: "T2 Marksman Rifle+Akrylat-Kanone Lt.L1",    cost:  35, swc: 0, ocultable: true },
      { name: "T2 Sniper Rifle+D-Charges Lt.L1",           cost:  35, swc: 1, ocultable: true },
    ]
    , ltSkills: ["coc", "lt2"]
    , skills: [191,29,28,164,85,84,201,215,26,119,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/vassily-plushenko"
  },
  "ari_loup_garou_groupe_mobile_d_action_speciale": {
    name: "Loup-Garous", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Viral Rifle+Light Riotstopper",             cost:  17, swc: 0 },
      { name: "Boarding Shotgun+Adhesive Launcher Rifle",  cost:  15, swc: 0 },
      { name: "VIRAL Sniper Rifle",                        cost:  24, swc: 1 },
      { name: "Viral Marksman Rifle",                      cost:  24, swc: 0.5 },
    ]
    , skills: [201,83,156]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/loup-garous"
  },
  "ari_chernobog_armored_detachment": {
    name: "Chernobog Armored Detachment", type: "TAG",
    mov: "15-10", cc: 17, bs: 14, ph: 16, wip: 13, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "AP Heavy Machine Gun+Heavy Rocket Launcher", cost:  70, swc: 1.5 },
      { name: "AP Heavy Machine Gun+Heavy Flamethrower",   cost:  63, swc: 1.5 },
    ]
    , skills: [84,40,213,254,201,246,189,28,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/chernobog-armored-detachment"
  },
  "ari_william_wallace": {
    name: "William Wallace", type: "WB",
    mov: "15-10", cc: 24, bs: 13, ph: 14, wip: 15, arm: 3, bts: 0, w: 2, str: 0, s: 2,
    profiles: [
      { name: "T2 Rifle+Light Shotgun",                    cost:  38, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [240,24,84,40,39,162,52,250,122,26]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/william-wallace"
  },
  "ari_1er_regiment_de_para_commandos": {
    name: "Para-Commandos", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Boarding Pistol",                     cost:  18, swc: 0, ocultable: true },
      { name: "AP Spitfire+Boarding Pistol",               cost:  29, swc: 1, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  21, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  19, swc: 0, ocultable: true },
    ]
    , skills: [28,33,58,201,59,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/para-commandos"
  },
  "ari_vystrel_mobile_artillery_regiment": {
    name: "Vystrel Mobile Artillery Regiment", type: "REM",
    mov: "10-10", cc: 13, bs: 12, ph: 9, wip: 12, arm: 2, bts: 0, w: 0, str: 2, s: 4,
    profiles: [
      { name: "AP Sniper Rifle+Light Rocket Launcher",     cost:  23, swc: 0.5 },
      { name: "Portable Autocannon+Light Rocket Launcher", cost:  32, swc: 1.5 },
      { name: "AP Sniper Rifle+Light Rocket Launcher",     cost:  26, swc: 0.5 },
    ]
    , skills: [201,84,235,89,109]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/vystrel-mobile-artillery-regiment"
  },
  "ari_tankhunters_regiment": {
    name: "TankHunters", type: "MI",
    mov: "10-10", cc: 14, bs: 13, ph: 12, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Heavy Machine Gun+D-Charges",            cost:  33, swc: 1.5, ocultable: true },
      { name: "Portable Autocannon+D-Charges",             cost:  36, swc: 1.5, ocultable: true },
      { name: "Missile Launcher+D-Charges",                cost:  28, swc: 1.5, ocultable: true },
      { name: "AP Submachine Gun+Panzerfaust",             cost:  25, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Panzerfaust",             cost:  24, swc: 0.5, ocultable: true },
      { name: "AP Rifle+Adhesive Launcher Rifle",          cost:  25, swc: 0, ocultable: true },
      { name: "AP Rifle+Adhesive Launcher Rifle Lt.L1",    cost:  25, swc: 0, ocultable: true },
    ]
    , ltSkills: ["coc", "lt2"]
    , skills: [191,29,84,28,164,26,56,161,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/tankhunters"
  },
  "ari_kazak_spetsnazs": {
    name: "Kazak Spetsnazs", type: "MI",
    mov: "10-10", cc: 21, bs: 12, ph: 12, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Silenced Pistol",         cost:  36, swc: 1.5 },
      { name: "AP Sniper Rifle+Silenced Pistol",           cost:  32, swc: 0.5 },
      { name: "Boarding Shotgun+Grenades",                 cost:  27, swc: 0 },
      { name: "AP Submachine Gun+Grenades",                cost:  27, swc: 0 },
    ]
    , skills: [20,201,84,156,164,28,191,29,215,33]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/kazak-spetsnazs"
  },
  "ari_polaris_team": {
    name: "Polaris Team", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "POLARIS TEAM ALPHA",                        cost:  32, swc: 0 },
      { name: "POLARIS TEAM BETA",                         cost:  40, swc: 0 },
    ]
    , skills: [84,85,82,162,264,250,24,40,279]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/polaris-team"
  },
  "ari_ariadna_scouts": {
    name: "Scouts", type: "SK",
    mov: "10-10", cc: 15, bs: 12, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Ohotnik+D-Charges",                         cost:  27, swc: 0, ocultable: true },
      { name: "Silenced Pistol+T2 Boarding Shotgun",       cost:  23, swc: 0, ocultable: true },
      { name: "Silenced Pistol+T2 Sniper Rifle",           cost:  25, swc: 0.5, ocultable: true },
      { name: "Ohotnik+D-Charges",                         cost:  28, swc: 0.5, ocultable: true },
      { name: "Ohotnik+D-Charges",                         cost:  28, swc: 0, ocultable: true },
      { name: "Ohotnik+D-Charges Lt.L1",                   cost:  27, swc: 0, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,191,29,28,58,164,47,56,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/scouts"
  },
  "ari_the_unknown_ranger": {
    name: "The Unknown Ranger", type: "MI",
    mov: "15-5", cc: 23, bs: 13, ph: 12, wip: 13, arm: 4, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Mk12+Chain-colt",                           cost:  39, swc: 0 },
      { name: "AP Spitfire+Chain-colt",                    cost:  42, swc: 1 },
    ]
    , skills: [19,84,40,39,162,28,189,213,164,86]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/the-unknown-ranger"
  },
  "ari_streloks_kazak_reconaissance_unit": {
    name: "Streloks, Kazak Reconaissance Unit", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Marksman Rifle+AP Mine",                 cost:  24, swc: 0, ocultable: true },
      { name: "Submachine Gun+Chain-colt",                 cost:  16, swc: 0, ocultable: true },
      { name: "Submachine Gun+Chain-colt",                 cost:  25, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  17, swc: 0, ocultable: true },
    ]
    , skills: [191,29,161,28,215,164,278,59,243,40,65,82]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/streloks"
  },
  "ari_remontnikbot_v_5_elektronik": {
    name: "Remontnikbot V-5 Elektronik", type: "REM",
    mov: "10-10", cc: 10, bs: 8, ph: 9, wip: 12, arm: 0, bts: 0, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   2, swc: 0 },
    ]
    , skills: [84,28,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/remontnikbot-v-5-elektronik"
  },
  "ari_line_kazaks": {
    name: "Line Kazaks", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle",                                     cost:   9, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  20, swc: 1 },
      { name: "Missile Launcher",                          cost:  17, swc: 1.5 },
      { name: "Rifle+Flash Pulse",                         cost:  10, swc: 0 },
      { name: "Rifle",                                     cost:  11, swc: 0 },
      { name: "Rifle Lt.L1",                               cost:   9, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [59,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/line-kazaks"
  },
  "ari_frontoviks_separate_assault_bat": {
    name: "Frontoviks, Separate Assault Bat.", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Rifle+Assault Pistol",                   cost:  21, swc: 0 },
      { name: "AP Spitfire+Assault Pistol",                cost:  30, swc: 1 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  19, swc: 1.5 },
      { name: "T2 Rifle+Panzerfaust",                      cost:  26, swc: 0 },
      { name: "T2 Rifle+Assault Pistol",                   cost:  23, swc: 0 },
      { name: "AP Sniper Rifle+Assault Pistol",            cost:  28, swc: 0.5 },
      { name: "T2 Rifle+Assault Pistol Lt.L1",             cost:  21, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,28,267,49,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/frontoviks-separate-assault-bat"
  },
  "ari_antipode_assault_pack": {
    name: "Antipode Assault Pack", type: "WB",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Smoke Grenade Launcher",              cost:  26, swc: 0 },
    ]
    , skills: [213,243,191,29,40,28,65,164,74,58,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/antipode-assault-pack"
  },
  "ari_1st_highlanders_s_a_s": {
    name: "S.A.S.", type: "SK",
    mov: "10-10", cc: 22, bs: 11, ph: 13, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Light Shotgun",                 cost:  20, swc: 0, ocultable: true },
      { name: "Chain Rifle+Grenades",                      cost:  20, swc: 0, ocultable: true },
      { name: "Chain Rifle+Light Shotgun",                 cost:  21, swc: 0, ocultable: true },
      { name: "D-Charges+E/M Mine",                        cost:  25, swc: 0, ocultable: true },
      { name: "Chain Rifle+Light Shotgun",                 cost:  22, swc: 0.5, ocultable: true },
    ]
    , skills: [191,20,29,84,40,47,28,58,164,59,189,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/s-a-s"
  },
  "ari_equipe_mirage_5": {
    name: "Equipe Mirage-5", type: "HI",
    mov: "10-10", cc: 16, bs: 14, ph: 12, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "EQUIPE MIRAGE-5 (MARGOT & DUROC)",          cost:  60, swc: 2, ocultable: true },
    ]
    , skills: [201,162,58,33,28,189,262,213,40,273,20,84,74,256,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/equipe-mirage-5"
  },
  "ari_armata_2_proyekt_ratnik": {
    name: "Armata-2 Proyekt \"Ratnik\"", type: "HI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 13, arm: 6, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "AP Spitfire+Panzerfaust",                   cost:  46, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Heavy Shotgun",       cost:  41, swc: 1.5 },
    ]
    , skills: [213,201,84,246,85]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/ratnik"
  },
  "ari_13eme_moblots": {
    name: "Moblots", type: "HI",
    mov: "10-10", cc: 16, bs: 13, ph: 12, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Boarding Pistol",         cost:  32, swc: 1.5 },
      { name: "AP Rifle+Light Shotgun",                    cost:  27, swc: 0 },
      { name: "AP Rifle+Light Shotgun",                    cost:  31, swc: 0 },
      { name: "AP Rifle+Light Shotgun",                    cost:  29, swc: 0 },
      { name: "AP Rifle+Light Shotgun Lt.L1",              cost:  27, swc: 0 },
      { name: "Heavy Machine Gun+Boarding Pistol Lt.L1",   cost:  32, swc: 1.5 },
      { name: "AP Spitfire+Boarding Pistol",               cost:  32, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,40,162,58,28,273,213,262,49,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/moblots"
  },
  "ari_apaches_equipe_d_intervention_urbaine": {
    name: "Apaches", type: "WB",
    mov: "15-5", cc: 22, bs: 11, ph: 13, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Chain-colt",                          cost:  19, swc: 0 },
      { name: "Chain Rifle+Grenades",                      cost:  14, swc: 0 },
      { name: "Light Shotgun+AP + Shock CC Weapon",        cost:  17, swc: 0 },
      { name: "Light Shotgun+Grenades",                    cost:  20, swc: 0 },
      { name: "Chain Rifle+Grenades",                      cost:  17, swc: 0 },
    ]
    , skills: [250,201,84,40,162,86,74,240,161,24]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/apaches"
  },
  "ari_rokots": {
    name: "Rokots", type: "LI",
    mov: "10-10", cc: 14, bs: 10, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Grenades",                   cost:   9, swc: 0 },
      { name: "Submachine Gun+Grenades",                   cost:  10, swc: 0 },
      { name: "Submachine Gun+Grenades",                   cost:  11, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  12, swc: 0 },
      { name: "Submachine Gun+Grenades Lt.L1",             cost:   9, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,59,64,47,29,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/rokots"
  },
  "ari_7th_foxtrot_rangers_newport": {
    name: "Foxtrot Rangers", type: "SK",
    mov: "10-10", cc: 14, bs: 11, ph: 13, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Shock Mine",                          cost:  17, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  17, swc: 0, ocultable: true },
      { name: "Sniper Rifle+Shock Mine",                   cost:  20, swc: 0.5, ocultable: true },
      { name: "Rifle+Flash Pulse",                         cost:  18, swc: 0, ocultable: true },
      { name: "Rifle+Shock Mine Lt.L1",                    cost:  17, swc: 2, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , skills: [191,29,47,28,164,58,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/foxtrot-rangers"
  },
  "ari_kazak_doktor": {
    name: "Kazak Doktor", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle",                                     cost:  12, swc: 0 },
    ]
    , skills: [53]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/kazak-doktor"
  },
  "ari_col_yevgueni_voronin_cossack_diplomatic_corps": {
    name: "Col. Yevgueni Voronin, Cossack Diplomatic Corps", type: "LI",
    mov: "10-10", cc: 22, bs: 11, ph: 12, wip: 14, arm: 0, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Light Shotgun+Flash Pulse",                 cost:  18, swc: 0 },
      { name: "Light Shotgun+Flash Pulse Lt.L1",           cost:  22, swc: 0 },
    ]
    , ltSkills: ["s1", "lt2", "ci"]
    , skills: [20,247,67,65,207,262,119,69]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/col-yevgueni-voronin"
  },
  "ari_mekhamobilya_support_pilots": {
    name: "Mekhamobilya Support Pilots", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+D-Charges",                  cost:   9, swc: 0 },
    ]
    , skills: [84,189,270]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/mekhamobilya-support-pilots"
  },
  "ari_4eme_de_chasseurs": {
    name: "Chasseurs", type: "SK",
    mov: "10-10", cc: 14, bs: 11, ph: 13, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Flamethrower",                  cost:  19, swc: 0, ocultable: true },
      { name: "Rifle+Adhesive Launcher Rifle",             cost:  20, swc: 0, ocultable: true },
      { name: "Rifle+Light Flamethrower",                  cost:  20, swc: 0.5, ocultable: true },
      { name: "Rifle+Light Flamethrower",                  cost:  20, swc: 0, ocultable: true },
    ]
    , skills: [191,29,47,28,67,164,58,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/chasseurs"
  },
  "ari_45th_highlanders_rifles_galwegian": {
    name: "45th Highlanders Rifles", type: "WB",
    mov: "10-10", cc: 22, bs: 10, ph: 14, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Smoke Grenades",                      cost:  10, swc: 0 },
      { name: "Chain Rifle+Smoke Grenades",                cost:   5, swc: 0 },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:  10, swc: 0 },
    ]
    , skills: [24,84,85,256,264,40]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/45th-highlanders-rifles"
  },
  "ari_dynamo_reg_of_kazak_light_cavalry": {
    name: "Dynamo Reg. of Kazak Light Cavalry", type: "LI",
    mov: "20-10", cc: 15, bs: 12, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Submachine Gun+Panzerfaust",                cost:  14, swc: 0 },
      { name: "AP Spitfire+Smoke Grenade Launcher",        cost:  25, swc: 1 },
      { name: "Boarding Shotgun+Smoke Grenade Launcher",   cost:  16, swc: 0.5 },
    ]
    , skills: [40,85,84,256,28,268,64]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/dynamo"
  },
  "ari_konduktors_transtartaric_railway_troops": {
    name: "Konduktors, Transtartaric Railway Troops", type: "LI",
    mov: "10-10", cc: 15, bs: 10, ph: 11, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Light Shotgun",                 cost:   7, swc: 0 },
      { name: "Shock Marksman Rifle",                      cost:  16, swc: 0 },
      { name: "Rifle+Chain-colt",                          cost:  12, swc: 0 },
      { name: "Rifle",                                     cost:  10, swc: 0 },
    ]
    , skills: [278,29,47,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/konduktors-transtartaric-railway-troops"
  },
  "ari_dog_warriors": {
    name: "Dog-Warriors", type: "WB",
    mov: "15-10", cc: 21, bs: 10, ph: 14, wip: 12, arm: 1, bts: 0, w: 3, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Grenades",                      cost:  21, swc: 0 },
    ]
    , skills: [84,74,256,162,264,246,24,40]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/dog-warriors"
  },
  "ari_zenit_7_detachment": {
    name: "Zenit-7 Detachment", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Marksman Rifle",                         cost:  25, swc: 0.5, ocultable: true },
      { name: "AP Marksman Rifle",                         cost:  30, swc: 0.5, ocultable: true },
      { name: "AP Sniper Rifle+Light Shotgun",             cost:  27, swc: 1, ocultable: true },
    ]
    , ltSkills: ["coc"]
    , skills: [191,201,29,28,215,164,26,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/zenit-7-detachment"
  },
  "ari_brigadier_jacques_bruant_sous_officier_des_metros": {
    name: "Brigadier Jacques Bruant, Sous-officier des Métros", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+Chain-colt",                    cost:  28, swc: 1 },
      { name: "AP Spitfire+Chain-colt",                    cost:  33, swc: 1 },
      { name: "AP Spitfire+Chain-colt Lt.L1",              cost:  28, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [28,189,164,58,191,29,47,119]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/brigadier-jacques-bruant"
  },
  "ari_kibervolk_patrol": {
    name: "Kibervolk Patrol", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+D-Charges",                   cost:  11, swc: 0 },
      { name: "Light Shotgun+D-Charges",                   cost:  14, swc: 0 },
      { name: "Submachine Gun+D-Charges",                  cost:  12, swc: 0 },
      { name: "Chain-colt+Trench-Hammer",                  cost:  10, swc: 0 },
      { name: "Chest Mine+Crazykoala",                     cost:  12, swc: 0 },
    ]
    , skills: [84,49,240,40,28,65,85]
    , equips: [238,184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/kibervolk-patrol"
  },
  "ari_barsuk_territorial_defense_reg": {
    name: "Barsuk, Territorial Defense Reg.", type: "MI",
    mov: "10-5", cc: 15, bs: 11, ph: 11, wip: 12, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Flamethrower+Light Shotgun",          cost:  10, swc: 0 },
      { name: "AP Marksman Rifle",                         cost:  19, swc: 0 },
      { name: "Heavy Flamethrower+Light Shotgun",          cost:  12, swc: 0 },
      { name: "Heavy Flamethrower+Light Shotgun",          cost:  11, swc: 0 },
      { name: "Thunderbolt",                               cost:  12, swc: 0 },
    ]
    , skills: [162,201,161,29,215]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/barsuk-territorial-defense-reg"
  },
  "ari_kuryer_unit": {
    name: "Kuryer Unit", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 9, wip: 12, arm: 2, bts: 0, w: 0, str: 1, s: 4,
    profiles: [
      { name: "Katyusha MRL+Chest Mine",                   cost:  15, swc: 1 },
      { name: "Uragan MRL+Chest Mine",                     cost:  18, swc: 1 },
    ]
    , skills: [235,84,56,201,267,61]
    , equips: [91,239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/kuryer-unit"
  },
  "ari_zouaves_regiment_special_d_intervention": {
    name: "Zouaves", type: "LI",
    mov: "15-5", cc: 16, bs: 12, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Panzerfaust+Assault Pistol",                cost:  21, swc: 0 },
      { name: "Panzerfaust+E/M Mine",                      cost:  22, swc: 0 },
      { name: "Flash Pulse+Panzerfaust",                   cost:  22, swc: 0 },
      { name: "Panzerfaust+Assault Pistol",                cost:  23, swc: 0 },
      { name: "AP Spitfire+Assault Pistol",                cost:  30, swc: 1 },
      { name: "T2 Marksman Rifle+Shock Mine",              cost:  30, swc: 0.5 },
    ]
    , skills: [161,40,267,85,83,59,64,211,56,89]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/zouaves"
  },
  "ari_troupes_metropolitaines": {
    name: "Métros, Troupes Métropolitaines", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 11, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Chain-colt",                          cost:   8, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  18, swc: 1 },
      { name: "Rifle+Chain-colt",                          cost:  10, swc: 0.5 },
      { name: "Rifle+Chain Rifle",                         cost:  12, swc: 0 },
      { name: "Rifle+Chain-colt",                          cost:  13, swc: 0 },
      { name: "Rifle+Chain-colt",                          cost:  14, swc: 0.5 },
      { name: "Rifle+Chain-colt",                          cost:  10, swc: 0 },
      { name: "Rifle+Chain-colt Lt.L1",                    cost:   8, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [58,191,29,47,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/metros-troupes-metropolitaines"
  },
  "ari_pavel_aleksei_mcmannus_spetsgruppa_g": {
    name: "Pavel Aleksei McMannus, Spetsgruppa G", type: "SK",
    mov: "10-10", cc: 23, bs: 12, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Ohotnik+D-Charges",                         cost:  33, swc: 0, ocultable: true },
    ]
    , skills: [21,191,29,84,161,28,58,189,164,250,24,162]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/pavel-aleksei-mcmannus"
  },
  "ari_patchers_structural_response_team": {
    name: "Patchers, Structural Response Team", type: "HI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Akrylat-Kanone",             cost:  24, swc: 0 },
      { name: "Heavy Flamethrower+Adhesive Launcher Rifle", cost:  18, swc: 0 },
    ]
    , skills: [84,40,162,189,58,246,82]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/patchers-structural-response-team"
  },
  "ari_volkolak_assault_troopers": {
    name: "Volkolak Assault Troopers", type: "HI",
    mov: "15-5", cc: 22, bs: 12, ph: 14, wip: 12, arm: 4, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Chain-colt",              cost:  38, swc: 1 },
      { name: "Missile Launcher+Chain-colt",               cost:  35, swc: 1.5 },
      { name: "T2 Rifle+Chain-colt",                       cost:  31, swc: 0 },
      { name: "T2 Rifle+Chain-colt",                       cost:  33, swc: 0 },
    ]
    , skills: [84,39,162,86,74,240,40,201,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/volkolak-assault-troopers"
  },
  "ari_mekhaniks_flight_engineers_corps": {
    name: "Mekhaniks, Flight Engineers Corps", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+D-Charges",                           cost:  20, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  19, swc: 0 },
      { name: "Submachine Gun+D-Charges",                  cost:  17, swc: 0 },
    ]
    , skills: [49,58,201,56]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/mekhaniks-flight-engineers-corps"
  },
  "ari_the_scots_guards_6th_caledonian_infantry_regiment": {
    name: "The Scots Guards, 6th Caledonian Infantry Regiment", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 12, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+Flash Pulse",                   cost:  31, swc: 1.5 },
      { name: "Missile Launcher+Assault Pistol",           cost:  31, swc: 1.5 },
      { name: "Flash Pulse+T2 Marksman Rifle",             cost:  26, swc: 0 },
      { name: "AP Submachine Gun+Panzerfaust",             cost:  22, swc: 0 },
      { name: "Heavy Rocket Launcher+Flash Pulse",         cost:  32, swc: 1 },
      { name: "AP Submachine Gun+Panzerfaust",             cost:  32, swc: 0 },
      { name: "AP Submachine Gun+Panzerfaust",             cost:  23, swc: 0 },
      { name: "Heavy Rocket Launcher+Flash Pulse",         cost:  26, swc: 1.5 },
    ]
    , skills: [84,28,59,164,211,58,273,191,29,161,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/the-scots-guards"
  },
  "ari_strannik_outer_patrol": {
    name: "Strannik Outer Patrol", type: "MI",
    mov: "10-10", cc: 18, bs: 12, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Boarding Shotgun+Flash Pulse",           cost:  18, swc: 0 },
      { name: "Submachine Gun+Flash Pulse",                cost:  16, swc: 0 },
      { name: "Submachine Gun+Flash Pulse",                cost:  18, swc: 0 },
    ]
    , skills: [58,189,53]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/strannik-outer-patrol"
  },
  "ari_armata_4_proyekt_kosmosoldat": {
    name: "Armata-4 Proyekt \"Kosmosoldat\"", type: "HI",
    mov: "10-10", cc: 16, bs: 13, ph: 12, wip: 13, arm: 6, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Heavy Machine Gun+AP Heavy Pistol",      cost:  44, swc: 1.5 },
      { name: "T2 Rifle+Heavy Flamethrower",               cost:  36, swc: 0 },
      { name: "Portable Autocannon+Chain Rifle",           cost:  44, swc: 1.5 },
      { name: "Portable Autocannon+Chain Rifle Lt.L1",     cost:  44, swc: 1.5 },
      { name: "Portable Autocannon+Chain Rifle Lt.L1",     cost:  48, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,162,86,58,267,201,64,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/kosmosoldat"
  },

  // ─────────────────────────────────────────────────────────────────
  // Haqqislam y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "haqq_hassassin_ragiks": {
    name: "Hassassin Ragiks", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 12, wip: 15, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  23, swc: 0, ocultable: true },
      { name: "Spitfire+Boarding Pistol",                  cost:  29, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  25, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [162,33,35,164,85,83,74,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-ragiks"
  },
  "haqq_burkut_aerospace_engineering_regiment": {
    name: "Burkut, Aerospace Engineering Regiment", type: "HI",
    mov: "10-10", cc: 16, bs: 12, ph: 12, wip: 14, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Panzerfaust",              cost:  28, swc: 0 },
      { name: "Submachine Gun+Light Rocket Launcher",      cost:  30, swc: 0.5 },
      { name: "Submachine Gun+AP Mine",                    cost:  26, swc: 0 },
      { name: "Submachine Gun+Heavy Flamethrower",         cost:  28, swc: 0 },
    ]
    , skills: [49,162,28,86,58,83]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/burkut"
  },
  "haqq_hassassin_farzans": {
    name: "Hassassin Farzans", type: "SK",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 14, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  24, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Silenced Pistol",          cost:  21, swc: 0.5, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  22, swc: 0, ocultable: true },
    ]
    , ltSkills: ["coc"]
    , skills: [191,201,29,47,28,164,58,83,26,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-farzans"
  },
  "haqq_khawarijs": {
    name: "Khawarijs", type: "MI",
    mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  29, swc: 1 },
      { name: "AP Spitfire+Pulzar",                        cost:  35, swc: 1.5 },
      { name: "Rifle+Light Shotgun",                       cost:  33, swc: 0 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  30, swc: 0 },
      { name: "Mk12+Pulzar",                               cost:  38, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [40,39,83,201,162,262,58,74,240,26,53,211]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/khawarijs"
  },
  "haqq_sunduqbut_covert_heavy_support_unit": {
    name: "Sunduqbut, Covert Heavy-Support Unit", type: "HI",
    mov: "10-10", cc: 13, bs: 13, ph: 14, wip: 12, arm: 4, bts: 3, w: 0, str: 2, s: 2,
    profiles: [
      { name: "AP Spitfire+Light Shotgun",                 cost:  49, swc: 1.5, ocultable: true },
      { name: "Viral Rifle+Chain Rifle",                   cost:  43, swc: 0.5, ocultable: true },
      { name: "Feuerbach",                                 cost:  47, swc: 1.5, ocultable: true },
      { name: "Viral Rifle+Chain Rifle",                   cost:  42, swc: 0, ocultable: true },
      { name: "AP Spitfire+Light Shotgun",                 cost:  50, swc: 1.5, ocultable: true },
    ]
    , skills: [235,201,29,84,161,215,191,56,109]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/sunduqbut-covert-heavy-support-unit"
  },
  "haqq_yara_haddad_intel_ops_mutafawiq_officer": {
    name: "Yara Haddad, Intel Ops Mutafawiq Officer", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Marksman Rifle",                         cost:  24, swc: 0 },
      { name: "AP Marksman Rifle Lt.L1",                   cost:  24, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [162,83,119]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/yara-haddad"
  },
  "haqq_zamira_nazarova_kum_enforcer": {
    name: "Nazarova Twins, Kum Enforcers. Zamira Nazarova", type: "WB",
    mov: "20-15", cc: 22, bs: 12, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Light Shotgun+Smoke Grenades",              cost:  11, swc: 0 },
    ]
    , skills: [84,40,162,85,256,24,28,264]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/zamira-nazarova"
  },
  "haqq_hafza_unit": {
    name: "Hafza Unit", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 14, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  15, swc: 0, ocultable: true },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  16, swc: 1.5, ocultable: true },
      { name: "Spitfire",                                  cost:  22, swc: 1, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  20, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  17, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun Lt.L1",                 cost:  15, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun Lt.L1",                 cost:  19, swc: 0, ocultable: true },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHolomask: true
    , skills: [26,59,119]
    , equips: [24]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hafza-unit"
  },
  "haqq_zeybek_aero_unit": {
    name: "Zeybek Aero-unit", type: "t8",
    mov: "20-5", cc: -1, bs: 13, ph: 12, wip: 14, arm: 5, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "AP Spitfire+Smoke Grenade Launcher",        cost:  33, swc: 1.5 },
    ]
    , skills: [265,84,40,264,74,246,58,201,275,189,164]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/zeybek-aero-unit"
  },
  "haqq_janissaries": {
    name: "Janissaires", type: "HI",
    mov: "10-10", cc: 18, bs: 14, ph: 14, wip: 14, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Rifle+Light Shotgun",                    cost:  31, swc: 0 },
      { name: "Heavy Machine Gun+Pulzar",                  cost:  38, swc: 1.5 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  28, swc: 0 },
      { name: "AP Rifle+Light Shotgun",                    cost:  32, swc: 0 },
      { name: "Missile Launcher+Pulzar",                   cost:  36, swc: 1.5 },
      { name: "AP Rifle+Light Shotgun",                    cost:  35, swc: 0 },
      { name: "AP Rifle+Light Shotgun Lt.L1",              cost:  31, swc: 0 },
      { name: "AP Rifle+Light Shotgun Lt.L1",              cost:  32, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [40,83,201,53,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/janissaires"
  },
  "haqq_hassassin_muyibs": {
    name: "Hassassin Muyibs", type: "MI",
    mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Grenade Launcher",                    cost:  21, swc: 1 },
      { name: "Rifle+Light Shotgun",                       cost:  25, swc: 0 },
      { name: "Spitfire+D-Charges",                        cost:  32, swc: 1.5 },
      { name: "Heavy Rocket Launcher+D-Charges",           cost:  22, swc: 1.5 },
      { name: "Rifle+Light Shotgun",                       cost:  26, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  23, swc: 0 },
      { name: "Rifle+Grenade Launcher Lt.L1",              cost:  21, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [162,122,83,85,56,213,53,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-muyibs"
  },
  "haqq_hassassin_barid": {
    name: "Hassassin Barids", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Pitcher",                             cost:  16, swc: 0.5 },
      { name: "Rifle+Pitcher",                             cost:  14, swc: 0 },
      { name: "Rifle+Pitcher",                             cost:  12, swc: 0 },
      { name: "Rifle+Pitcher Lt.L1",                       cost:  16, swc: 1 },
      { name: "Rifle+Pitcher Lt.L1",                       cost:  12, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [58,83,1000,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-barids"
  },
  "haqq_ghazi_muttawi_ah": {
    name: "Muttawi'ah", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 12, wip: 15, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:   5, swc: 0 },
      { name: "Chain Rifle+E/Marat",                       cost:   5, swc: 0 },
      { name: "Chain Rifle+Jammer",                        cost:   6, swc: 0 },
      { name: "Boarding Shotgun+E/Marat",                  cost:   7, swc: 0 },
      { name: "Boarding Shotgun+Jammer",                   cost:   8, swc: 0 },
    ]
    , skills: [84,85,256,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/muttawi-ah"
  },
  "haqq_sekban_naval_special_unit": {
    name: "Sekban, Naval Special Unit", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Chain-colt",               cost:  19, swc: 0 },
      { name: "Chain-colt+Red Fury",                       cost:  27, swc: 1 },
      { name: "Heavy Rocket Launcher+Chain-colt",          cost:  19, swc: 1.5 },
      { name: "AP Rifle+Light Shotgun",                    cost:  24, swc: 0 },
      { name: "Boarding Shotgun+Chain-colt",               cost:  23, swc: 0 },
      { name: "AP Rifle+Light Shotgun Lt.L1",              cost:  24, swc: 0 },
      { name: "Spitfire+Chain-colt",                       cost:  28, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [58,211,189,53,119]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/sekban-naval-special-unit"
  },
  "haqq_zuleyka_nazarova_kum_enforcer": {
    name: "Nazarova Twins, Kum Enforcers. Zuleyka Nazarova", type: "WB",
    mov: "20-15", cc: 22, bs: 11, ph: 13, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Light Flamethrower+Smoke Grenades",         cost:  12, swc: 0 },
    ]
    , skills: [240,84,40,162,85,256,28,264]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/zuleyka-nazarova"
  },
  "haqq_husam_operative_leila_sharif": {
    name: "Husam Operative Leila Sharif", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Shock Marksman Rifle+E/M Mine",             cost:  22, swc: 0 },
    ]
    , isHacker: true
    , skills: [83,262,1000]
    , equips: [145]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/husam-operative-leila-sharif"
  },
  "haqq_hassassin_fiday": {
    name: "Hassassin Fiday", type: "SK",
    mov: "10-10", cc: 23, bs: 11, ph: 12, wip: 15, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  25, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  26, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:  23, swc: 0, ocultable: true },
    ]
    , isImpersonator: true
    , skills: [21,191,40,164,249,58,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-fiday"
  },
  "haqq_asawira_regiment": {
    name: "Asawira Regiment", type: "HI",
    mov: "15-5", cc: 23, bs: 14, ph: 14, wip: 14, arm: 4, bts: 9, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Rifle+Light Shotgun",                    cost:  33, swc: 0 },
      { name: "Viral Rifle+Light Shotgun",                 cost:  35, swc: 0 },
      { name: "Boarding Shotgun+Nanopulser",               cost:  32, swc: 0 },
      { name: "AP Spitfire+Nanopulser",                    cost:  38, swc: 1.5 },
      { name: "AP Rifle+Light Shotgun",                    cost:  37, swc: 0 },
      { name: "Boarding Shotgun+Nanopulser",               cost:  35, swc: 0 },
      { name: "AP Rifle+Light Shotgun Lt.L1",              cost:  33, swc: 0 },
      { name: "AP Spitfire+Nanopulser Lt.L1",              cost:  38, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,250,24,40,62,164,83,53,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/asawira-regiment"
  },
  "haqq_hassassin_bokhtar": {
    name: "Hassassin Bokhtar", type: "HI",
    mov: "15-5", cc: 20, bs: 13, ph: 13, wip: 14, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Red Fury",                                  cost:  46, swc: 1.5 },
      { name: "Viral Rifle+Light Shotgun",                 cost:  45, swc: 0 },
      { name: "Red Fury",                                  cost:  52, swc: 1.5 },
      { name: "Boarding Shotgun+D-Charges",                cost:  49, swc: 0 },
      { name: "Red Fury Lt.L1",                            cost:  46, swc: 1.5 },
      { name: "Viral Rifle+Light Shotgun Lt.L1",           cost:  45, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [40,28,83,74,213,64,33,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-bokhtar"
  },
  "haqq_zhayedan_intervention_troops": {
    name: "Zhayedan Intervention Troops", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Rifle+Light Shotgun",               cost:  22, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  31, swc: 1.5 },
      { name: "AP Sniper Rifle",                           cost:  27, swc: 0.5 },
      { name: "Missile Launcher",                          cost:  26, swc: 1.5 },
      { name: "Boarding Shotgun",                          cost:  27, swc: 0 },
      { name: "Breaker Rifle+Light Shotgun Lt.L1",         cost:  22, swc: 0 },
      { name: "Heavy Machine Gun Lt.L1",                   cost:  31, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,267,262,156,62,53,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/zhayedan"
  },
  "haqq_naffatun": {
    name: "Naffatûn", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Flamethrower",                  cost:  11, swc: 0 },
      { name: "Rifle+Heavy Flamethrower",                  cost:  11, swc: 0 },
      { name: "Rifle+Light Flamethrower Lt.L1",            cost:  11, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [58,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/naffatun"
  },
  "haqq_djanbazan_tactical_group": {
    name: "Djanbazan Tactical Group", type: "MI",
    mov: "10-10", cc: 14, bs: 12, ph: 11, wip: 14, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  22, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  31, swc: 1.5 },
      { name: "AP Sniper Rifle",                           cost:  27, swc: 0.5 },
      { name: "Rifle+Light Shotgun",                       cost:  27, swc: 0.5 },
      { name: "Rifle+Light Shotgun",                       cost:  26, swc: 0 },
      { name: "Rifle+Light Shotgun Lt.L1",                 cost:  22, swc: 1 },
      { name: "Shock Marksman Rifle",                      cost:  26, swc: 0 },
      { name: "Red Fury",                                  cost:  28, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [162,62,58,267,201,1000,53,119]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/djanbazan-tactical-group"
  },
  "haqq_murabids_tuareg": {
    name: "Murabids Tuareg", type: "SK",
    mov: "10-10", cc: 14, bs: 11, ph: 12, wip: 15, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  26, swc: 0, ocultable: true },
      { name: "Sniper Rifle+Shock Mine",                   cost:  27, swc: 0.5, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  33, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  28, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  32, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  29, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,47,28,164,58,1000,53,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/murabids-tuareg"
  },
  "haqq_korsan_corsairs_of_the_gate": {
    name: "Korsan, Corsairs of the Gate", type: "LI",
    mov: "15-5", cc: 21, bs: 11, ph: 13, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle",                               cost:  14, swc: 0 },
      { name: "Submachine Gun+Grenades",                   cost:  18, swc: 0 },
      { name: "Chain Rifle+Drop Bears",                    cost:  13, swc: 0 },
      { name: "Boarding Shotgun",                          cost:  16, swc: 0 },
      { name: "Chain Rifle+Contender",                     cost:  16, swc: 0 },
      { name: "Submachine Gun+Grenades",                   cost:  21, swc: 0 },
      { name: "Boarding Shotgun",                          cost:  21, swc: 0 },
    ]
    , skills: [240,84,40,39,58,82,201,161,33]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/korsan-corsairs-of-the-gate"
  },
  "haqq_daylami_infantry": {
    name: "Daylami Infantry", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Boarding Pistol",             cost:   5, swc: 0 },
      { name: "Rifle+Grenade Launcher",                    cost:  10, swc: 0.5 },
      { name: "Light Shotgun+Panzerfaust",                 cost:   6, swc: 0 },
      { name: "Marksman Rifle+Boarding Pistol",            cost:  10, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:   9, swc: 0 },
      { name: "Light Shotgun+Panzerfaust",                 cost:   8, swc: 0 },
    ]
    , skills: [58,29,47]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/daylami-infantry"
  },
  "haqq_haytham_aero_unit": {
    name: "Haytham Aero-unit", type: "t8",
    mov: "20-5", cc: -1, bs: 13, ph: 13, wip: 14, arm: 3, bts: 6, w: 0, str: 2, s: 7,
    profiles: [
      { name: "Red Fury+Panzerfaust",                      cost:  33, swc: 1.5 },
      { name: "Heavy Shotgun+Chain Rifle",                 cost:  29, swc: 0 },
    ]
    , skills: [265,84,40,28,264,74,58,201,275]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/haytham-aero-unit"
  },
  "haqq_special_deterrance_group_azra_il": {
    name: "Special Deterrance Group Azra'il", type: "HI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 14, arm: 5, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "AP Heavy Machine Gun+Chain Rifle",          cost:  37, swc: 1.5 },
      { name: "Feuerbach+Chain Rifle",                     cost:  41, swc: 1.5 },
    ]
    , skills: [201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/azra-il"
  },
  "haqq_mukhtar_active_response_unit": {
    name: "Mukhtar Active Response Unit", type: "MI",
    mov: "15-5", cc: 16, bs: 13, ph: 11, wip: 14, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Viral Rifle+Nanopulser",                    cost:  25, swc: 0 },
      { name: "Boarding Shotgun+Nanopulser",               cost:  26, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  25, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  29, swc: 0.5 },
      { name: "Red Fury+Nanopulser",                       cost:  34, swc: 1 },
    ]
    , isHacker: true
    , skills: [84,161,162,28,86,53,59,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/mukhtar-active-response-unit"
  },
  "haqq_medical_specialist_rahman_rouhani": {
    name: "Medical Specialist Rahman Rouhani", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 11, wip: 15, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Flash Pulse",                cost:  21, swc: 0 },
    ]
    , skills: [84,53,86]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/medical-specialist-rahman-rouhani"
  },
  "haqq_hassassin_nadhir": {
    name: "Hassassin Nadhir", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Marksman Rifle",                         cost:  26, swc: 0.5, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  23, swc: 0, ocultable: true },
      { name: "Submachine Gun+Flammenspeer",               cost:  20, swc: 0, ocultable: true },
      { name: "Submachine Gun+Thunderbolt",                cost:  26, swc: 0, ocultable: true },
      { name: "AP Marksman Rifle+Viral Mine",              cost:  29, swc: 0.5, ocultable: true },
    ]
    , skills: [201,191,161,238,28,83,58,59,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-nadhir"
  },
  "haqq_sayiq_sword_of_allah_tag_support_pilots": {
    name: "Sayiq, Sword of Allah TAG Support Pilots", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+D-Charges",                  cost:   9, swc: 0 },
      { name: "Light Shotgun",                             cost:  10, swc: 0 },
    ]
    , skills: [84,189,58,83,270,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/sayiq-sword-of-allah-tag-support-pilots"
  },
  "haqq_shakush_light_armored_unit": {
    name: "Shakush Light Armored Unit", type: "TAG",
    mov: "15-5", cc: 17, bs: 14, ph: 14, wip: 14, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Heavy Machine Gun+Heavy Flamethrower",      cost:  58, swc: 1.5 },
      { name: "AP Spitfire+Heavy Flamethrower",            cost:  56, swc: 1.5 },
    ]
    , skills: [201,84,40,213,254,189,28,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/shakush-light-armored-unit"
  },
  "haqq_saladin_o_12_liaison_officer": {
    name: "Saladin, O-12 Liaison Officer", type: "MI",
    mov: "10-10", cc: 18, bs: 13, ph: 12, wip: 16, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "E/Mitter+Light Shotgun",                    cost:  38, swc: 0 },
      { name: "E/Mitter+Light Shotgun Lt.L1",              cost:  39, swc: 0 },
    ]
    , ltSkills: ["coc", "s2", "lt2", "ci"]
    , skills: [84,162,86,242,207,52,26,119,70]
    , equips: [63,183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/saladin-o-12-liaison-officer"
  },
  "haqq_hassassin_lasiqs": {
    name: "Hassassin Lasiqs", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 14, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "VIRAL Sniper Rifle",                        cost:  25, swc: 1 },
      { name: "Viral Marksman Rifle",                      cost:  25, swc: 0.5 },
      { name: "Viral Rifle+Light Shotgun",                 cost:  22, swc: 0 },
    ]
    , skills: [156,162,28,82,83,201,59]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-lasiqs"
  },
  "haqq_hussein_al_djabel_hassassin_fiday": {
    name: "Hussein Al-Djabel", type: "SK",
    mov: "10-10", cc: 23, bs: 12, ph: 13, wip: 15, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  33, swc: 0, ocultable: true },
    ]
    , isImpersonator: true
    , skills: [22,201,191,164,249,58,83,82,40]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hussein-al-djabel"
  },
  "haqq_hassassin_husam_yasbir": {
    name: "Hassassin Husam Yasbir", type: "LI",
    mov: "10-10", cc: 22, bs: 12, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Viral Rifle+Light Shotgun",                 cost:  25, swc: 0, ocultable: true },
      { name: "Viral Rifle+Light Shotgun",                 cost:  29, swc: 0 },
    ]
    , skills: [20,162,189,164,83,201,191,33,215]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-husam-yasbir"
  },
  "haqq_hassassin_ayyar": {
    name: "Hassassin Áyyār", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 13, wip: 14, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Rifle+E/Mitter",                         cost:  40, swc: 0, ocultable: true },
      { name: "Thunderbolt+Zapper",                        cost:  39, swc: 0, ocultable: true },
      { name: "Breaker Rifle+Zapper",                      cost:  38, swc: 0, ocultable: true },
      { name: "AP Marksman Rifle+Zapper",                  cost:  39, swc: 0, ocultable: true },
    ]
    , skills: [191,242,238,189,164,83,201,161]
    , equips: [246,104]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-ayyar"
  },
  "haqq_hassassin_govads": {
    name: "Hassassin Govads", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  28, swc: 1.5 },
      { name: "AP Sniper Rifle",                           cost:  26, swc: 0.5 },
      { name: "Missile Launcher",                          cost:  26, swc: 1.5 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  25, swc: 0.5 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  23, swc: 0 },
      { name: "AP Rifle+Light Shotgun",                    cost:  25, swc: 0 },
    ]
    , isHacker: true
    , skills: [267,83,262,201,1000,49]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-govads"
  },
  "haqq_hassassin_shujae": {
    name: "Hassassin Shujae", type: "SK",
    mov: "10-10", cc: 17, bs: 13, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Rifle+Light Shotgun",                    cost:  29, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  27, swc: 0, ocultable: true },
      { name: "Submachine Gun+Flammenspeer",               cost:  27, swc: 0, ocultable: true },
      { name: "Viral Rifle+Light Shotgun",                 cost:  30, swc: 0, ocultable: true },
    ]
    , skills: [161,28,189,164,83,58,191,238,56]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hassassin-shujae"
  },
  "haqq_hakims_special_medical_assistance_team": {
    name: "HAKIMS, Special Medical Assistance Team", type: "MI",
    mov: "10-10", cc: 14, bs: 12, ph: 11, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  25, swc: 0, ocultable: true },
      { name: "Submachine Gun+E/Mitter",                   cost:  24, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  29, swc: 0, ocultable: true },
      { name: "Submachine Gun+Boarding Pistol",            cost:  25, swc: 0, ocultable: true },
    ]
    , skills: [53,33,62,58,162,243,84,28]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hakims"
  },
  "haqq_tarik_mansuri_khawarij_amir": {
    name: "Tarik Mansuri, Khawarij Amir", type: "MI",
    mov: "15-10", cc: 23, bs: 13, ph: 14, wip: 15, arm: 3, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "AP Spitfire+Pulzar",                        cost:  49, swc: 1.5 },
      { name: "AP Rifle+Light Shotgun",                    cost:  46, swc: 0 },
      { name: "AP Rifle+Light Shotgun Lt.L1",              cost:  47, swc: 1 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  53, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [240,201,40,267,39,162,262,164,83,58,74,213,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/tarik-mansuri-khawarij-amir"
  },
  "haqq_nahab_aeromobile_team": {
    name: "Nahab Aeromobile Team", type: "LI",
    mov: "10-10", cc: 23, bs: 12, ph: 13, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Red Fury+Zapper",                           cost:  39, swc: 1 },
      { name: "Boarding Shotgun+D-Charges",                cost:  32, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  36, swc: 0 },
      { name: "Red Fury+Zapper",                           cost:  38, swc: 1 },
      { name: "Boarding Shotgun+D-Charges",                cost:  31, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  35, swc: 0 },
    ]
    , isHacker: true
    , skills: [21,24,84,40,162,215,164,86,58,201,250,263,47,189,1000,33]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/nahab-aeromobile-team"
  },
  "haqq_hortlak_janissaries": {
    name: "Hortlak Janissaries", type: "HI",
    mov: "10-10", cc: 15, bs: 13, ph: 12, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+E/Mitter",                cost:  27, swc: 0 },
      { name: "K1 Marksman Rifle+Pulzar",                  cost:  31, swc: 0.5 },
      { name: "AP Sniper Rifle+Pulzar",                    cost:  31, swc: 0.5 },
      { name: "AP Submachine Gun+Blitzen",                 cost:  29, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  28, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [201,162,28,164,83,86,262,26]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hortlak-janissaries"
  },
  "haqq_namurr_experimental_operative_group": {
    name: "Namurr Experimental Operative Group", type: "MI",
    mov: "15-5", cc: 21, bs: 13, ph: 12, wip: 14, arm: 2, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Spitfire+E/Marat",                          cost:  44, swc: 1 },
      { name: "Breaker Rifle+Light Shotgun",               cost:  41, swc: 0 },
    ]
    , skills: [240,84,40,189,58,82,162,201,213]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/namurr"
  },

  // ─────────────────────────────────────────────────────────────────
  // Nomads y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "nom_zeros": {
    name: "Zeros", type: "SK",
    mov: "10-10", cc: 15, bs: 11, ph: 12, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Shock Mine",                    cost:  19, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle+Shock Mine",             cost:  21, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  17, swc: 0, ocultable: true },
      { name: "Combi Rifle+E/M Mine",                      cost:  20, swc: 0, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  24, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  22, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  18, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  20, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,47,28,164,58,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/zeros"
  },
  "nom_tunguska_interventors": {
    name: "Tunguska Interventors", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 15, arm: 1, bts: 9, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  21, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  23, swc: 0.5 },
      { name: "Boarding Shotgun",                          cost:  18, swc: 0.5 },
      { name: "Boarding Shotgun",                          cost:  20, swc: 0.5 },
      { name: "Combi Rifle Lt.L1",                         cost:  21, swc: 0.5 },
      { name: "Combi Rifle Lt.L1",                         cost:  23, swc: 0.5 },
      { name: "Boarding Shotgun",                          cost:  18, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/tunguska-interventors"
  },
  "nom_securitate": {
    name: "Securitate", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  13, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  21, swc: 1 },
      { name: "Feuerbach",                                 cost:  22, swc: 1 },
      { name: "Boarding Shotgun",                          cost:  13, swc: 0 },
      { name: "Combi Rifle",                               cost:  18, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  15, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  13, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [267,1000,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/securitate"
  },
  "nom_sin_eater_observants": {
    name: "Sin-Eater Observants ", type: "MI",
    mov: "10-10", cc: 14, bs: 13, ph: 11, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  28, swc: 1.5 },
      { name: "MULTI Sniper Rifle",                        cost:  26, swc: 1.5 },
      { name: "Mk12",                                      cost:  25, swc: 0 },
    ]
    , skills: [28,109,83,162]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/sin-eater-observants"
  },
  "nom_tag_treiber_nmf_tag_squadrons_support_pilots": {
    name: "TAG-Treiber, NMF TAG Squadrons Support Pilots", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Assault Pistol",                cost:  12, swc: 0 },
      { name: "Light Shotgun+Cybermine",                   cost:  10, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  11, swc: 0 },
    ]
    , isHacker: true
    , skills: [189,270,58,1000,240]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/tag-treiber-nmf-tag-squadrons-support-pilots"
  },
  "nom_switchers_gruppa": {
    name: "Switchers Gruppa", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 13, arm: 1, bts: 0, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Combi Rifle+E/Mitter",                      cost:  25, swc: 0 },
      { name: "Thunderbolt+E/M Carbine",                   cost:  27, swc: 0 },
      { name: "AP Submachine Gun+Flash Pulse",             cost:  20, swc: 0 },
      { name: "AP Submachine Gun+Flash Pulse",             cost:  21, swc: 0 },
    ]
    , skills: [84,246,85,213,20,24,40,162,201,59]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/switchers-gruppa"
  },
  "nom_kulak_payback_unit": {
    name: "Kulak Payback Unit", type: "MI",
    mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Pulzar",              cost:  20, swc: 1 },
      { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 0.5 },
      { name: "AP Submachine Gun+D-Charges",               cost:  20, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  19, swc: 0 },
      { name: "Combi Rifle+Pulzar",                        cost:  21, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , isHacker: true
    , skills: [201,162,28,58,83,26,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/kulak-payback-unit"
  },
  "nom_shifta_insertion_group": {
    name: "Shifta Insertion Group", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+E/Marat",                     cost:  21, swc: 0 },
      { name: "Submachine Gun+E/Marat",                    cost:  17, swc: 0 },
      { name: "Thunderbolt+E/M Mine",                      cost:  22, swc: 0 },
      { name: "Thunderbolt",                               cost:  21, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [242,251,40,189,65,164,58,26,56,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/shifta-insertion-group"
  },
  "nom_territorials_territorial_domination_unit": {
    name: "Territorials, Territorial Domination Unit", type: "MI",
    mov: "10-10", cc: 14, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+E/Mitter",                cost:  28, swc: 0 },
      { name: "Boarding Shotgun+Panzerfaust",              cost:  26, swc: 0 },
      { name: "AP Red Fury+D-Charges",                     cost:  32, swc: 1.5 },
      { name: "AP Marksman Rifle+AP Heavy Pistol",         cost:  29, swc: 0 },
      { name: "AP Red Fury+D-Charges Lt.L1",               cost:  32, swc: 1.5 },
      { name: "AP Submachine Gun+E/Mitter Lt.L1",          cost:  28, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [162,262,213,156,58,49,189,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/territorials-territorial-domination-unit"
  },
  "nom_mary_problems_tactical_uberhacker": {
    name: "Mary Problems, Tactical ÜberHacker", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 14, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Zapper",                     cost:  27, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [161,40,28,82,1000]
    , equips: [100,145]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/mary-problems-tactical-ueberhacker"
  },
  "nom_hecklers": {
    name: "Hecklers", type: "SK",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+E/Marat",                  cost:  20, swc: 0, ocultable: true },
      { name: "Red Fury",                                  cost:  24, swc: 1, ocultable: true },
      { name: "Combi Rifle+Cybermine",                     cost:  23, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,161,28,164,58,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/hecklers"
  },
  "nom_casino_security_rounders": {
    name: "Casino Security Rounders", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  17, swc: 0 },
      { name: "MULTI Marksman Rifle+Boarding Pistol",      cost:  24, swc: 0.5 },
      { name: "Red Fury+Boarding Pistol",                  cost:  26, swc: 1 },
      { name: "Submachine Gun+Boarding Pistol",            cost:  21, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [156,211,58,1000]
    , equips: [184,114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/casino-security-rounders"
  },
  "nom_zondnautica_rapid_offensive_unit": {
    name: "Zondnautica Rapid Offensive Unit", type: "MI",
    mov: "20-10", cc: 15, bs: 12, ph: 12, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "ZONDNAUTICA-A",                             cost:  25, swc: 1.5 },
      { name: "ZONDNAUTICA-B",                             cost:  17, swc: 0 },
      { name: "ZONDNAUTICA-C",                             cost:  23, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [84,28,256,268,246,1000,243]
    , equips: [205]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/zondnautica-rapid-offensive-unit"
  },
  "nom_kriza_boracs_special_crisis_unit": {
    name: "Kriza Boracs, Special Crisis Unit", type: "HI",
    mov: "10-10", cc: 19, bs: 13, ph: 13, wip: 13, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  45, swc: 1.5 },
      { name: "Mk12+Submachine Gun",                       cost:  48, swc: 0 },
      { name: "Heavy Machine Gun Lt.L1",                   cost:  45, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,84,58,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/kriza-boracs-special-crisis-unit"
  },
  "nom_taskmasters_bakunin_swast_team": {
    name: "Taskmasters, Bakunin SWAST Team", type: "HI",
    mov: "10-10", cc: 22, bs: 13, ph: 13, wip: 13, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Heavy Machine Gun+Shock Mine",              cost:  40, swc: 1.5 },
      { name: "Red Fury+Pulzar",                           cost:  39, swc: 1 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  34, swc: 1.5 },
      { name: "Red Fury+Pulzar",                           cost:  44, swc: 1 },
      { name: "Red Fury+Pulzar Lt.L1",                     cost:  39, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [19,84,40,56,164,261,251,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/taskmasters"
  },
  "nom_tunguska_triggermen": {
    name: "Tunguska Triggermen", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 12, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 4,
    profiles: [
      { name: "MULTI Sniper Rifle+E/Marat",                cost:  44, swc: 1.5 },
      { name: "K1 Combi Rifle+E/Marat",                    cost:  43, swc: 0 },
      { name: "MULTI Sniper Rifle+E/Marat",                cost:  47, swc: 1.5 },
    ]
    , skills: [28,164,240,201,62,191,161,215,109]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/tunguska-triggermen"
  },
  "nom_grenzers_grenz_security_team": {
    name: "Grenzers, Grenz Security Team", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Missile Launcher",                          cost:  28, swc: 1.5 },
      { name: "Red Fury",                                  cost:  28, swc: 1 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  29, swc: 0 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  28, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  32, swc: 1.5 },
      { name: "Combi Rifle+Light Flamethrower Lt.L1",      cost:  28, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,162,267,59,65,211,131,156,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/grenzers-grenz-security-team"
  },
  "nom_bakunin_uberfallkommando": {
    name: "Bakunin Überfallkommando", type: "WB",
    mov: "15-10", cc: 24, bs: 11, ph: 13, wip: 12, arm: 1, bts: 0, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  19, swc: 0 },
    ]
    , skills: [240,40,39,82,256,162,264,243,84]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/bakunin-ueberfallkommando"
  },
  "nom_die_morlock_gruppe": {
    name: "Die Morlock Gruppe", type: "WB",
    mov: "10-10", cc: 23, bs: 11, ph: 13, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:   6, swc: 0 },
      { name: "Boarding Shotgun+Kobra Pistol",             cost:   9, swc: 0 },
      { name: "Combi Rifle+Smoke Grenade Launcher",        cost:  12, swc: 0 },
    ]
    , skills: [20,84,40,55,256,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/die-morlock-gruppe"
  },
  "nom_meteor_zonds": {
    name: "Meteor Zonds", type: "REM",
    mov: "15-10", cc: 14, bs: 11, ph: 12, wip: 13, arm: 0, bts: 6, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Light Shotgun+E/M Carbine",                 cost:  21, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  19, swc: 0, ocultable: true },
    ]
    , skills: [235,242,84,59,33,65,35,74]
    , equips: [241,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/meteor-zonds"
  },
  "nom_evaders_eva_tactical_group": {
    name: "Evaders, EVA Tactical Group", type: "HI",
    mov: "10-10", cc: 15, bs: 13, ph: 12, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+D-Charges",                     cost:  31, swc: 1 },
      { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 0 },
      { name: "Feuerbach+D-Charges",                       cost:  32, swc: 1.5 },
      { name: "MULTI Rifle+Panzerfaust",                   cost:  29, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  24, swc: 0 },
      { name: "AP Spitfire+D-Charges",                     cost:  35, swc: 1.5 },
    ]
    , skills: [84,162,86,58,82,189,49]
    , equips: [183,238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/evaders-eva-tactical-group"
  },
  "nom_gator_squadron": {
    name: "'Gator' Squadron", type: "TAG",
    mov: "15-10", cc: 21, bs: 14, ph: 15, wip: 13, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Chain Rifle",       cost:  73, swc: 1.5 },
    ]
    , skills: [240,40,213,254,201,211,84,28,189,243]
    , equips: [239,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/gator-squadron"
  },
  "nom_coyotes_recon_and_maneuver_team": {
    name: "Coyotes, Recon and Maneuver Team", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Flash Pulse",              cost:  27, swc: 0 },
      { name: "MULTI Marksman Rifle+D-Charges",            cost:  33, swc: 0 },
      { name: "Submachine Gun+Flash Pulse",                cost:  28, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  19, swc: 0 },
      { name: "MULTI Marksman Rifle+D-Charges",            cost:  26, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  23, swc: 0 },
      { name: "AP Marksman Rifle+Chain Rifle",             cost:  16, swc: 0 },
      { name: "Thunderbolt+Chain Rifle",                   cost:  13, swc: 0 },
    ]
    , isHacker: true
    , skills: [201,40,267,59,58,161,1000,84,28,243,235]
    , equips: [114,113,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/coyotes"
  },
  "nom_moderators_from_bakunin": {
    name: "Moderators from Bakunin", type: "LI",
    mov: "10-10", cc: 18, bs: 10, ph: 10, wip: 13, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:   9, swc: 0 },
      { name: "Spitfire",                                  cost:  15, swc: 0.5 },
      { name: "Combi Rifle+Pitcher",                       cost:  10, swc: 0 },
      { name: "Combi Rifle",                               cost:  14, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  11, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:   9, swc: 0 },
      { name: "Boarding Shotgun+E/M Carbine",              cost:   9, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [162,1000,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/moderators-from-bakunin"
  },
  "nom_moran_maasai_hunter": {
    name: "Moran, Maasai Hunter", type: "SK",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0.5 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  16, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  17, swc: 0.5 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  15, swc: 0.5 },
    ]
    , skills: [84,47,28,56,59,164,58,191,29]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/moran-maasai-hunter"
  },
  "nom_zoe_pi_well": {
    name: "Zoe & Π-Well, Special Clockmakers Team", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 10, wip: 15, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "ZOE FTO & Π-WELL FTO",                      cost:  45, swc: 0.5 },
      { name: "ZOE FTO-2 & Π-WELL FTO",                    cost:  42, swc: 0.5 },
      { name: "Combi Rifle+D-Charges",                     cost:  26, swc: 0.5 },
      { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 0.5 },
      { name: "Combi Rifle+D-Charges",                     cost:  36, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [49,162,1000,235,242,84,28,59,65,243,201]
    , equips: [238,100,237,63,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/zoe-and-p-well"
  },
  "nom_szalamandra_squadron": {
    name: "Szalamandra Squad", type: "TAG",
    mov: "15-10", cc: 17, bs: 14, ph: 16, wip: 13, arm: 8, bts: 9, w: 0, str: 3, s: 7,
    profiles: [
      { name: "Hyper-Rapid Magnetic Cannon+Heavy Flamethrower", cost:  68, swc: 2 },
    ]
    , skills: [201,40,254,211,84,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/szalamandra-squad"
  },
  "nom_gecko_squadron": {
    name: "'Gecko' Squad", type: "TAG",
    mov: "15-5", cc: 15, bs: 13, ph: 14, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "MULTI Marksman Rifle+Chain Rifle",          cost:  54, swc: 1 },
      { name: "Mk12+Chain Rifle",                          cost:  55, swc: 1 },
      { name: "Vulkan Shotgun+Chain Rifle",                cost:  49, swc: 0 },
    ]
    , skills: [201,40,254,213,58,84,28,189,243]
    , equips: [239,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/gecko-squad"
  },
  "nom_bearcats_airborne_heavy_regiment": {
    name: "Bearcats, Airborne Heavy Regiment", type: "HI",
    mov: "15-5", cc: 15, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  30, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Adhesive Launcher Rifle", cost:  29, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+D-Charges",               cost:  28, swc: 0, ocultable: true },
      { name: "Spitfire+D-Charges",                        cost:  35, swc: 1.5, ocultable: true },
      { name: "AP Submachine Gun+Boarding Pistol",         cost:  27, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [267,162,33,35,86,74,1000,49,189,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/bearcats-airborne-heavy-regiment"
  },
  "nom_puppet_masters": {
    name: "PUPPET MASTERS", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Shock Mine",                 cost:  11, swc: 0 },
      { name: "Submachine Gun+Shock Mine",                 cost:  13, swc: 0 },
      { name: "Submachine Gun+Shock Mine",                 cost:  16, swc: 0.5 },
    ]
    , ltSkills: ["ci"]
    , isHacker: true
    , skills: [207,56,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/puppetactica-company"
  },
  "nom_puppetbots_full_power": {
    name: "PUPPETBOTS FULL POWER", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 0, str: 2, s: 1,
    profiles: [
      { name: "Red Fury",                                  cost:  16, swc: 1.5 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:   9, swc: 0 },
      { name: "AP Marksman Rifle",                         cost:  14, swc: 0 },
    ]
    , skills: [201,84,40,243,246,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/puppetactica-company"
  },
  "nom_spektrs": {
    name: "Spektrs", type: "SK",
    mov: "10-10", cc: 13, bs: 12, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+Shock Mine",             cost:  32, swc: 1.5, ocultable: true },
      { name: "Submachine Gun+E/M Mine",                   cost:  28, swc: 0, ocultable: true },
      { name: "Combi Rifle+D-Charges",                     cost:  35, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  29, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  32, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+D-Charges",                     cost:  33, swc: 1, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,47,28,164,58,1000,59,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/spektrs"
  },
  "nom_jazz_billie_tactical_hacking_team": {
    name: "Jazz&Billie, Tactical Hacking Team", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 10, wip: 14, arm: 0, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "JAZZ Hacker & BILLIE",                      cost:  25, swc: 0.5 },
      { name: "JAZZ FTO",                                  cost:  22, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [1000,122,235,84]
    , equips: [101,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/jazz-and-billie-tactical-hacking-team"
  },
  "nom_redsky_crew_marspiders": {
    name: "Redsky Crew Marspiders", type: "LI",
    mov: "15-5", cc: 23, bs: 11, ph: 13, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Flamethrower+Flash Pulse",            cost:  18, swc: 0 },
      { name: "Heavy Flamethrower+Flash Pulse",            cost:  22, swc: 0 },
      { name: "Heavy Flamethrower+Flash Pulse",            cost:  19, swc: 0 },
    ]
    , skills: [19,240,84,40,58,82,164,49,64]
    , equips: [113,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/redsky-crew-marspiders"
  },
  "nom_go_pod": {
    name: "Go-Pod", type: "t8",
    mov: "20-5", cc: -1, bs: 13, ph: 13, wip: 13, arm: 2, bts: 6, w: 0, str: 2, s: 7,
    profiles: [
      { name: "MULTI Rifle+E/Mitter",                      cost:  33, swc: 0 },
      { name: "Heavy Rocket Launcher+AP Submachine Gun",   cost:  32, swc: 1.5 },
    ]
    , skills: [201,265,84,40,28,264,74,58,275,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/go-pod"
  },
  "nom_vostok_sputniks": {
    name: "Vostok Sputniks ", type: "REM",
    mov: "15-10", cc: 14, bs: 12, ph: 10, wip: 13, arm: 3, bts: 6, w: 0, str: 2, s: 4,
    profiles: [
      { name: "Mk12+Light Shotgun",                        cost:  38, swc: 0 },
      { name: "Mk12+Light Shotgun",                        cost:  35, swc: 0 },
      { name: "Spitfire",                                  cost:  37, swc: 1 },
      { name: "Spitfire",                                  cost:  34, swc: 1 },
    ]
    , skills: [235,84,162,82,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/vostok-sputniks"
  },
  "nom_perseus_rogue_myrmidon": {
    name: "Perseus, Rogue Myrmidon", type: "WB",
    mov: "10-10", cc: 23, bs: 13, ph: 13, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  34, swc: 0 },
      { name: "Breaker Combi Rifle+Nanopulser",            cost:  33, swc: 0 },
    ]
    , skills: [250,21,84,40,28,164,86,201,74]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/perseus-rogue-myrmidon"
  },
  "nom_intruders_corregidor_assault_commandos": {
    name: "Intruders", type: "MI",
    mov: "10-10", cc: 14, bs: 13, ph: 12, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  38, swc: 1.5, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  33, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle",                        cost:  38, swc: 1.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,28,164,58,1000,47]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/intruders"
  },
  "nom_vigilantes_tactical_support_and_surveillance_special_group": {
    name: "Vigilantes, Tactical Support and Surveillance Special Group", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+Flash Pulse",             cost:  25, swc: 0.5, ocultable: true },
      { name: "MULTI Rifle+Light Flamethrower",            cost:  28, swc: 0, ocultable: true },
      { name: "MULTI Rifle+Light Flamethrower",            cost:  28, swc: 0.5, ocultable: true },
      { name: "MULTI Rifle+Light Flamethrower",            cost:  29, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  26, swc: 0, ocultable: true },
    ]
    , ltSkills: ["ci"]
    , isHacker: true
    , skills: [191,29,207,161,162,28,164,58,65,1000,56,189,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/vigilantes"
  },
  "nom_the_diablos_of_d_block": {
    name: "The Diablos of D-Block", type: "HI",
    mov: "15-5", cc: 23, bs: 11, ph: 13, wip: 12, arm: 2, bts: 0, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Light Shotgun+Grenades",                    cost:   8, swc: 0 },
      { name: "Submachine Gun+Grenades",                   cost:   9, swc: 0 },
      { name: "Submachine Gun+Flammenspeer",               cost:   9, swc: 0 },
    ]
    , skills: [240,24,40,39,264,246,256,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/the-diablos-of-d-block"
  },
  "nom_tomcats_emergency_and_rescue_special_team": {
    name: "Tomcats", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Flamethrower",            cost:  19, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Light Flamethrower",            cost:  22, swc: 0, ocultable: true },
      { name: "MULTI Rifle+Light Shotgun",                 cost:  25, swc: 0, ocultable: true },
      { name: "Combi Rifle+Light Flamethrower",            cost:  26, swc: 0, ocultable: true },
      { name: "Submachine Gun+Panzerfaust",                cost:  17, swc: 0, ocultable: true },
    ]
    , skills: [33,58,82,49,53,64,84,28,243]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/tomcats"
  },
  "nom_lobos_correctional_response_group": {
    name: "Lobos,  Correctional Response Group", type: "MI",
    mov: "10-10", cc: 19, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Disco Baller",             cost:  20, swc: 0 },
      { name: "Boarding Shotgun+Adhesive Launcher Rifle",  cost:  22, swc: 0 },
      { name: "Breaker Combi Rifle+Heavy Riotstopper",     cost:  22, swc: 0 },
      { name: "Breaker Combi Rifle+Light Flamethrower",    cost:  24, swc: 0 },
      { name: "Red Fury+Disco Baller",                     cost:  28, swc: 1 },
    ]
    , skills: [201,24,267,261,39,40,83,189,211]
    , equips: [184,238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/lobos-correctional-response-group"
  },
  "nom_wildcats_polyvalent_tactical_unit": {
    name: "Wildcats, Polyvalent Tactical Unit", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Flamethrower",            cost:  21, swc: 0 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  21, swc: 1.5 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  27, swc: 0.5 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  26, swc: 0 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  25, swc: 0 },
      { name: "Spitfire",                                  cost:  28, swc: 1.5 },
      { name: "Combi Rifle+Light Flamethrower Lt.L1",      cost:  25, swc: 0 },
      { name: "Boarding Shotgun+Flammenspeer",             cost:  22, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,122,58,162,262,1000,49,211,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/wildcats"
  },
  "nom_sombras_forward_interdiction_team": {
    name: "Sombras, Forward Interdiction Team", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Red Fury+Boarding Pistol",                  cost:  36, swc: 1, ocultable: true },
      { name: "MULTI Rifle+Light Shotgun",                 cost:  40, swc: 0.5, ocultable: true },
      { name: "AP Submachine Gun+D-Charges",               cost:  33, swc: 0, ocultable: true },
      { name: "MULTI Rifle+Light Shotgun",                 cost:  36, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Flash Pulse",             cost:  29, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,161,162,28,86,164,82,58,1000,189,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/sombras-forward-interdiction-team"
  },
  "nom_alguacil_vortex_lupe_balboa": {
    name: "Alguacil Vortex Lupe Balboa", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+E/Mitter",                cost:  23, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  19, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [162,28,26,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/alguacil-vortex-lupe-balboa"
  },
  "nom_carlota_kowalsky_tomcats_sergeant": {
    name: "Carlota Kowalsky, Tomcats Sergeant", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 14, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Light Flamethrower",    cost:  28, swc: 0, ocultable: true },
      { name: "Breaker Combi Rifle+Light Flamethrower",    cost:  32, swc: 0, ocultable: true },
    ]
    , skills: [49,33,58,82,84,28,243,38]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/carlota-kowalsky-tomcats-sergeant"
  },
  "nom_bran_do_castro_triple_zero": {
    name: "Bran do Castro, Triple Zero", type: "SK",
    mov: "15-5", cc: 22, bs: 11, ph: 13, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  27, swc: 0, ocultable: true },
      { name: "Submachine Gun+E/M Grenades",               cost:  27, swc: 0, ocultable: true },
    ]
    , skills: [20,191,84,162,28,189,164,74,58,29,24,47]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/bran-do-castro-triple-zero"
  },
  "nom_reverend_moiras": {
    name: "Reverend Moiras", type: "MI",
    mov: "10-10", cc: 19, bs: 12, ph: 12, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Zapper",                  cost:  33, swc: 1.5 },
      { name: "MULTI Sniper Rifle+Zapper",                 cost:  31, swc: 1.5 },
      { name: "MULTI Rifle+E/M Grenade Launcher",          cost:  29, swc: 1 },
      { name: "MULTI Rifle+Zapper Lt.L1",                  cost:  26, swc: 0 },
      { name: "MULTI Rifle+Zapper",                        cost:  28, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [28,122,164,211,83,162,67,119,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/reverend-moiras"
  },
  "nom_mother_healer_agatha_wabara": {
    name: "Mother Healer Agatha Wabara", type: "MI",
    mov: "15-5", cc: 23, bs: 13, ph: 12, wip: 14, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Pulzar",                cost:  31, swc: 0 },
      { name: "Vulkan Shotgun+Pulzar",                     cost:  31, swc: 0 },
    ]
    , skills: [250,20,162,28,164,83,40,53,24]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/mother-healer-agatha-wabara"
  },
  "nom_prowlers": {
    name: "Prowlers", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 14, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Adhesive Launcher Rifle",       cost:  34, swc: 0, ocultable: true },
      { name: "Spitfire+Nanopulser",                       cost:  36, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+Nanopulser",               cost:  30, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,47,28,189,164,58,162,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/prowlers"
  },
  "nom_initiated_observants": {
    name: "Initiated Observants", type: "MI",
    mov: "10-10", cc: 18, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  19, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  22, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  18, swc: 0 },
      { name: "Submachine Gun",                            cost:  18, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,164,83,33,1000,191,29,47,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/bakunin/initiated-observants"
  },
  "nom_orphans_of_the_observance": {
    name: "Orphans of the Observance", type: "MI",
    mov: "10-10", cc: 18, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Boarding Pistol",            cost:  13, swc: 0 },
      { name: "Submachine Gun+D-Charges",                  cost:  17, swc: 0 },
      { name: "Submachine Gun+E/M Mine",                   cost:  21, swc: 0 },
      { name: "MULTI Marksman Rifle+Boarding Pistol",      cost:  25, swc: 0 },
    ]
    , skills: [28,164,83,49]
    , armyUrl: "https://infinityuniverse.com/army/infinity/bakunin/orphans-of-the-observance"
  },
  "nom_reverend_custodiers": {
    name: "Reverend Custodiers", type: "MI",
    mov: "10-10", cc: 14, bs: 12, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Pitcher",                       cost:  26, swc: 0.5 },
      { name: "Boarding Shotgun",                          cost:  24, swc: 0.5 },
      { name: "Combi Rifle+Pitcher",                       cost:  28, swc: 0.5 },
      { name: "Combi Rifle+Pitcher Lt.L1",                 cost:  28, swc: 0.5 },
      { name: "Combi Rifle+Pitcher",                       cost:  24, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [164,28,83,162,1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/reverend-custodiers"
  },
  "nom_daemonist_observant": {
    name: "Daemonist Observant", type: "HI",
    mov: "10-10", cc: 22, bs: 11, ph: 13, wip: 14, arm: 3, bts: 3, w: 2, str: 0, s: 4,
    profiles: [
      { name: "Vulkan Shotgun+Boarding Pistol",            cost:  32, swc: 0 },
      { name: "Vulkan Shotgun+Boarding Pistol Lt.L1",      cost:  36, swc: 0 },
    ]
    , ltSkills: ["lt2", "ci"]
    , skills: [19,207,247,215,83,119]
    , equips: [241,184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/daemonist-observant"
  },
  "nom_reverend_cenobites": {
    name: "Reverend Cenobites", type: "HI",
    mov: "15-5", cc: 22, bs: 12, ph: 12, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Flash Pulse",                   cost:  20, swc: 0 },
      { name: "Light Shotgun",                             cost:  20, swc: 0 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  26, swc: 1.5 },
    ]
    , skills: [250,21,28,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/bakunin/reverend-cenobites"
  },
  "nom_reverend_healers": {
    name: "Reverend Healers", type: "MI",
    mov: "10-10", cc: 22, bs: 12, ph: 12, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  31, swc: 0 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  29, swc: 0 },
    ]
    , skills: [53,28,164,83,162]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/reverend-healers"
  },
  "nom_stigmata_of_the_observance": {
    name: "Stigmata of the Observance", type: "TAG",
    mov: "15-10", cc: 20, bs: 13, ph: 14, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Heavy Flamethrower+Heavy Rocket Launcher",  cost:  56, swc: 1.5 },
    ]
    , isHacker: true
    , skills: [201,40,254,213,83,235,1000]
    , equips: [100,239,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/stigmata-of-the-observance"
  },
  "nom_robin_hook_outlaw_ai": {
    name: "Robin Hook, outlaw AI", type: "HI",
    mov: "15-5", cc: 13, bs: 11, ph: 11, wip: 13, arm: 1, bts: 3, w: 0, str: 2, s: 2,
    profiles: [
      { name: "E/Mitter+Light Shotgun",                    cost:  20, swc: 0 },
    ]
    , skills: [235,25,84,161,164,82,162,246,74]
    , equips: [241,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/military-orders/robin-hook-outlaw-ai"
  },
  "nom_lizard_squadron": {
    name: "Lizard Squadron", type: "TAG",
    mov: "15-10", cc: 17, bs: 14, ph: 17, wip: 13, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Grenade Launcher",  cost:  65, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  64, swc: 1.5 },
      { name: "AP Spitfire+Grenade Launcher",              cost:  60, swc: 1.5 },
    ]
    , skills: [201,40,254,213,84,28,189,243]
    , equips: [239,241,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/lizard-squadron"
  },
  "nom_reverend_superior_cassandra_kusanagi": {
    name: "Reverend Superior Cassandra Kusanagi", type: "MI",
    mov: "10-10", cc: 20, bs: 14, ph: 12, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+E/M Grenade Launcher",          cost:  34, swc: 0 },
      { name: "AP Spitfire+Zapper",                        cost:  35, swc: 1.5 },
      { name: "MULTI Rifle+E/M Grenade Launcher Lt.L1",    cost:  34, swc: 1 },
      { name: "AP Spitfire+Zapper Lt.L1",                  cost:  35, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [28,162,189,164,86,83,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/cassandra-kusanagi"
  },
  "nom_penitent_observants": {
    name: "Penitent Observants", type: "HI",
    mov: "10-10", cc: 18, bs: 13, ph: 12, wip: 13, arm: 5, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Red Fury+E/Marat",                          cost:  34, swc: 1.5 },
      { name: "Red Fury+E/M Grenade Launcher",             cost:  38, swc: 1.5 },
      { name: "AP Spitfire+AP Heavy Pistol",               cost:  37, swc: 1.5 },
    ]
    , skills: [28,83,267,201]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/bakunin/penitent-observants"
  },
  "nom_the_hollow_men_tactical_assault_team": {
    name: "The Hollow Men, Tactical Assault Team", type: "HI",
    mov: "15-5", cc: 11, bs: 13, ph: 10, wip: 13, arm: 4, bts: 6, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Combi Rifle+Chain-colt",                    cost:  23, swc: 0 },
      { name: "MULTI Rifle+Chain-colt",                    cost:  26, swc: 0 },
      { name: "Missile Launcher+Chain-colt",               cost:  28, swc: 1.5 },
      { name: "Spitfire+Chain-colt",                       cost:  29, swc: 1.5 },
      { name: "Combi Rifle+Chain-colt",                    cost:  24, swc: 0 },
      { name: "Combi Rifle+Chain-colt",                    cost:  29, swc: 0.5 },
      { name: "Boarding Shotgun+Chain-colt",               cost:  21, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,74,83,1000,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/the-hollow-men"
  },
  "nom_jelena_kova_securitate_di": {
    name: " Jelena Kovač, Securitate DI", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Chain-colt",            cost:  21, swc: 0 },
      { name: "MULTI Rifle+Chain-colt",                    cost:  21, swc: 0 },
    ]
    , skills: [242,189,65,213,267]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/jelena-kovac-securitate-di"
  },
  "nom_tunguska_cheerkillers": {
    name: "Tunguska Cheerkillers", type: "LI",
    mov: "10-10", cc: 19, bs: 12, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Pulzar",                      cost:  12, swc: 0 },
      { name: "Submachine Gun+Nanopulser",                 cost:  13, swc: 0 },
      { name: "AP Rifle+Nanopulser",                       cost:  18, swc: 0 },
      { name: "Submachine Gun+Nanopulser",                 cost:  14, swc: 0 },
      { name: "Shock Marksman Rifle+Nanopulser",           cost:  24, swc: 0 },
    ]
    , skills: [19,40,74,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/tunguska-cheerkillers"
  },

  // ─────────────────────────────────────────────────────────────────
  // Combined Army y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "ca_imetron": {
    name: "Ímetron", type: "LI",
    mov: "-1--1", cc: -1, bs: -1, ph: -1, wip: -1, arm: 0, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Default",                                   cost:   6, swc: 0 },
    ]
    , skills: [267,35,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/imetron"
  },
  "ca_shasvastii_special_armoured_corp_sphinx": {
    name: "Shasvastii Special Armored Corp Sphinx", type: "TAG",
    mov: "15-15", cc: 20, bs: 14, ph: 15, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Spitfire+Heavy Flamethrower",               cost:  93, swc: 2, ocultable: true },
    ]
    , skills: [201,191,29,84,40,238,254,28,213,58,82,235,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/sphinx"
  },
  "ca_caskuda_wcd_armored_jump_operator": {
    name: "Caskuda WCD Armored Jump Operator", type: "TAG",
    mov: "15-10", cc: 18, bs: 14, ph: 16, wip: 12, arm: 7, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Rifle+Chain Rifle",                   cost:  64, swc: 1 },
    ]
    , skills: [235,84,35,213,201,40,254,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/caskuda"
  },
  "ca_yaogat_strike_infantry": {
    name: "Yaogat Strike Infantry", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 12, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Panzerfaust",                   cost:  24, swc: 0 },
      { name: "Boarding Shotgun+Panzerfaust",              cost:  21, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  32, swc: 1.5 },
      { name: "Spitfire",                                  cost:  29, swc: 1.5 },
      { name: "Combi Rifle+Panzerfaust",                   cost:  29, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [122,83,267,1000]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/yaogat-strike-infantry"
  },
  "ca_speculo_killers": {
    name: "Speculo Killers", type: "SK",
    mov: "10-10", cc: 22, bs: 12, ph: 12, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  29, swc: 1, ocultable: true },
      { name: "Boarding Shotgun+Nanopulser",               cost:  26, swc: 1, ocultable: true },
    ]
    , isImpersonator: true
    , skills: [237,191,84,40,62,164,58,249,21]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/speculo-killers"
  },
  "ca_unidron_batroids": {
    name: "Unidron Batroids", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 12, arm: 1, bts: 6, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Plasma Carbine",                            cost:  14, swc: 0 },
      { name: "K1 Combi Rifle",                            cost:  14, swc: 0 },
      { name: "K1 Combi Rifle",                            cost:  15, swc: 0.5 },
      { name: "Plasma Sniper Rifle",                       cost:  24, swc: 1.5 },
      { name: "Missile Launcher+Light Shotgun",            cost:  20, swc: 1.5 },
      { name: "Spitfire",                                  cost:  18, swc: 1 },
      { name: "Plasma Carbine+Flash Pulse",                cost:  15, swc: 0 },
      { name: "Plasma Carbine",                            cost:  16, swc: 0 },
    ]
    , skills: [235,84,85,131,40,59,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/unidron-batroids"
  },
  "ca_med_tech_obsidon_medchanoids": {
    name: "Med-Tech Obsidon Medchanoid", type: "LI",
    mov: "15-10", cc: 16, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 3,
    profiles: [
      { name: "Combi Rifle+Zapper",                        cost:  21, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  22, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  24, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  25, swc: 0 },
    ]
    , skills: [49,53,277]
    , equips: [238,237,106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/med-tech-obsidon-medchanoid"
  },
  "ca_slave_drones": {
    name: "Slave Drones", type: "REM",
    mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   3, swc: 0 },
    ]
    , skills: [243,84,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/slave-drones"
  },
  "ca_e_drones": {
    name: "E-Drones", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle",                               cost:  17, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [235,84,1000,58]
    , equips: [182]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/e-drones"
  },
  "ca_ikadron_batroid": {
    name: "Ikadron Batroids", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 1, bts: 6, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Light Flamethrower",                        cost:  11, swc: 0 },
    ]
    , skills: [235,84,131,40,85]
    , equips: [91,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/ikadron-batroids"
  },
  "ca_victor_messer_autonomous_agent_of_chaos": {
    name: "Victor Messer, Autonomous Agent of Chaos", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 14, arm: 0, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  31, swc: 0.5 },
      { name: "Vulkan Shotgun+E/Mitter",                   cost:  30, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [237,164,264,254,273,276,1000,56]
    , equips: [108,101]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/victor-messer"
  },
  "ca_morat_vanguard_infantry": {
    name: "Morat Vanguard Infantry", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  14, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  23, swc: 1 },
      { name: "K1 Sniper Rifle",                           cost:  17, swc: 1 },
      { name: "Missile Launcher",                          cost:  19, swc: 1.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 },
      { name: "Combi Rifle",                               cost:  16, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  14, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [83,267,201,59,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/morat-vanguard-infantry"
  },
  "ca_avatar": {
    name: "Avatar", type: "TAG",
    mov: "15-10", cc: 19, bs: 15, ph: 16, wip: 17, arm: 9, bts: 9, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Sepsitor Plus Lt.L1", cost: 122, swc: 3 },
    ]
    , ltSkills: ["s2", "lt2"]
    , skills: [201,84,40,254,162,28,70,248,213,119,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/avatar"
  },
  "ca_special_operative_ko_dali": {
    name: "Special Operative Ko Dali", type: "MI",
    mov: "15-5", cc: 19, bs: 14, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Pulzar",                        cost:  37, swc: 0 },
      { name: "MULTI Rifle+D-Charges",                     cost:  34, swc: 0 },
    ]
    , skills: [21,84,40,162,72,164,189,33,35,74,161,28]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/special-operative-ko-dali"
  },
  "ca_daturazi_witch_soldiers": {
    name: "Dāturazi Witch-Soldiers", type: "WB",
    mov: "10-10", cc: 23, bs: 11, ph: 14, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Grenades",                      cost:  14, swc: 0 },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:  15, swc: 0 },
      { name: "Combi Rifle+Smoke Grenade Launcher",        cost:  18, swc: 0.5 },
    ]
    , skills: [22,24,40,28,83,256,267,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/daturazi-witch-soldiers"
  },
  "ca_sartroids_ranters_cyberplugged_attack_remotes": {
    name: "Sartroids: Ranters, Cyberplugged Attack Remotes", type: "REM",
    mov: "15-10", cc: 16, bs: 13, ph: 12, wip: 12, arm: 3, bts: 6, w: 0, str: 1, s: 5,
    profiles: [
      { name: "Mk12+Boarding Pistol",                      cost:  18, swc: 0 },
      { name: "Spitfire+Boarding Pistol",                  cost:  19, swc: 1 },
      { name: "Submachine Gun+Thunderbolt",                cost:  12, swc: 0 },
    ]
    , skills: [243,84,161,40,28]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/sartroids-ranters-cyberplugged-attack-remotes"
  },
  "ca_greif_operators": {
    name: "Greif Operators", type: "SK",
    mov: "10-10", cc: 17, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  23, swc: 0 },
      { name: "Shock Marksman Rifle+D-Charges",            cost:  25, swc: 0 },
      { name: "Breaker Combi Rifle+D-Charges",             cost:  21, swc: 0.5 },
    ]
    , skills: [84,164,161,28,191,249]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/greif-operators"
  },
  "ca_shasvastii_sabotage_and_destruction_unit_caliban": {
    name: "Shasvastii Sabotage and Destruction Unit Caliban", type: "LI",
    mov: "10-10", cc: 23, bs: 12, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  24, swc: 0, ocultable: true },
      { name: "Vulkan Shotgun+Flash Pulse",                cost:  26, swc: 0, ocultable: true },
      { name: "Submachine Gun+Pulzar",                     cost:  26, swc: 0, ocultable: true },
      { name: "Spitfire+D-Charges",                        cost:  36, swc: 1.5, ocultable: true },
    ]
    , skills: [237,191,161,40,28,72,164,21,84,29,162,59,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/caliban"
  },
  "ca_r_drones": {
    name: "R-Drones", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/r-drones"
  },
  "ca_sartroids_puzzlers_cyberplugged_attack_remotes": {
    name: "Sartroids: Puzzlers, Cyberplugged Forward Remotes", type: "REM",
    mov: "20-5", cc: 15, bs: 12, ph: 10, wip: 12, arm: 3, bts: 6, w: 0, str: 1, s: 5,
    profiles: [
      { name: "Adhesive Launcher Rifle+E/Marat",           cost:  13, swc: 0 },
      { name: "Akrylat-Kanone+E/Marat",                    cost:  12, swc: 0 },
    ]
    , skills: [243,191,84,40,47,28,29,238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/sartroids-puzzlers-cyberplugged-forward-remotes"
  },
  "ca_malignos_shasvastii_deep_incursion_corps": {
    name: "Malignos", type: "SK",
    mov: "15-5", cc: 15, bs: 12, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Monofilament Mine",          cost:  31, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Pulzar",                   cost:  30, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle+Pulzar",                 cost:  33, swc: 1.5, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  34, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Flash Pulse",                cost:  30, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  32, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [237,191,29,238,28,47,58,62,164,56,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/malignos"
  },
  "ca_the_shrouded_shasvastii_pioneer_corps": {
    name: "The Shrouded", type: "SK",
    mov: "10-10", cc: 14, bs: 12, ph: 12, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  20, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle",                        cost:  24, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  28, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Flash Pulse",                   cost:  24, swc: 0, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  24, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun",                          cost:  21, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  26, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [237,191,29,28,47,58,62,164,1000,59,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/the-shrouded"
  },
  "ca_rasyat_diplomatic_division": {
    name: "Rasyat Diplomatic Division", type: "MI",
    mov: "10-10", cc: 21, bs: 12, ph: 13, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  25, swc: 0, ocultable: true },
      { name: "Spitfire+D-Charges",                        cost:  34, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+E/M Carbine",                   cost:  31, swc: 0, ocultable: true },
    ]
    , skills: [20,39,33,35,164,267,83,40,74]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/rasyat-diplomatic-division"
  },
  "ca_rindak_emergency_brigade": {
    name: "Rindak Emergency Brigade", type: "HI",
    mov: "15-5", cc: 16, bs: 12, ph: 13, wip: 13, arm: 3, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  24, swc: 0 },
      { name: "Vulkan Shotgun+E/Mitter",                   cost:  32, swc: 0 },
      { name: "MULTI Rifle+Blitzen",                       cost:  33, swc: 0 },
      { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  26, swc: 0 },
      { name: "Vulkan Shotgun+Blitzen",                    cost:  32, swc: 0.5 },
    ]
    , skills: [40,162,65,86,82,83,267,64,161,56]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/rindak-emergency-brigade"
  },
  "ca_shasvastii_tactical_dominance_special_wing_noctifers": {
    name: "Shasvastii Noctifers", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Spitfire",                                  cost:  29, swc: 1, ocultable: true },
      { name: "Missile Launcher+Assault Pistol",           cost:  30, swc: 1.5, ocultable: true },
      { name: "Spitfire",                                  cost:  31, swc: 1.5, ocultable: true },
    ]
    , skills: [237,191,29,238,28,164,85,84,161]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-noctifers"
  },
  "ca_wcd_vector_operators": {
    name: "WCD Vector Operators", type: "MI",
    mov: "15-5", cc: 14, bs: 12, ph: 11, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Shotgun+D-Charges",                   cost:  19, swc: 0 },
      { name: "MULTI Marksman Rifle",                      cost:  24, swc: 0.5 },
      { name: "Spitfire",                                  cost:  26, swc: 1.5 },
      { name: "Plasma Sniper Rifle",                       cost:  29, swc: 1.5 },
    ]
    , skills: [84,40,259,28,58,74]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/wcd-vector-operators"
  },
  "ca_m_drones": {
    name: "M-Drones", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0 },
    ]
    , skills: [235,242,84,59,58,65,213]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/m-drones"
  },
  "ca_t_drones": {
    name: "T-Drones", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
    ]
    , skills: [235,84,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/t-drones"
  },
  "ca_glyph_warcors_ur_hegemony_journalists": {
    name: "Glyph Warcors, Ur Hegemony Journalists", type: "LI",
    mov: "10-10", cc: 11, bs: 9, ph: 11, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Flash Pulse",                               cost:   4, swc: 0 },
    ]
    , skills: [40,272,67]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/glyph-warcors-ur-hegemony-journalists"
  },
  "ca_the_anathematics": {
    name: "The Anathematics", type: "HI",
    mov: "15-5", cc: 19, bs: 13, ph: 13, wip: 16, arm: 5, bts: 6, w: 2, str: 0, s: 6,
    profiles: [
      { name: "Plasma Rifle+Sepsitor",                     cost:  73, swc: 0.5, ocultable: true },
      { name: "Plasma Rifle+Pulzar",                       cost:  72, swc: 0.5, ocultable: true },
      { name: "Plasma Rifle+Sepsitor Lt.L1",               cost:  75, swc: 0, ocultable: true },
      { name: "Plasma Rifle+Pulzar Lt.L1",                 cost:  70, swc: 0.5, ocultable: true },
      { name: "Plasma Rifle+Pulzar Lt.L1",                 cost:  74, swc: 0.5, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [191,29,248,28,164,86,84,40,238,1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/the-anathematics"
  },
  "ca_umbra_legates": {
    name: "Umbra Legates", type: "MI",
    mov: "15-5", cc: 22, bs: 13, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Zapper",                     cost:  36, swc: 0 },
      { name: "Spitfire+Zapper",                           cost:  41, swc: 1.5 },
      { name: "K1 Combi Rifle+Zapper",                     cost:  33, swc: 0 },
      { name: "Spitfire+Zapper",                           cost:  37, swc: 1.5 },
      { name: "K1 Combi Rifle+Zapper",                     cost:  38, swc: 0 },
      { name: "K1 Combi Rifle+Zapper",                     cost:  38, swc: 0.5 },
      { name: "Vulkan Shotgun+Zapper",                     cost:  42, swc: 0.5 },
      { name: "Spitfire+Zapper Lt.L1",                     cost:  37, swc: 1.5 },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHacker: true
    , skills: [84,40,28,86,164,162,21,213,161,26,1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/umbra-legates"
  },
  "ca_the_hungries_gakis": {
    name: "The Hungries-'Gakis'", type: "WB",
    mov: "15-15", cc: 20, bs: 9, ph: 14, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP CC Weapon",                              cost:   4, swc: 0 },
    ]
    , skills: [24,40,38,82,256,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/the-hungries-gakis"
  },
  "ca_the_hungries_pretas": {
    name: "The Hungries-'Pretas'", type: "WB",
    mov: "15-15", cc: 20, bs: 9, ph: 14, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle",                               cost:   7, swc: 0 },
    ]
    , skills: [84,40,85,82,256,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/the-hungries-pretas"
  },
  "ca_wcd_base_operators": {
    name: "WCD Base Operators", type: "MI",
    mov: "15-5", cc: 14, bs: 11, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Shotgun",                 cost:  17, swc: 0 },
      { name: "MULTI Rifle",                               cost:  19, swc: 0 },
      { name: "Mk12",                                      cost:  20, swc: 0 },
      { name: "Heavy Shotgun",                             cost:  18, swc: 0.5 },
      { name: "D-Charges+Heavy Shotgun",                   cost:  17, swc: 0 },
    ]
    , isHacker: true
    , skills: [84,40,259,74,1000,49]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/wcd-base-operators"
  },
  "ca_wcd_void_operators": {
    name: "WCD Void Operators", type: "MI",
    mov: "15-5", cc: 17, bs: 12, ph: 11, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Shotgun+E/M Grenades",                cost:  19, swc: 0 },
      { name: "Red Fury",                                  cost:  26, swc: 1 },
      { name: "Combi Rifle+Light Rocket Launcher",         cost:  26, swc: 0 },
      { name: "Submachine Gun+Cybermine",                  cost:  20, swc: 0 },
    ]
    , isHacker: true
    , skills: [84,40,211,58,259,74,1000]
    , equips: [117,113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/wcd-void-operators"
  },
  "ca_the_charontids": {
    name: "The Charontids", type: "HI",
    mov: "15-5", cc: 17, bs: 14, ph: 13, wip: 16, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Plasma Rifle+Pulzar",                       cost:  67, swc: 0 },
      { name: "AP Heavy Machine Gun+Pulzar",               cost:  70, swc: 1.5 },
      { name: "Plasma Rifle+Sepsitor Plus",                cost:  69, swc: 0.5 },
      { name: "Plasma Rifle+Pulzar Lt.L1",                 cost:  67, swc: 0 },
      { name: "AP Heavy Machine Gun+Pulzar Lt.L1",         cost:  70, swc: 1 },
      { name: "Plasma Rifle+Sepsitor Plus Lt.L1",          cost:  71, swc: 0.5 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,248,86,40,1000,119]
    , equips: [241,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/the-charontids"
  },
  "ca_rodok_morat_armed_imposition_detachment": {
    name: "Rodok, Morat Armed Imposition Detachment", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 12, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Missile Launcher+Light Shotgun",            cost:  29, swc: 1.5 },
      { name: "Thunderbolt",                               cost:  23, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  24, swc: 0 },
      { name: "Boarding Shotgun",                          cost:  24, swc: 0 },
      { name: "Boarding Shotgun",                          cost:  21, swc: 0 },
      { name: "Spitfire",                                  cost:  29, swc: 1.5 },
    ]
    , isHacker: true
    , skills: [28,58,83,267,262,74,251,1000,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/rodok"
  },
  "ca_achilles": {
    name: "Achilles", type: "HI",
    mov: "15-10", cc: 24, bs: 15, ph: 15, wip: 15, arm: 3, bts: 6, w: 3, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+Pulzar",                        cost:  62, swc: 2 },
      { name: "Plasma Rifle+Pulzar",                       cost:  63, swc: 1 },
    ]
    , skills: [22,201,84,161,40,28,164,264,250]
    , equips: [108]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/achilles"
  },
  "ca_shasvastii_tactical_monitoring_company_mentor": {
    name: "Shasvastii Tactical Monitoring Company Mentor", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 14, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun",                            cost:  20, swc: 0, ocultable: true },
      { name: "Shock Marksman Rifle",                      cost:  24, swc: 0, ocultable: true },
      { name: "Vulkan Shotgun",                            cost:  25, swc: 0.5, ocultable: true },
    ]
    , ltSkills: ["ci"]
    , isHacker: true
    , skills: [237,191,29,28,164,215,207,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/mentor"
  },
  "ca_dartok_cybercombat_team": {
    name: "Dartok Cybercombat Team", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Pitcher",                       cost:  23, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [85,83,267,1000]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/dartok-cybercombat-team"
  },
  "ca_umbra_samaritan_nourkias_kai_l_rank": {
    name: "Umbra Samaritan Nourkias, Kai'l Rank", type: "LI",
    mov: "15-5", cc: 25, bs: 12, ph: 12, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "K1 Combi Rifle+Flash Pulse",                cost:  48, swc: 1 },
      { name: "K1 Combi Rifle+Flash Pulse Lt.L1",          cost:  46, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [22,84,40,72,164,74,86,162,211,1000,119]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/nourkias"
  },
  "ca_shasvastii_seed_soldiers": {
    name: "Shasvastii Seed-Soldiers", type: "LI",
    mov: "-1--1", cc: 10, bs: 1, ph: 11, wip: -1, arm: 2, bts: 3, w: 1, str: 0, s: 0,
    profiles: [
      { name: "Boarding Shotgun+Panzerfaust",              cost:  15, swc: 0, ocultable: true },
      { name: "Combi Rifle+Panzerfaust",                   cost:  16, swc: 0, ocultable: true },
      { name: "Combi Rifle+Panzerfaust",                   cost:  17, swc: 0, ocultable: true },
      { name: "Combi Rifle+Panzerfaust",                   cost:  18, swc: 0, ocultable: true },
    ]
    , skills: [237,191,29,161,28,246,59,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-seed-soldiers"
  },
  "ca_bit_kiss": {
    name: "Bit &  KISS!", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 13, arm: 0, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Pitcher",                    cost:  25, swc: 0.5 },
      { name: "Submachine Gun+Pitcher",                    cost:  22, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [56,1000,243,84]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/bit-and-kiss"
  },
  "ca_overdron_batroids": {
    name: "Overdron Batroids", type: "TAG",
    mov: "15-5", cc: 16, bs: 13, ph: 13, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Hyper-Rapid Magnetic Cannon+Boarding Pistol", cost:  62, swc: 1.5 },
      { name: "Plasma Sniper Rifle+Boarding Pistol",       cost:  59, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Submachine Gun",      cost:  51, swc: 1.5 },
    ]
    , skills: [84,40,213,235,201,28,189,243]
    , equips: [183,247,169]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/overdron-batroids"
  },
  "ca_exos_exrah_executive_officers": {
    name: "EXOs, Exrah Executive Officers", type: "MI",
    mov: "15-5", cc: 14, bs: 12, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Plasma Carbine+Assault Pistol",             cost:  19, swc: 0 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  22, swc: 0 },
    ]
    , skills: [84,40,259,74,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/exos-exrah-executive-officers"
  },
  "ca_q_drones": {
    name: "Q-Drones", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  25, swc: 1 },
      { name: "Plasma Rifle",                              cost:  24, swc: 1 },
      { name: "Thunderbolt",                               cost:  20, swc: 0.5 },
    ]
    , skills: [235,84,28,61]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/q-drones"
  },
  "ca_cadmus_naish_agent_sheskiin": {
    name: "Cadmus-Naish Agent Sheskiin", type: "LI",
    mov: "15-10", cc: 24, bs: 15, ph: 15, wip: 13, arm: 1, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Pulzar",                        cost:  48, swc: 0 },
      { name: "Red Fury+Pulzar",                           cost:  50, swc: 1 },
      { name: "MULTI Rifle+Pulzar Lt.L1",                  cost:  48, swc: 0 },
      { name: "Red Fury+Pulzar Lt.L1",                     cost:  50, swc: 0.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [237,22,84,40,72,201,164,264,119]
    , equips: [108]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/cadmus-naish-agent-sheskiin"
  },
  "ca_nexus_operatives": {
    name: "Nexus Operatives", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+E/Mitter",                cost:  23, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  24, swc: 0.5 },
      { name: "Combi Rifle+Zapper",                        cost:  27, swc: 0.5 },
      { name: "Spitfire+Zapper",                           cost:  29, swc: 1 },
      { name: "MULTI Rifle+Zapper",                        cost:  22, swc: 0 },
      { name: "Combi Rifle+Zapper Lt.L1",                  cost:  27, swc: 0.5 },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHacker: true
    , skills: [84,40,211,122,28,26,1000,49,264,189,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/nexus-operatives"
  },
  "ca_zerat_special_missions_regiment": {
    name: "Zerat Special Missions Regiment", type: "SK",
    mov: "10-10", cc: 16, bs: 11, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Shock Mine",                    cost:  28, swc: 0 },
      { name: "MULTI Marksman Rifle",                      cost:  29, swc: 1 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  29, swc: 0.5 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  27, swc: 0 },
      { name: "AP Submachine Gun+Shock Mine",              cost:  22, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  25, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,164,58,83,47,267,201,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/zerat-special-missions-regiment"
  },
  "ca_raktorak_morat_sergeant_major": {
    name: "Raktorak, Morat Sergeant Major", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 12, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Heavy Flamethrower",            cost:  23, swc: 0 },
      { name: "Vulkan Shotgun",                            cost:  25, swc: 0 },
      { name: "Red Fury",                                  cost:  27, swc: 1 },
      { name: "Vulkan Shotgun",                            cost:  23, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [122,189,58,83,267,262,211,26]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/raktorak-morat-sergeant-major"
  },
  "ca_dropsuit_taryot": {
    name: "Dropsuit Taryot", type: "REM",
    mov: "15-5", cc: 15, bs: 11, ph: 12, wip: 13, arm: 1, bts: 6, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Heavy Shotgun+Boarding Pistol",             cost:  18, swc: 0, ocultable: true },
      { name: "Adhesive Launcher Rifle+E/Marat",           cost:  16, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Boarding Pistol",         cost:  18, swc: 0, ocultable: true },
    ]
    , skills: [235,33,35,83,267,74,85,201,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/dropsuit-taryot"
  },
  "ca_kurgat_regiment_of_assault_engineers": {
    name: "Kurgat Reg. of Assault Engineers", type: "MI",
    mov: "10-10", cc: 18, bs: 12, ph: 12, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Portable Autocannon+D-Charges",             cost:  30, swc: 1 },
      { name: "Boarding Shotgun+D-Charges",                cost:  19, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  22, swc: 0 },
      { name: "Combi Rifle+E/Mitter",                      cost:  25, swc: 0 },
    ]
    , skills: [49,267,83,201]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/kurgat-reg-of-assault-engineers"
  },
  "ca_bultrak_mobile_armored_regiment": {
    name: "Bultrak, Mobile Armored Regiment", type: "TAG",
    mov: "15-10", cc: 21, bs: 13, ph: 15, wip: 12, arm: 5, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "Hyper-Rapid Magnetic Cannon",               cost:  69, swc: 1.5 },
      { name: "Portable Autocannon",                       cost:  69, swc: 1.5 },
    ]
    , skills: [240,40,213,74,211,83,254,201,267,162,84,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/bultrak-mobile-armored-regiment"
  },
  "ca_sogarat_tempest_regiment": {
    name: "Sogarat Tempest Regiment", type: "HI",
    mov: "10-10", cc: 21, bs: 13, ph: 14, wip: 13, arm: 6, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "AP Heavy Machine Gun+Pulzar",               cost:  52, swc: 1.5 },
      { name: "Feuerbach+Pulzar",                          cost:  56, swc: 1.5 },
      { name: "AP Heavy Machine Gun+Pulzar",               cost:  54, swc: 1.5 },
      { name: "Feuerbach+Pulzar",                          cost:  58, swc: 1.5 },
      { name: "AP Heavy Machine Gun+Pulzar Lt.L1",         cost:  56, swc: 1 },
      { name: "Feuerbach+Pulzar Lt.L1",                    cost:  56, swc: 0.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,86,83,267,211,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/sogarat-tempest-regiment"
  },
  "ca_treitak_anyat": {
    name: "Treitak Anyat", type: "LI",
    mov: "10-10", cc: 19, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "K1 Combi Rifle+Chain-colt",                 cost:  22, swc: 0 },
    ]
    , skills: [162,189,82,83,267]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/treitak-anyat"
  },
  "ca_kornak_gazarot_superior_warrior_officer": {
    name: "Kornak Gazarot, Morat Superior Warrior-Officer", type: "MI",
    mov: "10-10", cc: 22, bs: 14, ph: 13, wip: 14, arm: 3, bts: 9, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Mk12+Light Flamethrower",                   cost:  35, swc: 0 },
      { name: "Mk12+Light Flamethrower Lt.L1",             cost:  38, swc: 0 },
      { name: "Mk12+Light Flamethrower Lt.L1",             cost:  42, swc: 0 },
    ]
    , ltSkills: ["s1", "lt2"]
    , skills: [24,40,39,162,86,83,250,240,267,69,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/kornak-gazarot"
  },
  "ca_zabuk_morat_enslavers": {
    name: "Zabuk, Morat Enslavers", type: "LI",
    mov: "10-10", cc: 19, bs: 11, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  14, swc: 0 },
      { name: "Submachine Gun+Heavy Riotstopper",          cost:  14, swc: 0 },
    ]
    , skills: [40,83,267]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/zabuk-morat-enslavers"
  },
  "ca_faredak_morat_aggression_forces_tag_support_pilots": {
    name: "Faredak,  Morat Aggression Forces TAG Support Pilots", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 12, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  14, swc: 0 },
      { name: "Vulkan Shotgun",                            cost:  14, swc: 0 },
    ]
    , skills: [267,189,270,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/morat/faredak-morat-aggression-forces-tag-support-pilots"
  },
  "ca_tyrok_hunters": {
    name: "Tyrok Hunters", type: "SK",
    mov: "10-10", cc: 23, bs: 11, ph: 14, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Rifle+AP Mine",                          cost:  22, swc: 0 },
      { name: "T2 Rifle+AP Mine",                          cost:  23, swc: 0.5 },
      { name: "T2 Rifle+AP Mine",                          cost:  26, swc: 0 },
    ]
    , skills: [250,19,161,40,58,83,267,215,56,243,84,85]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/tyrok-hunters"
  },
  "ca_suryat_assault_heavy_infantry": {
    name: "Suryat Assault Heavy Infantry", type: "HI",
    mov: "10-10", cc: 17, bs: 13, ph: 13, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+MULTI Pistol",               cost:  34, swc: 0 },
      { name: "MULTI Rifle+Light Flamethrower",            cost:  36, swc: 0 },
      { name: "Heavy Rocket Launcher+MULTI Pistol",        cost:  36, swc: 1.5 },
      { name: "Heavy Machine Gun+MULTI Pistol",            cost:  43, swc: 1.5 },
      { name: "Heavy Machine Gun+MULTI Pistol",            cost:  44, swc: 1.5 },
      { name: "Heavy Machine Gun+MULTI Pistol Lt.L1",      cost:  45, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [267,162,58,83,213,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/suryats"
  },
  "ca_kyosot_killing_platoon": {
    name: "Kyosot Killing Platoon", type: "MI",
    mov: "10-10", cc: 19, bs: 13, ph: 12, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Marksman Rifle+AP Heavy Pistol",         cost:  31, swc: 0 },
      { name: "AP Submachine Gun+AP Heavy Pistol",         cost:  23, swc: 0 },
      { name: "AP Submachine Gun+Chain-colt",              cost:  28, swc: 0 },
    ]
    , skills: [201,162,28,83,240,267]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/kyosot-killing-platoon"
  },
  "ca_oznat_morat_hunting_regiment": {
    name: "Oznat, Morat Hunting Regiment", type: "WB",
    mov: "15-10", cc: 21, bs: 11, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Smoke Grenade Launcher",        cost:  15, swc: 0 },
      { name: "Vulkan Shotgun+Smoke Grenades",             cost:  17, swc: 0 },
      { name: "Vulkan Shotgun+Smoke Grenades",             cost:  25, swc: 0 },
    ]
    , skills: [19,40,256,83,267,264,261,65,84,243,85,82]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/oznat-morat-hunting-regiment"
  },
  "ca_kaitok_shock_regiment": {
    name: "Kaitok Shock Regiment", type: "HI",
    mov: "15-5", cc: 16, bs: 12, ph: 14, wip: 13, arm: 5, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Chain Rifle+Flammenspeer",                  cost:  19, swc: 0 },
      { name: "Heavy Rocket Launcher",                     cost:  20, swc: 1.5 },
      { name: "Feuerbach",                                 cost:  34, swc: 1.5 },
    ]
    , skills: [201,40,250,83,267]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/kaitok-shock-regiment"
  },
  "ca_raicho_armored_brigade": {
    name: "Raicho Armored Brigade", type: "TAG",
    mov: "15-10", cc: 17, bs: 14, ph: 16, wip: 12, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Heavy Shotgun",     cost:  85, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  75, swc: 2 },
    ]
    , skills: [201,40,267,254,162,262,213,83,211,84,28,189,243]
    , equips: [239,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/raicho-armored-brigade"
  },
  "ca_shasvastii_light_support_unit_haiduks": {
    name: "Shasvastii Haiduks", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Marksman Rifle",                         cost:  21, swc: 0.5 },
      { name: "MULTI Sniper Rifle",                        cost:  23, swc: 1.5 },
    ]
    , skills: [237,201,89]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-haiduks"
  },
  "ca_taigha_creatures": {
    name: "Taigha Creatures", type: "WB",
    mov: "15-10", cc: 21, bs: 9, ph: 13, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 1,
    profiles: [
      { name: "Viral CC Weapon",                           cost:   6, swc: 0 },
    ]
    , skills: [24,40,67,256,84,264]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/taigha-creatures"
  },
  "ca_shasvastii_armed_imposition_detachment_gwailos": {
    name: "Shasvastii Gwailos", type: "HI",
    mov: "10-10", cc: 14, bs: 13, ph: 12, wip: 13, arm: 3, bts: 9, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+E/M Carbine",             cost:  44, swc: 1.5 },
      { name: "Heavy Rocket Launcher+E/M Carbine",         cost:  39, swc: 1.5 },
      { name: "Heavy Machine Gun+E/M Carbine Lt.L1",       cost:  44, swc: 1.5 },
      { name: "Heavy Rocket Launcher+E/M Carbine Lt.L1",   cost:  39, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [237,164,262,264,119]
    , equips: [108,183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-gwailos"
  },
  "ca_agent_dukash_vashar_special_corps": {
    name: "Agent Dukash, Vashar Special Corps ", type: "LI",
    mov: "10-10", cc: 21, bs: 13, ph: 12, wip: 14, arm: 2, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  39, swc: 0 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  40, swc: 0 },
    ]
    , skills: [19,84,40,189,164,28,237,162,33]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/agent-dukash"
  },
  "ca_jayth_cutthroats_shasvastii_independent_assault_group": {
    name: "Jayth Cutthroats, Shasvastii Independent Assault Group", type: "LI",
    mov: "10-10", cc: 23, bs: 12, ph: 13, wip: 13, arm: 0, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+E/M Grenades",                  cost:  21, swc: 0 },
      { name: "Submachine Gun+Chain Rifle",                cost:  24, swc: 0 },
      { name: "Red Fury+E/M Grenades",                     cost:  34, swc: 1 },
      { name: "Submachine Gun+Chain Rifle",                cost:  26, swc: 0 },
      { name: "Submachine Gun+Chain Rifle",                cost:  30, swc: 0 },
    ]
    , skills: [237,21,28,24,40,262,164,84,162,189,131,243,264]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/jayth-cutthroats"
  },
  "ca_shasvastii_airborne_infiltration_group_cadmus": {
    name: "Shasvastii Cadmus", type: "LI",
    mov: "-1--1", cc: 10, bs: 1, ph: 12, wip: -1, arm: 2, bts: 3, w: 1, str: 0, s: 0,
    profiles: [
      { name: "Combi Rifle+Pulzar",                        cost:  22, swc: 0 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  19, swc: 0 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  22, swc: 0 },
    ]
    , isHacker: true
    , skills: [237,35,215,191,246,73,164,201,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-cadmus"
  },
  "ca_tensho_experts": {
    name: "Shasvastii Tensho Experts", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 11, wip: 14, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Nanopulser",               cost:  14, swc: 0 },
      { name: "Submachine Gun",                            cost:  16, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  16, swc: 0 },
    ]
    , skills: [237,162,189,62,164,267,272]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-tensho-experts"
  },
  "ca_shasvastii_nox_troops": {
    name: "Shasvastii Nox Troops", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Zapper",                        cost:  14, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  21, swc: 1 },
      { name: "Combi Rifle+Grenade Launcher",              cost:  15, swc: 1 },
      { name: "MULTI Sniper Rifle",                        cost:  19, swc: 1 },
      { name: "Submachine Gun+Zapper",                     cost:  14, swc: 0.5 },
      { name: "Combi Rifle+Zapper",                        cost:  15, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  16, swc: 0 },
      { name: "Combi Rifle+Zapper Lt.L1",                  cost:  14, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  21, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [237,162,164,1000,59,64,119,201,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-nox-troops"
  },
  "ca_shasvastii_corax_hasht": {
    name: "Shasvastii Corax Hasht", type: "LI",
    mov: "10-10", cc: 19, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Red Fury",                                  cost:  33, swc: 1 },
      { name: "Red Fury",                                  cost:  30, swc: 1 },
      { name: "AP Spitfire",                               cost:  33, swc: 1 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  29, swc: 0.5 },
    ]
    , skills: [237,162,164,189,86,262,264,251,56]
    , equips: [108]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/shasvastii-corax-hasht"
  },
  "ca_nexus_7_operative_kerr_nau": {
    name: "Nexus-7 Operative Kerr-Nau", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Plasma Rifle+D-Charges",                    cost:  30, swc: 0 },
      { name: "Plasma Rifle+Pitcher",                      cost:  35, swc: 0 },
    ]
    , isHacker: true
    , skills: [84,40,162,211,1000,264]
    , equips: [145,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/nexus-7-operative-kerr-nau"
  },
  "ca_fraacta_drop_unit": {
    name: "Fraacta Drop Unit", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Adhesive Launcher Rifle",  cost:  19, swc: 0, ocultable: true },
      { name: "Spitfire+Nanopulser",                       cost:  27, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+Nanopulser",                    cost:  25, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [84,33,35,74,246,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/fraacta-drop-unit"
  },
  "ca_maakrep_trackers_unit": {
    name: "Maakrep Trackers Unit", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  29, swc: 1.5 },
      { name: "Boarding Shotgun+Grenades",                 cost:  19, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  27, swc: 1.5 },
    ]
    , skills: [84,67,262,62]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/maakrep-trackers-unit"
  },
  "ca_umbra_samaritans": {
    name: "Umbra Samaritans", type: "LI",
    mov: "15-5", cc: 24, bs: 12, ph: 12, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Plasma Rifle+Pulzar",                       cost:  37, swc: 0 },
      { name: "Plasma Rifle+Pulzar",                       cost:  43, swc: 0.5 },
      { name: "Plasma Rifle+Pulzar Lt.L1",                 cost:  35, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [22,40,72,74,86,84,162,164,211,1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/umbra-samaritans"
  },
  "ca_xeodron_batroids": {
    name: "Xeodron Batroids", type: "TAG",
    mov: "15-5", cc: 17, bs: 13, ph: 13, wip: 13, arm: 5, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "K1 Marksman Rifle+Blitzen",                 cost:  49, swc: 0.5 },
      { name: "MULTI Marksman Rifle+Blitzen",              cost:  49, swc: 0.5 },
      { name: "Red Fury+Blitzen",                          cost:  50, swc: 1 },
    ]
    , skills: [235,84,213,74,201,40,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/xeodron-batroids"
  },
  "ca_gearheads_tech_savant_team": {
    name: "Gearheads, Tech Savant Team", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Zapper",                     cost:  13, swc: 0 },
      { name: "Vulkan Shotgun+Zapper",                     cost:  17, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  18, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  19, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [40,276,277,49,1000,270,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/gearheads-tech-savant-team"
  },
  "ca_tekdrakens_blackhearts": {
    name: "Tekdrakens: Blackhearts", type: "WB",
    mov: "15-10", cc: 17, bs: 13, ph: 12, wip: 13, arm: 2, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Contender+Panzerfaust",                     cost:  25, swc: 0 },
      { name: "MULTI Marksman Rifle+Panzerfaust",          cost:  29, swc: 0 },
      { name: "Plasma Carbine+Panzerfaust",                cost:  27, swc: 0.5 },
      { name: "Thunderbolt+E/M Carbine",                   cost:  29, swc: 0 },
    ]
    , skills: [201,131,40,162,28,276,58,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/tekdrakens-blackhearts"
  },
  "ca_pandora_team_achilles_field_researcher": {
    name: "Pandora, Team Achilles' Field Researcher", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Pitcher+Pulzar",                            cost:  24, swc: 0.5 },
      { name: "Pitcher+Pulzar",                            cost:  26, swc: 0.5 },
      { name: "Submachine Gun+Pitcher",                    cost:  26, swc: 0.5 },
      { name: "Pitcher+Pulzar",                            cost:  29, swc: 0.5 },
    ]
    , ltSkills: ["coc"]
    , isHacker: true
    , skills: [84,40,86,261,1000,26]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/pandora-team-achilles-field-researcher"
  },
  "ca_teucer_team_achilles_shooter": {
    name: "Teucer, Team Achilles' shooter", type: "MI",
    mov: "10-10", cc: 17, bs: 14, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Plasma Sniper Rifle+Zapper",                cost:  34, swc: 1.5 },
      { name: "Feuerbach+Zapper",                          cost:  35, swc: 1.5 },
      { name: "Plasma Sniper Rifle+Zapper",                cost:  37, swc: 1.5 },
    ]
    , skills: [84,162,28,86,109]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/teucer-team-achilles-shooter"
  },
  "ca_juggernauts_armored_assault_cavalry": {
    name: "Juggernauts, Armored Assault Cavalry", type: "TAG",
    mov: "20-5", cc: 22, bs: 14, ph: 15, wip: 13, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "Plasma Rifle+Heavy Rocket Launcher",        cost:  82, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun",                   cost:  81, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun Lt.L1",             cost:  78, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,84,40,247,254,213,276,82,273,240,235,211,119,243,28,189]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/juggernauts-armored-assault-cavalry"
  },
  "ca_contrabandoleros_resource_extraction_team": {
    name: "Contrabandoleros, Resource Extraction Team", type: "SK",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Zapper",                        cost:  29, swc: 0, ocultable: true },
      { name: "Submachine Gun+Zapper",                     cost:  29, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Zapper",                     cost:  27, swc: 0, ocultable: true },
      { name: "Submachine Gun+Zapper",                     cost:  26, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Zapper",                   cost:  26, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,238,29,40,47,162,28,164,58,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/contrabandoleros-resource-extraction-team"
  },
  "ca_tekdrakens_steeljaws": {
    name: "Tekdrakens: Steeljaws", type: "WB",
    mov: "15-10", cc: 23, bs: 10, ph: 13, wip: 13, arm: 2, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Flash Pulse+Grenades",                      cost:  18, swc: 0 },
      { name: "Flash Pulse+Grenades",                      cost:  19, swc: 0 },
    ]
    , skills: [20,240,40,162,28,276,58,82,83,65]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/tekdrakens-steeljaws"
  },
  "ca_skyhounds_combat_and_recon_air_squadron": {
    name: "Skyhounds, Combat and Recon Air Squadron", type: "t8",
    mov: "20-5", cc: -1, bs: 14, ph: 13, wip: 13, arm: 4, bts: 6, w: 0, str: 2, s: 7,
    profiles: [
      { name: "Plasma Carbine+Thunderbolt",                cost:  33, swc: 0 },
      { name: "MULTI Rifle+Flammenspeer",                  cost:  31, swc: 0 },
    ]
    , skills: [235,265,275,84,131,40,254,28,264,74,58,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/skyhounds-combat-and-recon-air-squadron"
  },
  "ca_ironsides_heavy_mobile_regiment": {
    name: "Ironsides Heavy Mobile Regiment", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 12, wip: 13, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Light Flamethrower",            cost:  36, swc: 0 },
      { name: "AP Heavy Machine Gun+Light Flamethrower",   cost:  44, swc: 1.5 },
      { name: "Heavy Rocket Launcher+E/M Carbine",         cost:  37, swc: 1.5 },
      { name: "Submachine Gun+E/Mitter",                   cost:  34, swc: 0 },
      { name: "MULTI Rifle+Light Flamethrower Lt.L1",      cost:  36, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [201,262,213,276,83,1000,119]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/ironsides-heavy-mobile-regiment"
  },
  "ca_stingers_security_tactical_unit": {
    name: "Stingers, Security Tactical Unit", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Assault Pistol",       cost:  26, swc: 0 },
      { name: "Heavy Machine Gun+Assault Pistol",          cost:  30, swc: 1 },
      { name: "Combi Rifle+D-Charges",                     cost:  25, swc: 0 },
      { name: "MULTI Rifle+Flash Pulse",                   cost:  25, swc: 0 },
      { name: "MULTI Marksman Rifle+Assault Pistol",       cost:  29, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [201,267,28,211,83,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/stingers-security-tactical-unit"
  },
  "ca_wraith_1_clandestine_action_group": {
    name: "Wraith-1, Clandestine Action Group", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+Boarding Pistol",        cost:  28, swc: 1.5 },
      { name: "MULTI Marksman Rifle+Boarding Pistol",      cost:  27, swc: 0.5 },
      { name: "MULTI Marksman Rifle+Boarding Pistol",      cost:  25, swc: 0.5 },
    ]
    , skills: [84,162,28,156,191,238,161]
    , equips: [114,184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/wraith-1-clandestine-action-group"
  },
  "ca_drakios_team_achilles_dragon": {
    name: "Drakios, Team Achilles' dragon", type: "MI",
    mov: "15-5", cc: 21, bs: 13, ph: 13, wip: 13, arm: 2, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "MULTI Rifle+Heavy Flamethrower",            cost:  37, swc: 0 },
      { name: "Mk12+Heavy Flamethrower",                   cost:  39, swc: 0 },
      { name: "Red Fury+Heavy Flamethrower",               cost:  39, swc: 1 },
      { name: "MULTI Rifle+Heavy Flamethrower",            cost:  31, swc: 0 },
      { name: "Mk12+Heavy Flamethrower",                   cost:  33, swc: 0 },
      { name: "Red Fury+Heavy Flamethrower",               cost:  33, swc: 1 },
    ]
    , skills: [19,201,189,262,164,58,83,263,261,84,38,243]
    , equips: [183,246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/drakios-team-achilles-dragon"
  },
  "ca_harbingers_new_mankind_defense_infantry": {
    name: "Harbingers, New Mankind Defense Infantry", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Zapper",                        cost:  13, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  20, swc: 1 },
      { name: "Missile Launcher",                          cost:  18, swc: 1.5 },
      { name: "AP Marksman Rifle+Zapper",                  cost:  17, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  15, swc: 0 },
      { name: "Vulkan Shotgun+Zapper",                     cost:  18, swc: 0.5 },
      { name: "Vulkan Shotgun+Zapper",                     cost:  14, swc: 0 },
      { name: "AP Submachine Gun+Zapper",                  cost:  13, swc: 0 },
      { name: "Combi Rifle+Zapper Lt.L1",                  cost:  13, swc: 0 },
      { name: "Combi Rifle+Zapper",                        cost:  17, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,40,262,201,260,189,1000,56,59,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/harbingers-new-mankind-defense-infantry"
  },
  "ca_raindancers_light_assault_company": {
    name: "Raindancers, Light Assault Company", type: "LI",
    mov: "15-5", cc: 23, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Chain Rifle",                cost:  18, swc: 0 },
      { name: "Red Fury+Chain Rifle",                      cost:  24, swc: 1 },
      { name: "Contender+Chain Rifle",                     cost:  20, swc: 0.5 },
      { name: "Light Shotgun+Chain Rifle",                 cost:  19, swc: 0 },
      { name: "Light Shotgun+Chain Rifle",                 cost:  23, swc: 0.5 },
    ]
    , skills: [21,40,28,164,83,201,161,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/raindancers-light-assault-company"
  },
  "ca_cliff_jumpers_extreme_jump_unit": {
    name: "Cliff-Jumpers, Extreme Jump Unit", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Heavy Flamethrower",          cost:  21, swc: 0, ocultable: true },
      { name: "Submachine Gun+Zapper",                     cost:  23, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  22, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [201,40,28,33,35,74,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/next-wave/cliff-jumpers-extreme-jump-unit"
  },
  "ca_patroclus_team_achilles_shadow": {
    name: "Patroclus, Team Achilles' shadow", type: "HI",
    mov: "15-10", cc: 22, bs: 13, ph: 13, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Pulzar",              cost:  35, swc: 1, ocultable: true },
      { name: "MULTI Marksman Rifle+Pulzar",               cost:  43, swc: 0, ocultable: true },
      { name: "MULTI Marksman Rifle+Pulzar",               cost:  35, swc: 0, ocultable: true },
      { name: "Heavy Rocket Launcher+Pulzar",              cost:  31, swc: 1.5, ocultable: true },
      { name: "Heavy Rocket Launcher+Pulzar",              cost:  36, swc: 1, ocultable: true },
      { name: "MULTI Marksman Rifle+Pulzar",               cost:  40, swc: 0, ocultable: true },
    ]
    , ltSkills: ["coc"]
    , isHolomask: true
    , skills: [21,84,40,250,189,86,164,264,261,191,161,201,26]
    , equips: [24,108]
    , armyUrl: "https://infinityuniverse.com/army/infinity/combined-army/patroclus-team-achilles-shadow"
  },

  // ─────────────────────────────────────────────────────────────────
  // Aleph y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "aleph_netrods": {
    name: "Netrods", type: "LI",
    mov: "-1--1", cc: -1, bs: -1, ph: -1, wip: -1, arm: 0, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Default",                                   cost:   6, swc: 0 },
    ]
    , skills: [267,35,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/netrods"
  },
  "aleph_riksha_tacbots": {
    name: "Riksha Tacbots", type: "REM",
    mov: "15-5", cc: 13, bs: 13, ph: 10, wip: 13, arm: 3, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Chain-colt",               cost:  18, swc: 0 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  20, swc: 1.5 },
      { name: "Red Fury",                                  cost:  24, swc: 1 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  20, swc: 0 },
    ]
    , skills: [235,84,40,28,58,59]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/riksha-tacbots"
  },
  "aleph_dawon_tacbots": {
    name: "Dawon Tacbots", type: "REM",
    mov: "15-10", cc: 22, bs: 11, ph: 13, wip: 12, arm: 1, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Chain Rifle+Flammenspeer",                  cost:  20, swc: 0 },
      { name: "Pulzar+Blitzen",                            cost:  19, swc: 0 },
      { name: "Boarding Shotgun+MULTI Pistol",             cost:  20, swc: 0 },
      { name: "Chain Rifle+Flammenspeer",                  cost:  19, swc: 0 },
      { name: "Pulzar+Blitzen",                            cost:  18, swc: 0 },
    ]
    , skills: [235,20,40,162,85,83]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/dawon-tacbots"
  },
  "aleph_zayin_rebots": {
    name: "Zayin Rebots", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  24, swc: 1 },
      { name: "Thunderbolt",                               cost:  19, swc: 0 },
    ]
    , skills: [235,84,61,82]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/zayin-rebots"
  },
  "aleph_satrah_unit": {
    name: "Satrah Unit", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Thunderbolt+Pulzar",                        cost:  24, swc: 0 },
      { name: "MULTI Marksman Rifle+Pulzar",               cost:  24, swc: 0 },
      { name: "Submachine Gun+Pulzar",                     cost:  20, swc: 0 },
    ]
    , isHacker: true
    , skills: [164,82,1000]
    , equips: [183,115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/satrah-unit"
  },
  "aleph_post_humans": {
    name: "Posthumans", type: "LI",
    mov: "10-10", cc: 13, bs: 13, ph: 11, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  14, swc: 0.5 },
      { name: "Combi Rifle+Nanopulser",                    cost:  13, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  26, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun",                          cost:  22, swc: 0.5, ocultable: true },
      { name: "Heavy Machine Gun+Nanopulser",              cost:  30, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Submachine Gun",      cost:  26, swc: 1.5 },
      { name: "Mk12",                                      cost:  21, swc: 0.5 },
      { name: "Submachine Gun+Flash Pulse",                cost:  13, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [252,84,28,86,1000,49,53,191,29,47,164,58,201,162,161,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/posthumans"
  },
  "aleph_nagas": {
    name: "Nagas", type: "SK",
    mov: "10-10", cc: 16, bs: 12, ph: 12, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+Nanopulser",             cost:  29, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+Nanopulser",               cost:  25, swc: 0.5, ocultable: true },
      { name: "AP Submachine Gun+Nanopulser",              cost:  27, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Nanopulser",              cost:  29, swc: 0.5, ocultable: true },
      { name: "AP Submachine Gun+Nanopulser",              cost:  25, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Nanopulser",              cost:  26, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,84,29,47,28,164,85,58,201,56,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/shock-army-of-acontecimento/nagas"
  },
  "aleph_dasyus": {
    name: "Dasyus", type: "SK",
    mov: "15-5", cc: 16, bs: 13, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Pulzar",                   cost:  28, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle+Pulzar",                 cost:  34, swc: 1.5, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  31, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  33, swc: 0.5, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  29, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Pulzar",                  cost:  30, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [201,191,84,29,238,28,47,162,164,58,1000,59,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/dasyus"
  },
  "aleph_apsaras": {
    name: "Apsaras", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Zapper",                     cost:  17, swc: 0 },
      { name: "Submachine Gun+Zapper",                     cost:  20, swc: 1 },
      { name: "Submachine Gun+Zapper",                     cost:  18, swc: 0 },
      { name: "Submachine Gun+Zapper Lt.L1",               cost:  20, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [1000,255,270,119]
    , equips: [145]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/apsaras"
  },
  "aleph_shukra_consultants": {
    name: "Shukra Consultants", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun",                          cost:  21, swc: 0 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  26, swc: 0 },
    ]
    , ltSkills: ["coc", "ci"]
    , skills: [207,84,131,26]
    , equips: [184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/shukra-consultants"
  },
  "aleph_penthesilea_amazon_warrioress": {
    name: "Penthesilea, Amazon Warrioress", type: "WB",
    mov: "20-15", cc: 23, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 2, str: 0, s: 4,
    profiles: [
      { name: "AP Submachine Gun+Zapper",                  cost:  28, swc: 0 },
    ]
    , skills: [256,240,84,40,28,189,268,162]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/penthesilea"
  },
  "aleph_ekdromoi": {
    name: "Ekdromoi", type: "MI",
    mov: "10-10", cc: 22, bs: 12, ph: 13, wip: 14, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+AP Heavy Pistol",               cost:  23, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Flash Pulse",                cost:  25, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [21,84,33,35,164,40,74,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/ekdromoi"
  },
  "aleph_thorakitai": {
    name: "Thorakitai", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+E/Mitter",                   cost:  12, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  14, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  13, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  14, swc: 0 },
      { name: "Feuerbach+Nanopulser",                      cost:  23, swc: 1.5 },
    ]
    , skills: [59,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/thorakitai"
  },
  "aleph_sharvara_houndbots": {
    name: "Sharvara HoundBots", type: "REM",
    mov: "15-15", cc: 22, bs: 11, ph: 12, wip: 12, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Light Shotgun+Heavy Riotstopper",           cost:  17, swc: 0 },
      { name: "Adhesive Launcher Rifle+Light Shotgun",     cost:  19, swc: 0 },
      { name: "Adhesive Launcher Rifle+Heavy Riotstopper", cost:  15, swc: 0 },
    ]
    , skills: [235,240,84,161,40,39,28,164,74]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/sharvara-houndbots"
  },
  "aleph_arjuna_unit": {
    name: "Arjuna Unit", type: "MI",
    mov: "15-5", cc: 17, bs: 13, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Flash Pulse",              cost:  21, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  32, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  25, swc: 0 },
      { name: "Spitfire+D-Charges",                        cost:  30, swc: 1.5 },
      { name: "Spitfire+D-Charges",                        cost:  42, swc: 1.5 },
      { name: "Spitfire+D-Charges",                        cost:  35, swc: 1.5 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  23, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  33, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  26, swc: 0 },
    ]
    , skills: [162,28,189,40,213,83,161,243,84]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/arjuna-unit"
  },
  "aleph_hoplites_heavy_regiment": {
    name: "Hoplites", type: "HI",
    mov: "15-5", cc: 20, bs: 13, ph: 13, wip: 13, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Pulzar",                  cost:  40, swc: 1.5 },
      { name: "Red Fury+Pulzar",                           cost:  37, swc: 1 },
      { name: "MULTI Rifle+Pulzar",                        cost:  36, swc: 0 },
      { name: "MULTI Rifle+Pulzar",                        cost:  39, swc: 0 },
      { name: "MULTI Rifle+Pulzar",                        cost:  42, swc: 0 },
      { name: "Heavy Machine Gun+Pulzar Lt.L1",            cost:  40, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [240,40,39,162,262,83,189,49,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/hoplites"
  },
  "aleph_maruts": {
    name: "Maruts", type: "TAG",
    mov: "15-10", cc: 18, bs: 15, ph: 17, wip: 15, arm: 8, bts: 9, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  86, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower Lt.L1", cost:  90, swc: 2 },
    ]
    , ltSkills: ["s2", "lt2"]
    , skills: [235,84,40,254,213,58,240,201,119,70,28,189,243]
    , equips: [239,115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/maruts"
  },
  "aleph_daleth_rebots": {
    name: "Daleth Rebots", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0 },
    ]
    , skills: [235,84,242,59,65,82,213]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/daleth-rebots"
  },
  "aleph_thyreos_thyreophoroi_mobile_regiment": {
    name: "Thyreos, Thyreophoroi Mobile Regiment", type: "LI",
    mov: "15-5", cc: 21, bs: 12, ph: 10, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  22, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  21, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  22, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  22, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  26, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  25, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [240,161,40,39,28,164,83,191,29,56,59,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/thyreos"
  },
  "aleph_yadu_troopers_tactical_assault_teams": {
    name: "Yadu Troopers, Tactical Assault Teams", type: "MI",
    mov: "15-5", cc: 15, bs: 13, ph: 11, wip: 14, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+E/Marat",                       cost:  28, swc: 0 },
      { name: "Heavy Rocket Launcher+Submachine Gun",      cost:  26, swc: 1.5 },
      { name: "Boarding Shotgun+E/Marat",                  cost:  27, swc: 0.5 },
      { name: "MULTI Rifle+E/Marat",                       cost:  27, swc: 0 },
      { name: "Heavy Machine Gun+E/Marat",                 cost:  34, swc: 1.5 },
      { name: "MULTI Rifle+E/Marat Lt.L1",                 cost:  28, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,162,122,86,267,1000,59,211,119]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/yadu"
  },
  "aleph_k2_auxiliars": {
    name: "K2 Auxiliars", type: "HI",
    mov: "10-10", cc: 18, bs: 11, ph: 12, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "E/Marat+Flash Pulse",                       cost:  11, swc: 0 },
      { name: "Flash Pulse+Mine Dispenser",                cost:  12, swc: 0 },
      { name: "E/Marat+Flash Pulse",                       cost:  18, swc: 0 },
    ]
    , skills: [84,86,235,33,74,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/k2-auxiliars"
  },
  "aleph_myrmidons": {
    name: "Myrmidons", type: "WB",
    mov: "10-10", cc: 21, bs: 12, ph: 13, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  23, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  24, swc: 0 },
      { name: "Spitfire+Nanopulser",                       cost:  30, swc: 1 },
      { name: "Chain Rifle+Nanopulser",                    cost:  16, swc: 0 },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:  21, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  29, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [250,21,84,40,28,164,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/myrmidons"
  },
  "aleph_probots": {
    name: "Probots", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   8, swc: 0 },
      { name: "PARA CC Weapon",                            cost:  14, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  17, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,84,1000,61]
    , equips: [91]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/probots"
  },
  "aleph_sophotects": {
    name: "Sophotects", type: "MI",
    mov: "15-10", cc: 13, bs: 11, ph: 11, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Pulzar",                     cost:  25, swc: 0 },
      { name: "Combi Rifle+Pulzar",                        cost:  32, swc: 0 },
      { name: "Submachine Gun+Pulzar",                     cost:  30, swc: 0 },
    ]
    , skills: [84,49,53,86,162,40,263]
    , equips: [245,237,106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/sophotects"
  },
  "aleph_artalis_unit": {
    name: "Artalis Unit", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Rocket Launcher",         cost:  27, swc: 0 },
      { name: "K1 Combi Rifle+D-Charges",                  cost:  23, swc: 0 },
      { name: "MULTI Rifle+D-Charges",                     cost:  23, swc: 0 },
    ]
    , skills: [201,40,162,211,49,53]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/artalis-unit"
  },
  "aleph_agema_marksmen": {
    name: "Agêma Marksmen", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle",                        cost:  27, swc: 1.5 },
      { name: "Missile Launcher+Pulzar",                   cost:  27, swc: 1.5 },
    ]
    , skills: [84,191,238,29,215]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/agema-marksmen"
  },
  "aleph_kinnara_scoutbots": {
    name: "Kinnara Scoutbots", type: "REM",
    mov: "15-5", cc: 23, bs: 12, ph: 12, wip: 12, arm: 1, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Heavy Flamethrower",         cost:  25, swc: 0.5 },
      { name: "Vulkan Shotgun+Heavy Flamethrower",         cost:  24, swc: 0 },
      { name: "Submachine Gun+E/M Carbine",                cost:  24, swc: 0 },
    ]
    , skills: [20,191,84,40,28,65,215,164,82,189,58,235,47,56,33]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/kinnara-scoutbots"
  },
  "aleph_lamedh_rebots": {
    name: "Lamedh Rebots", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/lamedh-rebots"
  },
  "aleph_samekh_rebots": {
    name: "Samekh Rebots", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
    ]
    , skills: [235,84,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/samekh-rebots"
  },
  "aleph_asuras": {
    name: "Asuras", type: "HI",
    mov: "15-5", cc: 20, bs: 14, ph: 14, wip: 15, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Spitfire+Pulzar",                        cost:  61, swc: 1.5 },
      { name: "MULTI Marksman Rifle+Pulzar",               cost:  63, swc: 0.5 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  65, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,86,1000,119]
    , equips: [241,116]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/asuras"
  },
  "aleph_chandra_specialist_operative_trisha_n33": {
    name: "Chandra Specialist Operative Trisha N33", type: "LI",
    mov: "15-5", cc: 17, bs: 12, ph: 10, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Pulzar",                cost:  24, swc: 0 },
    ]
    , skills: [84,49,162,85]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/trisha-n33"
  },
  "aleph_rudras_gunbots": {
    name: "Rudras GunBots", type: "REM",
    mov: "15-5", cc: 11, bs: 13, ph: 11, wip: 12, arm: 4, bts: 6, w: 0, str: 2, s: 4,
    profiles: [
      { name: "K1 Marksman Rifle+Pulzar",                  cost:  35, swc: 0 },
      { name: "Red Fury+Pulzar",                           cost:  38, swc: 1 },
      { name: "Red Fury+Pulzar",                           cost:  37, swc: 1 },
    ]
    , skills: [235,201,84,162,275,82]
    , equips: [241,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/rudras-gunbots"
  },
  "aleph_yaksha_tacbots": {
    name: "Yaksha Tacbots", type: "REM",
    mov: "15-5", cc: 14, bs: 13, ph: 10, wip: 13, arm: 4, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "AP Submachine Gun+Light Flamethrower",      cost:  23, swc: 0, ocultable: true },
      { name: "E/M Carbine+Light Flamethrower",            cost:  25, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Light Flamethrower",       cost:  27, swc: 0, ocultable: true },
      { name: "Red Fury+Light Flamethrower",               cost:  31, swc: 1, ocultable: true },
    ]
    , skills: [235,191,29,84,161,28,58,56,189]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/yaksha-tacbots"
  },
  "aleph_tarksia_interception_wing": {
    name: "Tarkshya Interception Wing", type: "t8",
    mov: "20-5", cc: -1, bs: 13, ph: 12, wip: 13, arm: 4, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Red Fury+Chain Rifle",                cost:  41, swc: 1.5 },
      { name: "MULTI Marksman Rifle+AP Submachine Gun",    cost:  38, swc: 0 },
      { name: "MULTI Marksman Rifle+Chain Rifle",          cost:  34, swc: 0 },
    ]
    , skills: [235,265,201,84,40,28,264,74,275,58,246,254,59]
    , equips: [241,114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/tarkshya-interception-wing"
  },
  "aleph_myrmidon_officer": {
    name: "Myrmidon Officer", type: "WB",
    mov: "10-10", cc: 23, bs: 12, ph: 13, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Nanopulser",               cost:  31, swc: 0.5 },
      { name: "AP Submachine Gun+Nanopulser",              cost:  30, swc: 0.5 },
      { name: "Boarding Shotgun+Nanopulser Lt.L1",         cost:  26, swc: 0 },
      { name: "AP Submachine Gun+Nanopulser Lt.L1",        cost:  25, swc: 0 },
    ]
    , ltSkills: ["coc", "lt2"]
    , skills: [250,21,84,40,28,164,86,162,26,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/myrmidon-officer"
  },
  "aleph_makhai_steel_phalanx_s_operative_unit": {
    name: "Makhai, Steel Phalanx's Operative Unit", type: "MI",
    mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Zapper",               cost:  30, swc: 0 },
      { name: "Missile Launcher+Zapper",                   cost:  31, swc: 1.5 },
      { name: "Red Fury+Zapper",                           cost:  31, swc: 1 },
      { name: "K1 Combi Rifle+Zapper",                     cost:  29, swc: 0 },
    ]
    , skills: [84,28,164,213,59]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/makhai"
  },
  "aleph_ajax_the_great_myrmidon_officer": {
    name: "Ajax the Great, Myrmidon Officer", type: "HI",
    mov: "10-10", cc: 24, bs: 13, ph: 16, wip: 12, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  39, swc: 0 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  45, swc: 0 },
    ]
    , skills: [201,21,84,40,39,28,164,86,256,24,268,161]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/ajax-the-great-myrmidon-officer"
  },
  "aleph_scylla_steel_phalanx_s_sergeant": {
    name: "Scylla, Steel Phalanx's Sergeant", type: "MI",
    mov: "10-10", cc: 20, bs: 12, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Scylla FTO & Charybdis FTO",                cost:  37, swc: 0.5 },
      { name: "E/Mitter+Light Shotgun",                    cost:  32, swc: 0.5 },
      { name: "E/Mitter+Light Shotgun",                    cost:  25, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [84,162,58,1000,243,235]
    , equips: [241,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/shock-army-of-acontecimento/scylla"
  },
  "aleph_nesaie_alke_thorakitai_warrant_officer": {
    name: "Nesaie Alkê, Thorakitai Warrant Officer", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 14, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Pulzar",                        cost:  27, swc: 0 },
      { name: "AP Spitfire+Pulzar",                        cost:  31, swc: 1.5 },
      { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  29, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [40,262,162,189,83,211,119]
    , equips: [238,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/nesaie-alke"
  },
  "aleph_dactyls": {
    name: "Dactyls", type: "MI",
    mov: "10-10", cc: 19, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Adhesive Launcher Rifle",       cost:  20, swc: 0 },
      { name: "Combi Rifle+Flammenspeer",                  cost:  19, swc: 0 },
      { name: "Combi Rifle+Flammenspeer",                  cost:  20, swc: 0 },
      { name: "Combi Rifle+Flammenspeer",                  cost:  23, swc: 0 },
    ]
    , skills: [84,85,49,53]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/dactyls"
  },
  "aleph_eudoros_myrmidon_officer": {
    name: "Eudoros, Myrmidon Officer", type: "HI",
    mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 14, arm: 3, bts: 6, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Mk12+Nanopulser",                           cost:  36, swc: 0 },
    ]
    , skills: [22,84,40,28,122,189,164,256,211,268]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/eudoros-myrmidon-officer"
  },
  "aleph_machaon_myrmidon_doctor_officer": {
    name: "Machaon, Myrmidon Doctor-Officer", type: "WB",
    mov: "10-10", cc: 22, bs: 12, ph: 13, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  37, swc: 0.5 },
      { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  37, swc: 0.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [21,84,40,250,162,53,28,164,86,119]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/machaon"
  },
  "aleph_acmon_sergeant_of_dactyls": {
    name: "Acmon, Sergeant of Dactyls", type: "MI",
    mov: "10-10", cc: 20, bs: 13, ph: 11, wip: 14, arm: 2, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Panzerfaust",                   cost:  31, swc: 0 },
    ]
    , skills: [84,49,213]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/acmon-sergeant-of-dactyls"
  },
  "aleph_atalanta_agema_s_nco": {
    name: "Atalanta, Agêma's NCO", type: "MI",
    mov: "10-10", cc: 15, bs: 15, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle",                        cost:  38, swc: 1.5 },
      { name: "MULTI Sniper Rifle",                        cost:  41, swc: 1.5 },
    ]
    , skills: [201,84,162,156,191,238,61]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/atalanta-agema-s-nco"
  },
  "aleph_thamyris_the_aoidos": {
    name: "Thamyris the Aoidos", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 12, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "E/Mitter+Pitcher",                          cost:  27, swc: 0.5 },
      { name: "E/Mitter+Pitcher",                          cost:  28, swc: 0.5 },
      { name: "Pitcher+Pulzar",                            cost:  21, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [40,86,272,1000,56]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/thamyris-the-aoidos"
  },
  "aleph_chandra_sergeant_thrasymedes": {
    name: "Chandra Sergeant Thrasymedes", type: "MI",
    mov: "10-10", cc: 19, bs: 12, ph: 13, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+E/Mitter",                    cost:  28, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  28, swc: 0 },
    ]
    , skills: [250,84,40,28,59,164,47,215]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/chandra-sergeant-thrasymedes"
  },
  "aleph_agamemnon_the_atreides": {
    name: "Agamemnon the Atreides", type: "TAG",
    mov: "15-10", cc: 20, bs: 14, ph: 15, wip: 14, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "AP Heavy Machine Gun+Heavy Flamethrower",   cost:  65, swc: 1.5 },
      { name: "AP Spitfire+Heavy Flamethrower",            cost:  63, swc: 1.5 },
      { name: "AP Heavy Machine Gun+Heavy Flamethrower Lt.L1", cost:  65, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [235,240,40,254,39,213,83,201,119,84,28,189,243]
    , equips: [239,241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/agamemnon-the-atreides"
  },
  "aleph_phoenix_veteran_myrmidon_officer": {
    name: "Phoenix, Veteran Myrmidon Officer", type: "WB",
    mov: "10-10", cc: 23, bs: 13, ph: 13, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Nanopulser",          cost:  32, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Nanopulser Lt.L1",    cost:  32, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [21,84,40,162,28,164,86,267,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/phoenix-veteran-myrmidon-officer"
  },
  "aleph_shakti_yadu_officer": {
    name: "Yadu Officer Shakti", type: "MI",
    mov: "15-5", cc: 16, bs: 13, ph: 11, wip: 14, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Mk12+E/Marat",                              cost:  35, swc: 0 },
      { name: "Mk12+E/Marat",                              cost:  37, swc: 0 },
      { name: "Mk12+E/Marat Lt.L1",                        cost:  35, swc: 0 },
      { name: "Mk12+E/Marat Lt.L1",                        cost:  37, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,122,267,1000,119]
    , equips: [183,145]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/yadu-officer-shakti"
  },

  // ─────────────────────────────────────────────────────────────────
  // Non-Aligned Armies (Sectoriales)
  // ─────────────────────────────────────────────────────────────────
  "unk_brawlers_mercenary_enforcers": {
    name: "Brawlers, Mercenary Enforcers", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 12, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  15, swc: 0 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  15, swc: 1.5 },
      { name: "MULTI Sniper Rifle+AP Mine",                cost:  25, swc: 1.5 },
      { name: "Submachine Gun+Cybermine",                  cost:  16, swc: 0.5 },
      { name: "Rifle+Light Shotgun",                       cost:  19, swc: 0 },
      { name: "Rifle+Light Shotgun Lt.L1",                 cost:  15, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [67,1000,49,53,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/druze/brawlers-mercenary-enforcers"
  },
  "unk_kiiutan_imposters": {
    name: "Kiiutan Imposters", type: "SK",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 13, arm: 2, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Zapper",                        cost:  29, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+E/Mitter",                   cost:  27, swc: 0.5, ocultable: true },
    ]
    , isImpersonator: true
    , skills: [191,84,40,164,249,246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/tohaa/kiiutan-imposters"
  },
  "unk_hardcases_2nd_irregular_frontiersmen_battalion": {
    name: "Hardcases, 2nd Irregular Frontiersmen Battalion", type: "SK",
    mov: "10-10", cc: 15, bs: 11, ph: 13, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Tactical Bow+Light Shotgun",                cost:  12, swc: 0, ocultable: true },
      { name: "Tactical Bow+Rifle",                        cost:  14, swc: 0, ocultable: true },
    ]
    , skills: [191,29,47,28,58,215,164]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/hardcases"
  },
  "unk_chaksa_longarms": {
    name: "Chaksa Longarms", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 12, wip: 12, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Pulzar",                        cost:  21, swc: 0 },
      { name: "Portable Autocannon+Pulzar",                cost:  29, swc: 1.5 },
      { name: "Missile Launcher+Pulzar",                   cost:  24, swc: 1.5 },
      { name: "Mk12+Pulzar",                               cost:  25, swc: 0 },
    ]
    , skills: [201,162,67,83,58,220]
    , armyUrl: "https://infinityuniverse.com/army/infinity/svalarheima-s-winter-force/chaksa-longarms"
  },

  // ─────────────────────────────────────────────────────────────────
  // O-12 y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "o12_stormbots": {
    name: "StormBots", type: "REM",
    mov: "15-10", cc: 13, bs: 13, ph: 10, wip: 13, arm: 3, bts: 6, w: 0, str: 2, s: 4,
    profiles: [
      { name: "Heavy Rocket Launcher+Pulzar",              cost:  31, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Pulzar",              cost:  29, swc: 1.5 },
      { name: "Combi Rifle+Pulzar",                        cost:  33, swc: 0 },
    ]
    , skills: [201,84,235]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/stormbots"
  },
  "o12_kytta_copperbots": {
    name: "Kyttä  Copperbots", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/kyttae-copperbots"
  },
  "o12_millicent_copperbots": {
    name: "Millicent Copperbots", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
    ]
    , skills: [235,201,84]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/millicent-copperbots"
  },
  "o12_cyberghosts_quantronic_intervention_unit": {
    name: "Cyberghosts, Quantronic Intervention Unit", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 14, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Pitcher",                       cost:  21, swc: 0.5 },
      { name: "Combi Rifle+Pitcher",                       cost:  18, swc: 0 },
    ]
    , isHacker: true
    , skills: [164,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/cyberghosts"
  },
  "o12_crushers_special_naval_demolition_team": {
    name: "Crushers, Special Naval Demolition Team", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Flash Pulse",                   cost:  31, swc: 0 },
      { name: "Submachine Gun+Flash Pulse",                cost:  25, swc: 0 },
      { name: "Submachine Gun+Light Rocket Launcher",      cost:  31, swc: 0.5 },
      { name: "Boarding Shotgun+Panzerfaust",              cost:  27, swc: 0 },
    ]
    , skills: [84,162,28,59,86,58,161,35,74,33]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/crushers"
  },
  "o12_team_sirius": {
    name: "Team Sirius", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun",                          cost:  20, swc: 0 },
      { name: "Red Fury",                                  cost:  28, swc: 1 },
      { name: "Submachine Gun",                            cost:  24, swc: 0.5 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  21, swc: 0 },
    ]
    , isHacker: true
    , skills: [161,28,1000,59,243,84]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/team-sirius"
  },
  "o12_ment_agents_psid": {
    name: "Ment Agents", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Riotstopper+Assault Pistol",          cost:  15, swc: 0 },
      { name: "Light Shotgun",                             cost:  15, swc: 0 },
      { name: "Heavy Riotstopper+Assault Pistol",          cost:  14, swc: 0 },
      { name: "Light Shotgun",                             cost:  20, swc: 0.5 },
    ]
    , ltSkills: ["coc"]
    , isHacker: true
    , skills: [26,164,122,1000]
    , equips: [184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/ment-agents"
  },
  "o12_cuervo_goldstein_basilisk_level_delta": {
    name: "Cuervo Goldstein, Basilisk Level Delta", type: "MI",
    mov: "10-10", cc: 23, bs: 13, ph: 13, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  33, swc: 0, ocultable: true },
      { name: "Submachine Gun+Akrylat-Kanone",             cost:  33, swc: 0, ocultable: true },
    ]
    , skills: [22,84,162,33,35,164,86,74]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/cuervo-goldstein-basilisk-level-delta"
  },
  "o12_vidocq_multipurpose_security_brigade": {
    name: "Vidocq", type: "LI",
    mov: "10-10", cc: 16, bs: 13, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  15, swc: 0 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  19, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  26, swc: 1.5 },
      { name: "MULTI Sniper Rifle",                        cost:  30, swc: 1.5 },
    ]
    , skills: [28,164,211,58,53,191,29]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/vidocq"
  },
  "o12_silverstar_rovers": {
    name: "Silverstar Rovers", type: "HI",
    mov: "15-5", cc: 16, bs: 13, ph: 12, wip: 13, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Riotstopper",             cost:  27, swc: 0 },
      { name: "MULTI Rifle+Light Riotstopper",             cost:  28, swc: 0 },
      { name: "Combi Rifle+Light Riotstopper",             cost:  28, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  37, swc: 1.5 },
      { name: "Combi Rifle+Light Riotstopper",             cost:  30, swc: 0 },
      { name: "Missile Launcher",                          cost:  31, swc: 1.5 },
      { name: "MULTI Rifle+Light Riotstopper Lt.L1",       cost:  28, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,40,189,263,59,64,213,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/silverstar-rovers"
  },
  "o12_hellblazers_cqb_spec_unit": {
    name: "Hellblazers, CQB Spec. Unit", type: "HI",
    mov: "15-5", cc: 22, bs: 12, ph: 13, wip: 13, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Flammenspeer",                cost:  18, swc: 0 },
      { name: "Submachine Gun+Blitzen",                    cost:  19, swc: 0 },
      { name: "Boarding Shotgun+Akrylat-Kanone",           cost:  19, swc: 0 },
    ]
    , skills: [20,84,40,164,256,268,263]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/hellblazers-cqb-spec-unit"
  },
  "o12_ensign_katherine_cho_psi_unit": {
    name: "Ensign Katherine Cho, Psi Unit", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  20, swc: 0, ocultable: true },
      { name: "MULTI Rifle+Nanopulser Lt.L1",              cost:  15, swc: 0, ocultable: true },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHolomask: true
    , skills: [162,26,119]
    , equips: [24]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/ensign-katherine-cho-psi-unit"
  },
  "o12_wreckers_fire_recon_armored_squadron": {
    name: "Wreckers, Fire Recon Armored Squadron", type: "TAG",
    mov: "15-10", cc: 18, bs: 13, ph: 15, wip: 13, arm: 6, bts: 9, w: 0, str: 3, s: 6,
    profiles: [
      { name: "Heavy Machine Gun+Chain Rifle",             cost:  57, swc: 1.5 },
      { name: "Spitfire+Chain Rifle",                      cost:  55, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Chain Rifle",         cost:  51, swc: 1.5 },
    ]
    , skills: [201,84,40,235,213,58,254,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/wreckers-fire-recon-armored-squadron"
  },
  "o12_fuzzbots": {
    name: "FuzzBots", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   8, swc: 0 },
      { name: "PARA CC Weapon",                            cost:  14, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  17, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,84,1000,61]
    , equips: [91]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/fuzzbots"
  },
  "o12_clandestine_action_unit_nightshades": {
    name: "Nightshades", type: "SK",
    mov: "10-10", cc: 22, bs: 12, ph: 12, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  32, swc: 0, ocultable: true },
      { name: "Submachine Gun+Drop Bears",                 cost:  31, swc: 0, ocultable: true },
      { name: "Submachine Gun+Drop Bears",                 cost:  34, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  32, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [21,29,84,161,28,164,74,58,191,238,1000,56]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/nightshades"
  },
  "o12_kappa_unit": {
    name: "Kappa Unit", type: "LI",
    mov: "10-10", cc: 14, bs: 12, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  12, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  20, swc: 1 },
      { name: "MULTI Sniper Rifle",                        cost:  18, swc: 1 },
      { name: "Missile Launcher",                          cost:  17, swc: 1.5 },
      { name: "Submachine Gun",                            cost:  13, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  14, swc: 0 },
      { name: "Combi Rifle",                               cost:  14, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  12, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [162,1000,59,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/kappa-unit"
  },
  "o12_gangbusters_special_crime_squad": {
    name: "Gangbusters, Special Crime Squad", type: "SK",
    mov: "10-10", cc: 15, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Riotstopper",             cost:  23, swc: 0 },
      { name: "Boarding Shotgun+Chain-colt",               cost:  17, swc: 0 },
      { name: "Submachine Gun+Madtraps",                   cost:  22, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,47,56,1000]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/gangbusters-special-crime-squad"
  },
  "o12_roadbots_highway_patrol": {
    name: "RoadBots Highway Patrol", type: "REM",
    mov: "20-10", cc: 10, bs: 11, ph: 11, wip: 12, arm: 2, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Marksman Rifle+Light Shotgun",              cost:  26, swc: 0 },
      { name: "Red Fury",                                  cost:  27, swc: 1 },
      { name: "Red Fury",                                  cost:  31, swc: 1 },
      { name: "Submachine Gun+Panzerfaust",                cost:  22, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  20, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  24, swc: 0 },
    ]
    , skills: [235,84,40,28,86,58,82,246,64,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/roadbots-highway-patrol"
  },
  "o12_moonrakers_forward_remote_devices": {
    name: "Moonrakers, Forward Remote Devices", type: "REM",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 12, arm: 0, bts: 6, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Heavy Shotgun+Adhesive Launcher Rifle",     cost:  14, swc: 0, ocultable: true },
      { name: "Heavy Shotgun+Adhesive Launcher Rifle",     cost:  15, swc: 0.5, ocultable: true },
    ]
    , skills: [191,29,84,161,28,235,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/moonrakers-forward-remote-devices"
  },
  "o12_psi_cops": {
    name: "PSI-Cops", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  26, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  24, swc: 0.5 },
      { name: "Combi Rifle+Nanopulser",                    cost:  23, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  27, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  30, swc: 0 },
    ]
    , isHacker: true
    , skills: [162,28,189,262,131,1000]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/psi-cops"
  },
  "o12_firebat_attack_wing": {
    name: "Firebat Attack Wing", type: "t8",
    mov: "20-5", cc: -1, bs: 13, ph: 12, wip: 13, arm: 4, bts: 6, w: 0, str: 2, s: 7,
    profiles: [
      { name: "AP Submachine Gun+Thunderbolt",             cost:  36, swc: 0 },
      { name: "MULTI Rifle+Heavy Riotstopper",             cost:  35, swc: 0 },
    ]
    , skills: [265,84,40,254,28,264,74,58,201,211,275]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/firebat-attack-wing"
  },
  "o12_gamma_unit": {
    name: "Gamma Unit", type: "HI",
    mov: "15-5", cc: 16, bs: 14, ph: 14, wip: 13, arm: 6, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  50, swc: 1.5 },
      { name: "Feuerbach",                                 cost:  51, swc: 1.5 },
      { name: "Heavy Machine Gun Lt.L1",                   cost:  50, swc: 1.5 },
      { name: "Feuerbach Lt.L1",                           cost:  51, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,86,84,267,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/gamma-unit"
  },
  "o12_lynx_unit": {
    name: "Lynx Unit", type: "LI",
    mov: "10-10", cc: 15, bs: 13, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+Shock Mine",             cost:  31, swc: 1.5, ocultable: true },
      { name: "Shock Marksman Rifle+Shock Mine",           cost:  28, swc: 0, ocultable: true },
      { name: "Breaker Combi Rifle+Cybermine",             cost:  29, swc: 0, ocultable: true },
      { name: "Plasma Carbine+D-Charges",                  cost:  27, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,84,238,28,164,1000,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/lynx-unit"
  },
  "o12_alpha_unit": {
    name: "Alpha Unit", type: "LI",
    mov: "10-10", cc: 21, bs: 11, ph: 12, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Light Shotgun+Nanopulser",                  cost:  24, swc: 0 },
      { name: "Light Shotgun+Nanopulser Lt.L1",            cost:  24, swc: 0 },
    ]
    , ltSkills: ["coc", "s1", "lt2", "ci"]
    , skills: [20,201,207,84,131,247,26,119,69]
    , equips: [184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/alpha-unit"
  },
  "o12_zeta_unit": {
    name: "Zeta Unit", type: "TAG",
    mov: "15-10", cc: 17, bs: 14, ph: 16, wip: 13, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "Hyper-Rapid Magnetic Cannon+Heavy Riotstopper", cost:  73, swc: 2 },
      { name: "Hyper-Rapid Magnetic Cannon+Heavy Riotstopper Lt.L1", cost:  70, swc: 2 },
    ]
    , ltSkills: ["lt2"]
    , skills: [235,40,82,84,254,201,211,119,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/zeta-unit"
  },
  "o12_oko_copperbots": {
    name: "Oko Copperbots", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0 },
    ]
    , skills: [235,242,84,59,65,82,213]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/oko-copperbots"
  },
  "o12_peeler_copperbots": {
    name: "Peeler Copperbots", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  24, swc: 1 },
      { name: "Thunderbolt",                               cost:  19, swc: 0 },
    ]
    , skills: [235,84,61,82]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/peeler-copperbots"
  },
  "o12_sonya_lacroix_glo_pol_marshall": {
    name: "Sonya Lacroix, Glo-Pol Marshall", type: "MI",
    mov: "15-5", cc: 22, bs: 13, ph: 12, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+E/Mitter",                      cost:  28, swc: 0 },
      { name: "MULTI Rifle+E/Marat",                       cost:  28, swc: 0 },
      { name: "MULTI Rifle+MULTI Pistol Lt.L1",            cost:  28, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,84,162,164,58,262,189,211,119]
    , equips: [183,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/sonya-lacroix-glo-pol-marshall"
  },
  "o12_lawkeepers_badlands_patrol": {
    name: "Lawkeepers, Badlands Patrol", type: "LI",
    mov: "20-15", cc: 18, bs: 12, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Boarding Shotgun+MULTI Pistol",             cost:  18, swc: 0 },
      { name: "Red Fury+Chain Rifle",                      cost:  25, swc: 1 },
      { name: "Red Fury+Chain Rifle",                      cost:  29, swc: 1 },
      { name: "Combi Rifle+Chain Rifle",                   cost:  20, swc: 0 },
      { name: "Combi Rifle+Chain Rifle",                   cost:  24, swc: 0 },
      { name: "Red Fury+Chain Rifle",                      cost:  33, swc: 1 },
      { name: "Combi Rifle+Chain Rifle",                   cost:  28, swc: 0 },
    ]
    , skills: [201,84,40,28,256,268,189,243]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/lawkeepers-badlands-patrol"
  },
  "o12_delta_unit": {
    name: "Delta Unit", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 12, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Panzerfaust",              cost:  19, swc: 0, ocultable: true },
      { name: "Spitfire",                                  cost:  27, swc: 1, ocultable: true },
      { name: "Combi Rifle+Light Riotstopper",             cost:  24, swc: 0, ocultable: true },
      { name: "Boarding Shotgun",                          cost:  22, swc: 0, ocultable: true },
      { name: "Boarding Shotgun",                          cost:  27, swc: 0, ocultable: true },
      { name: "Combi Rifle+Light Riotstopper",             cost:  22, swc: 0, ocultable: true },
      { name: "Combi Rifle+Light Riotstopper",             cost:  26, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [33,35,74,58,1000,53,59,84,28,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/delta-unit"
  },
  "o12_specialized_support_unit_lambda": {
    name: "Specialized Support Unit Lambda", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  16, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  17, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  19, swc: 0 },
      { name: "Combi Rifle",                               cost:  16, swc: 0 },
    ]
    , skills: [49,53]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/specialized-support-unit-lambda"
  },
  "o12_jackboots": {
    name: "Jackboots", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  23, swc: 1.5 },
      { name: "D-Charges+AP Submachine Gun",               cost:  25, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  28, swc: 0 },
      { name: "Thunderbolt+E/M Carbine",                   cost:  26, swc: 0 },
      { name: "AP Submachine Gun+Light Riotstopper",       cost:  21, swc: 0 },
      { name: "Heavy Machine Gun+Light Riotstopper",       cost:  29, swc: 1 },
    ]
    , skills: [201,267,162,262,83,49,59,64,211]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/jackboots"
  },
  "o12_nimrods_wetworks_detachment": {
    name: "Nimrods Wetworks Det.", type: "MI",
    mov: "15-5", cc: 16, bs: 13, ph: 11, wip: 13, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+Flash Pulse",             cost:  27, swc: 0 },
      { name: "AP Marksman Rifle+E/M Carbine",             cost:  29, swc: 0.5 },
      { name: "Thunderbolt+Light Shotgun",                 cost:  28, swc: 0.5 },
    ]
    , skills: [162,28,164,74,58,201,191,161,238]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/nimrods-wetworks-det"
  },
  "o12_epsilon_unit": {
    name: "Epsilon Unit", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Nanopulser",              cost:  34, swc: 1.5 },
      { name: "MULTI Sniper Rifle+Nanopulser",             cost:  32, swc: 1.5 },
      { name: "Shock Marksman Rifle+Nanopulser",           cost:  29, swc: 0.5 },
    ]
    , skills: [28,162,82]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/epsilon-unit"
  },
  "o12_razor_unit": {
    name: "Razor Unit", type: "SK",
    mov: "10-10", cc: 14, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  29, swc: 0, ocultable: true },
      { name: "Combi Rifle+D-Charges",                     cost:  34, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Monofilament Mine",        cost:  31, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  29, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,238,28,47,164,58,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/razor-unit"
  },
  "o12_tinkers_maintenance_support_company": {
    name: "Tinkers, Maintenance Support Company", type: "LI",
    mov: "10-10", cc: 12, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+Flash Pulse",       cost:  11, swc: 0 },
    ]
    , skills: [189]
    , equips: [238,237,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/tinkers-maintenance-support-company"
  },
  "o12_bluecoats_naval_security_detachments": {
    name: "Bluecoats, Naval Security Detachments", type: "LI",
    mov: "10-10", cc: 20, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Heavy Riotstopper",          cost:  16, swc: 0 },
      { name: "Boarding Shotgun+Heavy Riotstopper",        cost:  17, swc: 0 },
      { name: "Adhesive Launcher Rifle+Heavy Riotstopper", cost:  13, swc: 0 },
      { name: "Adhesive Launcher Rifle+Heavy Riotstopper", cost:  16, swc: 0 },
      { name: "Red Fury+Heavy Riotstopper",                cost:  25, swc: 1 },
      { name: "Submachine Gun+Heavy Riotstopper Lt.L1",    cost:  16, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,39,67,131,119]
    , equips: [184]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/bluecoats"
  },
  "o12_omega_unit": {
    name: "Omega Unit", type: "HI",
    mov: "10-10", cc: 16, bs: 14, ph: 13, wip: 14, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Heavy Riotstopper",             cost:  37, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  42, swc: 1.5 },
      { name: "MULTI Rifle+Heavy Riotstopper Lt.L1",       cost:  37, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [28,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/omega-unit"
  },
  "o12_raptor_boarding_squad": {
    name: "Raptor Boarding Squad", type: "HI",
    mov: "15-5", cc: 16, bs: 14, ph: 12, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Heavy Shotgun+Panzerfaust",                 cost:  32, swc: 0 },
      { name: "MULTI Rifle+E/M Carbine",                   cost:  39, swc: 0 },
      { name: "MULTI Rifle+E/Mitter",                      cost:  41, swc: 0 },
      { name: "Spitfire+Boarding Pistol",                  cost:  39, swc: 1.5 },
    ]
    , isHacker: true
    , skills: [84,211,58,59,1000,243]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/raptor-boarding-squad"
  },
  "o12_betatroopers_remote_activity_unit_beta": {
    name: "Betatroopers, Remote Activity Unit Beta", type: "HI",
    mov: "15-5", cc: 16, bs: 13, ph: 12, wip: 13, arm: 3, bts: 3, w: 0, str: 2, s: 2,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  32, swc: 0 },
      { name: "Spitfire+Nanopulser",                       cost:  35, swc: 1.5 },
      { name: "Spitfire+Nanopulser",                       cost:  36, swc: 1.5 },
      { name: "Submachine Gun+Nanopulser",                 cost:  25, swc: 0 },
      { name: "Boarding Shotgun+Nanopulser",               cost:  27, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,84,40,28,82,1000,53,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/betatroopers"
  },
  "o12_arko_naval_reconaissance_special_unit": {
    name: "Ŝarko, Naval Reconaissance Special Unit", type: "SK",
    mov: "10-10", cc: 18, bs: 11, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  24, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  22, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Flash Pulse",                cost:  22, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  22, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,47,28,164,58,82,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/starmada/arko"
  },
  "o12_sekudroids_surveillance_and_security_droids": {
    name: "Sekudroids, Surveillance and Security Droids", type: "REM",
    mov: "15-5", cc: 17, bs: 11, ph: 10, wip: 13, arm: 2, bts: 6, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+Flash Pulse",       cost:  19, swc: 0 },
      { name: "Akrylat-Kanone+Flash Pulse",                cost:  18, swc: 0 },
    ]
    , skills: [235,84,28,82]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/starmada/sekudroids"
  },
  "o12_saladin_naval_liaison_officer": {
    name: "Saladin, Naval Liaison Officer", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 12, wip: 16, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Thunderbolt+E/M Carbine",                   cost:  33, swc: 0 },
      { name: "Thunderbolt+E/M Carbine Lt.L1",             cost:  34, swc: 0 },
    ]
    , ltSkills: ["coc", "s1", "lt2", "ci"]
    , skills: [84,162,86,207,215,56,26,119,69]
    , equips: [111]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/saladin-naval-liaison-officer"
  },
  "o12_nyoka_assault_troops": {
    name: "Nyoka Assault Troops", type: "LI",
    mov: "10-10", cc: 19, bs: 12, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Chain-colt",          cost:  18, swc: 1 },
      { name: "MULTI Rifle+Chain-colt",                    cost:  22, swc: 0 },
      { name: "MULTI Rifle+Chain-colt",                    cost:  27, swc: 0 },
      { name: "Red Fury+Chain-colt",                       cost:  29, swc: 1 },
    ]
    , skills: [201,84,162,58,82,59,33]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/nyoka-assault-troops"
  },
  "o12_casanova_noc_operative": {
    name: "Casanova, NOC Operative", type: "LI",
    mov: "10-10", cc: 22, bs: 13, ph: 11, wip: 13, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Nanopulser",                 cost:  31, swc: 0 },
      { name: "Submachine Gun+Nanopulser",                 cost:  32, swc: 0 },
    ]
    , skills: [20,84,40,162,28,189,164,86,215,161,56,47]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/casanova-noc-operative"
  },
  "o12_bronzes_deep_space_peacemaker_corps": {
    name: "Bronzes, Deep Space Peacemaker Corps", type: "HI",
    mov: "15-5", cc: 20, bs: 13, ph: 13, wip: 13, arm: 4, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Red Fury",                                  cost:  47, swc: 1 },
      { name: "Heavy Shotgun+Akrylat-Kanone",              cost:  41, swc: 0 },
      { name: "MULTI Rifle+Heavy Riotstopper",             cost:  43, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  48, swc: 1.5 },
    ]
    , skills: [19,84,58,82,40,162,64,189]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/bronzes"
  },
  "o12_striders_scouting_forward_unit": {
    name: "Striders, Scouting Forward Unit", type: "HI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Red Fury",                                  cost:  34, swc: 1, ocultable: true },
      { name: "Light Shotgun+Flash Pulse",                 cost:  29, swc: 0, ocultable: true },
      { name: "Submachine Gun+Shock Mine",                 cost:  27, swc: 0, ocultable: true },
      { name: "Submachine Gun+Shock Mine",                 cost:  28, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  28, swc: 0.5, ocultable: true },
    ]
    , skills: [191,29,161,162,28,86,164,211,58,59,189,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/striders-scouting-forward-unit"
  },
  "o12_jamie_arantes_netroid_handler": {
    name: "Jamie Arantes, Netroid Handler", type: "HI",
    mov: "15-5", cc: 22, bs: 13, ph: 14, wip: 14, arm: 4, bts: 9, w: 2, str: 0, s: 4,
    profiles: [
      { name: "Plasma Rifle+Akrylat-Kanone",               cost:  49, swc: 0 },
      { name: "Plasma Rifle+Akrylat-Kanone",               cost:  52, swc: 0 },
      { name: "Plasma Rifle+Akrylat-Kanone Lt.L1",         cost:  49, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [19,84,161,40,247,28,215,58,164,211,263,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/jamie-arantes-netroid-handler"
  },
  "o12_waveriders_cybercombat_team": {
    name: "Waveriders Cybercombat Team", type: "MI",
    mov: "15-5", cc: 18, bs: 12, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Pitcher",                  cost:  23, swc: 0.5 },
      { name: "Submachine Gun+Pitcher",                    cost:  22, swc: 0.5 },
      { name: "Submachine Gun+Pitcher",                    cost:  20, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,164,58,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/waveriders-cybercombat-team"
  },
  "o12_kludgers_resolution_team": {
    name: "Kludgers Resolution Team", type: "MI",
    mov: "15-5", cc: 16, bs: 13, ph: 11, wip: 14, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Panzerfaust",              cost:  23, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  23, swc: 0 },
      { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  23, swc: 0 },
    ]
    , skills: [162,28,74,58,267,49,53]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/kludgers-resolution-team"
  },
  "o12_silverstar_prime": {
    name: "Silverstar Prime", type: "HI",
    mov: "15-5", cc: 18, bs: 14, ph: 13, wip: 13, arm: 5, bts: 9, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Heavy Machine Gun+Heavy Riotstopper",       cost:  53, swc: 1.5 },
      { name: "Heavy Machine Gun+Heavy Riotstopper Lt.L1", cost:  53, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,84,213,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/silverstar-prime"
  },
  "o12_yellowjackets_transorbital_team": {
    name: "Yellowjackets Transorbital Team", type: "HI",
    mov: "10-10", cc: 15, bs: 12, ph: 12, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  25, swc: 0, ocultable: true },
      { name: "Combi Rifle+Light Riotstopper",             cost:  29, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  25, swc: 0, ocultable: true },
      { name: "Submachine Gun+D-Charges",                  cost:  29, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [40,162,28,33,35,86,164,74,189,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/o-12/yellowjackets-transorbital-team"
  },
  "o12_jamie_arantes_netroid_rover": {
    name: "Jamie Arantes, Netroid Rover", type: "HI",
    mov: "15-5", cc: 22, bs: 13, ph: 14, wip: 14, arm: 4, bts: 9, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Plasma Rifle+Akrylat-Kanone",               cost:  47, swc: 0 },
      { name: "Plasma Rifle+Akrylat-Kanone",               cost:  53, swc: 0 },
      { name: "Plasma Rifle+Akrylat-Kanone Lt.L1",         cost:  49, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [19,84,40,28,263,164,211,58,33,215,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/torchlight-brigade/jamie-arantes-netroid-rover"
  },

  // ─────────────────────────────────────────────────────────────────
  // JSA y Sectoriales
  // ─────────────────────────────────────────────────────────────────
  "jsa_sohei_tsugekitai": {
    name: "Sōhei Tsugekitai", type: "MI",
    mov: "10-10", cc: 23, bs: 11, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Grenades",                   cost:  16, swc: 0 },
      { name: "Pulzar+Grenades",                           cost:  16, swc: 0 },
    ]
    , skills: [250,21,40,162,164,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/s-hei-tsugekitai"
  },
  "jsa_miyamoto_mushashi": {
    name: "Miyamoto Mushashi", type: "WB",
    mov: "15-10", cc: 25, bs: 9, ph: 14, wip: 15, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Tactical Bow",                  cost:  21, swc: 0 },
    ]
    , skills: [23,240,84,40,162,164,86]
  },
  "jsa_shurayuki_onna_koroshi_ya": {
    name: "Shurayuki", type: "MI",
    mov: "10-10", cc: 23, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Nanopulser",                    cost:  30, swc: 0, ocultable: true },
    ]
    , isHolomask: true
    , skills: [22,201,40,162,164,86,83]
    , equips: [24,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/shurayuki"
  },
  "jsa_atom_aibot": {
    name: "Atom Aibōt", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  17, swc: 0 },
    ]
    , skills: [242,84,59,235,65]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/atom-aib-t"
  },
  "jsa_uran_aibot": {
    name: "Uran Aibōt", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
    ]
    , skills: [201,84,235]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/uran-aib-t"
  },
  "jsa_raiden_seibutai": {
    name: "Raiden Seibutai", type: "MI",
    mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Shock Mine",          cost:  25, swc: 1.5, ocultable: true },
      { name: "Missile Launcher+Shock Mine",               cost:  33, swc: 2, ocultable: true },
    ]
    , skills: [191,84,238,162,56,28]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/raiden-seibutai"
  },
  "jsa_oniwaban_shinobu_kitsune": {
    name: "Oniwaban Shinobu Kitsune", type: "SK",
    mov: "10-10", cc: 25, bs: 12, ph: 13, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  44, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  44, swc: 0.5, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , skills: [23,191,29,84,238,40,47,28,164,58,82,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/oniwaban-shinobu-kitsune"
  },
  "jsa_kyosho_saibayunitto": {
    name: "Kyoshō Saibāyunitto", type: "LI",
    mov: "10-10", cc: 17, bs: 11, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Cybermine",                     cost:  20, swc: 0.5 },
      { name: "MULTI Rifle+Cybermine",                     cost:  20, swc: 0 },
    ]
    , isHacker: true
    , skills: [1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/kyosh-saibayunitto"
  },
  "jsa_senku_troops": {
    name: "Senku Troops", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 12, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:   9, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  17, swc: 1 },
      { name: "Shock Marksman Rifle",                      cost:  11, swc: 0 },
      { name: "Combi Rifle",                               cost:  11, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  10, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:   9, swc: 0.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,260,189,59,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/senku-troops"
  },
  "jsa_nokizaru_unit": {
    name: "Nokizaru Unit", type: "SK",
    mov: "10-10", cc: 23, bs: 12, ph: 12, wip: 13, arm: 0, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Silenced Pistol",      cost:  30, swc: 0 },
      { name: "Submachine Gun+Shock Mine",                 cost:  27, swc: 0 },
      { name: "Submachine Gun+Flash Pulse",                cost:  25, swc: 0 },
    ]
    , isHacker: true
    , skills: [21,84,161,40,28,164,58,82,1000,59]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/nokizaru-unit"
  },
  "jsa_mechazoid_sokorentai": {
    name: "Mechazoid Sokorentai", type: "TAG",
    mov: "15-10", cc: 23, bs: 13, ph: 15, wip: 13, arm: 6, bts: 6, w: 0, str: 3, s: 6,
    profiles: [
      { name: "AP Heavy Machine Gun+Pulzar",               cost:  66, swc: 1.5 },
      { name: "Spitfire MULTI+Pulzar",                     cost:  69, swc: 1.5 },
      { name: "Spitfire MULTI+Pulzar Lt.L1",               cost:  69, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,201,40,254,262,213,164,82,83,119,84,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/mechazoid-sokorentai"
  },
  "jsa_hatamoto_imperial_guard": {
    name: "Hatamoto Imperial Guard", type: "HI",
    mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 13, arm: 2, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Plasma Carbine",                            cost:  34, swc: 0 },
      { name: "Red Fury",                                  cost:  40, swc: 1 },
      { name: "Spitfire",                                  cost:  41, swc: 1.5 },
      { name: "Plasma Carbine Lt.L1",                      cost:  36, swc: 1 },
      { name: "Red Fury Lt.L1",                            cost:  38, swc: 1 },
      { name: "Spitfire Lt.L1",                            cost:  39, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [22,84,40,250,39,262,28,189,164,264,211,119]
    , equips: [108,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/hatamoto-imperial-guard"
  },
  "jsa_ryuken_unit_9": {
    name: "Ryūken Unit-9", type: "MI",
    mov: "10-10", cc: 17, bs: 12, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Rocket Launcher+Shock Mine",          cost:  23, swc: 1.5 },
      { name: "Submachine Gun+Shock Mine",                 cost:  22, swc: 0.5 },
      { name: "Submachine Gun+Shock Mine",                 cost:  25, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [84,28,56,215,191,29,161,1000]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/ryuken-unit-9"
  },
  "jsa_oniwaban": {
    name: "Oniwaban", type: "SK",
    mov: "10-10", cc: 24, bs: 11, ph: 12, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Nanopulser",               cost:  30, swc: 0, ocultable: true },
      { name: "Submachine Gun+Nanopulser",                 cost:  29, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Nanopulser Lt.L1",         cost:  30, swc: 1, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , skills: [22,191,29,84,238,40,47,28,164,58,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/oniwaban"
  },
  "jsa_genbutai": {
    name: "Genbutai", type: "MI",
    mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Chain-colt",               cost:  18, swc: 0 },
      { name: "Submachine Gun+Panzerfaust",                cost:  23, swc: 0 },
      { name: "MULTI Rifle+Heavy Flamethrower",            cost:  26, swc: 0 },
      { name: "Boarding Shotgun+Chain-colt",               cost:  20, swc: 0 },
      { name: "Red Fury",                                  cost:  29, swc: 1 },
    ]
    , skills: [201,267,162,83,49,189,64,211]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/genbutai"
  },
  "jsa_shizoku_kogeki_tai": {
    name: "Shizoku Kogeki-tai", type: "HI",
    mov: "15-5", cc: 22, bs: 13, ph: 14, wip: 13, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "AP Heavy Machine Gun+Chain Rifle",          cost:  43, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  33, swc: 1.5 },
    ]
    , skills: [21,24,84,40,250,28,164]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/shizoku-kogeki-tai"
  },
  "jsa_kempeitai": {
    name: "Kempeitai", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Spitfire",                                  cost:  22, swc: 1 },
      { name: "Combi Rifle",                               cost:  20, swc: 0 },
      { name: "Boarding Shotgun",                          cost:  17, swc: 0 },
      { name: "Shock Marksman Rifle",                      cost:  22, swc: 1 },
    ]
    , ltSkills: ["coc"]
    , skills: [84,122,67,26]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/kempeitai"
  },
  "jsa_jizamurai_hanryodan": {
    name: "Jizamurai Hanryodan", type: "MI",
    mov: "15-5", cc: 23, bs: 12, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun",                             cost:  21, swc: 0 },
      { name: "Light Shotgun+E/Mitter",                    cost:  24, swc: 0 },
      { name: "Light Shotgun+Thunderbolt",                 cost:  24, swc: 0 },
      { name: "Submachine Gun",                            cost:  22, swc: 0 },
    ]
    , skills: [21,84,40,162,262,28,164,82]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/jizamurai-hanryodan"
  },
  "jsa_o_yoroi_kidobutai": {
    name: "O-Yoroi Kidobutai", type: "TAG",
    mov: "15-10", cc: 23, bs: 14, ph: 16, wip: 13, arm: 7, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  78, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower Lt.L1", cost:  78, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,201,84,40,254,56,213,164,119,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/o-yoroi-kidobutai"
  },
  "jsa_kyojin_killers": {
    name: "Kyojin Killers", type: "SK",
    mov: "10-10", cc: 21, bs: 11, ph: 13, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Flamethrower+Contender",              cost:  18, swc: 0, ocultable: true },
      { name: "Heavy Flamethrower+Flammenspeer",           cost:  15, swc: 0, ocultable: true },
    ]
    , skills: [240,191,29,161,28,164,74,58,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/kyojin-killers"
  },
  "jsa_robio_aibot": {
    name: "Robio Aibōt", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [84,28,235]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/robio-aib-t"
  },
  "jsa_domaru_takeshi_neko_oyama": {
    name: "Domaru Takeshi 'Neko' Oyama", type: "HI",
    mov: "15-5", cc: 24, bs: 12, ph: 14, wip: 14, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Contender",                     cost:  28, swc: 0 },
      { name: "Chain Rifle+Contender Lt.L1",               cost:  28, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [21,240,201,84,40,250,213,164,24,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/domaru-takeshi-neko-oyama"
  },
  "jsa_kaizoku_yuriko_oda": {
    name: "Keisotsu Kaizoku Yuriko Oda", type: "LI",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+E/Mitter",                      cost:  25, swc: 0 },
      { name: "Combi Rifle+Panzerfaust",                   cost:  23, swc: 0 },
      { name: "Combi Rifle+E/Mitter",                      cost:  28, swc: 0.5 },
    ]
    , skills: [84,40,49,28,56,161]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/keisotsu-kaizoku-yuriko-oda"
  },
  "jsa_teishin_guntai": {
    name: "Teishin Guntai", type: "MI",
    mov: "10-10", cc: 21, bs: 11, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  19, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  21, swc: 0, ocultable: true },
      { name: "Submachine Gun+Flash Pulse",                cost:  19, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [19,84,40,33,35,164,74,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/teishin-guntai"
  },
  "jsa_kurayami_ninjas": {
    name: "Kurayami Ninjas", type: "SK",
    mov: "10-10", cc: 22, bs: 11, ph: 13, wip: 13, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Viral Mine",                 cost:  22, swc: 0, ocultable: true },
      { name: "Light Shotgun+Viral Mine",                  cost:  26, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Viral Mine",                 cost:  23, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [20,191,84,238,40,28,47,164,74,58,1000,56]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/kurayami-ninjas"
  },
  "jsa_taguraida_jsa_tag_support_pilots": {
    name: "Taguraida, JSA TAG Support Pilots", type: "LI",
    mov: "10-10", cc: 21, bs: 12, ph: 12, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun",                             cost:  12, swc: 0 },
      { name: "Light Shotgun+Flash Pulse",                 cost:  11, swc: 0 },
    ]
    , skills: [19,84,164,270,189,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/taguraida-jsa-tag-support-pilots"
  },
  "jsa_aragoto_senkenbutai_advance_guard_regiment_of_nippon": {
    name: "Aragoto Senkenbutai", type: "LI",
    mov: "20-15", cc: 16, bs: 12, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Spitfire+Boarding Pistol",                  cost:  20, swc: 1 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  13, swc: 0 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  21, swc: 0.5 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  19, swc: 0 },
    ]
    , isHacker: true
    , skills: [268,84,40,28,256,1000]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/aragoto-senkenbutai"
  },
  "jsa_garon_aibot": {
    name: "Garon Aibōt", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  23, swc: 1 },
      { name: "Mk12",                                      cost:  21, swc: 0 },
      { name: "Thunderbolt+Smoke Grenade Launcher",        cost:  16, swc: 0 },
    ]
    , skills: [84,235,61]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/garon-aib-t"
  },
  "jsa_domaru_butai": {
    name: "Domaru Butai", type: "HI",
    mov: "15-5", cc: 24, bs: 12, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Contender",                     cost:  19, swc: 0 },
      { name: "Chain Rifle+Contender",                     cost:  20, swc: 0 },
      { name: "Boarding Shotgun+E/M Grenades",             cost:  23, swc: 0 },
      { name: "Spitfire",                                  cost:  31, swc: 1.5 },
      { name: "Combi Rifle+E/M Grenades",                  cost:  27, swc: 0 },
      { name: "Chain Rifle+Contender Lt.L1",               cost:  23, swc: 0 },
      { name: "Spitfire Lt.L1",                            cost:  35, swc: 1.5 },
    ]
    , ltSkills: ["lt2"]
    , skills: [21,240,201,84,40,250,164,24,59,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/domaru-butai"
  },
  "jsa_shikami": {
    name: "Shikami", type: "HI",
    mov: "15-5", cc: 23, bs: 13, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Contender+Flash Pulse",                     cost:  42, swc: 0 },
      { name: "MULTI Rifle+D-Charges",                     cost:  47, swc: 0 },
    ]
    , skills: [21,84,161,40,28,189,164,82,74]
    , armyUrl: "https://infinityuniverse.com/army/infinity/jsa/shikami"
  },
  "jsa_metsuke_officers": {
    name: "Metsuke Officers", type: "LI",
    mov: "10-10", cc: 21, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Nanopulser+Flash Pulse Lt.L1",              cost:  22, swc: 0 },
      { name: "Nanopulser+Flash Pulse Lt.L1",              cost:  23, swc: 0 },
    ]
    , ltSkills: ["s1", "lt2", "ci"]
    , skills: [20,201,191,84,207,162,164,119,69]
    , equips: [104]
    , armyUrl: "https://infinityuniverse.com/army/infinity/shindenbutai/metsuke-officers"
  },
  "jsa_s_t_r_s_tanuki_team": {
    name: "S.T.R.S. Tanuki Team", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Chain-colt",               cost:  18, swc: 0 },
      { name: "MULTI Rifle+D-Charges",                     cost:  19, swc: 0 },
      { name: "Submachine Gun+Pitcher",                    cost:  20, swc: 0.5 },
      { name: "Boarding Shotgun+Contender",                cost:  20, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  29, swc: 1.5 },
      { name: "MULTI Sniper Rifle",                        cost:  27, swc: 1.5 },
      { name: "Heavy Machine Gun Lt.L1",                   cost:  29, swc: 1 },
    ]
    , ltSkills: ["coc", "lt2"]
    , isHacker: true
    , skills: [40,267,162,122,58,26,189,1000,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/shindenbutai/s-t-r-s-tanuki-team"
  },
  "jsa_kuroshi_rider_aragoto_senkenbutai_rikugun_shoi": {
    name: "Kuroshi Rider, Aragoto Senkenbutai Rikugun Shōi", type: "LI",
    mov: "20-15", cc: 23, bs: 12, ph: 13, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Combi Rifle+Light Shotgun",                 cost:  26, swc: 0 },
      { name: "Combi Rifle+Light Shotgun Lt.L1",           cost:  26, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [19,268,84,40,162,28,59,85,256,119]
    , equips: [107]
  },

  // ─────────────────────────────────────────────────────────────────
  // Mercenarios (compartidos entre varias facciones)
  // ─────────────────────────────────────────────────────────────────
  "merc_n_kken_special_intervention_and_recon_team": {
    name: "Nøkken, Special Intervention and Recon Team", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Spitfire",                                  cost:  26, swc: 1.5 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  27, swc: 0.5 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  25, swc: 0 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  24, swc: 0.5 },
      { name: "Boarding Shotgun+Panzerfaust",              cost:  22, swc: 0 },
      { name: "Boarding Shotgun+Panzerfaust",              cost:  24, swc: 0 },
    ]
    , isHacker: true
    , skills: [161,28,58,1000,56,59]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/nokken"
  },
  "merc_motorized_bounty_hunters": {
    name: "Motorized Bounty Hunters", type: "LI",
    mov: "20-15", cc: 17, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Boarding Shotgun+Heavy Riotstopper",        cost:   8, swc: 0 },
      { name: "Submachine Gun+Chain-colt",                 cost:   9, swc: 0 },
      { name: "Red Fury",                                  cost:  16, swc: 0.5 },
    ]
    , skills: [25,268,40,28,256]
    , equips: [107]
  },
  "merc_sacha_xenotech_hunters": {
    name: "Sāchā, Xenotech Hunters", type: "LI",
    mov: "10-10", cc: 17, bs: 11, ph: 12, wip: 13, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Flash Pulse+E/M Grenades",                  cost:   6, swc: 0 },
    ]
    , skills: [161,25,58,82,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/sacha-xenotech-hunters"
  },
  "merc_pilot_x_the_optimate_lightspeedster": {
    name: "Pilot-X, the Optimate Lightspeedster", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "E/Mitter+Flash Pulse",                      cost:  21, swc: 1 },
    ]
    , isHacker: true
    , skills: [162,255,1000]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/pilot-x-team"
  },
  "merc_racerbots": {
    name: "RACERBOTS", type: "REM",
    mov: "20-10", cc: 13, bs: 11, ph: 12, wip: 11, arm: 0, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Light Riotstopper+Mine Dispenser",          cost:   8, swc: 0 },
    ]
    , skills: [266,84,40,264,235]
    , equips: [241,113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/pilot-x-team"
  },
  "merc_sierra_dronbots": {
    name: "Sierra Dronbot", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  23, swc: 1 },
      { name: "Thunderbolt",                               cost:  18, swc: 0 },
    ]
    , skills: [235,84,61]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/sierra-dronbot"
  },
  "merc_karhu_special_group": {
    name: "Karhu Special Group", type: "MI",
    mov: "15-5", cc: 14, bs: 13, ph: 11, wip: 12, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Blitzen",                       cost:  22, swc: 0 },
      { name: "MULTI Rifle+E/Marat",                       cost:  22, swc: 0 },
      { name: "Feuerbach+AP Mine",                         cost:  34, swc: 1.5 },
      { name: "MULTI Rifle+Blitzen",                       cost:  25, swc: 0 },
      { name: "MULTI Rifle+Blitzen",                       cost:  24, swc: 0 },
    ]
    , skills: [84,28,58,82,211,49,64]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/karhu-special-group"
  },
  "merc_svalarheima_nisses": {
    name: "Nisses", type: "MI",
    mov: "15-5", cc: 14, bs: 13, ph: 12, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Machine Gun+Boarding Pistol",         cost:  31, swc: 1.5 },
      { name: "MULTI Sniper Rifle+Boarding Pistol",        cost:  29, swc: 1.5 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  30, swc: 0.5 },
      { name: "Combi Rifle+Light Shotgun",                 cost:  28, swc: 0 },
    ]
    , isHacker: true
    , skills: [28,58,271,1000,64]
    , equips: [115]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/nisses"
  },
  "merc_maximus_optimate_and_hexadome_legend": {
    name: "Maximus, Optimate and HexaDome Legend", type: "TAG",
    mov: "15-10", cc: 24, bs: 14, ph: 13, wip: 13, arm: 6, bts: 6, w: 0, str: 4, s: 6,
    profiles: [
      { name: "AP Heavy Machine Gun+E/M Carbine",          cost:  82, swc: 1.5 },
      { name: "AP Thunderbolt+E/M Carbine",                cost:  80, swc: 1 },
      { name: "AP Heavy Machine Gun+E/M Carbine Lt.L1",    cost:  82, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [240,201,84,40,39,162,213,246,119,189]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/maximus"
  },
  "merc_pathfinder_dronbots": {
    name: "Pathfinder Dronbot", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  14, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  17, swc: 0 },
    ]
    , skills: [235,84,242,59,65,213]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/pathfinder-dronbot"
  },
  "merc_bulleteer_armbots": {
    name: "Armbots: Bulleteer", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "Heavy Shotgun",                             cost:  19, swc: 0 },
      { name: "Spitfire",                                  cost:  22, swc: 1 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/armbots-bulleteer"
  },
  "merc_racerbots_2": {
    name: "RacerBots", type: "REM",
    mov: "20-10", cc: 13, bs: 11, ph: 12, wip: 11, arm: 0, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+PARA Mine",         cost:   9, swc: 0 },
      { name: "Heavy Riotstopper+Mine Dispenser",          cost:   9, swc: 0 },
    ]
    , skills: [235,266,84,40,264]
    , equips: [241,113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/racerbots"
  },
  "merc_fugazi_dronbots": {
    name: "Fugazi Dronbot", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/fugazi-dronbot"
  },
  "merc_mulebots": {
    name: "Mulebots", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   8, swc: 0 },
      { name: "PARA CC Weapon",                            cost:  14, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  17, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,84,1000,61]
    , equips: [91]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/mulebots"
  },
  "merc_blade_ops_neoterran_unified_commando_regiment": {
    name: "Blade-Ops, Neoterran Unified Commando Regiment", type: "LI",
    mov: "10-10", cc: 16, bs: 13, ph: 10, wip: 12, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  20, swc: 0 },
      { name: "D-Charges+Silenced Pistol",                 cost:  23, swc: 0 },
      { name: "E/Mitter+D-Charges",                        cost:  30, swc: 0 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  30, swc: 0 },
    ]
    , skills: [201,162,28,164,58,213,49,161,215,33]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/blade-ops"
  },
  "merc_fusiliers": {
    name: "Fusiliers", type: "LI",
    mov: "10-10", cc: 13, bs: 12, ph: 10, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  10, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  18, swc: 1 },
      { name: "Missile Launcher",                          cost:  15, swc: 1.5 },
      { name: "MULTI Sniper Rifle",                        cost:  16, swc: 1 },
      { name: "Combi Rifle",                               cost:  15, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  12, swc: 0 },
      { name: "Combi Rifle",                               cost:  12, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  10, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [1000,59,64,119,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/fusiliers"
  },
  "merc_orc_troops": {
    name: "Orc Troops", type: "HI",
    mov: "15-5", cc: 15, bs: 14, ph: 14, wip: 12, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle",                               cost:  28, swc: 0 },
      { name: "MULTI Rifle",                               cost:  29, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  34, swc: 1.5 },
      { name: "Boarding Shotgun",                          cost:  26, swc: 0 },
      { name: "MULTI Rifle",                               cost:  33, swc: 0.5 },
      { name: "MULTI Rifle Lt.L1",                         cost:  28, swc: 0 },
      { name: "Heavy Machine Gun Lt.L1",                   cost:  34, swc: 1 },
      { name: "Feuerbach",                                 cost:  35, swc: 1.5 },
      { name: "Boarding Shotgun",                          cost:  27, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [1000,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/orc-troops"
  },
  "merc_blockers_attached_agents_of_the_cdci": {
    name: "Blockers, Attached Agents of the CDCI", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+Flash Pulse",       cost:  15, swc: 0 },
      { name: "Adhesive Launcher Rifle+Flash Pulse",       cost:  19, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [201,65,131,189,1000]
    , equips: [184,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/blockers"
  },
  "merc_optimate_agent_maximus": {
    name: "Optimate Agent Maximus", type: "MI",
    mov: "15-5", cc: 22, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Thunderbolt+E/M Carbine",                cost:  48, swc: 1 },
      { name: "AP Thunderbolt+E/M Carbine",                cost:  45, swc: 1 },
      { name: "AP Thunderbolt+E/M Carbine Lt.L1",          cost:  48, swc: 1 },
      { name: "AP Thunderbolt+E/M Carbine Lt.L1",          cost:  45, swc: 1 },
    ]
    , ltSkills: ["lt2"]
    , skills: [240,84,40,39,162,122,189,213,86,119,243,28]
    , equips: [183,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/optimate-agent-maximus"
  },
  "merc_clipper_dronbots": {
    name: "Clipper Dronbot", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
      { name: "Missile Launcher",                          cost:  19, swc: 1.5 },
    ]
    , skills: [235,84,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/clipper-dronbot"
  },
  "merc_peacemaker_armbots": {
    name: "Armbots: Peacemakers", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "Heavy Shotgun+Pulzar",                      cost:  23, swc: 0 },
      { name: "Heavy Shotgun+Pulzar",                      cost:  24, swc: 0.5 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  23, swc: 0 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  27, swc: 0 },
    ]
    , skills: [235,84,161,28,201,243,56]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/armbots-peacemakers"
  },
  "merc_warcors_war_correspondents": {
    name: "Warcors, War Correspondents", type: "LI",
    mov: "10-10", cc: 11, bs: 9, ph: 11, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Flash Pulse",                               cost:   3, swc: 0 },
    ]
    , skills: [272,67]
  },
  "merc_sacred_military_order_of_knights_of_santiago": {
    name: "Knights of Santiago", type: "HI",
    mov: "15-5", cc: 23, bs: 14, ph: 13, wip: 13, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Spitfire+E/M Grenades",                     cost:  33, swc: 1.5 },
      { name: "MULTI Rifle+D-Charges",                     cost:  31, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  38, swc: 0 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  36, swc: 0 },
      { name: "Spitfire+E/M Grenades Lt.L1",               cost:  33, swc: 0 },
      { name: "MULTI Rifle+D-Charges Lt.L1",               cost:  31, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [250,19,40,189,164,58,83,1000,35,74,119]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/knights-of-santiago"
  },
  "merc_raveneye_officers": {
    name: "Raveneye Officers", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+E/Marat",                    cost:  12, swc: 0 },
    ]
    , skills: [162,56,59]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/military-orders/raveneye-officers"
  },
  "merc_dart_optimate_huntress": {
    name: "Dart, Optimate Huntress", type: "SK",
    mov: "10-10", cc: 16, bs: 13, ph: 13, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "AP Submachine Gun+Viral Tactical Bow",      cost:  35, swc: 0, ocultable: true },
      { name: "AP Submachine Gun+Viral Tactical Bow",      cost:  36, swc: 0.5, ocultable: true },
      { name: "AP Submachine Gun+Viral Tactical Bow",      cost:  42, swc: 0.5, ocultable: true },
    ]
    , skills: [191,29,84,161,28,162,164,86,58,82,189,215,56,243,240,40,39]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/shock-army-of-acontecimento/dart-optimate-huntress"
  },
  "merc_aida_swanson_submondo_smuggler": {
    name: "Aïda Swanson, Submondo Smuggler", type: "LI",
    mov: "10-10", cc: 19, bs: 12, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Viral Mine",                 cost:  24, swc: 0.5 },
      { name: "Submachine Gun+Viral Mine",                 cost:  21, swc: 0 },
    ]
    , skills: [20,84,25,161,28,237,164,56,215]
    , armyUrl: "https://infinityuniverse.com/army/infinity/neoterran-capitaline-army/aida-swanson"
  },
  "merc_garuda_tacbots": {
    name: "Garuda Tacbots", type: "REM",
    mov: "20-5", cc: 13, bs: 12, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Chain-colt",               cost:  18, swc: 0, ocultable: true },
      { name: "Spitfire",                                  cost:  25, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+Flash Pulse",                   cost:  20, swc: 0, ocultable: true },
    ]
    , skills: [235,84,28,33,35,74,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/neoterran-capitaline-army/garuda-tacbots"
  },
  "merc_shona_carano_special_instructor_and_aristeia_swordmaster": {
    name: "Shona Carano, Special Instructor and Aristeia! Swordmaster", type: "MI",
    mov: "15-5", cc: 23, bs: 11, ph: 14, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Nanopulser",                 cost:  22, swc: 0 },
    ]
    , skills: [22,84,40,250,164,86,74,162]
  },
  "merc_deva_functionaries": {
    name: "Deva Functionaries", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Nanopulser",                    cost:  20, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  24, swc: 0 },
      { name: "MULTI Rifle+Nanopulser",                    cost:  22, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  25, swc: 0.5 },
      { name: "Boarding Shotgun",                          cost:  20, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  21, swc: 0 },
      { name: "Spitfire+Nanopulser",                       cost:  29, swc: 1 },
    ]
    , isHacker: true
    , skills: [84,122,86,162,1000,242,65,59,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/neoterran-capitaline-army/deva-functionaries"
  },
  "merc_csu_corporate_security_unit": {
    name: "CSU, Corporate Security Unit", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 12, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Rifle+Nanopulser",                  cost:  10, swc: 0 },
      { name: "Combi Rifle+Nanopulser",                    cost:  11, swc: 0 },
      { name: "Boarding Shotgun+MULTI Pistol",             cost:  11, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  11, swc: 0 },
      { name: "Breaker Combi Rifle+Nanopulser",            cost:  13, swc: 0 },
    ]
    , skills: [55,67,189]
  },
  "merc_valkyrie_elite_bodyguard": {
    name: "Valkyrie, Elite Bodyguard", type: "MI",
    mov: "10-10", cc: 22, bs: 12, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Shotgun+Grenades",                    cost:  28, swc: 0 },
      { name: "MULTI Rifle+Grenades",                      cost:  33, swc: 0 },
    ]
    , skills: [21,24,84,40,250,39,162,86]
  },
  "merc_kunai_solutions_ninjas": {
    name: "Kunai Solutions Ninjas", type: "SK",
    mov: "10-10", cc: 21, bs: 12, ph: 12, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle",                        cost:  28, swc: 1.5, ocultable: true },
      { name: "Shock Marksman Rifle",                      cost:  26, swc: 0, ocultable: true },
      { name: "Thunderbolt+PARA Mine",                     cost:  25, swc: 0.5, ocultable: true },
    ]
    , skills: [21,191,29,84,238,40,28,58,82,164,201]
  },
  "merc_liang_kai_wandering_shaolin_monk": {
    name: "Liang Kai, Wandering Shaolin Monk", type: "WB",
    mov: "10-10", cc: 23, bs: 11, ph: 13, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Light Shotgun",                 cost:  21, swc: 0 },
    ]
    , skills: [22,24,161,40,28,86,164,74,83,268,261,256]
  },
  "merc_beasthunters_free_guild": {
    name: "Beasthunters Free Guild", type: "SK",
    mov: "10-10", cc: 21, bs: 11, ph: 13, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Heavy Flamethrower+Panzerfaust",            cost:   9, swc: 0 },
      { name: "Heavy Flamethrower+Tactical Bow",           cost:  15, swc: 0 },
      { name: "Heavy Flamethrower+Panzerfaust",            cost:  15, swc: 0 },
      { name: "Heavy Flamethrower+Panzerfaust",            cost:  17, swc: 0 },
    ]
    , skills: [28,164,74,58,83,191,29,161]
  },
  "merc_oktavia_grimsdottir_icebreaker_s_harpooner": {
    name: "Oktavia Grímsdóttir, Icebreaker's Harpooner", type: "LI",
    mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Missile Launcher+Contender",                cost:  30, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Contender",           cost:  26, swc: 1.5 },
    ]
    , skills: [201,84,262,85,67]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/panoceania/oktavia-grimsdottir"
  },
  "merc_hannibal_mercenary_team_leader": {
    name: "Hannibal, Mercenary Team Leader", type: "MI",
    mov: "10-10", cc: 15, bs: 13, ph: 11, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Vulkan Shotgun+Nanopulser",                 cost:  24, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  30, swc: 0 },
      { name: "Vulkan Shotgun+Nanopulser",                 cost:  27, swc: 0 },
      { name: "MULTI Marksman Rifle+Nanopulser",           cost:  33, swc: 0 },
    ]
    , ltSkills: ["ci"]
    , skills: [84,40,162,86,201,207,65,213,251]
  },
  "merc_father_lucien_sforza_authorized_bounty_hunter": {
    name: "Father Lucien Sforza, Authorized Bounty Hunter", type: "MI",
    mov: "10-10", cc: 19, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Viral Rifle+Adhesive Launcher Rifle",       cost:  26, swc: 0 },
      { name: "Viral Rifle+Adhesive Launcher Rifle",       cost:  23, swc: 0 },
    ]
    , skills: [201,162,262,164,211,85,83,191,161]
    , equips: [117]
  },
  "merc_yamabushi": {
    name: "Yamabushi", type: "WB",
    mov: "15-5", cc: 23, bs: 11, ph: 13, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Panzerfaust",                   cost:  15, swc: 0 },
      { name: "Chain Rifle+Tactical Bow",                  cost:  16, swc: 0 },
      { name: "Chain Rifle+Panzerfaust",                   cost:  16, swc: 0 },
      { name: "Chain Rifle+Tactical Bow",                  cost:  17, swc: 0 },
    ]
    , skills: [21,161,40,250,28,164,85,83,240,64,29]
    , armyUrl: "https://infinityuniverse.com/army/infinity/kestrel-colonial-force/yamabushi"
  },
  "merc_emily_handelman_intel_agent": {
    name: "Emily Handelman, Intel Agent", type: "LI",
    mov: "10-10", cc: 17, bs: 13, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Nanopulser",            cost:  22, swc: 0 },
      { name: "Combi Rifle+Grenade Launcher",              cost:  24, swc: 0 },
    ]
    , skills: [84,28,122,59,85]
    , equips: [117]
  },
  "merc_knauf_outlaw_sniper": {
    name: "Knauf, Outlaw Sniper", type: "LI",
    mov: "10-10", cc: 21, bs: 13, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+AP Heavy Pistol",        cost:  31, swc: 1.5 },
    ]
    , skills: [201,84,28,164,58,191,215]
    , equips: [114]
  },
  "merc_kazuraba_ruby_monday": {
    name: "Kazurabā Ruby Monday", type: "HI",
    mov: "15-5", cc: 18, bs: 12, ph: 12, wip: 13, arm: 3, bts: 6, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Adhesive Launcher Rifle+Flash Pulse",       cost:  19, swc: 0 },
    ]
    , skills: [201,25,40,162,276,58,82,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/kestrel-colonial-force/kazuraba-ruby-monday"
  },
  "merc_h_idao_special_support_group": {
    name: "Hǎidào Special Support Group", type: "HI",
    mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Red Fury",                                  cost:  24, swc: 1 },
      { name: "Combi Rifle+D-Charges",                     cost:  24, swc: 0 },
      { name: "Boarding Shotgun+Pitcher",                  cost:  22, swc: 0 },
      { name: "MULTI Rifle+D-Charges",                     cost:  25, swc: 0 },
      { name: "MULTI Sniper Rifle",                        cost:  29, swc: 1.5 },
    ]
    , ltSkills: ["coc"]
    , isHacker: true
    , skills: [84,162,86,58,26,1000,49]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/h-idao-special-support-group"
  },
  "merc_libertos_freedom_fighters": {
    name: "Libertos Freedom Fighters", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 11, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Chain-colt",                 cost:   8, swc: 0, ocultable: true },
      { name: "Light Shotgun+Shock Mine",                  cost:   8, swc: 1, ocultable: true },
    ]
    , skills: [29,84,161,40,58,85,250,56]
  },
  "merc_guiji_squadrons": {
    name: "Guijia Squadrons", type: "TAG",
    mov: "15-10", cc: 22, bs: 14, ph: 16, wip: 13, arm: 8, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  77, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower Lt.L1", cost:  77, swc: 2 },
    ]
    , ltSkills: ["lt2"]
    , skills: [20,84,40,213,74,254,201,119,28,189,243]
    , equips: [239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/guijia-squadrons"
  },
  "merc_bixie_the_jade_champion": {
    name: "Bìxié, the Jade Champion", type: "HI",
    mov: "15-5", cc: 22, bs: 13, ph: 12, wip: 13, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Zapper",                        cost:  41, swc: 0 },
    ]
    , skills: [21,84,40,59,164,211,74,82]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/bixie"
  },
  "merc_zh_ncha_armored_reconnaissance_regiment": {
    name: "Zhēnchá, Armored Reconnaissance Regiment", type: "HI",
    mov: "10-10", cc: 16, bs: 12, ph: 13, wip: 13, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Flash Pulse",              cost:  30, swc: 0, ocultable: true },
      { name: "Submachine Gun+Panzerfaust",                cost:  31, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  34, swc: 0.5, ocultable: true },
      { name: "Submachine Gun+Panzerfaust",                cost:  32, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,84,47,162,28,164,58,82,86,59,1000,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/zhencha"
  },
  "merc_yaoxie_lu_duan": {
    name: "Yáoxiè Lù Duān", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 6, w: 0, str: 1, s: 4,
    profiles: [
      { name: "Mk12+Heavy Flamethrower",                   cost:  24, swc: 0 },
      { name: "Thunderbolt+E/M Carbine",                   cost:  20, swc: 0 },
    ]
    , skills: [235,191,84,201]
    , equips: [104,114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/yaoxie-lu-duan"
  },
  "merc_johnny_kao_optimate_and_technomancer_master": {
    name: "Johnny Kao, Optimate and Technomancer Master", type: "MI",
    mov: "15-5", cc: 18, bs: 13, ph: 12, wip: 14, arm: 3, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Plasma Carbine+Zapper",                     cost:  36, swc: 0 },
      { name: "MULTI Rifle+Zapper",                        cost:  40, swc: 0 },
      { name: "MULTI Rifle+Zapper",                        cost:  42, swc: 0 },
    ]
    , skills: [49,162,28]
    , equips: [238,237,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/johnny-kao-optimate-and-technomancer-master"
  },
  "merc_tiger_soldiers": {
    name: "Tiger Soldiers", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 12, wip: 14, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  20, swc: 0, ocultable: true },
      { name: "Spitfire",                                  cost:  29, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+Light Flamethrower",            cost:  29, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Light Flamethrower",            cost:  26, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [28,33,35,74,58,1000,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/tiger-soldiers"
  },
  "merc_yaoxie_rui_shi": {
    name: "Yáoxiè Rui Shi", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 6, w: 0, str: 1, s: 4,
    profiles: [
      { name: "Spitfire",                                  cost:  23, swc: 1 },
      { name: "Red Fury+Mine Dispenser",                   cost:  21, swc: 0.5 },
    ]
    , skills: [235,84]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/yaoxie-rui-shi"
  },
  "merc_g_ilang_skirmishers": {
    name: "Guiláng Skirmishers", type: "SK",
    mov: "10-10", cc: 15, bs: 11, ph: 12, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Shock Mine",               cost:  23, swc: 0, ocultable: true },
      { name: "MULTI Sniper Rifle+Shock Mine",             cost:  28, swc: 1.5, ocultable: true },
      { name: "Combi Rifle+Shock Mine",                    cost:  31, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine",               cost:  25, swc: 0.5, ocultable: true },
      { name: "Combi Rifle+Flash Pulse",                   cost:  27, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Shock Mine Lt.L1",         cost:  23, swc: 1, ocultable: true },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [191,29,40,47,28,58,164,1000,56,59,119]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/guilang-skirmishers"
  },
  "merc_zhanshi_y_sh_ng": {
    name: "Zhanshi Yisheng", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  14, swc: 0 },
    ]
    , skills: [53]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/zhanshi-yisheng"
  },
  "merc_yaopu_pangguling": {
    name: "Yáopú Pangguling", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   8, swc: 0 },
      { name: "PARA CC Weapon",                            cost:  14, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  17, swc: 0 },
      { name: "Light Shotgun",                             cost:  12, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,84,1000,61]
    , equips: [91]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/yaopu-pangguling"
  },
  "merc_hulang_shocktroopers": {
    name: "Húláng Shocktroopers", type: "HI",
    mov: "15-5", cc: 22, bs: 12, ph: 12, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Light Flamethrower",            cost:  38, swc: 0.5 },
      { name: "Submachine Gun+E/Mitter",                   cost:  38, swc: 0 },
      { name: "Submachine Gun+E/Mitter",                   cost:  31, swc: 0 },
      { name: "Combi Rifle+Light Flamethrower",            cost:  33, swc: 0 },
    ]
    , skills: [20,84,40,162,28,189,164,86,24,262,161,56]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/hulang-shocktroopers"
  },
  "merc_yaoz_o": {
    name: "Yáozăo", type: "REM",
    mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   3, swc: 0 },
    ]
    , skills: [243,84,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/yaozao"
  },
  "merc_ninjas": {
    name: "Ninjas", type: "SK",
    mov: "10-10", cc: 23, bs: 11, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Tactical Bow+Shock Mine",                   cost:  24, swc: 0, ocultable: true },
      { name: "Submachine Gun",                            cost:  27, swc: 0, ocultable: true },
      { name: "Submachine Gun",                            cost:  33, swc: 0.5, ocultable: true },
      { name: "Tactical Bow+Shock Mine",                   cost:  26, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  30, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [240,191,21,29,84,238,40,47,28,164,58,82,1000,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/ninjas"
  },
  "merc_mech_engineers_zhanshi_gongcheng": {
    name: "Mech-Engineer, Zhanshi Gongchéng", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  14, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  15, swc: 0 },
      { name: "Combi Rifle+w209",                          cost:  17, swc: 0 },
    ]
    , skills: [49]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/mech-engineer"
  },
  "merc_zuy_ng_invincibles_terra_cotta_soldiers": {
    name: "Zúyŏng Invincibles, Terra-cotta Soldiers", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 12, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle",                               cost:  26, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  30, swc: 1.5 },
      { name: "Boarding Shotgun+E/Mitter",                 cost:  22, swc: 0 },
      { name: "MULTI Rifle",                               cost:  24, swc: 0 },
      { name: "Missile Launcher+Light Shotgun",            cost:  31, swc: 1.5 },
      { name: "Combi Rifle",                               cost:  27, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  33, swc: 1.5 },
    ]
    , skills: [40,122,213,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/zuy-ng-invincibles"
  },
  "merc_miranda_ashcroft_authorized_bounty_hunter": {
    name: "Miranda Ashcroft, Authorized Bounty Hunter", type: "LI",
    mov: "10-10", cc: 19, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+PARA Mine",                     cost:  27, swc: 0 },
      { name: "Boarding Shotgun+PARA Mine",                cost:  25, swc: 0 },
      { name: "Combi Rifle+E/Mitter",                      cost:  28, swc: 0 },
    ]
    , skills: [240,28,189,156,164]
  },
  "merc_wu_ming_assault_corps_those_without_name": {
    name: "Wu Míng Assault Corps", type: "HI",
    mov: "10-10", cc: 17, bs: 13, ph: 12, wip: 12, arm: 4, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Grenade Launcher",              cost:  27, swc: 0 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  22, swc: 0 },
      { name: "AP Heavy Machine Gun+Boarding Pistol",      cost:  33, swc: 1.5 },
      { name: "AP Submachine Gun+E/Marat",                 cost:  19, swc: 0 },
      { name: "Heavy Rocket Launcher+E/M Carbine",         cost:  23, swc: 1.5 },
      { name: "AP Submachine Gun+E/Mitter",                cost:  22, swc: 0 },
    ]
    , skills: [40]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/wu-ming-assault-corps"
  },
  "merc_taowu_mastermind_and_schemer": {
    name: "Táowù, Mastermind and schemer", type: "LI",
    mov: "10-10", cc: 19, bs: 12, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+E/Marat",                     cost:  19, swc: 0, ocultable: true },
      { name: "Contender+Pulzar",                          cost:  16, swc: 0, ocultable: true },
      { name: "Contender+Pulzar",                          cost:  21, swc: 0.5, ocultable: true },
    ]
    , ltSkills: ["coc", "ci"]
    , isHolomask: true
    , skills: [201,207,40,39,162,189,164,26]
    , equips: [24]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/taowu-mastermind-and-schemer"
  },
  "merc_authorized_bounty_hunters": {
    name: "Authorized Bounty Hunters", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Heavy Riotstopper",        cost:  12, swc: 0 },
      { name: "Sniper Rifle",                              cost:  19, swc: 0.5 },
      { name: "Spitfire+Boarding Pistol",                  cost:  21, swc: 1 },
      { name: "Submachine Gun+Akrylat-Kanone",             cost:  12, swc: 0 },
    ]
    , skills: [25,164]
  },
  "merc_dikpala_tacbots": {
    name: "Dikpala Tacbots", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  13, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  21, swc: 1 },
      { name: "MULTI Sniper Rifle",                        cost:  19, swc: 1 },
      { name: "Submachine Gun+Akrylat-Kanone",             cost:  13, swc: 0 },
      { name: "Combi Rifle",                               cost:  15, swc: 0 },
    ]
    , skills: [235,84,28,64]
    , equips: [241]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/dikpala-tacbots"
  },
  "merc_jujak_regiment_korean_shock_infantry": {
    name: "Jujak Regiment, Korean Shock Infantry", type: "HI",
    mov: "15-5", cc: 16, bs: 13, ph: 12, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Heavy Flamethrower",            cost:  25, swc: 0 },
      { name: "Breaker Combi Rifle+Heavy Flamethrower",    cost:  26, swc: 0 },
      { name: "Breaker Combi Rifle+Heavy Flamethrower",    cost:  28, swc: 0 },
      { name: "Missile Launcher+Light Flamethrower",       cost:  29, swc: 1.5 },
      { name: "Spitfire+Heavy Flamethrower",               cost:  31, swc: 1.5 },
      { name: "Vulkan Shotgun+Panzerfaust",                cost:  27, swc: 0 },
      { name: "Vulkan Shotgun+Panzerfaust",                cost:  29, swc: 0 },
      { name: "Combi Rifle+Heavy Flamethrower Lt.L1",      cost:  25, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [84,40,49,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/jujak-regiment"
  },
  "merc_tian_g_u_orbital_activity_squad": {
    name: "Tian Gǒu, Orbital Activity Squad", type: "LI",
    mov: "10-10", cc: 16, bs: 12, ph: 10, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Jammer",                        cost:  22, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Grenades",                 cost:  20, swc: 0, ocultable: true },
      { name: "Thunderbolt+E/M Carbine",                   cost:  24, swc: 0, ocultable: true },
      { name: "Combi Rifle+Boarding Pistol",               cost:  22, swc: 0 },
      { name: "Thunderbolt+E/M Carbine",                   cost:  26, swc: 0, ocultable: true },
      { name: "Combi Rifle+Madtraps",                      cost:  27, swc: 0 },
    ]
    , isHacker: true
    , skills: [267,58,201,1000,191,56]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/yu-jing/tian-g-u-orbital-activity-squad"
  },
  "merc_varangian_guard": {
    name: "Varangian Guard", type: "WB",
    mov: "10-10", cc: 23, bs: 10, ph: 14, wip: 13, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Smoke Grenades",           cost:  13, swc: 0 },
      { name: "Submachine Gun+Chain Rifle",                cost:  12, swc: 0 },
      { name: "Submachine Gun+Chain-colt",                 cost:  13, swc: 0 },
      { name: "Submachine Gun+Chain Rifle",                cost:  13, swc: 0 },
    ]
    , skills: [24,256,264,85,83]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/varangian-guard"
  },
  "merc_112_emergency_service_motorized": {
    name: "112, Emergency Service (Motorized)", type: "LI",
    mov: "20-10", cc: 16, bs: 11, ph: 12, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Light Shotgun+Smoke Grenade Launcher",      cost:  19, swc: 0 },
    ]
    , skills: [53,84,28,268]
    , equips: [106,107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/112-emergency-service-motorized"
  },
  "merc_highlander_caterans": {
    name: "Highlander Caterans", type: "LI",
    mov: "10-10", cc: 22, bs: 12, ph: 13, wip: 12, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Sniper Rifle",                           cost:  21, swc: 1, ocultable: true },
      { name: "AP Sniper Rifle",                           cost:  21, swc: 0.5, ocultable: true },
      { name: "T2 Sniper Rifle",                           cost:  23, swc: 1, ocultable: true },
    ]
    , skills: [191,29,28,164,82,161]
  },
  "merc_traktor_mul_unit": {
    name: "Traktor Mul Unit", type: "REM",
    mov: "10-10", cc: 13, bs: 10, ph: 9, wip: 12, arm: 2, bts: 0, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   5, swc: 0 },
      { name: "Katyusha MRL",                              cost:   9, swc: 1 },
      { name: "Uragan MRL",                                cost:  14, swc: 1 },
    ]
    , skills: [235,84,201,61]
    , equips: [91,239]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/traktor-mul"
  },
  "merc_wardrivers_mercenary_hackers": {
    name: "Wardrivers, Mercenary Hackers", type: "LI",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Flash Pulse",              cost:  14, swc: 1 },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  16, swc: 1 },
    ]
    , isHacker: true
    , skills: [67,1000]
  },
  "merc_112_emergency_service": {
    name: "112, Emergency Service", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 12, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Boarding Pistol",             cost:  11, swc: 0 },
    ]
    , skills: [53,84]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/112-emergency-service"
  },
  "merc_irmandinhos": {
    name: "Irmandinhos", type: "WB",
    mov: "10-10", cc: 21, bs: 10, ph: 14, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+D-Charges",                     cost:   8, swc: 0 },
      { name: "Boarding Shotgun+D-Charges",                cost:  14, swc: 0 },
    ]
    , skills: [25,49,256,264]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/irmandinhos"
  },
  "merc_desperadoes": {
    name: "Desperadoes", type: "WB",
    mov: "20-10", cc: 21, bs: 11, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Chain Rifle+Smoke Grenade Launcher",        cost:   7, swc: 0 },
      { name: "Boarding Shotgun+Smoke Grenade Launcher",   cost:   9, swc: 0 },
    ]
    , skills: [84,40,67,256,28,264]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/desperadoes"
  },
  "merc_dozers_field_engineers": {
    name: "Dozers, Field Engineers", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+D-Charges",                           cost:  13, swc: 0 },
      { name: "Rifle+Blitzen",                             cost:  14, swc: 0 },
      { name: "Rifle+D-Charges",                           cost:  14, swc: 0 },
      { name: "Rifle+D-Charges",                           cost:  15, swc: 0 },
    ]
    , skills: [84,49]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/dozers-field-engineers"
  },
  "merc_carmen_johns_batard": {
    name: "Carmen Johns, Mercenary Biker", type: "WB",
    mov: "20-10", cc: 22, bs: 11, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:  17, swc: 0 },
    ]
    , skills: [240,25,268,84,40,39,256,28,85,243,65]
    , equips: [107]
  },
  "merc_anaconda_mercenary_tag_squad": {
    name: "Anaconda, Mercenary TAG Squad", type: "TAG",
    mov: "15-5", cc: 21, bs: 13, ph: 16, wip: 13, arm: 7, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "AP Spitfire+Heavy Flamethrower",            cost:  59, swc: 1.5 },
      { name: "Heavy Machine Gun+Light Shotgun",           cost:  59, swc: 1.5 },
    ]
    , skills: [201,84,40,254,213,246,267,162,189,28]
    , equips: [239]
  },
  "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter": {
    name: "Wolfgang Amadeus Wolff, Wulver Bounty Hunter", type: "WB",
    mov: "15-5", cc: 22, bs: 12, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+E/M Grenades",                  cost:  33, swc: 0 },
    ]
    , skills: [21,201,24,84,40,162,82,58,250,131]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/wolfgang-amadeus-wolff"
  },
  "merc_denma_connolly_caledonian_zellenkrieger": {
    name: "Denma Connolly, Caledonian Zellenkrieger ", type: "WB",
    mov: "15-5", cc: 23, bs: 11, ph: 14, wip: 12, arm: 1, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:  12, swc: 0 },
    ]
    , skills: [19,24,84,40,39,55,264,256]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ariadna/denma-connolly"
  },
  "merc_maghariba_guard": {
    name: "Maghariba Guard", type: "TAG",
    mov: "15-10", cc: 16, bs: 14, ph: 17, wip: 14, arm: 8, bts: 6, w: 0, str: 3, s: 8,
    profiles: [
      { name: "MULTI Heavy Machine Gun+E/M Carbine",       cost:  72, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Rocket Launcher", cost:  71, swc: 1.5 },
      { name: "MULTI Heavy Machine Gun+Heavy Flamethrower", cost:  71, swc: 1.5 },
    ]
    , skills: [201,213,83,58,40,254,84,28,189,243]
    , equips: [91,239,241,113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/maghariba-guard"
  },
  "merc_najjarun_engineer": {
    name: "Najjarun Engineers", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  15, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  16, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  17, swc: 0 },
    ]
    , skills: [84,49]
    , equips: [237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/najjarun-engineers"
  },
  "merc_hunzakuts": {
    name: "Hunzakuts", type: "SK",
    mov: "10-10", cc: 14, bs: 11, ph: 12, wip: 14, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Grenade Launcher",                    cost:  18, swc: 0.5, ocultable: true },
      { name: "Sniper Rifle+Shock Mine",                   cost:  18, swc: 0.5, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  19, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  15, swc: 0, ocultable: true },
    ]
    , skills: [191,29,47,28,164,58,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/hunzakuts"
  },
  "merc_fiddler_aristeia_s_ex_toymaker": {
    name: "Fiddler, Aristeia!'s ex-toymaker", type: "LI",
    mov: "15-10", cc: 18, bs: 12, ph: 12, wip: 14, arm: 1, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Contender+Drop Bears",                      cost:  29, swc: 0 },
      { name: "Contender+Drop Bears",                      cost:  36, swc: 0 },
      { name: "Contender+Drop Bears",                      cost:  43, swc: 0 },
    ]
    , skills: [240,40,49,162,86,74,82,243,84,38]
    , equips: [237]
  },
  "merc_fanous_remotes": {
    name: "Fanous Remotes", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [84,28,235]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/fanous-remotes"
  },
  "merc_al_hawwa_unit": {
    name: "Al Hawwa' Unit", type: "SK",
    mov: "10-10", cc: 14, bs: 11, ph: 11, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+D-Charges",                cost:  24, swc: 0.5, ocultable: true },
      { name: "Shock Marksman Rifle+Shock Mine",           cost:  22, swc: 0.5, ocultable: true },
      { name: "Boarding Shotgun+Flash Pulse",              cost:  19, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  22, swc: 0, ocultable: true },
      { name: "Submachine Gun+Grenade Launcher",           cost:  21, swc: 0.5, ocultable: true },
    ]
    , isHacker: true
    , skills: [191,29,47,28,164,58,1000,56,59]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/al-hawwa-unit"
  },
  "merc_rafiq_remotes": {
    name: "Rafiq Remotes", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  13, swc: 0 },
      { name: "Red Fury+Flash Pulse",                      cost:  19, swc: 0.5 },
    ]
    , skills: [84,59,235,65,242]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/rafiq-remotes"
  },
  "merc_dr_claire_lazhari_genephilosopher_and_optimate": {
    name: "Dr. Claire Lazhari, Genephilosopher and Optimate", type: "LI",
    mov: "15-5", cc: 16, bs: 13, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Nanopulser",            cost:  33, swc: 0 },
    ]
    , skills: [201,273,40,162,86,53]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/dr-claire-lazhari-genephilosopher-and-optimate"
  },
  "merc_shihab_remotes": {
    name: "Shihab Remotes", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  23, swc: 1 },
      { name: "Thunderbolt",                               cost:  18, swc: 0 },
    ]
    , skills: [84,235,61]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/shihab-remotes"
  },
  "merc_nasmat_remotes": {
    name: "Nasmat Remotes", type: "REM",
    mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   3, swc: 0 },
    ]
    , skills: [84,28,243]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/nasmat-remotes"
  },
  "merc_triphammer_repurposed_industrial_tag": {
    name: "Triphammers, Repurposed Industrial TAGs", type: "TAG",
    mov: "15-10", cc: 17, bs: 13, ph: 16, wip: 12, arm: 7, bts: 3, w: 0, str: 3, s: 7,
    profiles: [
      { name: "AP Spitfire+Heavy Flamethrower",            cost:  53, swc: 1.5 },
      { name: "AP Spitfire+Chain-colt",                    cost:  52, swc: 1.5 },
      { name: "Heavy Shotgun+Thunderbolt",                 cost:  52, swc: 0 },
      { name: "Heavy Shotgun+Heavy Rocket Launcher",       cost:  48, swc: 0 },
    ]
    , skills: [240,201,25,40,254,213,246,84,28,189,243]
  },
  "merc_ghulam_infantry": {
    name: "Ghulam Infantry", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  11, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  20, swc: 1 },
      { name: "Missile Launcher",                          cost:  17, swc: 1.5 },
      { name: "Rifle+Light Shotgun",                       cost:  16, swc: 0.5 },
      { name: "Rifle+Light Shotgun",                       cost:  15, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  12, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  13, swc: 0 },
      { name: "Rifle+Light Shotgun Lt.L1",                 cost:  11, swc: 0 },
      { name: "Rifle+Grenade Launcher",                    cost:  15, swc: 1 },
      { name: "Rifle+Light Shotgun Lt.L1",                 cost:  15, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [58,1000,53,59,119,211,122,260,189]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/ghulam-infantry"
  },
  "merc_shaytaniyah_remotes": {
    name: "Shaytaniyah Remotes", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
      { name: "Missile Launcher",                          cost:  19, swc: 1.5 },
    ]
    , skills: [84,235,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/shaytaniyah-remotes"
  },
  "merc_kameel_remotes": {
    name: "Kameel Remotes", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   8, swc: 0 },
      { name: "PARA CC Weapon",                            cost:  14, swc: 0.5 },
      { name: "Rifle+Light Shotgun",                       cost:  16, swc: 0 },
    ]
    , isHacker: true
    , skills: [84,235,1000,61]
    , equips: [91]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/kameel-remotes"
  },
  "merc_yuan_yuan": {
    name: "Yuan Yuan", type: "WB",
    mov: "10-10", cc: 22, bs: 10, ph: 14, wip: 13, arm: 0, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:   6, swc: 0, ocultable: true },
      { name: "Chain Rifle+Smoke Grenades",                cost:   7, swc: 0, ocultable: true },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:  11, swc: 0, ocultable: true },
      { name: "Rifle+Smoke Grenades",                      cost:  11, swc: 0, ocultable: true },
    ]
    , skills: [25,33,35,264,74,256]
  },
  "merc_kum_motorized_troops": {
    name: "Kum Motorized Troops", type: "WB",
    mov: "20-15", cc: 22, bs: 11, ph: 13, wip: 14, arm: 1, bts: 0, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:   6, swc: 0 },
      { name: "Light Shotgun+Smoke Grenades",              cost:   7, swc: 0 },
      { name: "Boarding Shotgun+Smoke Grenades",           cost:   9, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  11, swc: 0 },
    ]
    , skills: [84,40,85,256,28,264]
    , equips: [107]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/kum-motorized-troops"
  },
  "merc_scarface_cordelia_mercenary_armored_team": {
    name: "Scarface & Cordelia, Mercenary Armored Team", type: "TAG",
    mov: "15-10", cc: 22, bs: 13, ph: 16, wip: 13, arm: 7, bts: 6, w: 0, str: 3, s: 7,
    profiles: [
      { name: "SCARFACE Loadout Alpha & CORDELIA TURNER",  cost:  80, swc: 1.5 },
      { name: "SCARFACE Loadout Beta & CORDELIA TURNER",   cost:  76, swc: 1.5 },
      { name: "SCARFACE Loadout Gamma & CORDELIA TURNER",  cost:  76, swc: 1.5 },
    ]
    , skills: [240,201,24,84,40,254,213,28,189,243,49]
    , equips: [239,241,238,237]
  },
  "merc_bashi_bazouks": {
    name: "Bashi Bazouks", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 10, wip: 12, arm: 2, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Pistol+Contender",                 cost:  13, swc: 0, ocultable: true },
      { name: "T2 Boarding Shotgun+Boarding Pistol",       cost:  14, swc: 0, ocultable: true },
      { name: "Rifle+Light Shotgun",                       cost:  16, swc: 0, ocultable: true },
      { name: "Breaker Rifle+Boarding Pistol",             cost:  14, swc: 0, ocultable: true },
      { name: "Submachine Gun+Boarding Pistol",            cost:  12, swc: 0, ocultable: true },
    ]
    , isHolomask: true
    , skills: [191,33,58,35,201,189]
    , equips: [24,104]
  },
  "merc_odalisques": {
    name: "Odalisques", type: "LI",
    mov: "15-5", cc: 19, bs: 12, ph: 10, wip: 14, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Contender",                  cost:  19, swc: 0 },
      { name: "Submachine Gun+Contender",                  cost:  21, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  24, swc: 0 },
      { name: "Boarding Shotgun+Pulzar",                   cost:  22, swc: 0 },
      { name: "Viral Marksman Rifle+Pulzar",               cost:  26, swc: 0 },
      { name: "Submachine Gun+Pulzar",                     cost:  21, swc: 0 },
    ]
    , skills: [67,84,162,86,262,131,39,273,164,201,156,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/odalisques"
  },
  "merc_avicenna_mercenary_doctor": {
    name: "Avicenna, Mercenary Doctor", type: "LI",
    mov: "15-5", cc: 16, bs: 11, ph: 11, wip: 15, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  28, swc: 0 },
    ]
    , skills: [84,162,53,86]
    , equips: [106]
  },
  "merc_mcmurrough_mercenary_dog_warrior": {
    name: "McMurrough, Mercenary Dog-Warrior", type: "WB",
    mov: "15-10", cc: 23, bs: 11, ph: 16, wip: 14, arm: 4, bts: 3, w: 2, str: 0, s: 6,
    profiles: [
      { name: "Chain Rifle+Grenades",                      cost:  23, swc: 0 },
    ]
    , skills: [20,24,84,40,256,162,264,74,85]
  },
  "merc_wild_bill_legendary_gunslinger": {
    name: "Wild Bill, Legendary Gunslinger", type: "LI",
    mov: "15-5", cc: 15, bs: 13, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Contender+MULTI Pistol",                    cost:  22, swc: 0 },
      { name: "Rifle+MULTI Pistol",                        cost:  24, swc: 0 },
    ]
    , skills: [201,84,40,156,86]
  },
  "merc_kaplan_tactical_services_kts": {
    name: "KTS, Kaplan Tactical Services", type: "MI",
    mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 14, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Adhesive Launcher Rifle",       cost:  21, swc: 0 },
      { name: "Combi Rifle+Blitzen",                       cost:  20, swc: 0 },
      { name: "MULTI Sniper Rifle+Boarding Pistol",        cost:  25, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Light Shotgun",       cost:  20, swc: 1.5 },
      { name: "Spitfire+Boarding Pistol",                  cost:  25, swc: 1 },
      { name: "Combi Rifle+Adhesive Launcher Rifle",       cost:  25, swc: 0 },
      { name: "Combi Rifle+Blitzen",                       cost:  24, swc: 0 },
      { name: "Combi Rifle+Blitzen",                       cost:  21, swc: 0 },
    ]
    , skills: [84,162,262,28,49,53,189]
  },
  "merc_mobile_brigada": {
    name: "Mobile Brigada", type: "HI",
    mov: "15-5", cc: 18, bs: 13, ph: 13, wip: 13, arm: 5, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Boarding Pistol",               cost:  33, swc: 0 },
      { name: "Heavy Machine Gun+Boarding Pistol",         cost:  38, swc: 1.5 },
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  27, swc: 0 },
      { name: "Missile Launcher+Boarding Pistol",          cost:  35, swc: 1.5 },
      { name: "Combi Rifle+D-Charges",                     cost:  36, swc: 0.5 },
      { name: "MULTI Rifle+Boarding Pistol Lt.L1",         cost:  33, swc: 0 },
      { name: "Boarding Shotgun+Boarding Pistol Lt.L1",    cost:  27, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,263,1000,119]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/qapu-khalqi/mobile-brigada"
  },
  "merc_laxmee_hacker_of_fortune": {
    name: "Laxmee, Hacker of Fortune", type: "LI",
    mov: "10-10", cc: 18, bs: 11, ph: 10, wip: 14, arm: 2, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Submachine Gun+Pitcher",                    cost:  24, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [28,56,1000]
    , equips: [101]
    , armyUrl: "https://infinityuniverse.com/army/infinity/qapu-khalqi/laxmee-hacker-of-fortune"
  },
  "merc_druze_shock_teams": {
    name: "Druze Shock Teams", type: "MI",
    mov: "10-10", cc: 16, bs: 12, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Chain-colt",                    cost:  20, swc: 0 },
      { name: "Heavy Machine Gun+Chain-colt",              cost:  28, swc: 1.5 },
      { name: "Combi Rifle+Chain-colt",                    cost:  21, swc: 0 },
      { name: "Combi Rifle+Chain-colt",                    cost:  24, swc: 1 },
      { name: "Shock Marksman Rifle+Chain-colt",           cost:  23, swc: 0 },
      { name: "Combi Rifle+Pitcher",                       cost:  25, swc: 0.5 },
      { name: "Combi Rifle+Pitcher",                       cost:  23, swc: 0 },
    ]
    , isHacker: true
    , skills: [201,267,1000]
    , equips: [117]
  },
  "merc_corregidor_alguaciles": {
    name: "Corregidor Alguaciles", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  10, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  18, swc: 1 },
      { name: "Missile Launcher",                          cost:  15, swc: 1.5 },
      { name: "Combi Rifle",                               cost:  15, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  12, swc: 0 },
      { name: "Combi Rifle",                               cost:  12, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  10, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [1000,59,64,119]
    , armyUrl: "https://infinityuniverse.com/army/infinity/force-de-reponse-rapide-merovingienne/corregidor-alguaciles"
  },
  "merc_iguana_squadron": {
    name: "'Iguana' Squadron", type: "TAG",
    mov: "15-10", cc: 17, bs: 14, ph: 16, wip: 13, arm: 6, bts: 6, w: 0, str: 4, s: 7,
    profiles: [
      { name: "AP Heavy Machine Gun+Heavy Flamethrower",   cost:  64, swc: 1.5 },
      { name: "AP Heavy Machine Gun+Heavy Flamethrower",   cost:  68, swc: 1.5 },
    ]
    , skills: [201,40,254,213,246,86,162,189]
    , equips: [239,241,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/qapu-khalqi/iguana-squadron"
  },
  "merc_security_chief_arslan": {
    name: "Security Chief Arslan", type: "MI",
    mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "MULTI Rifle+Light Shotgun",                 cost:  35, swc: 0 },
      { name: "MULTI Rifle+Light Shotgun Lt.L1",           cost:  35, swc: 0 },
    ]
    , ltSkills: ["lt2"]
    , skills: [201,84,40,267,86,119]
    , equips: [114,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/qapu-khalqi/security-chief-arslan"
  },
  "merc_freelance_operator_samsa": {
    name: "Freelance Operator Samsa", type: "MI",
    mov: "15-5", cc: 15, bs: 13, ph: 11, wip: 13, arm: 3, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Plasma Rifle+D-Charges",                    cost:  26, swc: 0 },
    ]
    , skills: [191,40,259,47,28,189,215,74]
  },
  "merc_monstruckers": {
    name: "Monstruckers", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Adhesive Launcher Rifle",  cost:  15, swc: 0 },
      { name: "Submachine Gun+Chain Rifle",                cost:  12, swc: 0 },
      { name: "Submachine Gun+Chain Rifle",                cost:  15, swc: 0 },
      { name: "Rifle+Light Shotgun",                       cost:  16, swc: 0 },
    ]
    , skills: [49,82]
    , equips: [238,237]
  },
  "merc_valerya_gromoz_mercenary_hacker": {
    name: "Valerya Gromoz, Mercenary Hacker", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Zapper",                        cost:  19, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [1000]
    , equips: [100]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ramah-taskforce/valerya-gromoz-mercenary-hacker"
  },
  "merc_al_fasid_regiment": {
    name: "Al Fasid Regiment", type: "HI",
    mov: "10-10", cc: 17, bs: 13, ph: 14, wip: 14, arm: 5, bts: 6, w: 2, str: 0, s: 5,
    profiles: [
      { name: "Heavy Machine Gun+Grenade Launcher",        cost:  50, swc: 1.5 },
      { name: "Heavy Rocket Launcher+Submachine Gun",      cost:  44, swc: 1.5 },
    ]
    , skills: [267,56,67,262,201]
    , equips: [183]
    , armyUrl: "https://infinityuniverse.com/army/infinity/haqqislam/al-fasid-regiment"
  },
  "merc_bakunin_clockmakers": {
    name: "Clockmakers", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 15, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+D-Charges",                     cost:  18, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  19, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  21, swc: 0 },
    ]
    , skills: [49]
    , equips: [238,237]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/clockmakers"
  },
  "merc_reaktion_zonds": {
    name: "Reaktion Zonds", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Heavy Machine Gun",                         cost:  24, swc: 1 },
      { name: "Thunderbolt",                               cost:  19, swc: 0 },
    ]
    , skills: [235,84,61,82]
    , equips: [113]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/reaktion-zonds"
  },
  "merc_salyut_zonds": {
    name: "Salyut Zonds", type: "REM",
    mov: "10-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 2, bts: 3, w: 0, str: 1, s: 4,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   8, swc: 0 },
      { name: "PARA CC Weapon",                            cost:  14, swc: 0.5 },
      { name: "Combi Rifle",                               cost:  17, swc: 0 },
    ]
    , isHacker: true
    , skills: [235,84,1000,61]
    , equips: [91]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/salyut-zonds"
  },
  "merc_zondbots": {
    name: "Zondbots", type: "REM",
    mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   3, swc: 0 },
    ]
    , skills: [243,84,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/zondbots"
  },
  "merc_tsyklon_sputnik": {
    name: "Tsyklon Sputniks", type: "REM",
    mov: "15-10", cc: 14, bs: 12, ph: 10, wip: 13, arm: 3, bts: 6, w: 0, str: 1, s: 4,
    profiles: [
      { name: "Spitfire+Chain Rifle",                      cost:  26, swc: 1 },
      { name: "Feuerbach+Chain Rifle",                     cost:  29, swc: 1 },
      { name: "Feuerbach+Chain Rifle",                     cost:  31, swc: 1 },
      { name: "Spitfire+Chain Rifle",                      cost:  31, swc: 1 },
    ]
    , skills: [235,84,82,161,56]
    , equips: [63,113,117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/tsyklon-sputniks"
  },
  "merc_daktaris_daks_campaign_doctors": {
    name: "Daktaris", type: "LI",
    mov: "10-10", cc: 14, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  14, swc: 0 },
    ]
    , skills: [53]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/daktaris"
  },
  "merc_vertigo_zonds": {
    name: "Vertigo Zonds", type: "REM",
    mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Missile Launcher",                          cost:  16, swc: 1.5 },
    ]
    , skills: [235,201,84]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/vertigo-zonds"
  },
  "merc_hellcats": {
    name: "Hellcats", type: "MI",
    mov: "10-10", cc: 14, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Adhesive Launcher Rifle",  cost:  19, swc: 0, ocultable: true },
      { name: "Spitfire",                                  cost:  26, swc: 1.5, ocultable: true },
      { name: "Boarding Shotgun+D-Charges",                cost:  22, swc: 0.5, ocultable: true },
      { name: "Combi Rifle",                               cost:  23, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [84,33,35,58,74,1000,64]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/hellcats"
  },
  "merc_transductor_zonds": {
    name: "Transductor Zonds", type: "REM",
    mov: "15-15", cc: 13, bs: 8, ph: 11, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Flash Pulse",                               cost:   7, swc: 0 },
    ]
    , skills: [235,84,28]
    , equips: [63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/transductor-zonds"
  },
  "merc_stempler_zonds": {
    name: "Stempler Zonds", type: "REM",
    mov: "15-10", cc: 13, bs: 11, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 3,
    profiles: [
      { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  17, swc: 0 },
      { name: "Thunderbolt+Flash Pulse",                   cost:  22, swc: 0 },
    ]
    , skills: [235,242,84,59,65,82,213,74,278]
    , equips: [238,63]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/stempler-zonds"
  },
  "merc_senor_massacre": {
    name: "Señor Massacre", type: "MI",
    mov: "10-10", cc: 24, bs: 12, ph: 13, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Eclipse Grenades",      cost:  27, swc: 0 },
      { name: "Boarding Shotgun+E/M Grenades",             cost:  25, swc: 0 },
    ]
    , skills: [21,84,40,39,162,62,164]
  },
  "merc_corregidor_bandits": {
    name: "Corregidor Bandits", type: "SK",
    mov: "10-10", cc: 22, bs: 12, ph: 13, wip: 12, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Light Shotgun+Adhesive Launcher Rifle",     cost:  23, swc: 0, ocultable: true },
      { name: "Light Shotgun+Adhesive Launcher Rifle",     cost:  28, swc: 0.5, ocultable: true },
      { name: "Light Shotgun+Adhesive Launcher Rifle",     cost:  26, swc: 0, ocultable: true },
      { name: "Boarding Pistol+Submachine Gun",            cost:  25, swc: 0.5, ocultable: true },
      { name: "Light Shotgun+Adhesive Launcher Rifle",     cost:  24, swc: 0, ocultable: true },
    ]
    , isHacker: true
    , skills: [20,191,29,84,28,164,58,201,47,1000,56,59]
    , equips: [246]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/corregidor-bandits"
  },
  "merc_corregidor_jaguars": {
    name: "Corregidor Jaguars", type: "WB",
    mov: "10-10", cc: 22, bs: 11, ph: 13, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Smoke Grenades",                cost:  10, swc: 0 },
      { name: "Light Shotgun+Smoke Grenades",              cost:  11, swc: 0 },
      { name: "Adhesive Launcher Rifle+Panzerfaust",       cost:  11, swc: 0 },
    ]
    , skills: [250,19,84,85]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/corregidor-jaguars"
  },
  "merc_extreme_zellenkrieger": {
    name: "Extreme Zellenkrieger", type: "WB",
    mov: "10-10", cc: 23, bs: 10, ph: 15, wip: 12, arm: 1, bts: 3, w: 0, str: 1, s: 5,
    profiles: [
      { name: "Light Shotgun+Smoke Grenades",              cost:  11, swc: 0 },
      { name: "Pulzar+Smoke Grenades",                     cost:  11, swc: 0 },
    ]
    , skills: [240,24,84,40,39,162,264,55,256]
    , armyUrl: "https://infinityuniverse.com/army/infinity/bakunin/extreme-zellenkrieger"
  },
  "merc_uhahu_hacker_for_hire": {
    name: "Uhahu, Hacker for Hire", type: "LI",
    mov: "10-10", cc: 12, bs: 11, ph: 10, wip: 14, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Pitcher+D-Charges",                         cost:  19, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [84,86,162,1000]
    , equips: [101]
  },
  "merc_zellenkrieger": {
    name: "Zellenkrieger", type: "WB",
    mov: "10-10", cc: 23, bs: 10, ph: 13, wip: 12, arm: 1, bts: 3, w: 0, str: 1, s: 2,
    profiles: [
      { name: "Light Shotgun+Smoke Grenades",              cost:   8, swc: 0 },
      { name: "Pulzar+Smoke Grenades",                     cost:   8, swc: 0 },
      { name: "Pulzar",                                    cost:   8, swc: 0 },
    ]
    , skills: [240,24,84,40,39,55,264,256]
    , armyUrl: "https://infinityuniverse.com/army/infinity/bakunin/zellenkrieger"
  },
  "merc_riot_grrls": {
    name: "Riot Grrls", type: "HI",
    mov: "15-5", cc: 17, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  24, swc: 0 },
      { name: "MULTI Rifle+Disco Baller",                  cost:  29, swc: 0 },
      { name: "Missile Launcher+Boarding Pistol",          cost:  30, swc: 1.5 },
      { name: "Spitfire+Boarding Pistol",                  cost:  31, swc: 1.5 },
      { name: "Combi Rifle+E/Mitter",                      cost:  29, swc: 0 },
    ]
    , skills: [250,40,201,262,189]
    , equips: [114]
    , armyUrl: "https://infinityuniverse.com/army/infinity/nomads/riot-grrls"
  },
  "merc_raoul_spector_mercenary_operative": {
    name: "Raoul Spector, Mercenary Operative", type: "LI",
    mov: "15-5", cc: 22, bs: 12, ph: 13, wip: 13, arm: 2, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun+Boarding Pistol",          cost:  33, swc: 0 },
      { name: "MULTI Rifle+Boarding Pistol",               cost:  34, swc: 0 },
    ]
    , skills: [21,84,28,189,164,74,39,40,33,35,258]
    , equips: [246]
  },
  "merc_armand_le_muet_freelance_killer": {
    name: "Armand 'Le Muet', Freelance Killer", type: "MI",
    mov: "10-10", cc: 21, bs: 13, ph: 12, wip: 13, arm: 2, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Sniper Rifle+Nanopulser",             cost:  33, swc: 1.5 },
      { name: "MULTI Sniper Rifle+Nanopulser",             cost:  34, swc: 1.5 },
    ]
    , skills: [201,161,39,28,164,246,56]
  },
  "merc_krakot_renegades_morat_fugitives": {
    name: "Krakot Renegades, Morat Fugitives", type: "LI",
    mov: "15-5", cc: 23, bs: 11, ph: 13, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Chain Rifle+Chest Mine",                    cost:  14, swc: 0 },
      { name: "Boarding Shotgun+Chest Mine",               cost:  16, swc: 0 },
      { name: "Submachine Gun+Chest Mine",                 cost:  17, swc: 0 },
      { name: "Red Fury+Chest Mine",                       cost:  24, swc: 1 },
    ]
    , skills: [24,161,267,55,74,83,264,40,201]
  },
  "merc_cube_jager_mercenary_recoverers": {
    name: "Cube Jäger, Mercenary Recoverers", type: "LI",
    mov: "10-10", cc: 16, bs: 11, ph: 10, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Boarding Shotgun",                          cost:  15, swc: 0, ocultable: true },
      { name: "Submachine Gun+E/Mitter",                   cost:  18, swc: 0, ocultable: true },
    ]
    , skills: [162,164,33,64]
    , equips: [106]
  },
  "merc_parvati_circle_league_star": {
    name: "Parvati, Circle League star", type: "LI",
    mov: "15-5", cc: 15, bs: 12, ph: 10, wip: 15, arm: 2, bts: 6, w: 0, str: 2, s: 2,
    profiles: [
      { name: "Submachine Gun+Flash Pulse",                cost:  36, swc: 0 },
    ]
    , skills: [235,84,53,49,40,74]
    , equips: [238]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/parvati-circle-league-star"
  },
  "merc_kyra_sharma_the_iron_maiden_of_the_optimates": {
    name: "Kyra Sharma, The  Iron Maiden of the Optimates", type: "HI",
    mov: "15-10", cc: 18, bs: 14, ph: 12, wip: 14, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "MULTI Marksman Rifle+Light Riotstopper",    cost:  45, swc: 0 },
      { name: "MULTI Rifle+Light Riotstopper",             cost:  52, swc: 0 },
    ]
    , skills: [201,84,40,162,62,213,74,64,33,35]
    , equips: [106]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/kyra-sharma-the-iron-maiden-of-the-optimates"
  },
  "merc_yudbots": {
    name: "Yudbots", type: "REM",
    mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 0, str: 1, s: 1,
    profiles: [
      { name: "PARA CC Weapon",                            cost:   3, swc: 0 },
    ]
    , skills: [243,84,28]
    , armyUrl: "https://infinityuniverse.com/army/infinity/imperial-service/yudbots"
  },
  "merc_danavas_hackers": {
    name: "Danavas Hackers", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 11, wip: 15, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle+Pitcher",                       cost:  22, swc: 0.5 },
    ]
    , isHacker: true
    , skills: [84,1000]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/danavas-hackers"
  },
  "merc_john_hawkwood_mercenary_officer": {
    name: "John Hawkwood, Mercenary Officer", type: "MI",
    mov: "10-10", cc: 22, bs: 13, ph: 11, wip: 14, arm: 3, bts: 6, w: 1, str: 0, s: 2,
    profiles: [
      { name: "K1 Sniper Rifle+Nanopulser",                cost:  35, swc: 1 },
      { name: "wundefined+wundefined",                     cost:  40, swc: 0 },
    ]
    , ltSkills: ["coc"]
    , skills: [19,201,84,162,28,86,164,58,26]
  },
  "merc_hippolyta_amazon_officer": {
    name: "Hippolyta, Amazon Officer", type: "WB",
    mov: "15-5", cc: 24, bs: 13, ph: 14, wip: 14, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Breaker Combi Rifle+Nanopulser",            cost:  37, swc: 0 },
    ]
    , skills: [256,21,24,84,40,28,164,74,268]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/hippolyta-amazon-officer"
  },
  "merc_hector_homeridae_s_champion": {
    name: "Hector, Homerid Champion", type: "HI",
    mov: "10-10", cc: 24, bs: 13, ph: 14, wip: 15, arm: 5, bts: 6, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Plasma Rifle+Nanopulser",                   cost:  61, swc: 0 },
      { name: "Spitfire+Nanopulser",                       cost:  60, swc: 1.5 },
      { name: "Plasma Rifle+Nanopulser Lt.L1",             cost:  65, swc: 0 },
      { name: "Spitfire+Nanopulser Lt.L1",                 cost:  64, swc: 0.5 },
    ]
    , ltSkills: ["s1", "lt2"]
    , skills: [22,84,40,164,86,69,119]
    , equips: [117]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/hector-homerid-champion"
  },
  "merc_andromeda_sophistes_of_the_steel_phalanx": {
    name: "Andromeda, Sophistes of the Steel Phalanx", type: "MI",
    mov: "15-5", cc: 21, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Submachine Gun+Zapper",                     cost:  30, swc: 0 },
      { name: "Boarding Shotgun+Zapper",                   cost:  33, swc: 0 },
    ]
    , skills: [21,84,40,247,162,28,189,164,86,47]
    , armyUrl: "https://infinityuniverse.com/army/infinity/aleph/andromeda"
  },
  "merc_diggers_armed_prospectors": {
    name: "Diggers, Armed Prospectors", type: "HI",
    mov: "10-10", cc: 21, bs: 11, ph: 13, wip: 12, arm: 3, bts: 0, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Rifle+Light Shotgun",                       cost:  18, swc: 0 },
      { name: "Chain Rifle+Grenades",                      cost:  14, swc: 0 },
    ]
    , skills: [240,25,84,40,39,256,246,264]
  },
  "merc_saito_togan_mercenary_ninja": {
    name: "Saito Togan", type: "SK",
    mov: "10-10", cc: 24, bs: 11, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "T2 Boarding Shotgun+Smoke Grenades",        cost:  33, swc: 0, ocultable: true },
      { name: "Combi Rifle+D-Charges",                     cost:  35, swc: 0, ocultable: true },
    ]
    , skills: [22,191,29,84,238,40,47,28,164,58,189]
    , equips: [246]
  },
  "merc_yojimbo_sword_for_hire": {
    name: "Yojimbo, Sword for Hire", type: "WB",
    mov: "15-5", cc: 24, bs: 12, ph: 14, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Contender+Nanopulser",                      cost:  19, swc: 0 },
    ]
    , skills: [22,84,40,162,56,164,264,86]
  },
  "merc_yojimbo_motorized_sword_for_hire": {
    name: "Yojimbo, Motorized Sword for Hire", type: "WB",
    mov: "20-15", cc: 24, bs: 12, ph: 14, wip: 13, arm: 1, bts: 3, w: 1, str: 0, s: 4,
    profiles: [
      { name: "Contender+Nanopulser",                      cost:  20, swc: 0 },
    ]
    , skills: [22,268,84,40,162,28,56,86]
    , equips: [107]
  },
  "merc_tokusetsu_butai": {
    name: "Tokusetsu Butai", type: "LI",
    mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  14, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  14, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  15, swc: 0 },
      { name: "Combi Rifle+D-Charges",                     cost:  17, swc: 0 },
    ]
    , skills: [84,53,49]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ikari/tokusetsu-butai"
  },
  "merc_karakuri_special_project": {
    name: "Karakuri Special Project", type: "HI",
    mov: "10-10", cc: 10, bs: 13, ph: 10, wip: 13, arm: 3, bts: 6, w: 0, str: 3, s: 2,
    profiles: [
      { name: "Heavy Shotgun+Chain Rifle",                 cost:  31, swc: 0 },
      { name: "MULTI Rifle+Chain Rifle",                   cost:  35, swc: 0 },
      { name: "Mk12+Chain Rifle",                          cost:  38, swc: 0 },
      { name: "E/Mitter+Chain Rifle",                      cost:  31, swc: 0 },
    ]
    , skills: [84,254,162,59,235]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ikari/karakuri-special-project"
  },
  "merc_tanko_zensenbutai": {
    name: "Tankō Zensenbutai", type: "HI",
    mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 2, str: 0, s: 2,
    profiles: [
      { name: "Blitzen+Light Shotgun",                     cost:  18, swc: 0 },
      { name: "Blitzen+Submachine Gun",                    cost:  19, swc: 0 },
      { name: "Flammenspeer+Contender",                    cost:  19, swc: 0 },
      { name: "Missile Launcher",                          cost:  26, swc: 1.5 },
      { name: "Blitzen+Light Shotgun",                     cost:  19, swc: 0 },
    ]
    , skills: [20,268,84,40,164,256]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ikari/tank-zensenbutai"
  },
  "merc_daiyokai_dengekitai": {
    name: "Daiyōkai Dengekitai", type: "HI",
    mov: "10-10", cc: 21, bs: 13, ph: 14, wip: 13, arm: 5, bts: 3, w: 2, str: 0, s: 5,
    profiles: [
      { name: "MULTI Marksman Rifle+Panzerfaust",          cost:  46, swc: 0 },
      { name: "Red Fury+Panzerfaust",                      cost:  47, swc: 1 },
      { name: "Heavy Machine Gun+Panzerfaust",             cost:  50, swc: 1 },
    ]
    , skills: [20,201,84,164,86,211]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ikari/daiy-kai-dengekitai"
  },
  "merc_keisotsu_butai": {
    name: "Keisotsu", type: "LI",
    mov: "10-10", cc: 17, bs: 11, ph: 10, wip: 12, arm: 1, bts: 0, w: 1, str: 0, s: 2,
    profiles: [
      { name: "Combi Rifle",                               cost:  10, swc: 0 },
      { name: "Heavy Machine Gun",                         cost:  18, swc: 1 },
      { name: "Missile Launcher",                          cost:  15, swc: 1.5 },
      { name: "Combi Rifle+Crazykoala",                    cost:  16, swc: 0.5 },
      { name: "Combi Rifle+Flash Pulse",                   cost:  11, swc: 0 },
      { name: "Combi Rifle",                               cost:  12, swc: 0 },
      { name: "Combi Rifle Lt.L1",                         cost:  10, swc: 0.5 },
      { name: "AP Rifle",                                  cost:   9, swc: 0 },
      { name: "Thunderbolt",                               cost:  12, swc: 0 },
      { name: "AP Rifle Lt.L1",                            cost:   9, swc: 0.5 },
    ]
    , ltSkills: ["lt2"]
    , isHacker: true
    , skills: [84,1000,59,64,119,201]
    , armyUrl: "https://infinityuniverse.com/army/infinity/ikari/keisotsu"
  },

};

const FACTION_DEFS = {
  "PanOceania": { id: 101, units: [
    { id: "pano_neoterra_bolts", ava: 3 },
    { id: "pano_fireflies_clandestine_demo_squad", ava: 2 },
    { id: "pano_cutters_varuna_naval_chasseurs", ava: 1 },
    { id: "merc_n_kken_special_intervention_and_recon_team", ava: 2 },
    { id: "pano_banshees_airborne_assault_unit", ava: 2 },
    { id: "merc_motorized_bounty_hunters", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "pano_joan_of_arc_v2_mobility_armor", ava: 1 },
    { id: "merc_pilot_x_the_optimate_lightspeedster", ava: 1 },
    { id: "merc_racerbots", ava: 2 },
    { id: "merc_sierra_dronbots", ava: 2 },
    { id: "pano_palbots", ava: 3 },
    { id: "merc_karhu_special_group", ava: 2 },
    { id: "pano_trauma_docs", ava: 1 },
    { id: "merc_svalarheima_nisses", ava: 2 },
    { id: "pano_swiss_guard", ava: 1 },
    { id: "pano_tikbalangs_armored_chasseurs_regiment", ava: 1 },
    { id: "pano_team_crux_father_knights", ava: 1 },
    { id: "pano_fusilier_indigo_bipandra", ava: 1 },
    { id: "pano_locust_clandestine_action_team", ava: 2 },
    { id: "merc_maximus_optimate_and_hexadome_legend", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 2 },
    { id: "pano_dr_priya_harper_archeo_raider", ava: 1 },
    { id: "pano_helot_militia", ava: 2 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "pano_tech_bees_maintenance_battalions", ava: 1 },
    { id: "pano_sacred_military_order_of_teutonic_knights", ava: 2 },
    { id: "pano_zulu_cobra_recon_and_special_intervention_group", ava: 2 },
    { id: "merc_racerbots_2", ava: 2 },
    { id: "pano_paradiso_croc_men", ava: 2 },
    { id: "pano_squalos_mk_ii_panoceanian_armored_cavalry_heavy_lancers", ava: 2 },
    { id: "merc_fugazi_dronbots", ava: 2 },
    { id: "pano_scarecrows_active_recon_group", ava: 2 },
    { id: "pano_fennec_fusiliers", ava: 5 },
    { id: "pano_bca_magistrates", ava: 1 },
    { id: "merc_mulebots", ava: 2 },
    { id: "merc_blade_ops_neoterran_unified_commando_regiment", ava: 2 },
    { id: "pano_aquila_guard", ava: 1 },
    { id: "pano_drummers_mobile_support_section", ava: 2 },
    { id: "merc_fusiliers", ava: 999 },
    { id: "pano_redeye_close_air_support_squad", ava: 1 },
    { id: "pano_hetkari_shooters", ava: 1 },
    { id: "merc_orc_troops", ava: 2 },
    { id: "merc_blockers_attached_agents_of_the_cdci", ava: 1 },
    { id: "merc_optimate_agent_maximus", ava: 1 },
    { id: "merc_clipper_dronbots", ava: 2 },
    { id: "pano_blink_team", ava: 1 },
    { id: "merc_peacemaker_armbots", ava: 2 },
    { id: "pano_black_a_i_r", ava: 1 },
    { id: "pano_joan_of_arc", ava: 1 },
    { id: "pano_patsy_garnett_orc_troops_varuna_div_nco", ava: 1 },
    { id: "pano_griffin_troops", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "pano_machinists", ava: 1 },
  ]},
  "Military Orders": { id: 103, units: [
    { id: "merc_sierra_dronbots", ava: 2 },
    { id: "pano_joan_of_arc", ava: 1 },
    { id: "merc_sacred_military_order_of_knights_of_santiago", ava: 3 },
    { id: "merc_raveneye_officers", ava: 1 },
    { id: "pano_knights_of_montesa", ava: 1 },
    { id: "pano_military_order_curators", ava: 1 },
    { id: "pano_panoceanian_black_friars", ava: 2 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "pano_tikbalangs_armored_chasseurs_regiment", ava: 1, profiles: [{ name: "Heavy Machine Gun+Heavy Flamethrower",      cost:  68, swc: 1.5 }] },
    { id: "pano_infirmarers_of_saint_lazarus", ava: 3 },
    { id: "pano_order_sergeants", ava: 4 },
    { id: "pano_trinitarian_tertiaries", ava: 3 },
    { id: "pano_coadjutor_crosiers_military_order_infantry", ava: 999 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 2 },
    { id: "merc_mulebots", ava: 2 },
    { id: "pano_equestrian_order_of_knights_of_the_holy_sepulchre", ava: 2 },
    { id: "pano_joan_of_arc_v2_mobility_armor", ava: 1 },
    { id: "pano_father_officer_gabriele_de_fersen", ava: 1 },
    { id: "pano_holy_order_of_hospitaller_knights_of_saint_john_of_skovorodino", ava: 5 },
    { id: "merc_clipper_dronbots", ava: 1 },
    { id: "pano_palbots", ava: 2 },
    { id: "pano_crusader_brethren", ava: 3 },
    { id: "merc_peacemaker_armbots", ava: 2 },
    { id: "pano_montesa_order_motorized_knights", ava: 2 },
    { id: "pano_seraphs_armoured_cavalry_of_military_order", ava: 2 },
    { id: "pano_indigo_brother_konstantinos", ava: 1 },
    { id: "pano_knight_hospitaller_kyle_hawkins", ava: 1 },
    { id: "pano_padre_inquisidor_mendoza", ava: 1 },
    { id: "pano_sacred_military_order_of_teutonic_knights", ava: 3 },
    { id: "pano_knight_of_justice_koj_of_military_order", ava: 2 },
    { id: "pano_team_crux_father_knights", ava: 1 },
    { id: "pano_knight_commander", ava: 1 },
    { id: "merc_fugazi_dronbots", ava: 1 },
    { id: "pano_tech_bees_maintenance_battalions", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_dart_optimate_huntress", ava: 1 },
  ]},
  "Neoterran Capitaline Army": { id: 104, units: [
    { id: "pano_neoterra_bolts", ava: 999 },
    { id: "pano_squalos_mk_ii_panoceanian_armored_cavalry_heavy_lancers", ava: 2 },
    { id: "pano_panoceanian_black_friars", ava: 1 },
    { id: "merc_blade_ops_neoterran_unified_commando_regiment", ava: 3 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "merc_sierra_dronbots", ava: 2 },
    { id: "merc_peacemaker_armbots", ava: 2 },
    { id: "pano_aquila_guard", ava: 3, profiles: [{ name: "Heavy Machine Gun+MULTI Pistol",            cost:  52, swc: 1.5 }, { name: "MULTI Marksman Rifle+Disco Baller",         cost:  49, swc: 0 }, { name: "MULTI Marksman Rifle+Disco Baller Lt.L1",   cost:  49, swc: 0 }, { name: "MULTI Pistol+MULTI Marksman Rifle Lt.L1",   cost:  52, swc: 1 }] },
    { id: "pano_redeye_close_air_support_squad", ava: 2 },
    { id: "pano_machinists", ava: 1, profiles: [{ name: "Combi Rifle+D-Charges",                     cost:  17, swc: 0 }, { name: "Combi Rifle+D-Charges",                     cost:  18, swc: 0 }, { name: "Combi Rifle+D-Charges",                     cost:  20, swc: 0 }] },
    { id: "merc_orc_troops", ava: 5 },
    { id: "merc_blockers_attached_agents_of_the_cdci", ava: 2 },
    { id: "merc_clipper_dronbots", ava: 2 },
    { id: "pano_palbots", ava: 2 },
    { id: "pano_fusilier_indigo_richard_quinn", ava: 1 },
    { id: "merc_fusiliers", ava: 5 },
    { id: "pano_indigo_spec_ops_captain_uma_s_rensen", ava: 1 },
    { id: "merc_fugazi_dronbots", ava: 3 },
    { id: "pano_trauma_docs", ava: 1 },
    { id: "pano_auxilia", ava: 999 },
    { id: "pano_clausewitz_uhlans", ava: 2 },
    { id: "merc_aida_swanson_submondo_smuggler", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_optimate_agent_maximus", ava: 1, profiles: [{ name: "AP Thunderbolt+E/M Carbine",                cost:  48, swc: 1 }, { name: "AP Thunderbolt+E/M Carbine",                cost:  45, swc: 1 }, { name: "AP Thunderbolt+E/M Carbine Lt.L1",          cost:  47, swc: 1 }] },
    { id: "merc_garuda_tacbots", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 2 },
    { id: "merc_mulebots", ava: 2 },
    { id: "pano_swiss_guard", ava: 2 },
    { id: "pano_hexas_strategic_security_division", ava: 3 },
    { id: "pano_hannibal_mercenary_team_leader", ava: 1 },
    { id: "pano_tech_bees_maintenance_battalions", ava: 1 },
    { id: "merc_shona_carano_special_instructor_and_aristeia_swordmaster", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_deva_functionaries", ava: 2 },
    { id: "merc_maximus_optimate_and_hexadome_legend", ava: 1, profiles: [{ name: "AP Heavy Machine Gun+E/M Carbine",          cost:  82, swc: 1.5 }, { name: "AP Thunderbolt+E/M Carbine",                cost:  80, swc: 1 }, { name: "AP Heavy Machine Gun+E/M Carbine Lt.L1",    cost:  84, swc: 0 }] },
    { id: "pano_locust_clandestine_action_team", ava: 3 },
    { id: "merc_csu_corporate_security_unit", ava: 2 },
  ]},
  "Svalarheima's Winter Force": { id: 106, units: [
    { id: "merc_sierra_dronbots", ava: 2 },
    { id: "merc_valkyrie_elite_bodyguard", ava: 1 },
    { id: "merc_kunai_solutions_ninjas", ava: 1 },
    { id: "merc_svalarheima_nisses", ava: 5 },
    { id: "pano_knight_of_justice_koj_of_military_order", ava: 2, profiles: [{ name: "Missile Launcher",                          cost:  46, swc: 1.5 }, { name: "Spitfire",                                  cost:  42, swc: 1.5 }, { name: "MULTI Marksman Rifle+Pitcher",              cost:  45, swc: 0.5 }, { name: "MULTI Marksman Rifle+Flash Pulse",          cost:  41, swc: 0 }, { name: "Spitfire Lt.L1",                            cost:  42, swc: 1.5 }, { name: "Spitfire+D-Charges",                        cost:  45, swc: 1.5 }, { name: "MULTI Marksman Rifle+Flash Pulse Lt.L1",    cost:  41, swc: 0 }] },
    { id: "pano_indigo_spec_ops_captain_uma_s_rensen", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 2 },
    { id: "merc_liang_kai_wandering_shaolin_monk", ava: 1 },
    { id: "merc_blade_ops_neoterran_unified_commando_regiment", ava: 2 },
    { id: "merc_shona_carano_special_instructor_and_aristeia_swordmaster", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_orc_troops", ava: 5, profiles: [{ name: "MULTI Rifle",                               cost:  30, swc: 0 }, { name: "MULTI Rifle",                               cost:  31, swc: 0 }, { name: "Boarding Shotgun",                          cost:  28, swc: 0 }, { name: "Heavy Machine Gun",                         cost:  36, swc: 1.5 }, { name: "Feuerbach",                                 cost:  37, swc: 1.5 }, { name: "MULTI Rifle Lt.L1",                         cost:  31, swc: 0 }, { name: "Heavy Machine Gun Lt.L1",                   cost:  36, swc: 1 }] },
    { id: "merc_peacemaker_armbots", ava: 2 },
    { id: "pano_jotums_svalarheima_armoured_cuirassiers", ava: 2 },
    { id: "pano_fusilier_indigo_richard_quinn", ava: 1, profiles: [{ name: "MULTI Marksman Rifle+Flash Pulse",          cost:  26, swc: 0 }, { name: "MULTI Rifle+Flash Pulse",                   cost:  26, swc: 0 }] },
    { id: "pano_tech_bees_maintenance_battalions", ava: 1 },
    { id: "merc_beasthunters_free_guild", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "pano_infirmarers_of_saint_lazarus", ava: 2 },
    { id: "pano_knight_hospitaller_kyle_hawkins", ava: 1 },
    { id: "merc_oktavia_grimsdottir_icebreaker_s_harpooner", ava: 1 },
    { id: "pano_b_yg_soldiers", ava: 2 },
    { id: "pano_holy_order_of_hospitaller_knights_of_saint_john_of_skovorodino", ava: 3 },
    { id: "pano_locust_clandestine_action_team", ava: 2 },
    { id: "merc_fugazi_dronbots", ava: 3 },
    { id: "pano_palbots", ava: 2 },
    { id: "pano_trauma_docs", ava: 1 },
    { id: "merc_n_kken_special_intervention_and_recon_team", ava: 4 },
    { id: "merc_mulebots", ava: 2 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "pano_vargar_maximum_security_team", ava: 5 },
    { id: "merc_pilot_x_the_optimate_lightspeedster", ava: 1 },
    { id: "merc_racerbots", ava: 2 },
    { id: "merc_clipper_dronbots", ava: 2 },
    { id: "merc_karhu_special_group", ava: 5 },
    { id: "pano_troll_hunter_gunnar_lundmark", ava: 1 },
    { id: "merc_fusiliers", ava: 999 },
    { id: "merc_hannibal_mercenary_team_leader", ava: 1 },
    { id: "pano_machinists", ava: 1, profiles: [{ name: "Combi Rifle+D-Charges",                     cost:  17, swc: 0 }, { name: "Combi Rifle+D-Charges",                     cost:  20, swc: 0 }] },
    { id: "pano_flight_officer_agnes_ferreira", ava: 1 },
  ]},
  "Kestrel Colonial Force": { id: 107, units: [
    { id: "merc_pathfinder_dronbots", ava: 2 },
    { id: "pano_palbots", ava: 2 },
    { id: "pano_blink_team", ava: 2 },
    { id: "pano_bca_magistrates", ava: 2 },
    { id: "merc_beasthunters_free_guild", ava: 1 },
    { id: "pano_black_a_i_r", ava: 3 },
    { id: "merc_father_lucien_sforza_authorized_bounty_hunter", ava: 1 },
    { id: "merc_sierra_dronbots", ava: 2 },
    { id: "merc_clipper_dronbots", ava: 1 },
    { id: "merc_fugazi_dronbots", ava: 1 },
    { id: "pano_scarecrows_active_recon_group", ava: 3 },
    { id: "pano_fennec_fusiliers", ava: 5 },
    { id: "pano_fireflies_clandestine_demo_squad", ava: 5 },
    { id: "merc_peacemaker_armbots", ava: 2 },
    { id: "pano_tech_bees_maintenance_battalions", ava: 1 },
    { id: "pano_redeye_close_air_support_squad", ava: 2 },
    { id: "pano_trauma_docs", ava: 1 },
    { id: "merc_mulebots", ava: 2 },
    { id: "pano_minescorp_jackals", ava: 4 },
    { id: "merc_yamabushi", ava: 2 },
    { id: "pano_fusilier_indigo_richard_quinn", ava: 1, profiles: [{ name: "MULTI Marksman Rifle+Flash Pulse",          cost:  26, swc: 0 }, { name: "MULTI Rifle+Flash Pulse",                   cost:  26, swc: 0 }] },
    { id: "pano_tikbalangs_armored_chasseurs_regiment", ava: 2 },
    { id: "pano_machinists", ava: 1 },
    { id: "merc_emily_handelman_intel_agent", ava: 1 },
    { id: "merc_optimate_agent_maximus", ava: 1 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "pano_drummers_mobile_support_section", ava: 4 },
    { id: "pano_team_crux_father_knights", ava: 1 },
    { id: "pano_hetkari_shooters", ava: 2 },
    { id: "pano_griffin_troops", ava: 3 },
    { id: "pano_fusilier_indigo_bipandra", ava: 1 },
    { id: "pano_squalos_mk_ii_panoceanian_armored_cavalry_heavy_lancers", ava: 2 },
    { id: "pano_banshees_airborne_assault_unit", ava: 3 },
    { id: "pano_dr_priya_harper_archeo_raider", ava: 1 },
    { id: "merc_knauf_outlaw_sniper", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_kazuraba_ruby_monday", ava: 1 },
    { id: "merc_maximus_optimate_and_hexadome_legend", ava: 1 },
    { id: "merc_dart_optimate_huntress", ava: 1 },
  ]},
  "Yu Jing": { id: 201, units: [
    { id: "yj_cha_yi_yaokong_messenger_remote", ava: 1 },
    { id: "merc_h_idao_special_support_group", ava: 1 },
    { id: "merc_libertos_freedom_fighters", ava: 1 },
    { id: "yj_daoy_ng_operative_control_unit", ava: 1 },
    { id: "merc_guiji_squadrons", ava: 2 },
    { id: "yj_lei_gong_invincibles_lord_of_thunder", ava: 1 },
    { id: "yj_shang_ji_invincibles", ava: 2 },
    { id: "yj_daof_i_tactical_section", ava: 1 },
    { id: "yj_mowang_troops", ava: 1 },
    { id: "yj_hwarang_corps", ava: 2 },
    { id: "yj_dokkaebi_cyberteam", ava: 1 },
    { id: "merc_bixie_the_jade_champion", ava: 1 },
    { id: "yj_haetae_unit", ava: 1 },
    { id: "yj_husong_yaokong_escort_remote", ava: 2 },
    { id: "yj_naval_operations_group_sulyong", ava: 2 },
    { id: "merc_zh_ncha_armored_reconnaissance_regiment", ava: 2 },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "yj_sun_tze", ava: 1 },
    { id: "yj_blue_wolf_mongol_cavalry", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "yj_zhany_ng_imperial_agents", ava: 1 },
    { id: "yj_major_lunah_ex_aristeia_sniper", ava: 1 },
    { id: "merc_johnny_kao_optimate_and_technomancer_master", ava: 1 },
    { id: "merc_racerbots_2", ava: 2 },
    { id: "yj_yaofang_long_ya", ava: 2 },
    { id: "merc_tiger_soldiers", ava: 2 },
    { id: "yj_qishi_stateempire_tag_support_pilots", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "merc_g_ilang_skirmishers", ava: 2 },
    { id: "yj_yan_hu_invincibles_fire_support_heavy_regiment", ava: 2 },
    { id: "merc_beasthunters_free_guild", ava: 1 },
    { id: "yj_hac_tao_special_unit", ava: 1 },
    { id: "yj_hsien_warriors", ava: 1 },
    { id: "yj_krit_kokram_zuy_ng_invincibles_specialist", ava: 1 },
    { id: "yj_hundun_ambush_unit", ava: 1 },
    { id: "yj_shaolin_warrior_monks", ava: 4 },
    { id: "yj_weib_ng_yaokong_guardian_remote", ava: 2 },
    { id: "merc_zhanshi_y_sh_ng", ava: 1 },
    { id: "yj_sulsa_warriors", ava: 1 },
    { id: "merc_yaopu_pangguling", ava: 2 },
    { id: "yj_imperial_agent_pheasant_rank_y_j", ava: 1 },
    { id: "merc_hulang_shocktroopers", ava: 1 },
    { id: "merc_yaoz_o", ava: 3 },
    { id: "yj_kuang_shi", ava: 4 },
    { id: "yj_celestial_guard_monitor", ava: 1 },
    { id: "yj_zhanshi", ava: 999 },
    { id: "yj_silver_snakes_yin_she_unit", ava: 2 },
    { id: "merc_ninjas", ava: 2 },
    { id: "yj_f_iquan_imperial_tactical_wing", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "yj_longwang_imperial_tag_police", ava: 1 },
    { id: "yj_son_bae_yaokong", ava: 2 },
    { id: "yj_liu_x_ng_jump_infantry", ava: 1 },
    { id: "yj_gud_n_troops", ava: 2 },
    { id: "merc_mech_engineers_zhanshi_gongcheng", ava: 1 },
    { id: "yj_su_jian_immediate_action_unit", ava: 1 },
    { id: "merc_zuy_ng_invincibles_terra_cotta_soldiers", ava: 3 },
  ]},
  "Imperial Service": { id: 202, units: [
    { id: "yj_sun_tze", ava: 1 },
    { id: "yj_dragon_lords_imperial_service_judges", ava: 1 },
    { id: "yj_imperial_vanguard_qianf_ng", ava: 2 },
    { id: "yj_bayara_palace_guard", ava: 2 },
    { id: "yj_kuang_shi", ava: 8 },
    { id: "yj_celestial_guard_monitor", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_deva_functionaries", ava: 3 },
    { id: "merc_ninjas", ava: 1 },
    { id: "yj_major_lunah_ex_aristeia_sniper", ava: 1 },
    { id: "yj_longwang_imperial_tag_police", ava: 1 },
    { id: "merc_miranda_ashcroft_authorized_bounty_hunter", ava: 1 },
    { id: "yj_su_jian_immediate_action_unit", ava: 3 },
    { id: "yj_f_iquan_imperial_tactical_wing", ava: 1 },
    { id: "yj_hsien_warriors", ava: 2 },
    { id: "yj_imperial_agent_adil_mehmut_crane_rank_armor", ava: 1 },
    { id: "yj_gu_f_ng_xi_zhuang", ava: 1 },
    { id: "merc_csu_corporate_security_unit", ava: 2 },
    { id: "yj_bao_troops_judicial_watch_unit", ava: 5 },
    { id: "yj_k_nren_counter_insurgency_group", ava: 3 },
    { id: "yj_koga_ninjas", ava: 2 },
    { id: "yj_imperial_agent_pheasant_rank_y_j", ava: 3 },
    { id: "merc_yaoz_o", ava: 2 },
    { id: "merc_wu_ming_assault_corps_those_without_name", ava: 5 },
    { id: "yj_imperial_agents_crane_rank_xian_he", ava: 3 },
    { id: "merc_taowu_mastermind_and_schemer", ava: 1 },
    { id: "yj_weib_ng_yaokong_guardian_remote", ava: 2 },
    { id: "yj_son_bae_yaokong", ava: 1 },
    { id: "yj_husong_yaokong_escort_remote", ava: 3 },
    { id: "merc_kunai_solutions_ninjas", ava: 1 },
    { id: "merc_authorized_bounty_hunters", ava: 2 },
    { id: "yj_qishi_stateempire_tag_support_pilots", ava: 1, profiles: [{ name: "Adhesive Launcher Rifle+Assault Pistol",    cost:  10, swc: 0 }] },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "yj_shenji_ying_divine_machine_battalion", ava: 2 },
    { id: "yj_jinwei_the_forbidden_troops", ava: 3 },
    { id: "merc_dikpala_tacbots", ava: 3 },
    { id: "yj_cha_yi_yaokong_messenger_remote", ava: 1 },
    { id: "merc_yaopu_pangguling", ava: 2 },
    { id: "merc_motorized_bounty_hunters", ava: 2 },
    { id: "yj_celestial_guard", ava: 999 },
    { id: "yj_j_nyao_drop_unit", ava: 3 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "yj_zhany_ng_imperial_agents", ava: 4 },
    { id: "merc_father_lucien_sforza_authorized_bounty_hunter", ava: 1 },
  ]},
  "Invincible Army": { id: 204, units: [
    { id: "yj_weib_ng_yaokong_guardian_remote", ava: 2 },
    { id: "merc_mech_engineers_zhanshi_gongcheng", ava: 2 },
    { id: "merc_yaopu_pangguling", ava: 2 },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "yj_mowang_troops", ava: 3 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_h_idao_special_support_group", ava: 3 },
    { id: "merc_zh_ncha_armored_reconnaissance_regiment", ava: 4 },
    { id: "yj_daoy_ng_operative_control_unit", ava: 3, profiles: [{ name: "Boarding Shotgun",                          cost:  19, swc: 0, ocultable: true }, { name: "Boarding Shotgun",                          cost:  24, swc: 0.5, ocultable: true }, { name: "MULTI Sniper Rifle+Shock Mine",             cost:  30, swc: 1.5, ocultable: true }, { name: "Boarding Shotgun Lt.L1",                    cost:  23, swc: 0, ocultable: true }, { name: "Boarding Shotgun Lt.L1",                    cost:  28, swc: 0, ocultable: true }, { name: "MULTI Sniper Rifle+Shock Mine Lt.L1",       cost:  34, swc: 1, ocultable: true }] },
    { id: "merc_hulang_shocktroopers", ava: 2 },
    { id: "merc_zuy_ng_invincibles_terra_cotta_soldiers", ava: 5 },
    { id: "yj_hac_tao_special_unit", ava: 1 },
    { id: "merc_bixie_the_jade_champion", ava: 1 },
    { id: "yj_captain_qiang_gao_invincibles_officer", ava: 1 },
    { id: "yj_cha_yi_yaokong_messenger_remote", ava: 2 },
    { id: "merc_zhanshi_y_sh_ng", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "yj_yan_hu_invincibles_fire_support_heavy_regiment", ava: 4 },
    { id: "yj_lei_gong_invincibles_lord_of_thunder", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "yj_zhanshi", ava: 5 },
    { id: "yj_krit_kokram_zuy_ng_invincibles_specialist", ava: 1 },
    { id: "yj_tai_sheng_zuy_ng_invincibles_nco", ava: 1 },
    { id: "yj_son_bae_yaokong", ava: 1 },
    { id: "yj_liu_x_ng_jump_infantry", ava: 4 },
    { id: "merc_guiji_squadrons", ava: 2 },
    { id: "yj_chief_mech_engineer_chung_hee_jeong", ava: 1 },
    { id: "yj_shang_ji_invincibles", ava: 5 },
    { id: "yj_husong_yaokong_escort_remote", ava: 3 },
    { id: "yj_gud_n_troops", ava: 2 },
    { id: "yj_qishi_stateempire_tag_support_pilots", ava: 1, profiles: [{ name: "Submachine Gun",                            cost:  11, swc: 0 }] },
    { id: "merc_libertos_freedom_fighters", ava: 1 },
    { id: "merc_yaoz_o", ava: 4 },
    { id: "merc_johnny_kao_optimate_and_technomancer_master", ava: 1 },
  ]},
  "White Banner": { id: 205, units: [
    { id: "yj_shaolin_warrior_monks", ava: 5 },
    { id: "yj_cha_yi_yaokong_messenger_remote", ava: 2 },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "yj_blue_wolf_mongol_cavalry", ava: 2 },
    { id: "yj_f_iquan_imperial_tactical_wing", ava: 1 },
    { id: "yj_captain_qiang_gao_invincibles_officer", ava: 1 },
    { id: "yj_hwarang_corps", ava: 2 },
    { id: "yj_sergeant_so_ra_kwon_jujak_regiment", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_jujak_regiment_korean_shock_infantry", ava: 4 },
    { id: "yj_hundun_ambush_unit", ava: 3 },
    { id: "yj_husong_yaokong_escort_remote", ava: 3 },
    { id: "yj_gud_n_troops", ava: 3 },
    { id: "yj_jing_qo_the_shadow_of_huangdi", ava: 1 },
    { id: "merc_g_ilang_skirmishers", ava: 4 },
    { id: "merc_tian_g_u_orbital_activity_squad", ava: 3 },
    { id: "merc_yaoz_o", ava: 3 },
    { id: "merc_guiji_squadrons", ava: 1 },
    { id: "yj_lei_gong_invincibles_lord_of_thunder", ava: 1 },
    { id: "yj_chief_mech_engineer_chung_hee_jeong", ava: 1 },
    { id: "merc_bixie_the_jade_champion", ava: 1 },
    { id: "merc_johnny_kao_optimate_and_technomancer_master", ava: 1 },
    { id: "yj_yaofang_long_ya", ava: 2 },
    { id: "merc_zhanshi_y_sh_ng", ava: 1 },
    { id: "merc_tiger_soldiers", ava: 3 },
    { id: "yj_qishi_stateempire_tag_support_pilots", ava: 1, profiles: [{ name: "Light Shotgun",                             cost:  10, swc: 0 }] },
    { id: "merc_beasthunters_free_guild", ava: 1 },
    { id: "yj_zhanshi", ava: 5 },
    { id: "yj_hac_tao_special_unit", ava: 1, profiles: [{ name: "MULTI Rifle+Nanopulser",                    cost:  58, swc: 1, ocultable: true }] },
    { id: "yj_dokkaebi_cyberteam", ava: 1 },
    { id: "yj_son_bae_yaokong", ava: 1 },
    { id: "yj_naval_operations_group_sulyong", ava: 2 },
    { id: "merc_mech_engineers_zhanshi_gongcheng", ava: 2 },
    { id: "merc_yaopu_pangguling", ava: 2 },
    { id: "merc_liang_kai_wandering_shaolin_monk", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "yj_silver_snakes_yin_she_unit", ava: 3 },
    { id: "yj_daof_i_tactical_section", ava: 2 },
    { id: "yj_imperial_agent_adil_mehmut_crane_rank_armor", ava: 1 },
    { id: "yj_haetae_unit", ava: 1 },
    { id: "yj_weib_ng_yaokong_guardian_remote", ava: 2 },
    { id: "merc_kunai_solutions_ninjas", ava: 1 },
    { id: "yj_y_mao_infantry", ava: 5 },
    { id: "yj_sulsa_warriors", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "merc_oktavia_grimsdottir_icebreaker_s_harpooner", ava: 1 },
    { id: "yj_shang_ji_invincibles", ava: 5 },
  ]},
  "Ariadna": { id: 301, units: [
    { id: "merc_varangian_guard", ava: 4 },
    { id: "merc_112_emergency_service_motorized", ava: 1 },
    { id: "ari_uxia_cherry_mcneill_corporal_of_1st_highlanders_s_a_s", ava: 1 },
    { id: "ari_cadin_firststrike_donn_point_man_of_the_grenadiers_reg", ava: 1 },
    { id: "ari_roger_van_zant_captain_of_6th_airborne_ranger_reg_oklahoma", ava: 1 },
    { id: "ari_briscards_8eme_regiment_d_infanterie_de_montagne", ava: 2 },
    { id: "ari_veteran_kazaks", ava: 2 },
    { id: "ari_vassily_plushenko_tankhunters_officer", ava: 1 },
    { id: "ari_loup_garou_groupe_mobile_d_action_speciale", ava: 2 },
    { id: "ari_chernobog_armored_detachment", ava: 1 },
    { id: "ari_william_wallace", ava: 1 },
    { id: "ari_1er_regiment_de_para_commandos", ava: 2 },
    { id: "ari_vystrel_mobile_artillery_regiment", ava: 1 },
    { id: "merc_highlander_caterans", ava: 1 },
    { id: "ari_tankhunters_regiment", ava: 2 },
    { id: "ari_kazak_spetsnazs", ava: 2 },
    { id: "ari_polaris_team", ava: 1 },
    { id: "ari_ariadna_scouts", ava: 1 },
    { id: "ari_the_unknown_ranger", ava: 1 },
    { id: "ari_streloks_kazak_reconaissance_unit", ava: 2 },
    { id: "ari_remontnikbot_v_5_elektronik", ava: 2 },
    { id: "ari_line_kazaks", ava: 999 },
    { id: "merc_traktor_mul_unit", ava: 2 },
    { id: "ari_frontoviks_separate_assault_bat", ava: 2 },
    { id: "ari_antipode_assault_pack", ava: 2 },
    { id: "ari_1st_highlanders_s_a_s", ava: 1 },
    { id: "merc_knauf_outlaw_sniper", ava: 1 },
    { id: "merc_wardrivers_mercenary_hackers", ava: 1 },
    { id: "ari_equipe_mirage_5", ava: 1 },
    { id: "ari_armata_2_proyekt_ratnik", ava: 1 },
    { id: "ari_13eme_moblots", ava: 1 },
    { id: "ari_apaches_equipe_d_intervention_urbaine", ava: 2 },
    { id: "ari_rokots", ava: 2 },
    { id: "ari_7th_foxtrot_rangers_newport", ava: 1 },
    { id: "ari_kazak_doktor", ava: 1 },
    { id: "ari_col_yevgueni_voronin_cossack_diplomatic_corps", ava: 1 },
    { id: "ari_mekhamobilya_support_pilots", ava: 1 },
    { id: "ari_4eme_de_chasseurs", ava: 2 },
    { id: "ari_45th_highlanders_rifles_galwegian", ava: 4 },
    { id: "merc_112_emergency_service", ava: 2 },
    { id: "ari_dynamo_reg_of_kazak_light_cavalry", ava: 2 },
    { id: "ari_konduktors_transtartaric_railway_troops", ava: 1 },
    { id: "ari_dog_warriors", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "ari_zenit_7_detachment", ava: 1 },
    { id: "merc_irmandinhos", ava: 2 },
    { id: "merc_desperadoes", ava: 2 },
    { id: "merc_dozers_field_engineers", ava: 1 },
    { id: "ari_brigadier_jacques_bruant_sous_officier_des_metros", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ari_kibervolk_patrol", ava: 1 },
    { id: "ari_barsuk_territorial_defense_reg", ava: 2 },
  ]},
  "Force de Réponse Rapide Merovingienne": { id: 303, units: [
    { id: "merc_carmen_johns_batard", ava: 1 },
    { id: "merc_knauf_outlaw_sniper", ava: 1, profiles: [{ name: "MULTI Sniper Rifle+AP Heavy Pistol",        cost:  31, swc: 1.5 }, { name: "MULTI Sniper Rifle+AP Heavy Pistol",        cost:  30, swc: 1.5 }] },
    { id: "merc_wardrivers_mercenary_hackers", ava: 2, profiles: [{ name: "Boarding Shotgun+Flash Pulse",              cost:  14, swc: 1 }, { name: "Boarding Shotgun+Flash Pulse",              cost:  16, swc: 1 }, { name: "Combi Rifle+Pitcher",                       cost:  16, swc: 0.5 }] },
    { id: "merc_anaconda_mercenary_tag_squad", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ari_equipe_mirage_5", ava: 1 },
    { id: "ari_loup_garou_groupe_mobile_d_action_speciale", ava: 5 },
    { id: "ari_kuryer_unit", ava: 2 },
    { id: "ari_zouaves_regiment_special_d_intervention", ava: 3 },
    { id: "ari_troupes_metropolitaines", ava: 999 },
    { id: "merc_112_emergency_service_motorized", ava: 3 },
    { id: "ari_1er_regiment_de_para_commandos", ava: 4 },
    { id: "merc_112_emergency_service", ava: 3 },
    { id: "ari_vystrel_mobile_artillery_regiment", ava: 2 },
    { id: "ari_briscards_8eme_regiment_d_infanterie_de_montagne", ava: 5 },
    { id: "ari_13eme_moblots", ava: 5 },
    { id: "merc_dozers_field_engineers", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "ari_apaches_equipe_d_intervention_urbaine", ava: 2 },
    { id: "merc_traktor_mul_unit", ava: 2 },
    { id: "ari_4eme_de_chasseurs", ava: 4 },
    { id: "ari_brigadier_jacques_bruant_sous_officier_des_metros", ava: 1, profiles: [{ name: "AP Spitfire+Chain-colt",                    cost:  28, swc: 1 }, { name: "AP Spitfire+Chain-colt",                    cost:  33, swc: 1 }, { name: "AP Spitfire+Chain-colt Lt.L1",              cost:  28, swc: 1 }, { name: "AP Spitfire+Chain-colt Lt.L1",              cost:  32, swc: 1 }] },
    { id: "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter", ava: 1 },
  ]},
  "Tartary Army Corps": { id: 305, units: [
    { id: "ari_frontoviks_separate_assault_bat", ava: 5 },
    { id: "merc_112_emergency_service_motorized", ava: 2 },
    { id: "merc_112_emergency_service", ava: 2 },
    { id: "ari_vystrel_mobile_artillery_regiment", ava: 2 },
    { id: "merc_wardrivers_mercenary_hackers", ava: 1 },
    { id: "ari_kazak_spetsnazs", ava: 4 },
    { id: "ari_tankhunters_regiment", ava: 4 },
    { id: "ari_ariadna_scouts", ava: 4 },
    { id: "ari_col_yevgueni_voronin_cossack_diplomatic_corps", ava: 1, profiles: [{ name: "Light Shotgun+Flash Pulse",                 cost:  18, swc: 0 }, { name: "Light Shotgun+Flash Pulse Lt.L1",           cost:  22, swc: 0 }, { name: "T2 Boarding Shotgun",                       cost:  18, swc: 0 }, { name: "T2 Boarding Shotgun Lt.L1",                 cost:  22, swc: 0 }] },
    { id: "ari_dog_warriors", ava: 3 },
    { id: "merc_carmen_johns_batard", ava: 1 },
    { id: "merc_beasthunters_free_guild", ava: 1 },
    { id: "ari_dynamo_reg_of_kazak_light_cavalry", ava: 5 },
    { id: "ari_konduktors_transtartaric_railway_troops", ava: 2 },
    { id: "ari_barsuk_territorial_defense_reg", ava: 3 },
    { id: "ari_streloks_kazak_reconaissance_unit", ava: 4, profiles: [{ name: "T2 Marksman Rifle+AP Mine",                 cost:  24, swc: 0, ocultable: true }, { name: "Submachine Gun+Chain-colt",                 cost:  16, swc: 0, ocultable: true }, { name: "Submachine Gun+Chain-colt",                 cost:  26, swc: 0, ocultable: true }, { name: "Boarding Shotgun+AP Mine",                  cost:  17, swc: 0.5, ocultable: true }, { name: "Boarding Shotgun+Flash Pulse",              cost:  17, swc: 0, ocultable: true }] },
    { id: "merc_irmandinhos", ava: 4 },
    { id: "ari_pavel_aleksei_mcmannus_spetsgruppa_g", ava: 1 },
    { id: "ari_antipode_assault_pack", ava: 2 },
    { id: "ari_kuryer_unit", ava: 2 },
    { id: "ari_vassily_plushenko_tankhunters_officer", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "ari_armata_2_proyekt_ratnik", ava: 3 },
    { id: "ari_line_kazaks", ava: 999 },
    { id: "merc_traktor_mul_unit", ava: 2 },
    { id: "ari_kazak_doktor", ava: 3 },
    { id: "merc_dozers_field_engineers", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ari_veteran_kazaks", ava: 5 },
    { id: "ari_remontnikbot_v_5_elektronik", ava: 1 },
  ]},
  "Kosmoflot": { id: 306, units: [
    { id: "merc_irmandinhos", ava: 4 },
    { id: "merc_112_emergency_service", ava: 2 },
    { id: "ari_kibervolk_patrol", ava: 2 },
    { id: "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter", ava: 1 },
    { id: "ari_chernobog_armored_detachment", ava: 2 },
    { id: "ari_patchers_structural_response_team", ava: 2 },
    { id: "merc_denma_connolly_caledonian_zellenkrieger", ava: 1 },
    { id: "ari_william_wallace", ava: 1, profiles: [{ name: "T2 Rifle+Light Shotgun",                    cost:  38, swc: 0 }, { name: "T2 Rifle+Light Shotgun Lt.L1",              cost:  38, swc: 0 }] },
    { id: "ari_1st_highlanders_s_a_s", ava: 3 },
    { id: "merc_wardrivers_mercenary_hackers", ava: 1 },
    { id: "ari_uxia_cherry_mcneill_corporal_of_1st_highlanders_s_a_s", ava: 1 },
    { id: "ari_volkolak_assault_troopers", ava: 3 },
    { id: "ari_rokots", ava: 5, profiles: [{ name: "Chain Rifle+Light Shotgun",                 cost:   8, swc: 0 }, { name: "Submachine Gun+Grenades",                   cost:   9, swc: 0 }, { name: "Submachine Gun+Grenades",                   cost:  10, swc: 0 }, { name: "Submachine Gun+Grenades",                   cost:  11, swc: 0 }, { name: "Rifle+Light Shotgun",                       cost:  12, swc: 0 }, { name: "Submachine Gun+Grenades Lt.L1",             cost:   9, swc: 0 }] },
    { id: "ari_kazak_doktor", ava: 2 },
    { id: "merc_traktor_mul_unit", ava: 2 },
    { id: "ari_pavel_aleksei_mcmannus_spetsgruppa_g", ava: 1 },
    { id: "ari_mekhaniks_flight_engineers_corps", ava: 2 },
    { id: "ari_frontoviks_separate_assault_bat", ava: 5 },
    { id: "merc_varangian_guard", ava: 4, profiles: [{ name: "Chain Rifle+Grenades",                      cost:  10, swc: 0 }, { name: "Boarding Shotgun+Smoke Grenades",           cost:  13, swc: 0 }, { name: "Submachine Gun+Chain Rifle",                cost:  12, swc: 0 }, { name: "Submachine Gun+Chain-colt",                 cost:  13, swc: 0 }, { name: "Submachine Gun+Chain Rifle",                cost:  13, swc: 0 }] },
    { id: "merc_112_emergency_service_motorized", ava: 1 },
    { id: "ari_1er_regiment_de_para_commandos", ava: 3 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ari_polaris_team", ava: 2 },
    { id: "ari_the_unknown_ranger", ava: 1 },
    { id: "ari_equipe_mirage_5", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "ari_mekhamobilya_support_pilots", ava: 1 },
    { id: "ari_the_scots_guards_6th_caledonian_infantry_regiment", ava: 5 },
    { id: "ari_cadin_firststrike_donn_point_man_of_the_grenadiers_reg", ava: 1 },
    { id: "ari_remontnikbot_v_5_elektronik", ava: 2 },
    { id: "merc_raveneye_officers", ava: 1 },
    { id: "ari_zenit_7_detachment", ava: 2 },
    { id: "ari_strannik_outer_patrol", ava: 2 },
    { id: "merc_dozers_field_engineers", ava: 1 },
    { id: "merc_highlander_caterans", ava: 2 },
    { id: "ari_armata_4_proyekt_kosmosoldat", ava: 2 },
  ]},
  "Haqqislam": { id: 401, units: [
    { id: "haqq_hassassin_ragiks", ava: 2 },
    { id: "haqq_burkut_aerospace_engineering_regiment", ava: 2 },
    { id: "merc_maghariba_guard", ava: 2 },
    { id: "haqq_hassassin_farzans", ava: 1 },
    { id: "haqq_khawarijs", ava: 3 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "haqq_sunduqbut_covert_heavy_support_unit", ava: 1 },
    { id: "merc_najjarun_engineer", ava: 2 },
    { id: "haqq_yara_haddad_intel_ops_mutafawiq_officer", ava: 1 },
    { id: "merc_hunzakuts", ava: 2 },
    { id: "haqq_zamira_nazarova_kum_enforcer", ava: 1 },
    { id: "haqq_hafza_unit", ava: 2 },
    { id: "haqq_zeybek_aero_unit", ava: 1 },
    { id: "haqq_janissaries", ava: 2 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "haqq_hassassin_muyibs", ava: 2 },
    { id: "haqq_hassassin_barid", ava: 1 },
    { id: "haqq_ghazi_muttawi_ah", ava: 4 },
    { id: "merc_fanous_remotes", ava: 1 },
    { id: "merc_al_hawwa_unit", ava: 2 },
    { id: "haqq_sekban_naval_special_unit", ava: 2 },
    { id: "haqq_zuleyka_nazarova_kum_enforcer", ava: 1 },
    { id: "merc_rafiq_remotes", ava: 2 },
    { id: "haqq_husam_operative_leila_sharif", ava: 1 },
    { id: "haqq_hassassin_fiday", ava: 1 },
    { id: "haqq_asawira_regiment", ava: 1 },
    { id: "haqq_hassassin_bokhtar", ava: 1 },
    { id: "haqq_zhayedan_intervention_troops", ava: 3 },
    { id: "merc_dr_claire_lazhari_genephilosopher_and_optimate", ava: 1 },
    { id: "haqq_naffatun", ava: 4 },
    { id: "merc_shihab_remotes", ava: 1 },
    { id: "merc_nasmat_remotes", ava: 4 },
    { id: "haqq_djanbazan_tactical_group", ava: 3 },
    { id: "haqq_murabids_tuareg", ava: 2 },
    { id: "haqq_korsan_corsairs_of_the_gate", ava: 2 },
    { id: "haqq_daylami_infantry", ava: 3 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 1 },
    { id: "haqq_haytham_aero_unit", ava: 1 },
    { id: "haqq_special_deterrance_group_azra_il", ava: 1 },
    { id: "merc_ghulam_infantry", ava: 999 },
    { id: "haqq_mukhtar_active_response_unit", ava: 2 },
    { id: "haqq_medical_specialist_rahman_rouhani", ava: 1 },
    { id: "haqq_hassassin_nadhir", ava: 1 },
    { id: "merc_shaytaniyah_remotes", ava: 1 },
    { id: "merc_kameel_remotes", ava: 2 },
    { id: "haqq_sayiq_sword_of_allah_tag_support_pilots", ava: 1 },
    { id: "merc_yuan_yuan", ava: 2 },
    { id: "haqq_shakush_light_armored_unit", ava: 2 },
    { id: "merc_kum_motorized_troops", ava: 2 },
    { id: "merc_knauf_outlaw_sniper", ava: 1 },
    { id: "haqq_saladin_o_12_liaison_officer", ava: 1 },
    { id: "merc_scarface_cordelia_mercenary_armored_team", ava: 1 },
    { id: "haqq_hassassin_lasiqs", ava: 1 },
    { id: "merc_bashi_bazouks", ava: 2 },
    { id: "merc_racerbots_2", ava: 2 },
    { id: "merc_odalisques", ava: 4 },
  ]},
  "Hassassin Bahram": { id: 402, units: [
    { id: "haqq_yara_haddad_intel_ops_mutafawiq_officer", ava: 1, profiles: [{ name: "AP Marksman Rifle",                         cost:  24, swc: 0 }, { name: "AP Marksman Rifle",                         cost:  27, swc: 0 }, { name: "AP Marksman Rifle Lt.L1",                   cost:  24, swc: 0 }, { name: "AP Marksman Rifle Lt.L1",                   cost:  27, swc: 0 }] },
    { id: "merc_rafiq_remotes", ava: 2 },
    { id: "haqq_hassassin_farzans", ava: 3 },
    { id: "merc_kameel_remotes", ava: 2 },
    { id: "haqq_hussein_al_djabel_hassassin_fiday", ava: 1 },
    { id: "haqq_hassassin_fiday", ava: 2 },
    { id: "merc_avicenna_mercenary_doctor", ava: 1 },
    { id: "haqq_hassassin_husam_yasbir", ava: 1 },
    { id: "haqq_hassassin_muyibs", ava: 6 },
    { id: "haqq_hassassin_barid", ava: 2 },
    { id: "haqq_ghazi_muttawi_ah", ava: 4 },
    { id: "haqq_hassassin_ragiks", ava: 4 },
    { id: "merc_mcmurrough_mercenary_dog_warrior", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "haqq_sunduqbut_covert_heavy_support_unit", ava: 2 },
    { id: "haqq_hassassin_ayyar", ava: 2 },
    { id: "merc_dr_claire_lazhari_genephilosopher_and_optimate", ava: 1 },
    { id: "merc_najjarun_engineer", ava: 1 },
    { id: "merc_shihab_remotes", ava: 1 },
    { id: "merc_shaytaniyah_remotes", ava: 1 },
    { id: "haqq_hassassin_govads", ava: 5 },
    { id: "haqq_asawira_regiment", ava: 3 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "haqq_hassassin_bokhtar", ava: 2 },
    { id: "haqq_hassassin_shujae", ava: 2 },
    { id: "haqq_hassassin_lasiqs", ava: 3 },
    { id: "merc_nasmat_remotes", ava: 2 },
    { id: "merc_fanous_remotes", ava: 1 },
    { id: "haqq_hassassin_nadhir", ava: 2 },
    { id: "haqq_husam_operative_leila_sharif", ava: 1 },
    { id: "haqq_daylami_infantry", ava: 5 },
    { id: "haqq_sayiq_sword_of_allah_tag_support_pilots", ava: 1, profiles: [{ name: "Submachine Gun+D-Charges",                  cost:   9, swc: 0 }] },
    { id: "haqq_shakush_light_armored_unit", ava: 2 },
    { id: "merc_ghulam_infantry", ava: 4 },
  ]},
  "Qapu Khalqi": { id: 403, units: [
    { id: "merc_nasmat_remotes", ava: 2 },
    { id: "merc_fanous_remotes", ava: 3 },
    { id: "haqq_djanbazan_tactical_group", ava: 5 },
    { id: "merc_al_hawwa_unit", ava: 3 },
    { id: "merc_shaytaniyah_remotes", ava: 1 },
    { id: "merc_wild_bill_legendary_gunslinger", ava: 1 },
    { id: "merc_kaplan_tactical_services_kts", ava: 5 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_ghulam_infantry", ava: 999 },
    { id: "merc_mobile_brigada", ava: 1 },
    { id: "merc_dr_claire_lazhari_genephilosopher_and_optimate", ava: 1 },
    { id: "merc_shihab_remotes", ava: 2 },
    { id: "merc_kameel_remotes", ava: 2 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 2 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "merc_najjarun_engineer", ava: 1 },
    { id: "haqq_sekban_naval_special_unit", ava: 5 },
    { id: "merc_laxmee_hacker_of_fortune", ava: 1 },
    { id: "merc_druze_shock_teams", ava: 5 },
    { id: "haqq_hafza_unit", ava: 4 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_corregidor_alguaciles", ava: 4 },
    { id: "merc_odalisques", ava: 5 },
    { id: "merc_iguana_squadron", ava: 1 },
    { id: "haqq_medical_specialist_rahman_rouhani", ava: 1 },
    { id: "merc_security_chief_arslan", ava: 1 },
    { id: "haqq_burkut_aerospace_engineering_regiment", ava: 3 },
    { id: "merc_freelance_operator_samsa", ava: 1 },
    { id: "haqq_zeybek_aero_unit", ava: 1 },
    { id: "haqq_special_deterrance_group_azra_il", ava: 3 },
    { id: "merc_scarface_cordelia_mercenary_armored_team", ava: 1 },
    { id: "merc_rafiq_remotes", ava: 1 },
    { id: "haqq_husam_operative_leila_sharif", ava: 1 },
    { id: "haqq_korsan_corsairs_of_the_gate", ava: 3 },
    { id: "haqq_sayiq_sword_of_allah_tag_support_pilots", ava: 1, profiles: [{ name: "Submachine Gun+D-Charges",                  cost:   9, swc: 0 }] },
    { id: "merc_yuan_yuan", ava: 3 },
    { id: "haqq_shakush_light_armored_unit", ava: 2 },
    { id: "haqq_janissaries", ava: 5 },
    { id: "merc_bashi_bazouks", ava: 4 },
  ]},
  "Ramah Taskforce": { id: 404, units: [
    { id: "merc_maghariba_guard", ava: 2 },
    { id: "haqq_murabids_tuareg", ava: 3 },
    { id: "haqq_sayiq_sword_of_allah_tag_support_pilots", ava: 1 },
    { id: "merc_monstruckers", ava: 2 },
    { id: "haqq_khawarijs", ava: 5 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "haqq_mukhtar_active_response_unit", ava: 4 },
    { id: "merc_najjarun_engineer", ava: 1 },
    { id: "merc_shaytaniyah_remotes", ava: 1 },
    { id: "merc_wild_bill_legendary_gunslinger", ava: 1 },
    { id: "merc_rafiq_remotes", ava: 2 },
    { id: "haqq_shakush_light_armored_unit", ava: 2 },
    { id: "merc_valerya_gromoz_mercenary_hacker", ava: 1 },
    { id: "haqq_zhayedan_intervention_troops", ava: 5 },
    { id: "haqq_medical_specialist_rahman_rouhani", ava: 1 },
    { id: "haqq_hakims_special_medical_assistance_team", ava: 2 },
    { id: "merc_nasmat_remotes", ava: 4 },
    { id: "merc_kameel_remotes", ava: 2 },
    { id: "haqq_tarik_mansuri_khawarij_amir", ava: 1 },
    { id: "merc_carmen_johns_batard", ava: 1 },
    { id: "merc_beasthunters_free_guild", ava: 1, profiles: [{ name: "Heavy Flamethrower+Panzerfaust",            cost:   9, swc: 0 }, { name: "Heavy Flamethrower+Tactical Bow",           cost:  15, swc: 0 }, { name: "Heavy Flamethrower+Panzerfaust",            cost:  15, swc: 0 }] },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "haqq_haytham_aero_unit", ava: 1 },
    { id: "merc_ghulam_infantry", ava: 999 },
    { id: "merc_dr_claire_lazhari_genephilosopher_and_optimate", ava: 1 },
    { id: "haqq_yara_haddad_intel_ops_mutafawiq_officer", ava: 1 },
    { id: "merc_hunzakuts", ava: 1 },
    { id: "haqq_nahab_aeromobile_team", ava: 3 },
    { id: "merc_al_fasid_regiment", ava: 3 },
    { id: "haqq_naffatun", ava: 5 },
    { id: "merc_shihab_remotes", ava: 2 },
    { id: "merc_fanous_remotes", ava: 3 },
    { id: "haqq_burkut_aerospace_engineering_regiment", ava: 2 },
    { id: "haqq_husam_operative_leila_sharif", ava: 1 },
    { id: "haqq_hortlak_janissaries", ava: 2 },
    { id: "haqq_janissaries", ava: 5 },
    { id: "haqq_namurr_experimental_operative_group", ava: 2 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
  ]},
  "Nomads": { id: 501, units: [
    { id: "nom_zeros", ava: 2 },
    { id: "nom_tunguska_interventors", ava: 2 },
    { id: "nom_securitate", ava: 5 },
    { id: "nom_sin_eater_observants", ava: 1 },
    { id: "nom_tag_treiber_nmf_tag_squadrons_support_pilots", ava: 1 },
    { id: "nom_switchers_gruppa", ava: 1 },
    { id: "nom_kulak_payback_unit", ava: 2 },
    { id: "nom_shifta_insertion_group", ava: 1 },
    { id: "nom_territorials_territorial_domination_unit", ava: 2 },
    { id: "merc_bakunin_clockmakers", ava: 1 },
    { id: "nom_mary_problems_tactical_uberhacker", ava: 1 },
    { id: "nom_hecklers", ava: 1 },
    { id: "merc_reaktion_zonds", ava: 1 },
    { id: "nom_casino_security_rounders", ava: 2 },
    { id: "merc_salyut_zonds", ava: 2 },
    { id: "nom_zondnautica_rapid_offensive_unit", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "nom_kriza_boracs_special_crisis_unit", ava: 1 },
    { id: "nom_taskmasters_bakunin_swast_team", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "nom_tunguska_triggermen", ava: 1 },
    { id: "merc_mobile_brigada", ava: 5 },
    { id: "merc_racerbots_2", ava: 2 },
    { id: "nom_grenzers_grenz_security_team", ava: 1 },
    { id: "nom_bakunin_uberfallkommando", ava: 1 },
    { id: "merc_zondbots", ava: 2 },
    { id: "nom_die_morlock_gruppe", ava: 2 },
    { id: "merc_tsyklon_sputnik", ava: 2 },
    { id: "nom_meteor_zonds", ava: 1 },
    { id: "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter", ava: 1 },
    { id: "nom_evaders_eva_tactical_group", ava: 1 },
    { id: "nom_gator_squadron", ava: 1 },
    { id: "nom_coyotes_recon_and_maneuver_team", ava: 1 },
    { id: "merc_daktaris_daks_campaign_doctors", ava: 1 },
    { id: "nom_moderators_from_bakunin", ava: 5 },
    { id: "nom_moran_maasai_hunter", ava: 1 },
    { id: "merc_vertigo_zonds", ava: 1 },
    { id: "nom_zoe_pi_well", ava: 1 },
    { id: "nom_szalamandra_squadron", ava: 1 },
    { id: "nom_gecko_squadron", ava: 2 },
    { id: "merc_hellcats", ava: 2 },
    { id: "nom_bearcats_airborne_heavy_regiment", ava: 1 },
    { id: "nom_puppet_masters", ava: 1 },
    { id: "nom_puppetbots_full_power", ava: 3 },
    { id: "nom_spektrs", ava: 1 },
    { id: "merc_transductor_zonds", ava: 2 },
    { id: "nom_jazz_billie_tactical_hacking_team", ava: 1 },
    { id: "nom_redsky_crew_marspiders", ava: 2 },
    { id: "nom_go_pod", ava: 1 },
    { id: "merc_stempler_zonds", ava: 2 },
    { id: "nom_vostok_sputniks", ava: 1 },
    { id: "nom_perseus_rogue_myrmidon", ava: 1 },
    { id: "nom_intruders_corregidor_assault_commandos", ava: 1 },
    { id: "merc_corregidor_alguaciles", ava: 5 },
    { id: "nom_vigilantes_tactical_support_and_surveillance_special_group", ava: 2 },
  ]},
  "Corregidor": { id: 502, units: [
    { id: "merc_valerya_gromoz_mercenary_hacker", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "nom_the_diablos_of_d_block", ava: 4 },
    { id: "nom_gecko_squadron", ava: 4 },
    { id: "merc_hellcats", ava: 5 },
    { id: "merc_corregidor_alguaciles", ava: 999, profiles: [{ name: "Combi Rifle",                               cost:  10, swc: 0 }, { name: "Heavy Machine Gun",                         cost:  18, swc: 1 }, { name: "Missile Launcher",                          cost:  15, swc: 1.5 }, { name: "Combi Rifle",                               cost:  15, swc: 0.5 }, { name: "Combi Rifle+Flash Pulse",                   cost:  12, swc: 0 }, { name: "Combi Rifle",                               cost:  12, swc: 0 }, { name: "Combi Rifle Lt.L1",                         cost:  10, swc: 0 }, { name: "Submachine Gun+Contender",                  cost:  10, swc: 0 }, { name: "Submachine Gun+E/Mitter",                   cost:  10, swc: 0 }, { name: "Submachine Gun+Adhesive Launcher Rifle",    cost:  10, swc: 0 }] },
    { id: "nom_tomcats_emergency_and_rescue_special_team", ava: 4 },
    { id: "nom_evaders_eva_tactical_group", ava: 3 },
    { id: "nom_vigilantes_tactical_support_and_surveillance_special_group", ava: 2 },
    { id: "nom_jazz_billie_tactical_hacking_team", ava: 1 },
    { id: "merc_reaktion_zonds", ava: 1 },
    { id: "merc_salyut_zonds", ava: 2 },
    { id: "merc_senor_massacre", ava: 1 },
    { id: "merc_kazuraba_ruby_monday", ava: 1 },
    { id: "nom_intruders_corregidor_assault_commandos", ava: 5 },
    { id: "nom_meteor_zonds", ava: 1 },
    { id: "nom_bearcats_airborne_heavy_regiment", ava: 3 },
    { id: "nom_moran_maasai_hunter", ava: 2 },
    { id: "merc_bakunin_clockmakers", ava: 1 },
    { id: "merc_zondbots", ava: 2 },
    { id: "nom_lobos_correctional_response_group", ava: 4 },
    { id: "merc_corregidor_bandits", ava: 2 },
    { id: "merc_corregidor_jaguars", ava: 5 },
    { id: "nom_coyotes_recon_and_maneuver_team", ava: 3 },
    { id: "merc_daktaris_daks_campaign_doctors", ava: 2 },
    { id: "merc_vertigo_zonds", ava: 1 },
    { id: "merc_transductor_zonds", ava: 2 },
    { id: "nom_tag_treiber_nmf_tag_squadrons_support_pilots", ava: 1, profiles: [{ name: "Combi Rifle+Assault Pistol",                cost:  12, swc: 0 }, { name: "Boarding Shotgun+D-Charges",                cost:  11, swc: 0 }] },
    { id: "nom_wildcats_polyvalent_tactical_unit", ava: 5 },
    { id: "merc_mobile_brigada", ava: 6, profiles: [{ name: "MULTI Rifle+Boarding Pistol",               cost:  33, swc: 0 }, { name: "Heavy Machine Gun+Boarding Pistol",         cost:  38, swc: 1.5 }, { name: "Boarding Shotgun+Boarding Pistol",          cost:  27, swc: 0 }, { name: "Missile Launcher+Boarding Pistol",          cost:  35, swc: 1.5 }, { name: "Combi Rifle+D-Charges",                     cost:  36, swc: 0.5 }, { name: "MULTI Rifle+Boarding Pistol Lt.L1",         cost:  33, swc: 0 }, { name: "Boarding Shotgun+Boarding Pistol Lt.L1",    cost:  27, swc: 0 }, { name: "Heavy Machine Gun+Boarding Pistol Lt.L1",   cost:  38, swc: 1 }] },
    { id: "nom_sombras_forward_interdiction_team", ava: 2 },
    { id: "nom_shifta_insertion_group", ava: 2 },
    { id: "nom_territorials_territorial_domination_unit", ava: 3 },
    { id: "merc_mcmurrough_mercenary_dog_warrior", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_stempler_zonds", ava: 1 },
    { id: "nom_vostok_sputniks", ava: 2 },
    { id: "nom_alguacil_vortex_lupe_balboa", ava: 1 },
    { id: "nom_gator_squadron", ava: 2 },
    { id: "nom_carlota_kowalsky_tomcats_sergeant", ava: 1 },
    { id: "merc_iguana_squadron", ava: 2 },
  ]},
  "Bakunin": { id: 503, units: [
    { id: "merc_vertigo_zonds", ava: 1 },
    { id: "nom_bran_do_castro_triple_zero", ava: 1 },
    { id: "merc_reaktion_zonds", ava: 1 },
    { id: "nom_reverend_moiras", ava: 5 },
    { id: "merc_extreme_zellenkrieger", ava: 1 },
    { id: "nom_meteor_zonds", ava: 1 },
    { id: "merc_zondbots", ava: 4 },
    { id: "nom_die_morlock_gruppe", ava: 999 },
    { id: "merc_salyut_zonds", ava: 2 },
    { id: "merc_denma_connolly_caledonian_zellenkrieger", ava: 1 },
    { id: "merc_avicenna_mercenary_doctor", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "nom_go_pod", ava: 1 },
    { id: "nom_vostok_sputniks", ava: 2 },
    { id: "nom_mother_healer_agatha_wabara", ava: 1 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter", ava: 1 },
    { id: "merc_daktaris_daks_campaign_doctors", ava: 1 },
    { id: "nom_moderators_from_bakunin", ava: 999 },
    { id: "nom_prowlers", ava: 3 },
    { id: "nom_initiated_observants", ava: 2 },
    { id: "nom_orphans_of_the_observance", ava: 3 },
    { id: "merc_bakunin_clockmakers", ava: 2 },
    { id: "nom_zoe_pi_well", ava: 1 },
    { id: "nom_sin_eater_observants", ava: 3, profiles: [{ name: "Heavy Machine Gun",                         cost:  28, swc: 1.5 }, { name: "MULTI Sniper Rifle",                        cost:  26, swc: 1.5 }, { name: "Mk12",                                      cost:  25, swc: 0 }, { name: "MULTI Sniper Rifle",                        cost:  28, swc: 1 }] },
    { id: "nom_reverend_custodiers", ava: 3 },
    { id: "nom_taskmasters_bakunin_swast_team", ava: 3 },
    { id: "nom_daemonist_observant", ava: 1 },
    { id: "nom_reverend_cenobites", ava: 3 },
    { id: "merc_tsyklon_sputnik", ava: 2, profiles: [{ name: "Spitfire+Chain Rifle",                      cost:  26, swc: 1 }, { name: "Feuerbach+Chain Rifle",                     cost:  29, swc: 1 }] },
    { id: "nom_reverend_healers", ava: 3 },
    { id: "nom_zeros", ava: 3 },
    { id: "merc_transductor_zonds", ava: 2 },
    { id: "nom_redsky_crew_marspiders", ava: 2 },
    { id: "merc_uhahu_hacker_for_hire", ava: 1 },
    { id: "nom_casino_security_rounders", ava: 2 },
    { id: "nom_stigmata_of_the_observance", ava: 2 },
    { id: "nom_robin_hook_outlaw_ai", ava: 1 },
    { id: "merc_zellenkrieger", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_mobile_brigada", ava: 1 },
    { id: "merc_corregidor_alguaciles", ava: 2 },
    { id: "nom_lizard_squadron", ava: 1 },
    { id: "nom_bakunin_uberfallkommando", ava: 3 },
    { id: "nom_reverend_superior_cassandra_kusanagi", ava: 1 },
    { id: "nom_tag_treiber_nmf_tag_squadrons_support_pilots", ava: 1, profiles: [{ name: "Submachine Gun+E/Mitter",                   cost:  10, swc: 0 }] },
    { id: "merc_riot_grrls", ava: 5 },
    { id: "nom_penitent_observants", ava: 3 },
    { id: "merc_stempler_zonds", ava: 2 },
  ]},
  "Tunguska": { id: 504, units: [
    { id: "nom_grenzers_grenz_security_team", ava: 5 },
    { id: "merc_bakunin_clockmakers", ava: 2 },
    { id: "nom_the_hollow_men_tactical_assault_team", ava: 5 },
    { id: "merc_zondbots", ava: 2 },
    { id: "nom_szalamandra_squadron", ava: 2 },
    { id: "nom_tag_treiber_nmf_tag_squadrons_support_pilots", ava: 1, profiles: [{ name: "Light Shotgun+Cybermine",                   cost:  10, swc: 0 }] },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "nom_switchers_gruppa", ava: 2 },
    { id: "merc_raoul_spector_mercenary_operative", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "nom_vostok_sputniks", ava: 2 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "merc_mobile_brigada", ava: 1 },
    { id: "merc_father_lucien_sforza_authorized_bounty_hunter", ava: 1 },
    { id: "nom_spektrs", ava: 3, profiles: [{ name: "MULTI Sniper Rifle+Shock Mine",             cost:  32, swc: 1.5, ocultable: true }, { name: "Submachine Gun+E/M Mine",                   cost:  28, swc: 0, ocultable: true }, { name: "Combi Rifle+D-Charges",                     cost:  35, swc: 0.5, ocultable: true }, { name: "Submachine Gun+Cybermine",                  cost:  30, swc: 0, ocultable: true }, { name: "Boarding Shotgun+Shock Mine",               cost:  29, swc: 0, ocultable: true }, { name: "Boarding Shotgun+D-Charges",                cost:  32, swc: 0.5, ocultable: true }, { name: "Combi Rifle+D-Charges",                     cost:  33, swc: 1, ocultable: true }] },
    { id: "nom_tunguska_interventors", ava: 4 },
    { id: "nom_casino_security_rounders", ava: 2 },
    { id: "nom_zondnautica_rapid_offensive_unit", ava: 3 },
    { id: "merc_zellenkrieger", ava: 2, profiles: [{ name: "Light Shotgun+Smoke Grenades",              cost:   8, swc: 0 }, { name: "Pulzar+Smoke Grenades",                     cost:   8, swc: 0 }] },
    { id: "nom_kulak_payback_unit", ava: 2, profiles: [{ name: "Heavy Rocket Launcher+Pulzar",              cost:  20, swc: 1 }, { name: "Boarding Shotgun+D-Charges",                cost:  23, swc: 0 }, { name: "AP Submachine Gun+D-Charges",               cost:  20, swc: 0 }, { name: "Boarding Shotgun+Flash Pulse",              cost:  19, swc: 0 }, { name: "Combi Rifle+Pulzar",                        cost:  21, swc: 0 }] },
    { id: "nom_jelena_kova_securitate_di", ava: 1 },
    { id: "merc_tsyklon_sputnik", ava: 2 },
    { id: "merc_corregidor_alguaciles", ava: 2 },
    { id: "merc_transductor_zonds", ava: 2 },
    { id: "merc_authorized_bounty_hunters", ava: 3 },
    { id: "merc_motorized_bounty_hunters", ava: 3 },
    { id: "nom_go_pod", ava: 1 },
    { id: "nom_kriza_boracs_special_crisis_unit", ava: 2 },
    { id: "nom_perseus_rogue_myrmidon", ava: 1 },
    { id: "merc_daktaris_daks_campaign_doctors", ava: 1 },
    { id: "merc_vertigo_zonds", ava: 1 },
    { id: "nom_hecklers", ava: 3, profiles: [{ name: "Combi Rifle+Jammer",                        cost:  23, swc: 0, ocultable: true }, { name: "Boarding Shotgun+E/Marat",                  cost:  20, swc: 0, ocultable: true }, { name: "Red Fury",                                  cost:  24, swc: 1, ocultable: true }, { name: "Combi Rifle+Cybermine",                     cost:  23, swc: 0, ocultable: true }] },
    { id: "merc_salyut_zonds", ava: 2 },
    { id: "merc_denma_connolly_caledonian_zellenkrieger", ava: 1 },
    { id: "merc_stempler_zonds", ava: 2 },
    { id: "nom_tunguska_triggermen", ava: 3 },
    { id: "nom_meteor_zonds", ava: 1 },
    { id: "nom_puppet_masters", ava: 1 },
    { id: "nom_puppetbots_full_power", ava: 3 },
    { id: "nom_tunguska_cheerkillers", ava: 5 },
    { id: "nom_mary_problems_tactical_uberhacker", ava: 1 },
    { id: "nom_securitate", ava: 999 },
    { id: "merc_miranda_ashcroft_authorized_bounty_hunter", ava: 1 },
    { id: "merc_reaktion_zonds", ava: 1 },
    { id: "merc_anaconda_mercenary_tag_squad", ava: 1 },
    { id: "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter", ava: 1 },
  ]},
  "Combined Army": { id: 601, units: [
    { id: "ca_imetron", ava: 2 },
    { id: "ca_shasvastii_special_armoured_corp_sphinx", ava: 1 },
    { id: "ca_caskuda_wcd_armored_jump_operator", ava: 1 },
    { id: "ca_yaogat_strike_infantry", ava: 3 },
    { id: "ca_speculo_killers", ava: 1 },
    { id: "ca_unidron_batroids", ava: 999 },
    { id: "ca_med_tech_obsidon_medchanoids", ava: 1 },
    { id: "ca_slave_drones", ava: 2 },
    { id: "ca_e_drones", ava: 2 },
    { id: "ca_ikadron_batroid", ava: 2 },
    { id: "ca_victor_messer_autonomous_agent_of_chaos", ava: 1 },
    { id: "ca_morat_vanguard_infantry", ava: 4 },
    { id: "ca_avatar", ava: 1 },
    { id: "ca_special_operative_ko_dali", ava: 1 },
    { id: "ca_daturazi_witch_soldiers", ava: 4 },
    { id: "ca_sartroids_ranters_cyberplugged_attack_remotes", ava: 1 },
    { id: "merc_armand_le_muet_freelance_killer", ava: 1 },
    { id: "ca_greif_operators", ava: 1 },
    { id: "merc_krakot_renegades_morat_fugitives", ava: 2 },
    { id: "ca_shasvastii_sabotage_and_destruction_unit_caliban", ava: 2 },
    { id: "ca_r_drones", ava: 1 },
    { id: "ca_sartroids_puzzlers_cyberplugged_attack_remotes", ava: 1 },
    { id: "ca_malignos_shasvastii_deep_incursion_corps", ava: 2 },
    { id: "ca_the_shrouded_shasvastii_pioneer_corps", ava: 2 },
    { id: "ca_rasyat_diplomatic_division", ava: 1 },
    { id: "ca_rindak_emergency_brigade", ava: 1 },
    { id: "ca_shasvastii_tactical_dominance_special_wing_noctifers", ava: 1 },
    { id: "ca_wcd_vector_operators", ava: 1 },
    { id: "ca_m_drones", ava: 2 },
    { id: "ca_t_drones", ava: 1 },
    { id: "ca_glyph_warcors_ur_hegemony_journalists", ava: 1 },
    { id: "ca_the_anathematics", ava: 1 },
    { id: "ca_umbra_legates", ava: 1 },
    { id: "ca_the_hungries_gakis", ava: 999 },
    { id: "ca_the_hungries_pretas", ava: 999 },
    { id: "merc_libertos_freedom_fighters", ava: 1 },
    { id: "ca_wcd_base_operators", ava: 2 },
    { id: "ca_wcd_void_operators", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ca_the_charontids", ava: 1 },
    { id: "ca_rodok_morat_armed_imposition_detachment", ava: 3 },
    { id: "ca_achilles", ava: 1 },
    { id: "ca_shasvastii_tactical_monitoring_company_mentor", ava: 1 },
    { id: "ca_dartok_cybercombat_team", ava: 1 },
    { id: "ca_umbra_samaritan_nourkias_kai_l_rank", ava: 1 },
    { id: "ca_shasvastii_seed_soldiers", ava: 2 },
    { id: "merc_aida_swanson_submondo_smuggler", ava: 1 },
    { id: "ca_bit_kiss", ava: 1 },
    { id: "ca_overdron_batroids", ava: 1 },
    { id: "ca_exos_exrah_executive_officers", ava: 1 },
    { id: "ca_q_drones", ava: 1 },
    { id: "ca_cadmus_naish_agent_sheskiin", ava: 1 },
    { id: "ca_nexus_operatives", ava: 2 },
  ]},
  "Morat Aggression Forces": { id: 602, units: [
    { id: "ca_zerat_special_missions_regiment", ava: 3 },
    { id: "ca_raktorak_morat_sergeant_major", ava: 2 },
    { id: "ca_dropsuit_taryot", ava: 3 },
    { id: "ca_t_drones", ava: 1 },
    { id: "ca_r_drones", ava: 1 },
    { id: "ca_kurgat_regiment_of_assault_engineers", ava: 3 },
    { id: "merc_krakot_renegades_morat_fugitives", ava: 3 },
    { id: "ca_bultrak_mobile_armored_regiment", ava: 2 },
    { id: "ca_q_drones", ava: 1 },
    { id: "ca_sogarat_tempest_regiment", ava: 3 },
    { id: "ca_daturazi_witch_soldiers", ava: 5 },
    { id: "ca_the_hungries_gakis", ava: 4 },
    { id: "ca_yaogat_strike_infantry", ava: 5, profiles: [{ name: "Combi Rifle+Panzerfaust",                   cost:  24, swc: 0 }, { name: "Boarding Shotgun+Panzerfaust",              cost:  21, swc: 0 }, { name: "MULTI Sniper Rifle",                        cost:  32, swc: 1.5 }, { name: "Spitfire",                                  cost:  29, swc: 1.5 }, { name: "Combi Rifle+Panzerfaust",                   cost:  29, swc: 0.5 }, { name: "Combi Rifle+Panzerfaust Lt.L1",             cost:  24, swc: 0 }] },
    { id: "ca_rasyat_diplomatic_division", ava: 3 },
    { id: "ca_rindak_emergency_brigade", ava: 2 },
    { id: "ca_e_drones", ava: 1 },
    { id: "ca_rodok_morat_armed_imposition_detachment", ava: 5 },
    { id: "ca_treitak_anyat", ava: 1 },
    { id: "ca_the_hungries_pretas", ava: 4 },
    { id: "ca_kornak_gazarot_superior_warrior_officer", ava: 1 },
    { id: "ca_zabuk_morat_enslavers", ava: 1 },
    { id: "ca_faredak_morat_aggression_forces_tag_support_pilots", ava: 1 },
    { id: "ca_tyrok_hunters", ava: 2 },
    { id: "ca_m_drones", ava: 1 },
    { id: "ca_slave_drones", ava: 2 },
    { id: "ca_morat_vanguard_infantry", ava: 999, profiles: [{ name: "Combi Rifle",                               cost:  14, swc: 0 }, { name: "Heavy Machine Gun",                         cost:  23, swc: 1 }, { name: "K1 Sniper Rifle",                           cost:  17, swc: 1 }, { name: "Missile Launcher",                          cost:  19, swc: 1.5 }, { name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 }, { name: "Combi Rifle",                               cost:  16, swc: 0 }, { name: "Combi Rifle Lt.L1",                         cost:  14, swc: 0 }] },
    { id: "ca_suryat_assault_heavy_infantry", ava: 5 },
    { id: "ca_kyosot_killing_platoon", ava: 2 },
    { id: "ca_oznat_morat_hunting_regiment", ava: 2 },
    { id: "ca_med_tech_obsidon_medchanoids", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ca_ikadron_batroid", ava: 2 },
    { id: "ca_glyph_warcors_ur_hegemony_journalists", ava: 1 },
    { id: "ca_dartok_cybercombat_team", ava: 2, profiles: [{ name: "Submachine Gun+Pitcher",                    cost:  18, swc: 0.5 }, { name: "Combi Rifle+Pitcher",                       cost:  23, swc: 0.5 }] },
    { id: "ca_kaitok_shock_regiment", ava: 3 },
    { id: "ca_raicho_armored_brigade", ava: 2 },
  ]},
  "Shasvastii Expeditionary Force": { id: 603, units: [
    { id: "ca_shasvastii_light_support_unit_haiduks", ava: 3 },
    { id: "ca_the_shrouded_shasvastii_pioneer_corps", ava: 4, profiles: [{ name: "Boarding Shotgun+Shock Mine",               cost:  20, swc: 0, ocultable: true }, { name: "MULTI Sniper Rifle",                        cost:  24, swc: 1.5, ocultable: true }, { name: "Combi Rifle+Shock Mine",                    cost:  28, swc: 0.5, ocultable: true }, { name: "Combi Rifle+Flash Pulse",                   cost:  24, swc: 0, ocultable: true }, { name: "Combi Rifle+Shock Mine",                    cost:  24, swc: 0.5, ocultable: true }, { name: "Boarding Shotgun",                          cost:  21, swc: 0, ocultable: true }, { name: "Combi Rifle+Shock Mine",                    cost:  26, swc: 0, ocultable: true }] },
    { id: "ca_q_drones", ava: 2 },
    { id: "ca_slave_drones", ava: 2 },
    { id: "ca_ikadron_batroid", ava: 2 },
    { id: "ca_victor_messer_autonomous_agent_of_chaos", ava: 1 },
    { id: "ca_taigha_creatures", ava: 8 },
    { id: "ca_cadmus_naish_agent_sheskiin", ava: 1 },
    { id: "ca_shasvastii_armed_imposition_detachment_gwailos", ava: 1 },
    { id: "merc_aida_swanson_submondo_smuggler", ava: 1 },
    { id: "ca_agent_dukash_vashar_special_corps", ava: 1 },
    { id: "ca_malignos_shasvastii_deep_incursion_corps", ava: 3 },
    { id: "ca_jayth_cutthroats_shasvastii_independent_assault_group", ava: 4 },
    { id: "ca_speculo_killers", ava: 2, profiles: [{ name: "Combi Rifle+Nanopulser",                    cost:  29, swc: 1, ocultable: true }, { name: "Boarding Shotgun+Nanopulser",               cost:  26, swc: 1, ocultable: true }, { name: "Combi Rifle+Nanopulser",                    cost:  31, swc: 1.5, ocultable: true }] },
    { id: "ca_med_tech_obsidon_medchanoids", ava: 1 },
    { id: "ca_t_drones", ava: 1, profiles: [{ name: "Missile Launcher",                          cost:  16, swc: 1.5 }, { name: "Missile Launcher+Flash Pulse",              cost:  15, swc: 1.5 }] },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ca_shasvastii_tactical_dominance_special_wing_noctifers", ava: 3 },
    { id: "ca_m_drones", ava: 2, profiles: [{ name: "Combi Rifle+Flash Pulse",                   cost:  15, swc: 0 }, { name: "Combi Rifle+Flash Pulse",                   cost:  23, swc: 0 }, { name: "Combi Rifle+Flash Pulse",                   cost:  18, swc: 0 }] },
    { id: "ca_glyph_warcors_ur_hegemony_journalists", ava: 1 },
    { id: "ca_shasvastii_airborne_infiltration_group_cadmus", ava: 4 },
    { id: "ca_shasvastii_tactical_monitoring_company_mentor", ava: 3, profiles: [{ name: "Vulkan Shotgun",                            cost:  20, swc: 0, ocultable: true }, { name: "Shock Marksman Rifle",                      cost:  24, swc: 0, ocultable: true }, { name: "Vulkan Shotgun",                            cost:  25, swc: 0.5, ocultable: true }, { name: "Vulkan Shotgun Lt.L1",                      cost:  20, swc: 0, ocultable: true }, { name: "Shock Marksman Rifle Lt.L1",                cost:  24, swc: 0, ocultable: true }] },
    { id: "ca_shasvastii_seed_soldiers", ava: 4 },
    { id: "ca_e_drones", ava: 1 },
    { id: "ca_shasvastii_sabotage_and_destruction_unit_caliban", ava: 4, profiles: [{ name: "Boarding Shotgun+D-Charges",                cost:  24, swc: 0, ocultable: true }, { name: "Submachine Gun+Pulzar",                     cost:  29, swc: 0, ocultable: true }, { name: "Submachine Gun+Pulzar",                     cost:  28, swc: 0, ocultable: true }, { name: "Vulkan Shotgun+Flash Pulse",                cost:  26, swc: 0, ocultable: true }, { name: "Submachine Gun+Pulzar",                     cost:  26, swc: 0, ocultable: true }, { name: "Spitfire+D-Charges",                        cost:  36, swc: 1.5, ocultable: true }] },
    { id: "ca_tensho_experts", ava: 1 },
    { id: "ca_shasvastii_nox_troops", ava: 999 },
    { id: "merc_oktavia_grimsdottir_icebreaker_s_harpooner", ava: 1 },
    { id: "ca_shasvastii_corax_hasht", ava: 1 },
    { id: "ca_r_drones", ava: 2 },
    { id: "ca_shasvastii_special_armoured_corp_sphinx", ava: 2 },
  ]},
  "Onyx Contact Force": { id: 604, units: [
    { id: "ca_overdron_batroids", ava: 2 },
    { id: "ca_wcd_vector_operators", ava: 1 },
    { id: "ca_m_drones", ava: 2 },
    { id: "ca_q_drones", ava: 1 },
    { id: "ca_slave_drones", ava: 2 },
    { id: "ca_nexus_operatives", ava: 3, profiles: [{ name: "AP Submachine Gun+E/Mitter",                cost:  23, swc: 0 }, { name: "AP Submachine Gun+E/Mitter",                cost:  24, swc: 0.5 }, { name: "Combi Rifle+Zapper",                        cost:  27, swc: 0.5 }, { name: "Spitfire+Zapper",                           cost:  29, swc: 1 }, { name: "MULTI Rifle+Zapper",                        cost:  22, swc: 0 }, { name: "MULTI Rifle+Zapper Lt.L1",                  cost:  19, swc: 0 }, { name: "Combi Rifle+Zapper Lt.L1",                  cost:  27, swc: 0.5 }] },
    { id: "ca_imetron", ava: 2 },
    { id: "ca_nexus_7_operative_kerr_nau", ava: 1 },
    { id: "ca_kurgat_regiment_of_assault_engineers", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_cube_jager_mercenary_recoverers", ava: 1 },
    { id: "ca_ikadron_batroid", ava: 2 },
    { id: "ca_glyph_warcors_ur_hegemony_journalists", ava: 1 },
    { id: "ca_fraacta_drop_unit", ava: 3 },
    { id: "ca_suryat_assault_heavy_infantry", ava: 3 },
    { id: "ca_greif_operators", ava: 1 },
    { id: "ca_shasvastii_special_armoured_corp_sphinx", ava: 1 },
    { id: "ca_shasvastii_tactical_dominance_special_wing_noctifers", ava: 2 },
    { id: "ca_t_drones", ava: 1 },
    { id: "ca_e_drones", ava: 1 },
    { id: "ca_umbra_legates", ava: 3, profiles: [{ name: "Vulkan Shotgun+Zapper",                     cost:  36, swc: 0 }, { name: "Spitfire+Zapper",                           cost:  41, swc: 1.5 }, { name: "K1 Combi Rifle+Zapper",                     cost:  33, swc: 0 }, { name: "Spitfire+Zapper",                           cost:  37, swc: 1.5 }, { name: "K1 Combi Rifle+Zapper",                     cost:  38, swc: 0 }, { name: "K1 Combi Rifle+Zapper",                     cost:  38, swc: 0.5 }, { name: "Vulkan Shotgun+Zapper",                     cost:  42, swc: 0.5 }, { name: "K1 Combi Rifle+Zapper Lt.L1",               cost:  33, swc: 0 }, { name: "Spitfire+Zapper Lt.L1",                     cost:  37, swc: 1.5 }, { name: "Vulkan Shotgun+Zapper Lt.L1",               cost:  36, swc: 0 }] },
    { id: "ca_special_operative_ko_dali", ava: 1 },
    { id: "ca_maakrep_trackers_unit", ava: 2 },
    { id: "ca_caskuda_wcd_armored_jump_operator", ava: 1 },
    { id: "ca_unidron_batroids", ava: 999 },
    { id: "ca_rodok_morat_armed_imposition_detachment", ava: 5 },
    { id: "ca_umbra_samaritans", ava: 3 },
    { id: "ca_umbra_samaritan_nourkias_kai_l_rank", ava: 1, profiles: [{ name: "Vorpal CC Weapon+K1 Combi Rifle",           cost:  48, swc: 1 }, { name: "Vorpal CC Weapon+K1 Combi Rifle Lt.L1",     cost:  46, swc: 1 }] },
    { id: "ca_malignos_shasvastii_deep_incursion_corps", ava: 2 },
    { id: "ca_wcd_void_operators", ava: 2 },
    { id: "ca_exos_exrah_executive_officers", ava: 1, profiles: [{ name: "Plasma Carbine",                            cost:  19, swc: 0.5 }, { name: "MULTI Rifle+Nanopulser",                    cost:  22, swc: 0.5 }, { name: "Plasma Carbine+Assault Pistol",             cost:  19, swc: 0 }, { name: "MULTI Rifle+Nanopulser",                    cost:  22, swc: 0 }] },
    { id: "ca_wcd_base_operators", ava: 2 },
    { id: "ca_med_tech_obsidon_medchanoids", ava: 1 },
    { id: "ca_xeodron_batroids", ava: 4 },
    { id: "ca_bit_kiss", ava: 1, profiles: [{ name: "Submachine Gun+Pitcher",                    cost:  25, swc: 0.5 }, { name: "Submachine Gun+Pitcher",                    cost:  24, swc: 0.5 }] },
    { id: "ca_r_drones", ava: 1 },
  ]},
  "Next Wave": { id: 605, units: [
    { id: "ca_gearheads_tech_savant_team", ava: 2 },
    { id: "ca_tekdrakens_blackhearts", ava: 4 },
    { id: "ca_unidron_batroids", ava: 2 },
    { id: "ca_pandora_team_achilles_field_researcher", ava: 1 },
    { id: "ca_teucer_team_achilles_shooter", ava: 1 },
    { id: "ca_m_drones", ava: 2 },
    { id: "ca_ikadron_batroid", ava: 2 },
    { id: "ca_bit_kiss", ava: 1, profiles: [{ name: "Submachine Gun+Pitcher",                    cost:  25, swc: 0.5 }] },
    { id: "ca_special_operative_ko_dali", ava: 1, profiles: [{ name: "MULTI Rifle+Pulzar",                        cost:  37, swc: 0 }, { name: "MULTI Rifle+D-Charges",                     cost:  34, swc: 0 }, { name: "MULTI Rifle+Pulzar",                        cost:  33, swc: 0 }, { name: "MULTI Rifle+Pulzar",                        cost:  30, swc: 0 }] },
    { id: "ca_sartroids_puzzlers_cyberplugged_attack_remotes", ava: 2 },
    { id: "ca_nexus_operatives", ava: 2, profiles: [{ name: "AP Submachine Gun+E/Mitter",                cost:  24, swc: 0.5 }, { name: "Combi Rifle+Zapper",                        cost:  27, swc: 0.5 }, { name: "AP Submachine Gun+E/Mitter",                cost:  23, swc: 0 }, { name: "Spitfire+Zapper",                           cost:  29, swc: 1 }, { name: "MULTI Rifle+Zapper",                        cost:  22, swc: 0 }, { name: "Combi Rifle+Zapper Lt.L1",                  cost:  27, swc: 0.5 }] },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "ca_juggernauts_armored_assault_cavalry", ava: 2 },
    { id: "ca_sartroids_ranters_cyberplugged_attack_remotes", ava: 2 },
    { id: "ca_contrabandoleros_resource_extraction_team", ava: 2 },
    { id: "ca_tekdrakens_steeljaws", ava: 4 },
    { id: "ca_med_tech_obsidon_medchanoids", ava: 1, profiles: [{ name: "Combi Rifle+Zapper",                        cost:  21, swc: 0 }, { name: "Combi Rifle+Zapper",                        cost:  22, swc: 0 }, { name: "Combi Rifle+Zapper",                        cost:  24, swc: 0 }, { name: "Combi Rifle+Zapper",                        cost:  25, swc: 0 }, { name: "Combi Rifle+Zapper",                        cost:  24, swc: 0.5 }] },
    { id: "ca_slave_drones", ava: 2 },
    { id: "ca_skyhounds_combat_and_recon_air_squadron", ava: 1 },
    { id: "ca_ironsides_heavy_mobile_regiment", ava: 3 },
    { id: "ca_stingers_security_tactical_unit", ava: 3 },
    { id: "ca_wraith_1_clandestine_action_group", ava: 2 },
    { id: "ca_q_drones", ava: 1 },
    { id: "ca_achilles", ava: 1, profiles: [{ name: "AP Spitfire+Pulzar",                        cost:  62, swc: 1.5 }, { name: "Plasma Rifle+Pulzar",                       cost:  63, swc: 0 }, { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  62, swc: 1 }, { name: "Plasma Rifle+Pulzar Lt.L1",                 cost:  63, swc: 1 }] },
    { id: "ca_drakios_team_achilles_dragon", ava: 1 },
    { id: "merc_kazuraba_ruby_monday", ava: 1 },
    { id: "ca_harbingers_new_mankind_defense_infantry", ava: 5 },
    { id: "ca_raindancers_light_assault_company", ava: 3 },
    { id: "ca_cliff_jumpers_extreme_jump_unit", ava: 3 },
    { id: "ca_t_drones", ava: 1 },
    { id: "ca_e_drones", ava: 2 },
    { id: "merc_cube_jager_mercenary_recoverers", ava: 1 },
    { id: "ca_glyph_warcors_ur_hegemony_journalists", ava: 1 },
    { id: "ca_patroclus_team_achilles_shadow", ava: 1 },
    { id: "ca_r_drones", ava: 1 },
  ]},
  "Aleph": { id: 701, units: [
    { id: "aleph_netrods", ava: 3 },
    { id: "merc_freelance_operator_samsa", ava: 1 },
    { id: "aleph_riksha_tacbots", ava: 5 },
    { id: "aleph_dawon_tacbots", ava: 5 },
    { id: "aleph_zayin_rebots", ava: 2 },
    { id: "merc_knauf_outlaw_sniper", ava: 1 },
    { id: "aleph_satrah_unit", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "aleph_post_humans", ava: 1 },
    { id: "aleph_nagas", ava: 2 },
    { id: "aleph_dasyus", ava: 2 },
    { id: "merc_parvati_circle_league_star", ava: 1 },
    { id: "merc_dr_claire_lazhari_genephilosopher_and_optimate", ava: 1 },
    { id: "merc_johnny_kao_optimate_and_technomancer_master", ava: 1 },
    { id: "aleph_apsaras", ava: 1 },
    { id: "aleph_shukra_consultants", ava: 1 },
    { id: "aleph_penthesilea_amazon_warrioress", ava: 1 },
    { id: "aleph_ekdromoi", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_maximus_optimate_and_hexadome_legend", ava: 1 },
    { id: "merc_kyra_sharma_the_iron_maiden_of_the_optimates", ava: 1 },
    { id: "aleph_thorakitai", ava: 2 },
    { id: "aleph_sharvara_houndbots", ava: 1 },
    { id: "aleph_arjuna_unit", ava: 2 },
    { id: "merc_dikpala_tacbots", ava: 999, profiles: [{ name: "Combi Rifle",                               cost:  13, swc: 0 }, { name: "Heavy Machine Gun",                         cost:  21, swc: 1 }, { name: "MULTI Sniper Rifle",                        cost:  19, swc: 1 }, { name: "Combi Rifle",                               cost:  15, swc: 0 }, { name: "Submachine Gun+Akrylat-Kanone",             cost:  13, swc: 0 }] },
    { id: "aleph_hoplites_heavy_regiment", ava: 1 },
    { id: "aleph_maruts", ava: 1 },
    { id: "aleph_daleth_rebots", ava: 2 },
    { id: "aleph_thyreos_thyreophoroi_mobile_regiment", ava: 2 },
    { id: "merc_yudbots", ava: 2 },
    { id: "merc_deva_functionaries", ava: 2, profiles: [{ name: "Combi Rifle+Nanopulser",                    cost:  20, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  24, swc: 0 }, { name: "MULTI Rifle+Nanopulser",                    cost:  22, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  25, swc: 0.5 }, { name: "Boarding Shotgun",                          cost:  20, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  21, swc: 0 }, { name: "Spitfire+Nanopulser",                       cost:  29, swc: 1 }, { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  20, swc: 0 }, { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  24, swc: 0 }, { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  21, swc: 0 }] },
    { id: "aleph_yadu_troopers_tactical_assault_teams", ava: 2 },
    { id: "merc_optimate_agent_maximus", ava: 1 },
    { id: "aleph_k2_auxiliars", ava: 1 },
    { id: "merc_danavas_hackers", ava: 2 },
    { id: "aleph_myrmidons", ava: 4 },
    { id: "aleph_probots", ava: 2 },
    { id: "aleph_sophotects", ava: 2 },
    { id: "aleph_artalis_unit", ava: 2 },
    { id: "merc_garuda_tacbots", ava: 2 },
    { id: "aleph_agema_marksmen", ava: 1 },
    { id: "aleph_kinnara_scoutbots", ava: 2 },
    { id: "aleph_lamedh_rebots", ava: 2 },
    { id: "aleph_samekh_rebots", ava: 2 },
    { id: "merc_john_hawkwood_mercenary_officer", ava: 1 },
    { id: "aleph_asuras", ava: 2 },
    { id: "aleph_chandra_specialist_operative_trisha_n33", ava: 1 },
    { id: "merc_hippolyta_amazon_officer", ava: 1 },
    { id: "merc_dart_optimate_huntress", ava: 1 },
    { id: "aleph_rudras_gunbots", ava: 1 },
    { id: "merc_pilot_x_the_optimate_lightspeedster", ava: 1 },
    { id: "merc_racerbots", ava: 2 },
    { id: "aleph_yaksha_tacbots", ava: 2 },
    { id: "aleph_tarksia_interception_wing", ava: 1 },
  ]},
  "Steel Phalanx": { id: 702, units: [
    { id: "aleph_myrmidon_officer", ava: 3 },
    { id: "aleph_netrods", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "aleph_makhai_steel_phalanx_s_operative_unit", ava: 3 },
    { id: "aleph_ajax_the_great_myrmidon_officer", ava: 1 },
    { id: "aleph_scylla_steel_phalanx_s_sergeant", ava: 1 },
    { id: "merc_hippolyta_amazon_officer", ava: 1 },
    { id: "aleph_k2_auxiliars", ava: 2 },
    { id: "aleph_thorakitai", ava: 6, profiles: [{ name: "Submachine Gun+E/Mitter",                   cost:  12, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  14, swc: 0 }, { name: "Submachine Gun+Light Rocket Launcher",      cost:  17, swc: 0 }, { name: "Heavy Machine Gun+Nanopulser",              cost:  22, swc: 1.5 }, { name: "Submachine Gun+E/Mitter",                   cost:  13, swc: 0 }, { name: "Submachine Gun+E/Mitter",                   cost:  14, swc: 0 }, { name: "Feuerbach+Nanopulser",                      cost:  23, swc: 1.5 }, { name: "Combi Rifle+Nanopulser",                    cost:  19, swc: 0.5 }, { name: "Combi Rifle+Nanopulser",                    cost:  16, swc: 0 }] },
    { id: "aleph_arjuna_unit", ava: 1 },
    { id: "aleph_lamedh_rebots", ava: 2 },
    { id: "aleph_nesaie_alke_thorakitai_warrant_officer", ava: 1 },
    { id: "aleph_ekdromoi", ava: 4, profiles: [{ name: "Spitfire+Nanopulser",                       cost:  32, swc: 1.5, ocultable: true }, { name: "Chain Rifle+AP Heavy Pistol",               cost:  18, swc: 0, ocultable: true }, { name: "Chain Rifle+AP Heavy Pistol",               cost:  23, swc: 0.5, ocultable: true }, { name: "Submachine Gun+Flash Pulse",                cost:  25, swc: 0, ocultable: true }] },
    { id: "aleph_dactyls", ava: 2 },
    { id: "aleph_eudoros_myrmidon_officer", ava: 1 },
    { id: "aleph_machaon_myrmidon_doctor_officer", ava: 1 },
    { id: "merc_hector_homeridae_s_champion", ava: 1 },
    { id: "aleph_acmon_sergeant_of_dactyls", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "aleph_atalanta_agema_s_nco", ava: 1 },
    { id: "aleph_probots", ava: 1 },
    { id: "aleph_samekh_rebots", ava: 1 },
    { id: "aleph_hoplites_heavy_regiment", ava: 3 },
    { id: "aleph_myrmidons", ava: 6 },
    { id: "aleph_thyreos_thyreophoroi_mobile_regiment", ava: 2 },
    { id: "aleph_zayin_rebots", ava: 1 },
    { id: "aleph_thamyris_the_aoidos", ava: 1 },
    { id: "merc_andromeda_sophistes_of_the_steel_phalanx", ava: 1 },
    { id: "aleph_agema_marksmen", ava: 2 },
    { id: "aleph_daleth_rebots", ava: 2 },
    { id: "aleph_chandra_sergeant_thrasymedes", ava: 1 },
    { id: "aleph_penthesilea_amazon_warrioress", ava: 1 },
    { id: "aleph_agamemnon_the_atreides", ava: 1 },
    { id: "aleph_phoenix_veteran_myrmidon_officer", ava: 1 },
    { id: "merc_yudbots", ava: 4 },
  ]},
  "Operations Subsection SSS": { id: 703, units: [
    { id: "merc_danavas_hackers", ava: 3 },
    { id: "aleph_dawon_tacbots", ava: 2 },
    { id: "merc_authorized_bounty_hunters", ava: 3 },
    { id: "merc_kazuraba_ruby_monday", ava: 1 },
    { id: "aleph_post_humans", ava: 1 },
    { id: "aleph_shakti_yadu_officer", ava: 1 },
    { id: "aleph_asuras", ava: 4, profiles: [{ name: "AP Spitfire+Pulzar",                        cost:  61, swc: 1.5 }, { name: "MULTI Marksman Rifle+Pulzar",               cost:  63, swc: 0.5 }, { name: "AP Spitfire+Pulzar Lt.L1",                  cost:  65, swc: 1 }, { name: "MULTI Marksman Rifle+Pulzar Lt.L1",         cost:  67, swc: 0 }] },
    { id: "merc_father_lucien_sforza_authorized_bounty_hunter", ava: 1 },
    { id: "aleph_dasyus", ava: 3 },
    { id: "aleph_arjuna_unit", ava: 2 },
    { id: "aleph_maruts", ava: 2 },
    { id: "aleph_netrods", ava: 2 },
    { id: "merc_yudbots", ava: 4 },
    { id: "aleph_satrah_unit", ava: 1 },
    { id: "merc_andromeda_sophistes_of_the_steel_phalanx", ava: 1 },
    { id: "merc_csu_corporate_security_unit", ava: 2 },
    { id: "merc_dart_optimate_huntress", ava: 1 },
    { id: "aleph_thorakitai", ava: 2 },
    { id: "aleph_apsaras", ava: 2, profiles: [{ name: "Submachine Gun+Zapper",                     cost:  17, swc: 0 }, { name: "Submachine Gun+Zapper",                     cost:  20, swc: 0 }, { name: "Submachine Gun+Zapper",                     cost:  18, swc: 0 }, { name: "Submachine Gun+Zapper Lt.L1",               cost:  20, swc: 0 }] },
    { id: "merc_miranda_ashcroft_authorized_bounty_hunter", ava: 1 },
    { id: "aleph_probots", ava: 2 },
    { id: "merc_deva_functionaries", ava: 5, profiles: [{ name: "Combi Rifle+Nanopulser",                    cost:  20, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  24, swc: 0 }, { name: "MULTI Rifle+Nanopulser",                    cost:  22, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  25, swc: 0.5 }, { name: "Boarding Shotgun",                          cost:  20, swc: 0 }, { name: "Combi Rifle+Nanopulser",                    cost:  21, swc: 0 }, { name: "Spitfire+Nanopulser",                       cost:  29, swc: 1 }, { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  20, swc: 0 }, { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  24, swc: 0 }, { name: "Combi Rifle+Nanopulser Lt.L1",              cost:  21, swc: 0 }] },
    { id: "aleph_artalis_unit", ava: 1 },
    { id: "merc_maximus_optimate_and_hexadome_legend", ava: 1 },
    { id: "aleph_nagas", ava: 3 },
    { id: "merc_kyra_sharma_the_iron_maiden_of_the_optimates", ava: 1 },
    { id: "aleph_kinnara_scoutbots", ava: 2 },
    { id: "merc_johnny_kao_optimate_and_technomancer_master", ava: 1 },
    { id: "aleph_daleth_rebots", ava: 2 },
    { id: "aleph_lamedh_rebots", ava: 2 },
    { id: "merc_motorized_bounty_hunters", ava: 2 },
    { id: "aleph_samekh_rebots", ava: 1, profiles: [{ name: "Missile Launcher",                          cost:  16, swc: 1.5 }, { name: "Missile Launcher+Flash Pulse",              cost:  15, swc: 1.5 }] },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_john_hawkwood_mercenary_officer", ava: 1, profiles: [{ name: "K1 Sniper Rifle+Nanopulser",                cost:  35, swc: 1 }, { name: "Combi Rifle+Nanopulser",                    cost:  40, swc: 0 }] },
    { id: "merc_optimate_agent_maximus", ava: 1 },
    { id: "merc_garuda_tacbots", ava: 3 },
    { id: "merc_pilot_x_the_optimate_lightspeedster", ava: 1 },
    { id: "merc_racerbots", ava: 2 },
    { id: "aleph_tarksia_interception_wing", ava: 1 },
    { id: "aleph_shukra_consultants", ava: 2, profiles: [{ name: "Boarding Shotgun",                          cost:  21, swc: 0 }, { name: "MULTI Rifle+Nanopulser",                    cost:  26, swc: 0 }, { name: "MULTI Rifle+Nanopulser Lt.L1",              cost:  24, swc: 0 }] },
    { id: "aleph_riksha_tacbots", ava: 2 },
    { id: "aleph_zayin_rebots", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "aleph_yadu_troopers_tactical_assault_teams", ava: 5 },
    { id: "aleph_sophotects", ava: 2 },
    { id: "aleph_rudras_gunbots", ava: 2 },
    { id: "aleph_sharvara_houndbots", ava: 2 },
    { id: "aleph_yaksha_tacbots", ava: 2 },
    { id: "merc_dr_claire_lazhari_genephilosopher_and_optimate", ava: 1 },
    { id: "merc_dikpala_tacbots", ava: 999, profiles: [{ name: "Combi Rifle",                               cost:  13, swc: 0 }, { name: "Heavy Machine Gun",                         cost:  21, swc: 1 }, { name: "MULTI Sniper Rifle",                        cost:  19, swc: 1 }, { name: "Combi Rifle",                               cost:  15, swc: 0 }, { name: "Submachine Gun+Akrylat-Kanone",             cost:  13, swc: 0 }] },
  ]},
  "Druze Bayram Security": { id: 902, units: [
    { id: "merc_security_chief_arslan", ava: 1 },
    { id: "merc_kunai_solutions_ninjas", ava: 2 },
    { id: "merc_yuan_yuan", ava: 4 },
    { id: "merc_monstruckers", ava: 2 },
    { id: "merc_zellenkrieger", ava: 1 },
    { id: "unk_brawlers_mercenary_enforcers", ava: 4 },
    { id: "merc_diggers_armed_prospectors", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_wolfgang_amadeus_wolff_wulver_bounty_hunter", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 3 },
    { id: "merc_clipper_dronbots", ava: 1 },
    { id: "merc_nasmat_remotes", ava: 2 },
    { id: "merc_hunzakuts", ava: 2 },
    { id: "merc_peacemaker_armbots", ava: 1 },
    { id: "merc_saito_togan_mercenary_ninja", ava: 1 },
    { id: "merc_valerya_gromoz_mercenary_hacker", ava: 1 },
    { id: "merc_armand_le_muet_freelance_killer", ava: 1 },
    { id: "merc_fugazi_dronbots", ava: 2 },
    { id: "merc_kameel_remotes", ava: 2 },
    { id: "merc_motorized_bounty_hunters", ava: 2 },
    { id: "merc_extreme_zellenkrieger", ava: 1 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 1 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "merc_druze_shock_teams", ava: 999, profiles: [{ name: "Combi Rifle+Chain-colt",                    cost:  20, swc: 0 }, { name: "Heavy Machine Gun+Chain-colt",              cost:  28, swc: 1.5 }, { name: "Combi Rifle+Chain-colt",                    cost:  21, swc: 0 }, { name: "Combi Rifle+Chain-colt",                    cost:  24, swc: 1 }, { name: "Shock Marksman Rifle+Chain-colt",           cost:  23, swc: 0 }, { name: "Combi Rifle+Pitcher",                       cost:  25, swc: 0.5 }, { name: "Combi Rifle+Pitcher",                       cost:  23, swc: 0 }, { name: "MULTI Sniper Rifle+Chain-colt",             cost:  27, swc: 1.5 }, { name: "Combi Rifle+Chain-colt",                    cost:  22, swc: 0 }, { name: "Combi Rifle+Chain-colt Lt.L1",              cost:  20, swc: 0 }] },
    { id: "merc_denma_connolly_caledonian_zellenkrieger", ava: 1 },
    { id: "merc_anaconda_mercenary_tag_squad", ava: 1 },
    { id: "merc_wardrivers_mercenary_hackers", ava: 1, profiles: [{ name: "Boarding Shotgun+Flash Pulse",              cost:  14, swc: 0 }] },
    { id: "merc_aida_swanson_submondo_smuggler", ava: 1 },
    { id: "merc_scarface_cordelia_mercenary_armored_team", ava: 1 },
    { id: "merc_bashi_bazouks", ava: 4 },
    { id: "merc_sierra_dronbots", ava: 1 },
    { id: "merc_authorized_bounty_hunters", ava: 2 },
    { id: "merc_libertos_freedom_fighters", ava: 1 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_taowu_mastermind_and_schemer", ava: 1, profiles: [{ name: "Light Shotgun+E/Marat",                     cost:  19, swc: 0, ocultable: true }, { name: "Contender+Pulzar",                          cost:  16, swc: 0, ocultable: true }, { name: "Contender+Pulzar",                          cost:  21, swc: 0, ocultable: true }] },
  ]},
  "Ikari Company": { id: 904, units: [
    { id: "merc_yaoxie_lu_duan", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 1 },
    { id: "merc_yojimbo_sword_for_hire", ava: 1 },
    { id: "merc_yaoz_o", ava: 2 },
    { id: "merc_wardrivers_mercenary_hackers", ava: 1, profiles: [{ name: "Boarding Shotgun+Flash Pulse",              cost:  14, swc: 1 }, { name: "Boarding Shotgun+Flash Pulse",              cost:  16, swc: 1 }, { name: "Boarding Shotgun+Flash Pulse",              cost:  14, swc: 0 }] },
    { id: "merc_al_fasid_regiment", ava: 1 },
    { id: "merc_yojimbo_motorized_sword_for_hire", ava: 1 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 1 },
    { id: "merc_sierra_dronbots", ava: 1 },
    { id: "merc_yaopu_pangguling", ava: 2, profiles: [{ name: "PARA CC Weapon",                            cost:   8, swc: 0 }, { name: "PARA CC Weapon",                            cost:  15, swc: 0.5 }, { name: "Combi Rifle",                               cost:  19, swc: 0 }, { name: "Light Shotgun",                             cost:  12, swc: 0 }] },
    { id: "merc_tokusetsu_butai", ava: 2 },
    { id: "merc_fugazi_dronbots", ava: 1 },
    { id: "merc_druze_shock_teams", ava: 4 },
    { id: "merc_karakuri_special_project", ava: 2 },
    { id: "merc_yuan_yuan", ava: 4 },
    { id: "merc_motorized_bounty_hunters", ava: 1 },
    { id: "unk_brawlers_mercenary_enforcers", ava: 4 },
    { id: "merc_diggers_armed_prospectors", ava: 2 },
    { id: "merc_security_chief_arslan", ava: 1 },
    { id: "merc_desperadoes", ava: 2 },
    { id: "merc_authorized_bounty_hunters", ava: 2 },
    { id: "merc_wu_ming_assault_corps_those_without_name", ava: 5 },
    { id: "merc_tanko_zensenbutai", ava: 3 },
    { id: "merc_daiyokai_dengekitai", ava: 1 },
    { id: "merc_taowu_mastermind_and_schemer", ava: 1, profiles: [{ name: "Light Shotgun+E/Marat",                     cost:  19, swc: 0, ocultable: true }, { name: "Contender+Pulzar",                          cost:  16, swc: 0, ocultable: true }, { name: "Contender+Pulzar",                          cost:  21, swc: 0, ocultable: true }] },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 1 },
    { id: "merc_clipper_dronbots", ava: 1 },
    { id: "merc_krakot_renegades_morat_fugitives", ava: 2 },
    { id: "merc_keisotsu_butai", ava: 5 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_cube_jager_mercenary_recoverers", ava: 1 },
    { id: "merc_ninjas", ava: 1 },
    { id: "merc_scarface_cordelia_mercenary_armored_team", ava: 1 },
    { id: "unk_kiiutan_imposters", ava: 1 },
    { id: "merc_bashi_bazouks", ava: 4 },
    { id: "merc_armand_le_muet_freelance_killer", ava: 1 },
  ]},
  "Starco": { id: 905, units: [
    { id: "merc_avicenna_mercenary_doctor", ava: 1 },
    { id: "merc_anaconda_mercenary_tag_squad", ava: 2 },
    { id: "merc_daktaris_daks_campaign_doctors", ava: 1 },
    { id: "merc_wardrivers_mercenary_hackers", ava: 1, profiles: [{ name: "Boarding Shotgun+Flash Pulse",              cost:  14, swc: 0 }] },
    { id: "merc_al_hawwa_unit", ava: 1 },
    { id: "merc_transductor_zonds", ava: 1 },
    { id: "merc_uhahu_hacker_for_hire", ava: 1 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 1 },
    { id: "merc_riot_grrls", ava: 5 },
    { id: "merc_diggers_armed_prospectors", ava: 2 },
    { id: "merc_emily_handelman_intel_agent", ava: 1 },
    { id: "merc_highlander_caterans", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_corregidor_bandits", ava: 2 },
    { id: "merc_csu_corporate_security_unit", ava: 3 },
    { id: "merc_mobile_brigada", ava: 5 },
    { id: "merc_reaktion_zonds", ava: 1 },
    { id: "merc_senor_massacre", ava: 1 },
    { id: "unk_hardcases_2nd_irregular_frontiersmen_battalion", ava: 1 },
    { id: "merc_raoul_spector_mercenary_operative", ava: 1 },
    { id: "merc_hellcats", ava: 2 },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "merc_tsyklon_sputnik", ava: 1 },
    { id: "merc_corregidor_jaguars", ava: 4 },
    { id: "merc_irmandinhos", ava: 1 },
    { id: "merc_bakunin_clockmakers", ava: 1 },
    { id: "merc_vertigo_zonds", ava: 1 },
    { id: "merc_zondbots", ava: 2 },
    { id: "merc_salyut_zonds", ava: 1 },
    { id: "merc_knauf_outlaw_sniper", ava: 1, profiles: [{ name: "MULTI Sniper Rifle+AP Heavy Pistol",        cost:  31, swc: 1.5 }, { name: "MULTI Sniper Rifle+AP Heavy Pistol",        cost:  30, swc: 1.5 }] },
    { id: "unk_brawlers_mercenary_enforcers", ava: 5 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_stempler_zonds", ava: 1 },
    { id: "merc_corregidor_alguaciles", ava: 999 },
  ]},
  "Dahshat Company": { id: 908, units: [
    { id: "merc_shihab_remotes", ava: 1 },
    { id: "merc_motorized_bounty_hunters", ava: 2 },
    { id: "merc_libertos_freedom_fighters", ava: 2, profiles: [{ name: "Submachine Gun+Chain-colt",                 cost:   8, swc: 0, ocultable: true }, { name: "Submachine Gun+Chain-colt",                 cost:   9, swc: 0, ocultable: true }, { name: "Light Shotgun+Shock Mine",                  cost:   9, swc: 1, ocultable: true }, { name: "Light Shotgun+Shock Mine",                  cost:   8, swc: 1, ocultable: true }] },
    { id: "merc_mcmurrough_mercenary_dog_warrior", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_odalisques", ava: 4, profiles: [{ name: "Submachine Gun+Contender",                  cost:  19, swc: 0 }, { name: "Submachine Gun+Contender",                  cost:  21, swc: 0 }, { name: "Rifle+Light Shotgun",                       cost:  24, swc: 0 }, { name: "Boarding Shotgun+Pulzar",                   cost:  22, swc: 0 }, { name: "w225+Pulzar",                               cost:  27, swc: 0 }, { name: "Submachine Gun+Pulzar",                     cost:  21, swc: 0 }] },
    { id: "merc_fiddler_aristeia_s_ex_toymaker", ava: 1 },
    { id: "merc_nasmat_remotes", ava: 4 },
    { id: "merc_shaytaniyah_remotes", ava: 1 },
    { id: "merc_miranda_ashcroft_authorized_bounty_hunter", ava: 1 },
    { id: "merc_maghariba_guard", ava: 1 },
    { id: "merc_rafiq_remotes", ava: 1 },
    { id: "merc_yaoxie_lu_duan", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 1 },
    { id: "merc_monstruckers", ava: 2 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 1 },
    { id: "merc_bashi_bazouks", ava: 4 },
    { id: "merc_hunzakuts", ava: 2 },
    { id: "merc_zh_ncha_armored_reconnaissance_regiment", ava: 1 },
    { id: "merc_saito_togan_mercenary_ninja", ava: 1, profiles: [{ name: "T2 Boarding Shotgun+Smoke Grenades",        cost:  33, swc: 0, ocultable: true }] },
    { id: "merc_valerya_gromoz_mercenary_hacker", ava: 1 },
    { id: "merc_112_emergency_service_motorized", ava: 1 },
    { id: "merc_112_emergency_service", ava: 2 },
    { id: "merc_highlander_caterans", ava: 1 },
    { id: "merc_diggers_armed_prospectors", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_traktor_mul_unit", ava: 2 },
    { id: "merc_najjarun_engineer", ava: 1 },
    { id: "merc_fanous_remotes", ava: 3 },
    { id: "merc_dozers_field_engineers", ava: 1 },
    { id: "merc_authorized_bounty_hunters", ava: 4, profiles: [{ name: "Combi Rifle",                               cost:  15, swc: 0 }, { name: "Boarding Shotgun+Heavy Riotstopper",        cost:  12, swc: 0 }, { name: "Sniper Rifle",                              cost:  19, swc: 0.5 }, { name: "Spitfire+Boarding Pistol",                  cost:  21, swc: 1 }, { name: "Submachine Gun+Akrylat-Kanone",             cost:  12, swc: 0 }, { name: "Red Fury",                                  cost:  20, swc: 0.5 }] },
    { id: "merc_kum_motorized_troops", ava: 4 },
    { id: "merc_zellenkrieger", ava: 1 },
    { id: "unk_brawlers_mercenary_enforcers", ava: 5 },
    { id: "merc_zuy_ng_invincibles_terra_cotta_soldiers", ava: 5 },
    { id: "merc_father_lucien_sforza_authorized_bounty_hunter", ava: 1 },
    { id: "merc_kameel_remotes", ava: 2 },
    { id: "merc_hulang_shocktroopers", ava: 1 },
    { id: "merc_al_fasid_regiment", ava: 1 },
    { id: "merc_ghulam_infantry", ava: 6 },
  ]},
  "White Company": { id: 909, units: [
    { id: "merc_sierra_dronbots", ava: 2 },
    { id: "merc_laxmee_hacker_of_fortune", ava: 1 },
    { id: "merc_yaoz_o", ava: 2 },
    { id: "merc_blade_ops_neoterran_unified_commando_regiment", ava: 1 },
    { id: "merc_fusiliers", ava: 999 },
    { id: "merc_danavas_hackers", ava: 1 },
    { id: "merc_clipper_dronbots", ava: 2 },
    { id: "merc_karhu_special_group", ava: 5 },
    { id: "merc_zhanshi_y_sh_ng", ava: 1 },
    { id: "merc_peacemaker_armbots", ava: 2 },
    { id: "merc_liang_kai_wandering_shaolin_monk", ava: 1 },
    { id: "merc_bulleteer_armbots", ava: 2 },
    { id: "merc_orc_troops", ava: 5 },
    { id: "merc_fugazi_dronbots", ava: 3 },
    { id: "merc_mech_engineers_zhanshi_gongcheng", ava: 1 },
    { id: "unk_chaksa_longarms", ava: 3 },
    { id: "merc_mulebots", ava: 2 },
    { id: "merc_g_ilang_skirmishers", ava: 2 },
    { id: "merc_guiji_squadrons", ava: 1 },
    { id: "merc_carmen_johns_batard", ava: 1 },
    { id: "merc_senor_massacre", ava: 1 },
    { id: "merc_john_hawkwood_mercenary_officer", ava: 1, profiles: [{ name: "K1 Sniper Rifle+Nanopulser",                cost:  35, swc: 1 }, { name: "wundefined+wundefined",                     cost:  40, swc: 0 }, { name: "K1 Sniper Rifle+Nanopulser Lt.L1",          cost:  35, swc: 1 }, { name: "K1 Sniper Rifle+Nanopulser Lt.L1",          cost:  39, swc: 1 }] },
    { id: "merc_jujak_regiment_korean_shock_infantry", ava: 4 },
    { id: "merc_csu_corporate_security_unit", ava: 2 },
    { id: "merc_blockers_attached_agents_of_the_cdci", ava: 1 },
    { id: "merc_pathfinder_dronbots", ava: 2 },
    { id: "merc_kunai_solutions_ninjas", ava: 2 },
    { id: "merc_h_idao_special_support_group", ava: 3 },
    { id: "merc_n_kken_special_intervention_and_recon_team", ava: 2 },
    { id: "merc_kaplan_tactical_services_kts", ava: 5 },
    { id: "merc_anaconda_mercenary_tag_squad", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_scarface_cordelia_mercenary_armored_team", ava: 1 },
    { id: "merc_valkyrie_elite_bodyguard", ava: 1 },
    { id: "merc_wild_bill_legendary_gunslinger", ava: 1 },
    { id: "merc_tiger_soldiers", ava: 2 },
    { id: "merc_varangian_guard", ava: 2 },
    { id: "merc_svalarheima_nisses", ava: 2 },
    { id: "merc_shona_carano_special_instructor_and_aristeia_swordmaster", ava: 1 },
    { id: "merc_beasthunters_free_guild", ava: 2, profiles: [{ name: "Heavy Flamethrower+Panzerfaust",            cost:   9, swc: 0 }, { name: "Heavy Flamethrower+Tactical Bow",           cost:  15, swc: 0 }, { name: "Heavy Flamethrower+Panzerfaust",            cost:  15, swc: 0 }] },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_cube_jager_mercenary_recoverers", ava: 1 },
    { id: "merc_hannibal_mercenary_team_leader", ava: 1, profiles: [{ name: "Vulkan Shotgun+Nanopulser",                 cost:  24, swc: 0 }, { name: "MULTI Marksman Rifle+Nanopulser",           cost:  30, swc: 0 }, { name: "Vulkan Shotgun+Nanopulser",                 cost:  27, swc: 0 }, { name: "MULTI Marksman Rifle+Nanopulser",           cost:  33, swc: 0 }, { name: "Vulkan Shotgun+Nanopulser Lt.L1",           cost:  31, swc: 0 }, { name: "MULTI Marksman Rifle+Nanopulser Lt.L1",     cost:  37, swc: 0.5 }] },
    { id: "merc_taowu_mastermind_and_schemer", ava: 1 },
    { id: "merc_emily_handelman_intel_agent", ava: 1, profiles: [{ name: "Breaker Combi Rifle+Nanopulser",            cost:  22, swc: 0 }, { name: "Combi Rifle+Grenade Launcher",              cost:  28, swc: 0 }, { name: "Combi Rifle+Grenade Launcher",              cost:  24, swc: 0 }] },
  ]},
  "O-12": { id: 1001, units: [
    { id: "o12_stormbots", ava: 1 },
    { id: "o12_kytta_copperbots", ava: 1 },
    { id: "o12_millicent_copperbots", ava: 1 },
    { id: "merc_parvati_circle_league_star", ava: 1 },
    { id: "o12_cyberghosts_quantronic_intervention_unit", ava: 2 },
    { id: "o12_crushers_special_naval_demolition_team", ava: 2 },
    { id: "o12_team_sirius", ava: 2 },
    { id: "o12_ment_agents_psid", ava: 1 },
    { id: "o12_cuervo_goldstein_basilisk_level_delta", ava: 1 },
    { id: "o12_vidocq_multipurpose_security_brigade", ava: 2 },
    { id: "merc_monstruckers", ava: 1 },
    { id: "o12_silverstar_rovers", ava: 2 },
    { id: "o12_hellblazers_cqb_spec_unit", ava: 2 },
    { id: "o12_ensign_katherine_cho_psi_unit", ava: 1 },
    { id: "o12_wreckers_fire_recon_armored_squadron", ava: 1 },
    { id: "o12_fuzzbots", ava: 2 },
    { id: "o12_clandestine_action_unit_nightshades", ava: 1 },
    { id: "o12_kappa_unit", ava: 999 },
    { id: "merc_kyra_sharma_the_iron_maiden_of_the_optimates", ava: 1 },
    { id: "o12_gangbusters_special_crime_squad", ava: 2 },
    { id: "o12_roadbots_highway_patrol", ava: 2 },
    { id: "o12_moonrakers_forward_remote_devices", ava: 2 },
    { id: "o12_psi_cops", ava: 2 },
    { id: "merc_yudbots", ava: 4 },
    { id: "merc_varangian_guard", ava: 4 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "o12_firebat_attack_wing", ava: 1 },
    { id: "o12_gamma_unit", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "o12_lynx_unit", ava: 2 },
    { id: "merc_dikpala_tacbots", ava: 2 },
    { id: "o12_alpha_unit", ava: 2 },
    { id: "o12_zeta_unit", ava: 1 },
    { id: "o12_oko_copperbots", ava: 2 },
    { id: "o12_peeler_copperbots", ava: 2 },
    { id: "o12_sonya_lacroix_glo_pol_marshall", ava: 1 },
    { id: "o12_lawkeepers_badlands_patrol", ava: 2 },
    { id: "o12_delta_unit", ava: 4 },
    { id: "o12_specialized_support_unit_lambda", ava: 2 },
    { id: "o12_jackboots", ava: 2 },
    { id: "o12_nimrods_wetworks_detachment", ava: 2 },
    { id: "o12_epsilon_unit", ava: 2 },
    { id: "o12_razor_unit", ava: 2 },
    { id: "o12_tinkers_maintenance_support_company", ava: 1 },
    { id: "o12_bluecoats_naval_security_detachments", ava: 2 },
    { id: "o12_omega_unit", ava: 3 },
    { id: "o12_raptor_boarding_squad", ava: 2 },
    { id: "merc_raveneye_officers", ava: 1, profiles: [{ name: "Submachine Gun+E/Marat",                    cost:  12, swc: 0 }, { name: "Submachine Gun+E/Marat Lt.L1",              cost:  12, swc: 0 }] },
    { id: "merc_hippolyta_amazon_officer", ava: 1 },
  ]},
  "Starmada": { id: 1002, units: [
    { id: "o12_cyberghosts_quantronic_intervention_unit", ava: 1 },
    { id: "o12_betatroopers_remote_activity_unit_beta", ava: 5 },
    { id: "o12_arko_naval_reconaissance_special_unit", ava: 2 },
    { id: "o12_sekudroids_surveillance_and_security_droids", ava: 2 },
    { id: "o12_ensign_katherine_cho_psi_unit", ava: 1 },
    { id: "o12_roadbots_highway_patrol", ava: 2 },
    { id: "merc_varangian_guard", ava: 2 },
    { id: "merc_hector_homeridae_s_champion", ava: 1 },
    { id: "merc_andromeda_sophistes_of_the_steel_phalanx", ava: 1 },
    { id: "merc_raveneye_officers", ava: 2, profiles: [{ name: "Submachine Gun+E/Marat",                    cost:  12, swc: 0 }, { name: "Submachine Gun+E/Marat Lt.L1",              cost:  12, swc: 0 }] },
    { id: "o12_lawkeepers_badlands_patrol", ava: 2 },
    { id: "o12_vidocq_multipurpose_security_brigade", ava: 2 },
    { id: "merc_yudbots", ava: 2 },
    { id: "o12_saladin_naval_liaison_officer", ava: 1 },
    { id: "o12_raptor_boarding_squad", ava: 4 },
    { id: "o12_peeler_copperbots", ava: 1 },
    { id: "o12_tinkers_maintenance_support_company", ava: 1 },
    { id: "merc_tian_g_u_orbital_activity_squad", ava: 1 },
    { id: "merc_shona_carano_special_instructor_and_aristeia_swordmaster", ava: 1 },
    { id: "o12_bluecoats_naval_security_detachments", ava: 4 },
    { id: "o12_firebat_attack_wing", ava: 1 },
    { id: "merc_sacred_military_order_of_knights_of_santiago", ava: 1 },
    { id: "o12_zeta_unit", ava: 1 },
    { id: "o12_oko_copperbots", ava: 2 },
    { id: "o12_specialized_support_unit_lambda", ava: 2 },
    { id: "o12_kytta_copperbots", ava: 1 },
    { id: "o12_psi_cops", ava: 2 },
    { id: "o12_fuzzbots", ava: 2 },
    { id: "o12_epsilon_unit", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_parvati_circle_league_star", ava: 1 },
    { id: "o12_nyoka_assault_troops", ava: 5 },
    { id: "o12_crushers_special_naval_demolition_team", ava: 3 },
    { id: "o12_casanova_noc_operative", ava: 1 },
    { id: "o12_ment_agents_psid", ava: 1 },
    { id: "o12_millicent_copperbots", ava: 1 },
    { id: "o12_bronzes_deep_space_peacemaker_corps", ava: 3 },
    { id: "o12_jackboots", ava: 2 },
    { id: "o12_clandestine_action_unit_nightshades", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "o12_kappa_unit", ava: 5 },
    { id: "merc_bixie_the_jade_champion", ava: 1 },
  ]},
  "Torchlight Brigade": { id: 1003, units: [
    { id: "o12_striders_scouting_forward_unit", ava: 2 },
    { id: "o12_wreckers_fire_recon_armored_squadron", ava: 2 },
    { id: "o12_kytta_copperbots", ava: 1 },
    { id: "o12_fuzzbots", ava: 2 },
    { id: "o12_stormbots", ava: 2 },
    { id: "o12_clandestine_action_unit_nightshades", ava: 1 },
    { id: "o12_moonrakers_forward_remote_devices", ava: 2 },
    { id: "o12_specialized_support_unit_lambda", ava: 2 },
    { id: "o12_jackboots", ava: 1, profiles: [{ name: "Thunderbolt+E/M Carbine",                   cost:  26, swc: 0 }, { name: "AP Submachine Gun+Light Riotstopper",       cost:  21, swc: 0 }, { name: "Heavy Machine Gun+Light Riotstopper",       cost:  29, swc: 1 }] },
    { id: "merc_yudbots", ava: 2 },
    { id: "merc_beasthunters_free_guild", ava: 1, profiles: [{ name: "Heavy Flamethrower+Panzerfaust",            cost:   9, swc: 0 }, { name: "Heavy Flamethrower+Tactical Bow",           cost:  15, swc: 0 }, { name: "Heavy Flamethrower+Panzerfaust",            cost:  15, swc: 0 }] },
    { id: "o12_jamie_arantes_netroid_handler", ava: 1 },
    { id: "o12_hellblazers_cqb_spec_unit", ava: 3 },
    { id: "merc_diggers_armed_prospectors", ava: 1 },
    { id: "merc_raveneye_officers", ava: 2, profiles: [{ name: "Submachine Gun+E/Marat",                    cost:  12, swc: 0 }, { name: "Submachine Gun+E/Marat",                    cost:  18, swc: 0, ocultable: true }, { name: "Submachine Gun+E/Marat Lt.L1",              cost:  17, swc: 0, ocultable: true }] },
    { id: "o12_peeler_copperbots", ava: 1 },
    { id: "o12_waveriders_cybercombat_team", ava: 2 },
    { id: "o12_kludgers_resolution_team", ava: 3 },
    { id: "o12_tinkers_maintenance_support_company", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "o12_kappa_unit", ava: 1, profiles: [{ name: "Combi Rifle",                               cost:  12, swc: 0 }, { name: "Submachine Gun",                            cost:  13, swc: 0.5 }, { name: "Combi Rifle+Flash Pulse",                   cost:  14, swc: 0 }, { name: "Combi Rifle",                               cost:  14, swc: 0 }] },
    { id: "o12_firebat_attack_wing", ava: 1 },
    { id: "o12_silverstar_rovers", ava: 5 },
    { id: "o12_silverstar_prime", ava: 2 },
    { id: "merc_hippolyta_amazon_officer", ava: 1 },
    { id: "o12_oko_copperbots", ava: 2 },
    { id: "o12_ment_agents_psid", ava: 1 },
    { id: "o12_sonya_lacroix_glo_pol_marshall", ava: 1 },
    { id: "o12_millicent_copperbots", ava: 1 },
    { id: "o12_psi_cops", ava: 2 },
    { id: "o12_vidocq_multipurpose_security_brigade", ava: 1 },
    { id: "o12_nimrods_wetworks_detachment", ava: 2 },
    { id: "o12_yellowjackets_transorbital_team", ava: 2 },
    { id: "o12_jamie_arantes_netroid_rover", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "merc_kyra_sharma_the_iron_maiden_of_the_optimates", ava: 1, profiles: [{ name: "MULTI Marksman Rifle+Light Riotstopper",    cost:  45, swc: 0 }] },
  ]},
  "JSA": { id: 1101, units: [
    { id: "jsa_sohei_tsugekitai", ava: 1 },
    { id: "jsa_miyamoto_mushashi", ava: 1 },
    { id: "jsa_shurayuki_onna_koroshi_ya", ava: 1 },
    { id: "merc_yaopu_pangguling", ava: 2 },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "merc_karakuri_special_project", ava: 2 },
    { id: "merc_keisotsu_butai", ava: 999 },
    { id: "jsa_atom_aibot", ava: 2 },
    { id: "jsa_uran_aibot", ava: 1 },
    { id: "merc_yaoz_o", ava: 3 },
    { id: "jsa_raiden_seibutai", ava: 3 },
    { id: "jsa_oniwaban_shinobu_kitsune", ava: 1 },
    { id: "jsa_kyosho_saibayunitto", ava: 1 },
    { id: "merc_tokusetsu_butai", ava: 2 },
    { id: "jsa_senku_troops", ava: 5 },
    { id: "jsa_nokizaru_unit", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "jsa_mechazoid_sokorentai", ava: 1 },
    { id: "merc_daiyokai_dengekitai", ava: 1 },
    { id: "merc_tanko_zensenbutai", ava: 2 },
    { id: "jsa_hatamoto_imperial_guard", ava: 1 },
    { id: "jsa_ryuken_unit_9", ava: 2 },
    { id: "jsa_oniwaban", ava: 1 },
    { id: "jsa_genbutai", ava: 1 },
    { id: "jsa_shizoku_kogeki_tai", ava: 1 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "jsa_kempeitai", ava: 2 },
    { id: "merc_saito_togan_mercenary_ninja", ava: 1, profiles: [{ name: "T2 Boarding Shotgun+Smoke Grenades",        cost:  33, swc: 0, ocultable: true }] },
    { id: "jsa_jizamurai_hanryodan", ava: 1 },
    { id: "jsa_o_yoroi_kidobutai", ava: 1 },
    { id: "jsa_kyojin_killers", ava: 1 },
    { id: "jsa_robio_aibot", ava: 1 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "jsa_domaru_takeshi_neko_oyama", ava: 1 },
    { id: "jsa_kaizoku_yuriko_oda", ava: 1 },
    { id: "jsa_teishin_guntai", ava: 2 },
    { id: "jsa_kurayami_ninjas", ava: 1 },
    { id: "jsa_taguraida_jsa_tag_support_pilots", ava: 1 },
    { id: "jsa_aragoto_senkenbutai_advance_guard_regiment_of_nippon", ava: 2 },
    { id: "jsa_garon_aibot", ava: 2 },
    { id: "merc_ninjas", ava: 2, profiles: [{ name: "Tactical Bow+Shock Mine",                   cost:  24, swc: 0, ocultable: true }, { name: "Submachine Gun",                            cost:  27, swc: 0, ocultable: true }, { name: "MULTI Sniper Rifle",                        cost:  31, swc: 1.5, ocultable: true }, { name: "Submachine Gun",                            cost:  33, swc: 0.5, ocultable: true }, { name: "Tactical Bow+Shock Mine",                   cost:  26, swc: 0, ocultable: true }, { name: "Boarding Shotgun+Flash Pulse",              cost:  30, swc: 0.5, ocultable: true }] },
    { id: "jsa_domaru_butai", ava: 2 },
    { id: "jsa_shikami", ava: 2 },
  ]},
  "Shindenbutai": { id: 1102, units: [
    { id: "jsa_metsuke_officers", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "merc_monstruckers", ava: 1 },
    { id: "jsa_uran_aibot", ava: 1 },
    { id: "merc_yamabushi", ava: 2 },
    { id: "jsa_shizoku_kogeki_tai", ava: 2, profiles: [{ name: "AP Heavy Machine Gun+Chain Rifle",          cost:  43, swc: 1.5 }, { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  33, swc: 1.5 }, { name: "Heavy Rocket Launcher+Assault Pistol",      cost:  38, swc: 1.5 }] },
    { id: "jsa_kaizoku_yuriko_oda", ava: 1 },
    { id: "merc_yojimbo_motorized_sword_for_hire", ava: 1 },
    { id: "merc_saito_togan_mercenary_ninja", ava: 1, profiles: [{ name: "T2 Boarding Shotgun+Smoke Grenades",        cost:  33, swc: 0, ocultable: true }] },
    { id: "merc_yojimbo_sword_for_hire", ava: 1 },
    { id: "jsa_garon_aibot", ava: 1 },
    { id: "merc_triphammer_repurposed_industrial_tag", ava: 1 },
    { id: "merc_tokusetsu_butai", ava: 2 },
    { id: "jsa_senku_troops", ava: 5 },
    { id: "jsa_nokizaru_unit", ava: 2 },
    { id: "jsa_shurayuki_onna_koroshi_ya", ava: 1 },
    { id: "jsa_kurayami_ninjas", ava: 2 },
    { id: "jsa_mechazoid_sokorentai", ava: 2 },
    { id: "jsa_robio_aibot", ava: 1 },
    { id: "jsa_hatamoto_imperial_guard", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "jsa_teishin_guntai", ava: 2 },
    { id: "jsa_taguraida_jsa_tag_support_pilots", ava: 1, profiles: [{ name: "Light Shotgun",                             cost:  12, swc: 0 }] },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "jsa_jizamurai_hanryodan", ava: 5 },
    { id: "jsa_atom_aibot", ava: 1 },
    { id: "merc_aida_swanson_submondo_smuggler", ava: 1 },
    { id: "jsa_s_t_r_s_tanuki_team", ava: 5 },
    { id: "merc_yaopu_pangguling", ava: 1 },
    { id: "jsa_kyojin_killers", ava: 2 },
    { id: "merc_yaoz_o", ava: 3 },
    { id: "jsa_raiden_seibutai", ava: 3 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_ninjas", ava: 1, profiles: [{ name: "Tactical Bow+Shock Mine",                   cost:  24, swc: 0, ocultable: true }, { name: "Submachine Gun",                            cost:  27, swc: 0, ocultable: true }, { name: "MULTI Sniper Rifle",                        cost:  31, swc: 1.5, ocultable: true }, { name: "Submachine Gun",                            cost:  33, swc: 0.5, ocultable: true }, { name: "Tactical Bow+Shock Mine",                   cost:  26, swc: 0, ocultable: true }, { name: "Boarding Shotgun+Flash Pulse",              cost:  30, swc: 0.5, ocultable: true }] },
    { id: "merc_kazuraba_ruby_monday", ava: 1 },
  ]},
  "Ōban": { id: 1103, units: [
    { id: "jsa_kempeitai", ava: 3 },
    { id: "merc_saito_togan_mercenary_ninja", ava: 1, profiles: [{ name: "T2 Boarding Shotgun+Smoke Grenades",        cost:  33, swc: 0, ocultable: true }] },
    { id: "jsa_taguraida_jsa_tag_support_pilots", ava: 1, profiles: [{ name: "Light Shotgun+Flash Pulse",                 cost:  11, swc: 0 }] },
    { id: "merc_yojimbo_sword_for_hire", ava: 1 },
    { id: "merc_ninjas", ava: 3, profiles: [{ name: "Tactical Bow+Shock Mine",                   cost:  24, swc: 0, ocultable: true }, { name: "Submachine Gun",                            cost:  27, swc: 0, ocultable: true }, { name: "MULTI Sniper Rifle",                        cost:  31, swc: 1.5, ocultable: true }, { name: "Submachine Gun",                            cost:  33, swc: 0.5, ocultable: true }, { name: "Tactical Bow+Shock Mine",                   cost:  26, swc: 0, ocultable: true }, { name: "Boarding Shotgun+Flash Pulse",              cost:  30, swc: 0.5, ocultable: true }] },
    { id: "jsa_domaru_butai", ava: 5 },
    { id: "merc_tanko_zensenbutai", ava: 3 },
    { id: "merc_tokusetsu_butai", ava: 2 },
    { id: "jsa_aragoto_senkenbutai_advance_guard_regiment_of_nippon", ava: 4 },
    { id: "merc_yaoz_o", ava: 3 },
    { id: "merc_sacha_xenotech_hunters", ava: 1 },
    { id: "merc_daiyokai_dengekitai", ava: 2 },
    { id: "merc_warcors_war_correspondents", ava: 1 },
    { id: "jsa_oniwaban_shinobu_kitsune", ava: 1 },
    { id: "jsa_kaizoku_yuriko_oda", ava: 1 },
    { id: "merc_freelance_operator_samsa", ava: 1 },
    { id: "merc_yaoxie_rui_shi", ava: 2 },
    { id: "merc_keisotsu_butai", ava: 999 },
    { id: "jsa_o_yoroi_kidobutai", ava: 2 },
    { id: "jsa_garon_aibot", ava: 1 },
    { id: "jsa_uran_aibot", ava: 1 },
    { id: "jsa_ryuken_unit_9", ava: 3 },
    { id: "jsa_kyosho_saibayunitto", ava: 1 },
    { id: "jsa_oniwaban", ava: 2 },
    { id: "jsa_miyamoto_mushashi", ava: 1, profiles: [{ name: "Chain Rifle+Tactical Bow",                  cost:  21, swc: 0 }, { name: "Chain Rifle+Tactical Bow",                  cost:  25, swc: 0.5 }] },
    { id: "jsa_genbutai", ava: 1 },
    { id: "jsa_shikami", ava: 2 },
    { id: "merc_yojimbo_motorized_sword_for_hire", ava: 1 },
    { id: "merc_yaopu_pangguling", ava: 2 },
    { id: "merc_yaoxie_lu_duan", ava: 2 },
    { id: "jsa_kuroshi_rider_aragoto_senkenbutai_rikugun_shoi", ava: 1 },
    { id: "merc_yuan_yuan", ava: 2 },
    { id: "merc_karakuri_special_project", ava: 3 },
    { id: "jsa_atom_aibot", ava: 1 },
    { id: "jsa_robio_aibot", ava: 1 },
    { id: "jsa_domaru_takeshi_neko_oyama", ava: 1 },
  ]},
};

const SKILLS_META = {
  19: { name: "Martial Arts L1", wiki: "https://infinitythewiki.com/Martial_Arts", name_es: "Artes Marciales N1", wiki_es: "https://infinitythewiki.com/es/Artes_Marciales" },
  20: { name: "Martial Arts L2", wiki: "https://infinitythewiki.com/Martial_Arts", name_es: "Artes Marciales N2", wiki_es: "https://infinitythewiki.com/es/Artes_Marciales" },
  21: { name: "Martial Arts L3", wiki: "https://infinitythewiki.com/Martial_Arts", name_es: "Artes Marciales N3", wiki_es: "https://infinitythewiki.com/es/Artes_Marciales" },
  22: { name: "Martial Arts L4", wiki: "https://infinitythewiki.com/Martial_Arts", name_es: "Artes Marciales N4", wiki_es: "https://infinitythewiki.com/es/Artes_Marciales" },
  23: { name: "Martial Arts L5", wiki: "https://infinitythewiki.com/Martial_Arts", name_es: "Artes Marciales N5", wiki_es: "https://infinitythewiki.com/es/Artes_Marciales" },
  24: { name: "Berserk", wiki: "https://infinitythewiki.com/Berserk", wiki_es: "https://infinitythewiki.com/es/Berserk" },
  25: { name: "Booty", wiki: "https://infinitythewiki.com/Booty", name_es: "Botín", wiki_es: "https://infinitythewiki.com/es/Botín" },
  26: { name: "Chain of Command", wiki: "https://infinitythewiki.com/Chain_of_Command", name_es: "Cadena de Mando", wiki_es: "https://infinitythewiki.com/es/Cadena_de_Mando" },
  28: { name: "Mimetism", wiki: "https://infinitythewiki.com/Mimetism", name_es: "Mimetismo", wiki_es: "https://infinitythewiki.com/es/Mimetismo" },
  29: { name: "Camouflage", wiki: "https://infinitythewiki.com/Camouflage", name_es: "Camuflaje", wiki_es: "https://infinitythewiki.com/es/Camuflaje" },
  33: { name: "Parachutist", wiki: "https://infinitythewiki.com/Parachutist", name_es: "Paracaidista", wiki_es: "https://infinitythewiki.com/es/Paracaidista" },
  35: { name: "Combat Jump", wiki: "https://infinitythewiki.com/Combat_Jump", name_es: "Salto de Combate", wiki_es: "https://infinitythewiki.com/es/Salto_de_Combate" },
  38: { name: "Explode", wiki: "https://infinitythewiki.com/Explode", name_es: "Explotar", wiki_es: "https://infinitythewiki.com/es/Explotar" },
  39: { name: "Natural Born Warrior", wiki: "https://infinitythewiki.com/Natural_Born_Warrior", name_es: "Guerrero Nato", wiki_es: "https://infinitythewiki.com/es/Guerrero_Nato" },
  40: { name: "Dodge", wiki: "https://infinitythewiki.com/Dodge", name_es: "Esquivar", wiki_es: "https://infinitythewiki.com/es/Esquivar" },
  47: { name: "Infiltration", wiki: "https://infinitythewiki.com/Infiltrate", name_es: "Infiltración", wiki_es: "https://infinitythewiki.com/es/Infiltración" },
  49: { name: "Engineer", wiki: "https://infinitythewiki.com/Engineer", name_es: "Ingeniero", wiki_es: "https://infinitythewiki.com/es/Ingeniero" },
  52: { name: "Inspiring Leadership", wiki: "https://infinitythewiki.com/Inspiring_Leadership", name_es: "Liderazgo Inspirador", wiki_es: "https://infinitythewiki.com/es/Liderazgo_Inspirador" },
  53: { name: "Doctor", wiki: "https://infinitythewiki.com/Doctor", name_es: "Médico", wiki_es: "https://infinitythewiki.com/es/Médico" },
  55: { name: "MetaChemistry", wiki: "https://infinitythewiki.com/MetaChemistry", name_es: "MetaQuímica", wiki_es: "https://infinitythewiki.com/es/Metaquímica" },
  56: { name: "Minelayer", wiki: "https://infinitythewiki.com/Minelayer", name_es: "Minador", wiki_es: "https://infinitythewiki.com/es/Minador" },
  58: { name: "Terrain", wiki: "https://infinitythewiki.com/Terrain", name_es: "Terreno", wiki_es: "https://infinitythewiki.com/es/Terreno" },
  59: { name: "Forward Observer", wiki: "https://infinitythewiki.com/Forward_Observer", name_es: "Observador de Artillería", wiki_es: "https://infinitythewiki.com/es/Observador_de_Artillería" },
  61: { name: "Total Reaction", wiki: "https://infinitythewiki.com/Total_Reaction", name_es: "Reacción Total", wiki_es: "https://infinitythewiki.com/es/Reacción_Total" },
  62: { name: "Regeneration", wiki: "https://infinitythewiki.com/Regeneration", name_es: "Regeneración", wiki_es: "https://infinitythewiki.com/es/Regeneración" },
  64: { name: "Paramedic", wiki: "https://infinitythewiki.com/Paramedic", name_es: "Sanitario", wiki_es: "https://infinitythewiki.com/es/Sanitario" },
  65: { name: "Sensor", wiki: "https://infinitythewiki.com/Sensor", wiki_es: "https://infinitythewiki.com/es/Sensor" },
  67: { name: "Sixth Sense", wiki: "https://infinitythewiki.com/Sixth_Sense", name_es: "Sexto Sentido", wiki_es: "https://infinitythewiki.com/es/Sexto_Sentido" },
  69: { name: "Strategos L1", wiki: "https://infinitythewiki.com/Strategos", name_es: "Strategos N1", wiki_es: "https://infinitythewiki.com/es/Strategos" },
  70: { name: "Strategos L2", wiki: "https://infinitythewiki.com/Strategos", name_es: "Strategos N2", wiki_es: "https://infinitythewiki.com/es/Strategos" },
  72: { name: "Protheion", wiki: "https://infinitythewiki.com/Protheion", wiki_es: "https://infinitythewiki.com/es/Protheion" },
  73: { name: "Morpho-scan", wiki: "https://infinitythewiki.com/Morpho-Scan", wiki_es: "https://infinitythewiki.com/es/Morpho_Scan" },
  74: { name: "Super-Jump", wiki: "https://infinitythewiki.com/Super-Jump", name_es: "Súper-Salto", wiki_es: "https://infinitythewiki.com/es/Súper-Salto" },
  82: { name: "Climbing Plus", wiki: "https://infinitythewiki.com/Climbing_Plus", name_es: "Trepar Plus", wiki_es: "https://infinitythewiki.com/es/Trepar_Plus" },
  83: { name: "Religious Troop", wiki: "https://infinitythewiki.com/Religious_Troop", name_es: "Tropa Religiosa", wiki_es: "https://infinitythewiki.com/es/Tropa_Religiosa" },
  84: { name: "Courage", wiki: "https://infinitythewiki.com/Courage", name_es: "Coraje", wiki_es: "https://infinitythewiki.com/es/Coraje" },
  85: { name: "Dogged", wiki: "https://infinitythewiki.com/Dogged", name_es: "Tenaz", wiki_es: "https://infinitythewiki.com/es/Tenaz" },
  86: { name: "No Wound Incapacitation", wiki: "https://infinitythewiki.com/No_Wound_Incapacitation", name_es: "Sin Incapacidad por Herida", wiki_es: "https://infinitythewiki.com/es/Sin_Incapacidad_por_Herida" },
  89: { name: "Sapper", wiki: "https://infinitythewiki.com/Sapper", name_es: "Zapador", wiki_es: "https://infinitythewiki.com/es/Zapador" },
  109: { name: "Neurocinetics", wiki: "https://infinitythewiki.com/Neurocinetics", name_es: "Neurocinética", wiki_es: "https://infinitythewiki.com/es/Neurocinética" },
  119: { name: "Lieutenant", wiki: "https://infinitythewiki.com/Lieutenant", name_es: "Teniente", wiki_es: "https://infinitythewiki.com/es/Teniente" },
  122: { name: "Number 2", wiki: "https://infinitythewiki.com/Number_2", name_es: "Nº2", wiki_es: "https://infinitythewiki.com/es/Número_2" },
  131: { name: "Discover", wiki: "https://infinitythewiki.com/Discover", name_es: "Descubrir", wiki_es: "https://infinitythewiki.com/es/Descubrir" },
  156: { name: "Marksmanship", wiki: "https://infinitythewiki.com/Marksmanship", name_es: "Puntería", wiki_es: "https://infinitythewiki.com/es/Puntería" },
  161: { name: "Forward Deployment", wiki: "https://infinitythewiki.com/Forward_Deployment", name_es: "Desp. Avanzado", wiki_es: "https://infinitythewiki.com/es/Despliegue_Avanzado" },
  162: { name: "Immunity", wiki: "https://infinitythewiki.com/Immunity", name_es: "Inmunidad", wiki_es: "https://infinitythewiki.com/es/Inmunidad" },
  164: { name: "Stealth", wiki: "https://infinitythewiki.com/Stealth", name_es: "Sigilo", wiki_es: "https://infinitythewiki.com/es/Sigilo" },
  189: { name: "Specialist Operative", wiki: "https://infinitythewiki.com/Specialist_Operative", name_es: "Operativo Especialista", wiki_es: "https://infinitythewiki.com/es/Operativo_Especialista" },
  191: { name: "Surprise Attack", wiki: "https://infinitythewiki.com/Surprise_Attack", name_es: "Ataque Sorpresa", wiki_es: "https://infinitythewiki.com/es/Ataque_Sorpresa" },
  201: { name: "BS Attack", wiki: "https://infinitythewiki.com/BS_Attack", name_es: "Ataque CD", wiki_es: "https://infinitythewiki.com/es/Ataque_CD" },
  207: { name: "Counterintelligence", wiki: "https://infinitythewiki.com/Counterintelligence", name_es: "Contrainteligencia", wiki_es: "https://infinitythewiki.com/es/Contrainteligencia" },
  211: { name: "NCO", wiki: "https://infinitythewiki.com/NCO", name_es: "Suboficial", wiki_es: "https://infinitythewiki.com/es/Suboficial" },
  213: { name: "Tactical Awareness", wiki: "https://infinitythewiki.com/Tactical_Awareness", name_es: "Sentido Táctico", wiki_es: "https://infinitythewiki.com/es/Sentido_Táctico" },
  215: { name: "Decoy", wiki: "https://infinitythewiki.com/Decoy", name_es: "Señuelo", wiki_es: "https://infinitythewiki.com/es/Señuelo" },
  220: { name: "Vulnerability", wiki: "https://infinitythewiki.com/Vulnerability", name_es: "Vulnerabilidad", wiki_es: "https://infinitythewiki.com/es/Vulnerabilidad" },
  235: { name: "Remote Presence", wiki: "https://infinitythewiki.com/Remote_Presence", name_es: "Presencia Remota", wiki_es: "https://infinitythewiki.com/es/Presencia_Remota" },
  237: { name: "Shasvastii", wiki: "https://infinitythewiki.com/Shasvastii", wiki_es: "https://infinitythewiki.com/es/Shasvastii" },
  238: { name: "Hidden Deployment", wiki: "https://infinitythewiki.com/Hidden_Deployment", name_es: "Despliegue Oculto", wiki_es: "https://infinitythewiki.com/es/Despliegue_Oculto" },
  240: { name: "CC Attack", wiki: "https://infinitythewiki.com/CC_Attack", name_es: "Ataque CC", wiki_es: "https://infinitythewiki.com/es/Ataque_CC" },
  242: { name: "Triangulated Fire", wiki: "https://infinitythewiki.com/Triangulated_Fire", name_es: "Ataque Triangulado", wiki_es: "https://infinitythewiki.com/es/Ataque_Triangulado" },
  243: { name: "Peripheral", wiki: "https://infinitythewiki.com/Peripheral", name_es: "Periférico", wiki_es: "https://infinitythewiki.com/es/Periférico" },
  246: { name: "Transmutation", wiki: "https://infinitythewiki.com/Transmutation", name_es: "Transmutación", wiki_es: "https://infinitythewiki.com/es/Transmutación" },
  247: { name: "Guard", wiki: "https://infinitythewiki.com/Guard", name_es: "Guardián", wiki_es: "https://infinitythewiki.com/es/Guardián" },
  248: { name: "Mnemonica", wiki: "https://infinitythewiki.com/Mnemonica", name_es: "Mnemotecno", wiki_es: "https://infinitythewiki.com/es/Mnemotecno" },
  249: { name: "Impersonation", wiki: "https://infinitythewiki.com/Impersonation", name_es: "Suplantación", wiki_es: "https://infinitythewiki.com/es/Suplantación" },
  250: { name: "Frenzy", wiki: "https://infinitythewiki.com/Frenzy", name_es: "Frenesí", wiki_es: "https://infinitythewiki.com/es/Frenesí" },
  251: { name: "Strategic Deployment", wiki: "https://infinitythewiki.com/Strategic_Deployment", name_es: "Desp. Estratégico", wiki_es: "https://infinitythewiki.com/es/Despliegue_Estratégico" },
  252: { name: "G: Jumper", wiki: "https://infinitythewiki.com/G:_Jumper", wiki_es: "https://infinitythewiki.com/es/G:_Jumper" },
  254: { name: "Gizmokit", wiki: "" },
  255: { name: "RemDriver", wiki: "https://infinitythewiki.com/Remdriver", wiki_es: "https://infinitythewiki.com/es/Remdriver" },
  256: { name: "Impetuous", wiki: "https://infinitythewiki.com/Impetuous", name_es: "Impetuoso", wiki_es: "https://infinitythewiki.com/es/Impetuoso" },
  258: { name: "Regular", wiki: "" },
  261: { name: "FT Master", wiki: "https://infinitythewiki.com/FT_Master", wiki_es: "https://infinitythewiki.com/es/FT_Master" },
  262: { name: "Combat Instinct", wiki: "https://infinitythewiki.com/Combat_Instinct", name_es: "Intuición de Combate", wiki_es: "https://infinitythewiki.com/es/Intuición_de_Combate" },
  263: { name: "Jump", wiki: "https://infinitythewiki.com/Jump", name_es: "Saltar", wiki_es: "https://infinitythewiki.com/es/Saltar" },
  264: { name: "No Cover", wiki: "https://infinitythewiki.com/No_Cover", name_es: "Sin Cobertura", wiki_es: "https://infinitythewiki.com/es/Sin_Cobertura" },
  265: { name: "Aerial", wiki: "https://infinitythewiki.com/Aerial", name_es: "Aéreo" },
  266: { name: "Bangbomb", wiki: "https://infinitythewiki.com/Bangbomb" },
  267: { name: "Warhorse", wiki: "https://infinitythewiki.com/Warhorse", name_es: "Fogueado", wiki_es: "https://infinitythewiki.com/es/Fogueado" },
  268: { name: "Limited Cover", wiki: "https://infinitythewiki.com/Limited_Cover", name_es: "Cobertura Limitada" },
  270: { name: "TAGCom", wiki: "https://infinitythewiki.com/TAGCom", wiki_es: "https://infinitythewiki.com/es/TAGCom" },
  271: { name: "Climb", wiki: "https://infinitythewiki.com/Climb", name_es: "Trepar", wiki_es: "https://infinitythewiki.com/es/Trepar" },
  272: { name: "Journalist", wiki: "https://infinitythewiki.com/Journalist", name_es: "Reportero", wiki_es: "https://infinitythewiki.com/es/Reportero" },
  273: { name: "MediKit", wiki: "" },
  274: { name: "CC=21", wiki: "" },
  275: { name: "Tech-recovery", wiki: "https://infinitythewiki.com/Tech-Recovery", name_es: "Tecnorrecuperación", wiki_es: "https://infinitythewiki.com/es/Tecnorrecuperación" },
  276: { name: "Technorganic", wiki: "https://infinitythewiki.com/Technorganic", name_es: "Tecnoorgánico", wiki_es: "https://infinitythewiki.com/es/Tecnoorgánico" },
  277: { name: "Cyberplug", wiki: "https://infinitythewiki.com/Cyberplug", wiki_es: "https://infinitythewiki.com/es/Cyberplug" },
  278: { name: "BS=12", wiki: "", name_es: "CD=12" },
  279: { name: "BS=11", wiki: "", name_es: "CD=11" },
  1000: { name: "Hacker", wiki: "https://infinitythewiki.com/Hacker", wiki_es: "https://infinitythewiki.com/es/Hacker" },
};

const EQUIPS_META = {
  24: { name: "Holomask", wiki: "https://infinitythewiki.com/HoloMask", name_es: "Holomáscara", wiki_es: "https://infinitythewiki.com/es/HoloMáscara" },
  63: { name: "Repeater", wiki: "https://infinitythewiki.com/Repeater", name_es: "Repetidor", wiki_es: "https://infinitythewiki.com/es/Repetidor" },
  91: { name: "Baggage", wiki: "https://infinitythewiki.com/Baggage", name_es: "Bagaje", wiki_es: "https://infinitythewiki.com/es/Bagaje" },
  100: { name: "Hacking Device", wiki: "https://infinitythewiki.com/Hacking_Device", name_es: "Disp. Hacker", wiki_es: "https://infinitythewiki.com/es/Dispositivo_de_Hacker" },
  101: { name: "Hacking Device Plus", wiki: "https://infinitythewiki.com/Hacking_Device#Hacking_Device_Plus", name_es: "Disp. Hacker Plus", wiki_es: "https://infinitythewiki.com/es/Dispositivo_de_Hacker" },
  104: { name: "Holoprojector", wiki: "https://infinitythewiki.com/Holoprojector", name_es: "Holoproyector", wiki_es: "https://infinitythewiki.com/es/Holoproyector" },
  106: { name: "MediKit", wiki: "https://infinitythewiki.com/MediKit", wiki_es: "https://infinitythewiki.com/es/MediKit" },
  107: { name: "Motorcycle", wiki: "https://infinitythewiki.com/Motorcycle", name_es: "Moto", wiki_es: "https://infinitythewiki.com/es/Moto" },
  108: { name: "Nanoscreen", wiki: "https://infinitythewiki.com/Nanoscreen", name_es: "Nanopantalla", wiki_es: "https://infinitythewiki.com/es/Nanopantalla" },
  111: { name: "Deployable Repeater", wiki: "https://infinitythewiki.com/Deployable_Repeater", name_es: "Repetidor de Posición", wiki_es: "https://infinitythewiki.com/es/Repetidor_de_Posición" },
  113: { name: "360º Visor", wiki: "https://infinitythewiki.com/360º_Visor", name_es: "Visor 360º", wiki_es: "https://infinitythewiki.com/es/Visor_360º" },
  114: { name: "Multispectral Visor L1", wiki: "https://infinitythewiki.com/Multispectral_Visor", name_es: "Visor Multiespectral N1", wiki_es: "https://infinitythewiki.com/es/Visor_Multiespectral" },
  115: { name: "Multispectral Visor L2", wiki: "https://infinitythewiki.com/Multispectral_Visor", name_es: "Visor Multiespectral N2", wiki_es: "https://infinitythewiki.com/es/Visor_Multiespectral" },
  116: { name: "Multispectral Visor L3", wiki: "https://infinitythewiki.com/Multispectral_Visor", name_es: "Visor Multiespectral N3", wiki_es: "https://infinitythewiki.com/es/Visor_Multiespectral" },
  117: { name: "X Visor", wiki: "https://infinitythewiki.com/X-Visor", name_es: "Visor X", wiki_es: "https://infinitythewiki.com/es/Visor_X" },
  145: { name: "Killer Hacking Device", wiki: "https://infinitythewiki.com/Hacking_Device#Killer_Hacking_Device", name_es: "Disp. Hacker Asesino", wiki_es: "https://infinitythewiki.com/es/Dispositivo_de_Hacker" },
  169: { name: "TinBot: Firewall", wiki: "https://infinitythewiki.com/TinBot", wiki_es: "https://infinitythewiki.com/es/TinBot" },
  182: { name: "EVO Hacking Device", wiki: "https://infinitythewiki.com/Hacking_Device#EVO_Hacking_Device", name_es: "Disp. Hacker EVO", wiki_es: "https://infinitythewiki.com/es/Dispositivo_de_Hacker" },
  183: { name: "Albedo", wiki: "https://infinitythewiki.com/Albedo", wiki_es: "https://infinitythewiki.com/es/Albedo" },
  184: { name: "Biometric Visor", wiki: "https://infinitythewiki.com/Biometric_Visor", name_es: "Visor Biométrico", wiki_es: "https://infinitythewiki.com/es/Visor_Biométrico" },
  205: { name: "AI Motorcycle", wiki: "https://infinitythewiki.com/AI_Motorcycle", name_es: "Moto IA", wiki_es: "https://infinitythewiki.com/es/Moto_IA" },
  237: { name: "GizmoKit", wiki: "https://infinitythewiki.com/GizmoKit", wiki_es: "https://infinitythewiki.com/es/GizmoKit" },
  238: { name: "Deactivator", wiki: "https://infinitythewiki.com/Deactivator", name_es: "Desactivador", wiki_es: "https://infinitythewiki.com/es/Desactivador" },
  239: { name: "ECM: Guided", wiki: "https://infinitythewiki.com/ECM", name_es: "ECM: Guiado", wiki_es: "https://infinitythewiki.com/es/ECM" },
  241: { name: "ECM: Hacker", wiki: "https://infinitythewiki.com/ECM", wiki_es: "https://infinitythewiki.com/es/ECM" },
  245: { name: "Deployable Cover", wiki: "", name_es: "Cobertura Desplegable" },
  246: { name: "Bangbomb", wiki: "https://infinitythewiki.com/Bangbomb", wiki_es: "https://infinitythewiki.com/es/Bangbomb" },
  247: { name: "TinBot: ECM Guided", wiki: "", name_es: "TinBot: ECM Guiado" },
};
