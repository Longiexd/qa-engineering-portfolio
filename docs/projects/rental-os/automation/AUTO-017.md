# AUTO-017 — wrong odoo identity or privileged account is rejected

**Source module:** backend/tests/test_tenancy.py
**Exact test function:** test_wrong_odoo_identity_or_privileged_account_is_rejected
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Wrong odoo identity or privileged account is rejected. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
