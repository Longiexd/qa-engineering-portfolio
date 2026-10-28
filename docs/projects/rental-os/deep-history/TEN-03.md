# TEN-03 — Smoke runner hides failing operation and HTTP status

| Field | Detail |
|---|---|
| Historical source chat | Assess multi-tenant deployment |
| Checkpoint | Historical multi-tenant rollout |
| Classification | Test observability defect |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary; related test sources inspected where specified |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Make one disposable smoke route fail and inspect the integration runner output.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Failure output did not identify which operation failed or its status.

## Expected behavior / test oracle

Emit bounded operation/status diagnostics and redact credentials, keys and response bodies.

## Fix and verification evidence

Correction reported 19 provisioning/security and 82 backend checks passing; retained provisioning tests cover bounded redaction.

## Limitations and closure criteria

Old workflow reruns used old diagnostics; match the run to its source commit.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
