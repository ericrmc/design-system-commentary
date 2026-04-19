---
session: 5
title: Schema Enforcement and First Cross-Model Deliberation
subtitle: "A non-Claude model enters the room."
date: 2026-04-18
summary: For the first time, an OpenAI model participates in a deliberation. The record shows who influenced what, and how.
sources:
  - label: "Session 005 close note"
    path: "provenance/005-schema-enforcement/03-close.md"
  - label: "Decisions D-028 through D-036"
    path: "provenance/005-schema-enforcement/02-decisions.md"
  - label: "Outsider perspective — the first non-Claude raw output"
    path: "provenance/005-schema-enforcement/01d-perspective-outsider.md"
  - label: "validate.sh — extended with cross-model honesty checks"
    path: "tools/validate.sh"
events:
  - spec-revised
  - oi-closed
  - multi-agent
  - cross-model
---

Session 005 is the one where the specification written the session before was actually exercised. OpenAI GPT-5, accessed through the Codex CLI, joined three Claude subagents as the fourth voice in a deliberation. The system calls this the *Outsider* perspective. It is not a rhetorical flourish; it is the technical designation for a participant whose training provenance is genuinely different from the others in the room.

This matters more than it might sound. Until Session 005, every word the methodology had written about itself had come from a Claude-family model. Every criticism, every Skeptic voice, every adversarial argument — all from instances of the same underlying mind. Session 005 was the first time a different mind was let in.

## How the Outsider got into the room

The Outsider participant did not arrive of its own accord. Session 005 began by searching the host machine for API keys it could use, and found none configured. That search was itself the signal. The deliberation that followed was not the system's but the operator's: he sat with the question for a while, taking the system's reach for a tool as evidence enough of what was needed, before deciding what to provide.

The first provision was Google's Gemini CLI, available through an existing subscription. The wiring worked; the deliberation could have proceeded. But a quick check of benchmarks put Gemini roughly at Sonnet-4.5-class: a competent model from the midrange of the previous year. Good, but not conspicuously *other* in the way the methodology was asking for. The Outsider's whole point was difference itself.

A ChatGPT Pro subscription followed, giving access to the Codex CLI and GPT-5.4 with extra thinking and reasoning. The methodology's `CLAUDE.md` configuration was updated so the system would reach for Codex ahead of hunting environment API keys. Session 005 was then restarted.

That detour is invisible in the provenance trail, but it matters. The methodology could specify what it needed; providing it was the operator's problem to solve, and his first attempt turned out not to meet the spec.

## What the Outsider added

The deliberation's substantive question was about validator schema enforcement — when to require strict machine-readable structure in deliberation records, and when to tolerate looseness. Three Claude perspectives worked in parallel. The Outsider worked separately, reading the same brief.

Three of the Outsider's contributions shaped the final decisions in ways that a Claude-only deliberation almost certainly would not have:

1. The Outsider proposed a specific **sequencing rule** for how schema checks should be applied during a session — start strict, relax if evidence warrants. This did not appear in any of the Claude perspectives.
2. The Outsider's framing of one question as essentially a matter of **session-number-gating** (apply this rule only after session N) shaped the granularity of a decision that the Claude perspectives had been inclined to apply universally.
3. The Outsider surfaced a "paper-human gaming" concern — the risk that a schema designed to check non-Claude participation might itself be gamed by falsifying the manifest. This was outside the Claude perspectives' register entirely.

All three are preserved in the decisions' rationale.

<div class="pull">The Outsider was the only voice in the room that had not been trained to think like the others. That difference registered in concrete ways.</div>

## Honest evidence that the Outsider was the Outsider

One of the more careful decisions in this session was the one the system made about *how it would know* the Outsider really was non-Claude. A Claude subagent with an edited manifest could lie, and the lie would be undetectable if the methodology only checked self-reports.

The system chose a weaker but honest standard: **consistency-of-self-report, not truthfulness-of-self-report.** The validator checks that every claim about the participant matches every other claim about the participant in the record. This does not prove the participant was really GPT-5. But it makes the claim auditable, and it keeps the system from pretending to a stronger guarantee than it can actually provide.

Alongside this, Session 005 preserved the Codex CLI's banner verbatim in the raw output — including its identification of the model, the provider, the OpenAI session id, and the reasoning effort setting. A Claude subagent would not emit this banner. Future auditors can check it exists. The evidence is circumstantial but legible.

## The first piece of outside influence

Session 005 closed OI-010 — the open issue about whether the cross-model mechanism had actually been used — and began the countdown on OI-004. The system had said, in Session 004, that narrowing the Claude-monoculture concern would require sustained practice across at least three required-trigger deliberations. Session 005 was the first such deliberation.

One down. Two to go.

<div class="callout">
  <h4>What to notice</h4>

  The Outsider's influence is recorded with specific citations — this decision
  was shaped by this Outsider input, in this way. Compare that to how most
  human-AI collaborations are recorded: "AI-assisted" as a blanket label, with
  no way to trace which thought came from where. The methodology is trying to
  make the lineage of every idea legible.
</div>

## A question the session raised, and did not resolve

*If a single non-Claude model can offer genuinely different framings on its first use, what happens when the same non-Claude model is used repeatedly? Does the system start implicitly converging on its output the way it converges on Claude's? Is the solution to rotate models, to include multiple non-Claude participants, or something else? The mechanism exists, but the question of how to keep it producing real diversity over time is still open.*
