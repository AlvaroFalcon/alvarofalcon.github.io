---
order: 3
title: "Hina"
category: "WEB · NEXT.JS"
summary: "A minimalist web platform to learn Hiragana and Katakana through sequential modules and adaptive quizzes that focus on the characters you miss most."
stack:
  ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Prisma"]
wip: true
links:
  - label: "GitHub"
    href: "https://github.com/AlvaroFalcon/hina"
gallery:
  - src: "../../assets/projects/hina/home.png"
    alt: "Hina landing page with a large hiragana character and the headline 'learn the syllabaries from scratch'"
    caption: "Landing page (Spanish UI)."
  - src: "../../assets/projects/hina/features.png"
    alt: "Hina feature section: sequential modules, adaptive quizzes and clear progress tracking"
    caption: "Sequential modules, adaptive quizzes and progress tracking."
  - src: "../../assets/projects/hina/home-dark.png"
    alt: "Hina landing page in dark mode"
    caption: "Dark mode."
  - src: "../../assets/projects/hina/login.png"
    alt: "Hina sign-in form with email, password and Google sign-in"
    caption: "Sign-in with email or Google, backed by Supabase Auth."
  - src: "../../assets/projects/hina/home-mobile.png"
    alt: "Hina landing page on a phone"
    caption: "Mobile layout."
    portrait: true
screentone: true
variant: "compact"
---

## The problem

Most kana apps are noisy: streaks, ads and gamification that get in the way of actually learning.
I wanted a calm, focused tool that teaches the two Japanese syllabaries in a sensible order and
spends your time on the characters you actually get wrong.

## What I built

- **Sequential modules:** characters are taught in a logical order and each module unlocks the next
  one when you master it.
- **Adaptive quizzes:** the characters you miss most come back more often until you get them right.
- **Progress tracking** per module, so you always know what is done and what needs work.
- Email/password and Google sign-in, light and dark themes, and a responsive layout.

## Engineering notes

- Next.js 16 App Router with React 19 and TypeScript, styled with Tailwind CSS and shadcn/ui
  components in a bold, print-inspired style.
- Supabase for authentication and data, with Prisma for the schema; routes are protected at the
  edge so unauthenticated users never reach the learning pages.
- Feature-based folder structure, the same architecture I have introduced in teams.

Work in progress: a public deployment is coming.
