# TEN-02 — Tenant smoke test omits required calendar dates

| Field | Detail |
|---|---|
| Historical source chat | Assess multi-tenant deployment |
| Checkpoint | Historical multi-tenant rollout |
| Classification | Test implementation defect |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary; related test sources inspected where specified |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Run the API smoke request for Calendar without its required start/end parameters.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Smoke expected 200 but got 422; company logins and preceding routes had passed.

## Expected behavior / test oracle

The smoke request satisfies the route contract with explicit valid dates.

## Fix and verification evidence

Correction reported 83 backend checks passing; retained test_smoke_calendar.py checks actual smoke URLs against a mocked route.

## Limitations and closure criteria

The regression source is present. No new execution or complete live isolation pass is claimed.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
