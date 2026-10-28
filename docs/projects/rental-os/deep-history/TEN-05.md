# TEN-05 — Registry redesign integration checks skipped locally

| Field | Detail |
|---|---|
| Historical source chat | Assess multi-tenant deployment |
| Checkpoint | 2026-10-02 |
| Classification | Coverage gap / architecture transition |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary; related test sources inspected where specified |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Assess the later proposed shared-Odoo, separate-company-database registry implementation.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

59 Python and 19 JavaScript checks passed; 31 PostgreSQL checks were skipped locally.

## Expected behavior / test oracle

Real PostgreSQL startup, company creation, identity mapping and login require successful integration verification before release.

## Fix and verification evidence

Chat explicitly describes the ZIP as a review candidate rather than a validated VPS deployment.

## Limitations and closure criteria

Earlier per-company-container results cannot validate the later shared-instance design.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
