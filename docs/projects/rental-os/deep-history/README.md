# Deep history: booking, authentication and multi-tenancy

Recovered records distinguish product defects, expected security behavior, test defects, incidents and coverage gaps. Reproduction procedures are reconstructed from the source discussion. Current fix status has not been verified. No application tests were rerun for this expansion.

| ID | Finding | Classification | Source |
|---|---|---|---|
| [BK-01](BK-01.md) | Optional API failure crashes rental page | Product regression | Improve rental booking workflow |
| [BK-02](BK-02.md) | Missing backend dates crash booking editor | Product regression | Improve rental booking workflow |
| [BK-03](BK-03.md) | Invoiced articles remain editable through quotation actions | Product regression | Improve rental booking workflow |
| [BK-04](BK-04.md) | Fleet state follows dates instead of actual handover | Product lifecycle defect | Fix Klynx OS rental workflows |
| [BK-05](BK-05.md) | Document write-failure test never reaches intended branch | Test implementation defect | Fix Klynx OS rental workflows |
| [AUTH-01](AUTH-01.md) | Browser login fails while direct API login succeeds | Integration incident | Fix Klynx staging login |
| [AUTH-02](AUTH-02.md) | Upstream authentication redirect becomes generic 503 | Integration diagnosis | Fix Klynx staging login |
| [AUTH-03](AUTH-03.md) | Privileged account rejected despite valid credentials | Expected security rejection / configuration incident | Fix Klynx staging login |
| [DEP-01](DEP-01.md) | Deployment connectivity check ignores registered endpoint | Deployment defect | Fix Klynx staging login |
| [TEN-01](TEN-01.md) | Odoo initialization blocked by maintenance database permissions | Provisioning defect | Assess multi-tenant deployment |
| [TEN-02](TEN-02.md) | Tenant smoke test omits required calendar dates | Test implementation defect | Assess multi-tenant deployment |
| [TEN-03](TEN-03.md) | Smoke runner hides failing operation and HTTP status | Test observability defect | Assess multi-tenant deployment |
| [TEN-04](TEN-04.md) | Tenant routing missing from historical demo authentication | Source-review finding | Assess multi-tenant deployment |
| [TEN-05](TEN-05.md) | Registry redesign integration checks skipped locally | Coverage gap / architecture transition | Assess multi-tenant deployment |

## Architecture chronology

The multi-tenant discussion first used isolated per-company stacks and a small routing registry, then proposed a shared backend instance per environment with separate company databases and a PostgreSQL registry. These are different designs. Evidence from one must not be presented as validation of the other.
