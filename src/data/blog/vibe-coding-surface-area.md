---
title: "The vibe coding problem in one bug"
description: "A landscape pagination bug in Straight Facts turned into a proposed SwiftUI-to-UIKit rewrite. That escalation is exactly where human judgment still matters."
pubDatetime: 2026-05-14T00:00:00.000Z
tags:
  - ai
  - swiftui
draft: false
ogImage: "images/vibe-coding-bug-example.png"
---

I was chasing a bug in Straight Facts: scrolling pagination had broken offets in landscape orientation. Easy to replicate, but hard to follow with the way safe areas were being managed.

It also felt like a good fit for AI. I opened Cursor, described the issue, and dropped in a screenshot. The assistant tried a fix. That did not work. It tried another. Still broken. Then it landed on a diagnosis that sounded confident: the real problem was SwiftUI, and the right move was to rewrite the whole section in UIKit.

I stopped it before that rewrite finished, so I never found out whether the nuclear option would have fixed the symptom. Honestly, that is almost beside the point. The moment was a perfect illustration of what people mean when they worry about **vibe coding**.

Here is the uncomfortable bit: **a human teammate would not do this**, or at least a good one would not do it without a fight. A developer who has shipped iOS apps knows that swapping a chunk of SwiftUI for UIKit is not a "bug fix." It is a project. You pay for it twice: once while you write it, and again every time you touch that area later. You do not reach for that unless you have exhausted smaller levers, measured the tradeoff, and decided the blast radius is worth it. In the end the actual fix was only about 10 lines of code.

The take away here isn't that AI writes bad code, it's that AI doesn't have the same constraints that humans have when writing code so the output it creates won't necessarily be friendly to humans or maintainable.

If every day a human wrote code that doubled the effort to make changes to the codebase they will quickly realise that something needs to change. If an AI needs double the tokens use every day you can go a lot longer before noticing the mess. 
