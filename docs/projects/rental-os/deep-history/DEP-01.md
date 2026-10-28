# DEP-01 — Deployment connectivity check ignores registered endpoint

| Field | Detail |
|---|---|
| Historical source chat | Fix Klynx staging login |
| Checkpoint | 2026-10-03 |
| Classification | Deployment defect |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Use an approved existing staging backend endpoint; compare it with the destination selected by deployment attachment checks.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

attach_api constructs a generated destination rather than using the registered existing endpoint; deployment and rollback checks fail.

## Expected behavior / test oracle

Readiness validation targets the registered endpoint and preserves the required API-to-backend network.

## Fix and verification evidence

Direct backend reachability later returned HTTP 200. Related recovery work reported 123 local checks plus 19 proxy checks, then 128 Linux checks.

## Limitations and closure criteria

Reachability is narrower than authenticated business-route correctness; counts belong to related recovery checkpoints.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
