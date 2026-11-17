---
order: 8
title: "Grocery\nList Bot"
category: "AUTOMATION"
summary: "Recipes live in Notion; a Telegram bot aggregates the ingredients of the meals you pick into a single shopping list. Grocery planning, automated."
stack: ["TypeScript", "Notion API", "Telegram Bot API"]
links:
  - label: "Read the post"
    href: "https://dev.to/alvarofalcon/automating-grocery-lists-with-notion-and-telegram-1h35"
variant: "compact"
---

## The problem

Turning the week's meals into a shopping list meant copying ingredients from several recipes by
hand.

## What I built

A small automation that connects the two tools I already used every day:

- Recipes and their ingredients live in a **Notion** database.
- A **Telegram bot** lets me pick the meals for the week.
- The bot pulls the ingredients of those meals from Notion and sends back a single shopping list.

I wrote up how it works in a post on dev.to.
