---
order: 7
title: "af-ai"
category: "AI · DEVELOPER TOOLS"
summary: "Claude Code plugins that keep long projects coherent across sessions, with Claude acting as a coordinator of domain agents."
stack: ["Claude Code", "AI agents", "Python", "Markdown"]
links:
  - label: "GitHub"
    href: "https://github.com/AlvaroFalcon/af-ai"
screentone: true
variant: "compact"
---

## The problem

AI coding agents are great at small tasks but lose the thread on long projects: decisions get
forgotten, the same mistakes repeat, and each new session starts from zero.

## What I built

**project-kit**, a Claude Code plugin extracted from a real project where this way of working
paid off:

- A `CLAUDE.md` working agreement: research, plan, owner's OK, then implement in small steps.
- **Knowledge files per domain** that record facts not obvious from the code (measurements, API
  quirks, CI failure causes, owner decisions), each with its source.
- **One agent per area of the code**, each owning a set of paths, plus read-only advisors for
  outside expertise; the main session coordinates them.
- **Project skills** for repeated procedures such as version bumps, migrations and release dry runs.
- A docs checker in CI that fails when knowledge, agents or skills are not linked where they should
  be, so the structure cannot silently rot.

Skills to set up a repo, add knowledge, add a new domain, turn a procedure into a skill and audit a
project against the kit.
