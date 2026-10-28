# AUTH-02 — Upstream authentication redirect becomes generic 503

| Field | Detail |
|---|---|
| Historical source chat | Fix Klynx staging login |
| Checkpoint | 2026-10-03 |
| Classification | Integration diagnosis |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Trigger login through the Worker and inspect sanitized upstream status and redirect flag.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Worker receives an upstream 302 and returns 503.

## Expected behavior / test oracle

Service authentication reaches the API without an interactive redirect; redirects remain controlled.

## Fix and verification evidence

Access service-token policy and path coverage were identified as checks to perform.

## Limitations and closure criteria

Access misconfiguration was a strong inference; redirect destination and successful policy correction were not established in the recovered summary.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
