---
layout: ../../components/GuidePage.astro
lang: en
title: "How to brief an app studio for a fixed-price estimate"
description: "A copyable brief and a worked example for one mobile feature. Define what the user can do, what happens when it fails and how your team will accept delivery."
---

Two studios can quote the same five screens and price different products. One includes sign-in with test data. The other connects to the live booking system, handles expired sessions and takes the build through store review. To compare prices, give both studios one user journey and the same finish line.

## A brief you can copy

- **User and goal.** Who opens the app, and what can they finish by the end of this stage?
- **Starting material.** Link the design or current site. Mark which screens the designer has approved and who handles missing states.
- **Data and access.** Name the system that owns the data and who can arrange a test account or sample records. Send documentation links here and share credentials separately.
- **One difficult case.** What should the user see when a payment fails, a session expires or a slot disappears?
- **Deliverable and acceptance.** Name the devices, the build your team will receive, the person accepting it and the steps they will test.
- **Later work.** List the features that can wait and any vendor fee, store submission or ongoing support you want priced separately.

## Worked example: rescheduling a booking

Suppose the client wants existing members to move a class booking. A usable first brief could fit in one message:

> A signed-in member can move one upcoming booking to another available slot on iOS and Android. Our designer will supply the booking list, slot picker and confirmation. Our booking provider will supply a test account and the API for changing a reservation. If the chosen slot fills up, the member sees fresh availability and keeps the original booking. Our product manager will accept a test build by moving a booking on a phone and verifying the change in the venue’s admin screen. Payment changes, waitlists and store submission can wait.

One detail changes the price materially: can the provider **move** a reservation in one operation, or does the integration have to cancel and recreate it? In the second case, ask what happens if creating the new booking fails after cancellation. If the provider cannot answer yet, ask the studio to price a test of that operation separately. The client can then decide whether to fund the rest.

## How to compare the estimates you get back

| Ask each studio to identify | What a usable answer contains |
| --- | --- |
| The result you can test | A build on named devices, one end-to-end journey, and a way to verify that the source system changed. |
| Dependencies behind the price | The design version, supported API operation, test access and who supplies each item. |
| What happens when scope changes | An example of an included correction and an example that would need a new estimate. |
| What happens after acceptance | Who owns the repo and accounts, who submits to stores, and which support costs continue. |

For a product involving an external purchase, test the reversal too. In DartWay’s course app, access opens after purchase and closes after a refund. A quote that covers only the successful purchase leaves a real customer-support problem for release day. [See the integration in the case study](/work/nda-courses/)

If your client already has a working mobile site, decide which parts to keep before asking studios to price a rebuild. [PWA, WebView or a separate app?](/guides/website-to-mobile-app/) · [Request an agency estimate](/agencies/#contact)
