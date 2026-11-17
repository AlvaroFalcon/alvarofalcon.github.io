---
order: 2
title: "Wall Street\nMurloc"
category: "DATA · PYTHON · LUA"
summary: "A local market-analysis tool for a game's auction house: an in-game addon scans the market, a local service stores every scan, and a web panel turns it into prices, history and a market map."
stack: ["Python", "FastAPI", "SQLite", "Lua", "Vanilla JS", "Supabase"]
private: true
variant: "dark"
---

## The problem

In a brand-new game economy, prices move fast and public price sites don't cover every region.
The in-game auction house only shows what is listed _right now_: it can't tell you whether a price
is high or low, how it moved this week, or where the gold is. A full scan returns 200,000–320,000
auctions, far too many to read by hand.

## What I built

A read-only toolkit with three parts:

- **An in-game addon (Lua)** that takes a full auction-house snapshot when the player opens it,
  summarises every item and variant (minimum, 25th percentile and median price, units, auctions)
  and spreads the work over frames with a strict CPU budget, so the game never stutters.
- **A local service (Python)** that watches the game's saved data, imports each new scan into
  SQLite in an idempotent, transactional way, and keeps a daily history per item.
- **A web panel (FastAPI + Jinja + vanilla JS)** with search, item pages with hand-written SVG
  price charts, a stock-market-style **market map** (size is gold at stake, colour is the 24 h
  change) and strategy views. It works in light and dark mode and down to phone width, with no
  build step.

Friends can also share scans through **Supabase** (row-level security, validation and quotas), so
everyone gets a fuller picture of the market.

## Engineering notes

- Packaged as a Windows desktop app with a tray icon and an installer that also installs the addon.
- Versioned data formats with forward-only migrations, and tests that never touch the network or
  real user data.
- Read-only by design: nothing is automated in the game client; every purchase and sale is made by
  hand.

The code is private, so there is no public repository. Happy to walk through it in an interview.
