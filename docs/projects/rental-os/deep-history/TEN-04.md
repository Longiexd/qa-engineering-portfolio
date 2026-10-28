# TEN-04 — Tenant routing missing from historical demo authentication

| Field | Detail |
|---|---|
| Historical source chat | Assess multi-tenant deployment |
| Checkpoint | Historical September snapshot review |
| Classification | Source-review finding |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary; related test sources inspected where specified |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Inspect the historical authentication route and business-route protections, using the reviewed snapshot only.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Review identified hardcoded demo credentials/constant cookie and missing application-user authentication on business routes.

## Expected behavior / test oracle

Resolve identity and approved tenant server-side; authenticate users and protect business routes.

## Fix and verification evidence

Later implementation summary reported 88 backend and 19 security/configuration checks; retained tenancy source covers obsolete cookies, direct access and tenant routing.

## Limitations and closure criteria

Historical snapshot finding only; not a claim the current system exposes this issue.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
