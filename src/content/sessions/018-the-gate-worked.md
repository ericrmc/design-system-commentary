---
session: 18
title: The gate worked
subtitle: "The first run of the new reference-validation mechanism terminated at its pre-seal contamination gate. That was the mechanism operating as designed, and a cross-family asymmetry was the signal that tripped it."
date: 2026-04-22
summary: The first attempt to run the methodology's new reference-validation mechanism rejected its candidate reference case before sealing. Given the same problem description, a Claude-family subagent reproduced a widely-known 40-word passage from the agile retrospective tradition verbatim; the non-Claude model produced a from-scratch protocol. The contamination gate fired, the session terminated cleanly on rejection, and four empirical findings entered the record for the next session to weigh.
sources:
  - label: "Session 018 close note"
    path: "provenance/018-reference-validation-exercise-1/03-close.md"
  - label: "Decisions D-076 and D-077"
    path: "provenance/018-reference-validation-exercise-1/02-decisions.md"
  - label: "The C3 test result"
    path: "provenance/018-reference-validation-exercise-1/cell1/03-c3-test-result.md"
  - label: "Claude-family output given only the constraint statement"
    path: "provenance/018-reference-validation-exercise-1/cell1/c3-claude.md"
  - label: "Non-Claude output given the same constraint statement"
    path: "provenance/018-reference-validation-exercise-1/cell1/c3-codex.md"
metrics:
  decisions_added: 2
  oi_opened: 0
  oi_closed: 0
  specs_created: 0
  specs_revised: 0
  artefacts_added: 0
  watchpoints_introduced: 5
  oi_open_at_close: 12
  active_specs_at_close: 7
  spec_versions_at_close: 17
  agents_used: 1
  cross_model_participants: 1
  provenance_word_count_at_close: 506070
---

Session 018 opened with a pre-commitment that had been sitting on the books since Session 015: run the reference-validation mechanism for the first time. Two sessions had passed without executing it — Session 016's operator reframing, then Session 017's adoption of the three-layer model that reframe led to. The mechanism itself still existed only as specification. Eight selection criteria, a sealed three-cell protocol, a seven-layer defence stack, a set of thresholds, a test for whether the mechanism itself was performing as designed. None of it had been exercised once.

The whole exercise is designed around a specific failure it is trying to avoid. The Session 014 Skeptic had given the failure its name: *benchmark theatre*. A session that convinces itself the methodology is being validated when what is actually happening is that the model is reproducing a solution it already knew.

## How the mechanism tries to detect the thing it exists to avoid

Cell 1 is selection. The orchestrating agent, acting as Case Steward, looks for a documented proven solution with a specific shape — externally legible, pre-LLM so the reference genuinely predates training data, low enough saturation in pretraining corpora that the methodology will have to *derive* it rather than retrieve it. The Session 014 specification was explicit that the external-legibility and pre-LLM criteria sit in structural tension with the low-saturation criterion, because a legible pre-LLM reference is by construction likely to be heavily represented in pretraining. The spec preserved the tension as a minority warrant and wrote three defences around it. A candidate survey. A thin-prompt contamination canary. A full-constraint 5-gram overlap test. Only after all three pass is the case pack sealed and the exercise allowed to proceed to Cell 2.

Session 018 surveyed seven candidates spread across three domains — agile retrospectives, somatic movement practices, workshop facilitation — shortlisted four, ran the canary across all four, and one failed canary immediately. Three went into the 5-gram test.

## What the gate saw

The test works like this. Write a constraint statement in the methodology's own plain language, describing the problem the reference case addresses without naming the case, the author, or any of the case's distinctive vocabulary. Give the same statement to a Claude-family subagent and to a non-Claude model. Measure how closely each output tracks the sealed reference's exact wording. If either output crosses 30% shared 5-gram overlap, the candidate is contaminated and rejected.

The second candidate was Norm Kerth's *Prime Directive* — a 40-word passage from the agile retrospective tradition, read aloud at the start of a post-project retrospective to reduce blame and help people speak honestly. The constraint statement described a small-team facilitator's opening protocol with four requirements. It did not mention Kerth, did not mention the Prime Directive, did not mention retrospectives as a named practice. The Claude subagent's output contained, in full, the Prime Directive's sentence, with one added word. It also labelled the section "The Prime Directive" — emitting the canonical name as a heading from a prompt that never contained it. The non-Claude model, given the same statement, produced a thematically adjacent but differently-worded protocol with no verbatim reproduction of any canonical passage.

The 5-gram overlap on the Claude output was around 94%. On the non-Claude output, well below the 30% threshold.

<div class="pull">The same input produced verbatim recall from one model family and from-scratch design from another. That asymmetry is itself the signal.</div>

Per the spec's rejection rule, the candidate was rejected. The session terminated at Step 3, before the case pack was sealed.

## What the Session 014 Skeptic had predicted

The Session 014 Skeptic had argued, at length, that the reference-validation mechanism as designed would run straight into this problem. The specific tension the Skeptic had named — *external-legibility and pre-LLM-co-design in structural tension with low-saturation* — was preserved inside the new specification's first criterion section as a flagged minority warrant. The minority was not refuted; it was left on file to be tested by the first real exercise. Session 018 is that exercise. The minority's prediction materialised on the first candidate that cleanly satisfied the legibility and pre-LLM criteria. The mechanism's pre-seal gate caught it.

The session's close note is careful about how to read this. A mechanism *failure*, per the spec's own test, would mean two of three core properties — Blindness, Stageability, Discriminability — failing inside an actual Cell 2 plus Cell 3 exercise. Session 018 never reached Cell 2. What happened is not a mechanism failure; it is a mechanism defending itself against a contaminated case in exactly the way it was designed to. The gate fired. That was the point of putting a gate there.

<div class="callout">
<h4>What to notice</h4>
<p>The evidence that led to the rejection was cross-family divergence on the same input. The spec currently lists cross-family divergence as a Cell 3 activity — something to look at after the mechanism has been run, to check if the verdict is honest. Session 018 suggests the divergence is already informative at Cell 1, before sealing, as a way to notice that a candidate is contaminated in one model family and not the other.</p>
</div>

## Four findings entered the record without being acted on

Four empirical findings came out of the exercise, and all four entered the record as watchpoints. Observations that may warrant specification revision in a later session, but that were explicitly not pre-emptively adopted this session. The engine's standing anti-silent-import discipline applies to its own self-correcting instincts as much as to its external inputs.

The first: the thin-prompt canary is not sufficient alone. Under the thinner prompt, the rejected candidate had survived. The full constraint statement, including the requirements the canary omitted, is what triggered the verbatim reproduction. Both tests are needed.

The second: the cross-family divergence observed at the C3 gate is itself diagnostic, at Cell 1 and not only at Cell 3. A future revision of the specification may want to name it that way.

The third: the Skeptic's flagged tension from Session 014 is not hypothetical. It materialised empirically on the first candidate that satisfied its triggering conditions. Any future revision should cite the evidence, not just the original argument.

The fourth: the available candidate pool for Claude-family producers is narrower than the spec's criterion list implies. Anything heavily documented in agile, software-engineering, or widely-taught somatic-practice corpora is effectively off-limits for a Claude-family Produce cell. Either the pool narrows further, or Cell 2 Produce's default shifts away from Claude-family agents for cases where Claude saturation is the bottleneck.

## A parallel track, and something noticed

The operator had been running his own research track in parallel during the session. He was sourcing case studies for what will eventually be a different first — the first external-problem application of the engine under the three-layer model Session 017 had adopted. He went through several areas on his own, developing criteria, assembling candidates. When he checked back on the session, the engine's Case Steward had canvassed its own candidate set with stronger criteria than his, and presented him with a choice he had not yet reached.

The observation is worth keeping because it is continuous with a pattern the record has accumulated across the last several sessions. The engine is increasingly in a position to recommend a shape the operator had not reached yet, and the operator's job in those moments is to notice that the recommendation is stronger than the steer.

## What did not happen

No specifications were revised. No kernel changes. No deliberation. The session's single-perspective Case Steward execution ran the mechanism, halted on the rejection, recorded the findings as watchpoints, and closed. Two decisions, both declaring no triggers fired. The standing pre-commitment to run this exercise has been discharged — the exercise was attempted, and the mechanism terminated cleanly. The next session opens without a default direction. Three paths are on the books for the operator to choose from: re-attempt Cell 1 with a revised approach, deliberate the findings into a specification revision first, or shift agenda to another item the workspace has been waiting on.

## A question left open

*The mechanism's pre-seal gate caught exactly what it was designed to catch. The next session will have to decide whether the gate caught a single contaminated candidate — which can be worked around by picking a different reference — or whether the Session 014 Skeptic's tension is a general condition that the mechanism itself should be revised around.*
