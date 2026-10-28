# Risk-based test strategy

## Purpose and scope

Assess rental state, financial correctness and fleet readiness in disposable staging. Prioritize money and authorization over cosmetic checks. Product scope includes customers, quotations, invoices, receipts, confirmation, document gates, vehicle pickup/return, inspections and analytics.

## Risks and techniques

| Risk | Technique | Release evidence needed |
|---|---|---|
| Deposits inflate revenue | Reconcile invoice lines, revenue totals and deposit balances | Separate liability and revenue with posted ledger evidence |
| Duplicate receipts/refunds | State transition and retry testing | One financial effect after repeated or uncertain actions |
| Unavailable vehicle rented | Cross-screen reconciliation, negative status names | Same eligibility outcome in Fleet, Calendar and booking |
| Incorrect billing | Date boundaries and arithmetic | One-day/two-day and currency-rounding examples |
| Cross-company access | Negative authorization tests | Two isolated companies and restricted roles |
| Deployment differs from tests | Version and environment comparison | Tested source linked to deployed artifact |

## Entry criteria

Authorized staging target, identified build, disposable records, test roles, approved expected rules, accessible logs and a cleanup owner. Record missing prerequisites as blocked rather than passed.

## Exit criteria

Agreed critical journeys pass on an identified build; financial records reconcile; confirmed defects receive risk decisions; required integration checks pass; unresolved coverage is explicit. The historical 28 October assessment did not satisfy complete release approval.

## Test data and reporting

Use synthetic people, vehicles and monetary transactions. Record setup and remaining state. Every defect includes environment, reproduction, expected/actual behavior, impact, evidence and retest conditions. Keep severity separate from scheduling priority: P2 functional inconsistencies, P3 lower-impact validation/copy issues in this assessment.

## Tools and boundaries

Use existing pytest and Node suites, TypeScript checks, browser exploration, Git/GitHub version history and GitBook Markdown. No claim of ISTQB certification or formal ISO conformity is made. No production writes, external emails or real funds are required for these tests.
