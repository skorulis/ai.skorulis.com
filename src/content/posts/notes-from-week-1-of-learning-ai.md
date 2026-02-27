---
title: "Notes from Week 1 of Learning AI"
description: "A rough log of what I actually did in my first focused week of learning AI."
pubDate: 2026-03-05
tags:
  - weekly-notes
  - foundations
  - practice
draft: false
---

Week 1 was mostly about setting up my environment, refreshing some math, and getting a feel for the current tooling.

These notes are intentionally rough: they’re more for tracking momentum than for polish.

## What I focused on

### 1. Environment and tooling

- Set up this blog using **Astro** + **GitHub Pages** so I have a home for my notes.
- Cleaned up my Python environment and confirmed I can:
  - create and activate virtual environments,
  - install packages with `pip`,
  - run Jupyter/VS Code notebooks without path chaos.

I also sanity-checked a few GPU options and noted what’s realistically available to me for experiments.

### 2. Math and fundamentals refresh

I revisited:

- basic probability (random variables, expectation, variance),
- key distributions (Bernoulli, Gaussian),
- and how **log-likelihood** shows up in simple models.

The main goal wasn’t depth, but to make sure symbols in papers don’t feel hostile.

### 3. Simple hands-on exercises

- Implemented a tiny logistic regression from scratch using only NumPy, just to:
  - compute logits and probabilities,
  - write a loss function,
  - take gradients and run gradient descent.
- Compared it with scikit-learn’s implementation to verify I wasn’t totally off.

Even though this is “toy level”, it already makes every mention of cross-entropy and gradients feel more grounded.

## What surprised me

- How much **environment friction** can destroy momentum. Having everything one command away feels underrated.
- How quickly concepts click again once I start *writing code* instead of just reading about them.

## Plan for Week 2

Roughly:

- Dive a bit deeper into **optimization** (learning rates, momentum, and common failure modes).
- Start playing with a small neural network (probably in PyTorch) and focus on understanding shapes and debugging.
- Write at least one more post here, likely a more detailed walkthrough of the logistic regression exercise.

If you’re also at a “Week 1” stage, I’d highly recommend keeping a rough log like this. It makes progress a lot more visible than it feels in the moment.

