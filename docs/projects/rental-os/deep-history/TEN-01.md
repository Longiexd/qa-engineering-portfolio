# TEN-01 — Odoo initialization blocked by maintenance database permissions

| Field | Detail |
|---|---|
| Historical source chat | Assess multi-tenant deployment |
| Checkpoint | Historical multi-tenant rollout |
| Classification | Provisioning defect |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary; related test sources inspected where specified |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Initialize disposable isolated Odoo/PostgreSQL services with restricted database privileges; repeat startup.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Initialization needed maintenance-database access; revoking it after initialization would also break later startup.

## Expected behavior / test oracle

PUBLIC has no CONNECT; the dedicated Odoo role has required CONNECT without SUPERUSER, CREATEDB or CREATEROLE.

## Fix and verification evidence

Three-file correction reported 94 backend checks passing; retained provisioning test asserts the privilege contract.

## Limitations and closure criteria

Real Docker integration still required CI. Do not apply this historical provisioning design to the current deployment without checking architecture.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
