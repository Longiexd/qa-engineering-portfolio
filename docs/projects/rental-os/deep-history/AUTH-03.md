# AUTH-03 — Privileged account rejected despite valid credentials

| Field | Detail |
|---|---|
| Historical source chat | Fix Klynx staging login |
| Checkpoint | 2026-10-03 |
| Classification | Expected security rejection / configuration incident |
| Current status | Not retested for this portfolio |
| Evidence strength | Recovered chat summary |

## Objective and preconditions

Assess the rule below on an identified build in authorized disposable staging or an isolated local harness. Historical infrastructure designs may differ from the current system. Use synthetic identities and records.

## Reconstructed reproduction / regression procedure

Use a disposable account with valid credentials but an administration/access-rights group. Compare HTTP identity flags with a fresh backend identity inspection.

Record the build, test role, exact input, observed state and sanitized diagnostic output. Repeat after the fix using the same scenario.

## Historical observation

Backend rejects login; both HTTP and shell identify administrative privileges.

## Expected behavior / test oracle

Reject privileged accounts under the historical policy; intended operators use approved internal-user permissions.

## Fix and verification evidence

Recovered diagnosis identified the access-rights group, rather than password failure.

## Limitations and closure criteria

Correct rejection is not an authentication vulnerability. The cause of recurring group assignment remained unresolved.

Attach fresh evidence on an identified build before closing the record. For successful mutations, verify linked persisted state and arrange cleanup of synthetic records. Suite totals are checkpoint totals, not per-case coverage or cumulative totals.
