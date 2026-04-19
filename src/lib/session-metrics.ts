import type { CollectionEntry } from 'astro:content';
import { METRICS, type MetricDef } from './metrics';
import { getSessions } from './sessions';

// A single point in a metric series. `value: undefined` means "no data for this
// session" — the sparkline renders a gap rather than a zero.
export interface SeriesPoint {
  session: number;
  value: number | undefined;
}

export interface MetricSeries {
  def: MetricDef;
  points: SeriesPoint[];
  // Latest defined value in the series, for the "current" callout.
  latest: number | undefined;
  // Range of defined values, for y-axis normalisation.
  min: number;
  max: number;
}

function readRaw(
  entry: CollectionEntry<'sessions'>,
  key: string,
): number | undefined {
  const metrics = (entry.data as { metrics?: Record<string, number | undefined> }).metrics;
  return metrics?.[key];
}

function buildSeriesForMetric(
  def: MetricDef,
  sessions: CollectionEntry<'sessions'>[],
): MetricSeries {
  const points: SeriesPoint[] = [];

  if (def.kind === 'snapshot') {
    for (const s of sessions) {
      points.push({ session: s.data.session, value: readRaw(s, def.key) });
    }
  } else {
    // Delta: produce a cumulative series. The point becomes defined at the first
    // session that authors this delta (including the value 0 — zero means "the
    // metric was measured and didn't change," which should plot as a flat line).
    let cumulative: number | undefined = undefined;
    for (const s of sessions) {
      const raw = readRaw(s, def.key);
      if (raw !== undefined) {
        cumulative = (cumulative ?? 0) + raw;
      }
      points.push({ session: s.data.session, value: cumulative });
    }
  }

  const defined = points.map((p) => p.value).filter((v): v is number => v !== undefined);
  const min = defined.length > 0 ? Math.min(...defined) : 0;
  const max = defined.length > 0 ? Math.max(...defined) : 0;
  const latest = defined.length > 0 ? defined[defined.length - 1] : undefined;

  return { def, points, latest, min, max };
}

export async function getAllSeries(): Promise<MetricSeries[]> {
  const sessions = await getSessions();
  return METRICS.slice()
    .sort((a, b) => a.order - b.order)
    .map((def) => buildSeriesForMetric(def, sessions));
}

// Per-session deltas for the compact data line under each session on the index.
// Returns only the metrics flagged `onSessionList`, and only when the value is
// defined and non-zero (zero deltas are uninteresting in the list view).
export interface SessionDelta {
  def: MetricDef;
  value: number;
}

export function getSessionDeltas(entry: CollectionEntry<'sessions'>): SessionDelta[] {
  const out: SessionDelta[] = [];
  for (const def of METRICS) {
    if (!def.onSessionList || def.kind !== 'delta') continue;
    const raw = readRaw(entry, def.key);
    if (raw !== undefined && raw > 0) {
      out.push({ def, value: raw });
    }
  }
  return out.sort((a, b) => a.def.order - b.def.order);
}
