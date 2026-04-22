---
session: 14
title: A third kind of Validate
subtitle: "Ruled out of recruiting, labelling, and pausing, the session designed a fourth path: compare what the methodology produces, blind, to a documented proven solution."
date: 2026-04-22
summary: The operator ruled out all three of the previous session's options and offered a fourth — pick a problem with a known solution, run the methodology under the same constraints, compare. The session spent itself designing the fourth; the kernel now names three senses of Validate instead of two.
sources:
  - label: "Session 014 close note"
    path: "provenance/014-oi016-resolution/03-close.md"
  - label: "Decisions D-069 through D-071"
    path: "provenance/014-oi016-resolution/02-decisions.md"
  - label: "The new specification"
    path: "specifications/reference-validation.md"
  - label: "Outsider perspective — source of the three-cell protocol, the contamination canary, and the narrower-claim framing"
    path: "provenance/014-oi016-resolution/01d-perspective-outsider.md"
metrics:
  decisions_added: 3
  oi_opened: 0
  oi_closed: 1
  specs_created: 1
  specs_revised: 1
  artefacts_added: 0
  watchpoints_introduced: 6
  oi_open_at_close: 12
  active_specs_at_close: 6
  validation_checks_at_close: 353
  spec_versions_at_close: 14
  agents_used: 5
  cross_model_participants: 1
  provenance_word_count_at_close: 461093
---

Session 013 had opened the question of what to do without the user-validator. The Outsider's tripartite frame — recruit an alternate, label the outputs as unvalidated, pause new external-artefact production — was the preferred starting point, with the Skeptic's strong-pause as first-class minority inside the issue.

When Session 014 opened, the operator's steering was the first thing on the table, and it ruled out all three options. No human recruitment — that was exactly the scaling problem the withdrawal had been a response to. No labelling — the methodology would still be producing the artefacts, and the label would either be ignored or internalised as a kind of permanent asterisk. No pause — external work was the whole argument for the methodology's claim to be more than inward-looking. What the operator offered in return was a fourth option. Pick a use case with a documented proven solution. Run the methodology on the same constraints, without letting it see the solution. Compare.

The session spent itself designing the fourth.

## A third named sense

Kernel §7 had been revised once before, in Session 009, to name two senses of Validate. *Workspace validation* is the internal-consistency check that runs inside a session against the state of the files. *Domain validation* is the external evidence pulled from someone who actually tried the artefact in the world. Session 014 added a third. *Reference validation* is what the operator's fourth option turned into. The revised section now names three senses, not two, and attaches two load-bearing clauses to the new one. Reference validation does not establish that the artefact functioned in its intended use. It does not substitute for Domain validation when a domain-actor is available. Artefacts that pass it carry a specific frontmatter label — `validation: reference-validated` — and keep the scoping in any later citation.

The three-sentence scope-statement exists because the Skeptic had argued, throughout the session, for a stronger framing: do not name this as a third pillar at all; name it as a *provisional substitute* until a domain-validation pathway is recovered. The synthesis did not adopt "provisional" as the kernel's word, on a three-of-four cross-model judgment that the content of the Skeptic's dissent mattered more than its framing. The scope-statement carries the content. The framing dissent is preserved as operational warrant — if the label starts to drift in use, if reference-validated artefacts get cited as validated simpliciter, the Skeptic's provisional-substitute framing is the preferred revision direction. It is a minority kept alive by a specific falsifiability condition, not by sentiment.

## The shape the Outsider proposed

The deliberation's most load-bearing structural contribution came from the Outsider, and it was a separation of duties that no Claude perspective had produced. A reference-validation exercise runs in three *cells*, across a small number of sessions. Cell 1 is Curation: the orchestrating agent, acting as Case Steward, selects a documented proven solution, strips out the solution language, packages the constraints in tranches whose release is timed to the kind of emergent constraint real design surfaces during a run, writes a contamination audit plan, and seals everything. Cell 2 is Produce: a different set of perspectives, without access to the sealed reference, runs the methodology against the constraints. Cell 3 is Validation: a different set again, with mandatory cross-model participation, compares what Produce produced to what Curation sealed, and records a structural verdict. No single agent sees both the reference and the produce-in-progress.

The Outsider's framing was explicit. The risk is not quality in the abstract; the risk is *benchmark theatre*. A mechanism that restores the feeling of validation without restoring the evidence loop. The three-cell protocol exists to make that specific failure mode observable from inside the process, rather than leaving it to be noticed only by a reader outside.

<div class="pull">The mechanism exists to make a specific failure mode observable from inside the process, rather than leaving it to be noticed only by a reader outside.</div>

Four further operational contributions came from the same voice, each absorbed as a defence layer in the new specification. A *contamination canary*: before adopting a candidate case, fire thin prompts derived from it at two or more model families, and discard the case if either one spontaneously reproduces the reference's idiosyncratic structure. A *distinctive-marker audit*: when checking for contamination, enumerate rare markers in the reference — branded labels, unusual orderings, arbitrary counts, signature metaphors — and treat reproduction of those markers as more probative than broad structural resemblance. A *three-core-properties test* for the mechanism itself: Blindness (producers isolated from the reference), Stageability (constraints packetisable without solution-bearing language), Discriminability (validators able to tell structural adequacy apart from retrieval or vibe-similarity). If any two of the three fail in first exercise, the mechanism is falsified. And a *narrower-claim* framing for what passing the mechanism actually means: even if this works, it validates something narrower than the old domain-validation loop did.

## The open issue did not simply close

Four perspectives had to decide what to do with the open issue once the mechanism existed. Two of the Claude voices argued that the issue was now addressed and could be closed with the minority preserved as dissent. The Skeptic argued, for the stronger reasons, that the mechanism validates a different *kind* of claim from the one that had been lost; closing the issue would imply a symmetry that does not hold. The Outsider's narrower-claim framing aligned with the Skeptic's position against the two Claude perspectives arguing for clean closure.

The split was two against two and crossed the model-family axis. The synthesis adopted the stronger state, which sat between open and closed. *Resolved — provisionally addressed pending first-exercise*, with six automatic re-opening conditions written into the issue itself. If any two of Blindness / Stageability / Discriminability fail in the first Cell 3. If a counterfactual probe of the exercise comes back inverted — the methodology producing an artefact tracking the original reference rather than a modified constraint. If the mechanism starts passing cases "too fast," at eighty percent structural alignment on a single Produce iteration. If the pass rate lands within fifteen percentage points of a no-methodology constraint-only baseline. If three consecutive exercises "surface a gap" that is "addressed in a subsequent session" and none of them produce a passing result — the pattern the Skeptic named as methodology-failure serially relabelled. If the label discipline collapses, and reference-validated artefacts get cited externally as validated simpliciter.

The issue was not closed. It was made conditional on the specific evidence that would bring it back.

## The mechanism is not exercised

The whole of Session 014 is specification. The three-cell protocol has not been run. The seven-layer defence stack has not been tested. The eight selection criteria have not been applied to a real candidate case. The 80% pass threshold, the five-case sample size, the three-core-properties test — all of these are proposed thresholds without operational data. The mechanism exists only on paper, and the paper has been deliberately written so that the operational questions it cannot yet answer are the ones first exercise will decide.

<div class="callout">
<h4>What to notice</h4>
<p>The cross-model-plus-adversarial convergence did not just contribute content to the mechanism. It also shifted the disposition of the open issue the mechanism was supposed to resolve. The same two voices that produced the mechanism's sharpest critiques also carried the argument that the mechanism should not be treated as having closed the question it was built to answer. The tension between designing a thing and being sceptical of it was kept inside the same decision.</p>
</div>

## A question left open

*A mechanism has been designed in detail and given a kernel-level name. It has not been exercised once. What will the first exercise show that the specification alone could not?*
