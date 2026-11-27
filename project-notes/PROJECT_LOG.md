# CampusKit Project Log

- Name: Jaxson Prior
- Startup: CampusKit
- Live site: https://jaxsonp-web.github.io/CampusKit/

## Work sessions
### November 26, 2026 — Initial CampusKit setup

- **Goal:** Build the first version of CampusKit so students could browse equipment shared by campus groups.
- **AI prompt:** I used AI to help set up the initial HTML and CSS for CampusKit. I don’t have the original prompt.
- **What worked:** I created the initial page and stylesheet for CampusKit.
- **What broke and how I fixed it:** I originally put the stylesheet link inside the `<title>` tag. I moved it outside the title, keeping it in the `<head>`, so the page could load the CSS.
- **Related commits:** `Create index.html for CampusKit application` and `Add stylesheet link to index.html`.

### November 26, 2026 — Building the Pilot/Expanded network demo

- **Goal** — Show how students get more equipment choices as more campus groups join CampusKit.
- **AI prompt (paraphrased)** — I asked ChatGPT where to put the code for the Pilot/Expanded dropdown in `index.html` and how to connect it to the equipment filter in `app.js`.
- **What worked** — Pilot had 2 listings and Expanded had 8. With Music selected, switching to Expanded made the acoustic guitar and digital keyboard appear.
- **What broke and how I fixed it** — When I pasted the Javascript for the Pilot expanded dropdown into index.html by mistake I meant to put it in app.js but I wasn't paying attention and thankfully I caught onto it before I clicked committed changes so it didn't mess me up to bad. So I canceled that edit and put the code in app.js .
- **Related commits** — `Add network size selection to index.html` and `Enhance showEquipment to filter by network size`.

  ### November 27, 2026 — Mobile testing

I tested CampusKit in Safari on my phone. I selected Music under Browse gear. In Pilot mode, there were no matching items. When I switched to Expanded, the acoustic guitar and digital keyboard appeared. I submitted a demo request for the acoustic guitar with “Music Rehearsal” as the purpose. The site displayed “Demo request added,” and my request appeared under Requests.
