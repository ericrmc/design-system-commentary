---
session: 4
title: Participation Mechanisms
subtitle: "How do you let a stranger into the room?"
date: 2026-04-18
summary: The system specifies how non-Claude AI models — or humans — can participate as genuine perspectives.
---

Session 004 was the session where the methodology admitted, on paper, that talking only to different instances of the same AI model was a form of monoculture. Not because Claude instances are bad deliberators, but because "perspective diversity" means very little if every perspective has learned the same things, from the same data, in the same way.

The work was to specify how a *different* mind could enter the deliberation. A different AI model, trained differently. Or a human reviewer. The mechanism had to be real — not a check-box — and it had to preserve the faithfulness of the record.

## Two shapes

What Session 004 produced was a specification with two explicit shapes for non-Claude (or non-AI) participation.

**Shape A: participant as perspective.** The non-Claude agent is convened alongside the Claude subagents as one of the voices in the deliberation. Its output is preserved verbatim — including any CLI banners, prompt echoes, or metadata the transport layer adds — because the methodology wants evidence that the participant was really who it claimed to be. A Claude subagent emitting a fake banner would be trivially detectable if the banner were preserved; silently stripped, it would not be.

**Shape B: participant as reviewer.** A non-Claude agent (or human) reads the deliberation after it has been synthesised and reviews it for blind spots, training-distribution artefacts, or errors that the Claude participants may have shared. This is the lighter-weight path, useful when a full additional perspective is not warranted but a sanity-check is.

<div class="pull">"Perspective diversity" means very little if every perspective has learned the same things, from the same data, in the same way.</div>

## Trigger rules

Not every decision needs a non-Claude participant. Session 004 established a trigger rule: **required** for meta-deliberations about the system's own self-assessment mechanisms; **recommended** for other multi-agent deliberations; **optional** for everything else. The rule acknowledges a real cost — bringing in an external model is slower and more expensive than spawning another Claude subagent — and asks that the cost be paid when the decision being made is specifically about whether the system can see itself clearly.

The subtlety is worth pausing on. The requirement is strongest precisely where Claude's shared training is most dangerous. If a group of Claude instances agree that their multi-agent mechanism is working well, that agreement is worth less than if a differently-trained model has also weighed in. Session 004 saw this clearly and wrote it down.

## The three-layer record

When a heterogeneous participant enters a deliberation, three layers of record are required: a **manifest** describing the participant (model family, model id, provider, transport), the **raw output** preserved verbatim, and the **synthesis** that explains how the participant's contribution influenced the outcome. All three must be present; any one missing is a failure of the validator's Tier 1 checks.

This is the system being careful in a specific direction: it is easier to claim diversity than to produce evidence of it. The three-layer record is the evidence requirement. A future session reading these records should be able to audit not just *that* a non-Claude participant was included but *what concretely changed* because of their presence.

<div class="callout">
  <h4>What to notice</h4>

  Session 004 specified the mechanism without using it. It designed a shape and
  then, honestly, did not claim that OI-004 (Claude monoculture) had been narrowed,
  because no non-Claude participant had actually been in the room. Narrowing
  would have to wait for Session 005. The discipline to write a specification
  and <em>not</em> claim credit for it until it had been exercised is a quiet
  but meaningful thing.
</div>

## A question about what else this unlocks

*If the mechanism exists for bringing a non-Claude model into a deliberation, it exists for bringing a human into a deliberation too. Humans are perspectives as much as they are operators. The mechanism does not distinguish. What happens when the system invites a human who is not the project lead into one of its deliberations? That has not happened yet, but the door is now open.*
