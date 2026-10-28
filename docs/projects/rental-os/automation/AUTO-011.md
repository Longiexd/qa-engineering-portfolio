# AUTO-011 — logout revokes even when odoo is down

**Source module:** backend/tests/test_tenancy.py
**Exact test function:** test_logout_revokes_even_when_odoo_is_down
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Logout revokes even when odoo is down. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
