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

### November 26, 2026 — Adding the borrowing request form
- **Goal** — I wanted students to be able to click Request kit beside the item they wanted to borrow.
- **AI prompt (paraphrased)** — I asked GitHub Copilot to help me add a Request kit button and a form for the borrowing group, pickup time, and purpose.
- **What worked** — I tried the form on my Mac. I picked Music, saw the two results, and sent a test request for the acoustic guitar. it then showed up under requests.
- **Related commits** — `add borrowing request form` and `Implement equipment request feature in app.js`.
### November 26, 2026 — Building the Pilot/Expanded network demo

- **Goal** — I wanted to show how students would have more gear to choose from if more campus groups joined.
- **AI prompt (paraphrased)** — I asked ChatGPT where to put the code for the Pilot/Expanded dropdown in `index.html` and how to connect it to the equipment filter in `app.js`.
- **What worked** — Pilot had 2 listings and Expanded had 8. With Music selected, switching to Expanded made the acoustic guitar and digital keyboard appear.
- **What broke and how I fixed it** — When I pasted the Javascript for the Pilot expanded dropdown into index.html by mistake I meant to put it in app.js but I wasn't paying attention and thankfully I caught onto it before I clicked committed changes so it didn't mess me up to bad. So I canceled that edit and put the code in app.js .
- **Related commits** — `Add network size selection to index.html` and `Enhance showEquipment to filter by network size`.

  ### November 27, 2026 — Mobile testing

I tested CampusKit in Safari on my phone. I selected Music under Browse gear. In Pilot mode, there were no matching items. When I switched to Expanded, the acoustic guitar and digital keyboard appeared. I submitted a demo request for the acoustic guitar with “Music Rehearsal” as the purpose. The site displayed “Demo request added,” and my request appeared under Requests.
## Things that broke

| What went wrong | How I fixed it |
| --- | --- |
| I put the stylesheet link inside the `<title>` tag. | I moved it out of `<title>` and kept it inside `<head>` so the page could load the CSS. |
| I pasted the Pilot/Expanded JavaScript into `index.html` by mistake. | I caught it before I clicked on the commit changes button, so I cancelled the edit and put the code in app.js. When I tested it on my phone switching to expanded made the guitar and key board show up

## Version history

| Version | What changed | Why I changed it | Hard cost |
| --- | --- | --- | --- |
| 1 | Created the first CampusKit page and stylesheet. | I needed a basic page to show what CampusKit does. | $0 |
| 2 | Added the equipment category filter. | I wanted students to find the type of gear they needed faster. | $0 |
| 3 | Added the Request kit button and borrowing form. | I wanted students to be able to request an item directly from its listing. | $0 |
| 4 | Added the Pilot/Expanded dropdown. | I wanted to show how students get more gear choices when more campus groups join. | $0 |
| 5 | Updated the colors and button styles. | I wanted the site to be easier to read and use on a phone. | $0 |

## Reflection

When I started CampusKit, I wanted to make it more easy for students to borrow stuff close from campus. I thought this would help people save lots of money instead of just buying all new equipment that you may not need for that long. I started with just a normal page and a stylesheet, then I added the equipment category filter and the borrowing request form. The filter made it way easier to find the right types of gear. I tested on my Mac book by choosing Music and saw two results. I then used the request kit button for the acoustic guitar and checked that my demo request showed up under requests. That gave me a way to see weather someone could go from hiding an item to actually requesting it.

One part I needed help figuring out where the code went. I asked ChatGPT where to put the pilot/Expanded dropdown and how to connect it to the equipment filter. I accidentally pasted it into the wrong section like I said before into the index.html instead of the app.js but thankfully I caught it. I then cancelled edit and changed it to the right file. I also had to fix the stylesheet link earlier because I put it inside the <title> tag. This just showed me to make sure I double checked everything. I put some stuff that I was going to put in here in a word before so I could check it over and make sure it looks right then put it in here and see if it works.

Testing on my phone swell as the Mac helped me understand what the network demo was showing. I selected music while I was stile on Pilot mode and saw that there was no matching items. When I switched to expanded there was much more options and and both my options of Acoustic guitar and digital keyboard showed up. That gave me a more specific example of why more campus groups joining could make this more successful. The students would have more choices and better options.

If I kept working on Campuskit, I would ask another student to try finding and requesting an item without me showing them step by step what to do and where to click. I knew where everything was so I'd want to see someone using it for the first time what they would find confusing. I would also want to figure out how a campus group would confirm that an item is available and then arrange the pickup.
