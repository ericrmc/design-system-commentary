---
session: 2
title: Self-Validation
subtitle: "The methodology builds the first tool it will use on itself."
date: 2026-04-17
summary: Five perspectives design an automated validator. The system starts being able to check its own coherence.
sources:
  - label: "Session 002 close note"
    path: "provenance/002-self-validation/03-close.md"
  - label: "Decisions D-010 through D-014"
    path: "provenance/002-self-validation/02-decisions.md"
  - label: "validate.sh — the validator the session built"
    path: "tools/validate.sh"
  - label: "Validation-approach specification (latest version)"
    path: "specifications/validation-approach.md"
---

A methodology that cannot tell whether it is working is a methodology in denial. Session 002 knew this, and so its work was to build the first checking mechanism — an automated validator that could inspect the workspace and flag contradictions, missing provenance, or specifications drifting out of sync with reality.

## From manual to automated

Before the session, validation meant the session author reading everything and forming a judgment. That works once; it does not scale. So five perspectives — fewer than Session 001's seven, because the problem was narrower — were convened to design something better.

What they produced is deeply prosaic and deeply important: `tools/validate.sh`. A shell script. The methodology's first piece of executable code. It runs at the start of every session, reads the workspace, and emits a series of passes and failures. Forty-five checks on its first run, all passing.

The question of *what to check* was more interesting than the question of how to check it. The session decided on a two-tier model. **Tier 1** is automated — things a script can verify mechanically: every session has a close file, every specification has the required frontmatter, every provenance directory is shaped correctly. **Tier 2** is guided questions the human (or agent) running the session reads and answers with judgment: *did the Read activity genuinely use prior provenance, or was it skimmed?*

The separation is the interesting part. The system is being careful not to pretend that all validation can be mechanised. Some of what matters — whether a deliberation was performative, whether a Skeptic's objections were genuinely wrestled with — cannot be automated. Naming that honestly, rather than faking a check for it, is the Minimalist's influence showing up a session late.

<div class="pull">Some of what matters cannot be automated. Naming that honestly is itself a methodological choice.</div>

## The thing the system did not do

The obvious next move, once you have a validator, is to also persist its output — save every run as part of each session's record. Session 002 opened this as a question (OI-008: *Persisting validation reports*) and then deliberately did not answer it. The validator's output is still ephemeral: run, read, consumed, discarded.

The reasoning was that persistence is a commitment, and the value of persistence is not yet known. If validation history proves useful for tracking methodology health over time, a future session will design the persistence mechanism properly. If it does not, the idea will quietly not be acted on, and the system will be better for not having built infrastructure it did not need.

This is a very different instinct from most software projects, where the default is *save everything, decide later*. Here the default is *save only what is proven to be worth saving*. The provenance trail is the exception; it is the one place where the commitment to save has been made explicit and justified.

## What changed

The Session 001 specifications had described a methodology that would, eventually, have some form of validation. Session 002 made that concrete. The `workspace-structure` specification was amended to acknowledge the new `tools/` directory — and, crucially, this was classified as a *minor* revision rather than a substantive one, because the original specification had anticipated exactly this kind of extension.

The distinction between minor and substantive revisions has since become one of the methodology's most carefully tracked questions. It is **OI-002**, and by Session 007 it had accumulated six data points and a stable five-point heuristic. Session 002 was the first data point.

<div class="callout">
  <h4>What to notice</h4>

  The validator runs first, at the start of every subsequent session, before any
  new work is done. This means each session begins with the methodology *checking
  itself* before it extends itself. That ordering is not ceremony; it is the
  methodology refusing to build on a foundation it has not confirmed is still standing.
</div>

## A question worth sitting with

*If a methodology's first executable artefact is the tool it uses to check itself, what does that reveal about the designers' worst fear? Perhaps: that the methodology will drift, unobserved, into incoherence — and that the tool is a commitment to notice.*
