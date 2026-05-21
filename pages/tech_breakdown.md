---
title: Technical Breakdown
layout: default
nav_exclude: true
nav_order: 5
---

# Technical Breakdown

{: .highlight-title}
> Hello World!
>
> This page is more for if you're a dev and interested in the inner workings of the app. 🪽

## Base Language

The app is built in [Flutter], which is a cross-platform framework allowing developers to build apps for iOS, Android, Browser and Desktop all in one codebase. 

I'd say its pretty magic since it handles UI and storage translations across platforms for you.

> I had a lot of fun using different Flutter widgets to achieve the UX I wanted such as combining `Dismissable` and `ReorderableListView`!

## Deployment

Current app rollout is done via _Progressive Web App (PWA)_ rather than traditional App Stores because:
1. It's cumbersome to register the app with multiple stores and adhere to their rules/guidelines.
2. It's not free - Apple Developer Program (needed to publish on App Store) costs <u>$99 USD</u> a year. 

## UI and Interactions via Screens

General functionality is split into three screens, mainly:
- **Moves** screen: For viewing, editing and storing `Move`-related data.
- **Sandbox** screen: The area used to mess around with `Moves`, making `Lines` etc.
- **Lines** screen: For viewing saved `Lines` (ordered list of `Moves`).

For more in-depth info on features, check out the subpages within the [User Guide](/pages/user-guide).

## Data Storage via Hive Objects

### Moves

A `Move` is basically an Object that has several fields such as:
- Name
- Direction
- Category
- Competency*
- Area of Concern*
- Control*

The last three of which are user editable and contribute to the sorting/filtering system, allowing them to see the spread of values across the movement vocabulary.

<details markdown="block">
<summary>The following movements are in the app by default:</summary>
```
Vaults
————
Step (L)
Step (R)
Speed (L)
Speed (R)
Kong (R)
Kong (L)
Dive Kong
Double Kong 
Dash (L)
Dash (R) 
Lazy (L)
Lazy (R)
Thief (L)
Thief (R)
Reverse (L)
Reverse (R)
Turn (L)
Turn (R)
Gate (L)
Gate (R)

Jumps:
—————-
Strides
Standing Pre
Upwards Pre
Downwards Pre
Running Pre (L)
Running Pre (R)
Plyo
Crane (L)
Crane (R)

Dismounts and Landings:
——————-
Kong down
Step down (L)
Step down (R)
Lazy down (L)
Lazy down (R)
Reverse down (L)
Reverse down (R)
Safety tap 
Ground Kong
Gallop (L)
Gallop (R) 
Roll (L)
Roll (R)
Dive roll 

Wall movement
————————-
Catleap (L)
Catleap (R)
Wall run (L)
Wall run (R)
Climb up (L)
Climb up (R)
Popup (L)
Popup (R)
Top-out (L)
Top-out (R)
Tic-tac (L)
Tic-tac (R)
180 (L)
180 (R)

Bar movement
————————
Lache
Underbar
Reverse Underbar
Bar Kip
Bar Muscle Up 
```
</details>

### Lines

A `Line` is basically a list of Move objects, with self-explanatory fields such as:
- Name
- Move List
- Pinned

### Sandbox

The Sandbox, although appearing just like any other `Line` object, does not have any associated metadata, and receives its own Hive Box for storing objects. It's purposely made this way since there are many operations that change the Sandbox frequently such as clearing, appending, overwriting, shuffling, reordering etc.


[Flutter]: https://flutter.dev/

## Backup and Sharing

**Backup** is done via local file backup:
- Cloud backup is not an option unfortunately since for Apple, it requires a registered AppID (implying Apple Developer Program)
- I may explore doing Firebase backup down the line, but its not a priority at the moment.

**Offline Sharing** of Sandbox contents between users is possible via:
- Binary to Text serialisation, which users can then use to share the string output to each other.
- QR code generation or scanning, which does the same but more UX-friendly.