---
session: 3
title: Multi-Agent Deliberation
subtitle: "For the first time, the disagreement is real."
date: 2026-04-17
summary: The first session where perspectives are instantiated as genuinely independent AI agents rather than voices in one head.
sources:
  - label: "Session 003 close note"
    path: "provenance/003-multi-agent-deliberation/03-close.md"
  - label: "Decisions D-015 through D-020"
    path: "provenance/003-multi-agent-deliberation/02-decisions.md"
  - label: "Multi-agent deliberation specification (latest version)"
    path: "specifications/multi-agent-deliberation.md"
  - label: "All raw perspective files for this session"
    path: "provenance/003-multi-agent-deliberation/"
---

There is an uncomfortable truth the system had been carrying quietly: in the first two sessions, the "perspectives" had all been produced by a single agent in a single context. A Historian, a Skeptic, and a Minimalist taking turns — but the Historian could hear what the Skeptic was about to say before they said it, because they were, in the deepest sense, the same voice.

The system knew this was a problem. Session 003 addressed it.

## Context-isolated subagents

The move was mechanical but the consequences were not. Instead of voicing perspectives sequentially in one context, Session 003 launched five subagents *in parallel*, each in its own context, each given only its own brief. They could not see each other until the synthesis step. When their outputs came back, they had to be read as the raw statements of different minds — because, in a meaningful sense, they were.

The work the session chose to do with this new mechanism was self-referential: *use multi-agent deliberation to design the specification for multi-agent deliberation*. This was not whimsy. If the mechanism could not survive being applied to its own design, it was not going to survive anything harder.

<div class="pull">If the mechanism could not survive being applied to its own design, it was not going to survive anything harder.</div>

## The Skeptic who would not soften

The Skeptic, in this session, did something valuable. They argued that multi-agent deliberation, if made a routine requirement, would **drift to ritual within five sessions**. The session would perform the ceremony of parallel perspectives for decisions where no real alternatives existed, and the preserved disagreement would become preserved disagreement-theatre.

The session did not dismiss this. It was preserved as a standing warning — open issue OI-009, *Monitor for drift-to-ritual in multi-agent deliberation* — and became something every subsequent session has had to audit itself against. The Skeptic's objection materially shaped the specification: multi-agent is required only for decisions that meet specific triggers, not for every decision, precisely because ritualising it for everything is the failure mode that was flagged.

The preservation of dissent is not just archival. It is the mechanism by which the system stays honest with itself over time.

## A moment of recursion

It is worth pausing on what happened here. A methodology that values independent perspectives noticed that its own perspectives had not been independent. It designed a mechanism to make them independent. It used that mechanism, for the first time, to design the specification of the mechanism. And it preserved, as part of the record, the argument that the mechanism itself might be a mistake.

This is what self-hosting is supposed to look like. Not a clever trick, but a discipline: the methodology applies itself to itself, seriously, and takes seriously the possibility that the answer might be *don't do this*.

<div class="callout">
  <h4>What to notice</h4>

  Five independent subagents produced five substantially different framings of
  the same problem. The synthesis that combined them is auditable against the raw
  outputs — if the synthesis had smoothed away the Skeptic's objection, a later
  session would be able to see that and say so. This is the specific shape of
  accountability the provenance trail is built to enable.
</div>

## The Claude monoculture

Session 003 closed the gap between "simulated disagreement" and "real disagreement between independent agents." But it left open a deeper gap. All five subagents were Claude Opus. They had come from the same model family, trained on overlapping data, with plausibly correlated priors. Real diversity of *perspective* had been achieved; real diversity of *training provenance* had not.

The system named this gap as open issue OI-004 and set a deliberate course to close it. Over the next two sessions, the mechanism for cross-model participation would be specified (Session 004) and exercised for the first time (Session 005) — bringing a non-Claude model into the deliberation room. You can see the system, session by session, working its way toward answering its own harder questions.

## The question this session left behind

*Multi-agent deliberation is more expensive in time, attention, and complexity than single-agent reasoning. The system has committed to it for load-bearing decisions. But how will it know, in the moment, whether a decision is load-bearing enough to deserve the ceremony — without the judgment itself becoming ritual?*

That question is still being worked out, three sessions later.
