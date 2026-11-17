---
order: 5
title: "ARPG Game"
category: "GAME · GODOT · C#"
summary: "A loot-driven top-down action RPG with a deep build system, procedural endgame and online co-op for up to four players. Simulated in 2D and drawn as voxels for an HD-2D look."
stack: ["Godot 4", "C#", ".NET", "ENet"]
wip: true
links:
  - label: "Devlog"
    href: "https://alvarofalcon.es/devlogs/arpg-game/"
  - label: "GitHub"
    href: "https://github.com/AlvaroFalcon/arpg_game"
gallery:
  - src: "../../assets/projects/arpg-game/boss-colossus-beams.png"
    alt: "Boss fight against the Ember Colossus with sweeping red beams"
    caption: "Boss fight: the Ember Colossus."
  - src: "../../assets/projects/arpg-game/town-plaza.png"
    alt: "The furnishable hideout town plaza"
    caption: "The hideout town, which players can furnish."
  - src: "../../assets/projects/arpg-game/cave-drowned_grotto-liquid.png"
    alt: "A procedurally generated flooded cavern"
    caption: "Endgame realities: caverns generated fresh on every entry."
  - src: "../../assets/projects/arpg-game/panel-passives-search-path.png"
    alt: "Passive skill tree with a searched path highlighted"
    caption: "Passive tree with search and path highlighting."
  - src: "../../assets/projects/arpg-game/run-levelup.png"
    alt: "Level-up screen offering three upgrade cards"
    caption: "Survival mode: pick an upgrade card on level-up."
  - src: "../../assets/projects/arpg-game/items-inventory.png"
    alt: "Grid inventory with item tooltips showing affixes"
    caption: "Items with tiered affixes and a grid inventory."
  - src: "../../assets/projects/arpg-game/coop-host-lobby.png"
    alt: "Online co-op lobby with a join code"
    caption: "Online co-op for up to four players with join codes."
variant: "featured"
---

## The idea

A personal project where I combine my postgraduate background in video game development with what
I do every day as an engineer: architecture, tooling and testing. It is a top-down action RPG in the
spirit of the loot-driven games I have played for years. "ARPG Game" is a working title.

## What's in it

- **Persistent characters:** classes, a passive tree, skill and support gems, ascendancies and
  per-class resources, with the stash and currency saved locally.
- **Items and crafting:** base items, tiered affixes, rarities, a grid inventory, loot filters with
  ground labels, crafting orbs, disenchanting and forging.
- **Combat:** projectile, melee, area and orbit skills with forks and pierces, damage types,
  ailments, a dodge roll and flasks.
- **Endgame:** procedurally generated caverns (cellular automata) with monster packs and a boss,
  plus a survivor-style mode with upgrade cards.
- **Online co-op for up to four players:** a host-authoritative listen server with join codes.

## Engineering notes

- **Simulated in 2D, drawn as voxels.** Every gameplay node is 2D; a 3D voxel stage with an
  orthographic camera renders underneath and lines up pixel for pixel, giving an HD-2D look without
  any 3D gameplay code.
- Design documents per system and a written map of the code, so the project stays understandable
  as it grows.
- I document the progress, decisions and dead ends in a public devlog.
