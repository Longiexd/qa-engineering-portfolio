# AUTO-007 — sessions are opaque encrypted and not plaintext in registry

**Source module:** backend/tests/test_tenancy.py
**Exact test function:** test_sessions_are_opaque_encrypted_and_not_plaintext_in_registry
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Sessions are opaque encrypted and not plaintext in registry. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
