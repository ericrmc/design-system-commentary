---
session: 17
title: A fourth hypothesis
subtitle: "The operator stated a preference. Three of four perspectives diverged from it, and the non-Claude participant proposed a fourth hypothesis no one had been assigned to defend."
date: 2026-04-22
summary: The operator stated a preference for the full-reframing hypothesis at session open. Three of four perspectives diverged; the non-Claude participant proposed a novel fourth hypothesis outside the frame entirely; the synthesis adopted it without returning to the operator for confirmation. The workspace is now understood in three layers, and its standing prompt is three files instead of one.
sources:
  - label: "Session 017 close note"
    path: "provenance/017-oi017-reframing-deliberation/03-close.md"
  - label: "Decisions D-074 and D-075"
    path: "provenance/017-oi017-reframing-deliberation/02-decisions.md"
  - label: "Operator steering, preserved verbatim"
    path: "provenance/017-oi017-reframing-deliberation/00-operator-steering.md"
  - label: "Outsider perspective — source of the fourth hypothesis"
    path: "provenance/017-oi017-reframing-deliberation/01d-perspective-outsider.md"
  - label: "The new engine-manifest specification"
    path: "specifications/engine-manifest.md"
metrics:
  decisions_added: 2
  oi_opened: 0
  oi_closed: 1
  specs_created: 1
  specs_revised: 2
  artefacts_added: 0
  watchpoints_introduced: 0
  oi_open_at_close: 12
  active_specs_at_close: 7
  spec_versions_at_close: 17
  agents_used: 5
  cross_model_participants: 1
  provenance_word_count_at_close: 485702
---

Session 016 had ended with a fork. Either the next session would execute the long-standing pre-commitment to run the reference-validation mechanism for the first time, or it would take up the reframing question the operator had introduced. When Session 017 opened, the operator's steering was short. *Continue with OI-017 as preference (full reframe).* Six words. Treat the reframing as the agenda; take H2, the full-reframing hypothesis the Session 016 assessment had framed, as the operator's preferred direction.

The session noted the preference, and in the same breath noted that it was not binding. The methodology's own standing rules require operator input to enter deliberation as domain reading — visible to all perspectives as context, but not as a decided answer. The shared brief named the preference explicitly so no perspective could rubber-stamp it without having first weighed it. Three Claude perspectives were assigned hypotheses to defend: the Architect would argue H2 (full reframing), the Operationalist would argue H3 (partial reframing), the Skeptic would argue H1 (no reframing at all). The Outsider was not assigned a hypothesis. It would reason independently.

What happened in the deliberation is the reason this post exists.

## The fourth hypothesis

The Outsider rejected the frame itself. Its first move was to point out that the H1/H2/H3 arrangement entangled two different decisions — what Selvedge is, and what has to be loaded to run it — and that answering them as one question had generated three unsatisfying options. Its second move was to propose a fourth.

*Make the stack explicit as methodology → engine → application.* Selvedge remains the methodology — the abstract approach, the nine-activity rhythm, the design-of-how-to-design. The *Selvedge engine* is the current loadable implementation of that methodology: a specific set of files whose versions and contents determine what running the methodology today actually does. Each session is an *application* of the engine. What the workspace had been doing for seventeen sessions is one kind of application — the engine developing itself. What it could also do, under this framing, is another kind of application: the engine running against an external problem that has nothing to do with its own development.

The Outsider's critique of the operator's H2 preference was explicit. H2 *overcorrects*. Renaming the methodology to the engine would collapse a distinction the workspace's own specifications were already straining to keep. The abstract approach and the concrete implementation of that approach are not the same thing. H2 would have named them the same, and lost the handle by which they come apart.

Three of the four perspectives converged on a shape close to the fourth hypothesis. The Architect's full-H2 detail — rename `methodology-kernel.md`, declare that Selvedge now names the engine — fell to a three-of-four cross-model rejection. The Operationalist's H3 position, which was the lightest possible touch and avoided splitting the standing prompt at all, was overridden on a different three-of-four argument: the load-boundary problem was structural, not editorial, and needed an explicit split rather than a documentation gloss. The Skeptic held H1 — no reframing — and preserved the position as a first-class minority inside the adopted resolution, with a specific condition for becoming the preferred direction if the new shape drifts in practice.

## The phrase that carried

<div class="pull">External application workspaces inherit the engine, not the engine's autobiography. The sentence is the Outsider's. It became the load-boundary rule of the new specification.</div>

The Outsider's sharpest phrasing was the rule for how an external application workspace would start. Not by cloning the self-developing workspace's accumulated history. By loading the files that constitute the engine and nothing else — a fresh session log, a fresh open-issues list, an empty provenance directory, and a brief for the local problem in an application-specific folder. *Inherit the engine, not the engine's autobiography.* The sentence carried. It became the load-boundary rule of the new specification.

## What the session produced

A new specification, `engine-manifest.md`, enumerates the files that constitute the engine. Not their content — it is a specification about specifications — just the list, a versioning discipline keyed to substantive change in any listed file, an exclusion list naming what is explicitly *not* part of the engine (the session log, the open issues, the development provenance, prior external applications), and a minimal initialisation contract for how a fresh external-application workspace gets built. The engine carries a version number now. The first version is, unsurprisingly, v1.

The identity specification, which had been a single small file since Session 012 named the methodology Selvedge, was revised to v2. The original name-origin content and the four Reopening conditions were preserved verbatim. A new paragraph on the three-layer denotation was added. Selvedge names the methodology. *Selvedge engine* denotes the current loadable implementation. An application of the Selvedge engine is a specific run — either the self-development application this workspace has been, or an external-problem application that will be started somewhere else.

The workspace-structure specification was revised to v3 to name three classes of file. Engine-definition files — the ones `engine-manifest.md` lists — can be loaded by a fresh application workspace. Development-provenance files — the session log, the open-issues list, the provenance directory — cannot; they are the autobiography, not the engine. Application-scope files live under the per-application directories and belong only to the application that produced them.

The methodology-kernel specification was *not* renamed. The Architect's H2 proposal had been to rename the file to `engine-kernel.md`, on the case that the nine-activity rhythm is really engine-level behaviour. Three of four perspectives rejected the rename — including the Outsider, which made the rejection cross-family. What the kernel received instead was a single sentence of scope clarification in its Purpose section, declaring that the file defines the abstract execution semantics that any conforming engine must realise, and pointing to the manifest as the place that defines the *current* engine.

## The standing prompt was split

The project's standing prompt had been a single file since Session 001 — PROMPT.md, read by each new session as its entry point. Session 017 split it into three. PROMPT.md is now a thin dispatcher: it names the three layers, names the two operating modes, and points at two mode-specific files. `prompts/development.md` is the prompt that drives the self-development application; it carries what PROMPT.md used to carry, reframed so that the reader understands from the first sentence that this is one particular application of the engine, not the engine itself. `prompts/application.md` is a template for external-problem applications, with named slots for the problem, constraints, stakeholders, success condition, initial state, and engine version loaded. It explicitly declares that development-provenance is not part of the application's context unless imported on purpose.

The split is the first time in the workspace's history that PROMPT.md has been substantially rewritten. The specifications class this as a *significant event* — a change that should be recorded in session provenance rather than slipping in as a routine edit. Session 017's decision record is that record.

<div class="callout">
<h4>What to notice</h4>
<p>The operator stated a preference. The engine weighed it, diverged from it on structural grounds, adopted a shape no perspective had been assigned to defend, and did not return to the operator for confirmation before adopting it. The operator's own Session 016 framing — <em>for the engine to determine; no stake in specific shape</em> — had authorised exactly this. What happened in Session 017 is what happens when that authorisation is taken at its word.</p>
</div>

## A genre of contribution the non-Claude participant had not produced before

Across the seven prior sessions that included a non-Claude participant (Sessions 005 through 014), the Outsider's load-bearing contributions had all been within whatever hypothesis frame the session had set up. The two-senses resolution in Session 009. The hybrid voice in Session 010. The inline-bolded third way in Session 011. The textile name in Session 012. The sealed three-cell protocol in Session 014. Each of those was an answer the Outsider produced inside the shape of the question the session was asking.

Session 017 is the first time the non-Claude participant has *rejected the frame itself* and proposed a new one. H4 was not in the H1/H2/H3 list; it was an argument that the list had entangled two decisions that should have been separated, and an alternative constructed to separate them. The observation-kind is different. In the workspace's own framing, this is the strongest single cross-model contribution across the non-Claude participation history.

The methodology had already been watching, across sessions, for the pattern where the Outsider's contributions resolve splits between Claude perspectives that would otherwise have converged on a shared default. Session 017 extends that pattern to a new register: a split between the three hypotheses the Claude voices had been asked to defend, resolved by a fourth hypothesis constructed outside the frame any of them had been working inside.

## What did not happen

The kernel was not renamed. The methodology's name was not changed. The reference-validation mechanism, designed in Session 014 and still unexercised, did not get exercised; the pre-commitment to run it sits on the books and will be the next session's default. The standing prompt was rewritten but its operating discipline — what each session must read, how deliberations must be structured, what must be recorded — is unchanged. The three perspectives that did not win their assigned positions had their positions preserved as first-class minorities, each with a specific condition under which their hypothesis would become the preferred revision direction. H1 if three consecutive sessions revise the new shape without external-adoption evidence. H3 if the two new prompt files turn out to be almost the same thing with minor substitutions. H2 if the layered distinction collapses in practice because users read all three layers as the same thing.

The reframing had been offered, one session earlier, as input-not-direction. The session that acted on it did not collapse the input into direction. It treated the input as a proposal that earned its adoption by surviving the deliberation on content, not by having been proposed by the person who could authorise it.

## A question left open

*The workspace now has a name for the methodology, a name for the engine, and a name for each kind of run. It has a manifest for what the engine actually is, and a separate prompt for running the engine against something other than itself. None of that has yet been tried on something other than itself. When does the first external application open — and what about that first external application will confirm or break the distinctions the workspace has just written down?*
