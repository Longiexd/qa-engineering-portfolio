# Evidence register and provenance

| ID | Source | What it supports | Limit |
|---|---|---|---|
| E01 | Detailed retained staging QA report, 28 October 2026; user-supplied summary | Live observations, four functional defects, local suite counts and gaps | Compiled historically; live deployed SHA not independently exposed |
| E02 | Retained booking-contract Node output | 60/60 local checks | Exact execution date/build not in log |
| E03 | Retained plans Node output | 33 pass / 4 fail out of 37 | Earlier incomplete run; not current release verdict |
| E04 | Retained browser results JSON | Theme, mobile and authentication observations | Build/date absent; no full accessibility claim |
| E05 | Older chat: “Fix production workflow merge issues” | Dated 10–19 October debugging and verification summaries | Secondary evidence; some linked artifacts no longer present |
| E06 | Older chat: “Fix deposit returns and analytics” | Deposit fixes, design regression correction, local/CI distinctions | Source summary; not proof of live settlement |

## Integrity and public presentation

Private source fingerprints are retained in the local compilation record, outside this repository. Full staging screenshots are withheld because they contain operational records. Three cropped original excerpts are published and linked from QA-01 and QA-04; only cropping was applied. Public reports replace record identifiers and do not include credentials, private target addresses or customer data. No recreated screenshot is represented as original evidence.

## Limits

This is a recovered sample of available history, not an exhaustive audit of every month of work. Historical assistant summaries establish that checks were reported; retained raw logs provide stronger execution evidence. The portfolio does not claim those checks were rerun during documentation assembly.

## Expanded recovery

E07: “Improve rental booking workflow” — 14–15 September summaries, including three reproduced regressions against b0c079c.

E08: “Fix Klynx staging login” — 2–3 October diagnostic checkpoints; successful direct API login, Worker failures, endpoint/network mismatch and privileged-account rejection.

E09: “Assess multi-tenant deployment” — architecture review, provisioning corrections, smoke-test defects and a later registry redesign with skipped integration checks.

E10: “Fix Klynx OS rental workflows” — fleet lifecycle, paperwork, test-fixture correction and deployment recovery checkpoints.

E11: Retained tenancy/provisioning/calendar regression source and log summaries. The retained backend log records 88 passes; a separate security log records 19 passes. Build/date are not embedded, so these logs are not tied to a specific deployed release.

The exact chat named “Implement booking workflow” was not found in the accessible local index. Related booking discussions above were recovered; exhaustive recovery is not claimed.
