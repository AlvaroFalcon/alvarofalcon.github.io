---
order: 1
title: "EasyPixel"
category: "DESKTOP · REACT · AI"
summary: "A desktop pixel art editor for game sprites with an MCP server, so Claude can draw live inside the editor. Exports straight to Godot 4 and to 3D voxel models."
stack: ["React", "TypeScript", "Electron", "MCP", "Vitest", "Playwright"]
links:
  - label: "GitHub"
    href: "https://github.com/AlvaroFalcon/EasyPixel"
  - label: "Download"
    href: "https://github.com/AlvaroFalcon/EasyPixel/releases/latest"
gallery:
  - src: "../../assets/projects/easypixel/editor.png"
    alt: "EasyPixel editor with an animated slime sprite, layers, frames and palette panels"
    caption: "The editor: layers, frames, animations and palettes."
  - src: "../../assets/projects/easypixel/claude-drawing.gif"
    alt: "Claude drawing a slime and its animations in EasyPixel through MCP"
    caption: "Claude drawing a sprite and its idle and jump animations through MCP, live in the editor."
  - src: "../../assets/projects/easypixel/godot-export.png"
    alt: "Godot 4 editor showing a sprite exported from EasyPixel as SpriteFrames"
    caption: "One-click export to Godot 4: SpriteFrames, AnimatedSprite scenes and TileSets."
  - src: "../../assets/projects/easypixel/voxel-pine.gif"
    alt: "A pixel art pine tree turned into a rotating 3D voxel model"
    caption: "Sprites become 3D voxel models (.glb and MagicaVoxel .vox)."
  - src: "../../assets/projects/easypixel/tileset-reference.png"
    alt: "Tileset reference view in EasyPixel"
  - src: "../../assets/projects/easypixel/hd2d-godot.png"
    alt: "Voxel models from EasyPixel rendered in Godot with an HD-2D look"
variant: "featured"
---

## The problem

Drawing game sprites usually means one tool for the pixels, another for the animations and a manual
import step into the engine. I wanted a single editor that goes from a blank canvas to a playable
sprite in Godot, and that an AI assistant can use as a real tool rather than just describe images.

## What I built

A cross-platform desktop app (Windows, macOS and Linux) built with **React, TypeScript and
Electron**:

- A full sprite editor: layers, frames, named animations, palettes, transforms and spritesheets.
- **An MCP server embedded in the app.** Claude Code or Claude Desktop connect to it and get tools
  to create sprites, draw whole frames, manage layers and animations, inspect the result as an image
  and export it. Everything Claude does shows up live, opens in its own tab and is one undo step,
  so the user stays in control.
- **Godot 4 export:** `SpriteFrames` resources, ready-made `AnimatedSprite2D` / `AnimatedSprite3D`
  scenes and `TileSet`s.
- **3D voxel export** to `.glb` and MagicaVoxel `.vox`, with a rendered preview from any angle.
- English and Spanish UI, with each language in a single file.

## Engineering notes

- Monorepo with the Electron app and shared packages; unit tests with Vitest and end-to-end tests
  with Playwright, both for the web renderer and for the packaged Electron app.
- The MCP tools were designed for a model, not a human: frames can be drawn as text grids, and
  every drawing tool has a matching "look at the result" tool so the model can check its own work.
- CI on every push, and installers for Windows, macOS and Linux built by a GitHub Actions release
  workflow.
