# AUTO-021 — database bootstrap limits maintenance database access to odoo

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_database_bootstrap_limits_maintenance_database_access_to_odoo
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Database bootstrap limits maintenance database access to odoo. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
