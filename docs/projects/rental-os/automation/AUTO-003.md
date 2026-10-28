# AUTO-003 — password validation never echoes input

**Source module:** backend/tests/test_tenancy.py
**Exact test function:** test_password_validation_never_echoes_input
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Password validation never echoes input. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
