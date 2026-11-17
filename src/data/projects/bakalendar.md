---
order: 4
title: "BaKalendar"
category: "ANDROID · KOTLIN"
summary: "A native Android app to follow the current anime season: what is airing, a countdown to each next episode in your own timezone, and daily alerts for your favourites."
stack: ["Kotlin", "MVVM", "Hilt", "Room", "Retrofit", "WorkManager"]
links:
  - label: "Google Play"
    href: "https://play.google.com/store/apps/details?id=com.frostfel.animelist"
  - label: "GitHub"
    href: "https://github.com/AlvaroFalcon/bakalendar_android"
gallery:
  - src: "../../assets/projects/bakalendar/store-1.jpg"
    alt: "BaKalendar store screenshot: anime detail with detailed information"
    portrait: true
  - src: "../../assets/projects/bakalendar/store-2.jpg"
    alt: "BaKalendar store screenshot: bookmark favourite titles and get notifications"
    portrait: true
  - src: "../../assets/projects/bakalendar/store-3.jpg"
    alt: "BaKalendar store screenshot: app logo and tagline"
    portrait: true
  - src: "../../assets/projects/bakalendar/store-4.jpg"
    alt: "BaKalendar store screenshot: season list with countdowns to the next episode"
    portrait: true
variant: "compact"
---

## The problem

Anime airs on a Japanese schedule, so knowing _when_ the next episode of a show is out in your own
timezone, and which of your favourites air today, takes more effort than it should.

## What I built

A native Android app, published on Google Play:

- **Season list** with every anime airing this season and a countdown to its next episode, as big
  cards or a compact list, with search, genre filters and sorting.
- **Detail screen** with a collapsing cover tinted from the artwork, score and rank, next episode at
  your local time, trailer, related anime, recommendations and an **Episodes** tab with upcoming
  dates and where to stream.
- **Favourites**, a **weekly calendar** at your local time and a **daily reminder** notification
  with the favourites airing in the next 24 hours.
- **Works offline:** the whole season is cached and refreshed every 12 hours or on pull-to-refresh.

## Engineering notes

- Kotlin with coroutines and Flow, MVVM with AndroidX ViewModel and Hilt for dependency injection.
- Room as the single source of truth, refreshed from the API (Retrofit + OkHttp) by a dedicated
  refresher; WorkManager for the daily notification.
- Tests with JUnit, Robolectric (UI, Room and migrations) and MockWebServer.
