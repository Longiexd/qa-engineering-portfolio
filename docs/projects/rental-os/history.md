# Historical QA and debugging register

Recovered from older chats, including “Fix production workflow merge issues” and “Fix deposit returns and analytics”. These are historical assistant execution summaries, not fresh runs. Counts overlap and must not be summed. Some referenced packages are no longer available locally.

| Date | Workstream | Reported verification | Scope and limitation |
|---|---|---|---|
| 2026-10-10 | [Fleet reminders and compliance](historical-tests/HIST-01.md) | 271 backend and 48 Node checks reported passed | Local summary; Linux build, HTTP and native Odoo verification remained for CI. |
| 2026-10-10 | [Fleet workspaces](historical-tests/HIST-02.md) | 302 backend and 37 frontend checks reported passed | Full Linux build and native integration remained unverified in the summary. |
| 2026-10-10 | [Client plans and navigation](historical-tests/HIST-03.md) | 326 backend and 38 frontend checks reported passed | Linux/Odoo CI still required. Separate earlier retained log has 4 failures; do not merge the runs. |
| 2026-10-12 | [Fleet document onboarding](historical-tests/HIST-04.md) | 362 backend and 42 frontend checks reported passed | Browser walkthrough used simulated API data; live integration remained. |
| 2026-10-12 | [Staging integration diagnosis](historical-tests/HIST-05.md) | 452 backend/deploy and 55 frontend checks reported passed; 13 skips | Historical deployment blocked; integration failure not resolved by local suite success. |
| 2026-10-12 | [Billing duration and contract readiness](historical-tests/HIST-06.md) | 456 backend/deploy and 60 frontend checks reported passed; 13 skips | Full live walkthrough still awaited sign-in; local source reference e83e0aa. |
| 2026-10-13 | [Agent guidance and availability](historical-tests/HIST-07.md) | 121 targeted backend and 77 frontend/Worker checks reported passed | Full backend run stalled; real upload still needed staging verification. |
| 2026-10-14 | [CRM journey synchronization](historical-tests/HIST-08.md) | 236 backend and 72 frontend checks reported passed | Native Odoo integration remained for CI/staging. |
| 2026-10-18 | [CRM, search and mobile](historical-tests/HIST-09.md) | 482 backend and 78 frontend checks reported passed | Native Odoo integration awaited CI; no deployment claimed. |
| 2026-10-22 | [Design regression after deposit update](historical-tests/HIST-10.md) | 517 backend/deploy and 84 frontend checks reported passed; 13 skips | Sources compared against 5055b7d with design baseline d00ee76; no live settlement claim. |

## Failure history preserved

The retained booking-contract log records 60 passes. The retained earlier plans run records 33 passes and 4 failures, including French translation/React text issues. Exact execution dates and revisions are absent from those log files. A later passing summary does not erase the failed checkpoint.

## Possible recurring regression

The 13 October summary reports correcting negative availability labels. The 28 October live assessment again finds inconsistent availability totals. Compare source and deployed builds before concluding the same fix regressed.

## Test defects versus product defects

Older debugging also found a smoke assertion iterating an API response envelope rather than its cars collection, and an Odoo exception assertion needing compatibility correction. Those were test implementation issues; they do not establish application defects. Full native CI verification remained necessary.
