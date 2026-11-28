---
layout: ../../components/GuidePage.astro
lang: en
title: "From a mobile website to an app: PWA, WebView or a separate app?"
description: "Compare three ways to turn a booking website into an app. Check who controls the site, what the booking API permits and what customers need on a phone."
---

A booking business has a mobile website. Its owner asks for “the same thing in the app stores”. Before quoting, ask them to finish this sentence: *A returning customer opens the app to…* Finding an icon, showing a reservation at the door and changing a booking on a train are three different jobs.

| What the customer needs | What to estimate first |
| --- | --- |
| Open the existing booking flow from the home screen | An installable web app (PWA). Confirm you can change the site and test installation on the devices customers use. |
| Use the existing pages inside a store app with a useful mobile feature | A WebView for those pages plus the mobile feature. Test the handoff between the two, including sign-in and the back button. |
| See, change or cancel a booking through a purpose-built mobile interface | A separate app connected to the booking system’s API. Check that the API supports each action before pricing the screens. |

These choices can coexist. A store app might show booking history through an API and still open the venue’s existing help pages in a WebView.

## When an installable website is enough

Try the whole trip with a customer: open the booking link, add it to the home screen, close it and return tomorrow. Can they find their reservation without searching their email or signing in again? If so, that may already solve the problem. Installation depends on the browser and platform. Offline access is a separate feature to design and test. [MDN’s guide to installable web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)

## What can make a WebView expensive?

Suppose a venue buys its booking website from a software vendor. The venue may control the logo and timetable while the vendor controls the sign-in, payment redirect and confirmation page. Price a short test on iOS and Android: start a booking, switch to the payment provider, come back, and open the confirmation from an email. Write down which fixes need the vendor. A change outside the app can otherwise hold up the release.

For store distribution, describe why a customer would install the app. Apple reviews minimum functionality under guideline 4.2. Google Play also has a specific restriction on apps whose primary purpose is showing a website in a WebView without its owner’s permission. These are separate checks. Getting permission from the site owner resolves only the permission question. [Apple App Review Guidelines §4.2](https://developer.apple.com/app-store/review/guidelines/#minimum-functionality) · [Google Play spam policy](https://support.google.com/googleplay/android-developer/answer/9899034?hl=en)

## What to prove before quoting an API-based app

Ask the booking provider for documentation and a test environment. Pick the hardest action in the first release. For a reschedule, can the integration identify the customer, retrieve their booking, find a free slot, change it and return the updated confirmation? What happens if someone else takes the last slot first? A public calendar proves that you can display availability. Only a successful change in the booking system proves that you can reschedule.

The same distinction comes up in education. In a DartWay agency project, a learner bought a course on an external platform and opened lessons in the app. A refund had to remove access as well. Both events were part of the mobile scope even though neither appeared in the screen mockup. [Course app case study](/work/nda-courses/)

**What to send for an estimate:** the current mobile URL, one customer journey, the devices and stores you need, and who controls the site and API. Name the one outcome you need to test on a real phone. [One-page app brief](/guides/fixed-price-app-brief/)
