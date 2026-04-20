// Metric definitions for the per-session metrics block in post frontmatter.
// Each metric declares how it aggregates across the series (delta → cumulative;
// snapshot → direct), plus the text that accompanies it on /growth/ and in the
// compact delta line under each session on the sessions index.
//
// To add a new metric: add an entry here, start authoring the field in the next
// session's frontmatter. Earlier sessions' missing values plot as gaps — no
// backfill required.

export type MetricKind = 'delta' | 'snapshot';

export interface MetricDef {
  key: string;
  kind: MetricKind;
  label: string; // short, used as chart title and delta-line noun ("+3 decisions")
  nounSingular: string; // e.g. "decision" — used by the delta line
  nounPlural: string; // e.g. "decisions"
  caption: string; // one sentence, shown under the sparkline on /growth/
  order: number; // display order on /growth/
  onSessionList: boolean; // render in the delta line under each session
}

// Ordered by how they appear on /growth/. Deltas that sum into cumulative
// series come first (those are the "growth" story); snapshots follow.
export const METRICS: MetricDef[] = [
  {
    key: 'decisions_added',
    kind: 'delta',
    label: 'Total decisions',
    nounSingular: 'decision',
    nounPlural: 'decisions',
    caption: 'Each session produces named decisions (D-001, D-002, …). The series is the running total of commitments the methodology has made.',
    order: 10,
    onSessionList: true,
  },
  {
    key: 'artefacts_added',
    kind: 'delta',
    label: 'External artefacts',
    nounSingular: 'artefact',
    nounPlural: 'artefacts',
    caption: 'Deliverables produced for a use outside the methodology itself. The first appears in Session 008.',
    order: 20,
    onSessionList: true,
  },
  {
    key: 'specs_created',
    kind: 'delta',
    label: 'New specifications',
    nounSingular: 'new spec',
    nounPlural: 'new specs',
    caption: 'Sessions in which a brand-new specification file was added. The pace tails off as the normative surface settles.',
    order: 30,
    onSessionList: true,
  },
  {
    key: 'specs_revised',
    kind: 'delta',
    label: 'Specification revisions',
    nounSingular: 'spec revised',
    nounPlural: 'specs revised',
    caption: 'Substantive revisions to existing specs (minor edits are excluded per the OI-002 distinction). Each revision preserves the prior version.',
    order: 40,
    onSessionList: true,
  },
  {
    key: 'oi_opened',
    kind: 'delta',
    label: 'Issues opened (cumulative)',
    nounSingular: 'issue opened',
    nounPlural: 'issues opened',
    caption: 'Total open issues the methodology has ever surfaced. Grows monotonically; closures are tracked separately.',
    order: 50,
    onSessionList: true,
  },
  {
    key: 'oi_closed',
    kind: 'delta',
    label: 'Issues closed (cumulative)',
    nounSingular: 'issue closed',
    nounPlural: 'issues closed',
    caption: 'Total open issues the methodology has resolved, across the whole series.',
    order: 60,
    onSessionList: true,
  },
  {
    key: 'watchpoints_introduced',
    kind: 'delta',
    label: 'Watchpoints introduced',
    nounSingular: 'watchpoint',
    nounPlural: 'watchpoints',
    caption: 'Stress-test observations flagged for later sessions to probe.',
    order: 70,
    onSessionList: true,
  },
  // Snapshots follow.
  {
    key: 'validation_checks_at_close',
    kind: 'snapshot',
    label: 'Validation checks passing',
    nounSingular: 'check',
    nounPlural: 'checks',
    caption: 'The count reported by tools/validate.sh at the session close. The tool came online at Session 002; the series starts at Session 003 because earlier counts were not recorded.',
    order: 80,
    onSessionList: false,
  },
  {
    key: 'oi_open_at_close',
    kind: 'snapshot',
    label: 'Open issues still open',
    nounSingular: 'open issue',
    nounPlural: 'open issues',
    caption: 'Outstanding questions at the close of each session. Plateaued at nine: the methodology has been resolving about as many as it opens.',
    order: 90,
    onSessionList: false,
  },
  {
    key: 'active_specs_at_close',
    kind: 'snapshot',
    label: 'Active specifications',
    nounSingular: 'spec',
    nounPlural: 'specs',
    caption: 'The count of specifications currently in force (excluding superseded versions). Plateaued at four from Session 003 onward — the normative surface has stopped growing in quantity.',
    order: 100,
    onSessionList: false,
  },
  {
    key: 'spec_versions_at_close',
    kind: 'snapshot',
    label: 'Specification versions preserved',
    nounSingular: 'version',
    nounPlural: 'versions',
    caption: 'All specification files, including superseded versions retained for provenance. Grows whenever an active spec is substantively revised.',
    order: 110,
    onSessionList: false,
  },
  {
    key: 'agents_used',
    kind: 'snapshot',
    label: 'Agents in the deliberation',
    nounSingular: 'agent',
    nounPlural: 'agents',
    caption: 'Number of agents convened this session (one orchestrator plus perspectives). Session 001 was unusually wide; recent sessions settle around five.',
    order: 120,
    onSessionList: false,
  },
  {
    key: 'cross_model_participants',
    kind: 'snapshot',
    label: 'Non-Claude participants',
    nounSingular: 'non-Claude participant',
    nounPlural: 'non-Claude participants',
    caption: 'Participants in the deliberation from a different model family than the orchestrator. First appeared in Session 005.',
    order: 130,
    onSessionList: false,
  },
  {
    key: 'provenance_word_count_at_close',
    kind: 'snapshot',
    label: 'Provenance word count',
    nounSingular: 'word',
    nounPlural: 'words',
    caption: 'Total words across every file in provenance/ at the session close. A rough measure of how much reasoning the methodology has recorded.',
    order: 140,
    onSessionList: false,
  },
];

export function metricsInOrder(): MetricDef[] {
  return [...METRICS].sort((a, b) => a.order - b.order);
}

export function sessionListMetrics(): MetricDef[] {
  return metricsInOrder().filter((m) => m.onSessionList);
}
