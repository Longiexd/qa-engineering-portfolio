# AUTH-01 — Browser login fails while direct API login succeeds

| Field | Detail |
|---|---|
| Historical source chat | Fix Klynx staging login |
| Checkpoint | 2026-10-02–03 |
| Classification | Integration incident |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Compare one browser login attempt with a direct backend login using the same authorized synthetic account.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Direct API returned 200 while the serving Worker returned 503.

## Expected behavior / test oracle

Browser login reaches the configured backend; diagnostics identify the failing stage without secrets.

## Fix and verification evidence

Diagnostic changes isolated configuration/upstream failures; a later observation found an upstream 302 converted to 503.

## Limitations and closure criteria

This incident has multiple checkpoints. A 200 at one checkpoint does not prove later browser success.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
